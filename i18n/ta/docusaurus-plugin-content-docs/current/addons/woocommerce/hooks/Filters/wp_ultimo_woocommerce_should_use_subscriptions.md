---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

Developers-க்கு WooCommerce Subscriptions-ஐ கட்டாயமாகப் பயன்படுத்த அனுமதிக்கிறது.

இயல்பாகவே, இந்த add-on இரண்டு விஷயங்களைச் சரிபார்க்கும்: (1) WooCommerce Subscriptions இருக்கிறதா (அது முழு plugin ஆகவோ அல்லது bundled core ஆகவோ இருக்கலாம்), பிறகு (2) WooCommerce Subscriptions பயன்பாட்டை இயக்கும் setting-ஐ சரிபார்க்கிறது.

## அளவுருக்கள் (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | இப்போது நாம் Woo Subs-ஐ பயன்படுத்த வேண்டுமா. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | தற்போதைய object. |

### மூலம் (Source) {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361)-ல், 361 வரியில் வரையறுக்கப்பட்டுள்ளது.

## திரும்ப அளிப்பது (Returns) {#returns}
WooCommerce Subs-ஐப் பயன்படுத்த `true`, பயன்படுத்த விரும்பவில்லை என்றால் `false`.
