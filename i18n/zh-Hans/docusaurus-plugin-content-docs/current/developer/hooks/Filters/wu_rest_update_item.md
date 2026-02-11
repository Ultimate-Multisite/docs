---
id: wu_rest_update_item
title: 过滤器 - wu_rest_update_item
sidebar_label: wu_rest_update_item
_i18n_hash: 46a659e3004edbe285434103f81bd733
---
# 过滤器: wu_rest_update_item

过滤器用于判断是否允许继续请求。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $allowed | `bool` | 初始返回值。 |
| $rest_base | `array` | 实体 slug。 |
| $this | `\Base_Manager` | 对象实例。 |

### Since

- 2.0.0

### Source

在 [`inc/apis/trait-rest-api.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-rest-api.php#L414) 第 414 行定义
