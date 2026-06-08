---
id: wu_mt_migration_failed
title: 動作 - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Action: wu_mt_migration_failed

當遷移失敗時觸發。

## 參數

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $job | `\Migration_Job` | 失敗的遷移工作。 |
| $message | `string` | 錯誤訊息。 |

### 適用版本

- 1.0.0
### 來源

定義於 [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) 第 720 行
