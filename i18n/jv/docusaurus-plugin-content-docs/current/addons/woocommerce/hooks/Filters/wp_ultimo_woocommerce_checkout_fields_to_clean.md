---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Saringan - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Saringan: wp_ultimo_woocommerce_checkout_fields_to_clean

Ngidini pangembang kanggo nyaring field alamat tagihan baku WooCommerce.

Amarga Ultimate Multisite nduweni field alamat tagihan, bisa wae luwih trep yen mbusak field baku sing ditampilake WooCommerce ing formulir checkout. Kanthi baku, ora ana nilai sing diterusake menyang dhaptar iki, mula kabeh field sing dikonfigurasi ing WooCommerce supaya ditampilake bakal tetep disimpen.

### Wiwit

- 2.0.0
### Sumber

Ditetepake ing [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) ing baris 277


## Balikan
Dhaptar field sing arep dibusak. Nilai sing kasedhiya kalebu billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, lan billing_phone.
