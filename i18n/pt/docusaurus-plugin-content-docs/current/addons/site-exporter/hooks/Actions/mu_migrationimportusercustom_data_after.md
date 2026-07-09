---
id: mu_migrationimportusercustom_data_after
title: Ação - mu_migration/import/user/custom_data_after
sidebar_label: mu_migration/import/user/custom_data_after
_i18n_hash: 4775c44fa3c63582f55cfb9f99312646
---
# Action: mu_migration/import/user/custom_data_after

Dispara após exportar os dados personalizados do utilizador.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $user_data | `array` | O array de dados do utilizador. |
| $user | `\WP_User` | O objeto de utilizador. |

### Desde

- 0.1.0
### Fonte

Definido em [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L165) na linha 165
