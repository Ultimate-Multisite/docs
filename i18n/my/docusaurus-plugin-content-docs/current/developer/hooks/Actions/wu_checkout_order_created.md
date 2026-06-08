---
id: wu_checkout_order_created
title: Action - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

ငွေရှင်းမှုမှာယူမှု (checkout order) ကို အပြည့်အစုံ စုစည်းပြီးသည့်အခါ ဤ Action သည် အလုပ်လုပ်ပါသည်။

Addon များသည် ဤအရာကို အသုံးပြု၍ သီးခြား ငွေရှင်းကာလများ (independent billing cycles) ရှိသော ထုတ်ကုန်များအတွက် ဒုတိယအဆင့် အဖွဲ့ဝင်မှုများ (secondary memberships) ကို ဖန်တီးနိုင်သည်။

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | ကုန်ပစ္စည်းလှည်း/မှာယူမှု (cart/order) object ဖြစ်သည်။ |
| $customer | `\WP_Ultimo\Models\Customer` | ဝယ်ယူသူ (customer) ဖြစ်သည်။ |
| $membership | `\WP_Ultimo\Models\Membership` | အဓိက အဖွဲ့ဝင်မှု (primary membership) ဖြစ်သည်။ |
| $payment | `\WP_Ultimo\Models\Payment` | ငွေပေးချေမှု (payment) ဖြစ်သည်။ |

### Since

- 2.5.0
### Source

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) at line 891
