---
title: Hostinger Multi-Tenancy
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 ထည့်သွင်းမှုမှာ Hostinger multi-tenancy စွမ်းရည်အသစ်တစ်ခုကို ထည့်ပေးလိုက်တာ ဖြစ်ပါတယ်။ ဒါဆိုရင် သင့်ရဲ့ domain တွေဟာ ရှိပြီးသား Hostinger domain-mapping integration နဲ့အတူ sovereign tenant provisioning (ကိုယ်ပိုင်လွတ်လပ်တဲ့ အခန်းခွဲမှု) လုပ်ဆောင်နိုင်လာပါပြီ။

Hostinger hPanel ကနေ tenant domain တွေနဲ့ သီးခြားစီ ခွဲထားတဲ့ infrastructure တွေကို စီမံခန့်ခွဲတဲ့အခါ ဒီစွမ်းရည်ကို အသုံးပြုနိုင်ပါတယ်။

## Setup notes (ဆက်တင်ပြင်ဆင်ရန် မှတ်ချက်များ) {#setup-notes}

၁။ **Ultimate Multisite > Settings > Host Integrations** ထဲမှာ core Hostinger integration ကို သတ်မှတ်ပေးပါ။
၂။ Target domain ဒါမှမဟုတ် subdomain ကို manage လုပ်ဖို့အတွက် Hostinger API token က အလုပ်လုပ်နိုင်မလား စစ်ဆေးပါ။
၃။ Multi-Tenancy addon ကို ဖွင့်ပေးပါ။
၄။ Tenant ကို publish မလုပ်ခင် tenant isolation strategy (tenant တစ်ခုနဲ့တစ်ခု ခွဲခြားထားတဲ့ နည်းလမ်း) ကို သတ်မှတ်ပေးပါ။
၅။ Production traffic ကို tenant ဆီ ပို့လိုက်တဲ့အခါ migration verification workflow ကို run လုပ်ပြီး စစ်ဆေးပါ။

Hostinger capability ဟာ host-side operations တွေအတွက် shared Hostinger connection ကို အသုံးပြုပါတယ်။ DNS ကတော့ မှန်ကန်တဲ့ Hostinger account ကိုပဲ ထောက်ပြထားရမှာဖြစ်ပြီး hPanel account limit တွေကလည်း ရှိနေဆဲပါနော်။

## Capability-specific changes (စွမ်းရည်အလိုက် ပြောင်းလဲမှုများ) {#capability-specific-changes}

- Sovereign tenants တွေကို host နဲ့ သက်ဆိုင်တဲ့ domain operations တွေနဲ့ ဖန်တီးနိုင်ပါတယ်။
- Database host strings တွေကို grant verification မလုပ်ခင်မှာ normalize လုပ်ပေးပါတယ်။
- Hostinger က စီမံခန့်ခွဲတဲ့ tenants တွေက WordPress runtime က local override (ဒေသတွင်း အစားထိုးမှု) မလိုအပ်ရင် hPanel မှာ ပြထားတဲ့ database host value ကို သုံးသင့်ပါတယ်။
- SSO visits တွေဟာ tenant domain ဟာ Hostinger က hosting လုပ်ထားတဲ့ tenant ဆီကို resolve ဖြစ်မှသာ အလုပ်လုပ်မှာ ဖြစ်ပါတယ်။

## Troubleshooting Hostinger tenants (ပြဿနာဖြေရှင်းခြင်း) {#troubleshooting-hostinger-tenants}

- Tenant install မအောင်မြင်ရင်၊ domain ဟာ Hostinger account နဲ့ တကယ် ချိတ်ဆက်ပြီးပြီလား စစ်ဆေးပါ။
- Database verification မအောင်မြင်ရင်၊ tenant ရဲ့ DB username၊ database name နဲ့ host binding တွေကို hPanel နဲ့ နှိုင်းယှဉ်ကြည့်ပါ။
- **Visit (SSO)** မအောင်မြင်ရင်၊ tenant domain အတွက် DNS နဲ့ SSL က အလုပ်လုပ်နေရဲ့လား ပြန်စစ်ပါ။
- Teardown လုပ်ပြီးတဲ့အခါမှာ host resources တွေ ကျန်မနေပါစေနဲ့။ Backup တွေ စစ်ဆေးပြီး hPanel ထဲက database, users, ဒါမှမဟုတ် folders တွေကို ကျန်ရှိနေတာတွေ အကုန်ဖယ်ရှားလိုက်ပါ။
