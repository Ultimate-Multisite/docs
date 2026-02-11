---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filter - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

Stelt ontwikkelaars in staat om de standaard WooCommerce-factuuradresvelden te filteren.

Aangezien Ultimate Multisite factuuradresvelden heeft, kan het zinvol zijn om de standaardvelden die door WooCommerce op het afrekenformulier worden weergegeven te verwijderen. Standaard wordt er geen waarde aan deze lijst doorgegeven, dus alle velden die op WooCommerce zijn ingesteld om weer te geven, blijven behouden.

### Since

- 2.0.0

### Source

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) at line 277

## Returns

De lijst met te verwijderen velden. Beschikbare waarden zijn onder meer billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email en billing_phone.
