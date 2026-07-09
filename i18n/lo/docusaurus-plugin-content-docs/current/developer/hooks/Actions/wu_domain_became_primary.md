---
id: wu_domain_became_primary
title: ການກະທຳ - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# ການກະທຳ: wu_domain_became_primary

ເກີດຂຶ້ນເມື່ອໂດເມນກາຍເປັນໂດເມນຫຼັກສຳລັບເວັບໄຊ.

ການກະທຳນີ້ຖືກກະຕຸ້ນເມື່ອ flag primary_domain ຂອງໂດເມນຖືກຕັ້ງເປັນ true, ບໍ່ວ່າໃນເວລາສ້າງໂດເມນຫຼັກໃໝ່ ຫຼືໃນເວລາອັບເດດໂດເມນທີ່ມີຢູ່ໃຫ້ກາຍເປັນໂດເມນຫຼັກ.

## ພາຣາມິເຕີ

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | ໂດເມນທີ່ກາຍເປັນໂດເມນຫຼັກ. |
| $blog_id | `int` | ID ບລັອກຂອງເວັບໄຊທີ່ໄດ້ຮັບຜົນກະທົບ. |
| $was_new | `bool` | ວ່ານີ້ເປັນໂດເມນທີ່ສ້າງໃໝ່ຫຼືບໍ່. |

### ຕັ້ງແຕ່

- 2.0.0
### ແຫຼ່ງທີ່ມາ

ກຳນົດໄວ້ໃນ [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) ທີ່ບັນທັດ 560
