---
id: wu_country_get_administrative_division_name
title: Filtro - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filtro: wu_country_get_administrative_division_name

Retorna o nome amigável das subdivisões administrativas do país.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $name | `string` | O nome da divisão. Normalmente algo como estado, província, região, etc. |
| $country_code | `string` | Código ISO de duas letras para o país. |
| $state_code | `string` | Código ISO de duas letras para o estado. |
| $ucwords | `bool` | se colocamos as palavras em maiúsculas. |
| $current_country | `\WP_Ultimo\Country\Country` | Instância da classe atual. |

### Desde {#since}

- 2.0.11
### Fonte {#source}

Definido em [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) na linha 250


## Retorna {#returns}
O nome da divisão modificado.
