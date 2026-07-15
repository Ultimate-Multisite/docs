---
id: mu_migrationimportusercustom_data_after
title: Toiminto - mu_migration/import/user/custom_data_after
sidebar_label: mu_migration/import/user/custom_data_after
_i18n_hash: 4775c44fa3c63582f55cfb9f99312646
---
# Action: mu_migration/import/user/custom_data_after

Käynnistyy mukautettujen käyttäjätietojen viennin jälkeen.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $user_data | `array` | Käyttäjätietojen taulukko. |
| $user | `\WP_User` | Käyttäjäobjekti. |

### Alkaen versiosta {#since}

- 0.1.0
### Lähde {#source}

Määritelty tiedostossa [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L165) rivillä 165
