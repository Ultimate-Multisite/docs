---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

ကွန်ရက် အသက်သွင်းမှု စစ်ဆေးခြင်းကို ကျော်လွန်စေရန် (short-circuit) developer များအတွက် ခွင့်ပြုပါသည်။

ဤအရာသည် composer-based နှင့် အခြားသော စိတ်ကြယ်မှုများ (custom setups) ကို အသုံးပြုသည့်အခါ၊ ဥပမာအားဖြင့် Bedrock ကဲ့သို့သော နေရာများတွင် အလွန်အသုံးဝင်ပါသည်။ ဤနေရာများတွင် mu-plugins အနေဖြင့် plugin များကို အသုံးပြုခြင်းသည် ပုံမှန်အလေ့အကျင့် ဖြစ်ပါသည်။

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | စစ်ဆေးခြင်းကို ကျော်လွန်စေသင့်၊ မကျော်လွန်စေသင့်ကို သတ်မှတ်သည်။ မူလက false ဖြစ်သည်။ |

### Since

- 2.0.0
### Source

[`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) ၏ ၂၇၂ လိုင်းတွင် သတ်မှတ်ထားသည်။

## Returns
စစ်ဆေးခြင်းကို ကျော်လွန်စေလိုပါက true၊ မဟုတ်ပါက false ကို ပြန်ပေးသည်။
