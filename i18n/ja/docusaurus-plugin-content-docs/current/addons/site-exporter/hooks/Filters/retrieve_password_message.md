---
id: retrieve_password_message
title: フィルター - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# フィルター: retrieve_password_message

パスワードリセットメールのメッセージ本文をフィルターします。

## パラメータ

| 名前 | 型 | 説明 |
|------|------|-------------|
| $message | `string` | Default mail message. |
| $key | `string` | The activation key. |
| $user_login | `string` | The username for the user. |
| $user_data | `\WP_User` | WP_User object. |

### 導入

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### ソース

149行目の [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) で定義されています


## 戻り値
デフォルトのメールメッセージ。
