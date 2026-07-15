---
id: wu_rest_create_item
title: Filter - wu_rest_create_item
sidebar_label: wu_rest_create_item
_i18n_hash: b35924a8414367a9d0c2f3c21f1a1b91
---
# Filter: wu_rest_create_item

ตัวกรองนี้ใช้ตรวจสอบว่าสามารถดำเนินการตามคำขอ (request) ต่อไปได้หรือไม่

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $allowed | `bool` | ค่าเริ่มต้นที่ส่งกลับ (return value) |
| $rest_base | `array` | สลักของเอนทิตี้ (Entity slug) |
| $this | `\Base_Manager` | อินสแตนซ์ของอ็อบเจกต์ (The object instance) |

### Since {#since}

- 2.0.0
### Source {#source}

กำหนดไว้ใน [`inc/apis/trait-rest-api.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-rest-api.php#L362) บรรทัดที่ 362
