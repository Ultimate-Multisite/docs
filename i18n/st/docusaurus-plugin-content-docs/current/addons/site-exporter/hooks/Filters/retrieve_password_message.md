---
id: retrieve_password_message
title: Sefe - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

E sefa mmele wa molaetsa wa imeile ya ho seta phasewete botjha.

## Dipharamitha {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Molaetsa wa kamehla wa imeile. |
| $key | `string` | Senotlolo sa ho kenya tshebetsong. |
| $user_login | `string` | Lebitso la mosebedisi bakeng sa mosebedisi. |
| $user_data | `\WP_User` | Ntho ya WP_User. |

### Ho tloha ka {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Mohlodi {#source}

E hlalositswe ho [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) moleng wa 149


## E kgutlisa {#returns}
Molaetsa wa kamehla wa imeile.
