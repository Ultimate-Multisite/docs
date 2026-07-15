---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: តម្រង - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

អនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍន៍បង្ខំការប្រើ WooCommerce Subscriptions។

តាមលំនាំដើម add-on ពិនិត្យថា (1) WooCommerce Subscriptions មានវត្តមានឬអត់ (ជា plugin ពេញលេញ ឬ core ដែលភ្ជាប់មកជាមួយ) បន្ទាប់មក (2) ពិនិត្យការកំណត់ដែលបើកការប្រើ WooCommerce Subscriptions។

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | ប្រសិនបើបច្ចុប្បន្នយើងត្រូវការប្រើ Woo Subs។ |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | វត្ថុបច្ចុប្បន្ន។ |

### ប្រភព {#source}

បានកំណត់នៅក្នុង [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) នៅបន្ទាត់ 361


## តម្លៃត្រឡប់ {#returns}
true ដើម្បីប្រើ WooCommerce Subs, false ដើម្បីមិនប្រើវា។
