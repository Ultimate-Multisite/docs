---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: ફિલ્ટર - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

ડેવલપર્સને WooCommerce Subscriptions નો ઉપયોગ કરવા માટે મજબૂર કરવાની મંજૂરી આપે છે.

ડિફોલ્ટ રૂપે, આ એડ-ઓન તપાસે છે કે (૧) શું WooCommerce Subscriptions હાજર છે (સંપૂર્ણ પ્લગઇન અથવા બંડલ્ડ કોર તરીકે), અને પછી (૨) WooCommerce Subscriptions નો ઉપયોગ સક્ષમ કરતી સેટિંગ તપાસે છે.

## પેરામીટર્સ (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | જો આપણને હાલમાં Woo Subs નો ઉપયોગ કરવાની જરૂર હોય. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | વર્તમાન ઓબ્જેક્ટ. |

### સ્ત્રોત (Source)

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) at line 361

## પરત કરે છે (Returns)
WooCommerce Subs નો ઉપયોગ કરવા માટે `true`, અને ઉપયોગ ન કરવા માટે `false`.
