---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Филтер - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Филтер: wp_ultimo_woocommerce_checkout_fields_to_clean

Им овозможува на програмерите да ги филтрираат стандардните полиња за адреса за наплата на WooCommerce.

Бидејќи Ultimate Multisite има полиња за адреса за наплата, може да има смисла да се отстранат стандардните полиња што ги прикажува WooCommerce на формуларот за наплата. Стандардно, не се пренесува никаква вредност на оваа листа, па сите полиња конфигурирани на WooCommerce да се прикажуваат се задржуваат.

### Од {#since}

- 2.0.0
### Извор {#source}

Дефинирано во [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) на линија 277


## Враќа {#returns}
Листата на полиња за отстранување. Достапните вредности вклучуваат billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email и billing_phone.
