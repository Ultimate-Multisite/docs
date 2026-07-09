---
id: get_blogs_of_user
title: ຕົວກອງ - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# ຕົວກອງ: get_blogs_of_user

ຈຳລອງ WP Filter ຕົ້ນສະບັບໄວ້ທີ່ນີ້ ເພື່ອຄວາມຮອບຄອບ.

ກອງລາຍຊື່ເວັບໄຊທີ່ຜູ້ໃຊ້ສັງກັດຢູ່.

## ພາຣາມິເຕີ

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $sites | `object[]` | ອາເຣຂອງອອບເຈັກເວັບໄຊທີ່ເປັນຂອງຜູ້ໃຊ້. |
| $user_id | `int` | ID ຜູ້ໃຊ້. |
| $all | `bool` | ວ່າອາເຣເວັບໄຊທີ່ຖືກສົ່ງກັບຄືນຄວນມີເວັບໄຊທັງໝົດຫຼືບໍ່, ລວມທັງທີ່ຖືກໝາຍວ່າ 'deleted', 'archived', ຫຼື 'spam'. ຄ່າເລີ່ມຕົ້ນ false. |

### ຕັ້ງແຕ່

- 2.0.11
### ແຫຼ່ງທີ່ມາ

ຖືກກຳນົດໃນ [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) ທີ່ບັນທັດ 851
