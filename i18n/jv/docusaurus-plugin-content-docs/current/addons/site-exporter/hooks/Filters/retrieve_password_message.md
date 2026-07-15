---
id: retrieve_password_message
title: Saringan - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Saringan: retrieve_password_message

Nyaring isi pesen saka email reset sandhi.

## Paramèter {#parameters}

| Jeneng | Jinis | Katrangan |
|------|------|-------------|
| $message | `string` | Pesen email gawan. |
| $key | `string` | Kunci aktivasi. |
| $user_login | `string` | Jeneng pangguna kanggo pangguna kasebut. |
| $user_data | `\WP_User` | Objek WP_User. |

### Wiwit {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Sumber {#source}

Ditetepake ing [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) ing baris 149


## Ngasilake {#returns}
Pesen email gawan.
