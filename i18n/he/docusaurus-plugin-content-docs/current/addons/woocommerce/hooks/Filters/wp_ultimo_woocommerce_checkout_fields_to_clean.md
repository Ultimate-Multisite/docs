---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: פילטר - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

מאפשר למפתחים לסנן את שדות כתובת החיוב (Billing) הדיפולטיים של WooCommerce.

מכיוון ש-Ultimate Multisite מכיל שדות כתובת חיוב, ייתכן שיהיה צורך להסיר את השדות הדיפולטיים ש-WooCommerce מציג בטופס התשלום. כברירת מחדל, לא מועבר ערך לרשימה הזו, ולכן כל השדות שהוגדרו ב-WooCommerce להצגה נשארים פעילים.

### מאז

- 2.0.0
### מקור

מוגדר בקובץ [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) בשורה 277.


## מחזיר
רשימת השדות שיש להסיר. הערכים הזמינים כוללים: billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, ו-billing_phone.
