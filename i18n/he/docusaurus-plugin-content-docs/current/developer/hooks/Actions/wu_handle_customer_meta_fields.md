---
id: wu_handle_customer_meta_fields
title: Action - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# פעולה: wu_handle_customer_meta_fields {#action-wuhandlecustomermetafields}

מאפשר למפתחי תוספים לשמור נתוני מטא (meta data) בדרכים שונות, אם הם צריכים לכך.

## פרמטרים {#parameters}

| שם | סוג | תיאור |
|------|------|-------------|
| $meta_repository | `array` | רשימת שדות מטא, מובנה בצורת מפתח => ערך. |
| $customer | `\Customer` | אובייקט הלקוח של Ultimate Multisite. |
| $checkout | `\Checkout` | מחלקת ה-checkout. |

### מאז {#since}

- 2.0.0
### מקור {#source}

מוגדר ב-[inc/checkout/class-checkout.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) בשורה 1211
