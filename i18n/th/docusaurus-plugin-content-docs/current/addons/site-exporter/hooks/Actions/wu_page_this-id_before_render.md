---
id: wu_page_this-id_before_render
title: 'Action - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_{$this->id}_before_render

จะทำงานก่อนที่หน้าเพจที่กำหนดจะถูกแสดงผล

วิธีใช้งาน: ส่วนที่เป็นตัวแปร (dynamic part) จะต้องถูกแทนที่ด้วย ID ของหน้าเพจที่ถูกต้อง ตัวอย่างเช่น: `add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);`

## พารามิเตอร์ {#parameters}

| Name | Type | คำอธิบาย |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID ของหน้าเพจ |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | อินสแตนซ์ของ Base Admin Page |

### ตั้งแต่ {#since}

- 1.8.2
### แหล่งที่มา {#source}

ถูกกำหนดไว้ใน [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) ที่บรรทัด 368
