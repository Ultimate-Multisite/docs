---
id: wu_country_get_states
title: Filtru - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filter: wu_country_get_states {#filter-wucountrygetstates}

Returnează lista de state pentru această țară.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $states | `array` | Listă de state în formatul XX => Nume. |
| $country_code | `string` | Codul ISO de două litere pentru țară. |
| $current_country | `\WP_Ultimo\Country\Country` | Instanța clasei curente. |

### De la {#since}

- 2.0.11
### Sursă {#source}

Definit în [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) la linia 86


## Returnează {#returns}
Lista filtrată de state.
