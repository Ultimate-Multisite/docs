---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filter - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

Memungkinkan pengembang untuk memfilter bidang alamat penagihan (billing address) default WooCommerce.

Karena Ultimate Multisite memiliki bidang alamat penagihan, mungkin masuk akal untuk menghapus bidang default yang ditampilkan oleh WooCommerce di formulir checkout. Secara default, tidak ada nilai yang dilewatkan ke daftar ini, jadi semua bidang yang dikonfigurasi di WooCommerce untuk ditampilkan akan tetap ada.

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) at line 277


## Mengembalikan {#returns}
Daftar bidang yang akan dihapus. Nilai yang tersedia meliputi billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, dan billing_phone.
