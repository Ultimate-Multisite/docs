---
id: wu_get_site_domain_and_path
title: Filter - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path {#filter-wugetsitedomainandpath}

Developer များအနေနဲ့ domain နဲ့ path အတွဲတွေကို ပြုပြင်ပြောင်းလဲနိုင်စေဖို့ ခွင့်ပြုထားတာ ဖြစ်ပါတယ်။

ဒါဟာ staging solution တစ်ခုခုကို အကောင်အထည်ဖော်တာ၊ မတူညီတဲ့ server တွေနဲ့ အသုံးပြုတာ စတဲ့ အရာအတော်များများအတွက် အသုံးဝင်နိုင်ပါတယ်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $d | `object` | domain နဲ့ path key တွေ ပါဝင်တဲ့ လက်ရှိ object ကို ရည်ညွှန်းပါတယ်။ |
| $path_or_subdomain | `string` | function ကို ပို့ပေးခဲ့တဲ့ မူရင်း path/subdomain ကို ရည်ညွှန်းပါတယ်။ |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) ရဲ့ ၂၃၅ လိုင်းမှာ သတ်မှတ်ထားပါတယ်။

## Returns {#returns}
domain နဲ့ path key တွေ ပါဝင်တဲ့ object တစ်ခုကို ပြန်ပေးပါတယ်။
