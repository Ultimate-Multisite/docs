---
id: wu_woocommerce_line_item_params
title: فلټر - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

هغه پارامېټرونه فلټر کړئ چې د WooCommerce Cart کې د کرښې توکو جوړولو لپاره کارېږي، مخکې له دې چې پېرودونکی WooCommerce checkout ته ولېږدول شي.

## پارامېټرونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $line_item_params | `array` | د کراچۍ د کرښې توکي پارامېټرونه. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | د Ultimate Multisite د کرښې توکي instance. |
| $wc_product | `\WC_Product` | د WooCommerce محصول. |

### له {#since}

- 2.0.0
### سرچینه {#source}

په [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) کې په 662 کرښه تعریف شوی


## راستنېدنې {#returns}
بدل شوي د کرښې توکي پارامېټرونه.
