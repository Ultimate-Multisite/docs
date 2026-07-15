---
id: wu_generated_username_from_email
title: 過濾器 - wu_generated_username_from_email
sidebar_label: wu_generated_username_from_email
_i18n_hash: ad708562b0c2c9c80d1d5845ef1e67b7
---
# Filter: wu_generated_username_from_email

過濾生成的客戶帳號名稱。

## 參數 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $username | `string` | 生成的帳號名稱。 |
| $email | `string` | 新客戶的電子郵件地址。 |
| $new_user_args | `array` | 新使用者參數陣列，可能包含名字和姓氏。 |
| $suffix | `string` | 要附加到帳號名稱以確保其唯一性的字串。 |

### Since {#since}

- 3.7.0
### Source {#source}

定義於 [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L488) 的第 488 行
