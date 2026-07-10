---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Զտիչ - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Ֆիլտր: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

Թույլ է տալիս մշակողներին պարտադրել WooCommerce Subscriptions-ի օգտագործումը։

Լռելյայն add-on-ը ստուգում է՝ արդյոք (1) WooCommerce Subscriptions-ը առկա է (կամ ամբողջական plugin-ը, կամ փաթեթավորված միջուկը), ապա (2) ստուգում է WooCommerce Subscriptions-ի օգտագործումը միացնող կարգավորումը։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Արդյոք ներկայումս պետք է օգտագործենք Woo Subs-ը։ |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Ընթացիկ օբյեկտը։ |

### Աղբյուր {#source}

Սահմանված է [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361)-ում՝ 361-րդ տողում


## Վերադարձնում է {#returns}
true՝ WooCommerce Subs օգտագործելու համար, false՝ այն չօգտագործելու համար։
