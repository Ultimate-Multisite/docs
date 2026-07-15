---
id: retrieve_password_title
title: ማጣሪያ - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title

የየይ密码 ዳግም ማስገቢያ ኢሜልን ርዕስ (subject) የሚያስተካክል (filters) ነው።

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $title | `string` | መደበኛ የኢሜል ርዕስ። |
| $user_login | `string` | የተጠቃሚው ስም (username)። |
| $user_data | `\WP_User` | WP_User ነገር (object)። |

### Since {#since}

- 2.8.0
- 4.4.0: <code>$user_login</code> እና <code>$user_data</code> ፓራሜትሮችን ጨምሯል።
### Source {#source}

በ[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) ፋይል በ135ኛው መስመር ተገልጿል።


## Returns {#returns}
የመደበኛ የኢሜል ርዕስ።
