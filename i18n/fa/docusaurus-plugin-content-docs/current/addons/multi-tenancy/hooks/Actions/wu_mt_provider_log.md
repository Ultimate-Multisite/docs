---
id: wu_mt_provider_log
title: عملیات - wu_mt_provider_log
sidebar_label: wu_mt_provider_log
_i18n_hash: 49cbf31c8fe84b408e663e8a9587de58
---
# اکشن: wu_mt_provider_log

زمانی که یک ارائه‌دهنده (provider) پیامی ثبت می‌کند، این اکشن فعال می‌شود.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $message | `string` | پیام لاگ. |
| $level | `string` | سطح لاگ. |
| $context | `array` | اطلاعات یا زمینه اضافی. |

### از نسخه {#since}

- 1.0.0
### منبع {#source}

در [`inc/providers/class-base-provider.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/providers/class-base-provider.php#L400) در خط ۴۰۰ تعریف شده است.
