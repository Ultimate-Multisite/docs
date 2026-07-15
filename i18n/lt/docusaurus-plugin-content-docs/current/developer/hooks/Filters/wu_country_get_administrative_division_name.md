---
id: wu_country_get_administrative_division_name
title: Filtras - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filtras: wu_country_get_administrative_division_name

Grąžina gražų šalies administracinių poskyrių pavadinimą.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $name | `string` | Poskyrio pavadinimas. Paprastai kažkas panašaus į valstiją, provinciją, regioną ir pan. |
| $country_code | `string` | Dviejų raidžių šalies ISO kodas. |
| $state_code | `string` | Dviejų raidžių valstijos ISO kodas. |
| $ucwords | `bool` | ar žodžius rašome didžiosiomis raidėmis. |
| $current_country | `\WP_Ultimo\Country\Country` | Dabartinės klasės egzempliorius. |

### Nuo {#since}

- 2.0.11
### Šaltinis {#source}

Apibrėžta [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) 250 eilutėje


## Grąžina {#returns}
Pakeistą poskyrio pavadinimą.
