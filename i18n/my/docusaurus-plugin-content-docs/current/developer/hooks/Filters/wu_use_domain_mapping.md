---
id: wu_use_domain_mapping
title: Filter - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

mapping တစ်ခုကို အသုံးပြုသင့်၊ မသင့်ကို ဆုံးဖြတ်ပေးသည်။

ပုံမှန်အားဖြင့်၊ အသက်ဝင်နေသော mapping များကိုသာ အသုံးပြုခွင့်ပေးလိုမည်ဖြစ်သည်။ သို့သော် ပိုမိုရှုပ်ထွေးသော logic များကို အသုံးပြုလိုပါက၊ သို့မဟုတ် အသက်မဝင်သေးသော domain များကိုလည်း mapping လုပ်ခွင့်ပေးလိုပါက ဤနေရာတွင် filter လုပ်ရုံသာ လုပ်即可။

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $is_active | `bool` | mapping ကို အသက်ဝင်သည်ဟု သတ်မှတ်သင့်သလား။ |
| $mapping | `\Domain` | ကျွန်ုပ်တို့ စစ်ဆေးနေသော mapping |
| $domain | `string` |  |

### Source

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) ၏ ၃၉၁ လိုင်းတွင် သတ်မှတ်ထားသည်။
