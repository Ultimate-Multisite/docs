---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filter - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

ገንቢዎች የWooCommerce መደበኛ የክፍያ አድራሻ መስኮቶችን እንዲያጣሩ (filter) ያስችላል።

Ultimate Multisite የክፍያ አድራሻ መስኮቶችን ስለሚይዝ፣ በቼክአውት ፎርም ላይ በWooCommerce የሚታዩትን መደበኛ መስኮቶች ማስወገድ ተገቢ ሊሆን ይችላል። በመደበኛነት (by default) ወደዚህ ዝርዝር ምንም ዋጋ አይተላለፍም፣ ስለዚህ በWooCommerce ላይ እንዲታዩ የተዘጋጁ ሁሉም መስኮቶች ይቀመጣሉ።

### Since

- 2.0.0
### Source

በ[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) ፋይል ውስጥ በ277ኛው መስመር ተገልጿል።

## Returns
የማስወገጃ የሚሆኑት መስኮቶች ዝርዝር። ሊገኙ የሚችሉ ዋጋዎች የሚከተሉትን ያካትታሉ፦ billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, እና billing_phone።
