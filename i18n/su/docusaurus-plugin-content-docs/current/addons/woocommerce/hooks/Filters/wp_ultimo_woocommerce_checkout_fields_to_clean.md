---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Saringan - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

Ngidinan pamekar pikeun nyaring widang alamat tagihan standar WooCommerce.

Kusabab Ultimate Multisite boga widang alamat tagihan, bisa jadi asup akal pikeun miceun widang standar anu dipintonkeun ku WooCommerce dina formulir checkout. Sacara standar, euweuh nilai anu diteruskeun kana daptar ieu, jadi sadaya widang anu dikonfigurasi dina WooCommerce pikeun dipintonkeun tetep dijaga.

### Ti saprak

- 2.0.0
### Sumber

Ditetepkeun dina [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) dina baris 277


## Mulangkeun
Daptar widang pikeun dipiceun. Nilai anu sayogi kaasup billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, jeung billing_phone.
