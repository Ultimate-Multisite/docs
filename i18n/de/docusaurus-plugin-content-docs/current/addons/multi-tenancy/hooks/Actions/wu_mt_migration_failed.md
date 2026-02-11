---
id: wu_mt_migration_failed
title: Aktion - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Action: wu_mt_migration_failed

Ausgelöst, wenn eine Migration fehlschlägt.

## Parameters

| Name | Typ | Beschreibung |
|------|------|-------------|
| $job | `\Migration_Job` | Der fehlgeschlagene Migrationsjob. |
| $message | `string` | Fehlermeldung. |

### Seit

- 1.0.0

### Quelle

Definiert in [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) bei Zeile 720
