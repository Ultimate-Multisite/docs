---
id: wu_domain_seller_complete_registration
title: လုပ်ဆောင်ချက် - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

ငွေပေးချေမှုတစ်ခုသည် ဒိုမိန်း မှတ်ပုံတင်ခြင်းကို စတင်စေရမည့် အခြေအနေတစ်ခုသို့ ပြောင်းလဲသည့်အခါ ဤ Action သည် အလုပ်လုပ်ပါသည်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ငွေပေးချေမှု အရာဝတ္ထု။ |
| $old_status | `string` | အခြေအနေ ပြောင်းလဲခြင်းမပြုမီက ယခင် ငွေပေးချေမှု အခြေအနေ။ |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) at line 266
