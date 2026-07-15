---
id: secure_auth_cookie
title: Фільтр - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filter: secure_auth_cookie

Фільтруе, ці павінен кукі аўтэнтыфікацыі адпраўляцца толькі па HTTPS.

## Параметры {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $secure | `bool` | Ці павінен кукі адпраўляцца толькі па HTTPS. |
| $user_id | `int` | ID карыстальніка. |

### З версіі {#since}

- 3.1.0
### Выказванне ў {#source}

Вызначаны ў [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) на 80-й кропцы.
