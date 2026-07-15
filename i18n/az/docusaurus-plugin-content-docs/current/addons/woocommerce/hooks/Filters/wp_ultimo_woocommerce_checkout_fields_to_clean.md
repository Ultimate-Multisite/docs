---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filter - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

Developerlərə default WooCommerce faktura ünvan sahələrini filtrləməyə imkan verir.

Ultimate Multisite-da faktura ünvan sahələri olduğu üçün, WooCommerce tərəfindən ödəniş formasında göstərilən default sahələri silmək məntiqli ola bilər. Default olaraq, bu siyahıya heç bir dəyər ötürülmür, buna görə də WooCommerce-da göstərilməsi üçün konfiqurasiya edilmiş bütün sahələr saxlanılır.

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) at line 277


## Returns {#returns}
Silinəcək sahələrin siyahısı. Mövcud dəyərlər arasında billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email və billing_phone daxildir.
