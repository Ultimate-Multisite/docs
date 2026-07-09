---
id: wu_country_get_administrative_division_name
title: Чыпка - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Чыпка: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

Өлкөнүн административдик бөлүктөрүнүн окууга ыңгайлуу аталышын кайтарат.

## Параметрлер {#parameters}

| Аталышы | Түрү | Сүрөттөмө |
|------|------|-------------|
| $name | `string` | Бөлүктүн аталышы. Адатта штат, провинция, аймак ж.б. сыяктуу нерсе. |
| $country_code | `string` | Өлкө үчүн эки тамгалуу ISO коду. |
| $state_code | `string` | Штат үчүн эки тамгалуу ISO коду. |
| $ucwords | `bool` | эгер сөздөрдү баш тамга менен жазсак. |
| $current_country | `\WP_Ultimo\Country\Country` | Учурдагы класстын нускасы. |

### Качантан бери {#since}

- 2.0.11
### Булак {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) ичинде 250-сапта аныкталган


## Кайтарат {#returns}
Өзгөртүлгөн бөлүк аталышын.
