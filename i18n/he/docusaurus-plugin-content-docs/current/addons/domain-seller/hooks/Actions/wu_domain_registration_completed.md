---
id: wu_domain_registration_completed
title: פעולה - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed {#action-wudomainregistrationcompleted}

מופעל לאחר שהדומיין הירשם בהצלחה.

## פרמטרים {#parameters}

| שם | סוג | תיאור |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | התשלום שגרם להרשמה. |
| $registration_data | `array&lt;string,mixed&gt;` | מטא-דאטה של ההרשמה (domain_name, provider_id, years, expiry_date וכו'). |
| $result | `array&lt;string,mixed&gt;` | מערך תוצאות גולמי שהוחזר על ידי הרשם (registrar). |

### מאז {#since}

- 2.0.0
### מקור {#source}

מוגדר ב[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) בשורה 1204
