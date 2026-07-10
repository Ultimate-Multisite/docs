---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: פילטר - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

מאפשר למפתחים לכפות שימוש ב-WooCommerce Subscriptions.

ברירת המחדל, התוסף בודק קודם כל אם (1) WooCommerce Subscriptions קיים (בין אם כתוסף מלא או כליבה בתוך הליבה), ואז (2) בודק את ההגדרה המאפשרת שימוש ב-WooCommerce Subscriptions.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | אם אנו צריכים להשתמש ב-Woo Subs כרגע. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | האובייקט הנוכחי. |

### Source {#source}

מוגדר ב-[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) בשורה 361

## Returns {#returns}
`true` כדי להשתמש ב-WooCommerce Subs, ו-`false` כדי לא להשתמש בו.
