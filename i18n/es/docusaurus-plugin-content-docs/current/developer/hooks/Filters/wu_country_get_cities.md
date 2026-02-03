---
id: wu_country_get_cities
title: Filtro - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filtro: wu_country_get_cities

Devuelve la lista de ciudades de un estado en un país.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $cities | `array` | Lista de nombres de ciudades del estado. No hay claves presentes. |
| $country_code | `string` | Código ISO de dos letras para el país. |
| $state_code | `string` | Código ISO de dos letras para el estado. |
| $current_country | `\WP_Ultimo\Country\Country` | Instancia de la clase actual. |

### Desde

- 2.0.11

### Fuente

Definido en [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) en la línea 146

## Devuelve

La lista filtrada de estados.
