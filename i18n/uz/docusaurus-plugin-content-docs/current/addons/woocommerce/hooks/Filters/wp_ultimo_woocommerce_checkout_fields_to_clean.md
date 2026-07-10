---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filtr - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean {#filter-wpultimowoocommercecheckoutfieldstoclean}

Dasturchilarga standart WooCommerce hisob-kitob manzili maydonlarini filtrlash imkonini beradi.

Ultimate Multisite hisob-kitob manzili maydonlariga ega bo‘lgani uchun, checkout formasida WooCommerce tomonidan ko‘rsatiladigan standart maydonlarni olib tashlash mantiqli bo‘lishi mumkin. Sukut bo‘yicha bu ro‘yxatga hech qanday qiymat uzatilmaydi, shuning uchun WooCommerce’da ko‘rsatilishi uchun sozlangan barcha maydonlar saqlanadi.

### Joriy qilingan versiya {#since}

- 2.0.0
### Manba {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) ichida 277-qatorda aniqlangan


## Qaytaradi {#returns}
Olib tashlanadigan maydonlar ro‘yxati. Mavjud qiymatlarga billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email va billing_phone kiradi.
