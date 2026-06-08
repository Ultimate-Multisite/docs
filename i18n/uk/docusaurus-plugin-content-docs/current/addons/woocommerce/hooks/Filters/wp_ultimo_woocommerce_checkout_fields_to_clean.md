---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Фільтр - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

Дозволяє розробникам фільтрувати стандартні поля адреси для виставлення рахунку в WooCommerce.

Оскільки Ultimate Multisite має власні поля адреси для виставлення рахунку, може знадобитися прибрати стандартні поля, які WooCommerce відображає на формі оформлення замовлення. За замовчуванням до цього списку не передається жодного значення, тому зберігаються всі поля, налаштовані в WooCommerce для відображення.

### Since

- 2.0.0
### Source

Визначено у [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) на рядку 277


## Returns
Список полів, які потрібно видалити. Доступні значення включають `billing_first_name`, `billing_last_name`, `billing_company`, `billing_country`, `billing_address_1`, `billing_address_2`, `billing_city`, `billing_state`, `billing_postcode`, `billing_email` та `billing_phone`.
