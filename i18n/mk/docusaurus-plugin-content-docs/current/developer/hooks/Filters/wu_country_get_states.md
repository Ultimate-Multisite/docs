---
id: wu_country_get_states
title: Филтер - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Филтер: wu_country_get_states

Ја враќа листата на сојузни држави за оваа земја.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $states | `array` | Листа на сојузни држави во формат XX =&gt; Име. |
| $country_code | `string` | Двобуквен ISO код за земјата. |
| $current_country | `\WP_Ultimo\Country\Country` | Инстанца од тековната класа. |

### Од верзија {#since}

- 2.0.11
### Извор {#source}

Дефинирано во [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) на линија 86


## Враќа {#returns}
Филтрираната листа на сојузни држави.
