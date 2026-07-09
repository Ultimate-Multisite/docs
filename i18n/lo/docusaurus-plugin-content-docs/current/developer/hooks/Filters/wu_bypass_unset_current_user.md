---
id: wu_bypass_unset_current_user
title: ຕົວກອງ - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

ອະນຸຍາດໃຫ້ນັກພັດທະນາຂ້າມ code ທີ່ unset ຜູ້ໃຊ້ປັດຈຸບັນ.

ການສົ່ງຄ່າກັບຄືນອັນໃດກໍຕາມທີ່ບໍ່ແມ່ນ null ຈະຂ້າມການ unset ຂອງຜູ້ໃຊ້ປັດຈຸບັນທີ່ລັອກອິນຢູ່. ນີ້ອາດມີປະໂຫຍດໃນບາງສະຖານະການ, ຕົວຢ່າງ, ເມື່ອຈັດການກັບ site ຍ່ອຍທີ່ຖືກໃຊ້ເປັນແຜງຜູ້ດູແລ.

## ພາຣາມິເຕີ

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null ເພື່ອດຳເນີນຕໍ່, ຢ່າງອື່ນໃດກໍຕາມເພື່ອຂ້າມມັນ. |
| $current_user | `false\|\WP_User` | ອອບເຈັກຜູ້ໃຊ້ປັດຈຸບັນ. |

### ຕັ້ງແຕ່

- 2.0.11
### ແຫຼ່ງທີ່ມາ

ກຳນົດໄວ້ໃນ [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) ທີ່ບັນທັດ 221


## ສົ່ງຄືນ
