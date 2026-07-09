---
id: retrieve_password_title
title: Saringan - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Saringan: retrieve_password_title {#filter-retrievepasswordtitle}

Nyaring subjek email reset sandhi.

## Paramèter {#parameters}

| Jeneng | Tipe | Katrangan |
|------|------|-------------|
| $title | `string` | Judhul email gawan. |
| $user_login | `string` | Jeneng panganggo kanggo panganggo kasebut. |
| $user_data | `\WP_User` | Objek WP_User. |

### Wiwit {#since}

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Sumber {#source}

Ditetepake ing [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) ing baris 135


## Mbalèkaké {#returns}
Judhul email gawan.
