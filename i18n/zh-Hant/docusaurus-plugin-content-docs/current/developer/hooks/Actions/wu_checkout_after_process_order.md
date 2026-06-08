---
id: wu_checkout_after_process_order
title: 動作 - wu_checkout_after_process_order
sidebar_label: wu_checkout_after_process_order
_i18n_hash: 40a5c096f223c5f82a109163c29284d3
---
# 動作：wu_checkout_after_process_order

允許開發人員觸發額外的鉤子。

## 參數

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $checkout | `\Checkout` | 結帳物件實例。 |
| $cart | `\Cart` | 結帳購物車實例。 |

### 自

- 2.0.9
### 來源

定義於 [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1013) 的第 1013 行
