---
id: wu_country_get_administrative_division_name
title: Шүүлтүүр - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Шүүлтүүр: wu_country_get_administrative_division_name

Улсын засаг захиргааны дэд нэгжүүдийн зөв нэрийг буцаана.

## Параметрүүд

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $name | `string` | Дэд нэгжийн нэр. Ихэвчлэн state, province, region гэх мэт байна. |
| $country_code | `string` | Улсын хоёр үсэгтэй ISO код. |
| $state_code | `string` | Мужийн хоёр үсэгтэй ISO код. |
| $ucwords | `bool` | үгсийг том үсгээр эхлүүлэх эсэх. |
| $current_country | `\WP_Ultimo\Country\Country` | Одоогийн классын экземпляр. |

### Хувилбараас

- 2.0.11
### Эх сурвалж

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250)-д 250-р мөрөнд тодорхойлсон


## Буцаана
Өөрчилсөн дэд нэгжийн нэр.
