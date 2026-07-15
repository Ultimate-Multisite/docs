---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filtru - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

Permite dezvoltatorilor să filtreze câmpurile implicite de adresă de facturare ale WooCommerce.

Deoarece Ultimate Multisite are deja câmpuri pentru adresa de facturare, ar putea fi logic să eliminăm câmpurile standard afișate de WooCommerce pe formularul de checkout. În mod implicit, nu se transmite nicio valoare în această listă, așa că toate câmpurile configurate în WooCommerce pentru a fi afișate sunt păstrate.

### Since {#since}

- 2.0.0
### Source {#source}

Definit în [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) la linia 277


## Returns {#returns}
Lista de câmpuri care trebuie eliminate. Valorile disponibile includ `billing_first_name`, `billing_last_name`, `billing_company`, `billing_country`, `billing_address_1`, `billing_address_2`, `billing_city`, `billing_state`, `billing_postcode`, `billing_email`, și `billing_phone`.
