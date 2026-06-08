---
id: mu_migrationexportuserdata
title: Filtre - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filtre: mu_migration/export/user/data

Filtra el conjunt predeterminat de dades d'usuari que s'exporten o s'importen.

## Paràmetres

| Nom | Tipus | Descripció |
|------|------|-------------|
| $custom_user_data | `array` | L'array de dades d'usuari personalitzades. |
| $user | `\WP_User` | L'objecte d'usuari. |

### Des

- 0.1.0
### Font

- Definit a [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) a la línia 335
- Definit a [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) a la línia 147
## Restorna
L'array de dades de l'usuari.
