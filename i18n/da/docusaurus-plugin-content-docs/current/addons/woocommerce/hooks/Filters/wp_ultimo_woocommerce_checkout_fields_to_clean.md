---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filter - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean {#filter-wpultimowoocommercecheckoutfieldstoclean}

Giver udviklere mulighed for at filtrere standardfelter for WooCommerce faktureringsadresse.

Da Ultimate Multisite har felter til faktureringsadresse, kan det give mening at fjerne de standardfelter, der vises af WooCommerce på checkout-formularen. Som standard sendes der ingen værdi til denne liste, så alle felter, der er konfigureret i WooCommerce til at blive vist, beholdes.

### Siden {#since}

- 2.0.0
### Kilde {#source}

Defineret i [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) på linje 277


## Returnerer {#returns}
Listen over felter, der skal fjernes. Tilgængelige værdier inkluderer billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email og billing_phone.
