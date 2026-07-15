---
id: wu_domain_renewal_completed
title: פעולה - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

מופעל לאחר שדומיין הוחלף בהצלחה.

## פרמטרים {#parameters}

| שם | סוג | תיאור |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | התשלום שגרם לחידוש. |
| $renewal_data | `array<string,mixed>` | מטא-דאטה של חידוש (שם הדומיין, שנים, מזהה לקוח וכו'). |
| $result | `array<string,mixed>` | מערך תוצאות גולמי שהוציא הרשם, כולל תאריך תפוגה חדש. |

### מאז {#since}

- 2.0.0
### מקור {#source}

מוגדר ב[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) בשורה 594
