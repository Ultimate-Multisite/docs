---
id: retrieve_password_message
title: फ़िल्टर - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

पासवर्ड रीसेट ईमेल के संदेश के मुख्य भाग को फ़िल्टर करता है।

## पैरामीटर्स

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | डिफ़ॉल्ट ईमेल संदेश। |
| $key | `string` | एक्टिवेशन की (activation key)। |
| $user_login | `string` | उपयोगकर्ता का यूज़रनेम। |
| $user_data | `\WP_User` | WP_User ऑब्जेक्ट। |

### Since

- 2.8.0
- 4.1.0: <code>$user_login</code> और <code>$user_data</code> पैरामीटर्स जोड़े गए।
### Source

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) में लाइन 149 पर परिभाषित।


## Returns
डिफ़ॉल्ट ईमेल संदेश।
