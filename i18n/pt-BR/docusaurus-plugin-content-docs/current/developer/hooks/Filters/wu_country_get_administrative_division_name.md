---
id: wu_country_get_administrative_division_name
title: Filtro - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

Retorna um nome agradável das subdivisões administrativas do país.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | O nome da subdivisão. Normalmente algo como estado, província, região, etc. |
| $country_code | `string` | Código ISO de duas letras do país. |
| $state_code | `string` | Código ISO de duas letras do estado. |
| $ucwords | `bool` | se devemos colocar as palavras em maiúsculas. |
| $current_country | `\WP_Ultimo\Country\Country` | Instância da classe atual. |

### Since

- 2.0.11

### Source

Defined in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) at line 250

## Returns
O nome da subdivisão modificado.
