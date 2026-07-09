---
id: mu_migrationexportuserdata
title: Suodatin - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data

Suodattaa oletusarvoisen joukon käyttäjätietoja vietäväksi/tuotavaksi.

## Parametrit

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $custom_user_data | `array` | Mukautettu käyttäjätietotaulukko. |
| $user | `\WP_User` | Käyttäjäobjekti. |

### Alkaen versiosta

- 0.1.0
### Lähde

- Määritelty tiedostossa [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) rivillä 335
- Määritelty tiedostossa [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) rivillä 147
## Palauttaa
Taulukkomuotoinen käyttäjädata.
