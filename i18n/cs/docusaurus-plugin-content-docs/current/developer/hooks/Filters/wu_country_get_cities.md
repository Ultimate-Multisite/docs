---
id: wu_country_get_cities
title: Filter - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

Vrací seznam měst pro daný stát v dané zemi.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $cities | `array` | Seznam názvů měst v rámci státu. Neobsahuje klíče. |
| $country_code | `string` | Dvojznakový ISO kód země. |
| $state_code | `string` | Dvojznakový ISO kód státu. |
| $current_country | `\WP_Ultimo\Country\Country` | Instanci aktuální třídy. |

### Od {#since}

- 2.0.11
### Zdroj {#source}

Definováno v [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) na řádku 146


## Vrací {#returns}
Přefiltrovaný seznam států.
