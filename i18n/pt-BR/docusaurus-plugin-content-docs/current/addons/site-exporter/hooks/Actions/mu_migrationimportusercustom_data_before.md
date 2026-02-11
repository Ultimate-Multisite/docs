---
id: mu_migrationimportusercustom_data_before
title: Action - mu_migration/import/user/custom_data_before
sidebar_label: mu_migration/import/user/custom_data_before
_i18n_hash: dd547798f24ac891e6132ce450eac010
---
# Action: mu_migration/import/user/custom_data_before

Dispara antes de exportar os dados personalizados do usuário.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $user_data | `array` | O array de dados do usuário. |
| $user | `\WP_User` | O objeto do usuário. |

### Desde

- 0.1.0

### Fonte

Definido em [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L139) na linha 139
