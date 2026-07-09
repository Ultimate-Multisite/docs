---
id: wu_connector_enforcement_option_keys
title: စစ်ထုတ်ခြင်း - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys {#filter-wuconnectorenforcementoptionkeys}

အဓိက ဝက်ဘ်ဆိုက်မှ အသုံးပြုရန် သတ်မှတ်ထားသော AI ပံ့ပိုးပေးသူ (provider) ရွေးချယ်မှု သော့များစာရင်းကို စစ်ထုတ်ပေးသည်။

စိတ်ကြယ်မှုရှိသော (custom) သို့မဟုတ် တတိယပါတီ (third-party) AI ပံ့ပိုးပေးသူ plugin များအတွက် option keys များကို ထည့်သွင်းပေးခြင်းဖြင့်၊ ၎င်းတို့၏ ဆက်တင်များအား လက်အောက် ဝက်ဘ်ဆိုက်များ (subsites) တွင်လည်း အဓိက ဝက်ဘ်ဆိုက်မှ အမွေဆက်ခံရစေရန် လုပ်ဆောင်သည်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | အသုံးပြုရန် သတ်မှတ်ရမည့် option key အမည်များ (၎င်းတွင် တွေ့ရှိရသော connector key များနှင့် EXTRA_PROVIDER_OPTIONS တို့ကိုလည်း အလိုအလျောက် ထည့်သွင်းပေးထားပြီး ဖြစ်သည်။) |

### Since {#since}

- 1.2.0
### Source {#source}

Defined in [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) at line 206
