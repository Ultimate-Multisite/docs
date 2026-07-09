---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Фильтр - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

Иштеп чыгуучуларга WooCommerce эсептешүү дареги талааларын чыпкалоого мүмкүндүк берет.

Ultimate Multisite эсептешүү дареги талааларына ээ болгондуктан, checkout формасында WooCommerce тарабынан көрсөтүлгөн демейки талааларды алып салуу маанилүү болушу мүмкүн. Демейки боюнча, бул тизмеге эч кандай маани өткөрүлбөйт, ошондуктан WooCommerce ичинде көрсөтүүгө конфигурацияланган бардык талаалар сакталат.

### Бери

- 2.0.0
### Булак

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) ичинде 277-сапта аныкталган


## Кайтарымдар
Алып салынуучу талаалардын тизмеси. Жеткиликтүү маанилерге billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email жана billing_phone кирет.
