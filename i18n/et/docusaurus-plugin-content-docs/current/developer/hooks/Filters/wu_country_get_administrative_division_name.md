---
id: wu_country_get_administrative_division_name
title: Filter - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

Tagastab riigi halduslike alamjaotuste kena nime.

## Parameetrid

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $name | `string` | Jaotuse nimi. Tavaliselt midagi nagu osariik, provints, piirkond jne. |
| $country_code | `string` | Riigi kahetäheline ISO-kood. |
| $state_code | `string` | Osariigi kahetäheline ISO-kood. |
| $ucwords | `bool` | kas muudame sõnad suurtäheliseks. |
| $current_country | `\WP_Ultimo\Country\Country` | Praeguse klassi eksemplar. |

### Alates

- 2.0.11
### Allikas

Määratletud failis [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) real 250


## Tagastab
Muudetud jaotuse nime.
