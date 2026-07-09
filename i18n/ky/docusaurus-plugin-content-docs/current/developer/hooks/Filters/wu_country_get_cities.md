---
id: wu_country_get_cities
title: Чыпка - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities {#filter-wucountrygetcities}

Өлкөдөгү штат үчүн шаарлардын тизмесин кайтарат.

## Параметрлер {#parameters}

| Аталышы | Түрү | Сүрөттөмө |
|------|------|-------------|
| $cities | `array` | Штаттын шаар аталыштарынын тизмеси. Ачкычтар жок. |
| $country_code | `string` | Өлкө үчүн эки тамгалуу ISO коду. |
| $state_code | `string` | Штат үчүн эки тамгалуу ISO коду. |
| $current_country | `\WP_Ultimo\Country\Country` | Учурдагы класстын инстанциясы. |

### Чыккан версиясы {#since}

- 2.0.11
### Булак {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) ичинде 146-сапта аныкталган


## Кайтарымдар {#returns}
Штаттардын чыпкаланган тизмеси.
