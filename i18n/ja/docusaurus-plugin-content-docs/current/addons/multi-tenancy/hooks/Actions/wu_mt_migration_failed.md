---
id: wu_mt_migration_failed
title: アクション - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Action: wu_mt_migration_failed

マイグレーションが失敗したときに発火します。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $job | `\Migration_Job` | 失敗したマイグレーションジョブ。 |
| $message | `string` | エラーメッセージ。 |

### Since

- 1.0.0

### Source

以下で定義されています：[`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) 行 720
