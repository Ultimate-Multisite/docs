---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filtras - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filtras: wp_ultimo_woocommerce_checkout_fields_to_clean

Leidžia kūrėjams filtruoti numatytuosius WooCommerce atsiskaitymo adreso laukus.

Kadangi Ultimate Multisite turi atsiskaitymo adreso laukus, gali būti prasminga pašalinti numatytuosius laukus, kuriuos WooCommerce rodo atsiskaitymo formoje. Pagal numatytuosius nustatymus į šį sąrašą neperduodama jokia reikšmė, todėl paliekami visi laukai, sukonfigūruoti WooCommerce rodyti.

### Nuo

- 2.0.0
### Šaltinis

Apibrėžta [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) 277 eilutėje


## Grąžina
Šalintinų laukų sąrašą. Galimos reikšmės apima billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email ir billing_phone.
