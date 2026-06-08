---
id: wu_page_added
title: Action - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

อนุญาตให้ผู้พัฒนาปลั๊กอินสามารถรันโค้ดเพิ่มเติมได้เมื่อมีการลงทะเบียนหน้า (pages are registered)

ต่างจาก `wu_page_load` ที่จะทำงานก็ต่อเมื่อมีการดูหน้าใดหน้าหนึ่งเท่านั้น ฮุกนี้จะทำงานตั้งแต่ขั้นตอนการลงทะเบียนสำหรับทุกหน้าแอดมินที่ถูกเพิ่มโดยใช้โค้ดของ Ultimate Multisite

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | ID ของหน้านี้ |
| $page_hook | `string` | ชื่อฮุกของหน้านี้ |

### Since

- 2.0.0
### Source

กำหนดไว้ใน [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) บรรทัดที่ 228
