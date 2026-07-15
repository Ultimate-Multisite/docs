---
id: wu_domain_mapping_register_filters
title: Action - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

ပလပ်အင်အချို့က မ్యాపింగ్ စတင်အသက်ဝင်ခြင်းမရှိခင်ကတည်းက URL တွေကို သိမ်းထားတာမျိုး၊ ဒါမှမဟုတ် အပေါ်က filter တွေမှာ မပါတဲ့ တခြားနည်းလမ်းတွေနဲ့ URL တွေကို ဖန်တီးတာမျိုးတွေ ရှိနိုင်ပါတယ်။

အဲလိုအခြေအနေမျိုးတွေမှာ၊ ကျွန်တော်တို့က filter တွေ ထပ်ထည့်ချင်ပါတယ်။ ပေးလိုက်တဲ့ ဒုတိယ parameter က `mangle_url` callback ဖြစ်ပါတယ်။ ဒီ filter ကို တိုက်ရိုက်အသုံးပြုတာကိုတော့ မအကြံပြုပါဘူး။ အဲဒီအစား၊ `Domain_Mapping::apply_mapping_to_url` method ကို အသုံးပြုဖို့ အကြံပြုလိုပါတယ်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | မပြောင်းလဲနိုင်တဲ့ function တစ်ခု။ |
| $domain_mapper | `self` | ဒီ object ကိုယ်တိုင်။ |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) at line 530
