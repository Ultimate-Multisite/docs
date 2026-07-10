---
id: wu_pending_payment_message
title: စစ်ထုတ်ခြင်း - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message {#filter-wupendingpaymentmessage}

ပေးချေမှု မပြီးသေးတဲ့ ငွေပေးချေမှုတွေနဲ့ ပတ်သက်တဲ့ မက်ဆေ့ခ်ျကို အသုံးပြုသူများ ပြောင်းလဲနိုင်စေရန် ခွင့်ပြုပါသည်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | ပြသလိုသည့် မက်ဆေ့ခ်ျ။ |
| $customer | `\WP_Ultimo\Models\Customer` | လက်ရှိဖောက်သည် (customer)။ |
| $pending_payments | `array` | ပေးချေမှု မပြီးသေးတဲ့ ငွေပေးချေမှုစာရင်း။ |

### Since {#since}

- 2.0.19
### Source {#source}

[`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) ၏ ၂၄၄ လိုင်းတွင် သတ်မှတ်ထားသည်။
