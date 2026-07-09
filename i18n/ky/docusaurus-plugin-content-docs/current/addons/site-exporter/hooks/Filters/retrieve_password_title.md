---
id: retrieve_password_title
title: Чыпка - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title {#filter-retrievepasswordtitle}

Сырсөздү кайра коюу email темасын чыпкалайт.

## Параметрлер {#parameters}

| Аты | Түрү | Сүрөттөмө |
|------|------|-------------|
| $title | `string` | Демейки email аталышы. |
| $user_login | `string` | Колдонуучунун колдонуучу аты. |
| $user_data | `\WP_User` | WP_User объекти. |

### Чыгарылган версиясы {#since}

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Булак {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) ичинде 135-сапта аныкталган


## Кайтарат {#returns}
Демейки email аталышы.
