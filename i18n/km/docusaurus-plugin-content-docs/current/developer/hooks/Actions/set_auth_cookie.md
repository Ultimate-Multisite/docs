---
id: set_auth_cookie
title: សកម្មភាព - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

ដំណើរការភ្លាមៗមុនពេល cookie ផ្ទៀងផ្ទាត់ត្រូវបានកំណត់។

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $auth_cookie | `string` | តម្លៃ cookie ផ្ទៀងផ្ទាត់។ |
| $expire | `int` | ពេលវេលាដែលរយៈពេលអនុគ្រោះចូលប្រព័ន្ធផុតកំណត់ ជា UNIX timestamp។ លំនាំដើមគឺ 12 ម៉ោងបន្ទាប់ពីពេលផុតកំណត់របស់ cookie។ |
| $expiration | `int` | ពេលវេលាដែល cookie ផ្ទៀងផ្ទាត់ផុតកំណត់ ជា UNIX timestamp។ លំនាំដើមគឺ 14 ថ្ងៃចាប់ពីពេលនេះ។ |
| $user_id | `int` | User ID។ |
| $scheme | `string` | គ្រោងការណ៍ផ្ទៀងផ្ទាត់។ តម្លៃរួមមាន 'auth' ឬ 'secure_auth'។ |
| $token | `string` | session token របស់អ្នកប្រើ ដើម្បីប្រើសម្រាប់ cookie នេះ។ |

### ចាប់តាំងពី {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### ប្រភព {#source}

បានកំណត់ក្នុង [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) នៅបន្ទាត់ 124
