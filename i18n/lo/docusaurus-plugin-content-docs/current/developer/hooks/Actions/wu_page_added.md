---
id: wu_page_added
title: ການກະທຳ - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# ການກະທຳ: wu_page_added

ອະນຸຍາດໃຫ້ຜູ້ພັດທະນາປລັກອິນເຮັດສິ່ງເພີ່ມເຕີມເມື່ອໜ້າຖືກລົງທະບຽນ.

ຕ່າງຈາກ wu_page_load, ເຊິ່ງຈະເຮັດວຽກພຽງແຕ່ເມື່ອໜ້າສະເພາະກຳລັງຖືກເບິ່ງ, hook ນີ້ຈະເຮັດວຽກໃນຂັ້ນຕອນການລົງທະບຽນສຳລັບທຸກໜ້າຜູ້ເບິ່ງແຍງທີ່ຖືກເພີ່ມໂດຍໃຊ້ໂຄດ Ultimate Multisite.

## ພາລາມິເຕີ

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $page_id | `string` | ID ຂອງໜ້ານີ້. |
| $page_hook | `string` | ຊື່ hook ຂອງໜ້ານີ້. |

### ຕັ້ງແຕ່

- 2.0.0
### ແຫຼ່ງທີ່ມາ

ຖືກກຳນົດໃນ [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) ທີ່ແຖວ 228
