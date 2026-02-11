---
id: set_auth_cookie
title: 액션 - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# 액션: set_auth_cookie

즉시 인증 쿠키가 설정되기 직전에 발생합니다.

## 매개변수

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | 인증 쿠키 값. |
| $expire | `int` | 로그인 그레이스 기간이 만료되는 시각을 UNIX 타임스탬프로 표시. 기본값은 쿠키 만료 시점 이후 12시간입니다. |
| $expiration | `int` | 인증 쿠키가 만료되는 시각을 UNIX 타임스탬프로 표시. 기본값은 현재 시점으로부터 14일입니다. |
| $user_id | `int` | 사용자 ID. |
| $scheme | `string` | 인증 스킴. 값은 'auth' 또는 'secure_auth'가 포함됩니다. |
| $token | `string` | 이 쿠키에 사용할 사용자의 세션 토큰. |

### 버전

- 2.5.0
- 4.9.0: The <code>$token</code> 매개변수가 추가되었습니다.

### 출처

정의됨 in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) at line 124
