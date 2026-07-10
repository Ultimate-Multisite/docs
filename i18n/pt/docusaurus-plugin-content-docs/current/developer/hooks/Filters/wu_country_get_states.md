---
id: wu_country_get_states
title: Filtro - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filtro: wu_country_get_states {#filter-wucountrygetstates}

Retorna a lista de estados para este país.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $states | `array` | Lista de estados num formato XX =&gt; Nome. |
| $country_code | `string` | Código ISO de duas letras para o país. |
| $current_country | `\WP_Ultimo\Country\Country` | Instância da classe atual. |

### Desde {#since}

- 2.0.11
### Fonte {#source}

Definido em [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) na linha 86


## Retornos {#returns}
A lista filtrada de estados.
