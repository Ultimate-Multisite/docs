---
id: retrieve_password_title
title: 필터 - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title

Filters the subject of the password reset email.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $title | `string` | 기본 이메일 제목. |
| $user_login | `string` | 사용자에 대한 사용자 이름. |
| $user_data | `\WP_User` | WP_User 객체. |

### Since

- 2.8.0
- 4.4.0: <code>$user_login</code> 및 <code>$user_data</code> 매개변수가 추가되었습니다.

### Source

정의됨 [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) 라인 135에서

## Returns

기본 이메일 제목.
