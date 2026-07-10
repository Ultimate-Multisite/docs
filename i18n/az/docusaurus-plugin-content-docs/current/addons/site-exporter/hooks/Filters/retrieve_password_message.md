---
id: retrieve_password_message
title: Filter - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message {#filter-retrievepasswordmessage}

Şifrə sıfırlama e-poçtunun mesaj gövdəsini filtr edir.

## Parametrlər {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Varsayılan e-poçt mesajı. |
| $key | `string` | Aktivasiya açarı. |
| $user_login | `string` | İstifadəçi üçün istifadəçi adı. |
| $user_data | `\WP_User` | WP_User obyekti. |

### Since {#since}

- 2.8.0
- 4.1.0: <code>$user_login</code> və <code>$user_data</code> parametrləri əlavə edildi.
### Source {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) faylının 149-cu sətirində təyin edilmişdir.


## Returns {#returns}
Varsayılan e-poçt mesajı.
