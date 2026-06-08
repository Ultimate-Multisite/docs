---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

Membolehkan pembangun memaksa penggunaan WooCommerce Subscriptions.

Secara lalai, add-on ini menyemak sama ada (1) WooCommerce Subscriptions ada (sama ada sebagai plugin penuh atau terpasang bersama teras), kemudian (2) menyemak tetapan yang membolehkan penggunaan WooCommerce Subscriptions.

## Parameter

| Nama | Jenis | Penerangan |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Jika kita perlu menggunakan Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Objek semasa. |

### Sumber

Didefinisikan dalam [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) pada baris 361.

## Pulangan
`true` untuk menggunakan WooCommerce Subs, `false` untuk tidak menggunakannya.
