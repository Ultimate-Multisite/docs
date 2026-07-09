---
id: wu_country_get_cities
title: ຕົວກອງ - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities {#filter-wucountrygetcities}

ສົ່ງຄືນລາຍຊື່ເມືອງສຳລັບແຂວງໜຶ່ງໃນປະເທດໜຶ່ງ.

## ພາຣາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $cities | `array` | ລາຍຊື່ຊື່ເມືອງຂອງແຂວງ. ບໍ່ມີຄີ. |
| $country_code | `string` | ລະຫັດ ISO ສອງຕົວອັກສອນສຳລັບປະເທດ. |
| $state_code | `string` | ລະຫັດ ISO ສອງຕົວອັກສອນສຳລັບແຂວງ. |
| $current_country | `\WP_Ultimo\Country\Country` | instance ຂອງ class ປັດຈຸບັນ. |

### ຕັ້ງແຕ່ {#since}

- 2.0.11
### ແຫຼ່ງທີ່ມາ {#source}

ກຳນົດໄວ້ໃນ [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) ທີ່ບັນທັດ 146


## ສົ່ງຄືນ {#returns}
ລາຍຊື່ແຂວງທີ່ຖືກກັ່ນຕອງ.
