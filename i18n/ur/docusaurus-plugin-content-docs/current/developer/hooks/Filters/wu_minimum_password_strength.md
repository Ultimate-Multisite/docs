---
id: wu_minimum_password_strength
title: فلٹر - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength

یہ فلٹر مطلوبہ کم از کم پاسورڈ کی مضبوطی (zxcvbn سکور) کو فلٹر کرتا ہے۔

مضبوطی کی سطحیں: - 0, 1: بہت کمزور (Very weak) - 2: کمزور (Weak) - 3: درمیانہ (Medium) - 4: مضبوط (Strong) (ڈیفالٹ)

## پیرامیٹرز (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | مطلوبہ کم از کم مضبوطی کی سطح۔ |
| $strength_setting | `string` | ایڈمن کی سیٹنگ کا ویلیو (medium, strong, super_strong)۔ |

### سے (Since)

- 2.4.0
### ماخذ (Source)

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) at line 516
