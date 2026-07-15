---
id: wu_domain_became_primary
title: Action - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

ဒိုမိန်တစ်ခုသည် ဝက်ဘ်ဆိုဒ်၏ အဓိကဒိုမိန် (primary domain) ဖြစ်လာသည့်အခါ ဤ action ကို ခေါ်ဆိုပါသည်။

ဤ action သည် ဒိုမိန်တစ်ခု၏ `primary_domain` flag ကို `true` အဖြစ် သတ်မှတ်လိုက်သည့်အခါ၊ အသစ်သော primary domain ကို ဖန်တီးချိန်ဖြစ်စေ၊ ရှိပြီးသား ဒိုမိန်တစ်ခုကို primary ဖြစ်လာစေရန် အဆင့်မြှင့်ချိန်ဖြစ်စေ အလုပ်လုပ်ပါသည်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | primary ဖြစ်လာသည့် ဒိုမိန်။ |
| $blog_id | `int` | ထိခိုက်ခဲ့သော ဝက်ဘ်ဆိုဒ်၏ blog ID။ |
| $was_new | `bool` | ၎င်းသည် အသစ်ဖန်တီးထားသော ဒိုမိန် ဟုတ်၊ မဟုတ်။ |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) ၏ ၅၆၀ လိုင်းတွင် သတ်မှတ်ထားပါသည်။
