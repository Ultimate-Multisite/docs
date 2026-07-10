---
id: retrieve_password_message
title: Filter - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message {#filter-retrievepasswordmessage}

Filtrira tijelo poruke e-maila za resetovanje lozinke.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Podrazumevana e-mail poruka. |
| $key | `string` | Ključ za aktivaciju. |
| $user_login | `string` | Korisničko ime korisnika. |
| $user_data | `\WP_User` | Objekt WP_User. |

### Since {#since}

- 2.8.0
- 4.1.0: Dodani su parametri <code>$user_login</code> i <code>$user_data</code>.
### Source {#source}

Definisano je u [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) na liniji 149


## Returns {#returns}
Podrazumevana e-mail poruka.
