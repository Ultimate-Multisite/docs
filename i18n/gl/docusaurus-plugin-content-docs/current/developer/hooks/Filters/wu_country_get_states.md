---
id: wu_country_get_states
title: Filtro - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filter: wu_country_get_states {#filter-wucountrygetstates}

Devolve a lista de estados para este país.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $states | `array` | Lista de estados nun formato XX =&gt; Nome. |
| $country_code | `string` | Código ISO de dúas letras para o país. |
| $current_country | `\WP_Ultimo\Country\Country` | Instancia da clase actual. |

### Desde {#since}

- 2.0.11
### Fonte {#source}

Definido en [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) na liña 86


## Devolve {#returns}
A lista filtrada de estados.
