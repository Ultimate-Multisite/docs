---
id: retrieve_password_message
title: Filter - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

Filtrerar innehållet i e-postmeddelandet för lösenordsåterställning.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $message | `string` | Standard-e-postmeddelandet. |
| $key | `string` | Aktiveringsnyckeln. |
| $user_login | `string` | Användarnamnet för användaren. |
| $user_data | `\WP_User` | WP_User-objekt. |

### Sedan {#since}

- 2.8.0
- 4.1.0: Lägger till parametrarna <code>$user_login</code> och <code>$user_data</code>.
### Källa {#source}

Definieras i [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) på rad 149


## Returnerar {#returns}
Standard-e-postmeddelandet.
