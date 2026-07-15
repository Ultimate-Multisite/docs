---
id: wu_country_get_administrative_division_name
title: Filter - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

နိုင်ငံရဲ့ အုပ်ချုပ်ရေးဆိုင်ရာ ခွဲခြားမှုတွေရဲ့ သပ်ရပ်တဲ့ နာမည်ကို ပြန်ပေးပါတယ်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | ခွဲခြားမှုရဲ့ နာမည်။ ပုံမှန်အားဖြင့် ပြည်နယ်၊ ခရိုင်၊ ဒေသ စသည်တို့လိုမျိုး ဖြစ်ပါတယ်။ |
| $country_code | `string` | နိုင်ငံအတွက် နှစ်လုံးပါ ISO ကုဒ်။ |
| $state_code | `string` | ပြည်နယ်အတွက် နှစ်လုံးပါ ISO ကုဒ်။ |
| $ucwords | `bool` | စာလုံးတွေကို အကြီးအက္ခရာ (uppercase) ပြောင်းပေးမလား။ |
| $current_country | `\WP_Ultimo\Country\Country` | လက်ရှိ class ရဲ့ အကောင်အထည်ဖော်မှု (instance)။ |

### Since {#since}

- 2.0.11
### Source {#source}

Defined in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) at line 250


## Returns {#returns}
ပြင်ဆင်ထားတဲ့ ခွဲခြားမှု နာမည်။
