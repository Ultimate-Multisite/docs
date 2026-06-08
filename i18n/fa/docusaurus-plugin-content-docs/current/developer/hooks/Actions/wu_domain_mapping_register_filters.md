---
id: wu_domain_mapping_register_filters
title: Action - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

برخی پلاگین‌ها ممکن است آدرس (URL) را قبل از فعال شدن نگاشت (mapping) ذخیره کرده باشند، یا آدرس‌ها را به شیوه‌ای بسازند که در فیلترهای ذکر شده در بالا پوشش داده نشده باشد.

در چنین مواردی، ما می‌خواهیم فیلترهای اضافی اضافه کنیم. پارامتر دوم که ارسال می‌شود، کال‌بک `mangle_url` است. ما استفاده مستقیم از این فیلتر را توصیه نمی‌کنیم. در عوض، از متد `Domain_Mapping::apply_mapping_to_url` استفاده کنید.

## پارامترها

| نام | نوع | توضیحات |
|------|------|-------------|
| $mangle_url | `callable` | کال‌بک (تابع قابل فراخوانی) `mangle`. |
| $domain_mapper | `self` | این آبجکت. |

### از نسخه

- 2.0.0
### منبع

تعریف شده در [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) در خط ۵۳۰
