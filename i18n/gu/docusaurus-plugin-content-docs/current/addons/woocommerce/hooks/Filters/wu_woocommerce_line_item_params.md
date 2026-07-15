---
id: wu_woocommerce_line_item_params
title: ફિલ્ટર - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params

આ ફિલ્ટર WooCommerce કાર્ટમાં લાઇન આઇટમ્સ બનાવવા માટે વપરાતા પેરામીટર્સને ફેરફાર કરે છે, જે ગ્રાહકને WooCommerce ચેકઆઉટ પર રીડાયરેક્ટ થવાના હોય છે તેના પહેલા.

## પેરામીટર્સ (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | કાર્ટની લાઇન આઇટમના પેરામીટર્સ. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite લાઇન આઇટમનું ઇન્સ્ટન્સ. |
| $wc_product | `\WC_Product` | WooCommerce પ્રોડક્ટ. |

### ક્યારથી (Since) {#since}

- 2.0.0
### સ્ત્રોત (Source) {#source}

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) at line 662


## શું પાછું મળે છે (Returns) {#returns}
ફેરફાર કરેલા લાઇન આઇટમ પેરામીટર્સ.
