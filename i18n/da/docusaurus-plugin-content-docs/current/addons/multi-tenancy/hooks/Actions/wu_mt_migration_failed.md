---
id: wu_mt_migration_failed
title: Handling - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Action: wu_mt_migration_failed

Udløses, når en migrering mislykkes.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $job | `\Migration_Job` | Det mislykkede migreringsjob. |
| $message | `string` | Fejlmeddelelse. |

### Siden {#since}

- 1.0.0
### Kilde {#source}

Defineret i [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) på linje 720
