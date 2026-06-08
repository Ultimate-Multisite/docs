---
id: retrieve_password_message
title: ફિલ્ટર - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

પાસવર્ડ રીસેટ મેલના સંદેશના મુખ્ય ભાગને ફિલ્ટર કરે છે.

## પેરામીટર્સ

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | ડિફોલ્ટ મેલ સંદેશ. |
| $key | `string` | એક્ટિવેશન કી. |
| $user_login | `string` | યુઝરનું યુઝરનેમ. |
| $user_data | `\WP_User` | WP_User object. |

### ક્યારથી

- 2.8.0
- 4.1.0: <code>$user_login</code> અને <code>$user_data</code> પેરામીટર્સ ઉમેરવામાં આવ્યા.
### સ્ત્રોત

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) માં લાઇન 149 પર વ્યાખ્યાયિત છે.


## પરત કરે છે
ડિફોલ્ટ મેલ સંદેશ.
