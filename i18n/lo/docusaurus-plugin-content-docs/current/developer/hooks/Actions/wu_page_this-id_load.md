---
id: wu_page_this-id_load
title: 'ການກະທຳ - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_\{$this->id\}_load

ອະນຸຍາດໃຫ້ນັກພັດທະນາສ່ວນເສີມເພີ່ມ hook ເພີ່ມເຕີມໃສ່ໜ້າຂອງພວກເຮົາ.

## ພາຣາມິເຕີ

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $id | `string` | ID ຂອງໜ້ານີ້. |
| $page_hook | `string` | hook ຂອງໜ້ານີ້. |
| $admin_page | `self` | instance ຂອງໜ້ານີ້. |

### ຕັ້ງແຕ່

- 1.8.2
- 2.0.4: ເພີ່ມພາຣາມິເຕີທີສາມ: instance ຂອງໜ້າ.
### ແຫຼ່ງທີ່ມາ

ກຳນົດໄວ້ໃນ [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) ທີ່ແຖວ 332
