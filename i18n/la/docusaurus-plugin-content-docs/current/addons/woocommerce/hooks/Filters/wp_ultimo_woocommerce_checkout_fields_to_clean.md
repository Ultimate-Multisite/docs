---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filtrum - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filtrum: wp_ultimo_woocommerce_checkout_fields_to_clean

Sinit programmatoribus campos inscriptionis fiscalis praedefinitos WooCommerce filtrare.

Quoniam Ultimate Multisite campos inscriptionis fiscalis habet, fortasse consentaneum est campos praedefinitos a WooCommerce in formulario checkout ostensos removere. Per defaltam, nullus valor huic indicio traditur, itaque omnes campi in WooCommerce configurati ut ostendantur servantur.

### Ex quo {#since}

- 2.0.0
### Fons {#source}

Definitum in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) ad lineam 277


## Reddit {#returns}
Indicem camporum removendorum. Valores praesto includunt billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, et billing_phone.
