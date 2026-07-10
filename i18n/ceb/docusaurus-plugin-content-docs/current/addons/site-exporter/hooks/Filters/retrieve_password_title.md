---
id: retrieve_password_title
title: Pagsala - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title {#filter-retrievepasswordtitle}

Gi-filter ang ulohan sa email sa pag-reset sa password.

## Mga Parameter {#parameters}

| Ngalan | Type | Deskripsyon |
|------|------|-------------|
| $title | `string` | Default nga ulohan sa email. |
| $user_login | `string` | Ang username alang sa user. |
| $user_data | `\WP_User` | WP_User object. |

### Sukad {#since}

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Tinubdan {#source}

Gidefine sa [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) sa linya 135


## Mga Pagbalik {#returns}
Default nga ulohan sa email.
