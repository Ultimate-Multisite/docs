---
id: retrieve_password_message
title: Filtar - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filtar: retrieve_password_message

Filtrira tijelo poruke e-pošte za ponovno postavljanje lozinke.

## Parametri

| Naziv | Vrsta | Opis |
|------|------|-------------|
| $message | `string` | Zadana poruka e-pošte. |
| $key | `string` | Aktivacijski ključ. |
| $user_login | `string` | Korisničko ime za korisnika. |
| $user_data | `\WP_User` | WP_User objekt. |

### Od

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Izvor

Definirano u [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) u retku 149


## Vraća
Zadana poruka e-pošte.
