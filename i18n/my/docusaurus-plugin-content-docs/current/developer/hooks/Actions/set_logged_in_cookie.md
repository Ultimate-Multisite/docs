---
id: set_logged_in_cookie
title: Action - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie

အကောင့်ဝင်ထားကြောင်း အထောက်အထားကွပ်ကီး (cookie) ကို သတ်မှတ်ခါနီးမှာ ချက်ချင်း အလုပ်လုပ်တဲ့ လုပ်ဆောင်ချက်တစ်ခု ဖြစ်ပါတယ်။

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | အကောင့်ဝင်ထားကြောင်း cookie တန်ဖိုး။ |
| $expire | `int` | အကောင့်ဝင်ခွင့်သက်သာချိန် (login grace period) ကုန်ဆုံးမယ့်အချိန်ကို UNIX time stamp နဲ့ ဖော်ပြရပါတယ်။ မူလက cookie ကုန်ဆုံးချိန်ကနေ ၁၂ နာရီ နောက်ကျပါတယ်။ |
| $expiration | `int` | အကောင့်ဝင်အထောက်အထား cookie ကုန်ဆုံးမယ့်အချိန်ကို UNIX time stamp နဲ့ ဖော်ပြရပါတယ်။ မူလကဆိုရင် နောက် ၁၄ ရက်အထိ ဖြစ်ပါတယ်။ |
| $user_id | `int` | အသုံးပြုသူ ID။ |
| $scheme | `string` | အထောက်အထား စနစ်။ မူလက 'logged_in' ဖြစ်ပါတယ်။ |
| $token | `string` | ဒီ cookie အတွက် အသုံးပြုမယ့် အသုံးပြုသူရဲ့ session token။ |

### Since

- 2.6.0
- 4.9.0: <code>$token</code> parameter ကို ထည့်သွင်းခဲ့ပါတယ်။
### Source

Defined in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) at line 141
