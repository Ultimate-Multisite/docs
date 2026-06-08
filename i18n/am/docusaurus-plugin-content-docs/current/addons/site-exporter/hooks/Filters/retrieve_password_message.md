---
id: retrieve_password_message
title: Filter - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

የይይይይ ቁጥጥር (password reset) ኢሜል መልዕክት አካልን (message body) የሚያስተካክል (የሚቀይር) ፊልተር ነው።

## መለኪያዎች

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | መደበኛ የኢሜል መልዕክት። |
| $key | `string` | የአктиവേഷን ቁልፉ (activation key)። |
| $user_login | `string` | የተጠቃሚው ስም (username)። |
| $user_data | `\WP_User` | WP_User ኦብጀክት። |

### ከቀረበበት ጊዜ

- 2.8.0
- 4.1.0: <code>$user_login</code> እና <code>$user_data</code> መለኪያዎች ተጨመሩ።
### ምንጭ

በ[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) በ149ኛው መስመር ተገልጿል።

## የሚመልሰው
መደበኛ የኢሜል መልዕክት።
