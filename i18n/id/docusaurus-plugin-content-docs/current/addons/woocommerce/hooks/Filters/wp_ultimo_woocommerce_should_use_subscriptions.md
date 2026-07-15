---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

Memungkinkan developer untuk memaksa penggunaan WooCommerce Subscriptions.

Secara default, add-on ini akan memeriksa apakah (1) WooCommerce Subscriptions sudah tersedia (baik sebagai plugin penuh atau inti yang terintegrasi), kemudian (2) memeriksa pengaturan yang mengaktifkan penggunaan WooCommerce Subscriptions.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Apakah kita saat ini perlu menggunakan Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Objek saat ini. |

### Source {#source}

Didefinisikan di [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) pada baris 361


## Returns {#returns}
`true` untuk menggunakan WooCommerce Subs, `false` untuk tidak menggunakannya.
