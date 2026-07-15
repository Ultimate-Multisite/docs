---
id: mu_migrationimportusercustom_data_before
title: Ação - mu_migration/import/user/custom_data_before
sidebar_label: mu_migration/import/user/custom_data_before
_i18n_hash: dd547798f24ac891e6132ce450eac010
---
# Action: mu_migration/import/user/custom_data_before

Dispara antes de exportar os dados personalizados do utilizador.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $user_data | `array` | O array de dados do utilizador. |
| $user | `\WP_User` | O objeto do utilizador. |

### Desde {#since}

- 0.1.0
### Fonte {#source}

Definido em [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L139) na linha 139
