---
id: wu_page_this-id_after_render
title: 'ການກະທຳ - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

ເຮັດວຽກຫຼັງຈາກ render ໜ້າສະເພາະໃດໜຶ່ງ.

ການນຳໃຊ້: ສ່ວນແບບໄດນາມິກຕ້ອງຖືກແທນທີ່ດ້ວຍ page id ທີ່ຖືກຕ້ອງ, ເຊັ່ນ add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## ພາຣາມິເຕີ

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | id ຂອງໜ້າ. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | instance ຂອງ Base Admin Page. |

### ຕັ້ງແຕ່

- 1.8.2
### ແຫຼ່ງທີ່ມາ

ກຳນົດໄວ້ໃນ [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) ທີ່ບັນທັດ 394
