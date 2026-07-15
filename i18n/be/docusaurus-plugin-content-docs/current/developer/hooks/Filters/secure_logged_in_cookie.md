---
id: secure_logged_in_cookie
title: Фільтр - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Фільтр: secure_logged_in_cookie

Вызначае, ці трэба, каб cookie ўвайшоўшы ў склад адпраўляўся толькі па HTTPS.

## Параметры {#parameters}

| Name | Type | Апісан |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Вызначае, ці трэба, каб cookie ўвайшоўшы ў склад адпраўляўся толькі па HTTPS. |
| $user_id | `int` | ID карыстальніка. |
| $secure | `bool` | Вызначае, ці трэба, каб cookie аўтэнтыфікацыі адпраўляўся толькі па HTTPS. |

### З {#since}

- 3.1.0
### Паходжанне {#source}

Вызначана ў [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) на 91-й кропцы
