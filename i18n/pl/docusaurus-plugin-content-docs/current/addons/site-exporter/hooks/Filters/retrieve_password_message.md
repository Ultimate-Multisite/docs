---
id: retrieve_password_message
title: Filtr - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message {#filter-retrievepasswordmessage}

Filtruje treść wiadomości e-mail dotyczącej resetowania hasła.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $message | `string` | Domyślna wiadomość e-mail. |
| $key | `string` | Klucz aktywacyjny. |
| $user_login | `string` | Nazwa użytkownika. |
| $user_data | `\WP_User` | Obiekt WP_User. |

### Od {#since}

- 2.8.0
- 4.1.0: Dodano parametry <code>$user_login</code> i <code>$user_data</code>.
### Źródło {#source}

Zdefiniowane w [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) w linii 149


## Zwraca {#returns}
Domyślną wiadomość e-mail.
