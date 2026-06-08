---
id: secure_logged_in_cookie
title: Filter - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie

အကောင့်ဝင် cookie ကို HTTPS မှတစ်ဆင့်သာ ပို့ပေးသင့်၊ မပို့သင့်ကို စစ်ထုတ်ပေးပါသည်။

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | အကောင့်ဝင် cookie ကို HTTPS မှတစ်ဆင့်သာ ပို့ပေးသင့်၊ မပို့သင့်ကို ဖော်ပြသည်။ |
| $user_id | `int` | အသုံးပြုသူ ID။ |
| $secure | `bool` | အတည်ပြုကုဒ် (auth cookie) ကို HTTPS မှတစ်ဆင့်သာ ပို့ပေးသင့်၊ မပို့သင့်ကို ဖော်ပြသည်။ |

### Since

- 3.1.0
### Source

[https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) တွင် ၉၁ လိုင်း၌ သတ်မှတ်ထားသည်။
