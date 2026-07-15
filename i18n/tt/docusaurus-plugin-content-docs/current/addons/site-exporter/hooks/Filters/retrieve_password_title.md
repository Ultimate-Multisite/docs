---
id: retrieve_password_title
title: Фильтр - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Фильтр: retrieve_password_title

Серсүзне яңадан урнаштыру email-ының темасын фильтрлый.

## Параметрлар {#parameters}

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $title | `string` | Килешенгән email исеме. |
| $user_login | `string` | Кулланучы өчен кулланучы исеме. |
| $user_data | `\WP_User` | WP_User объекты. |

### Бирле {#since}

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Чыганак {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) эчендә 135 нче юлда билгеләнгән


## Кайтара {#returns}
Килешенгән email исеме.
