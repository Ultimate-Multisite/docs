---
id: wu_apply_signup_fee
title: 過濾器 - wu_apply_signup_fee
sidebar_label: wu_apply_signup_fee
_i18n_hash: b6a5ac9b0ef2d459003fa02766ad6f81
---
# 過濾器：wu_apply_signup_fee

用於判斷是否需要收取註冊費。

## 參數

| Name | Type | Description |
|------|------|-------------|
| $add_signup_fee | `bool` | 是否要加上註冊費。 |
| $product | `object` | 會籍級別物件。 |
| $this | `\WP_Ultimo\Checkout\Cart` | 註冊物件。 |

### 從

- 3.1
### 來源

定義於 [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1769) 的第 1769 行
