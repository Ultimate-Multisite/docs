---
id: wu_mt_migration_failed
title: Akcja - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Akcja: wu_mt_migration_failed {#action-wumtmigrationfailed}

Wyzwala się, gdy migracja się nie powiedzie.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $job | `\Migration_Job` | Wykonanie (job) migracji, która się nie powiodła. |
| $message | `string` | Komunikat o błędzie. |

### Od {#since}

- 1.0.0
### Źródło {#source}

Zdefiniowane w [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) w linii 720
