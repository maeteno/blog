---
title: Redis Cache Inconsistency - Delayed Double Deletion
tags:
  - Redis
categories: DB
date: 2023-01-03 20:54:34
---

# Redis Cache Inconsistency - Delayed Double Deletion

## Overview
Redis cache inconsistency refers to the mismatch between data actually stored in the database and data cached in Redis. The root cause of this problem is data updates. Only when data is updated can it lead to inconsistency between data stored in two locations (DB and Redis). So, is it sufficient to simply update both the database and Redis when updating data? This seemingly straightforward solution often has many pitfalls. Since updates to these two data sources are not atomic, there are numerous issues under concurrent conditions. To simplify the management of multiple data sources, the general approach is to update the database and delete the cache to invalidate it. This way, when data is retrieved, it will automatically fetch the latest data from the database.

So, is it enough to just update the data and delete the Redis cache to achieve cache consistency?

## How to Delete Cache
Invalidating the cache when updating data, so that the latest data is retrieved from the database when needed, thereby refreshing the cache to achieve consistency. This approach is correct. But when should we delete the cache? Before updating the database or after? Common sense tells us that it should be after updating the database.

### Delete Cache After Update
We delete the cache after successfully updating the database. Since the two operations are not atomic, threads reading data between these operations will still briefly read old cached data, which is not a major issue. However, in extreme concurrent scenarios, dirty data may occur.
![Delayed Double Deletion](/images/更新后删除缓存.svg)

### Dirty Data Under Concurrent Updates
When multiple threads update the cache simultaneously, and there are threads reading data at the same time, each update operation may execute interleaved. In some cases, dirty data will be generated.
![Dirty Data in Extreme Cases After Update](/images/更新后删除缓存极限情况下的脏数据.svg)

### Delayed Deletion
The reason for dirty data is that under concurrent conditions, the read operation occurs before the database update, but the cache write operation occurs after cache deletion. Therefore, we can delay the cache deletion operation until after the dirty data is written to the cache. This way, we can delete the dirty cached data. Although delayed deletion can alleviate dirty data cleanup under concurrent conditions, it also greatly extends the cache update time.
![Delayed Deletion](/images/延迟删除.svg)

### Delayed Double Deletion
We can delete data before updating, which can greatly reduce cache latency. When deleting data before updating, as long as the data read does not occur before the database update, the latest data can still be read.
![Delayed Double Deletion](/images/延迟双删-1.svg)

When dirty data occurs in extreme cases, delayed deletion can compensate for the deletion of dirty data, thereby achieving eventual data consistency.
![Delayed Double Deletion](/images/延迟双删-2.svg)

## Summary
Overall, we can solve cache data inconsistency issues under concurrent conditions through **delayed double deletion**:
1. Delete cache
2. Update database
3. Wait for a delayed period
4. Delete cache again

Fundamentally, the essence of this problem is actually a **concurrency issue**. If we assume an extreme case where delayed deletion still occurs before writing data (with higher probability in multi-replica scenarios), it will still lead to data inconsistency. We can solve the problem by adding distributed locks.
