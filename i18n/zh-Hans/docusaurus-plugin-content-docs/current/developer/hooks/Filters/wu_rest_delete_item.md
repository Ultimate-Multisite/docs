---
id: wu_rest_delete_item
title: 过滤器 - wu_rest_delete_item
sidebar_label: wu_rest_delete_item
_i18n_hash: ea4a29625c1aef260edc421b300d59cc
---
# 过滤器：wu_rest_delete_item

过滤器用于判断是否允许继续请求。

## 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| $allowed | `bool` | 初始返回值。 |
| $rest_base | `array` | 实体 slug。 |
| $this | `\Base_Manager` | 对象实例。 |

### 版本

- 2.0.0

### 源码

定义于 [`inc/apis/trait-rest-api.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-rest-api.php#L440) 第 440 行
