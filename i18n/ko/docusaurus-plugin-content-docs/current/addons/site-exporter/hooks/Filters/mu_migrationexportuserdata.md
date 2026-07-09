---
id: mu_migrationexportuserdata
title: 필터 - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data

내보내기/가져오기할 기본 사용자 데이터 세트를 필터링합니다.

## 매개변수

| 이름 | 유형 | 설명 |
|------|------|-------------|
| $custom_user_data | `array` | 사용자 지정 사용자 데이터 배열입니다. |
| $user | `\WP_User` | 사용자 객체입니다. |

### 이후

- 0.1.0
### 소스

- [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335)의 335번째 줄에 정의됨
- [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147)의 147번째 줄에 정의됨
## 반환값
배열 데이터 사용자.
