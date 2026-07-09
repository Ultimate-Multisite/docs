---
id: retrieve_password_message
title: Hidlydd - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Hidlydd: retrieve_password_message

Yn hidlo corff neges yr e-bost ailosod cyfrinair.

## Paramedrau

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $message | `string` | Neges e-bost ddiofyn. |
| $key | `string` | Yr allwedd actifadu. |
| $user_login | `string` | Yr enw defnyddiwr ar gyfer y defnyddiwr. |
| $user_data | `\WP_User` | Gwrthrych WP_User. |

### Ers

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Ffynhonnell

Diffinnir yn [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) ar linell 149


## Yn dychwelyd
Neges e-bost ddiofyn.
