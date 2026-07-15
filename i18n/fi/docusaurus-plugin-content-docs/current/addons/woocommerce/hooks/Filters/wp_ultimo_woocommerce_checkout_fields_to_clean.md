---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Suodatin - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Suodatin: wp_ultimo_woocommerce_checkout_fields_to_clean

Antaa kehittäjien suodattaa WooCommerce-laskutusosoitteen oletuskenttiä.

Koska Ultimate Multisite sisältää laskutusosoitekenttiä, voi olla järkevää poistaa oletuskentät, jotka WooCommerce näyttää checkout-lomakkeella. Oletuksena tälle listalle ei välitetä arvoa, joten kaikki WooCommerceen määritetyt näytettävät kentät säilytetään.

### Alkaen {#since}

- 2.0.0
### Lähde {#source}

Määritelty tiedostossa [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) rivillä 277


## Palauttaa {#returns}
Poistettavien kenttien lista. Käytettävissä olevia arvoja ovat billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email ja billing_phone.
