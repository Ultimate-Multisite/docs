---
id: wu_magic_link_login
title: الإجراء - wu_magic_link_login
sidebar_label: wu_magic_link_login
_i18n_hash: 4682ae341c1806000c2d4ca3f0af0b2e
---
# الإجراء: wu_magic_link_login {#action-wumagiclinklogin}

يتم إطلاقه بعد تسجيل دخول المستخدم عبر رابط سحري.

## المعلمات {#parameters}

| الاسم | النوع | الوصف |
|------|------|-------------|
| $user_id | `int` | معرف المستخدم. |
| $site_id | `int` | معرف الموقع. |

### منذ {#since}

- 2.0.0

### المصدر {#source}

تم تعريفه في [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L240) في السطر 240
