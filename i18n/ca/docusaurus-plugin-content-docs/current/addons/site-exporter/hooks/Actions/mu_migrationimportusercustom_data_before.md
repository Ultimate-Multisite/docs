---
id: mu_migrationimportusercustom_data_before
title: Acció - mu_migration/import/user/custom_data_before
sidebar_label: mu_migration/import/user/custom_data_before
_i18n_hash: dd547798f24ac891e6132ce450eac010
---
# Action: mu_migration/import/user/custom_data_before {#action-mumigrationimportusercustomdatabefore}

S'executa abans d'exportar les dades personalitzades de l'usuari.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $user_data | `array` | L'array amb les dades de l'usuari. |
| $user | `\WP_User` | L'objecte de l'usuari. |

### Després de {#since}

- 0.1.0
### Font {#source}

Definit en [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L139) a la línia 139
