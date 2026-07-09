---
id: wu_checkout_after_process_order
title: عمل - wu_checkout_after_process_order
sidebar_label: wu_checkout_after_process_order
_i18n_hash: 40a5c096f223c5f82a109163c29284d3
---
# Action: wu_checkout_after_process_order {#action-wucheckoutafterprocessorder}

این اکشن به توسعه‌دهندگان اجازه می‌دهد تا هوک‌های (hooks) اضافی را فعال کنند.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $checkout | `\Checkout` | نمونه شیء (object instance) تسویه حساب. |
| $cart | `\Cart` | نمونه سبد خرید (cart) تسویه حساب. |

### از نسخه {#since}

- 2.0.9
### منبع {#source}

در [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1013) در خط ۱۰۱۳ تعریف شده است.
