---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Szűrő - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

Lehetővé teszi a fejlesztőknek, hogy szűrjék a WooCommerce alapértelmezett számlázási címmezőit.

Mivel az Ultimate Multisite rendelkezik számlázási címmezőkkal, érdemes lehet eltávolítani a WooCommerce által az átiratkozási űrlapon megjelenített alapértelmezett mezőket. Alapértelmezés szerint nincs érték átadva ebbe a listába, így minden olyan mező, amelyet a WooCommerce megjelenítésre konfigurált, megmarad.

### Since {#since}

- 2.0.0
### Source {#source}

Definíciója található [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) fájlban, 277-sorban.


## Returns {#returns}
A mezők listája, amelyet eltávolítani kell. Az elérhető értékek között szerepelnek: `billing_first_name`, `billing_last_name`, `billing_company`, `billing_country`, `billing_address_1`, `billing_address_2`, `billing_city`, `billing_state`, `billing_postcode`, `billing_email` és `billing_phone`.
