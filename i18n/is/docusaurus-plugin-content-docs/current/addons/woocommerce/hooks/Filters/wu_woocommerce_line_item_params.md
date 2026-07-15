---
id: wu_woocommerce_line_item_params
title: Sía - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Sía: wu_woocommerce_line_item_params

Síar færibreyturnar sem eru notaðar til að búa til línuliðina í WooCommerce-körfunni áður en viðskiptavininum er beint áfram í WooCommerce checkout.

## Færibreytur {#parameters}

| Nafn | Tegund | Lýsing |
|------|------|-------------|
| $line_item_params | `array` | Færibreytur línuliðar í körfunni. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite-línuliðstilvikið. |
| $wc_product | `\WC_Product` | WooCommerce-varan. |

### Frá útgáfu {#since}

- 2.0.0
### Uppruni {#source}

Skilgreint í [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) í línu 662


## Skilar {#returns}
Breyttu línuliðsfæribreytunum.
