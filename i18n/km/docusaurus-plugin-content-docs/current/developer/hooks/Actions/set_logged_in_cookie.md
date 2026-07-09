---
id: set_logged_in_cookie
title: សកម្មភាព - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# សកម្មភាព: set_logged_in_cookie

ដំណើរការភ្លាមៗ មុនពេលកំណត់ cookie ផ្ទៀងផ្ទាត់អ្នកបានចូល។

## ប៉ារ៉ាម៉ែត្រ

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | តម្លៃ cookie របស់អ្នកបានចូល។ |
| $expire | `int` | ពេលដែលរយៈពេលអនុគ្រោះនៃការចូលផុតកំណត់ ជា UNIX timestamp។ លំនាំដើមគឺ ១២ ម៉ោង បន្ទាប់ពីពេលផុតកំណត់របស់ cookie។ |
| $expiration | `int` | ពេលដែល cookie ផ្ទៀងផ្ទាត់អ្នកបានចូលផុតកំណត់ ជា UNIX timestamp។ លំនាំដើមគឺ ១៤ ថ្ងៃចាប់ពីឥឡូវ។ |
| $user_id | `int` | លេខសម្គាល់អ្នកប្រើ។ |
| $scheme | `string` | គ្រោងការណ៍ផ្ទៀងផ្ទាត់។ លំនាំដើម 'logged_in'។ |
| $token | `string` | token សម័យរបស់អ្នកប្រើដែលត្រូវប្រើសម្រាប់ cookie នេះ។ |

### ចាប់តាំងពី

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### ប្រភព

បានកំណត់ក្នុង [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) នៅបន្ទាត់ 141
