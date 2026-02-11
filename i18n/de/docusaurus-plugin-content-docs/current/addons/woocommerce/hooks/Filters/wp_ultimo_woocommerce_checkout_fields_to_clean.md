---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filter - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

Ermöglicht Entwicklern, die Standard-WooCommerce-Rechnungsadresse-Felder zu filtern.

Da Ultimate Multisite Rechnungsadresse-Felder hat, könnte es sinnvoll sein, die Standardfelder, die von WooCommerce im Checkout-Formular angezeigt werden, zu entfernen. Standardmäßig wird dieser Liste kein Wert übergeben, sodass alle Felder, die in WooCommerce konfiguriert sind, um angezeigt zu werden, beibehalten werden.

### Since

- 2.0.0

### Source

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) at line 277

## Returns

Die Liste der zu entfernenden Felder. Verfügbare Werte umfassen billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email und billing_phone.
