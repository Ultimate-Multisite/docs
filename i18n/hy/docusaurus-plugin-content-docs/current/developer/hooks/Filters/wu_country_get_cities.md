---
id: wu_country_get_cities
title: Զտիչ - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Զտիչ: wu_country_get_cities {#filter-wucountrygetcities}

Վերադարձնում է երկրի որևէ նահանգի քաղաքների ցանկը։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $cities | `array` | Նահանգի քաղաքների անունների ցանկ։ Բանալիներ չկան։ |
| $country_code | `string` | Երկրի երկտառ ISO կոդը։ |
| $state_code | `string` | Նահանգի երկտառ ISO կոդը։ |
| $current_country | `\WP_Ultimo\Country\Country` | Ընթացիկ դասի օրինակ։ |

### Սկսած {#since}

- 2.0.11
### Աղբյուր {#source}

Սահմանված է [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146)-ում՝ 146-րդ տողում


## Վերադարձնում է {#returns}
Նահանգների զտված ցանկը։
