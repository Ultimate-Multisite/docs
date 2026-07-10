---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filter - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean {#filter-wpultimowoocommercecheckoutfieldstoclean}

WooCommerce ၏ ငွေတောင်းခံလိပ်စာ (billing address) ပုံစံကွက်များကို developer များက စစ်ထုတ် (filter) နိုင်စေရန် ခွင့်ပြုပါသည်။

Ultimate Multisite တွင် ငွေတောင်းခံလိပ်စာကွက်များ ပါဝင်နေတဲ့အတွက်၊ WooCommerce က checkout ပုံစံမှာ ပုံမှန်ပြသတဲ့ ကွက်တွေကို ဖယ်ရှားပစ်ဖို့ လိုအပ်နိုင်ပါတယ်။ ပုံမှန်အားဖြင့် ဒီ list ကို ဘာတန်ဖိုးမှ မပေးထားတဲ့အတွက်၊ WooCommerce မှာ ပြသဖို့ သတ်မှတ်ထားတဲ့ ကွက်အားလုံးကို သိမ်းထားမှာ ဖြစ်ပါတယ်။

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) ၏ ၂၇၇ လိုင်းမှာ သတ်မှတ်ထားပါတယ်။

## Returns {#returns}
ဖယ်ရှားလိုတဲ့ ကွက်တွေရဲ့ list ကို ပြန်ပေးပါတယ်။ ရရှိနိုင်တဲ့ တန်ဖိုးတွေမှာ billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, နဲ့ billing_phone တို့ ပါဝင်ပါတယ်။
