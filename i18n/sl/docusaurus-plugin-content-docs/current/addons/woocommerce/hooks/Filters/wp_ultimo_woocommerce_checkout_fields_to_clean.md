---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filter - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean {#filter-wpultimowoocommercecheckoutfieldstoclean}

Razvijalcem omogoča filtriranje privzetih polj naslova za obračun WooCommerce.

Ker ima Ultimate Multisite polja naslova za obračun, je morda smiselno odstraniti privzeta polja, ki jih WooCommerce prikaže na obrazcu za checkout. Privzeto se temu seznamu ne posreduje nobena vrednost, zato se ohranijo vsa polja, konfigurirana v WooCommerce za prikaz.

### Od različice {#since}

- 2.0.0
### Vir {#source}

Definirano v [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) v vrstici 277


## Vrne {#returns}
Seznam polj za odstranitev. Razpoložljive vrednosti vključujejo billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email in billing_phone.
