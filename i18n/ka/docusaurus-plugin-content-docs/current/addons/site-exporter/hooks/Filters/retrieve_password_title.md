---
id: retrieve_password_title
title: ფილტრი - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title

ფილტრავს პაროლის გადაყენების ელფოსტის თემას.

## პარამეტრები

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $title | `string` | ნაგულისხმევი ელფოსტის სათაური. |
| $user_login | `string` | მომხმარებლის სახელი ამ მომხმარებლისთვის. |
| $user_data | `\WP_User` | WP_User ობიექტი. |

### ვერსიიდან

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### წყარო

განსაზღვრულია [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135)-ში, 135-ე ხაზზე


## აბრუნებს
ნაგულისხმევი ელფოსტის სათაური.
