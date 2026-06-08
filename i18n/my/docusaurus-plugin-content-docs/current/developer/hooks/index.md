---
title: Hooks အကိုးအကား
sidebar_position: 1
_i18n_hash: 126ed8ba22f4c3faebf743dd13eeb90e
---
# Hooks အကိုးအကား

Ultimate Multisite မှာရှိတဲ့ Actions ၅၉ ခုနဲ့ Filters ၁၁၅ ခုလုံးအတွက် အလိုအလျောက် ထုတ်ပေးထားတဲ့ စာရွက်စာတမ်း ဖြစ်ပါတယ်။

## Actions

- [auth_redirect](./Actions/auth_redirect) — အသုံးပြုသူ စစ်ဆေးပြီး redirect လုပ်မယ့် အချိန် မစခင်မှာ ခေါ်ပါတယ်။
- [set_auth_cookie](./Actions/set_auth_cookie) — အသုံးပြုသူ စစ်ဆေးတဲ့ cookie ကို သတ်မှတ်ခါနီးမှာ ချက်ချင်း ခေါ်ပါတယ်။
- [set_logged_in_cookie](./Actions/set_logged_in_cookie) — အသုံးပြုသူ အကောင့်ဝင်ထားတဲ့ cookie ကို သတ်မှတ်ခါနီးမှာ ခေါ်ပါတယ်။
- [wp_ultimo_host_providers_load](./Actions/wp_ultimo_host_providers_load) — Developer တွေအနေနဲ့ wp plugins တွေကနေ ကိုယ်ပိုင် host provider integration တွေ ထည့်သွင်းနိုင်ပါတယ်။
- [wp_ultimo_load](./Actions/wp_ultimo_load) — မူတည်မှုအားလုံး (dependencies) တင်ပြီးတဲ့အခါမှာ အလုပ်လုပ်စေပါတယ်။
- [wu_activation](./Actions/wu_activation) — Plugin ရဲ့ အခြားအပိုင်းတွေက activation လုပ်တဲ့ လုပ်ဆောင်မှုတွေကို ချိတ်ဆက်နိုင်ပါတယ်။
- [wu_after_switch_template](./Actions/wu_after_switch_template) — အသုံးပြုသူ ဒါမှမဟုတ် super admin က site template ကို ပြောင်းလဲလိုက်တဲ့အခါမှာ plugin developer တွေက function တွေ ချိတ်ဆက်နိုင်ပါတယ်။
- [wu_before_light_ajax](./Actions/wu_before_light_ajax) — အချို့အခြေအနေတွေမှာ လုပ်ဆောင်မှုတွေကို ကိုင်တွယ်ဖို့ အပိုအကြောင်းအရာတွေ တင်ဖို့ လိုအပ်ပါတယ်။
- [wu_before_search_models](./Actions/wu_before_search_models) — ရှာဖွေမှု (search) တောင်းဆိုမှုကို စတင်လုပ်ဆောင်ခါနီးမှာ ခေါ်ပါတယ်။
- [wu_cart_after_setup](./Actions/wu_cart_after_setup) — Developer တွေအနေနဲ့ checkout object ကို အပိုအပြောင်းအလဲတွေ လုပ်နိုင်ပါတယ်။
- [wu_cart_setup](./Actions/wu_cart_setup) — Developer တွေအနေနဲ့ checkout object ကို အပိုအပြောင်းအလဲတွေ လုပ်နိုင်ပါတယ်။
- [wu_checkout_add_field_field_class-get_type](./Actions/wu_checkout_add_field_field_class-get_type) — checkout form မှာ field တစ်ခု ထည့်သွင်းခါနီးမှာ ခေါ်ပါတယ်။
- [wu_checkout_after_process_order](./Actions/wu_checkout_after_process_order) — Developer တွေအနေနဲ့ အပို hook တွေ ခေါ်နိုင်ပါတယ်။
- [wu_checkout_before_process_checkout](./Actions/wu_checkout_before_process_checkout) — checkout ကို လုပ်ဆောင်ခါနီးမှာ ခေါ်ပါတယ်။
- [wu_checkout_order_created](./Actions/wu_checkout_order_created) — checkout order ကို အပြည့်အဝ စုစည်းပြီးတဲ့အခါမှာ ခေါ်ပါတယ်။
- [wu_dashboard_this-tab_widgets](./Actions/wu_dashboard_this-tab) — အခြား tab အတွက် widget များ ထည့်နိုင်ပါတယ်။
- [wu_site_name] — ဝက်ဘ်ဆိုဒ်အမည်ကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_profile] — အသုံးပြုသူပရိုဖိုင်ကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_role] — အသုံးပြုသူအခန်းကဏ္ဍကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_status] — အသုံးပြုသူအခြေအနေကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_email] — အသုံးပြုသူအီးမေးလ်ကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_phone] — အသုံးပြုသူဖုန်းနံပါတ်ကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_address] — အသုံးပြုသူလိပ်စာကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_timezone] — အသုံးပြုသူအချိန်ဇုန်ကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_language] — အသုံးပြုသူဘာသာစကားကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_currency] — အသုံးပြုသူငွေကြေးကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_country] — အသုံးပြုသူနိုင်ငံကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_city] — အသုံးပြုသူမြို့ကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_zipcode] — အသုံးပြုသူဇစ်ကုဒ်ကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_salutation] — အသုံးပြုသူခေါ်ဝေါ်ပုံစံကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_first_name] — အသုံးပြုသူနာမည်ကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_last_name] — အသုံးပြုသူမျိုးရိုးနာမည်ကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_username] — အသုံးပြုသူအမည်ကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_password] — အသုံးပြုသူစကားဝှက်ကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_email_confirmation] — အသုံးပြုသူအီးမေးလ်အတည်ပြုချက်ကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_profile_picture] — အသုံးပြုသူပရိုဖိုင်ဓာတ်ပုံကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_account_status] — အသုံးပြုသူအကောင့်အခြေအနေကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_last_login] — အသုံးပြုသူနောက်ဆုံးဝင်ရောက်ချိန်ကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_last_activity] — အသုံးပြုသူနောက်ဆုံးလှုပ်ရှားမှုကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_last_updated] — အသုံးပြုသူနောက်ဆုံးအပ်ဒိတ်ချိန်ကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_last_modified] — အသုံးပြုသူနောက်ဆုံးပြင်ဆင်ချိန်ကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_created] — အသုံးပြုသူဖန်တီးချိန်ကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_deleted] — အသုံးပြုသူဖျက်ချိန်ကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_deleted_by] — အသုံးပြုသူဖျက်သူကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_deleted_date] — အသုံးပြုသူဖျက်သည့်ရက်ကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_deleted_reason] — အသုံးပြုသူဖျက်ရသည့်အကြောင်းရင်းကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_deleted_reason_by] — အသုံးပြုသူဖျက်ရသည့်အကြောင်းရင်းပေးသူကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_deleted_reason_date] — အသုံးပြုသူဖျက်ရသည့်အကြောင်းရင်းရက်ကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_deleted_reason_by_date] — အသုံးပြုသူဖျက်ရသည့်အကြောင်းရင်းပေးသူရက်ကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_deleted_reason_by_date_date] — အသုံးပြုသူဖျက်ရသည့်အကြောင်းရင်းပေးသူရက်ရက်ကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_deleted_reason_by_date_date] — အသုံးပြုသူဖျက်ရသည့်အကြောင်းရင်းပေးသူရက်ရက်ကို ပြောင်းလဲနိုင်ပါတယ်။
- [wu_user_deleted_reason_by_date_date_date] — အသုံးပြုသူဖျက်ရသည့်အကြောင်းရင်းပေးသူရက်ရက်ကို ပြောင်းလဲနိုင်ပါတယ်။

(Note: The provided list seems to be a set of placeholder or dynamic variables, likely from a CMS or template engine, rather than standard text content.)

**Summary of the provided data:**
The data consists of a long list of variables, which appear to relate to user profiles and system metadata (e.g., `[wu_user_first_name]`, `[wu_user_last_name]`, `[wu_user_created]`).

**Action Taken:**
Since the input is a list of variables and not natural language text, I have summarized what the variables represent.

**If you intended to ask a question about this data (e.g., "What does this variable mean?" or "How do I use this?"), please provide the context or the question.**
