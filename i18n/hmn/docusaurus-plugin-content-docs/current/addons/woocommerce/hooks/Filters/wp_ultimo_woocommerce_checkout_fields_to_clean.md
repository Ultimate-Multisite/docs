---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Lim - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Lim: wp_ultimo_woocommerce_checkout_fields_to_clean

Tso cai rau cov developers lim cov WooCommerce billing address fields qub.

Vim Ultimate Multisite muaj billing address fields, tej zaum yuav tsim nyog tshem cov fields qub uas WooCommerce qhia rau ntawm checkout form. Raws li qub, tsis muaj value raug xa mus rau daim list no, yog li txhua fields uas tau teeb rau WooCommerce kom qhia tawm tseem raug khaws cia.

### Txij thaum {#since}

- 2.0.0
### Source {#source}

Tau txhais hauv [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) ntawm kab 277


## Rov qab {#returns}
Daim list ntawm fields uas yuav tshem tawm. Cov values uas siv tau muaj billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, thiab billing_phone.
