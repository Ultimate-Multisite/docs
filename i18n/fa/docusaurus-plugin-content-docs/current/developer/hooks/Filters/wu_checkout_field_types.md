---
id: wu_checkout_field_types
title: فیلتر - wu_checkout_field_types
sidebar_label: wu_checkout_field_types
_i18n_hash: ee19b0fa9b28a762f2d5504d67555ea9
---
# فیلتر: wu_checkout_field_types

APIهای ما برای اضافه کردن انواع فیلدهای جدید، از اینجا استفاده می‌کنند (hook می‌شوند).

توجه داشته باشید که نباید از این فیلتر مستقیماً استفاده کنید. در عوض، باید از تابع `wu_register_field_type()` استفاده کنید.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $field_types | `array` | |

### از زمان {#since}

- 2.0.0
### منبع {#source}

در [`inc/managers/class-signup-fields-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-signup-fields-manager.php#L92) در خط ۹۲ تعریف شده است.

## بازگشت (Returns) {#returns}
