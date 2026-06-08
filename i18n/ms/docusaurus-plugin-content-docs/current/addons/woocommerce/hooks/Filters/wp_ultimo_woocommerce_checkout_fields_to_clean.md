---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filter - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

Membenarkan pembangun menapis medan alamat bil (billing) lalai WooCommerce.

Memandangkan Ultimate Multisite mempunyai medan alamat bil, mungkin masuk akal untuk mengeluarkan medan lalai yang dipaparkan oleh WooCommerce pada borang pembayaran. Secara lalai, tiada nilai dihantar ke senarai ini, jadi semua medan yang dikonfigurasi di WooCommerce untuk dipaparkan akan dikekalkan.

### Sejak

- 2.0.0
### Sumber

Didefinisikan dalam [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) pada baris 277

## Mengembalikan
Senarai medan yang perlu dikeluarkan. Nilai yang tersedia termasuk `billing_first_name`, `billing_last_name`, `billing_company`, `billing_country`, `billing_address_1`, `billing_address_2`, `billing_city`, `billing_state`, `billing_postcode`, `billing_email`, dan `billing_phone`.
