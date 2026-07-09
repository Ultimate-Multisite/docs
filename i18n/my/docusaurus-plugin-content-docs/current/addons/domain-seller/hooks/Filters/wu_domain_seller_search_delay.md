---
id: wu_domain_seller_search_delay
title: စစ်ထုတ် - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay {#filter-wudomainsellersearchdelay}

ဒိုမိန်ရှာဖွေမှု၏ debounce delay ကို မီလီစက္ကန့်များဖြင့် စစ်ထုတ်ပေးသည်။

ဤတန်ဖိုးကို တိုးမြှင့်ခြင်းဖြင့် ချိတ်ဆက်မှုနှေးကွေးသည့်အခါ API ခေါ်ဆိုမှုများ (API calls) ကို လျှော့ချပေးနိုင်ပါသည်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $delay | `int` | မီလီစက္ကန့်များဖြင့် debounce delay။ ပုံသေတန်ဖိုးမှာ ၅၀၀ ဖြစ်သည်။ |

### Since {#since}

- 2.1.0
### Source {#source}

[`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) ၏ ၈၅၄ လိုင်းတွင် သတ်မှတ်ထားသည်။
