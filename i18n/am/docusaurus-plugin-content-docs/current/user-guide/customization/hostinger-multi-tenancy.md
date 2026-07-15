---
title: የሆስቲንግር ማልቲ-ቴነንሲ
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 မှာ Hostinger multi-tenancy စွမ်းဆောင်ရည်အသစ်တစ်ခု ထည့်သွင်းပေးထားပါတယ်။ ဒါက ရှိပြီးသား Hostinger domain-mapping integration နဲ့အတူ သီးခြားလွတ်လပ်တဲ့ tenant တွေအတွက် လိုအပ်တဲ့ provisioning လုပ်ငန်းစဉ်တွေကို ပါဝင်လာစေပါတယ်။

Tenant domain တွေနဲ့ သီးခြားစီရှိတဲ့ infrastructure တွေကို Hostinger hPanel ကနေ စီမံခန့်ခွဲတဲ့အခါ ဒီစွမ်းဆောင်ရည်ကို အသုံးပြုနိုင်ပါတယ်။

## Setup notes {#setup-notes}

၁။ **Ultimate Multisite > Settings > Host Integrations** ထဲမှာ core Hostinger integration ကို configure လုပ်ပါ။
၂။ Hostinger API token က ပစ်မှတ်ထားတဲ့ domain ဒါမှမဟုတ် subdomain ကို စီမံခန့်ခွဲနိုင်တယ်ဆိုတာ အတည်ပြုပါ။
၃။ Multi-Tenancy addon ကို ဖွင့်ပေးပါ။
၄။ tenant ကို publish မလုပ်ခင်မှာ tenant isolation strategy ကို configure လုပ်ပါ။
၅။ production traffic ကို tenant ဆီ ပို့လိုက်တဲ့အခါ migration verification workflow ကို run လုပ်ပါ။

Hostinger စွမ်းဆောင်ရည်က host-side operations တွေအတွက် shared Hostinger connection ကို အသုံးပြုပါတယ်။ DNS က လိုအပ်တဲ့ Hostinger account ကိုပဲ ထောက်ပြထားဖို့နဲ့ hPanel account limit တွေကတော့ ရှိနေဆဲပါပဲ။

## Capability-specific changes {#capability-specific-changes}

- Sovereign tenants တွေကို host-aware domain operations တွေနဲ့ ဖန်တီးနိုင်ပါတယ်။
- grant verification မလုပ်ခင်မှာ database host strings တွေကို normalize လုပ်ပေးပါတယ်။
- Hostinger က စီမံခန့်ခွဲတဲ့ tenants တွေက WordPress runtime က local override လိုအပ်မှသာ hPanel မှာ ပြထားတဲ့ database host value ကို အသုံးပြုသင့်ပါတယ်။
- SSO visits တွေဟာ tenant domain က Hostinger မှာ ရှိနေတဲ့ tenant ဆီကို resolution လုပ်တာပေါ်မှာ မူတည်ပါတယ်။

## Troubleshooting Hostinger tenants {#troubleshooting-hostinger-tenants}

- Tenant install မအောင်မြင်ရင်၊ domain ဟာ Hostinger account နဲ့ တက်ပြီးသားလားဆိုတာ စစ်ဆေးပါ။
- database verification မအောင်မြင်ရင်၊ tenant ရဲ့ DB username၊ database name နဲ့ host binding တွေကို hPanel နဲ့ နှိုင်းယှဉ်ကြည့်ပါ။
- **Visit (SSO)** မအောင်မြင်ရင်၊ tenant domain အတွက် DNS နဲ့ SSL က အသက်ဝင်မှု ရှိမရှိ အတည်ပြုပါ။
- teardown လုပ်တဲ့အခါ host resources တွေ ကျန်ခဲ့ရင်၊ backup တွေ အတည်ပြုပြီး hPanel ထဲက database တွေ၊ users တွေနဲ့ folders တွေကို ဖယ်ရှားလိုက်ပါ။
