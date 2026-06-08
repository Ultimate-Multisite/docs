---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

ตัวกรองข้อมูลเมตา (meta data) ก่อนการบันทึกข้อมูล ซึ่งจะถูกจัดรูปแบบ (serialize) เพื่อจัดเก็บลงในฐานข้อมูล

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $meta | `array` | ข้อมูลเมตาที่จะถูกจัดเก็บ (meta data) ซึ่งจะถูกแปลงรูปแบบ (unserialize) |
| $data_unserialized | `array` | ข้อมูลอ็อบเจกต์ (object data) ที่จะถูกจัดเก็บ |
| $this | `\Base_Model` | อินสแตนซ์ของอ็อบเจกต์ (object instance) |

### Since

- 2.0.0
### Source

กำหนดไว้ใน [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) บรรทัดที่ 534
