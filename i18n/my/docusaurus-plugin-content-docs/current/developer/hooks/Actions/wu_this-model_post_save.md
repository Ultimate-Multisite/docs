---
id: wu_this-model_post_save
title: 'လုပ်ဆောင်ချက် - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_\{$this->model\}_post_save

object တစ်ခုကို database ထဲမှာ သိမ်းဆည်းပြီးတဲ့အခါမှာ ဒီ action က အလုပ်လုပ်မှာပါ (Fires after an object is stored into the database.)

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | သိမ်းဆည်းမယ့် object အချက်အလက်များ။ |
| $this | `\Base_Model` | object ကိုယ်တိုင် (instance)။ |
| $new | `bool` | object အသစ်ဖြစ်ရင် True ဖြစ်ပါတယ်။ |

### Since {#since}

- 2.0.0
### Source {#source}

- Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) at line 624
- Defined in [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) at line 1754
