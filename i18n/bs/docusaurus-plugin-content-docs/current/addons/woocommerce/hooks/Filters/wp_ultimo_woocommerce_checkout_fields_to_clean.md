---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filter - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

Omogućava programerima da filtriraju podrazumjevna polja za adrese za naplatu u WooCommerceu.

Budući da Ultimate Multisite ima polja za adrese za naplatu, možda je razumno ukloniti podrazumjevna polja koja prikazuje WooCommerce na formularu za naplatu. Podrazumevano, ništa se ne proslijeđuje ovoj listi, pa se zadržavaju sva polja koja su u WooCommerceu konfigurirana za prikaz.

### Od

- 2.0.0
### Izvorni kod

Definisano je u [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) na liniji 277

## Vraća
Listu polja koja se uklanja. Dostupne vrijednosti uključuju `billing_first_name`, `billing_last_name`, `billing_company`, `billing_country`, `billing_address_1`, `billing_address_2`, `billing_city`, `billing_state`, `billing_postcode`, `billing_email`, i `billing_phone`.
