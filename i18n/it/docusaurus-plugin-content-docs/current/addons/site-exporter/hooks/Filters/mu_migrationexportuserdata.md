---
id: mu_migrationexportuserdata
title: Filtro - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filtro: mu_migration/export/user/data

Filtra l'insieme predefinito di dati utente da esportare/importare.

## Parametri {#parameters}

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $custom_user_data | `array` | L'array di dati utente personalizzati. |
| $user | `\WP_User` | L'oggetto utente. |

### Da {#since}

- 0.1.0
### Sorgente {#source}

- Definito in [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) alla riga 335
- Definito in [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) alla riga 147
## Restituisce {#returns}
Dati array utente.
