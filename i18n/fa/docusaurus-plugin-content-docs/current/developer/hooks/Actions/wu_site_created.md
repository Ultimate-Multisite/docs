---
id: wu_site_created
title: عملیات - wu_site_created
sidebar_label: wu_site_created
_i18n_hash: 0f7bc337be7a1f9c47c1e442fe04b9ae
---
# اکشن: wu_site_created

این اکشن زمانی اجرا می‌شود که یک سایت برای اولین بار ایجاد شود.

اگر سایت از یک قالب (template) تکرار شود، این اکشن اجرا نخواهد شد.

## پارامترها

| نام | نوع | توضیحات |
|------|------|-------------|
| $data | `array` | داده‌ای که قرار است ذخیره شود. |
| $site | `\Site` | نمونه شیء (object instance). |

### از نسخه

- 2.0.0
### منبع

در [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1652) در خط ۱۶۵۲ تعریف شده است.
