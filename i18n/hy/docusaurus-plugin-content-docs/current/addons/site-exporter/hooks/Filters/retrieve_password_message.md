---
id: retrieve_password_message
title: Զտիչ - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Ֆիլտր՝ retrieve_password_message

Ֆիլտրում է գաղտնաբառի վերակայման նամակի հաղորդագրության բովանդակությունը։

## Պարամետրեր

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $message | `string` | Լռելյայն նամակի հաղորդագրություն։ |
| $key | `string` | Ակտիվացման բանալին։ |
| $user_login | `string` | Օգտատիրոջ օգտանունը։ |
| $user_data | `\WP_User` | WP_User օբյեկտ։ |

### Սկսած

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Աղբյուր

Սահմանված է [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149)-ում՝ 149-րդ տողում


## Վերադարձնում է
Լռելյայն նամակի հաղորդագրություն։
