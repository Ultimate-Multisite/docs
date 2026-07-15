---
id: wu_mt_migration_failed
title: Action - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Action: wu_mt_migration_failed

Utlöses när en migrering misslyckas.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $job | `\Migration_Job` | Den misslyckade migreringsuppgiften. |
| $message | `string` | Felmeddelandet. |

### Sedan {#since}

- 1.0.0
### Källa {#source}

Definieras i [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) på rad 720
