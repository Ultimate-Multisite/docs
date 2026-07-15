---
id: retrieve_password_title
title: ફિલ્ટર - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title

પાસવર્ડ રીસેટ ઈમેલના વિષય (subject) ને ફિલ્ટર કરે છે.

## પેરામીટર્સ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $title | `string` | ડિફોલ્ટ ઈમેલ ટાઇટલ. |
| $user_login | `string` | યુઝર માટેનું યુઝરનેમ. |
| $user_data | `\WP_User` | WP_User ઓબ્જેક્ટ. |

### ક્યારથી {#since}

- 2.8.0
- 4.4.0: <code>$user_login</code> અને <code>$user_data</code> પેરામીટર્સ ઉમેર્યા.
### સ્ત્રોત {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) માં લાઇન ૧૩૫ પર વ્યાખ્યાયિત છે.


## પરત કરે છે {#returns}
ડિફોલ્ટ ઈમેલ ટાઇટલ.
