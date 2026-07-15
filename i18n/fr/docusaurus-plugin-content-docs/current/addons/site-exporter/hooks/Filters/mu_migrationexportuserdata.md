---
id: mu_migrationexportuserdata
title: Filtre - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filtre : mu_migration/export/user/data

Filtre l’ensemble par défaut des données utilisateur à exporter/importer.

## Paramètres {#parameters}

| Nom | Type | Description |
|------|------|-------------|
| $custom_user_data | `array` | Le tableau de données utilisateur personnalisées. |
| $user | `\WP_User` | L’objet utilisateur. |

### Depuis {#since}

- 0.1.0
### Source {#source}

- Défini dans [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) à la ligne 335
- Défini dans [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) à la ligne 147
## Retour {#returns}
Données utilisateur sous forme de tableau.
