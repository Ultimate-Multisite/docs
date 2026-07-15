---
id: wu_country_get_states
title: Сүзгі - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Сүзгі: wu_country_get_states

Осы ел үшін штаттар тізімін қайтарады.

## Параметрлер {#parameters}

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $states | `array` | XX =&gt; Name пішіміндегі штаттар тізімі. |
| $country_code | `string` | Елге арналған екі әріпті ISO коды. |
| $current_country | `\WP_Ultimo\Country\Country` | Ағымдағы кластың данасы. |

### Нұсқасы {#since}

- 2.0.11
### Дереккөзі {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) ішінде 86-жолда анықталған


## Қайтарады {#returns}
Штаттардың сүзгіден өткізілген тізімі.
