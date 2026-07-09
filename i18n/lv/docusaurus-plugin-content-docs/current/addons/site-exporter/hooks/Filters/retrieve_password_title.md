---
id: retrieve_password_title
title: Filtrs - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filtrs: retrieve_password_title

Filtrē paroles atiestatīšanas e-pasta tematu.

## Parametri

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $title | `string` | Noklusējuma e-pasta virsraksts. |
| $user_login | `string` | Lietotāja lietotājvārds. |
| $user_data | `\WP_User` | WP_User objekts. |

### Kopš

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Avots

Definēts [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) 135. rindā


## Atgriež
Noklusējuma e-pasta virsraksts.
