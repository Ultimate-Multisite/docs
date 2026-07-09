---
id: retrieve_password_message
title: Filter - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message {#filter-retrievepasswordmessage}

စကားဝှက် ပြန်လည်သတ်မှတ်ခြင်း အီးမေးလ်၏ မက်ဆေ့ခ်ျကိုယ်ထည်ကို စစ်ထုတ်ပေးသည့် (filter) လုပ်ဆောင်ချက် ဖြစ်ပါသည်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | မူရင်း အီးမေးလ် မက်ဆေ့ခ်ျ။ |
| $key | `string` | အသက်သွင်းခြင်း (activation) key။ |
| $user_login | `string` | အသုံးပြုသူ၏ အမည် (username)။ |
| $user_data | `\WP_User` | WP_User object။ |

### Since {#since}

- 2.8.0
- 4.1.0: <code>$user_login</code> နှင့် <code>$user_data</code> parameters များကို ထည့်သွင်းခဲ့ပါသည်။
### Source {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) ၏ ၁၄၉ လိုင်းတွင် သတ်မှတ်ထားပါသည်။

## Returns {#returns}
မူရင်း အီးမေးလ် မက်ဆေ့ခ်ျ။
