---
id: retrieve_password_title
title: 过滤器 - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# 过滤器: retrieve_password_title

过滤密码重置邮件的主题。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $title | `string` | 默认邮件标题。 |
| $user_login | `string` | 用户的用户名。 |
| $user_data | `\WP_User` | WP_User 对象。 |

### 自

- 2.8.0
- 4.4.0：添加了 <code>$user_login</code> 和 <code>$user_data</code> 参数。

### 来源

定义在 [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) 行 135

## 返回值

默认邮件标题。
