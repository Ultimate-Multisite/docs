---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

డెవలపర్‌లు WooCommerce Subscriptions ను వాడమని బలవంతం చేయడానికి ఇది వీలు కల్పిస్తుంది.

డిఫాల్ట్‌గా, ఈ add-on రెండు విషయాలను చెక్ చేస్తుంది: (1) WooCommerce Subscriptions అందుబాటులో ఉందా (పూర్తి plugin అయినా లేదా అంతర్భాగంగా ఉన్న core అయినా), ఆ తర్వాత (2) WooCommerce Subscriptions వాడటానికి అనుమతించే సెట్టింగ్ ఉందో లేదో చెక్ చేస్తుంది.

## Parameters {#parameters}

| Name | Type | వివరణ |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | ప్రస్తుతం మనం Woo Subs వాడాలా వద్దా అని. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | ప్రస్తుత ఆబ్జెక్ట్. |

### Source {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) లోని 361వ లైన్‌లో నిర్వచించబడింది.

## Returns {#returns}
WooCommerce Subs వాడాలంటే `true`, వాడకూడదంటే `false` తిరిగి వస్తుంది.
