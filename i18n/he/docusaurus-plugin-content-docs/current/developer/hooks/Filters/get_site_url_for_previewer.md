---
id: get_site_url_for_previewer
title: פילטר - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# מסנן: get_site_url_for_previewer

מאפשר למפתחי תוספים לסנן את ה-URL המשמש במציג המקדים (Previewer).

## פרמטרים {#parameters}

| שם | סוג | תיאור |
|------|------|-------------|
| $domain | `string` | דומיין ברירת המחדל המשמש כרגע, שימושי למניפולציות. |
| $domain_options | `array` | רשימה של כל אפשרויות הדומיין שהוזנו בהגדרות Ultimate Multisite -> הגדרות רשת -> אפשרויות דומיין. |

### מאז {#since}

- 1.7.2
### מקור {#source}

מוגדר ב[`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) בשורה 812.


## מחזיר {#returns}
את הדומיין החדש שצריך להשתמש בו.
