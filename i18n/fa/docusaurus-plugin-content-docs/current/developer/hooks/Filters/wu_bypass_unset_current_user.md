---
id: wu_bypass_unset_current_user
title: فیلتر - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

به توسعه‌دهندگان اجازه می‌دهد تا از کد مربوط به غیرفعال‌سازی (unset) کاربر فعلی عبور کنند.

بازگرداندن هر چیزی به جز `null`، از غیرفعال‌سازی کاربر فعلی وارد شده جلوگیری می‌کند. این کار در برخی سناریوها می‌تواند مفید باشد، مثلاً زمانی که با زیرساخت‌هایی (sub-sites) سروکار دارید که به عنوان پنل مدیریت استفاده می‌شوند.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $null_or_bypass | `mixed` | `null` برای ادامه دادن، هر مقدار دیگری برای دور زدن آن. |
| $current_user | `false\|\WP_User` | شیء کاربر فعلی. |

### از نسخه {#since}

- 2.0.11
### منبع {#source}

در [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) در خط ۲۲۱ تعریف شده است.

## مقادیر بازگشتی {#returns}
