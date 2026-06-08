---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Филтър - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

Позволява на разработчиците да филтрират стандартните полета за адрес на фактуриране на WooCommerce.

Тъй като Ultimate Multisite има полета за адрес на фактуриране, може да е логично да премахнем стандартните полета, които WooCommerce показва във формата за плащане. По подразбиране, към този списък не се подава стойност, така че всички полета, конфигурирани в WooCommerce за показване, остават.

### От

- 2.0.0
### Източник

Дефинирано в [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) на линия 277


## Връща
Списъкът от полета, които трябва да бъдат премахнати. Наличните стойности включват billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email и billing_phone.
