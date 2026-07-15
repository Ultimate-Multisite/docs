---
id: wu_page_this-id_load
title: 'การดำเนินการ - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_{$this->id}_load

อนุญาตให้ผู้พัฒนา plugin สามารถเพิ่ม hooks ต่างๆ เข้ามาในหน้าของเราได้

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | ID ของหน้านี้ |
| $page_hook | `string` | hook ของหน้าเพจนี้ |
| $admin_page | `self` | อินสแตนซ์ของหน้าเพจ |

### Since {#since}

- 1.8.2
- 2.0.4: เพิ่มพารามิเตอร์ตัวที่สาม: อินสแตนซ์ของหน้าเพจ
### Source {#source}

กำหนดไว้ใน [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) บรรทัดที่ 332
