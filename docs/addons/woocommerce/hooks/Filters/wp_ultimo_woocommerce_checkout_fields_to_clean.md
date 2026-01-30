---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: "Filter - wp_ultimo_woocommerce_checkout_fields_to_clean"
sidebar_label: "wp_ultimo_woocommerce_checkout_fields_to_clean"
---

# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

Allows developers to filter default WooCommerce billing address fields.

Since Ultimate Multisite has billing address fields, it might make sense to remove the default fields displayed by WooCommerce on the checkout form. By default, no value is passed to this list, so all fields configured on WooCommerce to be displayed are kept.

### Since

- 2.0.0
### Source

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) at line 277


## Returns
The list of fields to remove. Available values include billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, and billing_phone.
