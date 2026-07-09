---
id: wu_country_get_cities
title: Iragazkia - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Iragazkia: wu_country_get_cities {#filter-wucountrygetcities}

Herrialde bateko estatu baterako hirien zerrenda itzultzen du.

## Parametroak {#parameters}

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $cities | `array` | Estatu-hirien izenen zerrenda. Ez dago gakorik. |
| $country_code | `string` | Herrialdearen bi letrako ISO kodea. |
| $state_code | `string` | Estatuaren bi letrako ISO kodea. |
| $current_country | `\WP_Ultimo\Country\Country` | Uneko klasearen instantzia. |

### Noiztik {#since}

- 2.0.11
### Iturburua {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) fitxategian definitua, 146. lerroan


## Itzultzen du {#returns}
Estatuen zerrenda iragazia.
