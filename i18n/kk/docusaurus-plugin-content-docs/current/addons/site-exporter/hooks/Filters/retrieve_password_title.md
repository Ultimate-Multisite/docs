---
id: retrieve_password_title
title: Сүзгі - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title {#filter-retrievepasswordtitle}

Құпиясөзді қалпына келтіру email тақырыбын сүзеді.

## Параметрлер {#parameters}

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $title | `string` | Әдепкі email тақырыбы. |
| $user_login | `string` | Пайдаланушыға арналған пайдаланушы аты. |
| $user_data | `\WP_User` | WP_User объектісі. |

### Бастап {#since}

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Дереккөзі {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) ішінде 135-жолда анықталған


## Қайтарады {#returns}
Әдепкі email тақырыбы.
