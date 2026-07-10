---
id: get_site_url_for_previewer
title: Filter - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer {#filter-getsiteurlforpreviewer}

ကြိုတင်ကြည့်ရှုစနစ် (previewer) တွင် အသုံးပြုမည့် URL ကို ပလပ်အင် ဖန်တီးသူများက စစ်ထုတ်နိုင်စေရန် ခွင့်ပြုပါသည်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `string` | လက်ရှိ အသုံးပြုနေသည့် ပုံမှန် ဒိုမိန် (Default domain) ဖြစ်ပြီး၊ ပြုပြင်ပြောင်းလဲမှုများ ပြုလုပ်ရာတွင် အသုံးဝင်ပါသည်။ |
| $domain_options | `array` | Ultimate Multisite Settings -> Network Settings -> Domain Options တွင် ထည့်သွင်းထားသည့် ဒိုမိန် ရွေးချယ်မှုများအားလုံး စာရင်း။ |

### Since {#since}

- 1.7.2
### Source {#source}

[`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) ၏ ၈၁၂ လိုင်းတွင် သတ်မှတ်ထားပါသည်။

## Returns {#returns}
အသုံးပြုရန်အတွက် ဒိုမိန်အသစ်။
