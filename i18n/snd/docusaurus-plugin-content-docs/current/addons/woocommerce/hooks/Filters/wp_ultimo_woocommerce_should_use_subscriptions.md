---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: فلٽر - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# فلٽر: wp_ultimo_woocommerce_should_use_subscriptions

ڊولپرز کي WooCommerce Subscriptions جي استعمال کي زبردستي لاڳو ڪرڻ جي اجازت ڏئي ٿو.

ڊفالٽ طور add-on جانچي ٿو ته (1) WooCommerce Subscriptions موجود آهي (يا مڪمل plugin يا گڏيل core)، پوءِ (2) اهو setting جانچي ٿو جيڪا WooCommerce Subscriptions جو استعمال فعال ڪري ٿي.

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | جيڪڏهن اسان کي هن وقت Woo Subs استعمال ڪرڻ جي ضرورت آهي. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | موجوده object. |

### ذريعو {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) ۾ line 361 تي بيان ٿيل


## واپس ڏئي ٿو {#returns}
WooCommerce Subs استعمال ڪرڻ لاءِ true، ان کي استعمال نه ڪرڻ لاءِ false.
