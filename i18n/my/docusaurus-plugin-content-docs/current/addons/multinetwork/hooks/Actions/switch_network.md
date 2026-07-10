---
id: switch_network
title: လုပ်ဆောင်ချက် - switch_network
sidebar_label: switch_network
_i18n_hash: 40e813a787afb90d335c7dd7b8c93eb2
---
# Action: switch_network {#action-switchnetwork}

လက်ရှိ network အခြေအနေ (context) ကို ပြောင်းလဲလိုက်တဲ့အခါ ဒီ Action က အလုပ်လုပ်ပါတယ်။

## ပါရာမီတာများ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $new_network_id | `int` | ပြောင်းသွားမယ့် network ရဲ့ ID ကို ဖော်ပြပါတယ်။ |
| $old_network_id | `int` | အရင်က အသုံးပြုနေခဲ့တဲ့ network ရဲ့ ID ကို ဖော်ပြပါတယ်။ |

### စတင်ချိန် {#since}

- 1.3.0
### ရင်းမြစ် {#source}

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L859) ရဲ့ ၈၅၉ လိုင်းမှာ သတ်မှတ်ထားပါတယ်။
