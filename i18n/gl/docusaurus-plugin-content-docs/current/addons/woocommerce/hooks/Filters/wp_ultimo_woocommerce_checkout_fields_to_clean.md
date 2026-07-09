---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filtro - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filtro: wp_ultimo_woocommerce_checkout_fields_to_clean {#filter-wpultimowoocommercecheckoutfieldstoclean}

Permite aos desenvolvedores filtrar os campos predeterminados do enderezo de facturación de WooCommerce.

Dado que Ultimate Multisite ten campos de enderezo de facturación, pode ter sentido eliminar os campos predeterminados que WooCommerce mostra no formulario de checkout. De xeito predeterminado, non se pasa ningún valor a esta lista, polo que se manteñen todos os campos configurados en WooCommerce para mostrarse.

### Desde {#since}

- 2.0.0
### Fonte {#source}

Definido en [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) na liña 277


## Devolve {#returns}
A lista de campos que se van eliminar. Os valores dispoñibles inclúen billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email e billing_phone.
