---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: فیلتر - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# فیلتر: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

به توسعه‌دهندگان اجازه می‌دهد تا استفاده از WooCommerce Subscriptions را اجباری کنند.

به طور پیش‌فرض، این افزونه (add-on) بررسی می‌کند که آیا (۱) WooCommerce Subscriptions وجود دارد (چه به صورت افزونه کامل و چه هسته اصلی بسته‌بندی شده)، و سپس (۲) تنظیمات فعال‌سازی استفاده از WooCommerce Subscriptions را بررسی می‌کند.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | اگر در حال حاضر نیاز داریم از Woo Subs استفاده کنیم. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | شیء فعلی. |

### منبع {#source}

در [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) در خط ۳۶۱ تعریف شده است.

## بازگشت (Returns) {#returns}
`true` برای استفاده از WooCommerce Subs، و `false` برای عدم استفاده.
