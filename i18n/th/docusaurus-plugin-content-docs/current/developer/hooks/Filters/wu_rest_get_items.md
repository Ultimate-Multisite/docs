---
id: wu_rest_get_items
title: ตัวกรอง - wu_rest_get_items
sidebar_label: wu_rest_get_items
_i18n_hash: cc7851a8307ce40de0b75fc0d9d50693
---
# Filter: wu_rest_get_items {#filter-wurestgetitems}

ตัวกรองนี้ใช้ตรวจสอบว่าสามารถดำเนินการตามคำขอได้หรือไม่

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $allowed | `bool` | ค่าที่ส่งกลับเริ่มต้น |
| $rest_base | `array` | สลักเอนทิตี้ (Entity slug) |
| $this | `\Base_Manager` | อินสแตนซ์ของอ็อบเจกต์ |

### Since {#since}

- 2.0.0
### Source {#source}

กำหนดไว้ใน [`inc/apis/trait-rest-api.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-rest-api.php#L336) บรรทัดที่ 336
