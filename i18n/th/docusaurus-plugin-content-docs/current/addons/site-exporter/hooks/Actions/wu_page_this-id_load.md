---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

ช่วยให้ผู้พัฒนาปลั๊กอินสามารถเพิ่ม hook พิเศษให้กับหน้าเพจที่กำหนดได้

**วิธีใช้:** ส่วนที่เป็นตัวแปร (dynamic part) ต้องถูกแทนที่ด้วย ID ของหน้าเพจที่ถูกต้อง ตัวอย่างเช่น add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## พารามิเตอร์ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID ของหน้าเพจนี้ |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook ที่ถูกสร้างขึ้นสำหรับหน้าเพจนี้ |

### ตั้งแต่ {#since}

- 1.8.2
### แหล่งที่มา {#source}

ถูกกำหนดไว้ใน [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) บรรทัดที่ 301
