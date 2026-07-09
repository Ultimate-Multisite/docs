---
id: retrieve_password_message
title: Tace - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Tacewa: retrieve_password_message {#filter-retrievepasswordmessage}

Yana tace jikin saƙon imel na sake saita kalmar sirri.

## Sigogi {#parameters}

| Suna | Nau'i | Bayani |
|------|------|-------------|
| $message | `string` | Saƙon imel na asali. |
| $key | `string` | Maɓallin kunnawa. |
| $user_login | `string` | Sunan mai amfani na mai amfani. |
| $user_data | `\WP_User` | Abun WP_User. |

### Tun {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Tushe {#source}

An ayyana a cikin [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) a layi na 149


## Abin da ake mayarwa {#returns}
Saƙon imel na asali.
