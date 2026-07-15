---
id: wu_page_this-id_register_widgets
title: 'Action - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_\{$this->id\}_register_widgets

จะทำงานหลังจากที่มีการลงทะเบียนวิดเจ็ตสำหรับหน้านี้เรียบร้อยแล้ว

ส่วนที่เปลี่ยนแปลงได้ของชื่อ hook คือ `$this->id` หมายถึง ID ของหน้า (page id)

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | ID ของหน้า |
| $page_hook | `string` | hook ของหน้า |
| $page | `object` | อ็อบเจกต์ของหน้า |

### Since {#since}

- 2.4.10
### Source {#source}

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) at line 755
