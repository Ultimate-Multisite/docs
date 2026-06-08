---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filter - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

Laat ontwikkelaars standaard WooCommerce faktuuradresvelde filter.

Aangesien Ultimate Multisite faktuuradresvelde het, is dit dalk sinvol om die standaard velde wat deur WooCommerce op die afrekeningsformulier vertoon word, te verwyder. Standaard word geen waarde aan hierdie lys oorgedra nie, dus word al die velde wat op WooCommerce gekonfigureer is om vertoon te word, behou.

### Since

- 2.0.0
### Source

Word gedefinieer in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) op lyn 277.


## Returns
Die lys van velde wat verwyder moet word. Beskikbare waardes sluit in billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, en billing_phone.
