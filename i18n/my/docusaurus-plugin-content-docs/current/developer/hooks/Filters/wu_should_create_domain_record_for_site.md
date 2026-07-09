---
id: wu_should_create_domain_record_for_site
title: စစ်ထုတ်မှု - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site

အသစ်ဖန်တီးထားသော site အတွက် Ultimate Multisite က domain record ဖန်တီးသင့်မသင့်ကို စစ်ထုတ်သည်။

shared checkout-form base domain၊ internal host၊ သို့မဟုတ် အခြား integration တစ်ခုက သီးခြားစီ စီမံမည့် domain ကို အသုံးပြုသော site များအတွက် အလိုအလျောက် domain-record ဖန်တီးခြင်းကို တားဆီးရန် သို့မဟုတ် နောက်ဆုတ်ရန် ဤ filter ကို အသုံးပြုပါ။

## Parameter များ

| Name | Type | Description |
|------|------|-------------|
| $create | `bool` | domain record ကို ဖန်တီးသင့်မသင့်။ |
| $site | `WP_Site` | အသစ်ဖန်တီးထားသော site object။ |

### စတင်ပါဝင်သည့်ဗားရှင်း

- 2.13.0

### ရင်းမြစ်

`inc/functions/domain.php` တွင် သတ်မှတ်ထားသည်။


## ပြန်ပေးသည့်တန်ဖိုး

domain record ကို ဖန်တီးမဖန်တီးကို ပြသသော Boolean။
