---
id: wu_country_get_administrative_division_name
title: ຕົວກອງ - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# ຕົວກອງ: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

ສົ່ງຄືນຊື່ທີ່ສວຍງາມຂອງການແບ່ງເຂດບໍລິຫານຂອງປະເທດ.

## ພາຣາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $name | `string` | ຊື່ຂອງເຂດແບ່ງ. ໂດຍປົກກະຕິແມ່ນສິ່ງຄ້າຍຄື ລັດ, ແຂວງ, ພາກພື້ນ, ແລະອື່ນໆ. |
| $country_code | `string` | ລະຫັດ ISO ສອງຕົວອັກສອນສຳລັບປະເທດ. |
| $state_code | `string` | ລະຫັດ ISO ສອງຕົວອັກສອນສຳລັບລັດ. |
| $ucwords | `bool` | ຖ້າເຮົາປ່ຽນຄຳໃຫ້ເປັນຕົວພິມໃຫຍ່. |
| $current_country | `\WP_Ultimo\Country\Country` | ອິນສະແຕນຂອງຄລາສປັດຈຸບັນ. |

### ຕັ້ງແຕ່ {#since}

- 2.0.11
### ແຫຼ່ງທີ່ມາ {#source}

ກຳນົດໄວ້ໃນ [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) ທີ່ບັນທັດ 250


## ສົ່ງຄືນ {#returns}
ຊື່ເຂດແບ່ງທີ່ຖືກປັບແກ້.
