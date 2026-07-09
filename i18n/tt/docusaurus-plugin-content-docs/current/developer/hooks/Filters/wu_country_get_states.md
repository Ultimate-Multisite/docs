---
id: wu_country_get_states
title: Фильтр - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filter: wu_country_get_states {#filter-wucountrygetstates}

Бу ил өчен штатлар исемлеген кайтара.

## Параметрлар {#parameters}

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $states | `array` | XX =&gt; Name форматындагы штатлар исемлеге. |
| $country_code | `string` | Ил өчен ике хәрефле ISO коды. |
| $current_country | `\WP_Ultimo\Country\Country` | Агымдагы класс нөсхәсе. |

### Кертелгән {#since}

- 2.0.11
### Чыганак {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) эчендә, 86 нчы юлда билгеләнгән


## Кайтара {#returns}
Штатларның фильтрланган исемлеген.
