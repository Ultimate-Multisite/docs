---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Сүзгі - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

Әзірлеушілерге әдепкі WooCommerce төлем мекенжайы өрістерін сүзуге мүмкіндік береді.

Ultimate Multisite жүйесінде төлем мекенжайы өрістері болғандықтан, checkout формасында WooCommerce көрсететін әдепкі өрістерді алып тастаудың мәні болуы мүмкін. Әдепкі бойынша, бұл тізімге ешқандай мән берілмейді, сондықтан WooCommerce жүйесінде көрсетілуге бапталған барлық өрістер сақталады.

### Шыққан нұсқасы

- 2.0.0
### Дереккөзі

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) файлында 277-жолда анықталған


## Қайтарылады
Алып тасталатын өрістер тізімі. Қолжетімді мәндерге billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email және billing_phone кіреді.
