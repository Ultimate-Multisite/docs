---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Фільтр - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

Дазваляе рэдактарам фільтраваць пачатковыя поля адрасы раслічкі WooCommerce.

Калі Ultimate Multisite мае поля адрасы раслічкі, можа быць выгадна адключыць пачатковыя поля, якія адбываецца WooCommerce на форме раслічкі. Па ўстаноўкам нічога не перадаецца ў гэты спіс, таму ўсе поля, сканфігурававаныя ў WooCommerce для адбывання, застаюцца.

### Since

- 2.0.0
### Source

Вызначаны ў [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) на 277-й паўніне.


## Returns
Спіс паля, якія трэба адключыць. Даступныя значэнні ўключаюць billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email і billing_phone.
