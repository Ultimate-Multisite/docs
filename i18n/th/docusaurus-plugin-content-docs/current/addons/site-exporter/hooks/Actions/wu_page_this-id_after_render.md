---
id: wu_page_this-id_after_render
title: 'Action - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_{$this->id}_after_render {#action-wupagethis-idafterrender}

จะทำงานหลังจากที่เรนเดอร์หน้าเพจที่กำหนดเสร็จแล้ว

**วิธีการใช้งาน:** ส่วนที่เป็น dynamic ต้องแทนที่ด้วย ID ของหน้าเพจที่ถูกต้อง เช่น `add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);`

## พารามิเตอร์ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID ของหน้าเพจนั้นๆ |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | อินสแตนซ์ของ Base Admin Page |

### ตั้งแต่ {#since}

- 1.8.2
### แหล่งที่มา {#source}

ถูกกำหนดไว้ใน [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) บรรทัดที่ 394
