---
id: wu_country_get_states
title: Filtro - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filtro: wu_country_get_states

Devuelve la lista de estados para este país.

## Parámetros

| Nombre | Tipo | Descripción |
|--------|------|-------------|
| $states | `array` | Lista de estados en formato XX => Nombre. |
| $country_code | `string` | Código ISO de dos letras para el país. |
| $current_country | `\WP_Ultimo\Country\Country` | Instancia de la clase actual. |

### Desde

- 2.0.11

### Fuente

Definido en [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) en la línea 86

## Devuelve

La lista filtrada de estados.
