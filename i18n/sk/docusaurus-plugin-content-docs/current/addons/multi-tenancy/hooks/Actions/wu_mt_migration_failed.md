---
id: wu_mt_migration_failed
title: Akcia - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Action: wu_mt_migration_failed {#action-wumtmigrationfailed}

Spustí sa, keď migrácia zlyhá.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $job | `\Migration_Job` | Zlyhaná migračná úloha. |
| $message | `string` | Chybová správa. |

### Od verzie {#since}

- 1.0.0
### Zdroj {#source}

Definované v [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) na riadku 720
