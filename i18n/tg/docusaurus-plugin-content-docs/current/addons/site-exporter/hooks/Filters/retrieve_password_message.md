---
id: retrieve_password_message
title: Филтр - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

Матни паёми почтаи барқароркунии паролро филтр мекунад.

## Параметрҳо {#parameters}

| Ном | Навъ | Тавсиф |
|------|------|-------------|
| $message | `string` | Паёми пешфарзи почта. |
| $key | `string` | Калиди фаъолсозӣ. |
| $user_login | `string` | Номи корбар барои корбар. |
| $user_data | `\WP_User` | Объекти WP_User. |

### Аз {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Манбаъ {#source}

Дар [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) дар сатри 149 муайян шудааст


## Бармегардонад {#returns}
Паёми пешфарзи почта.
