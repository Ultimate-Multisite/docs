---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Parzûn - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

Destûr dide pêşdebirên ku qadên navnîşana fatûreyê yên standard ên WooCommerce parzûn bikin.

Ji ber ku Ultimate Multisite qadên navnîşana fatûreyê hene, dibe ku watedar be ku qadên standard ên ku ji aliyê WooCommerce ve li ser forma checkout tên nîşandan werin rakirin. Bi standard, tu nirx ji vê lîsteyê re nayê derbas kirin, ji ber vê yekê hemû qadên ku di WooCommerce de ji bo nîşandanê hatine veavakirin tên parastin.

### Ji demê ve {#since}

- 2.0.0
### Çavkanî {#source}

Di [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) de li rêza 277 hatiye diyarkirin


## Vedigerîne {#returns}
Lîsteya qadan ji bo rakirinê. Nirxên berdest ev in: billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, û billing_phone.
