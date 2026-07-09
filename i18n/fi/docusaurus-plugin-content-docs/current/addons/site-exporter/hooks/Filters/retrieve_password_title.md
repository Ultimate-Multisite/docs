---
id: retrieve_password_title
title: Suodatin - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Suodatin: retrieve_password_title

Suodattaa salasanan nollauksen sähköpostin aiheen.

## Parametrit

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $title | `string` | Sähköpostin oletusotsikko. |
| $user_login | `string` | Käyttäjän käyttäjänimi. |
| $user_data | `\WP_User` | WP_User-objekti. |

### Alkaen

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Lähde

Määritelty tiedostossa [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) rivillä 135


## Palauttaa
Sähköpostin oletusotsikko.
