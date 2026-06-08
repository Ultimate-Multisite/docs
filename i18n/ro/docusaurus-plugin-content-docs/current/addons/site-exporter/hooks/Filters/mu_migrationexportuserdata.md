---
id: mu_migrationexportuserdata
title: Filtru - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filtru: mu_migration/export/user/data

Filtrează setul implicit de date ale utilizatorilor care urmează a fi exportate sau importate.

## Parametri

| Nume | Tip | Descriere |
|------|------|-------------|
| $custom_user_data | `array` | Matricea de date personalizate ale utilizatorului. |
| $user | `\WP_User` | Obiectul utilizatorului. |

### De la

- 0.1.0
### Sursă

- Definit în [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) la linia 335
- Definit în [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) la linia 147
## Returnează
O matrice cu datele utilizatorului.
