---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

WooCommerce Subscriptions ಅನ್ನು ಬಳಸಲು ಒತ್ತಾಯಿಸಲು (force) developers-ಗಳಿಗೆ ಅವಕಾಶ ನೀಡುತ್ತದೆ.

ಸಾಮಾನ್ಯವಾಗಿ, ಈ add-on ಈ ಕೆಳಗಿನ ಎರಡು ವಿಷಯಗಳನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ: ಮೊದಲನೆಯದಾಗಿ, (1) WooCommerce Subscriptions ಲಭ್ಯವಿದೆಯೇ (ಇದು ಪೂರ್ಣ plugin ಆಗಿರಲಿ ಅಥವಾ bundled core ಆಗಿರಲಿ), ಮತ್ತು ನಂತರ (2) WooCommerce Subscriptions ಬಳಕೆಯನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುವ ಸೆಟ್ಟಿಂಗ್ ಅನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | ನಮಗೆ ಪ್ರಸ್ತುತ Woo Subs ಬಳಸಬೇಕೇ ಇಲ್ಲ ಎಂದು ತಿಳಿಸುತ್ತದೆ. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | ಪ್ರಸ್ತುತ object. |

### Source {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) ನಲ್ಲಿ ಲೈನ್ 361 ರಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ.

## Returns {#returns}
WooCommerce Subs ಬಳಸಬೇಕಾದರೆ `true`, ಬಳಸಬಾರದೆಂದರೆ `false` ಮೌಲ್ಯವನ್ನು ಹಿಂದಿರುಗಿಸುತ್ತದೆ.
