---
id: wu_country_get_administrative_division_name
title: מסנן - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

מחזיר את השם המעוצב של החלוקות המנהליות של המדינה.

## פרמטרים {#parameters}

| Name | Type | תיאור |
|------|------|-------------|
| $name | `string` | שם החלוקה. בדרך כלל משהו כמו מדינה, מחוז, אזור וכו'. |
| $country_code | `string` | קוד ISO בן שני אותיות עבור המדינה. |
| $state_code | `string` | קוד ISO בן שני אותיות עבור המדינה (או: המחוז). |
| $ucwords | `bool` | אם נרצה להפוך את המילים לאותיות גדולות (Uppercase). |
| $current_country | `\WP_Ultimo\Country\Country` | מופע של המחלקה הנוכחית. |

### מאז {#since}

- 2.0.11
### מקור {#source}

מוגדר ב-[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) בשורה 250

## מחזיר {#returns}
את שם החלוקה המעודכן.
