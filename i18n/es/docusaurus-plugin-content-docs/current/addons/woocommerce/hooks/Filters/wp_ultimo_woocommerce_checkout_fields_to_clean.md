---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filtro - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filtro: wp_ultimo_woocommerce_checkout_fields_to_clean

Permite a los desarrolladores filtrar los campos de dirección de facturación predeterminados de WooCommerce.

Como Ultimate Multisite tiene campos de dirección de facturación, puede tener sentido eliminar los campos predeterminados mostrados por WooCommerce en el formulario de pago. Por defecto, no se pasa ningún valor a esta lista, por lo que se conservan todos los campos configurados en WooCommerce para ser mostrados.

### Desde

- 2.0.0
### Fuente

Definido en [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) en la línea 277


## Devuelve
La lista de campos a eliminar. Los valores disponibles incluyen billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email y billing_phone.
