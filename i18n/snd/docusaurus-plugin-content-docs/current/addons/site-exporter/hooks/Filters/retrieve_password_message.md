---
id: retrieve_password_message
title: فلٽر - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# فلٽر: retrieve_password_message {#filter-retrievepasswordmessage}

پاسورڊ ري سيٽ اي ميل جي پيغام جي متن کي فلٽر ڪري ٿو.

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $message | `string` | ڊفالٽ اي ميل پيغام. |
| $key | `string` | فعال ڪرڻ واري چاٻي. |
| $user_login | `string` | استعمال ڪندڙ لاءِ استعمال ڪندڙ نالو. |
| $user_data | `\WP_User` | WP_User آبجيڪٽ. |

### کان وٺي {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### ذريعو {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) ۾ لائين 149 تي بيان ٿيل


## موٽائي ٿو {#returns}
ڊفالٽ اي ميل پيغام.
