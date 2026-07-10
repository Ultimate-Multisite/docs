---
id: retrieve_password_message
title: Muyunguruzo - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Muyunguruzi: retrieve_password_message {#filter-retrievepasswordmessage}

Iyungurura umubiri w'ubutumwa bwa imeyili yo gusubizaho ijambo ry'ibanga.

## Ibipimo {#parameters}

| Izina | Ubwoko | Ibisobanuro |
|------|------|-------------|
| $message | `string` | Ubutumwa busanzwe bwa imeyili. |
| $key | `string` | Urufunguzo rwo gukora. |
| $user_login | `string` | Izina ry'ukoresha ku mukoresha. |
| $user_data | `\WP_User` | Ikintu WP_User. |

### Kuva {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Inkomoko {#source}

Bisobanuwe muri [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) ku murongo wa 149


## Ibyo isubiza {#returns}
Ubutumwa busanzwe bwa imeyili.
