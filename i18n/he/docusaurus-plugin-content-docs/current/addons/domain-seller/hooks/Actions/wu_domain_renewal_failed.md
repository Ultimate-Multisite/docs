---
id: wu_domain_renewal_failed
title: פעולה - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

מופעל לאחר שניסיון חידוש דומיין נכשל.

## פרמטרים

| שם | סוג | תיאור |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | התשלום שגרם לניסיון החידוש. |
| $renewal_data | `array<string,mixed>` | מטא-דאטה של החידוש (שם הדומיין, שנים, וכו'). |
| $error_message | `string` | הודעת שגיאה קריאה לבני אדם מהרגיסטר. |

### מאז

- 2.0.0
### מקור

מוגדר ב-[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) בשורה 630
