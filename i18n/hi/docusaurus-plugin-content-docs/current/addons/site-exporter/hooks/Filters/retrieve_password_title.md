---
id: retrieve_password_title
title: Filter - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title

यह पासवर्ड रीसेट ईमेल के विषय (subject) को फ़िल्टर करता है।

## पैरामीटर्स {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $title | `string` | डिफ़ॉल्ट ईमेल शीर्षक। |
| $user_login | `string` | उपयोगकर्ता का यूज़रनेम। |
| $user_data | `\WP_User` | WP_User ऑब्जेक्ट। |

### कब से उपलब्ध {#since}

- 2.8.0
- 4.4.0: <code>$user_login</code> और <code>$user_data</code> पैरामीटर्स जोड़े गए।
### स्रोत {#source}

यह [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) में लाइन 135 पर परिभाषित किया गया है।


## रिटर्न करता है {#returns}
डिफ़ॉल्ट ईमेल शीर्षक।
