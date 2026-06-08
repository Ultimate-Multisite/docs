---
id: wu_magic_link_login
title: عملکرد - wu_magic_link_login
sidebar_label: wu_magic_link_login
_i18n_hash: 4682ae341c1806000c2d4ca3f0af0b2e
---
# اکشن: wu_magic_link_login

این اکشن پس از اینکه کاربر از طریق لینک جادویی (magic link) وارد شد، اجرا می‌شود.

## پارامترها

| نام | نوع | توضیحات |
|------|------|-------------|
| $user_id | `int` | شناسه کاربری. |
| $site_id | `int` | شناسه سایت. |

### از نسخه

- 2.0.0
### منبع

در [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L240) در خط ۲۴۰ تعریف شده است.
