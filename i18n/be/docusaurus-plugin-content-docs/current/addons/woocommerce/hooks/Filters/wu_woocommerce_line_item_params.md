---
id: wu_woocommerce_line_item_params
title: Filter - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params

Фільтруе параметры, выкарыстоўваныя для стварэння паэманак у кошыку WooCommerce, да пакінення кліента на кассу WooCommerce.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | Паметрыкі паэманак кошыка. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Экземпляры паэманак Ultimate Multisite. |
| $wc_product | `\WC_Product` | Практыкт WooCommerce. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) at line 662


## Returns {#returns}
Зменненыя паметрыкі паэманак.
