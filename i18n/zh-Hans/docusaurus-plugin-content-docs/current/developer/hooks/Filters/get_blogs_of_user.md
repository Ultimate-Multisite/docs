---
id: get_blogs_of_user
title: 过滤 - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# 过滤器: get_blogs_of_user

复制了原始 WP 过滤器，以确保完整性。

过滤用户所属站点列表。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $sites | `object[]` | 属于用户的站点对象数组。 |
| $user_id | `int` | 用户 ID。 |
| $all | `bool` | 是否返回所有站点，包括标记为 'deleted'、'archived' 或 'spam' 的站点。默认 false。 |

### 版本

- 2.0.11

### 源码

在 [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) 第 851 行定义。
