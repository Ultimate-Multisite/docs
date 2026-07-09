---
id: wu_minimum_password_length
title: ຕົວກັ່ນຕອງ - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# ຕົວກອງ: wu_minimum_password_length

ກອງຄວາມຍາວຂັ້ນຕ່ຳຂອງລະຫັດຜ່ານ.

ບັງຄັບໃຊ້ສະເພາະເມື່ອ wu_enforce_password_rules ເປັນ true.

## ພາຣາມິເຕີ

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $min_length | `int` | ຄວາມຍາວຂັ້ນຕ່ຳຂອງລະຫັດຜ່ານ. ຄ່າເລີ່ມຕົ້ນ 12 (ກົງກັບ Defender Pro). |
| $defender_active | `bool` | ວ່າ Defender Pro Strong Password ເປີດໃຊ້ຢູ່ຫຼືບໍ່. |

### ຕັ້ງແຕ່

- 2.4.0
### ແຫຼ່ງທີ່ມາ

ກຳນົດໄວ້ໃນ [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) ທີ່ແຖວ 543
