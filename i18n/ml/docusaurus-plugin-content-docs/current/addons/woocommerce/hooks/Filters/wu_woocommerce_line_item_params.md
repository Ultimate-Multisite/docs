---
id: wu_woocommerce_line_item_params
title: ഫിൽട്ടർ - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

WooCommerce കാർട്ടിലെ ലൈൻ ഐറ്റങ്ങൾ ഉണ്ടാക്കാൻ ഉപയോഗിക്കുന്ന പരാമീറ്ററുകൾ, കസ്റ്റമറെ WooCommerce ചെക്കൗട്ടിലേക്ക് റീഡയറക്ട് ചെയ്യുന്നതിന് മുൻപ്, ഇത് ഫിൽട്ടർ ചെയ്യുന്നു.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | കാർട്ട് ലൈൻ ഐറ്റം പരാമീറ്ററുകൾ. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite ലൈൻ ഐറ്റം ഇൻസ്റ്റൻസ്. |
| $wc_product | `\WC_Product` | WooCommerce ഉൽപ്പന്നം. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) at line 662


## Returns {#returns}
മാറ്റം വരുത്തിയ ലൈൻ ഐറ്റം പരാമീറ്ററുകൾ.
