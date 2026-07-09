---
id: retrieve_password_message
title: Filter - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message {#filter-retrievepasswordmessage}

Inarekebisha mwili wa ujumbe wa barua pepe ya kuweka upya nenosiri.

## Vigezo {#parameters}

| Jina | Aina | Maelezo |
|------|------|-------------|
| $message | `string` | Ujumbe wa kawaida wa barua pepe. |
| $key | `string` | Nøkili ya kuamsha. |
| $user_login | `string` | Jina la mtumiaji wa mtumiaji huyo. |
| $user_data | `\WP_User` | Kichwa cha mtumiaji wa WP_User. |

### Tangu {#since}

- 2.8.0
- 4.1.0: Nimeongeza vigezo vya <code>$user_login</code> na <code>$user_data</code>.
### Chanzo {#source}

Imefafanuliwa katika [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) kwenye mstari wa 149.


## Inarejesha {#returns}
Ujumbe wa kawaida wa barua pepe.
