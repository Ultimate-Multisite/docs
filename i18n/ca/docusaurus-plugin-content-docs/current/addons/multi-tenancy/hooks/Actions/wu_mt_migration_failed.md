---
id: wu_mt_migration_failed
title: Acció - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Action: wu_mt_migration_failed

S'executa quan falla una migració.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $job | `\Migration_Job` | La tasca de migració que ha fallat. |
| $message | `string` | Missatge d'error. |

### Des de {#since}

- 1.0.0
### Font {#source}

Definit en [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) a la línia 720
