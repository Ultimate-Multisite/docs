---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filtër - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filtër: wp_ultimo_woocommerce_checkout_fields_to_clean {#filter-wpultimowoocommercecheckoutfieldstoclean}

U lejon zhvilluesve të filtrojnë fushat e parazgjedhura të adresës së faturimit të WooCommerce.

Meqenëse Ultimate Multisite ka fusha të adresës së faturimit, mund të ketë kuptim të hiqen fushat e parazgjedhura të shfaqura nga WooCommerce në formularin e checkout. Si parazgjedhje, asnjë vlerë nuk i kalohet kësaj liste, prandaj të gjitha fushat e konfiguruara në WooCommerce për t'u shfaqur mbahen.

### Që nga {#since}

- 2.0.0
### Burimi {#source}

Përcaktuar në [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) në rreshtin 277


## Kthen {#returns}
Lista e fushave për t'u hequr. Vlerat e disponueshme përfshijnë billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, dhe billing_phone.
