---
id: retrieve_password_message
title: Suodatin - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Suodatin: retrieve_password_message

Suodattaa salasanan palautusmailin viestin rungon.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $message | `string` | Oletusmailiviesti. |
| $key | `string` | Aktivointiavain. |
| $user_login | `string` | Käyttäjän käyttäjätunnus. |
| $user_data | `\WP_User` | WP_User-objekti. |

### Alkaen {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Lähde {#source}

Määritelty tiedostossa [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) rivillä 149


## Palauttaa {#returns}
Oletusmailiviesti.
