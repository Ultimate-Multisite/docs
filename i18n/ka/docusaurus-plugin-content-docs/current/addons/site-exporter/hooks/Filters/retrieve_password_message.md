---
id: retrieve_password_message
title: ფილტრი - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# ფილტრი: retrieve_password_message {#filter-retrievepasswordmessage}

ფილტრავს პაროლის გადაყენების წერილის შეტყობინების შიგთავსს.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $message | `string` | ნაგულისხმევი ელფოსტის შეტყობინება. |
| $key | `string` | აქტივაციის გასაღები. |
| $user_login | `string` | მომხმარებლის სახელი მომხმარებლისთვის. |
| $user_data | `\WP_User` | WP_User ობიექტი. |

### ვერსიიდან {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### წყარო {#source}

განსაზღვრულია [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149)-ში, 149-ე ხაზზე


## აბრუნებს {#returns}
ნაგულისხმევი ელფოსტის შეტყობინება.
