---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Фильтр - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Фильтр: wp_ultimo_woocommerce_checkout_fields_to_clean

Позволяет разработчикам фильтровать стандартные поля адреса выставления счета WooCommerce.

Поскольку Ultimate Multisite имеет поля адреса выставления счета, имеет смысл удалить стандартные поля, отображаемые WooCommerce в форме оформления заказа. По умолчанию в этот список не передаётся значение, поэтому все поля, настроенные в WooCommerce для отображения, сохраняются.

### С версии

- 2.0.0

### Источник

Определено в [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) на строке 277

## Возвращает

Список полей, которые нужно удалить. Доступные значения включают billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email и billing_phone.
