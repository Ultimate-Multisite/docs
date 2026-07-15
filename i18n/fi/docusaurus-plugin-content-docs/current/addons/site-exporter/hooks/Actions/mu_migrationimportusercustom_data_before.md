---
id: mu_migrationimportusercustom_data_before
title: Toiminto - mu_migration/import/user/custom_data_before
sidebar_label: mu_migration/import/user/custom_data_before
_i18n_hash: dd547798f24ac891e6132ce450eac010
---
# Action: mu_migration/import/user/custom_data_before

Suoritetaan ennen mukautettujen käyttäjätietojen vientiä.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $user_data | `array` | Käyttäjätietojen taulukko. |
| $user | `\WP_User` | Käyttäjäobjekti. |

### Alkaen versiosta {#since}

- 0.1.0
### Lähde {#source}

Määritelty tiedostossa [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L139) rivillä 139
