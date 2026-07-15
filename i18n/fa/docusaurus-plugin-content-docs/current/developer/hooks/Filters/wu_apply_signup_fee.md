---
id: wu_apply_signup_fee
title: فیلتر - wu_apply_signup_fee
sidebar_label: wu_apply_signup_fee
_i18n_hash: b6a5ac9b0ef2d459003fa02766ad6f81
---
# Filter: wu_apply_signup_fee

این فیلتر تعیین می‌کند که آیا هزینه ثبت‌نام باید اعمال شود یا خیر.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $add_signup_fee | `bool` | اینکه آیا هزینه ثبت‌نام باید اضافه شود یا خیر. |
| $product | `object` | آبجکت سطح عضویت. |
| $this | `\WP_Ultimo\Checkout\Cart` | آبجکت ثبت‌نام. |

### Since {#since}

- 3.1
### Source {#source}

در [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1769) در خط ۱۷۶۹ تعریف شده است.
