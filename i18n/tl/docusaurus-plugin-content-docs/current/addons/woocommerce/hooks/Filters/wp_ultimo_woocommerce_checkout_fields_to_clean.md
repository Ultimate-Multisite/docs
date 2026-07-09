---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Pansala - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean {#filter-wpultimowoocommercecheckoutfieldstoclean}

Pinapayagan ang mga developer na i-filter ang mga default na field ng billing address ng WooCommerce.

Dahil may mga field ng billing address ang Ultimate Multisite, maaaring makatuwirang alisin ang mga default na field na ipinapakita ng WooCommerce sa checkout form. Bilang default, walang value na ipinapasa sa listahang ito, kaya pinananatili ang lahat ng field na naka-configure sa WooCommerce para ipakita.

### Mula noong {#since}

- 2.0.0
### Pinagmulan {#source}

Tinukoy sa [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) sa linya 277


## Mga Ibinabalik {#returns}
Ang listahan ng mga field na aalisin. Kabilang sa mga available na value ang billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, at billing_phone.
