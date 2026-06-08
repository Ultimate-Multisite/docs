---
id: retrieve_password_title
title: စစ်ထုတ်ခြင်း - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title

စကားဝှက် ပြန်လည်သတ်မှတ်ခြင်း (password reset) အီးမေးလ်ရဲ့ ခေါင်းစဉ် (subject) ကို ပြင်ဆင်ပေးတဲ့ filter တစ်ခု ဖြစ်ပါတယ်။

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $title | `string` | ပုံမှန် အီးမေးလ် ခေါင်းစဉ် (Default email title)။ |
| $user_login | `string` | အသုံးပြုသူ၏ အမည်နာမည် (username)။ |
| $user_data | `\WP_User` | WP_User object။ |

### Since

- 2.8.0
- 4.4.0: <code>$user_login</code> နဲ့ <code>$user_data</code> parameters တွေကို ထည့်သွင်းခဲ့ပါတယ်။
### Source

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) ရဲ့ ၁၃၅ လိုင်းမှာ သတ်မှတ်ထားပါတယ်။

## Returns
ပုံမှန် အီးမေးလ် ခေါင်းစဉ် (Default email title) ကို ပြန်ပေးပါတယ်။
