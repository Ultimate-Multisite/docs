---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filtar - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean {#filter-wpultimowoocommercecheckoutfieldstoclean}

Omogućuje developerima filtriranje zadanih WooCommerce polja adrese za naplatu.

Budući da Ultimate Multisite ima polja adrese za naplatu, možda ima smisla ukloniti zadana polja koja WooCommerce prikazuje na obrascu za checkout. Prema zadanim postavkama, ovoj se listi ne prosljeđuje nikakva vrijednost, pa se zadržavaju sva polja konfigurirana u WooCommerce za prikaz.

### Od verzije {#since}

- 2.0.0
### Izvor {#source}

Definirano u [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) u retku 277


## Vraća {#returns}
Lista polja za uklanjanje. Dostupne vrijednosti uključuju billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email i billing_phone.
