---
id: retrieve_password_message
title: 필터 - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# 필터: retrieve_password_message

비밀번호 재설정 메일의 본문을 필터링합니다.

## 매개변수

| 이름 | 타입 | 설명 |
|------|------|------|
| $message | `string` | 기본 메일 메시지. |
| $key | `string` | 활성화 키. |
| $user_login | `string` | 사용자 이름. |
| $user_data | `\WP_User` | WP_User 객체. |

### 버전

- 2.8.0
- 4.1.0: <code>$user_login</code> 및 <code>$user_data</code> 매개변수가 추가되었습니다.

### 소스

다음 파일에서 정의됨: [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) (149번째 줄)

## 반환값

기본 메일 메시지.
