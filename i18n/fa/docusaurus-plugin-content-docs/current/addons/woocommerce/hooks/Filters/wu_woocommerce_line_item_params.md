---
id: wu_woocommerce_line_item_params
title: فیلتر - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# فیلتر: wu_woocommerce_line_item_params

این فیلتر پارامترهایی را که برای ساخت آیتم‌های خطی (line items) در سبد خرید WooCommerce استفاده می‌شوند، قبل از اینکه مشتری به صفحه تسویه حساب WooCommerce هدایت شود، تغییر می‌دهد.

## پارامترها

| نام | نوع | توضیحات |
|------|------|-------------|
| $line_item_params | `array` | پارامترهای آیتم خطی سبد خرید. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | نمونه (instance) آیتم خطی Ultimate Multisite. |
| $wc_product | `\WC_Product` | محصول WooCommerce. |

### از نسخه

- 2.0.0
### منبع

در [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) در خط ۶۶۲ تعریف شده است.

## مقدار بازگشتی
پارامترهای آیتم خطی اصلاح شده.
