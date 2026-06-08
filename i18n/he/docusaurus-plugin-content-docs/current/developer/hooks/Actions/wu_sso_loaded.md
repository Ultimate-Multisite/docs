---
id: wu_sso_loaded
title: פעולה - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Action: wu_sso_loaded

מאפשר למפתחי תוספים להוסיף ווים (hooks) נוספים, במידת הצורך.

יש לדחות זאת עד ל-`init`, מכיוון ש-SSO הוא משהו שרץ ב-`sunrise`.

## פרמטרים

| שם | סוג | תיאור |
|------|------|-------------|
| $sso | `self` | מחלקת ה-SSO. |

### מאז

- 2.0.0
### מקור

מוגדר ב-[`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) בשורה 285
