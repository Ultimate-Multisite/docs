---
id: wu_country_get_cities
title: פילטר - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

מחזיר את רשימת הערים עבור מדינה (state) בתוך מדינה (country).

## פרמטרים {#parameters}

| שם | סוג | תיאור |
|------|------|-------------|
| $cities | `array` | רשימה של שמות ערים במדינה. אין מפתחות (keys) מוגדרים. |
| $country_code | `string` | קוד ISO בן שני אותיות עבור המדינה. |
| $state_code | `string` | קוד ISO בן שני אותיות עבור המדינה (state). |
| $current_country | `\WP_Ultimo\Country\Country` | מופע של המחלקה הנוכחית. |

### מאז {#since}

- 2.0.11
### מקור {#source}

מוגדר ב-[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) בשורה 146.


## מחזיר {#returns}
רשימת המדינות המסוננות.
