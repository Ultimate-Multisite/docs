---
id: wu_page_this-id_load
title: 'ການກະທຳ - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

ອະນຸຍາດໃຫ້ນັກພັດທະນາ plugin ເພີ່ມ hook ເພີ່ມເຕີມໃສ່ໜ້າສະເພາະ.

ວິທີໃຊ້: ສ່ວນແບບໄດນາມິກຕ້ອງຖືກແທນດ້ວຍ id ໜ້າທີ່ຖືກຕ້ອງ, ເຊັ່ນ add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## ພາລາມິເຕີ

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID ຂອງໜ້ານີ້. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | hook ທີ່ສ້າງຂຶ້ນສຳລັບໜ້ານີ້. |

### ຕັ້ງແຕ່

- 1.8.2
### ແຫຼ່ງທີ່ມາ

ກຳນົດໄວ້ໃນ [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) ທີ່ແຖວ 301
