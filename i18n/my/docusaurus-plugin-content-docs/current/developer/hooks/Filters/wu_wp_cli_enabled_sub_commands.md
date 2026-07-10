---
id: wu_wp_cli_enabled_sub_commands
title: စစ်ထုတ်ခြင်း - wu_wp_cli_enabled_sub_commands
sidebar_label: wu_wp_cli_enabled_sub_commands
_i18n_hash: 2943f23ce68dd1fdabd034c45131295c
---
# Filter: wu_wp_cli_enabled_sub_commands {#filter-wuwpclienabledsubcommands}

ဤအရာဝတ္ထုအတွက် မည်သည့် sub_commands များကို အသုံးပြုနိုင်သည်ကို စစ်ထုတ်ပေးသည်။

## အချက်အလက်များ (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sub_commands | `array` | မူလ sub_commands များ။ |
| $command_base | `string` | root အောက်တွင် အသုံးပြုသည့် အခြေခံ (base)။ |
| $this | `\Base_Manager` | အရာဝတ္ထု ပုံစံ (object instance)။ |

### စတင်အသုံးပြုချိန် (Since) {#since}

- 2.0.0
### ရင်းမြစ် (Source) {#source}

Defined in [`inc/apis/trait-wp-cli.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-wp-cli.php#L198) at line 198
