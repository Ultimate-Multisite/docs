---
id: wu_country_get_cities
title: Filter - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

Vraća listu gradova za državnu jedinicu u određenoj zemlji.

## Parametri

| Name | Type | Opis |
|------|------|-------------|
| $cities | `array` | Lista imena gradova državne jedinice. Nema ključeva. |
| $country_code | `string` | Dvosločni ISO kod za zemlju. |
| $state_code | `string` | Dvosločni ISO kod za državnu jedinicu. |
| $current_country | `\WP_Ultimo\Country\Country` | Instanca trenutne klase. |

### Od

- 2.0.11
### Izvor

Definisano je u [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) na liniji 146


## Vraća
Filtrirana lista državnih jedinica.
