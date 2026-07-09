---
id: wu_woocommerce_line_item_params
title: Филтр - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Филтр: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

Параметрҳоеро, ки барои эҷоди унсурҳои сатри сабад дар WooCommerce Cart истифода мешаванд, пеш аз равона кардани муштарӣ ба WooCommerce checkout филтр мекунад.

## Параметрҳо {#parameters}

| Ном | Навъ | Тавсиф |
|------|------|-------------|
| $line_item_params | `array` | Параметрҳои унсури сатри сабад. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Намунаи унсури сатри Ultimate Multisite. |
| $wc_product | `\WC_Product` | Маҳсули WooCommerce. |

### Аз версияи {#since}

- 2.0.0
### Манбаъ {#source}

Дар [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) дар сатри 662 муайян шудааст


## Бармегардонад {#returns}
Параметрҳои тағйирёфтаи унсури сатр.
