---
id: secure_auth_cookie
title: Filter - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filter: secure_auth_cookie {#filter-secureauthcookie}

auth cookie ကို HTTPS မှတစ်ဆင့်သာ ပို့သင့်၊ မပို့သင့် စသည်တို့ကို စစ်ထုတ်ပေးသည့် filter တစ်ခုဖြစ်သည်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $secure | `bool` | ကွတ်ကီးကို HTTPS မှတစ်ဆင့်သာ ပို့သင့်၊ မပို့သင့် စစ်ထုတ်သည်။ |
| $user_id | `int` | အသုံးပြုသူ ID (User ID) ဖြစ်သည်။ |

### Since {#since}

- 3.1.0
### Source {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) ၏ ၈၀ လိုင်းတွင် သတ်မှတ်ထားသည်။
