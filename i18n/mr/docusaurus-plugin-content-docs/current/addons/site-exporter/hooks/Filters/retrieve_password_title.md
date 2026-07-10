---
id: retrieve_password_title
title: Filter - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title {#filter-retrievepasswordtitle}

पासवर्ड रीसेट ईमेलचे विषय (subject) फिल्टर करतो.

## पॅरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $title | `string` | डीफॉल्ट ईमेल शीर्षक. |
| $user_login | `string` | वापरकर्त्याचे युजरनेम. |
| $user_data | `\WP_User` | WP_User ऑब्जेक्ट. |

### कधीपासून उपलब्ध {#since}

- 2.8.0
- 4.4.0: <code>$user_login</code> आणि <code>$user_data</code> पॅरामीटर्स जोडले.
### स्त्रोत {#source}

हे [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) मध्ये लाइन १३५ वर परिभाषित केले आहे.


## परत काय मिळते {#returns}
डीफॉल्ट ईमेल शीर्षक.
