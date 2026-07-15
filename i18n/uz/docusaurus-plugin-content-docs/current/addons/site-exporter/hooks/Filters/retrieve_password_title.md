---
id: retrieve_password_title
title: Filtr - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title

Parolni tiklash email mavzusini filterlaydi.

## Parametrlar {#parameters}

| Nom | Tur | Tavsif |
|------|------|-------------|
| $title | `string` | Standart email sarlavhasi. |
| $user_login | `string` | Foydalanuvchi uchun foydalanuvchi nomi. |
| $user_data | `\WP_User` | WP_User obyekti. |

### Beri {#since}

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Manba {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) faylida 135-qatorda aniqlangan


## Qaytaradi {#returns}
Standart email sarlavhasi.
