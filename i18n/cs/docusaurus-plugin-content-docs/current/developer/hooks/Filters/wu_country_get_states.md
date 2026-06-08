---
id: wu_country_get_states
title: Filter - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filter: wu_country_get_states

Vrací seznam států pro danou zemi.

## Parametry

| Název | Typ | Popis |
|------|------|-------------|
| $states | `array` | Seznam států ve formátu XX => Název. |
| $country_code | `string` | Dvojznakový ISO kód pro zemi. |
| $current_country | `\WP_Ultimo\Country\Country` | Instancí aktuální třídy. |

### Od

- 2.0.11
### Zdroj

Definováno v [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) na řádku 86


## Vrací
Filtrovaný seznam států.
