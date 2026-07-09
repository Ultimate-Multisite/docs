---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Филтр - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Филтр: wp_ultimo_woocommerce_checkout_fields_to_clean {#filter-wpultimowoocommercecheckoutfieldstoclean}

Ба таҳиягарон имкон медиҳад, ки майдонҳои пешфарзи суроғаи ҳисоббаробаркунии WooCommerce-ро филтр кунанд.

Азбаски Ultimate Multisite дорои майдонҳои суроғаи ҳисоббаробаркунӣ аст, метавонад маъно дошта бошад, ки майдонҳои пешфарзе, ки WooCommerce дар формаи checkout нишон медиҳад, хориҷ карда шаванд. Бо нобаёнӣ, ба ин рӯйхат ягон қимат гузаронида намешавад, бинобар ин ҳамаи майдонҳое, ки дар WooCommerce барои намоиш танзим шудаанд, нигоҳ дошта мешаванд.

### Аз {#since}

- 2.0.0
### Манбаъ {#source}

Дар [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) дар сатри 277 муайян шудааст


## Бармегардонад {#returns}
Рӯйхати майдонҳо барои хориҷ кардан. Қиматҳои дастрас billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email ва billing_phone-ро дар бар мегиранд.
