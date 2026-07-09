---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Iragazkia - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean {#filter-wpultimowoocommercecheckoutfieldstoclean}

Garatzaileei WooCommerce-ren fakturazio-helbideko eremu lehenetsiak iragazteko aukera ematen die.

Ultimate Multisite-k fakturazio-helbideko eremuak dituenez, zentzuzkoa izan daiteke WooCommerce-k checkout inprimakian bistaratzen dituen eremu lehenetsiak kentzea. Lehenespenez, ez zaio baliorik pasatzen zerrenda honi; beraz, WooCommerce-n bistaratzeko konfiguratuta dauden eremu guztiak mantentzen dira.

### Noiztik {#since}

- 2.0.0
### Iturburua {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) fitxategian definitua, 277. lerroan


## Itzultzen du {#returns}
Kendu beharreko eremuen zerrenda. Balio erabilgarrien artean daude billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email eta billing_phone.
