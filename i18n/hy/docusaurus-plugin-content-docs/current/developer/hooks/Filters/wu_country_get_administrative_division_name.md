---
id: wu_country_get_administrative_division_name
title: Զտիչ - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Ֆիլտր: wu_country_get_administrative_division_name

Վերադարձնում է երկրի վարչական ենթաբաժինների գեղեցիկ անվանումը։

## Պարամետրեր {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | Ենթաբաժնի անվանումը։ Սովորաբար՝ նահանգ, մարզ, շրջան և այլն։ |
| $country_code | `string` | Երկրի երկտառ ISO կոդը։ |
| $state_code | `string` | Նահանգի երկտառ ISO կոդը։ |
| $ucwords | `bool` | արդյոք բառերը մեծատառերով ենք գրում։ |
| $current_country | `\WP_Ultimo\Country\Country` | Ընթացիկ դասի նմուշը։ |

### Սկսած {#since}

- 2.0.11
### Աղբյուր {#source}

Սահմանված է [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250)-ում՝ 250-րդ տողում


## Վերադարձնում է {#returns}
Փոփոխված ենթաբաժնի անվանումը։
