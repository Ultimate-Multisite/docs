---
id: wu_mt_migration_failed
title: Akce - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Action: wu_mt_migration_failed {#action-wumtmigrationfailed}

Spouští se, když selže migrace.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $job | `\Migration_Job` | Selhání migračního úkolu. |
| $message | `string` | Zpráva o chybě. |

### Od {#since}

- 1.0.0
### Zdroj {#source}

Definováno v [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) na řádku 720
