---
id: retrieve_password_message
title: 過濾器 - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

過濾密碼重設郵件的訊息內容。

## 參數

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | 預設的郵件訊息內容。 |
| $key | `string` | 啟用金鑰。 |
| $user_login | `string` | 使用者的帳號名稱。 |
| $user_data | `\WP_User` | WP_User 物件。 |

### 可用自

- 2.8.0
- 4.1.0：新增了 <code>$user_login</code> 和 <code>$user_data</code> 參數。
### 來源

定義於 [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) 的第 149 行。


## 回傳
預設的郵件訊息內容。
