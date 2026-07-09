---
id: retrieve_password_title
title: Fyuluta - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Fyuluta: retrieve_password_title {#filter-retrievepasswordtitle}

Imasefa mutu wa email yobwezeretsa password.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $title | `string` | Mutu wokhazikika wa email. |
| $user_login | `string` | Dzina lolowera la wogwiritsa ntchito. |
| $user_data | `\WP_User` | Chinthu cha WP_User. |

### Kuyambira {#since}

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Gwero {#source}

Yafotokozedwa mu [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) pa mzere 135


## Zobwerera {#returns}
Mutu wokhazikika wa email.
