---
id: wu_add_product_setup_fee_line_item
title: فیلتر - wu_add_product_setup_fee_line_item
sidebar_label: wu_add_product_setup_fee_line_item
_i18n_hash: 7175266054e611752e49e762b103e858
---
# فیلتر: wu_add_product_setup_fee_line_item

به توسعه‌دهندگان اجازه می‌دهد تا تغییراتی در آیتم خط هزینه راه‌اندازی (setup fee line item) ایجاد کنند.

## پارامترها

| نام | نوع | توضیحات |
|------|------|-------------|
| $setup_fee_line_item | `array` | پارامترهای آیتم خط هزینه راه‌اندازی. |
| $product | `\WP_Ultimo\Models\Product` | محصول مرتبط با هزینه راه‌اندازی. |
| $cart | `\WP_Ultimo\Checkout\Cart` | آبجکت سبد خرید. |

### از نسخه

- 2.1
### منبع

در [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1790)، خط ۱۷۹۰ تعریف شده است.


## مقدار بازگشتی
