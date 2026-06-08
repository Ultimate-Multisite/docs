---
id: wu_woocommerce_line_item_params
title: Filter - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params

ደንበኛውን ወደ WooCommerce checkout ከመላክ በፊት በWooCommerce ጋሪ ላይ የline items ለመፍጠር የሚያገለግሉትን parameters ያጣfilt (ይመጣሉ)።

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | የጋሪው line item parameters። |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | የUltimate Multisite line item ምሳሌ (instance)። |
| $wc_product | `\WC_Product` | የWooCommerce ምርት። |

### Since

- 2.0.0
### Source

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) at line 662


## Returns
የተሻሻሉ የline item parameters።
