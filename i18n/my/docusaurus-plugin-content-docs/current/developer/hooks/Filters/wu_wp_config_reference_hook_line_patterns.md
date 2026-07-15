---
id: wu_wp_config_reference_hook_line_patterns
title: စစ်ထုတ်ခြင်း - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns

ကျွန်တော်တို့ရဲ့ constants တွေကို ဘယ်နေရာမှာ ထည့်သွင်းရမလဲဆိုတာ သိဖို့အတွက် ပုံစံ (patterns) ၃ မျိုးကို စစ်ဆေးပါတယ်။

၁။ `$table_prefix` variable ကို ဘယ်လိုသတ်မှတ်ထားလဲဆိုတာကို ရှာဖွေပါတယ်။ ၂။ ပိုမိုရှုပ်ထွေးတဲ့ `$table_prefix` တွေကို ရှာဖွေပါတယ်—ဥပမာ၊ env variables တွေကို အသုံးပြုထားတဲ့ ပုံစံမျိုးတွေပေါ့။ ၃။ အဲဒါ မရရှိဘူးဆိုရင် 'Happy Publishing' comment ကို ရှာဖွေပါတယ်။ ၄။ ဒါလည်း မရရှိဘူးဆိုရင်တော့ file ရဲ့ အစကို ရှာဖွေပါတယ်။ ဒီနေရာမှာ key က ပုံစံ (pattern) ကို ကိုယ်စားပြုပြီး value က ထည့်ရမယ့် line အရေအတွက်ကို ကိုယ်စားပြုပါတယ်။ line အရေအတွက်ကို အနုတ်လက္ခဏာနဲ့ ပေးမယ်ဆိုရင်၊ ရှာတွေ့တဲ့ line နောက်မှာ ထည့်မယ့်အစား အဲဒီ line မတိုင်ခင်မှာ ရေးသားဖို့ ဖြစ်ပါတယ်။

### Source {#source}

[`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) ရဲ့ ၁၄၃ လိုင်းမှာ သတ်မှတ်ထားပါတယ်။
