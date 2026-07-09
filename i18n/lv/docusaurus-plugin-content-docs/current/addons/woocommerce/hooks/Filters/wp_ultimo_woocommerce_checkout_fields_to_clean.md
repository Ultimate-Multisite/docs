---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filtrs - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filtrs: wp_ultimo_woocommerce_checkout_fields_to_clean {#filter-wpultimowoocommercecheckoutfieldstoclean}

Ļauj izstrādātājiem filtrēt noklusējuma WooCommerce norēķinu adreses laukus.

Tā kā Ultimate Multisite ir norēķinu adreses lauki, varētu būt lietderīgi noņemt noklusējuma laukus, ko WooCommerce rāda checkout veidlapā. Pēc noklusējuma šim sarakstam netiek nodota neviena vērtība, tāpēc visi WooCommerce konfigurētie rādāmie lauki tiek saglabāti.

### Kopš {#since}

- 2.0.0
### Avots {#source}

Definēts [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) 277. rindā


## Atgriež {#returns}
Noņemamo lauku saraksts. Pieejamās vērtības ietver billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email un billing_phone.
