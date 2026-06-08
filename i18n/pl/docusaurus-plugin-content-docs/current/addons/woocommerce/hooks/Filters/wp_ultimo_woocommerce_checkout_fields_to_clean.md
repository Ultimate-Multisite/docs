---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filtr - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filtr: wp_ultimo_woocommerce_checkout_fields_to_clean

Pozwala deweloperom na filtrowanie domyślnych pól adresu rozliczeniowego WooCommerce.

Ponieważ Ultimate Multisite posiada pola adresu rozliczeniowego, może mieć sens usunięcie domyślnych pól wyświetlanych przez WooCommerce na formularzu płatności. Domyślnie do tej listy nie jest przekazywana żadna wartość, więc zachowywane są wszystkie pola skonfigurowane w WooCommerce do wyświetlania.

### Od

- 2.0.0
### Źródło

Zdefiniowane w [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) w linii 277.


## Zwraca
Listę pól do usunięcia. Dostępne wartości obejmują: `billing_first_name`, `billing_last_name`, `billing_company`, `billing_country`, `billing_address_1`, `billing_address_2`, `billing_city`, `billing_state`, `billing_postcode`, `billing_email` oraz `billing_phone`.
