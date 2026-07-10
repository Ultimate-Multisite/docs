---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

विकसकांना WooCommerce Subscriptions चा वापर करण्यास भाग पाडण्याची (force) परवानगी देतो.

डीफॉल्टनुसार, हे add-on तपासते की (१) WooCommerce Subscriptions उपलब्ध आहे की नाही (पूर्ण प्लगइन किंवा बंडल केलेले core), आणि नंतर (२) WooCommerce Subscriptions चा वापर सक्षम करणारी सेटिंग तपासावी लागते.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | आपल्याला सध्या Woo Subs चा वापर करण्याची गरज आहे की नाही. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | सध्याचा ऑब्जेक्ट. |

### Source {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) मध्ये लाइन ३६१ वर परिभाषित केले आहे.

## Returns {#returns}
WooCommerce Subs वापरण्यासाठी `true`, आणि वापर न करण्यासाठी `false`.
