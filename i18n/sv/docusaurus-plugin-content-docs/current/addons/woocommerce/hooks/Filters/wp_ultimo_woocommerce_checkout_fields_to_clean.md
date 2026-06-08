---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filter - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

Låter utvecklare filtrera standardfälten för faktureringsadress i WooCommerce.

Eftersom Ultimate Multisite har fält för faktureringsadress, kan det vara bra att ta bort de standardfält som WooCommerce visar på kassan. Standardmässigt skickas inget värde till denna lista, vilket innebär att alla fält som är konfigurerade i WooCommerce att visas behålls.

### Sedan

- 2.0.0
### Källa

Definieras i [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) på rad 277


## Returnerar
Listan över fält som ska tas bort. Tillgängliga värden inkluderar billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, och billing_phone.
