---
id: wu_pre_save_settings
title: فیلتر - wu_pre_save_settings
sidebar_label: wu_pre_save_settings
_i18n_hash: 9fe0dc9f71e2d9da3869f40ab53dc453
---
# فیلتر: wu_pre_save_settings {#filter-wupresavesettings}

این فیلتر به توسعه‌دهندگان اجازه می‌دهد تا تنظیمات را قبل از ذخیره، توسط Ultimate Multisite فیلتر کنند.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $settings | `array` | تنظیماتی که قرار است ذخیره شوند. |
| $settings_to_save | `array` | تنظیمات جدیدی که قرار است اضافه شوند. |
| $saved_settings | `array` | تنظیمات فعلی که ذخیره شده‌اند. |

### از نسخه {#since}

- 2.0.18
### منبع {#source}

در [`inc/class-settings.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-settings.php#L296) در خط ۲۹۶ تعریف شده است.
