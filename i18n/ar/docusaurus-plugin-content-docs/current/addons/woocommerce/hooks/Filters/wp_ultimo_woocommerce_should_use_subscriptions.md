---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: مرشح - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# مرشح: wp_ultimo_woocommerce_should_use_subscriptions

السماح للمطورين بإجبار استخدام اشتراكات WooCommerce.

بشكل افتراضي، يتحقق الملحق مما إذا كان (1) اشتراكات WooCommerce موجودة (إما الإضافة الكاملة أو النواة المدمجة)، ثم (2) يتحقق من الإعداد الذي يتيح استخدام اشتراكات WooCommerce.

## المعلمات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | إذا كنا بحاجة حاليًا لاستخدام اشتراكات Woo. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | الكائن الحالي. |

### المصدر

معرّف في [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) في السطر 361

## النتائج
صحيح لاستخدام اشتراكات WooCommerce، خطأ لعدم استخدامها.
