---
id: mu_migrationexportuserdata
title: Filtro - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data

Filtra o conjunto padrão de dados do usuário a serem exportados/importados.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $custom_user_data | `array` | O array de dados personalizados do usuário. |
| $user | `\WP_User` | O objeto de usuário. |

### Desde

- 0.1.0
### Fonte

- Definido em [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) na linha 335
- Definido em [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) na linha 147
## Retorna
Dados de array do usuário.
