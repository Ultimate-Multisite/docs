---
id: wu_country_get_states
title: Filter - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filter: wu_country_get_states

Tagastab selle riigi osariikide loendi.

## Parameetrid {#parameters}

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $states | `array` | Osariikide loend formaadis XX =&gt; Name. |
| $country_code | `string` | Riigi kahetäheline ISO-kood. |
| $current_country | `\WP_Ultimo\Country\Country` | Praeguse klassi eksemplar. |

### Alates {#since}

- 2.0.11
### Allikas {#source}

Määratletud failis [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) real 86


## Tagastab {#returns}
Filtreeritud osariikide loendi.
