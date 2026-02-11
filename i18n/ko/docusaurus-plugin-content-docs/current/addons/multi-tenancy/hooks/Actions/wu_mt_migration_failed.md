---
id: wu_mt_migration_failed
title: 작업 - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# 액션: wu_mt_migration_failed

마이그레이션이 실패할 때 발생합니다.

## 매개변수

| Name | Type | 설명 |
|------|------|------|
| $job | `\Migration_Job` | 실패한 마이그레이션 작업입니다. |
| $message | `string` | 오류 메시지입니다. |

### 버전

- 1.0.0

### 소스

정의됨 [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) 720번째 줄에서
