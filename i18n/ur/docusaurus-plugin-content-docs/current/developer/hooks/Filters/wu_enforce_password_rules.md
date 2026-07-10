---
id: wu_enforce_password_rules
title: فلٹر - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules {#filter-wuenforcepasswordrules}

یہ فلٹر طے کرتا ہے کہ کیا اضافی پاسورڈ کے اصول نافذ کیے جائیں گے۔

جب یہ `true` ہوگا، تو یہ کم از کم لمبائی اور حروف کی ضروریات کو نافذ کرے گا۔ یہ خود بخود "Super Strong" سیٹنگ کے لیے یا اس وقت فعال ہو جاتا ہے جب Defender Pro کا Strong Password فیچر استعمال ہو رہا ہو۔

## پیرامیٹرز (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | کیا اضافی اصول نافذ کیے جائیں۔ |
| $strength_setting | `string` | ایڈمن کی سیٹنگ کا ویلیو۔ |
| $defender_active | `bool` | کیا Defender Pro کا Strong Password فعال ہے۔ |

### Since {#since}

- 2.4.0
### Source {#source}

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) at line 531
