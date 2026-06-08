---
id: wu_this-model_pre_save
title: 'فلٹر - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save

یہ آبجیکٹ کے ڈیٹا کو ڈیٹا بیس میں محفوظ (store) کیے جانے سے پہلے فلٹر کرتا ہے۔

## پیرامیٹرز (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | وہ آبجیکٹ ڈیٹا جو محفوظ کیا جائے گا، جسے سیریلائز کیا گیا ہے۔ |
| $data_unserialized | `array` | وہ آبجیکٹ ڈیٹا جو محفوظ کیا جائے گا۔ |
| $this | `\Base_Model` | آبجیکٹ کا انسٹنس۔ |

### سے (Since)

- 2.0.0
### ماخذ (Source)

[`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) میں لائن 570 پر ڈیفائن کیا گیا ہے۔
