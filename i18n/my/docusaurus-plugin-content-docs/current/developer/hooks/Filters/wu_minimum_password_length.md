---
id: wu_minimum_password_length
title: Filter - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length {#filter-wuminimumpasswordlength}

စကားဝှက် အနိမ့်ဆုံး အရှည်ကို သတ်မှတ်ရန်။

`wu_enforce_password_rules` သည် `true` ဖြစ်သည့်အခါတွင်သာ အကျိုးသက်ရောက်မှု ရှိပါသည်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | အနိမ့်ဆုံး စကားဝှက် အရှည်။ ပုံသေအားဖြင့် ၁၂ (Defender Pro နှင့် ကိုက်ညီသည်)။ |
| $defender_active | `bool` | Defender Pro Strong Password ကို အသုံးပြုနေခြင်း ရှိ၊ မရှိ။ |

### Since {#since}

- 2.4.0
### Source {#source}

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) at line 543
