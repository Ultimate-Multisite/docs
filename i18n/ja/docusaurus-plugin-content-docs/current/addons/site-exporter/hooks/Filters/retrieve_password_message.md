---
id: retrieve_password_message
title: >
  ---

  title: retrieve_password_message

  description: ユーザーがパスワードリセットをリクエストした際に送信されるメッセージをフィルタリングします。

  ---


  ## 説明


  `retrieve_password_message`
  フィルタは、ユーザーがパスワードリセットをリクエストした際に送信されるメッセージを変更できるようにします。このフィルタは、メッセージ、キー、およびユーザー情報を受け取ります。


  ## パラメータ


  - `$message` (string) – 送信されるメッセージ。

  - `$key` (string) – パスワードリセットキー。

  - `$user` (WP_User) – ユーザーオブジェクト。


  ## 使用例


  ```php

  add_filter( 'retrieve_password_message', 'my_retrieve_password_message', 10, 3
  );

  function my_retrieve_password_message( $message, $key, $user ) {
      // modify message
      return $message;
  }

  ```
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# フィルタ: retrieve_password_message

パスワードリセットメールの本文をフィルタリングします。

## Parameters

| 名前 | タイプ | 説明 |
|------|------|-------------|
| $message | `string` | デフォルトのメールメッセージ。 |
| $key | `string` | 有効化キー。 |
| $user_login | `string` | ユーザーのユーザー名。 |
| $user_data | `\WP_User` | WP_User オブジェクト。 |

### Since

- 2.8.0
- 4.1.0: <code>$user_login</code> と <code>$user_data</code> パラメータが追加されました。

### Source

定義されている [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) 行 149 で

## Returns

デフォルトのメールメッセージ。
