---
id: set_logged_in_cookie
title: 액션 - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# 액션: set_logged_in_cookie

로그인 인증 쿠키가 설정되기 직전에 즉시 발생합니다.

## 매개변수

| 이름 | 타입 | 설명 |
|------|------|-------------|
| $logged_in_cookie | `string` | 로그인 쿠키 값. |
| $expire | `int` | 로그인 유예 기간이 만료되는 시각(UNIX 타임스탬프). 기본값은 쿠키 만료 시점 이후 12시간입니다. |
| $expiration | `int` | 로그인 인증 쿠키가 만료되는 시각(UNIX 타임스탬프). 기본값은 현재 시점으로부터 14일입니다. |
| $user_id | `int` | 사용자 ID. |
| $scheme | `string` | 인증 스킴. 기본값은 'logged_in'. |
| $token | `string` | 이 쿠키에 사용될 사용자의 세션 토큰. |

### 버전

- 2.6.0
- 4.9.0: <code>$token</code> 매개변수가 추가되었습니다.

### 소스

정의된 위치: [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) 라인 141에서
