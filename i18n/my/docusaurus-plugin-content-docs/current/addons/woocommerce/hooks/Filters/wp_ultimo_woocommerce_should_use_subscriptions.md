---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

Developer တွေအနေနဲ့ WooCommerce Subscriptions ကို အသုံးပြုဖို့ အတင်းအကျပ် သတ်မှတ်ခွင့်ပေးနိုင်ပါတယ်။

ပုံမှန်အားဖြင့် add-on က (၁) WooCommerce Subscriptions ကို (အပြည့်အစုံ plugin ဖြစ်စေ၊ core နဲ့ ပေါင်းစပ်ထားတာ ဖြစ်စေ) ရှိမရှိ စစ်ဆေးပြီး၊ ပြီးရင် (၂) WooCommerce Subscriptions ကို အသုံးပြုခွင့်ပေးထားတဲ့ setting ကို ထပ်မံစစ်ဆေးပါတယ်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | လက်ရှိမှာ Woo Subs ကို အသုံးပြုဖို့ လိုအပ်ခြင်း ရှိ/မရှိ။ |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | လက်ရှိ object ကို။ |

### Source {#source}

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) at line 361

## Returns {#returns}
WooCommerce Subs ကို အသုံးပြုရန် true၊ မအသုံးပြုရန် false။
