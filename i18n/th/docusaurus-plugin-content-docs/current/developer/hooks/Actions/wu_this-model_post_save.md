---
id: wu_this-model_post_save
title: 'Action - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_\{$this->model\}_post_save

จะทำงานหลังจากที่อ็อบเจกต์ถูกบันทึก (stored) ลงในฐานข้อมูลเรียบร้อยแล้ว

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | ข้อมูลอ็อบเจกต์ที่จะถูกบันทึก |
| $this | `\Base_Model` | อินสแตนซ์ของอ็อบเจกต์ |
| $new | `bool` | เป็นค่า `True` ถ้าอ็อบเจกต์นั้นเป็นข้อมูลใหม่ |

### Since {#since}

- 2.0.0
### Source {#source}

- กำหนดไว้ใน [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) บรรทัดที่ 624
- กำหนดไว้ใน [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) บรรทัดที่ 1754
