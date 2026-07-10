---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_{$this->id}_load {#action-wupagethis-idload}

Plugin developer များအနေဖြင့် ကျွန်ုပ်တို့၏ စာမျက်နှာများတွင် အပိုဆောင်း hook များကို ထည့်သွင်းနိုင်စေရန်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | ဤစာမျက်နှာ၏ ID ကို ရည်ညွှန်းသည်။ |
| $page_hook | `string` | ဤစာမျက်နှာ၏ page hook ကို ရည်ညွှန်းသည်။ |
| $admin_page | `self` | စာမျက်နှာ အရာဝတ္ထု (page instance) ကို ရည်ညွှန်းသည်။ |

### Since {#since}

- 1.8.2
- 2.0.4: တတိယပါရာမီတာ (page instance) ကို ထည့်သွင်းခဲ့သည်။
### Source {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) ၏ ၃၃၂ လိုင်းတွင် သတ်မှတ်ထားသည်။
