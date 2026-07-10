---
id: wu_page_added
title: การกระทำ - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added {#action-wupageadded}

อนุญาตให้นักพัฒนาปลั๊กอินสามารถรันโค้ดเพิ่มเติมได้เมื่อมีการลงทะเบียนหน้า (pages)

ต่างจาก `wu_page_load` ที่จะทำงานก็ต่อเมื่อมีการเรียกดูหน้าใดหน้าหนึ่งโดยเฉพาะ, hook นี้จะทำงานเมื่อมีการลงทะเบียนหน้าทุกหน้าในส่วน Admin โดยใช้โค้ดของ WP Ultimo

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID ของหน้านี้ |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook ที่ถูกสร้างขึ้นสำหรับหน้านี้ |

### Since {#since}

- 2.0.0
### Source {#source}

กำหนดไว้ใน [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) บรรทัดที่ 203
