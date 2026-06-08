---
id: signup_get_available_languages
title: Filter - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages

فرنٹ-اینڈ سائٹ پر سائن اپ کے لیے دستیاب زبانوں کی فہرست کو فلٹر کرتا ہے۔

اگر آپ اس ہک کو ایک خالی ایری (empty array) پاس کرتے ہیں، تو سائن اپ فارم پر سیٹنگ کا آؤٹ پٹ غیر فعال ہو جائے گا، اور سائٹ بناتے وقت ڈیفالٹ زبان استعمال کی جائے گی۔ وہ زبانیں جو پہلے سے انسٹال نہیں ہیں، انہیں ہٹا دیا جائے گا۔

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $available_languages | `array` | دستیاب زبانیں (Available languages)۔ |

### Since

- 4.4.0
### Source

[`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) میں لائن 117 پر ڈیفائن کیا گیا ہے۔
