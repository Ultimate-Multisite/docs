---
id: wu_make_primary_domain_redirect_url
title: فیلتر - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

این فیلتر، آدرس بازگشت (redirect URL) پس از تعیین دامنه اصلی را تغییر می‌دهد.

این فیلتر به توسعه‌دهندگان اجازه می‌دهد تا تعیین کنند که کاربران پس از موفقیت‌آمیز بودن تنظیم یک دامنه به عنوان دامنه اصلی، به کجا هدایت شوند. به طور پیش‌فرض، کاربران به آدرس فعلی در سایت اصلی، یا به آدرس مدیریت (admin URL) سایتی که در حال ویرایش است، ریدایرکت می‌شوند.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | آدرس بازگشت پیش‌فرض. این آدرس یا آدرس فعلی (اگر سایت اصلی باشد) یا آدرس مدیریت سایت فعلی است. |
| $current_site | `int` | شناسه (ID) سایتی که دامنه آن قرار است اصلی شود. |
| $domain | `\Domain` | شیء دامنه‌ای که به عنوان دامنه اصلی تعیین شده است. |
| $old_primary_domains | `array` | آرایه‌ای از شناسه (ID) دامنه‌هایی که قبلاً اصلی بودند. |

### Since

- 2.0.0
### Source

در [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) در خط ۶۳۹ تعریف شده است.


## Returns
آدرس بازگشت فیلتر شده.
