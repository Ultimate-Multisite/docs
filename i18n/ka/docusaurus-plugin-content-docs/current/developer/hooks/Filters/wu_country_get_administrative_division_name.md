---
id: wu_country_get_administrative_division_name
title: ფილტრი - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# ფილტრი: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

აბრუნებს ქვეყნის ადმინისტრაციული ქვედანაყოფების ლამაზ სახელს.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $name | `string` | ქვედანაყოფის სახელი. ჩვეულებრივ, რაღაც მსგავსი: შტატი, პროვინცია, რეგიონი და ა.შ. |
| $country_code | `string` | ქვეყნის ორასოიანი ISO კოდი. |
| $state_code | `string` | შტატის ორასოიანი ISO კოდი. |
| $ucwords | `bool` | თუ სიტყვებს დიდი ასოებით ვწერთ. |
| $current_country | `\WP_Ultimo\Country\Country` | მიმდინარე კლასის ინსტანცია. |

### ვერსიიდან {#since}

- 2.0.11
### წყარო {#source}

განსაზღვრულია [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250)-ში, 250-ე ხაზზე


## აბრუნებს {#returns}
შეცვლილ ქვედანაყოფის სახელს.
