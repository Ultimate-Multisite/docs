---
id: retrieve_password_message
title: فلٽر - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

پاسورڊ ري سيٽ ميل جي پيغام جي متن کي فلٽر ڪري ٿو.

## پيرا ميٽر

| نالو | قسم | وضاحت |
|------|------|-------------|
| $message | `string` | ڊيفالٽ ميل پيغام. |
| $key | `string` | چالو ڪرڻ جي چاٻي. |
| $user_login | `string` | استعمال ڪندڙ لاءِ يوزر نالو. |
| $user_data | `\WP_User` | WP_User آبجيڪٽ. |

### کان وٺي

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### ذريعو

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) ۾ لائين 149 تي بيان ٿيل


## واپسيون
ڊيفالٽ ميل پيغام.
