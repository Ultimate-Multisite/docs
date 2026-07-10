---
id: retrieve_password_title
title: Шүүлтүүр - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Шүүлтүүр: retrieve_password_title {#filter-retrievepasswordtitle}

Нууц үг сэргээх имэйлийн гарчгийг шүүнэ.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $title | `string` | Үндсэн имэйлийн гарчиг. |
| $user_login | `string` | Хэрэглэгчийн хэрэглэгчийн нэр. |
| $user_data | `\WP_User` | WP_User объект. |

### Хойш {#since}

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Эх сурвалж {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135)-д 135-р мөрөнд тодорхойлсон


## Буцаана {#returns}
Үндсэн имэйлийн гарчиг.
