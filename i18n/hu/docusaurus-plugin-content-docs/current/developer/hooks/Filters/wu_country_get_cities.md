---
id: wu_country_get_cities
title: Szűrő - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities {#filter-wucountrygetcities}

Egy ország államának (vállalatának) városainak listáját adja vissza.

## Paraméterek {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $cities | `array` | Az állam városainak listája. Nincs kulcs (key) hozzárendelve. |
| $country_code | `string` | Kétbetűs ISO kód az ország számára. |
| $state_code | `string` | Kétbetűs ISO kód az állam számára. |
| $current_country | `\WP_Ultimo\Country\Country` | Az aktuális osztály példányát. |

### Since {#since}

- 2.0.11
### Source {#source}

Defined in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) at line 146


## Visszaadja {#returns}
A szűrővel korlátozott államok listáját.
