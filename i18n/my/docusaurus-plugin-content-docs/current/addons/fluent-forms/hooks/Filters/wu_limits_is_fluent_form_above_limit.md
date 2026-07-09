---
id: wu_limits_is_fluent_form_above_limit
title: Filter - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filter: wu_limits_is_fluent_form_above_limit {#filter-wulimitsisfluentformabovelimit}

ပေးထားသော form အမျိုးအစားတစ်ခုသည် ဤအစီအစဉ် (plan) တွင် ခွင့်ပြုထားခြင်း ရှိ၊ မရှိ စစ်ဆေးသည်။ plugin developer များအား return value ကို စစ်ထုတ်ခွင့်ပြုသည်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $value | `bool` | form အမျိုးအစားသည် ကန့်သတ်ချက်ထက် ကျော်လွန်နေခြင်း ရှိ၊ မရှိ |
| $form_type | `string` | စစ်ဆေးနေသည့် form အမျိုးအစား |
| $form_count | `int` | လက်ရှိ form အရေအတွက် |
| $quota | `int` | ခွင့်ပြုထားသော အကန့်အသတ် |

### Since {#since}

- 1.0.0
### Source {#source}

- Defined in [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) at line 56
- Defined in [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) at line 89
