---
id: wu_mt_migration_failed
title: Acțiune - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Acțiune: wu_mt_migration_failed {#action-wumtmigrationfailed}

Se declanșează când o migrare eșuează.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $job | `\Migration_Job` | Job-ul de migrare care a eșuat. |
| $message | `string` | Mesajul de eroare. |

### De la {#since}

- 1.0.0
### Sursă {#source}

Definit în [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) la linia 720
