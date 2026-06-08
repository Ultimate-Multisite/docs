---
id: retrieve_password_title
title: 過濾器 - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# 過濾器：retrieve_password_title

用於過濾密碼重設電子郵件的主旨。

## 參數

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $title | `string` | 預設的電子郵件主旨。 |
| $user_login | `string` | 使用者的帳號名稱。 |
| $user_data | `\WP_User` | WP_User 物件。 |

### 可用自

- 2.8.0
- 4.4.0：新增了 <code>$user_login</code> 和 <code>$user_data</code> 參數。
### 來源

定義於 [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) 的第 135 行。


## 回傳值
預設的電子郵件主旨。
