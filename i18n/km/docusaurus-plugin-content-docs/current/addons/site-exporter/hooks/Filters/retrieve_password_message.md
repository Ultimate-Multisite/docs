---
id: retrieve_password_message
title: តម្រង - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

តម្រងសារ​រាងកាយ​នៃ​អ៊ីមែល​កំណត់​ពាក្យ​សម្ងាត់​ឡើងវិញ។

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | សារ​អ៊ីមែល​លំនាំដើម។ |
| $key | `string` | គន្លឹះ​ធ្វើ​ឱ្យ​សកម្ម។ |
| $user_login | `string` | ឈ្មោះ​អ្នកប្រើ​សម្រាប់​អ្នកប្រើ។ |
| $user_data | `\WP_User` | វត្ថុ WP_User។ |

### ចាប់តាំងពី {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### ប្រភព {#source}

បាន​កំណត់​ក្នុង [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) នៅ​បន្ទាត់ 149


## ត្រឡប់ {#returns}
សារ​អ៊ីមែល​លំនាំដើម។
