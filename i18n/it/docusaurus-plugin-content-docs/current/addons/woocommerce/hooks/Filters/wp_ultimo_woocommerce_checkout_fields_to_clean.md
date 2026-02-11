---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filtro - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

Permette agli sviluppatori di filtrare i campi di indirizzo di fatturazione predefiniti di WooCommerce.

Poiché Ultimate Multisite dispone di campi di indirizzo di fatturazione, potrebbe avere senso rimuovere i campi predefiniti visualizzati da WooCommerce nel modulo di checkout. Per impostazione predefinita, non viene passato alcun valore a questa lista, quindi tutti i campi configurati su WooCommerce per essere visualizzati vengono mantenuti.

### Since

- 2.0.0

### Source

Definito in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) alla riga 277


## Returns
La lista dei campi da rimuovere. I valori disponibili includono billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email e billing_phone.
