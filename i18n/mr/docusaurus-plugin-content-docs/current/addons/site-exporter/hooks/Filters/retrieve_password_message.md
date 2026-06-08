---
id: retrieve_password_message
title: Filter - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

पासवर्ड रीसेट ईमेलमधील संदेशाच्या मजकुरावर फिल्टर लावते.

## पॅरामीटर्स

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | डीफॉल्ट ईमेल संदेश. |
| $key | `string` | ॲक्टिव्हेशन की. |
| $user_login | `string` | वापरकर्त्याचे युजरनेम. |
| $user_data | `\WP_User` | WP_User ऑब्जेक्ट. |

### Since

- 2.8.0
- 4.1.0: <code>$user_login</code> आणि <code>$user_data</code> पॅरामीटर्स जोडले.
### Source

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) याच्या लाइन 149 वर परिभाषित केले आहे.


## Returns
डीफॉल्ट ईमेल संदेश.
