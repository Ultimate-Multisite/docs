---
id: wu_country_get_cities
title: စစ်ထုတ်ခြင်း - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

နိုင်ငံတစ်ခုရဲ့ ပြည်နယ်တစ်ခုအတွက် မြို့တွေစာရင်းကို ပြန်ပေးပါတယ်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $cities | `array` | ပြည်နယ်ရဲ့ မြို့နာမည်စာရင်း။ key တွေ မပါဝင်ပါဘူး။ |
| $country_code | `string` | နိုင်ငံအတွက် နှစ်လုံးပါ ISO ကုဒ်။ |
| $state_code | `string` | ပြည်နယ်အတွက် နှစ်လုံးပါ ISO ကုဒ်။ |
| $current_country | `\WP_Ultimo\Country\Country` | လက်ရှိ class ရဲ့ instance တစ်ခု။ |

### စတင်အသုံးပြုနိုင်သည့် {#since}

- 2.0.11
### ရင်းမြစ် {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) တွင် ၁၄၆ လိုင်း၌ သတ်မှတ်ထားသည်။


## ပြန်ပေးသည့်အရာ {#returns}
စစ်ထုတ်ထားတဲ့ ပြည်နယ်စာရင်း။
