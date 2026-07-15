---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Shaandheeye - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

U oggolow horumariyayaasha inay khasbaan isticmaalka WooCommerce Subscriptions.

Sida caadiga ah add-on-ku wuxuu hubiyaa haddii (1) WooCommerce Subscriptions uu jiro (ha ahaado plugin buuxa ama core la socda), ka dibna (2) wuxuu hubiyaa dejinta suuragelinaysa isticmaalka WooCommerce Subscriptions.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Haddii aan hadda u baahanahay inaan isticmaalno Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Shayga hadda jira. |

### Isha {#source}

Lagu qeexay [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) safka 361


## Soo-celinta {#returns}
true si loo isticmaalo WooCommerce Subs, false si aan loo isticmaalin.
