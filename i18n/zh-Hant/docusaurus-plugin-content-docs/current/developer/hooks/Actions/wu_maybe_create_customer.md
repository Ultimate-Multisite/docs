---
id: wu_maybe_create_customer
title: 動作 - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer {#action-wumaybecreatecustomer}

允許外掛開發者在客戶被新增時執行額外的操作。

例如，我們可以在這裡加入鉤子 (hooks)，將客戶建立的 user 資訊同步到主站。

## 參數 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $customer | `\Customer` | 可能已經建立的客戶物件。 |
| $checkout | `\Checkout` | 當前的結帳類別。 |

### 可用自 {#since}

- 2.0.0
### 來源 {#source}

定義於 [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) 的第 1156 行
