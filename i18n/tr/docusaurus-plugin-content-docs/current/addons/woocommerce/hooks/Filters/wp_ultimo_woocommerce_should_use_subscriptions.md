---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

Geliştiricilerin WooCommerce Subscriptions kullanımını zorlamasına izin verir.

Varsayılan olarak eklenti, (1) WooCommerce Subscriptions'ın mevcut olup olmadığını (tam eklenti veya paketlenmiş çekirdek olabilir) kontrol eder, ardından (2) WooCommerce Subscriptions kullanımını etkinleştiren ayarı kontrol eder.

## Parametreler {#parameters}

| Ad | Tip | Açıklama |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Şu anda Woo Subs kullanmamız gerekiyorsa. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Mevcut nesne. |

### Kaynak {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) dosyasının 361. satırında tanımlanmıştır.

## Dönüş Değeri {#returns}
WooCommerce Subs kullanmak için `true`, kullanmamak için `false`.
