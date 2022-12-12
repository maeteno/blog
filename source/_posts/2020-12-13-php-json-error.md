---
title: PHP中JSON解析错误排查
date: 2020-12-13 12:21:45
tags: 
	- JSON
categories: PHP
---

# 概述
今天遇到在接收一个接口返回的时候，对返回的json字符串进行`json_decode`的时候返回`null`。但是返回的字符串打印到日志中确实是一个json格式的。在`json.cn`上也是可以正常格式化的。尝试很多次之后。通过 `json_last_error_msg()` 拿到了返回错误信息：`Syntax error`。 通过搜索终于查找到解决方案：

```php
$content = trim($content, "\xEF\xBB\xBF");
$data = json_decode($content, true);
```
错误的原因是因为返回的字符串带了UTF8编码的BOM头。即`\xEF\xBB\xBF`，通过`trim()`将其修剪掉即可。

# 总结

PHP 中的`json_decode`,`json_encode`在遇到错误的时候，不会抛异常或者返回错误信息。我们可以通过`json_last_error()`获取最新的错误码，或者通过`json_last_error_msg()`来获取错误信息，再去排查问题。

## JSON error codes

| Value | Constant                         | Meaning                                                     | Availability |
| ----- | -------------------------------- | ----------------------------------------------------------- | ------------ |
| 0     | JSON_ERROR_NONE                  | No error has occurred                                       |              |
| 1     | JSON_ERROR_DEPTH                 | The maximum stack depth has been exceeded                   |              |
| 2     | JSON_ERROR_STATE_MISMATCH        | Invalid or malformed JSON                                   |              |
| 3     | JSON_ERROR_CTRL_CHAR             | Control character error, possibly incorrectly encoded       |              |
| 4     | JSON_ERROR_SYNTAX                | Syntax error                                                |              |
| 5     | JSON_ERROR_UTF8                  | Malformed UTF-8 characters, possibly incorrectly encoded    | PHP 5.3.3    |
| 6     | JSON_ERROR_RECURSION             | One or more recursive references in the value to be encoded | PHP 5.5.0    |
| 7     | JSON_ERROR_INF_OR_NAN            | One or more NAN or INF values in the value to be encoded    | PHP 5.5.0    |
| 8     | JSON_ERROR_UNSUPPORTED_TYPE      | A value of a type that cannot be encoded was given          | PHP 5.5.0    |
| 9     | JSON_ERROR_INVALID_PROPERTY_NAME | A property name that cannot be encoded was given            | PHP 7.0.0    |
| 10    | JSON_ERROR_UTF16                 | Malformed UTF-16 characters, possibly incorrectly encoded   | PHP 7.0.0    |

# 参考
- [json error ](https://www.php.net/manual/en/function.json-last-error.php)
- [BOM头](https://www.cnblogs.com/qinmengjiao123-123/p/8325646.html)
- [json_decode报错](https://blog.csdn.net/ghoiufyia/article/details/79158589)
