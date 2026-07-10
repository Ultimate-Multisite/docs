---
id: wu_country_get_cities
title: Filtru - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities {#filter-wucountrygetcities}

Returnează lista de orașe pentru un stat dintr-o țară.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $cities | `array` | Listă de nume de orașe ale statului. Nu sunt prezente chei. |
| $country_code | `string` | Cod ISO de două litere pentru țară. |
| $state_code | `string` | Cod ISO de două litere pentru stat. |
| $current_country | `\WP_Ultimo\Country\Country` | Instanța clasei curente. |

### De la {#since}

- 2.0.11
### Sursă {#source}

Definit în [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) la linia 146


## Returnează {#returns}
Lista filtrată de state.
