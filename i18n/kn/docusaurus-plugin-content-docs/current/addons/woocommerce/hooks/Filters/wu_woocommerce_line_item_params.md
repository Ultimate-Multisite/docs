---
id: wu_woocommerce_line_item_params
title: Filter - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params

WooCommerce ಕಾರ್ಟ್‌ನಲ್ಲಿ ಲೈನ್ ಐಟಮ್‌ಗಳನ್ನು ರಚಿಸಲು ಬಳಸುವ ಪ್ಯಾರಾಮೀಟರ್‌ಗಳನ್ನು (parameters) ಫಿಲ್ಟರ್ ಮಾಡುತ್ತದೆ. ಇದು ಗ್ರಾಹಕರನ್ನು WooCommerce ಚೆಕ್‌ಔಟ್‌ಗೆ ತಿರುಗಿಸುವ ಮೊದಲು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | ಕಾರ್ಟ್ ಲೈನ್ ಐಟಮ್ ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite ಲೈನ್ ಐಟಮ್ ಇನ್‌ಸ್ಟೆನ್ಸ್. |
| $wc_product | `\WC_Product` | WooCommerce ಉತ್ಪನ್ನ. |

### Since

- 2.0.0
### Source

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) at line 662


## Returns
ಸಂशोधित ಲೈನ್ ಐಟಮ್ ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು.
