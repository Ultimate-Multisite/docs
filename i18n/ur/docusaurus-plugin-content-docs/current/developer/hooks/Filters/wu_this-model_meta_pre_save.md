---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

یہ ڈیٹا میٹا کو فلٹر کرتا ہے اس سے پہلے کہ اسے ڈیٹا بیس میں محفوظ کرنے کے لیے سیریلائز کیا جائے۔

## پیرامیٹرز

| Name | Type | Description |
|------|------|-------------|
| $meta | `array` | وہ میٹا ڈیٹا جو محفوظ کیا جائے گا، سیریلائزیشن سے پہلے۔ |
| $data_unserialized | `array` | وہ آبجیکٹ ڈیٹا جو محفوظ کیا جائے گا۔ |
| $this | `\Base_Model` | آبجیکٹ کا انسٹنس۔ |

### سے

- 2.0.0
### ماخذ

[`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) میں لائن 534 پر بیان کیا گیا ہے۔
