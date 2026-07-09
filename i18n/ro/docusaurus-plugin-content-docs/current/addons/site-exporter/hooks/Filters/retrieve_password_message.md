---
id: retrieve_password_message
title: Filter - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message {#filter-retrievepasswordmessage}

Filtrează corpul mesajului din emailul de resetare a parolei.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $message | `string` | Mesajul implicit al emailului. |
| $key | `string` | Cheia de activare. |
| $user_login | `string` | Numele de utilizator al utilizatorului. |
| $user_data | `\WP_User` | Obiectul WP_User. |

### De la {#since}

- 2.8.0
- 4.1.0: Adăugat parametrii <code>$user_login</code> și <code>$user_data</code>.
### Sursă {#source}

Definit în [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) la linia 149


## Returnează {#returns}
Mesajul implicit al emailului.
