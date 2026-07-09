---
id: retrieve_password_title
title: फिल्टर - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title

पासवर्ड रिसेट इमेलको विषय फिल्टर गर्छ।

## प्यारामिटरहरू

| Name | Type | Description |
|------|------|-------------|
| $title | `string` | पूर्वनिर्धारित इमेल शीर्षक। |
| $user_login | `string` | प्रयोगकर्ताका लागि प्रयोगकर्ता नाम। |
| $user_data | `\WP_User` | WP_User वस्तु। |

### देखि

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### स्रोत

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) मा लाइन 135 मा परिभाषित


## फर्काउँछ
पूर्वनिर्धारित इमेल शीर्षक।
