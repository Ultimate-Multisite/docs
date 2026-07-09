---
id: retrieve_password_message
title: Lim - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Lim: retrieve_password_message

Lim cov ntsiab lus ntawm tsab email rov pib dua password.

## Cov parameter

| Npe | Hom | Kev piav qhia |
|------|------|-------------|
| $message | `string` | Tsab lus email default. |
| $key | `string` | Tus yuam sij activation. |
| $user_login | `string` | Tus username rau tus user. |
| $user_data | `\WP_User` | WP_User object. |

### Txij thaum

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Qhov chaw

Tau txhais hauv [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) ntawm kab 149


## Rov qab
Tsab lus email default.
