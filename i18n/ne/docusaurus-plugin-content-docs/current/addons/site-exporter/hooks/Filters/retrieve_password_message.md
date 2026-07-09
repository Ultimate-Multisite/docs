---
id: retrieve_password_message
title: फिल्टर - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message {#filter-retrievepasswordmessage}

पासवर्ड रिसेट मेलको सन्देश मुख्य भागलाई फिल्टर गर्छ।

## प्यारामिटरहरू {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | पूर्वनिर्धारित मेल सन्देश। |
| $key | `string` | सक्रियकरण कुञ्जी। |
| $user_login | `string` | प्रयोगकर्ताका लागि प्रयोगकर्ता नाम। |
| $user_data | `\WP_User` | WP_User वस्तु। |

### देखि {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### स्रोत {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) मा लाइन 149 मा परिभाषित


## फिर्ता गर्ने मान {#returns}
पूर्वनिर्धारित मेल सन्देश।
