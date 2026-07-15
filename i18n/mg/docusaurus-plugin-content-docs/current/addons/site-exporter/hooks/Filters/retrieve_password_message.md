---
id: retrieve_password_message
title: Sivana - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Sivana: retrieve_password_message

Manivana ny vatan’ny hafatry ny mailaka famerenana tenimiafina.

## Masontsivana {#parameters}

| Anarana | Karazana | Famaritana |
|------|------|-------------|
| $message | `string` | Hafatra mailaka mahazatra. |
| $key | `string` | Ny lakilen’ny fampandehanana. |
| $user_login | `string` | Ny anaran’ny mpampiasa ho an’ilay mpampiasa. |
| $user_data | `\WP_User` | Zavatra WP_User. |

### Hatramin’ny {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Loharano {#source}

Voafaritra ao amin’ny [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) amin’ny andalana 149


## Mamerina {#returns}
Hafatra mailaka mahazatra.
