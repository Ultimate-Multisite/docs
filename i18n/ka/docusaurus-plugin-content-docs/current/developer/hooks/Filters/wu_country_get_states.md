---
id: wu_country_get_states
title: ფილტრი - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# ფილტრი: wu_country_get_states {#filter-wucountrygetstates}

აბრუნებს ამ ქვეყნის შტატების სიას.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $states | `array` | შტატების სია XX =&gt; Name ფორმატში. |
| $country_code | `string` | ქვეყნის ორნიშნა ISO კოდი. |
| $current_country | `\WP_Ultimo\Country\Country` | მიმდინარე კლასის ინსტანცია. |

### ვერსიიდან {#since}

- 2.0.11
### წყარო {#source}

განსაზღვრულია [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86)-ში, 86-ე ხაზზე


## აბრუნებს {#returns}
შტატების გაფილტრულ სიას.
