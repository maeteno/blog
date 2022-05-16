---
title: MongoDB 聚合查询
tags:
  - DB
  - Mongo
  - MongoTemplate
categories: DB
date: 2022-04-23 20:49:53
---

# 概述
Mongo 的 aggregate 类似Java的Stream。是一种流式的操作，和 Linux 的管道类似。aggregate 的参数是一个数组。数据依次通过数组中的每一个操作，传递到下一个操作。所以数组中的操作顺序对结果是有影响的。其中每一个操作的入参都是上一个操作的出参。数组中的每一个操作就类似 Java Stream 中的 Map 操作。
其中的操作可以理解为是一种DSL。`$`开头的对象key就是一个动作，表示需要执行的行为。而对象值里的`$`就是一种取值行为。
另外一点就是。对 MongoDB 的所有操作需要跳出SQL查询对我们的影响。不能以结构化查询语句的思维去考虑 MongoDB 的查询。可理解为 MongoDB 是使用一种披着JS外衣的DSL查询。它的查询更贴近JS，而不是SQL。

# 实操

## 准备数据
```js
// 准备数据
for (let index = 1000; index < 1200; index++) {
    db.getCollection('student').insertOne({
        no: index,
        name: `STU-${index}`,
    })
}
db.getCollection('student').find();

// course
for (let index = 1; index < 6; index++) {
    db.getCollection('course').insertOne({
        no: `course-no-${index}`,
        name: `course-name-${index}`
    })
}

db.getCollection('course').find();

// selection
for (let index = 1000; index < 1200; index++) {
    for (let i = 0; i < 3; i++) {
        let no = Math.floor(Math.random() * 5) + 1;
        db.getCollection('selection').updateOne(
            {
                'student_no': index,
                'course_no': `course-no-${no}`
            },
            {
                $set: {
                    'student_no': index,
                    'course_no': `course-no-${no}`
                }
            },
            {
                upsert: true,
            }
        )
    }
}
db.getCollection('selection').find();
```

# 资料
-  [官方文档](https://www.mongodb.com/docs/manual/reference/command/aggregate/#stable-api)
-  [中文资料](https://haicoder.net/mongodb/mongodb-aggregate.html)