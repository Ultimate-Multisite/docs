---
id: add_user_to_blog
title: عملیات - add_user_to_blog
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# Action: add_user_to_blog

این اکشن بلافاصله پس از اضافه شدن یک کاربر به یک سایت فعال می‌شود.

## پارامترها {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $user_id | `int` | شناسه کاربر. |
| $role | `string` | نقش کاربر. |
| $blog_id | `int` | شناسه وبلاگ. |

### از زمان {#since}

- MU: MU
### منبع {#source}

در [`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174) در خط ۱۷۴ تعریف شده است.
