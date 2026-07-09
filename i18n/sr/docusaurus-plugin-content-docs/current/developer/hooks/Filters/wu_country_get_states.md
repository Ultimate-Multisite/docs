---
id: wu_country_get_states
title: Филтер - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Филтер: wu_country_get_states {#filter-wucountrygetstates}

Враћа листу савезних држава/покрајина за ову земљу.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $states | `array` | Листа савезних држава/покрајина у формату XX =&gt; Name. |
| $country_code | `string` | Двословни ISO кôд за земљу. |
| $current_country | `\WP_Ultimo\Country\Country` | Инстанца тренутне класе. |

### Од верзије {#since}

- 2.0.11
### Извор {#source}

Дефинисано у [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) на линији 86


## Враћа {#returns}
Филтрирану листу савезних држава/покрајина.
