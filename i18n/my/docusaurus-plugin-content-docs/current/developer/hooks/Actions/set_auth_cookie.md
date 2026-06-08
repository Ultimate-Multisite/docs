---
id: set_auth_cookie
title: Action - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

အတည်ပြုမှု (authentication) cookie ကို သတ်မှတ်ခါနီးမှာ ချက်ချင်း အလုပ်လုပ်တဲ့ လုပ်ဆောင်ချက်တစ်ခုပါ။

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | အတည်ပြုမှု cookie တန်ဖိုး။ |
| $expire | `int` | Login grace period က ဘယ်အချိန်မှာ ကုန်ဆုံးမလဲဆိုတာကို UNIX timestamp အနေနဲ့။ ပုံမှန်အားဖြင့် cookie ကုန်ဆုံးချိန်ကနေ ၁၂ နာရီ နောက်ကျပါတယ်။ |
| $expiration | `int` | အတည်ပြုမှု cookie က ဘယ်အချိန်မှာ ကုန်ဆုံးမလဲဆိုတာကို UNIX timestamp အနေနဲ့။ ပုံမှန်အားဖြင့် ဒီနေ့ကစပြီး ၁၄ ရက်အကြာမှာ ဖြစ်ပါတယ်။ |
| $user_id | `int` | အသုံးပြုသူ ID။ |
| $scheme | `string` | အတည်ပြုမှု စနစ်။ တန်ဖိုးတွေမှာ 'auth' ဒါမှမဟုတ် 'secure_auth' ပါဝင်ပါတယ်။ |
| $token | `string` | ဒီ cookie အတွက် အသုံးပြုမယ့် အသုံးပြုသူရဲ့ session token ပါ။ |

### Since

- 2.5.0
- 4.9.0: <code>$token</code> parameter ကို ထည့်သွင်းခဲ့ပါတယ်။
### Source

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) ရဲ့ ၁၂၄ လိုင်းမှာ သတ်မှတ်ထားပါတယ်။
