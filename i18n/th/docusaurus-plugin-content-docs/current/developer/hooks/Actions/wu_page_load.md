---
id: wu_page_load
title: การกระทำ - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load

อนุญาตให้ผู้พัฒนาปลั๊กอินสามารถเพิ่ม hook พิเศษในหน้าของเราได้

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | ID ของหน้านี้ |
| $page_hook | `string` | Hook ของหน้าเพจนี้ |
| $admin_page | `self` | อินสแตนซ์ของหน้าเพจ |

### Since

- 1.8.2
- 2.0.4: เพิ่มพารามิเตอร์ตัวที่สาม: อินสแตนซ์ของหน้าเพจ
### Source

กำหนดไว้ใน [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) บรรทัดที่ 318
