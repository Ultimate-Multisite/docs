---
id: secure_auth_cookie
title: 필터 - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# 필터: secure_auth_cookie {#filter-secureauthcookie}

인증 쿠키가 HTTPS를 통해서만 전송되어야 하는지 여부를 필터링합니다.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $secure | `bool` | 쿠키가 HTTPS를 통해서만 전송되어야 하는지 여부. |
| $user_id | `int` | 사용자 ID. |

### Since {#since}

- 3.1.0

### Source {#source}

Defined in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) at line 80
