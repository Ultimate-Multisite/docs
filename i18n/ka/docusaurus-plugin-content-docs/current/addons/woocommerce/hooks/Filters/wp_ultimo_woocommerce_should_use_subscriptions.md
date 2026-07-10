---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: ფილტრი - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# ფილტრი: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

დეველოპერებს აძლევს საშუალებას, იძულებით გამოიყენონ WooCommerce Subscriptions.

ნაგულისხმევად add-on ამოწმებს, არის თუ არა (1) WooCommerce Subscriptions ხელმისაწვდომი (ან სრული plugin, ან bundled core), შემდეგ (2) ამოწმებს პარამეტრს, რომელიც WooCommerce Subscriptions-ის გამოყენებას რთავს.

## პარამეტრები {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | თუ ამჟამად გვჭირდება Woo Subs-ის გამოყენება. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | მიმდინარე ობიექტი. |

### წყარო {#source}

განსაზღვრულია [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361)-ში, 361-ე ხაზზე


## აბრუნებს {#returns}
true WooCommerce Subs-ის გამოსაყენებლად, false — მის არგამოსაყენებლად.
