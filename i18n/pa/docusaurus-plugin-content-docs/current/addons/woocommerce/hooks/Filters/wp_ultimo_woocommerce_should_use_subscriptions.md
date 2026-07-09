---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

Developers ਨੂੰ WooCommerce Subscriptions ਦੀ ਵਰਤੋਂ ਕਰਨ ਲਈ ਮਜਬੂਰ (force) ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦਾ ਹੈ।

ਡਿਫਾਲਟ ਤੌਰ 'ਤੇ, ਇਹ add-on ਇਹ ਚੈੱਕ ਕਰਦਾ ਹੈ ਕਿ (1) ਕੀ WooCommerce Subscriptions ਮੌਜੂਦ ਹੈ (ਭਾਵੇਂ ਪੂਰਾ plugin ਹੋਵੇ ਜਾਂ core ਵਿੱਚ ਬੰਡਲ ਕੀਤਾ ਗਿਆ ਹੋਵੇ), ਫਿਰ (2) ਇਹ WooCommerce Subscriptions ਦੀ ਵਰਤੋਂ ਨੂੰ ਸਥਾਪਿਤ ਕਰਨ ਵਾਲੀ ਸੈਟਿੰਗ ਨੂੰ ਵੀ ਚੈੱਕ ਕਰਦਾ ਹੈ।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | ਜੇਕਰ ਸਾਨੂੰ ਇਸ ਸਮੇਂ Woo Subs ਦੀ ਵਰਤੋਂ ਕਰਨ ਦੀ ਲੋੜ ਹੈ। |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | ਮੌਜੂਦਾ object। |

### Source {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) ਵਿੱਚ ਲਾਈਨ 361 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਕੀਤਾ ਗਿਆ ਹੈ।

## Returns {#returns}
WooCommerce Subs ਦੀ ਵਰਤੋਂ ਕਰਨ ਲਈ `true`, ਅਤੇ ਨਹੀਂ ਕਰਨ ਲਈ `false`।
