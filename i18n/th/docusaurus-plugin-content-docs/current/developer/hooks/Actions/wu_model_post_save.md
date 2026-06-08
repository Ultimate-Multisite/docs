---
id: wu_model_post_save
title: การดำเนินการ - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save

จะถูกเรียกใช้หลังจากที่อ็อบเจกต์ถูกบันทึก (stored) ลงในฐานข้อมูลแล้ว

## พารามิเตอร์

| Name | Type | Description |
|------|------|-------------|
| $model | `string` | สลักของโมเดล (model slug) |
| $data | `array` | ข้อมูลอ็อบเจกต์ที่จะถูกจัดเก็บและแปลงเป็นรูปแบบ serialized |
| $data_unserialized | `array` | ข้อมูลอ็อบเจกต์ที่จะถูกจัดเก็บ |
| $this | `\Base_Model` | อินสแตนซ์ของอ็อบเจกต์ |

### ตั้งแต่

- 2.0.0
### แหล่งที่มา

- กำหนดไว้ใน [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) บรรทัดที่ 613
- กำหนดไว้ใน [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) บรรทัดที่ 1743
