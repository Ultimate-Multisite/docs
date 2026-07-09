---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Филтер - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Филтер: wp_ultimo_woocommerce_checkout_fields_to_clean

Омогућава програмерима да филтрирају подразумевана WooCommerce поља адресе за наплату.

Пошто Ultimate Multisite има поља адресе за наплату, можда има смисла уклонити подразумевана поља која WooCommerce приказује на обрасцу за checkout. Подразумевано се овој листи не прослеђује никаква вредност, па се задржавају сва поља подешена у WooCommerce за приказ.

### Од верзије

- 2.0.0
### Извор

Дефинисано у [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) у реду 277


## Враћа
Листу поља за уклањање. Доступне вредности укључују billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email и billing_phone.
