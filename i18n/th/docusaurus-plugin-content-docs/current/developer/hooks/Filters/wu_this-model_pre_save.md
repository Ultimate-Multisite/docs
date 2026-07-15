---
id: wu_this-model_pre_save
title: 'Filter - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save

ใช้สำหรับกรองข้อมูลอ็อบเจกต์ก่อนที่จะถูกบันทึกลงในฐานข้อมูล

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | ข้อมูลอ็อบเจกต์ที่จะถูกบันทึกและแปลงเป็นรูปแบบ serialized |
| $data_unserialized | `array` | ข้อมูลอ็อบเจกต์ที่จะถูกบันทึก |
| $this | `\Base_Model` | อินสแตนซ์ของอ็อบเจกต์ |

### Since {#since}

- 2.0.0
### Source {#source}

ถูกกำหนดไว้ใน [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) บรรทัดที่ 570
