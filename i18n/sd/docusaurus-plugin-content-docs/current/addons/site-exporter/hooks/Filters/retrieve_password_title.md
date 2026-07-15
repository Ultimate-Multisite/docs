---
id: retrieve_password_title
title: فلٽر - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title

پاسورڊ ري سيٽ اي ميل جي عنوان کي فلٽر ڪري ٿو.

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $title | `string` | ڊفالٽ اي ميل عنوان. |
| $user_login | `string` | يوزر لاءِ يوزرنالو. |
| $user_data | `\WP_User` | WP_User آبجيڪٽ. |

### کان وٺي {#since}

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### ماخذ {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) ۾، لائين 135 تي بيان ٿيل


## واپسي {#returns}
ڊفالٽ اي ميل عنوان.
