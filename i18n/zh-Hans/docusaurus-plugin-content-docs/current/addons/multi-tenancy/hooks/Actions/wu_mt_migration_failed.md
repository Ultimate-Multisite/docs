---
id: wu_mt_migration_failed
title: 操作 - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# 动作: wu_mt_migration_failed

当迁移失败时触发。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $job | `\Migration_Job` | 失败的迁移任务。 |
| $message | `string` | 错误信息。 |

### 自

- 1.0.0

### 来源

定义于 [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) 在第 720 行
