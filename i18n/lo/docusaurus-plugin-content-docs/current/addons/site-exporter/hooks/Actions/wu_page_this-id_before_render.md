---
id: wu_page_this-id_before_render
title: 'ການກະທຳ - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

ເຮັດວຽກກ່ອນການສະແດງໜ້າສະເພາະໜຶ່ງ.

ການນຳໃຊ້: ສ່ວນແບບໄດນາມິກຈຳເປັນຕ້ອງຖືກແທນດ້ວຍ page id ທີ່ຖືກຕ້ອງ, ເຊັ່ນ add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## ພາຣາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | id ຂອງໜ້າ. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ອິນສະແຕນຂອງ Base Admin Page. |

### ຕັ້ງແຕ່ {#since}

- 1.8.2
### ແຫຼ່ງທີ່ມາ {#source}

ຖືກກຳນົດໃນ [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) ທີ່ແຖວ 368
