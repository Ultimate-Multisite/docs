---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filter - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

Lar utviklere filtrere standard WooCommerce-felt for fakturaadresse.

Siden Ultimate Multisite har felt for fakturaadresse, kan det være lurt å fjerne de standard feltene som WooCommerce viser på kassen. Som standard sendes ingen verdi til denne listen, noe som betyr at alle felt som er konfigurert i WooCommerce til å vises, beholdes.

### Siden

- 2.0.0
### Kilde

Definert i [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) på linje 277


## Returnerer
Listen over felt som skal fjernes. Tilgjengelige verdier inkluderer billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, og billing_phone.
