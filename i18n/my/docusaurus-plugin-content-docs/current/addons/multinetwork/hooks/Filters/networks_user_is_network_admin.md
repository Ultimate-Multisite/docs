---
id: networks_user_is_network_admin
title: Filter - networks_user_is_network_admin
sidebar_label: networks_user_is_network_admin
_i18n_hash: f8e40a1c47591c0cab73d671cf681281
---
# Filter: networks_user_is_network_admin

အသုံးပြုသူတစ်ဦးသည် စီမံခန့်ခွဲသူ (administrator) အဖြစ်ရှိသည့် network များကို စစ်ထုတ်ပေးသည့် filter ဖြစ်ပါသည်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $ | `array\|bool` | အသုံးပြုသူအတွက် network မရှိပါက network ID များစာရင်း သို့မဟုတ် false တန်ဖိုး။ |
| $ | `int` | network များကို ပြန်ပေးရမည့် အသုံးပြုသူ ID။ |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L703) ၏ ၇၀၃ လိုင်းတွင် သတ်မှတ်ထားသည်။
