---
id: retrieve_password_message
title: Filtrs - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filtrs: retrieve_password_message {#filter-retrievepasswordmessage}

Filtrē paroles atiestatīšanas e-pasta ziņojuma pamattekstu.

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $message | `string` | Noklusējuma e-pasta ziņojums. |
| $key | `string` | Aktivizācijas atslēga. |
| $user_login | `string` | Lietotāja lietotājvārds. |
| $user_data | `\WP_User` | WP_User objekts. |

### Kopš {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Avots {#source}

Definēts [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) 149. rindā


## Atgriež {#returns}
Noklusējuma e-pasta ziņojumu.
