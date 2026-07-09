---
id: wu_country_get_administrative_division_name
title: Фильтр - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Фильтр: wu_country_get_administrative_division_name

Илнең административ бүленешләренең матур исемен кайтара.

## Параметрлар

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $name | `string` | Бүленеш исеме. Гадәттә state, province, region һ.б. кебек нәрсә. |
| $country_code | `string` | Ил өчен ике хәрефле ISO коды. |
| $state_code | `string` | Штат өчен ике хәрефле ISO коды. |
| $ucwords | `bool` | сүзләрне баш хәрефкә әйләндерәбезме. |
| $current_country | `\WP_Ultimo\Country\Country` | Агымдагы класс экземпляры. |

### Версиядән башлап

- 2.0.11
### Чыганак

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) эчендә, 250 нче юлда билгеләнгән


## Кайтара
Үзгәртелгән бүленеш исемен.
