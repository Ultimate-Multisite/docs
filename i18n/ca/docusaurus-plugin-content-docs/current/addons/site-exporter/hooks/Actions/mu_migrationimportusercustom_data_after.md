---
id: mu_migrationimportusercustom_data_after
title: Acció - mu_migration/import/user/custom_data_after
sidebar_label: mu_migration/import/user/custom_data_after
_i18n_hash: 4775c44fa3c63582f55cfb9f99312646
---
# Acció: mu_migration/import/user/custom_data_after {#action-mumigrationimportusercustomdataafter}

S'executa després d'exportar les dades personalitzades de l'usuari.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $user_data | `array` | L'array amb les dades de l'usuari. |
| $user | `\WP_User` | L'objecte de l'usuari. |

### Des de {#since}

- 0.1.0
### Font {#source}

Definit en [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L165) a la línia 165
