---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: फिल्टर - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

विकासकर्ताहरूलाई WooCommerce Subscriptions को प्रयोग जबर्जस्ती गराउन अनुमति दिन्छ।

पूर्वनिर्धारित रूपमा add-on ले (१) WooCommerce Subscriptions उपस्थित छ कि छैन (पूर्ण plugin वा bundled core मध्ये कुनै एक), त्यसपछि (२) WooCommerce Subscriptions प्रयोग सक्षम गर्ने setting जाँच गर्छ।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | यदि हामीलाई हाल Woo Subs प्रयोग गर्न आवश्यक छ भने। |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | हालको object। |

### Source

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) मा लाइन 361 मा परिभाषित


## Returns
WooCommerce Subs प्रयोग गर्न true, प्रयोग नगर्न false।
