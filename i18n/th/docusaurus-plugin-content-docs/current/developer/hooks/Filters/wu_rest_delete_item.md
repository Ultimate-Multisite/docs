---
id: wu_rest_delete_item
title: ตัวกรอง - wu_rest_delete_item
sidebar_label: wu_rest_delete_item
_i18n_hash: ea4a29625c1aef260edc421b300d59cc
---
# Filter: wu_rest_delete_item

ใช้สำหรับตรวจสอบว่าอนุญาตให้ดำเนินการตามคำขอได้หรือไม่

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $allowed | `bool` | ค่าที่ส่งกลับเริ่มต้น (Initial return value) |
| $rest_base | `array` | Slug ของเอนทิตี (Entity slug) |
| $this | `\Base_Manager` | อินสแตนซ์ของอ็อบเจกต์ |

### Since

- 2.0.0
### Source

กำหนดไว้ใน [`inc/apis/trait-rest-api.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-rest-api.php#L440) บรรทัดที่ 440
