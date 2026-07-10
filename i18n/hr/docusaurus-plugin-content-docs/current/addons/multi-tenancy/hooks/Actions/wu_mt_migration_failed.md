---
id: wu_mt_migration_failed
title: Radnja - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Action: wu_mt_migration_failed {#action-wumtmigrationfailed}

Pokreće se kada migracija ne uspije.

## Parametri {#parameters}

| Naziv | Tip | Opis |
|------|------|-------------|
| $job | `\Migration_Job` | Neuspjeli posao migracije. |
| $message | `string` | Poruka pogreške. |

### Od verzije {#since}

- 1.0.0
### Izvor {#source}

Definirano u [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) u retku 720
