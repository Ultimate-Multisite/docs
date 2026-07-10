---
title: Hostinger Multi-Tenancy
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy {#hostinger-multi-tenancy}

Ultimate Multisite: Multi-Tenancy 1.2.0 မှာ Hostinger multi-tenancy စွမ်းဆောင်ရည်အသစ်တစ်ခု ထည့်သွင်းပေးထားပါတယ်။ ဒါဆိုရင် ရှိပြီးသား Hostinger domain-mapping ပေါင်းစပ်မှုတွေနဲ့အတူ သီးခြား tenant တွေအတွက် လုံခြုံတဲ့ infrastructure တွေကိုလည်း provisioning လုပ်နိုင်မှာ ဖြစ်ပါတယ်။

tenant domain တွေနဲ့ သီးခြား tenant အခြေခံအဆောက်အအုံတွေကို Hostinger hPanel ကနေ စီမံခန့်ခွဲမယ်ဆိုရင် ဒီစွမ်းဆောင်ရည်ကို အသုံးပြုနိုင်ပါတယ်။

## Setup notes {#setup-notes}

၁။ **Ultimate Multisite > Settings > Host Integrations** ထဲမှာ core Hostinger integration ကို configure လုပ်ပါ။
၂။ Hostinger API token က target domain ဒါမှမဟုတ် subdomain ကို စီမံခန့်ခွဲနိုင်ကြောင်း အတည်ပြုပါ။
၃။ Multi-Tenancy addon ကို ဖွင့်ပေးပါ။
၄။ tenant ကို publish မလုပ်ခင် tenant isolation strategy ကို configure လုပ်ပါ။
၅။ production traffic ကို tenant ဆီ ပို့တဲ့အခါ migration verification workflow ကို run လုပ်ပါ။

Hostinger စွမ်းဆောင်ရည်က host-side operations တွေအတွက် shared Hostinger connection ကို အသုံးပြုပါတယ်။ DNS က လိုအပ်တဲ့ Hostinger account ကိုပဲ ထောက်ထားနေဖို့နဲ့ hPanel account limit တွေကတော့ ရှိနေဆဲပါပဲ။

## Capability-specific changes {#capability-specific-changes}

- Sovereign tenants တွေကို host-aware domain operations တွေနဲ့ ဖန်တီးနိုင်ပါတယ်။
- grant verification မလုပ်ခင်မှာ database host strings တွေကို normalize လုပ်ပေးပါတယ်။
- Hostinger က စီမံခန့်ခွဲတဲ့ tenant တွေက WordPress runtime က local override လိုအပ်မှသာ hPanel မှာ ပြထားတဲ့ database host value ကို အသုံးပြုသင့်ပါတယ်။
- SSO (Single Sign-On) သွားလာမှုတွေဟာ tenant domain က Hostinger မှာ ရှိနေတဲ့ tenant ဆီကို resolve ဖြစ်ဖို့ အားကိုးရပါတယ်။

## Troubleshooting Hostinger tenants {#troubleshooting-hostinger-tenants}

- tenant install မအောင်မြင်ရင် domain ဟာ Hostinger account နဲ့ တက်ပြီးသားလား စစ်ဆေးပါ။
- database verification မအောင်မြင်ရင် tenant ရဲ့ DB username၊ database name နဲ့ host binding တွေကို hPanel နဲ့ နှိုင်းယှဉ်ကြည့်ပါ။
- **Visit (SSO)** မအောင်မြင်ရင် tenant domain အတွက် DNS နဲ့ SSL ကို active ဖြစ်နေပြီလား အတည်ပြုပါ။
- teardown လုပ်တဲ့အခါ host resources တွေ ကျန်မသွားအောင် backup ယူပြီးနောက် hPanel က database, users ဒါမှမဟုတ် folders ကျန်ရှိနေတာတွေကို ဖယ်ရှားလိုက်ပါ။
