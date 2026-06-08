---
id: wp_ultimo_render_vars
title: פילטר - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filter: wp_ultimo_render_vars

מאפשר למפתחי תוספים להוסיף משתנה נוסף להקשר הרינדור באופן גלובלי.

## פרמטרים

| Name | Type | Description |
|------|------|-------------|
| $args | `array` | מערך המכיל משתנים המועברים בקריאת הרינדור. |
| $view | `string` | שם התצוגה (view) שיש לרנדר. |
| $default_view | `string` | שם תצוגת ברירת המחדל (fallback_view). |

### מאז

- 2.0.0
### מקור

מוגדר ב[`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) בשורה 31

## מחזיר
