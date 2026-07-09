---
id: wu_woocommerce_line_item_params
title: පෙරහන - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

පාරිභෝගිකයා WooCommerce checkout වෙත යොමු කිරීමට පෙර, WooCommerce Cart මත line items සාදීමට භාවිතා වන parameters පෙරන්න.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | cart line item parameters. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite line item instance. |
| $wc_product | `\WC_Product` | WooCommerce product. |

### සිට {#since}

- 2.0.0
### මූලාශ්‍රය {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) හි 662 පේළියේ අර්ථ දක්වා ඇත


## ආපසු ලැබීම් {#returns}
වෙනස් කළ line item parameters.
