---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Hidlydd - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

Yn caniatáu i ddatblygwyr hidlo meysydd cyfeiriad bilio diofyn WooCommerce.

Gan fod gan Ultimate Multisite feysydd cyfeiriad bilio, gallai wneud synnwyr tynnu'r meysydd diofyn a ddangosir gan WooCommerce ar y ffurflen checkout. Yn ddiofyn, ni chaiff unrhyw werth ei basio i'r rhestr hon, felly cedwir pob maes sydd wedi'i ffurfweddu ar WooCommerce i'w ddangos.

### Ers

- 2.0.0
### Ffynhonnell

Wedi'i ddiffinio yn [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) ar linell 277


## Dychwelyd
Y rhestr o feysydd i'w tynnu. Mae'r gwerthoedd sydd ar gael yn cynnwys billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, a billing_phone.
