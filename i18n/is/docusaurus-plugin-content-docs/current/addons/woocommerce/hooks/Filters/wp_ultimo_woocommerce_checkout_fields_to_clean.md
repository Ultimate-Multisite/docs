---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Sía - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean {#filter-wpultimowoocommercecheckoutfieldstoclean}

Gerir forriturum kleift að sía sjálfgefna WooCommerce-reiti fyrir reikningsheimilisfang.

Þar sem Ultimate Multisite hefur reiti fyrir reikningsheimilisfang gæti verið skynsamlegt að fjarlægja sjálfgefnu reitina sem WooCommerce birtir á greiðsluforminu. Sjálfgefið er ekkert gildi sent á þennan lista, þannig að allir reitir sem stilltir eru í WooCommerce til birtingar eru varðveittir.

### Síðan {#since}

- 2.0.0
### Uppruni {#source}

Skilgreint í [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) í línu 277


## Skilar {#returns}
Listinn yfir reiti sem á að fjarlægja. Tiltæk gildi eru billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email og billing_phone.
