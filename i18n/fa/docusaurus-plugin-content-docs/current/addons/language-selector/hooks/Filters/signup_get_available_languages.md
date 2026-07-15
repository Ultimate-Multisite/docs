---
id: signup_get_available_languages
title: فیلتر - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages

لیست زبان‌های موجود برای ثبت‌نام سایت در فرانت‌اند را فیلتر می‌کند.

ارسال یک آرایه خالی به این hook، خروجی تنظیمات را از فرم ثبت‌نام غیرفعال می‌کند و هنگام ایجاد سایت، از زبان پیش‌فرض استفاده خواهد شد. زبان‌هایی که از قبل نصب نشده‌اند، حذف می‌شوند.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $available_languages | `array` | زبان‌های موجود. |

### Since {#since}

- 4.4.0
### Source {#source}

Defined in [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) at line 117
