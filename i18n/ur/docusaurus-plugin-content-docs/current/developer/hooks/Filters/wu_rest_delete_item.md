---
id: wu_rest_delete_item
title: فلٹر - wu_rest_delete_item
sidebar_label: wu_rest_delete_item
_i18n_hash: ea4a29625c1aef260edc421b300d59cc
---
# Filter: wu_rest_delete_item

یہ فلٹر چیک کرتا ہے کہ کیا درخواست (request) کو آگے بڑھنے کی اجازت ہے یا نہیں۔

## پیرامیٹرز {#parameters}

| Name | Type | تفصیل |
|------|------|-------------|
| $allowed | `bool` | ابتدائی واپسی کی قدر (Initial return value)۔ |
| $rest_base | `array` | اینٹیٹی سلگ (Entity slug)۔ |
| $this | `\Base_Manager` | آبجیکٹ کا انسٹنس (The object instance)۔ |

### سے {#since}

- 2.0.0
### ماخذ {#source}

[`inc/apis/trait-rest-api.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-rest-api.php#L440) میں لائن 440 پر ڈیفائن کیا گیا ہے۔
