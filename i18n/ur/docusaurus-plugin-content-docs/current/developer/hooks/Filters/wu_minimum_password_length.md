---
id: wu_minimum_password_length
title: فلٹر - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length

کم از کم پاسورڈ کی لمبائی کو فلٹر کریں۔

یہ صرف اس وقت نافذ ہوتا ہے جب `wu_enforce_password_rules` سچ (true) ہو۔

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | کم از کم پاسورڈ کی لمبائی۔ ڈیفالٹ 12 (Defender Pro سے مطابقت رکھتا ہے)۔ |
| $defender_active | `bool` | کہ کیا Defender Pro Strong Password فعال (active) ہے۔ |

### Since

- 2.4.0
### Source

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) at line 543
