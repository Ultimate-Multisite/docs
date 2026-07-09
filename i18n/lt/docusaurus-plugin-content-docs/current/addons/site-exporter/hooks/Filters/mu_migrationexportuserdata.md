---
id: mu_migrationexportuserdata
title: Filtras - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data {#filter-mumigrationexportuserdata}

Filtruoja numatytąjį naudotojo duomenų rinkinį, kuris turi būti eksportuojamas / importuojamas.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $custom_user_data | `array` | Pasirinktinis naudotojo duomenų masyvas. |
| $user | `\WP_User` | Naudotojo objektas. |

### Nuo {#since}

- 0.1.0
### Šaltinis {#source}

- Apibrėžta [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) 335 eilutėje
- Apibrėžta [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) 147 eilutėje
## Grąžina {#returns}
Masyvo duomenų naudotojas.
