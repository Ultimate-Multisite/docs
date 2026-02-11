---
id: retrieve_password_title
title: フィルタ - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# フィルタ: retrieve_password_title

パスワードリセットメールの件名をフィルタします。

## Parameters

| 名前 | タイプ | 説明 |
|------|------|-------------|
| $title | `string` | デフォルトのメールタイトル。 |
| $user_login | `string` | ユーザーのユーザー名。 |
| $user_data | `\WP_User` | WP_User オブジェクト。 |

### 以降

- 2.8.0
- 4.4.0: <code>$user_login</code> と <code>$user_data</code> パラメータが追加されました。

### ソース

定義されている [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) は 135 行目です。

## 戻り値

デフォルトのメールタイトル。
