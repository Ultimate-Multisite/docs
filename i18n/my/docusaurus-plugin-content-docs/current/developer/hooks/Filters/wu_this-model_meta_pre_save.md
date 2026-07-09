---
id: wu_this-model_meta_pre_save
title: 'စစ်ထုတ်ခြင်း - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save {#filter-wuthis-modelmetapresave}

ဒေတာ meta များကို database ထဲ သိမ်းဆည်းရန် စီးရီးအဖြစ် ပြောင်းလဲခြင်းမပြုမီ စစ်ထုတ်ပေးသည့် filter တစ်ခုဖြစ်သည်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta | `array` | သိမ်းဆည်းမည့် meta data များ၊ unserialized လုပ်ထားသည့်အရာ။ |
| $data_unserialized | `array` | သိမ်းဆည်းမည့် object data များ။ |
| $this | `\Base_Model` | object အကောင်အထည် (object instance)။ |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) at line 534
