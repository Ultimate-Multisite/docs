---
id: wu_country_get_cities
title: Filtro - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filtro: wu_country_get_cities

Devolve a lista de cidades para um estado num país.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $cities | `array` | Lista de nomes de cidades do estado. Não há chaves presentes. |
| $country_code | `string` | Código ISO de duas letras para o país. |
| $state_code | `string` | Código ISO de duas letras para o estado. |
| $current_country | `\WP_Ultimo\Country\Country` | Instância da classe atual. |

### Desde {#since}

- 2.0.11
### Fonte {#source}

Definido em [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) na linha 146


## Devolve {#returns}
A lista filtrada de estados.
