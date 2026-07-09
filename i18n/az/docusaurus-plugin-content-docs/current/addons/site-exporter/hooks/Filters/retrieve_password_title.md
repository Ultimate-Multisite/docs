---
id: retrieve_password_title
title: Filter - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title {#filter-retrievepasswordtitle}

Şifrə sıfırlama e-pochtunun mövzusunu (subject) dəyişdirir.

## Parametrlər {#parameters}

| Ad | Növ | Təsvir |
|------|------|-------------|
| $title | `string` | Default e-pochtu mövzusu. |
| $user_login | `string` | İstifadəçi adı (username). |
| $user_data | `\WP_User` | WP_User obyekti. |

### Nə vaxtdan {#since}

- 2.8.0
- 4.4.0: <code>$user_login</code> və <code>$user_data</code> parametrləri əlavə edildi.
### Mənbə {#source}

[inc/mu-migration/includes/commands/class-mu-migration-users.php](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) yerində, 135-ci sətirdə təyin edilmişdir.


## Nə qaytarır {#returns}
Default e-pochtu mövzusu.
