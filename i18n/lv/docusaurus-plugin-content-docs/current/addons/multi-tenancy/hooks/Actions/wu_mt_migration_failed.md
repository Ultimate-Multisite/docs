---
id: wu_mt_migration_failed
title: Darbība - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Darbība: wu_mt_migration_failed

Tiek aktivizēts, kad migrācija neizdodas.

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $job | `\Migration_Job` | Neizdevušais migrācijas darbs. |
| $message | `string` | Kļūdas ziņojums. |

### Kopš {#since}

- 1.0.0
### Avots {#source}

Definēts [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) 720. rindā
