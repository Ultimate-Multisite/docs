---
id: wu_minimum_password_length
title: فیلتر - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length

فیلتر حداقل طول رمز عبور.

این فیلتر فقط زمانی اعمال می‌شود که `wu_enforce_password_rules` مقدار `true` داشته باشد.

## پارامترها {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | حداقل طول رمز عبور. پیش‌فرض ۱۲ است (مطابقت با Defender Pro). |
| $defender_active | `bool` | اینکه آیا Defender Pro Strong Password فعال است یا خیر. |

### از نسخه {#since}

- 2.4.0
### منبع {#source}

در [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) در خط ۵۴۳ تعریف شده است.
