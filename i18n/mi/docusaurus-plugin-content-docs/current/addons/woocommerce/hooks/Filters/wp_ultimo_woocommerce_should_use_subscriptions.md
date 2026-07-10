---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Tātari - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Tātari: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

Tukua ngā kaiwhakawhanake kia whakahau kia whakamahia ngā ohaurunga WooCommerce.

Mā te taunoa, ka tirohia e te tāpiri-atu mēnā (1) kei reira ngā ohaurunga WooCommerce (ahakoa ko te plugin katoa, ko te core kua takai rānei), kātahi ka (2) tirohia te tautuhinga e whakahohe ana i te whakamahinga o ngā ohaurunga WooCommerce.

## Ngā tawhā {#parameters}

| Ingoa | Momo | Whakaahuatanga |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Mēnā me whakamahi ināianei i ngā ohaurunga WooCommerce. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Te ahanoa o nāianei. |

### Pūtake {#source}

Kua tautuhia ki [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) i te rārangi 361


## Ngā whakahokinga {#returns}
true hei whakamahi i ngā ohaurunga WooCommerce, false kia kaua e whakamahi.
