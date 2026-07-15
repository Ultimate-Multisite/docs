---
id: wu_apc_get_meta
title: فیلتر - wu_apc_get_meta
sidebar_label: wu_apc_get_meta
_i18n_hash: 2e9eb97d518c759f9d675f1d54b85282
---
# Filter: wu_apc_get_meta

این تابع به توسعه‌دهندگان اجازه می‌دهد تا مقادیر نهایی را فیلتر کنند و موارد پردازشی جدیدی اضافه نمایند.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $default_value | `string` | مقدار پیش‌فرض. |
| $meta_type | `string` | نوع داده متا (meta data) که قرار است بازیابی شود. |
| $meta_key | `string` | نام فیلد متا (meta field). |

### از نسخه {#since}

- 1.4.0
### منبع {#source}

در [inc/wu-apc-functions.php](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L93) در خط ۹۳ تعریف شده است.

## بازگشت {#returns}
مقدار پیش‌فرض جدید.
