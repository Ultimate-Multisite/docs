---
id: wu_mt_migration_failed
title: การดำเนินการ - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Action: wu_mt_migration_failed

จะถูกเรียกใช้เมื่อการย้ายข้อมูล (migration) ล้มเหลว

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $job | `\Migration_Job` | งานการย้ายข้อมูลที่ล้มเหลว |
| $message | `string` | ข้อความแสดงข้อผิดพลาด |

### Since {#since}

- 1.0.0
### Source {#source}

กำหนดไว้ใน [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) บรรทัดที่ 720
