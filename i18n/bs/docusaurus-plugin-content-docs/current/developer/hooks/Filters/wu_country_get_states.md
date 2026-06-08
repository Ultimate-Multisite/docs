---
id: wu_country_get_states
title: Filter - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filter: wu_country_get_states

Vraća listu državnih entiteta za ovu zemlju.

## Parametri

| Ime | Tip | Opis |
|------|------|-------------|
| $states | `array` | Lista državnih entiteta u formatu XX => Ime. |
| $country_code | `string` | Dvosločni ISO kod za zemlju. |
| $current_country | `\WP_Ultimo\Country\Country` | Instanca trenutne klase. |

### Od

- 2.0.11
### Izvor

Definisano je u [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) na liniji 86


## Vraća
Filtrirana lista državnih entiteta.
