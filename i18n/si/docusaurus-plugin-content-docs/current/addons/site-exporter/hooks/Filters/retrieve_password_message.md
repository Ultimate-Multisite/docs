---
id: retrieve_password_message
title: පෙරහන - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

මුරපදය නැවත සැකසීමේ ඊමේල් පණිවිඩයේ අන්තර්ගතය පෙරහන් කරයි.

## පරාමිතීන් {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | පෙරනිමි ඊමේල් පණිවිඩය. |
| $key | `string` | සක්‍රියකරණ යතුර. |
| $user_login | `string` | පරිශීලකයා සඳහා පරිශීලක නාමය. |
| $user_data | `\WP_User` | WP_User object. |

### සිට {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### මූලාශ්‍රය {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) තුළ 149 වන පේළියේ නිර්වචනය කර ඇත


## ආපසු ලබාදෙයි {#returns}
පෙරනිමි ඊමේල් පණිවිඩය.
