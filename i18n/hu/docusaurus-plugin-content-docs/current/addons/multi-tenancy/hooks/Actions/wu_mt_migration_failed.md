---
id: wu_mt_migration_failed
title: Action - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Action: wu_mt_migration_failed {#action-wumtmigrationfailed}

Eredménye, ha a migráció sikertelen.

## Paraméterek {#parameters}

| Neve | Típusa | Leírás |
|------|------|-------------|
| $job | `\Migration_Job` | A sikertelen migrációs feladat. |
| $message | `string` | A hibaüzenet. |

### Since {#since}

- 1.0.0
### Source {#source}

Definálva a [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) fájlban, 720-sorban
