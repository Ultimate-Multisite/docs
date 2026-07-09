---
id: wu_rest_update_item
title: ตัวกรอง - wu_rest_update_item
sidebar_label: wu_rest_update_item
_i18n_hash: 46a659e3004edbe285434103f81bd733
---
# ตัวกรอง: wu_rest_update_item {#filter-wurestupdateitem}

ใช้สำหรับตรวจสอบว่าอนุญาตให้ดำเนินการตามคำขอ (request) นี้ได้หรือไม่

## พารามิเตอร์ {#parameters}

| Name | Type | คำอธิบาย |
|------|------|-------------|
| $allowed | `bool` | ค่าที่ส่งกลับเริ่มต้น (Initial return value) |
| $rest_base | `array` | สลักของเอนทิตี้ (Entity slug) |
| $this | `\Base_Manager` | อินสแตนซ์ของอ็อบเจกต์ (The object instance) |

### ตั้งแต่ {#since}

- 2.0.0
### แหล่งที่มา {#source}

กำหนดไว้ใน [`inc/apis/trait-rest-api.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-rest-api.php#L414) บรรทัดที่ 414
