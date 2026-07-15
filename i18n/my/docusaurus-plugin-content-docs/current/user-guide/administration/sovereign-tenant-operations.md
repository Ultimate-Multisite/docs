---
title: အချုပ်အခြာအာဏာရှိ အငှားနေထိုင်သူ လုပ်ငန်းဆောင်ရွက်မှုများ
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Sovereign Tenant Operations

Ultimate Multisite: Multi-Tenancy 1.2.0 မှာ စူဗာရင် (sovereign) သီးသန့် အသုံးပြုသူတွေအတွက် လုပ်ငန်းလည်ပတ်မှုဆိုင်ရာ ကိရိယာတွေကို ထပ်ထည့်ပေးထားပါတယ် - ဒါဟာ သူတို့ကိုယ်ပိုင် database၊ filesystem root နဲ့ routing context တွေနဲ့ လည်ပတ်နေတဲ့ subsites တွေ ဖြစ်ပြီး network admin ဆီကနေ မြင်နိုင်စွမ်း ရှိနေမှာပါ။

ပုံမှန် subsite တစ်ခုကို sovereign infrastructure ကို ပြောင်းရွှေ့တာမျိုး၊ သီးခြားဖောက်သည် সাইတတွေကို စီမံခန့်ခွဲတာ ဒါမှမဟုတ် remote-site လွှဲပြောင်းမှုတွေ လုပ်တဲ့အခါ ဒီစာမျက်နှာကို အသုံးပြုသင့်ပါတယ်။

## admin တွေအတွက် ဘာတွေ ပြောင်းလဲသွားသလဲ {#what-changes-for-administrators}

- **Stateless tenant autologin** — Network admin တွေဟာ ရေရှည်တည်မြဲတဲ့ shared session state ကို မအားကိုးဘဲ sovereign tenant တစ်ခုကို လာရောက်ကြည့်ရှုနိုင်ပါပြီ။ SSO token ဟာ ရည်ရွယ်ချက် သတ်မှတ်ထားတာ၊ အရင်းအမြစ် (origin) နဲ့ ချိတ်ဆက်ထားတာ၊ ပြန်လည်သုံးစွဲမှုကို ကာကွယ်ထားတာနဲ့ မကြာခဏ ပျောက်သွားမယ့် အချိန်ကာလတစ်ခုပဲ ရှိပါတယ်။
- **Sovereign-aware routing** — ယခင်က သီးခြား network တွေနဲ့ sovereign tenants တွေဟာ site router path တစ်ခုတည်းကို အသုံးပြုပြီး၊ စနစ်အသစ်နဲ့ စတင်တဲ့အခါ ဖြစ်ပေါ်တတ်တဲ့ ကွာခြားချက်တွေကို လျော့ချပေးပါလိမ့်မယ်။
- **Verified migration state** — Tenant တစ်ခုကို အပြီးသတ်လို့ သတ်မှတ်ဖို့ မတိုင်ခင်မှာ Migration verification ဟာ user provisioning၊ database writer ခွင့်ပြုချက်တွေ၊ queue drain အခြေအနေနဲ့ legacy table မရှိတော့တာတွေကို စစ်ဆေးပေးပါတယ်။
- **Safer teardown** — Sovereign ကို ဖျက်သိမ်းတဲ့အခါ tenant credentials တွေကို သန့်ရှင်းစွာ ဖယ်ရှားပေးမှာဖြစ်လို့ ဖျက်လိုက်တဲ့ tenant တွေက database access ပိတ်မိနေတာမျိုး မဖြစ်တော့ပါဘူး။

## sovereign tenant တစ်ခုကို လာရောက်ကြည့်ရှုခြင်း {#visiting-a-sovereign-tenant}

၁။ **Network Admin > Ultimate Multisite > Sites** ကို ဖွင့်ပါ။
၂။ sovereign tenant ကို ရွေးချယ်ပါ။
၃။ စကားဝှက်တွေ ကူးယူတာ ဒါမှမဟုတ် ခေတ္တ admin အကောင့်တွေ ဖန်တီးတာမျိုး မလုပ်ဘဲ၊ ရနိုင်ရင် **Visit (SSO)** ကို အသုံးပြုပါ။

visit လုပ်တဲ့အခါမှာ အဆိုပါ tenant အတွက် ခဏတာ login token တစ်ခုကို ဖန်တီးပေးပြီး SSO ဖြစ်ရပ်ကို tenant audit trail ထဲမှာ မှတ်တမ်းတင်ထားပါတယ်။ ခလုတ်က မအောင်မြင်ဘူးဆိုရင်၊ tenant domain ဟာ မျှော်လင့်ထားတဲ့ install နဲ့ ကိုက်ညီမှု ရှိမရှိနဲ့ tenant က network-side SSO endpoint ကို ရောက်နိုင်ခြင်း ရှိ/မရှိ စစ်ဆေးကြည့်ပါ။

## remote-site operations checklist {#remote-site-operations-checklist}

sovereign ဒါမှမဟုတ် remote tenant တစ်ခုကို ပြောင်းလဲဖို့ မလုပ်ခင် အောက်ပါအချက်တွေကို အတည်ပြုပေးပါ-

## အချုပ်အခြာဆိုင်ရာ သီးခြားလွတ်လပ်သော Tenant များကို ဖျက်ခြင်း {#deleting-sovereign-tenants}

သီးခြားလွတ်လပ်သော (sovereign) tenant တစ်ခုကို ဖျက်လိုက်တာဟာ ပြန်မရနိုင်တဲ့ လုပ်ဆောင်ချက် ဖြစ်ပါတယ်။ ဘေးကင်းဖို့အတွက် Backup နဲ့ Export အခြေအနေကို အရင်ဆုံး စစ်ဆေးပြီးမှ site management screen ကနေ ဖျက်သင့်ပါတယ်။ 1.2.0 teardown flow ဟာ cleanup လုပ်တဲ့အပိုင်းအနေနဲ့ tenant database credentials တွေကို ဖယ်ရှားပေးပေမယ့်၊ external hosting panels တွေ သုံးတဲ့အခါမှာ host-level database users နဲ့ folders တွေ မပျောက်သွားသေးဘူးလားဆိုတာ admin တွေက စစ်ဆေးဖို့တော့ လိုအပ်ပါတယ်။

:::warning
migration verification လုပ်နေတုန်း ဒါမှမဟုတ် async push jobs တွေ စောင့်နေတုန်းမှာ sovereign tenant ကို ဖျက်မပစ်ပါနဲ့။ verification ပြီးဆုံးတဲ့အထိ စောင့်ပါ။ အဲဒီလိုမှ နောက်ပိုင်း job တွေအတွက် လိုအပ်တဲ့ credentials တွေကို teardown က မဖယ်ရှားမိအောင် လုပ်နိုင်မှာ ဖြစ်ပါတယ်။
:::
