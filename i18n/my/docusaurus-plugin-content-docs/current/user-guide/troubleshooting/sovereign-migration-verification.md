---
title: အချုပ်အခြာအာဏာဆိုင်ရာ ပြောင်းရွှေ့မှု အတည်ပြုခြင်း
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Sovereign Migration စစ်ဆေးခြင်း

Ultimate Multisite: Multi-Tenancy 1.2.0 မှာ sovereign tenant များအတွက် WP-CLI verification commands ပါဝင်ပါတယ်။ Tenant ပြောင်းရွှေ့တာ၊ SSO နဲ့ ဝင်ကြည့်တာ ဒါမှမဟုတ် သီးခြား install လုပ်တဲ့အခါတွေမှာ အရင်ကလို မလုပ်ဆောင်နိုင်တော့ဘူးဆိုရင် ဒီ command တွေကို အသုံးပြုနိုင်ပါတယ်။

## အသုံးပြုရမည့် Command များ

network WordPress install ကနေ verification ကို run ပါ။

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

သင်ပြောင်းရွှေ့နေတဲ့ tenant ရဲ့ site ID ကို အသုံးပြုပါ။ ပထမ command က tenant ဟာ network ဘက်က data တွေအပေါ် မမှီခိုတော့ဘူးဆိုတာ စစ်ဆေးပေးပါတယ်။ ဒုတိယ command က sovereign push jobs တွေကို process လုပ်ပြီး drain လုပ်နိုင်ခြင်း ရှိ၊ မရှိ စစ်ဆေးပေးပါတယ်။

## အဖြစ်များသော အမှားများ

### Database grants များ မတူညီခြင်း

verification က grant ဒါမှမဟုတ် writer-user မှာ အမှားတွေ ပြသရင် သင့်မှာ configure လုပ်ထားတဲ့ database host ကို စစ်ဆေးပါ။ `localhost`, `127.0.0.1` နဲ့ container service name တွေဟာ MySQL grant hosts ဟာ မတူကြပါဘူး။ tenant host binding ဒါမှမဟုတ် database grants တွေကို update လုပ်ပြီး verification ကို ပြန် run ပါ။

### Bedrock သို့မဟုတ် local installs များ ချိတ်ဆက်၍ မရခြင်း

Bedrock နဲ့ local socket install တွေက database ကို `localhost` အဖြစ် ပြသနိုင်ပေမယ့် runtime က normalized address (ပုံမှန်လိပ်စာ) ကနေတစ်ဆင့် ချိတ်ဆက်နေတတ်ပါတယ်။ Version 1.2.0 မှာ တစ်စုံတည်းရှိတဲ့ machine ရဲ့ host string တွေကို normalize လုပ်ပေးပေမယ့် custom host override တွေက database grants နဲ့ ဆန့်ကျင်မှု ရှိနိုင်သေးပါတယ်။

### Async push queue သည် drain မလုပ်ခြင်း

`verify-sovereign-push` က မပြီးဆုံးရင် Action Scheduler ဒါမှမဟုတ် configure လုပ်ထားတဲ့ async runner ကို စစ်ဆေးပါ။ ပြန်စမ်းလို့ရမလား၊ ပယ်ချလို့ရမလားဆိုတာ အတည်ပြုပြီးမှ failed jobs တွေကို ဖျက်ပစ်ပါ။

### Tenant user count မှားနေခြင်း

migration လုပ်တဲ့အခါ sovereign tenant အတွက် users တွေ ထည့်ပေးဖို့ ရှိပါတယ်။ မျှော်လင့်ထားတဲ့ install user မရှိရင် SSO ကို ပြန်စမ်းမယ့်အစား user provisioning အဆင့်ကို ပြန် run ပါ။

### SSO visit ကို ငြင်းပယ်ခံရခြင်း

စက်လက်မဲ့ အသုံးပြုသူများအတွက် အလိုအလျောက် ဝင်ရောက်ခြင်း (Stateless tenant autologin) သည် သင့်ရဲ့ domain၊ origin pin၊ token purpose၊ nonce နဲ့ expiry တို့ တူညီဖို့ လိုအပ်ပါတယ်။ Tenant URL မှန်ကြောင်း အတည်ပြုပြီး SSO visit ကို ထုတ်ပေးပြီး မကြာမီ ဝင်ရောက်မှု ပြုလုပ်ပါ။

## ပြန်လည်ကြိုးစားရမည့်အချိန်

Infrastructure တစ်ခုခု ပြောင်းလဲတိုင်း စစ်ဆေးမှုကို ပြန်လည်စစ်ဆေးပါ။ အားလုံးသော စစ်ဆေးမှုတွေ အောင်မြင်တဲ့အထိ production traffic ကို ပြောင်းတာ၊ source data တွေကို ဖျက်တာ ဒါမှမဟုတ် migration credentials တွေကို ဖယ်ရှားတာမျိုး မလုပ်ပါနဲ့။
