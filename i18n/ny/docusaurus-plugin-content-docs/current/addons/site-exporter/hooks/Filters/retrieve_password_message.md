---
id: retrieve_password_message
title: Fyuluta - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

Imasefa thupi la uthenga wa imelo yokhazikitsanso password.

## Ma Parameter {#parameters}

| Dzina | Mtundu | Kufotokozera |
|------|------|-------------|
| $message | `string` | Uthenga wa imelo wokhazikika. |
| $key | `string` | Kiyi yoyambitsa. |
| $user_login | `string` | Dzina lolowera la wogwiritsa ntchito. |
| $user_data | `\WP_User` | Chinthu cha WP_User. |

### Kuyambira {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Gwero {#source}

Yafotokozedwa mu [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) pa mzere 149


## Zobwerera {#returns}
Uthenga wa imelo wokhazikika.
