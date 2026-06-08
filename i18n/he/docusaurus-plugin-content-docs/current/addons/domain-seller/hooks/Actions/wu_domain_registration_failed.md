---
id: wu_domain_registration_failed
title: פעולה - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# פעולה: wu_domain_registration_failed

מופעל לאחר שניסיון רישום דומיין נכשל.

## פרמטרים

| שם | סוג | תיאור |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | התשלום שגרם לניסיון הרישום. |
| $registration_data | `array&lt;string,mixed&gt;` | מטא-דאטה של הרישום, כולל סטטוס=נכשל ומסר שגיאה. |
| $error_message | `string` | הודעת שגיאה קריאה לבני אדם מהרשם. |

### מאז

- 2.0.0
### מקור

מוגדר ב[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) בשורה 1250
