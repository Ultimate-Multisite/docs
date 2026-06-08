---
id: wu_use_domain_mapping
title: فیلتر - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# فیلتر: wu_use_domain_mapping

تعیین اینکه آیا باید از یک نگاشت (mapping) استفاده شود

معمولاً می‌خواهید فقط به نگاشت‌های فعال اجازه استفاده دهید. با این حال، اگر می‌خواهید از منطق پیشرفته‌تری استفاده کنید، یا اجازه دهید دامنه‌های غیرفعال نیز نگاشت شوند، کافی است در اینجا فیلتر (filter) اعمال کنید.

## پارامترها

| نام | نوع | توضیحات |
|------|------|-------------|
| $is_active | `bool` | آیا نگاشت باید به عنوان فعال در نظر گرفته شود؟ |
| $mapping | `\Domain` | نگاشتی که در حال بررسی آن هستیم |
| $domain | `string` | |

### منبع

در [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) در خط ۳۹۱ تعریف شده است.
