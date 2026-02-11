---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filtro - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filtro: wp_ultimo_woocommerce_checkout_fields_to_clean

Permite que os desenvolvedores filtrem os campos de endereço de cobrança padrão do WooCommerce.

Como o Ultimate Multisite possui campos de endereço de cobrança, pode fazer sentido remover os campos padrão exibidos pelo WooCommerce no formulário de checkout. Por padrão, nenhum valor é passado para esta lista, então todos os campos configurados no WooCommerce para serem exibidos são mantidos.

### Desde

- 2.0.0

### Fonte

Definido em [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) na linha 277

## Retornos

A lista de campos a serem removidos. Os valores disponíveis incluem billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email e billing_phone.
