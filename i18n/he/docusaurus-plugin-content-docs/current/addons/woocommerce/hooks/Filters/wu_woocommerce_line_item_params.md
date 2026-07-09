---
id: wu_woocommerce_line_item_params
title: פילטר - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

סנן את הפרמטרים המשמשים ליצירת פריטי השורה בעגלת WooCommerce, לפני ניתוב הלקוח לקופון של WooCommerce.

## פרמטרים {#parameters}

| שם | סוג | תיאור |
|------|------|-------------|
| $line_item_params | `array` | פרמטרי פריטי השורה בעגלה. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | מופע פריט השורה של Ultimate Multisite. |
| $wc_product | `\WC_Product` | מוצר WooCommerce. |

### מאז {#since}

- 2.0.0
### מקור {#source}

מוגדר ב-[inc/gateways/class-woocommerce-gateway.php](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) בשורה 662.

## מחזיר {#returns}
את פרמטרי פריטי השורה המעודכנים.
