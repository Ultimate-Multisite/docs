---
id: wu_country_get_cities
title: ფილტრი - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# ფილტრი: wu_country_get_cities

აბრუნებს ქვეყნის შტატისთვის ქალაქების სიას.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $cities | `array` | შტატის ქალაქების სახელების სია. გასაღებები არ არის წარმოდგენილი. |
| $country_code | `string` | ქვეყნის ორნიშნა ISO კოდი. |
| $state_code | `string` | შტატის ორნიშნა ISO კოდი. |
| $current_country | `\WP_Ultimo\Country\Country` | მიმდინარე კლასის ეგზემპლარი. |

### ვერსიიდან {#since}

- 2.0.11
### წყარო {#source}

განსაზღვრულია [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146)-ში, 146-ე ხაზზე


## აბრუნებს {#returns}
შტატების გაფილტრულ სიას.
