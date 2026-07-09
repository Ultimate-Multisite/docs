---
id: wu_minimum_password_strength
title: Filter - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength {#filter-wuminimumpasswordstrength}

လိုအပ်သော အနည်းဆုံး စကားဝှက် ခိုင်မာမှု အဆင့်ကို စစ်ထုတ်ပေးသည်။ (zxcvbn score အပေါ် အခြေခံသည်)

ခိုင်မာမှု အဆင့်များ- 0, 1: အလွန်အားနည်းသည် (Very weak) - 2: အားနည်းသည် (Weak) - 3: အလယ်အလတ် (Medium) - 4: ခိုင်မာသည် (Strong) (မူရင်း)

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | လိုအပ်သည့် အနည်းဆုံး ခိုင်မာမှု အဆင့်။ |
| $strength_setting | `string` | အုပ်ချုပ်သူ (admin) ၏ သတ်မှတ်ထားသော တန်ဖိုး (medium, strong, super_strong)။ |

### Since {#since}

- 2.4.0
### Source {#source}

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) at line 516
