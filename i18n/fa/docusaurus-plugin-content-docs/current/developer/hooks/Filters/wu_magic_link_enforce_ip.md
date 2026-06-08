---
id: wu_magic_link_enforce_ip
title: فیلتر - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# فیلتر: wu_magic_link_enforce_ip

این فیلتر تعیین می‌کند که آیا باید آدرس IP را تأیید کرد یا خیر.

اگر آن را روی `false` قرار دهید، توکن‌ها اجازه کار کردن از شبکه‌های مختلف را پیدا می‌کنند. این کار امنیت را کاهش می‌دهد اما قابلیت استفاده (Usability) را افزایش می‌دهد (مثلاً برای کاربرانی که با تغییر شبکه، از موبایل استفاده می‌کنند).

## پارامترها

| نام | نوع | توضیحات |
|------|------|-------------|
| $enforce | `bool` | آیا باید تطابق آدرس IP را اعمال کرد. |

### از زمان

- 2.0.0
### منبع

در [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) در خط ۴۲۲ تعریف شده است.
