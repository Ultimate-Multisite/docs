---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filter - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

Võimaldab arendajatel filtreerida WooCommerce vaikimisi arveldusaadressi välju.

Kuna Ultimate Multisite’il on arveldusaadressi väljad, võib olla mõistlik eemaldada vaikimisi väljad, mida WooCommerce kuvab checkout-vormil. Vaikimisi sellele loendile väärtust ei edastata, seega jäetakse alles kõik WooCommerce’is kuvamiseks seadistatud väljad.

### Alates {#since}

- 2.0.0
### Allikas {#source}

Määratletud failis [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) real 277


## Tagastab {#returns}
Eemaldatavate väljade loend. Saadaolevate väärtuste hulka kuuluvad billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email ja billing_phone.
