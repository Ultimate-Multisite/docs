---
id: wu_connector_enforcement_option_keys
title: מסנן - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys {#filter-wuconnectorenforcementoptionkeys}

מסנן את רשימת מפתחות האופציות של ספקי ה-AI שמוטמעים מהאתר הראשי.

הוסף מפתחות אופציות עבור תוספי ספקי AI מותאמים אישית או צד שלישי, כך שההגדרות שלהם יורשו גם מהאתר הראשי באתרים המשניים.

## פרמטרים {#parameters}

| Name | Type | תיאור |
|------|------|-------------|
| $keys | `string[]` | שמות מפתחות האופציות שיש לאכוף (כולל כבר מפתחות מחברים שזוהו באופן דינמי ו-EXTRA_PROVIDER_OPTIONS). |

### מאז {#since}

- 1.2.0
### מקור {#source}

מוגדר ב-[inc/managers/class-connector-enforcement.php](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) בשורה 206
