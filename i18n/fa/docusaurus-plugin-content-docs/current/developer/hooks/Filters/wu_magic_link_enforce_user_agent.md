---
id: wu_magic_link_enforce_user_agent
title: فیلتر - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent

این فیلتر تعیین می‌کند که آیا تأیید User Agent اعمال شود یا خیر.

اگر آن را روی false قرار دهید، توکن‌ها اجازه کار در مرورگرها/دستگاه‌های مختلف را پیدا می‌کنند. این کار امنیت را کاهش می‌دهد اما قابلیت استفاده را افزایش می‌دهد.

## پارامترها

| نام | نوع | توضیحات |
|------|------|-------------|
| $enforce | `bool` | اینکه آیا باید تطابق User Agent اعمال شود. |

### از نسخه

- 2.0.0
### منبع

در [inc/sso/class-magic-link.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) در خط ۴۱۰ تعریف شده است.
