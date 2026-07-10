---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Шүүлтүүр - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Шүүлтүүр: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

Хөгжүүлэгчдэд WooCommerce Subscriptions-ийг ашиглуулахыг албадан тохируулах боломж олгоно.

Анхдагчаар add-on нь (1) WooCommerce Subscriptions байгаа эсэхийг (бүрэн plugin эсвэл багцлагдсан core аль нь ч бай) шалгаад, дараа нь (2) WooCommerce Subscriptions-ийн хэрэглээг идэвхжүүлдэг тохиргоог шалгана.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Одоогоор Woo Subs ашиглах шаардлагатай эсэх. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Одоогийн объект. |

### Эх сурвалж {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) файлд 361-р мөрөнд тодорхойлсон


## Буцаах утга {#returns}
WooCommerce Subs ашиглах бол true, ашиглахгүй бол false.
