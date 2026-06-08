---
id: wu_minimum_password_strength
title: فیلتر - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength

این فیلتر، حداقل قدرت رمز عبور مورد نیاز (امتیاز zxcvbn) را تعیین می‌کند.

سطوح قدرت: - ۰، ۱: بسیار ضعیف - ۲: ضعیف - ۳: متوسط - ۴: قوی (پیش‌فرض)

## پارامترها

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | حداقل سطح قدرت مورد نیاز. |
| $strength_setting | `string` | مقدار تنظیمات ادمین (medium, strong, super_strong). |

### از نسخه

- 2.4.0
### منبع

در [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) در خط ۵۱۶ تعریف شده است.
