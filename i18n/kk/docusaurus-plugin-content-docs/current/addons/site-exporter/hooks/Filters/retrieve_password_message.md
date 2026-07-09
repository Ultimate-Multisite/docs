---
id: retrieve_password_message
title: Сүзгі - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Сүзгі: retrieve_password_message

Құпиясөзді қалпына келтіру хатының хабарлама мәтінін сүзгіден өткізеді.

## Параметрлер

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $message | `string` | Әдепкі пошта хабарламасы. |
| $key | `string` | Белсендіру кілті. |
| $user_login | `string` | Пайдаланушының пайдаланушы аты. |
| $user_data | `\WP_User` | WP_User нысаны. |

### Бастап

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Дереккөзі

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) ішінде 149-жолда анықталған


## Қайтарады
Әдепкі пошта хабарламасы.
