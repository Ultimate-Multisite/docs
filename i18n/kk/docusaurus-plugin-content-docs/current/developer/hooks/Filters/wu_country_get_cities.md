---
id: wu_country_get_cities
title: Сүзгі - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Сүзгі: wu_country_get_cities

Елдегі штат үшін қалалар тізімін қайтарады.

## Параметрлер {#parameters}

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $cities | `array` | Штат қалалары атауларының тізімі. Кілттер жоқ. |
| $country_code | `string` | Елдің екі әріптік ISO коды. |
| $state_code | `string` | Штаттың екі әріптік ISO коды. |
| $current_country | `\WP_Ultimo\Country\Country` | Ағымдағы class данасы. |

### Бастап {#since}

- 2.0.11
### Дереккөзі {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) ішінде 146-жолда анықталған


## Қайтарады {#returns}
Штаттардың сүзілген тізімі.
