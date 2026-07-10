---
id: wp_ultimo_render_vars
title: စစ်ထုတ်ခြင်း - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filter: wp_ultimo_render_vars {#filter-wpultimorendervars}

ပလပ်အင် developer များအနေဖြင့် render လုပ်သည့် အကြောင်းအရာ (render context) အတွက် variable အပိုများကို ကမ္ဘာလုံးဆိုင်ရာအဆင့်တွင် ထည့်သွင်းနိုင်စေရန်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $args | `array` | render ခေါ်ဆိုမှုမှ ပေးပို့လာသော variable များ ပါဝင်သည့် array။ |
| $view | `string` | render လုပ်မည့် view ၏ အမည်။ |
| $default_view | `string` | အစားထိုးအဖြစ် သုံးမည့် fallback_view ၏ အမည်။ |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) ၏ ၃၁ လိုင်းတွင် သတ်မှတ်ထားသည်။

## Returns {#returns}
