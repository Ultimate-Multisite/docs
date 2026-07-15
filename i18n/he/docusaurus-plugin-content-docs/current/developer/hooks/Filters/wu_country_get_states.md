---
id: wu_country_get_states
title: פילטר - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filter: wu_country_get_states

מחזיר את רשימת הממדינות של המדינה הזו.

## פרמטרים {#parameters}

| Name | Type | תיאור |
|------|------|-------------|
| $states | `array` | רשימת ממדינות בפורמט XX => שם. |
| $country_code | `string` | קוד ISO בן שני אותיות עבור המדינה. |
| $current_country | `\WP_Ultimo\Country\Country` | מופע של המחלקה הנוכחית. |

### מאז {#since}

- 2.0.11
### מקור {#source}

מוגדר ב[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) בשורה 86


## מחזיר {#returns}
רשימת הממדינות המסוננות.
