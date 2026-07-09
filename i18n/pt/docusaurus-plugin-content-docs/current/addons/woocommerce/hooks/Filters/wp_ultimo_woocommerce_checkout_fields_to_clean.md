---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filtro - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

Permite que desenvolvedores filtrem os campos padrão de endereço de faturação do WooCommerce.

Como Ultimate Multisite tem campos de endereço de faturação, pode fazer sentido remover os campos padrão exibidos pelo WooCommerce no formulário de checkout. Por predefinição, nenhum valor é passado para esta lista, por isso todos os campos configurados no WooCommerce para serem exibidos são mantidos.

### Desde

- 2.0.0
### Fonte

Definido em [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) na linha 277


## Retorna
A lista de campos a remover. Os valores disponíveis incluem billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email e billing_phone.
