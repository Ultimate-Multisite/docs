---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Salain - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

Gitugotan ang mga developer sa pag-filter sa default nga mga field sa billing address sa WooCommerce.

Tungod kay ang Ultimate Multisite adunay mga field sa billing address, mahimong makatarunganon nga tangtangon ang default nga mga field nga gipakita sa WooCommerce sa checkout form. Sa default, walay value nga gipasa niini nga lista, busa ang tanang mga field nga gi-configure sa WooCommerce aron ipakita gipabilin.

### Sukad {#since}

- 2.0.0
### Tinubdan {#source}

Gihubit sa [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) sa linya 277


## Mga Gibalik {#returns}
Ang lista sa mga field nga tangtangon. Ang mga available nga value naglakip sa billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, ug billing_phone.
