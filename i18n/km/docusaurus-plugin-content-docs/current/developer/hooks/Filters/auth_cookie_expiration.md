---
id: auth_cookie_expiration
title: តម្រង - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# តម្រង: auth_cookie_expiration {#filter-authcookieexpiration}

តម្រងរយៈពេលផុតកំណត់នៃ cookie ផ្ទៀងផ្ទាត់ភាពត្រឹមត្រូវ។

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $length | `int` | រយៈពេលផុតកំណត់គិតជាវិនាទី។ |
| $user_id | `int` | ID អ្នកប្រើ។ |
| $remember | `bool` | ថាតើត្រូវចងចាំការចូលរបស់អ្នកប្រើឬអត់។ លំនាំដើម false។ |

### ចាប់ពី {#since}

- 2.8.0
### ប្រភព {#source}

បានកំណត់ក្នុង [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) នៅបន្ទាត់ 52
