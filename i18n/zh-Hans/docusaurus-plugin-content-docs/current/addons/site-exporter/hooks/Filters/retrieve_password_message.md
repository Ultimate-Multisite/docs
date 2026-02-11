---
id: retrieve_password_message
title: |
  ---
  title: "retrieve_password_message 过滤器"
  description: "过滤用户请求重置密码时显示的消息。"
  ---

  ## retrieve_password_message

  此过滤器允许您修改用户请求密码重置时显示给用户的消息。

  ### 参数

  - `$message` (string) – 默认消息。
  - `$user_login` (string) – 用户的登录名。
  - `$user_data` (WP_User) – 用户对象。

  ### 用法

  ```php
  add_filter( 'retrieve_password_message', 'my_custom_message', 10, 3 );
  function my_custom_message( $message, $user_login, $user_data ) {
      return 'Your custom message.';
  }
  ```
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# 过滤器：retrieve_password_message

过滤密码重置邮件的正文。

## 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| $message | `string` | 默认邮件正文。 |
| $key | `string` | 激活密钥。 |
| $user_login | `string` | 用户的用户名。 |
| $user_data | `\WP_User` | WP_User 对象。 |

### 自

- 2.8.0
- 4.1.0: 添加了 <code>$user_login</code> 和 <code>$user_data</code> 参数。

### 来源

定义在 [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) 的第 149 行

## 返回

默认邮件正文。
