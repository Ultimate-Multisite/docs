---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

Developers-lara WooCommerce Subscriptions-ı kullanmaya zorlama imkanı verir.

Varsayılan olarak, add-on önce (1) WooCommerce Subscriptions'ın mevcut olup olmadığını (tam plugin veya paketlenmiş core olabilir) kontrol eder, ardından (2) WooCommerce Subscriptions kullanımını etkinleştiren ayarı kontrol eder.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Şu anda Woo Subs kullanmamız gerekiyor mu. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Mevcut nesne. |

### Kaynak {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) dosyasında 361. satırda tanımlanmıştır.

## Dönüş Değeri {#returns}
WooCommerce Subs kullanmak için `true`, kullanmamak için `false` döndürür.
