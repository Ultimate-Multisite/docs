---
id: wu_country_get_states
title: Szűrő - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Szűrő: wu_country_get_states

Visszaadja a megadott ország állaimainak listáját.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $states | `array` | Állaimak listája egy XX => Neve formátumban. |
| $country_code | `string` | Kétbetű ISO kód az országnak. |
| $current_country | `\WP_Ultimo\Country\Country` | Az aktuális osztály példányát. |

### Since {#since}

- 2.0.11
### Source {#source}

Definíciója található [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) fájlban, 86-sorban.


## Returns {#returns}
A szűrő által módosított állaimak listája.
