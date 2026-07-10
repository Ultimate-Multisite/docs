---
id: wu_country_get_cities
title: Фільтр - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Фільтр: wu_country_get_cities {#filter-wucountrygetcities}

Паказвае спіс гарадоў для краі ўнутры краіны.

## Паметры {#parameters}

| Назва | Тып | Апісан |
|------|------|-------------|
| $cities | `array` | Спіс назваў гарадоў краіны. Ключы адсутнічаюць. |
| $country_code | `string` | Двулітарковы ISO-код краіны. |
| $state_code | `string` | Двулітарковы ISO-код краіны. |
| $current_country | `\WP_Ultimo\Country\Country` | Экземплярык бягункай класа. |

### З {#since}

- 2.0.11
### Выклік {#source}

Вызначаны ў [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) на 146-й пасылцы.


## Паказвае {#returns}
Фільтраваны спіс краін.
