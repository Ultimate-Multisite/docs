---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filtre - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

Permet als desenvolupadors filtrar els camps d'adreça de facturació predeterminats de WooCommerce.

Com que Ultimate Multisite té camps d'adreça de facturació, pot ser útil eliminar els camps predeterminats mostrats per WooCommerce al formari de pagament (checkout). Per defecte, no es passa valor a aquesta llista, així que s'hi mantenen tots els camps configurats a WooCommerce per mostrar-se.

### Des {#since}
- 2.0.0
### Font {#source}
Definit en [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) a la línia 277


## Returns {#returns}
La llista de camps que s'han de eliminar. Els valors disponibles inclouen `billing_first_name`, `billing_last_name`, `billing_company`, `billing_country`, `billing_address_1`, `billing_address_2`, `billing_city`, `billing_state`, `billing_postcode`, `billing_email` i `billing_phone`.
