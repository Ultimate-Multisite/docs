---
id: retrieve_password_message
title: فلتەر - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# پاڵێوەر: retrieve_password_message

ناوەڕۆکی پەیامی ئیمەیڵی ڕێکخستنەوەی وشەی نهێنی پاڵێو دەکات.

## پارامێتەرەکان

| ناو | جۆر | وەسف |
|------|------|-------------|
| $message | `string` | پەیامی ئیمەیڵی بنەڕەتی. |
| $key | `string` | کلیلی چالاککردن. |
| $user_login | `string` | ناوی بەکارهێنەر بۆ بەکارهێنەرەکە. |
| $user_data | `\WP_User` | ئۆبجێکتی WP_User. |

### لە وەشانی

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### سەرچاوە

پێناسەکراوە لە [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) لە هێڵی 149


## گەڕانەوەکان
پەیامی ئیمەیڵی بنەڕەتی.
