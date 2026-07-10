---
id: wu_enforce_password_rules
title: ຕົວກອງ - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules {#filter-wuenforcepasswordrules}

Filter ວ່າຈະບັງຄັບໃຊ້ກົດລະບຽບລະຫັດຜ່ານເພີ່ມເຕີມຫຼືບໍ່.

ເມື່ອເປັນ true, ຈະບັງຄັບໃຊ້ຄວາມຍາວຕ່ຳສຸດ ແລະຂໍ້ກຳນົດດ້ານຕົວອັກສອນ. ເປີດໃຊ້ອັດຕະໂນມັດສຳລັບການຕັ້ງຄ່າ "Super Strong" ຫຼືເມື່ອຟີເຈີ Strong Password ຂອງ Defender Pro ກຳລັງໃຊ້ງານ.

## ພາລາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $enforce_rules | `bool` | ວ່າຈະບັງຄັບໃຊ້ກົດລະບຽບເພີ່ມເຕີມຫຼືບໍ່. |
| $strength_setting | `string` | ຄ່າການຕັ້ງຄ່າຂອງ admin. |
| $defender_active | `bool` | ວ່າ Defender Pro Strong Password ກຳລັງໃຊ້ງານຫຼືບໍ່. |

### ຕັ້ງແຕ່ {#since}

- 2.4.0
### ແຫຼ່ງທີ່ມາ {#source}

ກຳນົດໄວ້ໃນ [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) ທີ່ແຖວ 531
