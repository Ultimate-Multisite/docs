---
id: auth_cookie_expiration
title: 필터 - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# 필터: auth_cookie_expiration

인증 쿠키 만료 기간을 필터링합니다.

## 매개변수

| 이름 | 타입 | 설명 |
|------|------|-------------|
| $length | `int` | 만료 기간의 지속 시간을 초 단위로 지정합니다. |
| $user_id | `int` | 사용자 ID. |
| $remember | `bool` | 사용자 로그인 기억 여부. 기본값은 false. |

### 버전

- 2.8.0

### 출처

정의됨 [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) 52번째 줄에
