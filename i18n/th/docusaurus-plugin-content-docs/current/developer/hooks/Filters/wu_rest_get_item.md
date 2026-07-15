---
id: wu_rest_get_item
title: ตัวกรอง - wu_rest_get_item
sidebar_label: wu_rest_get_item
_i18n_hash: 6e3f51a53f5b4bafef3d438273c979c8
---
# Filter: wu_rest_get_item

ใช้สำหรับกำหนดว่าอนุญาตให้ดำเนินการตามคำขอ (request) นี้ต่อไปได้หรือไม่

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $allowed | `bool` | ค่าที่ส่งกลับเริ่มต้น |
| $rest_base | `array` | slug ของเอนทิตี้ |
| $this | `\Base_Manager` | อินสแตนซ์ของอ็อบเจกต์ |

### Since {#since}

- 2.0.0
### Source {#source}

กำหนดไว้ใน [`inc/apis/trait-rest-api.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-rest-api.php#L388) บรรทัดที่ 388
