---
id: wu_country_get_states
title: Filtro - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filtro: wu_country_get_states

Retorna a lista de estados para este país.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $states | `array` | Lista de estados em um formato XX => Nome. |
| $country_code | `string` | Código ISO de duas letras para o país. |
| $current_country | `\WP_Ultimo\Country\Country` | Instância da classe atual. |

### Since

- 2.0.11

### Source

Defined in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) at line 86

## Returns
A lista filtrada de estados.
