---
id: wu_get_checkout_variables
title: 過濾器 - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables {#filter-wugetcheckoutvariables}

讓外掛開發者能夠過濾結帳頁面預設的變數。

請注意，如果缺少任何鍵值，可能會導致前端的結帳功能完全無法使用。

## 參數 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | 本地化變數。 |
| $checkout | `\Checkout` | 結帳類別。 |

### Since {#since}

- 2.0.0
### Source {#source}

定義於 [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) 的第 1970 行


## 回傳 {#returns}
新的變數陣列。
