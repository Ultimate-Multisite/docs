---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: فلٽر - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

ڊولپرز کي WooCommerce Subscriptions جي استعمال کي لازمي ڪرائڻ جي اجازت ڏيو.

ڊفالٽ طور اضافو جانچي ٿو ته (1) WooCommerce Subscriptions موجود آهي (يا مڪمل پلگ اِن يا گڏيل ڪور)، پوءِ (2) WooCommerce Subscriptions جي استعمال کي فعال ڪندڙ سيٽنگ جانچي ٿو.

## پيراميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | جيڪڏهن اسان کي هن وقت Woo Subs استعمال ڪرڻ جي ضرورت آهي. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | موجوده آبجيڪٽ. |

### ماخذ {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) ۾ لائين 361 تي بيان ٿيل


## واپسيون {#returns}
WooCommerce Subs استعمال ڪرڻ لاءِ true، ان کي استعمال نه ڪرڻ لاءِ false.
