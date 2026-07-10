---
id: wu_username_from_email
title: 過濾器 - wu_username_from_email
sidebar_label: wu_username_from_email
_i18n_hash: ab432839e318d008d082383ff5a18467
---
# 篩選器：wu_username_from_email {#filter-wuusernamefromemail}

用於篩選新客戶的帳號名稱。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $username | `string` | 客戶的帳號名稱。 |
| $email | `string` | 新客戶的電子郵件地址。 |
| $new_user_args | `array` | 新使用者參數陣列，可能包含名字和姓氏。 |
| $suffix | `string` | 要附加到帳號名稱以確保其唯一性的字串。 |

### 適用版本 {#since}

- 2.0.0
### 來源 {#source}

定義於 [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L516) 的第 516 行
