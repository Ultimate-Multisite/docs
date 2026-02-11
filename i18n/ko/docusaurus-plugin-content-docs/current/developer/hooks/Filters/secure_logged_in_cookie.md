---
id: secure_logged_in_cookie
title: 필터 - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# 필터: secure_logged_in_cookie

로그인 쿠키가 HTTPS를 통해서만 전송되어야 하는지 여부를 필터링합니다.

## Parameters

| 이름 | 타입 | 설명 |
|------|------|------|
| $secure_logged_in_cookie | `bool` | 로그인 쿠키가 HTTPS를 통해서만 전송되어야 하는지 여부 |
| $user_id | `int` | 사용자 ID |
| $secure | `bool` | 인증 쿠키가 HTTPS를 통해서만 전송되어야 하는지 여부 |

### Since

- 3.1.0

### Source

다음에서 정의됨: [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) 라인 91
