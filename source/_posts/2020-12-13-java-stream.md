---
title: Java Stream
tags:
  - Java Basics
categories: Java
date: 2020-12-13 12:43:34
---
# 知识点

1. 集合
   1. 集合和Stream的区别
2. Stream
   1. 中间操作
   2. 终端操作

# 集合
所有语言中最基础的操作就是对数据集合管理，集合可以理解为语言中对数据结构的实现，例如数组，List，Map 为主要的数据类型。
集合就是对数据的储存

## 集合和Stream的区别

我们可以理解为集合是数据的静态储存，Stream是数据的动态处理。

# Stream 

Stream 流，描述了数据在处理过程中采用了何种方式来处理数据。数据就像水流一样流过一个一个的处理节点。Stream 是对反应式编程的一种实现。

Stream 只能遍历一次

## 中间操作

| 方法名    | 函数接口              | 签名                       | 简介                                         |
| --------- | --------------------- | -------------------------- | -------------------------------------------- |
| filter    | Predicate<T>          | T -> boolean               | 过滤数据，保留结果为true的数据               |
| map       | Function<T,R>         | T -> R                     | 数据处理转换，数据映射，将数据转换为新的数据 |
| flatMap   | Function<T,Stream<R>> | (T,Stream<R>) -> Stream<R> |                                              |
| distinct  | -                     | -                          | 去重                                         |
| limit     | -                     | -                          | 限制获取多少个                               |
| skip      | -                     | -                          | 限制跳过多少个                               |
| takeWhile | Predicate<T>          | T -> boolean               | [Java9]                                      |
| dropWhile | Predicate<T>          | T -> boolean               | [Java9]                                      |

## 终端操作

| 方法名    | 函数接口         | 签名      | 简介         |
| --------- | ---------------- | --------- | ------------ |
| forEach   | Consumer<T>      | T -> void | 遍历循环处理 |
| toArray   | -                | -         | -            |
| reduce    | -                | -         | -            |
| collect   | Collector<T,A,R> | -         | -            |
| min       | Comparator<T>    | -         | -            |
| max       | -                | -         | -            |
| count     | -                | -         | -            |
| findFirst | -                | -         | -            |
| findAny   | -                | -         | -            |
| anyMatch  | -                | -         | -            |
| allMatch  | -                | -         | -            |
| noneMatch | -                | -         | -            |