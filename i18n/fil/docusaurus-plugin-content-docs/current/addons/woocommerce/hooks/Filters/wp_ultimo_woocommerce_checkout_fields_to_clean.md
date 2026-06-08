---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filter - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

Nagpapahintulot ito sa mga developer na i-filter ang default na mga field ng billing address sa WooCommerce.

Dahil mayroon nang billing address fields ang Ultimate Multisite, maaaring makabawas ng kalituhan na tanggalin ang default na mga field na ipinapakita ng WooCommerce sa checkout form. Sa default, walang value ang ipinapasa sa listahang ito, kaya lahat ng field na nakakonfigura sa WooCommerce para ipakita ay mananatili.

### Since

- 2.0.0
### Source

Nakatakda sa [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) sa linya 277


## Returns
Ang listahan ng mga field na tatanggalin. Kasama sa mga available na value ang `billing_first_name`, `billing_last_name`, `billing_company`, `billing_country`, `billing_address_1`, `billing_address_2`, `billing_city`, `billing_state`, `billing_postcode`, `billing_email`, at `billing_phone`.
