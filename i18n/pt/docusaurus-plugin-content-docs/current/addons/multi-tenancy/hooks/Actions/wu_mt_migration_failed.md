---
id: wu_mt_migration_failed
title: Ação - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Ação: wu_mt_migration_failed {#action-wumtmigrationfailed}

Disparada quando uma migração falha.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $job | `\Migration_Job` | O trabalho de migração que falhou. |
| $message | `string` | Mensagem de erro. |

### Desde {#since}

- 1.0.0
### Fonte {#source}

Definido em [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) na linha 720
