---
id: retrieve_password_title
title: Penapis - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title {#filter-retrievepasswordtitle}

Mengubah subjek e-mel tetapan semula kata laluan.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $title | `string` | Tajuk e-mel lalai. |
| $user_login | `string` | Nama pengguna untuk pengguna tersebut. |
| $user_data | `\WP_User` | Objek WP_User. |

### Sejak {#since}

- 2.8.0
- 4.4.0: Menambah parameter <code>$user_login</code> dan <code>$user_data</code>.
### Sumber {#source}

Didefinisikan dalam [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) pada baris 135


## Mengembalikan {#returns}
Tajuk e-mel lalai.
