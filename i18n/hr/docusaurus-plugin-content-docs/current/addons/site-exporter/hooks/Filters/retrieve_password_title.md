---
id: retrieve_password_title
title: Filtar - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filtar: retrieve_password_title

Filtrira predmet emaila za ponovno postavljanje lozinke.

## Parametri {#parameters}

| Naziv | Vrsta | Opis |
|------|------|-------------|
| $title | `string` | Zadani naslov emaila. |
| $user_login | `string` | Korisničko ime za korisnika. |
| $user_data | `\WP_User` | WP_User objekt. |

### Od {#since}

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Izvor {#source}

Definirano u [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) u retku 135


## Vraća {#returns}
Zadani naslov emaila.
