---
id: add_user_to_blog
title: လုပ်ဆောင်ချက် - add_user_to_blog
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# Action: add_user_to_blog

အသုံးပြုသူတစ်ဦးကို ဝဘ်ဆိုဒ်တစ်ခုသို့ ထည့်လိုက်သည်နှင့် ချက်ချင်း အလုပ်လုပ်ပါသည်။

## Parameters (ပါရာမီတာများ)

| Name (အမည်) | Type (အမျိုးအစား) | Description (ဖော်ပြချက်) |
|------|------|-------------|
| $user_id | `int` | အသုံးပြုသူ ID။ |
| $role | `string` | အသုံးပြုသူ၏ ရာထူး (role)။ |
| $blog_id | `int` | ဘလော့ဂ် ID။ |

### Since (စတင်အသုံးပြုနိုင်သည့်အချိန်)

- MU: MU
### Source (ရင်းမြစ်)

[`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174) ၏ ၁၇၄ လိုင်းတွင် သတ်မှတ်ထားပါသည်။
