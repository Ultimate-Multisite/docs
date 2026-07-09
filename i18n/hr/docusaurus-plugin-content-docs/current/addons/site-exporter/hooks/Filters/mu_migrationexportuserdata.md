---
id: mu_migrationexportuserdata
title: Filtar - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data

Filtrira zadani skup korisničkih podataka za izvoz/uvoz.

## Parametri

| Naziv | Vrsta | Opis |
|------|------|-------------|
| $custom_user_data | `array` | Prilagođeni niz korisničkih podataka. |
| $user | `\WP_User` | Korisnički objekt. |

### Od verzije

- 0.1.0
### Izvor

- Definirano u [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) u retku 335
- Definirano u [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) u retku 147
## Vraća
Niz korisničkih podataka.
