---
id: wu_checkout_order_created
title: 動作 - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created {#action-wucheckoutordercreated}

在結帳訂單完全建立之後觸發。

外掛程式可以使用此動作來為具有獨立計費週期的產品建立次要會員資格。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | 購物車/訂單物件。 |
| $customer | `\WP_Ultimo\Models\Customer` | 客戶物件。 |
| $membership | `\WP_Ultimo\Models\Membership` | 主要會員資格。 |
| $payment | `\WP_Ultimo\Models\Payment` | 付款物件。 |

### 自 {#since}

- 2.5.0
### 來源 {#source}

定義於 [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) 的第 891 行
