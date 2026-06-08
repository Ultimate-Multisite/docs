---
id: wu_woocommerce_line_item_params
title: Φίλτρο - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params

Αυτό το filter φιλτράρει τους παραμέτρους που χρησιμοποιούνται για τη δημιουργία των γραμμών στο WooCommerce Cart, πριν ο πελάτης ανακατευθυνθεί στο WooCommerce checkout.

## Παράμετροι

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | Οι παράμετροι της γραμμής στο καλάθι. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Η εντολή (instance) της γραμμής στο Ultimate Multisite. |
| $wc_product | `\WC_Product` | Το προϊόν του WooCommerce. |

### Από

- 2.0.0
### Πηγή

Ορίζεται στο [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) στην γραμμή 662

## Επιστρέφει
Οι τροποποιημένοι παράμετροι της γραμμής στο item.
