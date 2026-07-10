---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: फ़िल्टर - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

डेवलपर्स को WooCommerce Subscriptions का उपयोग करने के लिए मजबूर करने की अनुमति देता है।

डिफ़ॉल्ट रूप से, ऐड-ऑन यह जाँचता है कि (1) क्या WooCommerce Subscriptions मौजूद है (चाहे वह पूरा प्लगइन हो या बंडल किया गया कोर), और फिर (2) यह जाँचता है कि WooCommerce Subscriptions का उपयोग सक्षम करने वाली सेटिंग है या नहीं।

## पैरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | यदि हमें वर्तमान में Woo Subs का उपयोग करने की आवश्यकता है। |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | वर्तमान ऑब्जेक्ट। |

### Source {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) में लाइन 361 पर परिभाषित है।

## Returns {#returns}
WooCommerce Subs का उपयोग करने के लिए `true`, और उपयोग न करने के लिए `false`।
