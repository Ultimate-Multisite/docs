---
id: retrieve_password_message
title: Фильтр - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Фильтр: retrieve_password_message

Серсүзне яңарту хатының хәбәр өлешен фильтрлый.

## Параметрлар {#parameters}

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $message | `string` | Килешенгән почта хәбәре. |
| $key | `string` | Активлаштыру ачкычы. |
| $user_login | `string` | Кулланучы өчен кулланучы исеме. |
| $user_data | `\WP_User` | WP_User объекты. |

### Версиядән башлап {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Чыганак {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) эчендә 149 нчы юлда билгеләнгән


## Кайтара {#returns}
Килешенгән почта хәбәре.
