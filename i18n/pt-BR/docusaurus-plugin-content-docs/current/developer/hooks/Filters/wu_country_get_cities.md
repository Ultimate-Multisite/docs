---
id: wu_country_get_cities
title: Filtro - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

Retorna a lista de cidades de um estado em um país.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $cities | `array` | Lista de nomes de cidades do estado. Não há chaves presentes. |
| $country_code | `string` | Código ISO de duas letras para o país. |
| $state_code | `string` | Código ISO de duas letras para o estado. |
| $current_country | `\WP_Ultimo\Country\Country` | Instância da classe atual. |

### Since

- 2.0.11

### Source

Defined in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) at line 146

## Returns

A lista filtrada de estados.
