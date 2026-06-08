---
id: wu_mt_migration_failed
title: Aksyon - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Action: wu_mt_migration_failed

Tumatakbo ito kapag nag-fail ang isang migration.

## Mga Parameter

| Pangalan | Uri | Deskripsyon |
|------|------|-------------|
| $job | `\Migration_Job` | Ang migration job na nag-fail. |
| $message | `string` | Mensahe ng error. |

### Mula pa noong

- 1.0.0
### Pinagmulan

Tinukoy sa [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) sa linya 720
