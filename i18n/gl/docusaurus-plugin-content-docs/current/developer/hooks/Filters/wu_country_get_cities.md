---
id: wu_country_get_cities
title: Filtro - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filtro: wu_country_get_cities

Devolve a lista de cidades dun estado nun país.

## Parámetros

| Nome | Tipo | Descrición |
|------|------|-------------|
| $cities | `array` | Lista de nomes de cidades do estado. Non hai chaves presentes. |
| $country_code | `string` | Código ISO de dúas letras para o país. |
| $state_code | `string` | Código ISO de dúas letras para o estado. |
| $current_country | `\WP_Ultimo\Country\Country` | Instancia da clase actual. |

### Desde

- 2.0.11
### Fonte

Definido en [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) na liña 146


## Devolve
A lista filtrada de estados.
