---
id: wu_model_post_save
title: کارروائی - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save

یہ ایک ایکشن ہے جو اس وقت فعال ہوتا ہے جب کوئی آبجیکٹ ڈیٹا بیس میں محفوظ (store) ہو جاتا ہے۔

## پیرامیٹرز (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $model | `string` | ماڈل سلگ (model slug)۔ |
| $data | `array` | آبجیکٹ کا وہ ڈیٹا جو محفوظ کیا جائے گا، سیریلائزڈ (serialized) ہو گا۔ |
| $data_unserialized | `array` | آبجیکٹ کا وہ ڈیٹا جو محفوظ کیا جائے گا۔ |
| $this | `\Base_Model` | آبجیکٹ کا انسٹنس (object instance)۔ |

### سے (Since) {#since}

- 2.0.0
### ماخذ (Source) {#source}

- [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) میں لائن 613 پر ڈیفائن کیا گیا ہے۔
- [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) میں لائن 1743 پر ڈیفائن کیا گیا ہے۔
