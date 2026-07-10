---
id: wu_country_get_administrative_division_name
title: Filtro - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filtro: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

Devolve o nome lexible das subdivisións administrativas do país.

## Parámetros {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | O nome da división. Normalmente algo como estado, provincia, rexión, etc. |
| $country_code | `string` | Código ISO de dúas letras para o país. |
| $state_code | `string` | Código ISO de dúas letras para o estado. |
| $ucwords | `bool` | se poñemos as palabras en maiúsculas. |
| $current_country | `\WP_Ultimo\Country\Country` | Instancia da clase actual. |

### Desde {#since}

- 2.0.11
### Fonte {#source}

Definido en [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) na liña 250


## Devolve {#returns}
O nome de división modificado.
