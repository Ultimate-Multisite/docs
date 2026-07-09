---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filter – wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

Umožňuje vývojárom filtrovať predvolené polia fakturačnej adresy WooCommerce.

Keďže Ultimate Multisite má polia fakturačnej adresy, môže dávať zmysel odstrániť predvolené polia zobrazované WooCommerce vo formulári checkoutu. Predvolene sa do tohto zoznamu neodovzdáva žiadna hodnota, takže všetky polia nakonfigurované vo WooCommerce na zobrazenie zostávajú zachované.

### Od verzie

- 2.0.0
### Zdroj

Definované v [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) na riadku 277


## Návratová hodnota
Zoznam polí na odstránenie. Dostupné hodnoty zahŕňajú billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email a billing_phone.
