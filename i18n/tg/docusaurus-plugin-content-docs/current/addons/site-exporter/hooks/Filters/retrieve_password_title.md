---
id: retrieve_password_title
title: Филтр - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Филтр: retrieve_password_title

Мавзӯи почтаи электронии барқарорсозии паролро филтр мекунад.

## Параметрҳо {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $title | `string` | Сарлавҳаи пешфарзи почтаи электронӣ. |
| $user_login | `string` | Номи корбар барои корбар. |
| $user_data | `\WP_User` | Объекти WP_User. |

### Аз версияи {#since}

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Манбаъ {#source}

Дар [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) дар сатри 135 муайян шудааст


## Бармегардонад {#returns}
Сарлавҳаи пешфарзи почтаи электронӣ.
