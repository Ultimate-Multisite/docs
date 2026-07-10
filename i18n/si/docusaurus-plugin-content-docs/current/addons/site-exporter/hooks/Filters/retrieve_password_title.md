---
id: retrieve_password_title
title: පෙරහන - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# පෙරහන: retrieve_password_title {#filter-retrievepasswordtitle}

මුරපදය යළි සැකසීමේ ඊමේල් එකේ විෂය පෙරහන් කරයි.

## පරාමිතීන් {#parameters}

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $title | `string` | පෙරනිමි ඊමේල් මාතෘකාව. |
| $user_login | `string` | පරිශීලකයා සඳහා පරිශීලක නාමය. |
| $user_data | `\WP_User` | WP_User වස්තුව. |

### සිට {#since}

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### මූලාශ්‍රය {#source}

135 වන පේළියේ [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) තුළ නිර්වචනය කර ඇත


## ආපසු ලැබෙන්නේ {#returns}
පෙරනිමි ඊමේල් මාතෘකාව.
