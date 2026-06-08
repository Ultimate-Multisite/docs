---
id: wu_model_post_save
title: Action - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save

အရာဝတ္ထုတစ်ခုကို database ထဲမှာ သိမ်းဆည်းပြီးတဲ့အခါမှာ အလုပ်လုပ်တဲ့ Action တစ်ခု ဖြစ်ပါတယ်။

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $model | `string` | model slug ကို ဆိုလိုပါတယ်။ |
| $data | `array` | သိမ်းဆည်းမယ့် အရာဝတ္ထုရဲ့ data တွေကို serialized လုပ်ထားတာပါ။ |
| $data_unserialized | `array` | သိမ်းဆည်းမယ့် အရာဝတ္ထုရဲ့ data တွေပါ။ |
| $this | `\Base_Model` | အရာဝတ္ထုရဲ့ instance ကို ဆိုလိုပါတယ်။ |

### Since

- 2.0.0
### Source

- Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) at line 613
- Defined in [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) at line 1743
