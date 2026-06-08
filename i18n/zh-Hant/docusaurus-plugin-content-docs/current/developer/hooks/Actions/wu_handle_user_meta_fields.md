---
id: wu_handle_user_meta_fields
title: 動作 - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

允許外掛開發者根據需求，以不同的方式儲存使用者元資料。

## 參數

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $meta_repository | `array` | 包含元資料欄位的列表，結構為鍵 => 值。 |
| $user | `\WP_User` | WordPress 使用者物件。 |
| $customer | `\Customer` | Ultimate Multisite 客戶物件。 |
| $checkout | `\Checkout` | 結帳類別。 |

### 自

- 2.0.4
### 來源

定義於 [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) 第 1244 行
