---
id: wu_handle_customer_meta_fields
title: Action - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# 動作: wu_handle_customer_meta_fields

讓外掛開發者可以根據需要以不同的方式儲存中繼資料。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $meta_repository | `array` | 包含中繼欄位清單，結構為鍵 => 值。 |
| $customer | `\Customer` | Ultimate Multisite 客戶物件。 |
| $checkout | `\Checkout` | 結帳類別。 |

### 自 {#since}

- 2.0.0
### 來源 {#source}

定義於 [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) 的第 1211 行
