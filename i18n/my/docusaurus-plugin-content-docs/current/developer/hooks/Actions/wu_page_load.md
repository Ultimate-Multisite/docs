---
id: wu_page_load
title: လုပ်ဆောင်ချက် - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load {#action-wupageload}

ပလပ်အင် developer များအနေဖြင့် ကျွန်ုပ်တို့၏ စာမျက်နှာများတွင် အပိုဆောင်း hook များကို ထည့်သွင်းနိုင်ရန် ခွင့်ပြုပါသည်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | ဤစာမျက်နှာ၏ ID ဖြစ်သည်။ |
| $page_hook | `string` | ဤစာမျက်နှာ၏ page hook ဖြစ်သည်။ |
| $admin_page | `self` | စာမျက်နှာ အကောင်အထည်ဖော်မှု (page instance)။ |

### Since {#since}

- 1.8.2
- 2.0.4: တတိယပါရာမီတာ (page instance) ကို ထည့်သွင်းခဲ့သည်။
### Source {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) ၏ ၃၁၈ လိုင်းတွင် သတ်မှတ်ထားသည်။
