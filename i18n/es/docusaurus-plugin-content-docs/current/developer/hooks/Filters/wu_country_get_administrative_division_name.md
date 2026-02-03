---
id: wu_country_get_administrative_division_name
title: Filtro - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

Devuelve un nombre agradable de las subdivisiones administrativas del país.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | El nombre de la división. Generalmente algo como estado, provincia, región, etc. |
| $country_code | `string` | Código ISO de dos letras para el país. |
| $state_code | `string` | Código ISO de dos letras para el estado. |
| $ucwords | `bool` | si convertimos a mayúsculas las palabras. |
| $current_country | `\WP_Ultimo\Country\Country` | Instancia de la clase actual. |

### Since

- 2.0.11

### Source

Defined in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) at line 250

## Returns

El nombre de la división modificado.
