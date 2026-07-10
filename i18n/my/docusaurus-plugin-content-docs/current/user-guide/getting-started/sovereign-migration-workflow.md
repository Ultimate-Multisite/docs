---
title: အချုပ်အခြာအာဏာဆိုင်ရာ ရွှေ့ပြောင်းမှု လုပ်ငန်းစဉ်
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# အချုပ်အခြာဆိုင်ရာ ပြောင်းရွှေ့မှု လုပ်ငန်းစဉ် {#sovereign-migration-workflow}

Ultimate Multisite: Multi-Tenancy 1.2.0 သည် စံ subsite တစ်ခုကို sovereign tenant infrastructure ထဲသို့ ရွှေ့ပြောင်းရာတွင် migration verification gates (စစ်ဆေးရေး တံခါးများ) ကို ထည့်သွင်းပေးထားပါသည်။

## စတင်မလုပ်မီ {#before-you-start}

သင်သည် အောက်ပါအချက်များ ရှိကြောင်း အတည်ပြုပါ။

- မူရင်း site ၏ လက်ရှိ backup တစ်ခု။
- Multi-Tenancy addon သည် အသက်ဝင်နေခြင်း။
- ဦးတည်ရာ tenant database၊ filesystem root နှင့် domain များ အဆင်သင့်ဖြစ်နေခြင်း။
- ဦးတည်ရာ environment နှင့် ကိုက်ညီသော database host binding ရှိခြင်း။
- network အတွက် WP-CLI commands များကို အသုံးပြုနိုင်ခြင်း။

## အကြံပြုထားသော လုပ်ငန်းစဉ် {#recommended-workflow}

၁။ ဦးတည်ရာ tenant database နှင့် filesystem ကို ပြင်ဆင်ပါ။
၂။ tenant isolation settings များကို မှတ်ပုံတင်ပါ သို့မဟုတ် အပ်ဒိတ်လုပ်ပါ။
၃။ tenant migration ကို run ပါ။
၄။ tenant users များကို provision လုပ်ပါ သို့မဟုတ် စစ်ဆေးအတည်ပြုပါ။
၅။ async migration jobs များကို drain လုပ်ပါ။
၆။ sovereign migration verification ကို run ပါ။
၇။ SSO ဖြင့် tenant ကို ဝင်ရောက်ကြည့်ရှုပါ။
၈။ verification အောင်မြင်ပြီးမှ DNS သို့မဟုတ် routing ကို ပြောင်းလဲပါ။

## Verification gates (စစ်ဆေးရေး တံခါးများ) {#verification-gates}

verification workflow သည် migration ကို ရှုထောင့်အမျိုးမျိုးက စစ်ဆေးပါသည်။

- tenant schema သည် ရှိနေပြီး tenant database writer မှ ရေးသားနိုင်ခြင်း။
- configuration လုပ်ထားသော database host တွင် valid grants များ ရှိခြင်း။
- tenant users များ ရှိနေပြီး မျှော်လင့်ထားသော sovereign install user အရေအတွက်နှင့် ကိုက်ညီခြင်း။
- async push queue ကို အောင်မြင်စွာ drain လုပ်နိုင်ခြင်း။
- legacy network-side data paths များသည် sovereign tenant အတွက် မလိုအပ်တော့ခြင်း။

verification ရှုံးနိမ့်မှုများကို စတင်မစမီ တားဆီးသည့် အချက်များအဖြစ် သတ်မှတ်ပါ။ database၊ user၊ queue သို့မဟုတ် routing ပြဿနာကို ပြင်ပြီးမှ customer များကို tenant နှင့် ထုတ်ပြခြင်း မပြုမီ verification ကို ပြန် run ပါ။

## ပထမဆုံး production ဝင်ရောက်ကြည့်ရှုမှု {#first-production-visit}

verification အောင်မြင်ပြီးနောက်၊ site management screen မှ **Visit (SSO)** ကို အသုံးပြု၍ admin တစ်ဦးဦးအတွက် ပထမဆုံး ဝင်ရောက်ကြည့်ရှုမှုကို ပြုလုပ်ပါ။ ၎င်းသည် tenant routing၊ SSO token ကို ကိုင်တွယ်ပုံ၊ origin pinning နှင့် tenant-side user provisioning တို့ကို ထိန်းချုပ်ထားသော တစ်ခုတည်းသော အဆင့်ဖြင့် အတည်ပြုပေးပါသည်။
