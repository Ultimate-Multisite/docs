---
id: wu_mt_migration_failed
title: Akcija - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Akcija: wu_mt_migration_failed

Pokreće se kada migracija ne uspije.

## Parametri

| Ime | Tip | Opis |
|------|------|-------------|
| $job | `\Migration_Job` | Migracioni posao koji je propao. |
| $message | `string` | Poruka o grešci. |

### Od verzije

- 1.0.0
### Izvor

Definisano je u [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) na liniji 720
