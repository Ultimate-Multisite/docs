---
title: အများသုံးစနစ် ခွဲခြားမှု
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Multi-Tenancy Isolation

Ultimate Multisite: Multi-Tenancy 1.2.0 သည် အချုပ်အခြာရရှိသော (sovereign) ဝန်ဆောင်မှုပေးသူများအတွက် per-subsite database နှင့် filesystem isolation ကို ပံ့ပိုးပေးပါသည်။ ၎င်းသည် ဝန်ဆောင်မှုပေးသူ၏ ဒေတာများကို ခွဲခြားထားသော်လည်း ကွန်ရက်အဆင့် စီမံခန့်ခွဲမှု၊ ဘေလ်တင်ခြင်းနှင့် စီမံခန့်ခွဲမှုကို ထိန်းသိမ်းထားနိုင်ပါသည်။

## Isolation strategy (ခွဲခြားရေး မဟာဗျူဟာ) {#isolation-strategy}

ဒေတာကို ပိုမိုခိုင်မာစွာ ခွဲခြားရန် လိုအပ်သော သို့မဟုတ် သီးသန့် filesystem storage၊ သို့မဟုတ် သီးခြား host boundary တစ်ခု လိုအပ်သော ဖောက်သည်များအတွက် sovereign isolation ကို အသုံးပြုပါ။

အချုပ်အခြာရရှိသော ဝန်ဆောင်မှုပေးသူတစ်ဦးစီတွင် ရှိသင့်သည်မှာ-

- Host အတွက် အတည်ပြုထားသော သီးသန့် tenant database သို့မဟုတ် database prefix မဟာဗျူဟာ။
- သီးသန့် tenant filesystem root တစ်ခု။
- ဝဘ်ဆိုက်ကို ၎င်း၏ database၊ root path၊ hostname နှင့် isolation model တို့နှင့် ချိတ်ဆက်ပေးသည့် tenant registry entry တစ်ခု။
- ဝန်ဆောင်မှုပေးသူကို အသက်ဝင်စေရန် မဆုံးဖြတ်မီ migration verification ရလဒ်တစ်ခု။

## Database host binding (Database Host ချိတ်ဆက်မှု) {#database-host-binding}

Version 1.2.0 သည် sovereign installs များအတွက် default same-machine host binding လုပ်ဆောင်ပုံကို ပြောင်းလဲထားပါသည်။ `localhost` ကဲ့သို့သော same-machine တန်ဖိုးများကို Bedrock၊ FrankenPHP နှင့် containerized WordPress install များက MySQL က အမှန်တကယ် မြင်ရသည့် host string နှင့် ခွင့်ပြုချက်များ ပေးအပ်ပြီး စစ်ဆေးနိုင်ရန် normalize လုပ်ထားပါသည်။

sovereign tenant တစ်ခုကို configure လုပ်သည့်အခါ:

1. database host ကို tenant runtime မှ လိုအပ်သော တန်ဖိုးဖြင့် သတ်မှတ်ပါ။
2. host က local connections များကို မျှော်လင့်ပါက local socket installs များအတွက် `localhost` ကို အသုံးပြုပါ။
3. database server က ထို host အတွက် ခွင့်ပြုချက်များ ပေးအပ်သည့်အခါမှသာ `127.0.0.1` သို့မဟုတ် service hostname ကို အသုံးပြုပါ။
4. host binding ပြောင်းလဲပြီးနောက် migration verification ကို run ပါ။

verification မှ grant failures များရှိပါက tenant DB user တွေရဲ့ grant လုပ်ထားတာတွေကို configure လုပ်ထားတဲ့ host binding နဲ့ နှိုင်းယှဉ်ကြည့်ပါ။ `user@localhost` အတွက် ပေးထားတဲ့ user ဟာ `user@127.0.0.1` သို့မဟုတ် `user@%` နဲ့ မတူပါဘူး။

## Filesystem root (Filesystem Root) {#filesystem-root}

ငှားရမ်းသူ၏ root directory သည် ပြန်လည်စတင်ခြင်းနှင့် ပုံမှန်ချဲ့ထွင်မှုများတွင် တည်ငြိမ်နေရမည်။ ခေတ္တ mount path များကို ရှောင်ရှားပါ။ Bedrock-ပုံစံ ထည့်သွင်းမှုများအတွက်၊ tenant root သည် project root ကိုသာမက tenant bootstrap မှ မျှော်လင့်ထားသော WordPress web root သို့လည်း ရည်ညွှန်းကြောင်း အတည်ပြုပါ။

## စီစဉ်ပေးသည့် အစီအစဉ် (Provisioning order) {#provisioning-order}

စိုးရိမ်ရသော tenants များအတွက် အောက်ပါအတိုင်း အသုံးပြုပါ-

၁။ tenant registry entry ကို ဖန်တီးပါ။
၂။ tenant database နှင့် database user ကို ဖန်တီးပါ။
၃။ tenant schema ကို bootstrap လုပ်ပါ။
၄။ tenant users များကို စီစဉ်ပေးပါ။
၅။ tenant filesystem path များကို စီစဉ်ပေးပါ။
၆။ migration verification ကို run ပါ။
၇။ verification အောင်မြင်ပြီးနောက် routing သို့မဟုတ် DNS ကို ပြောင်းလဲပါ။

ဤအစီအစဉ်သည် database writer၊ users နှင့် filesystem များ အဆင်သင့်ဖြစ်မီ တစ်စိတ်တစ်ပိုင်း ခွဲခြားထားသော tenants များအား traffic မရောက်ရှိစေရန် ကာကွယ်ပေးပါသည်။

## Sovereign customer management flows (စိုးရိမ်ရသော ဖောက်သည် စီမံခန့်ခွဲမှု လမ်းကြောင်းများ) {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 တွင် sovereign mode ကို ဖွင့်ထားသည့်အခါ ဖောက်သည် စီမံခန့်ခွဲမှု လုပ်ဆောင်ချက်များကို main site ပေါ်တွင် ရှိနေစေပါသည်။ tenant တစ်ခုသည် သီးခြား WordPress install အဖြစ် ဆက်လက်လည်ပတ်နိုင်သော်လည်း network billing၊ membership သို့မဟုတ် shared account data တို့နှင့် မူတည်သော customer-facing လုပ်ဆောင်ချက်များသည် tenant runtime အတွင်း ပြီးမြောက်အောင် ကြိုးစားမည့်အစား ဖောက်သည်ကို main site သို့ ပြန်ပို့သင့်ပါသည်။

main-site flow သည် အောက်ပါအရာများအတွက် သက်ဆိုင်သည်-

- Checkout နှင့် plan ပြောင်းလဲမှုများ။
- Account overview နှင့် customer profile လုပ်ဆောင်ချက်များ။
- Billing address update များနှင့် payment-management စခရင်များ။
- Invoice နှင့် payment-history ကြည့်ရှုမှုများ။
- site များ ထည့်သွင်းခြင်း သို့မဟုတ် ဖျက်ခြင်းကဲ့သို့သော site management လုပ်ဆောင်ချက်များ။
- Template ပြောင်းလဲခြင်း။
- Domain mapping နှင့် primary-domain ပြောင်းလဲမှုများ။

ဖောက်သည်တစ်ဦးက အဆိုပါ လုပ်ဆောင်ချက်တစ်ခုခုကို မိမိတို့ရဲ့ sovereign tenant ကနေ စတင်တဲ့အခါ Ultimate Multisite ဟာ သက်ဆိုင်ရာ main-site URL ကို တည်ဆောက်ပေးပြီး လုံခြုံတယ်လို့ ယူဆနိုင်ရင် source tenant ကို ပြန်သွားဖို့ return target အဖြစ် သိမ်းထားပေးပါတယ်။ ဒါက ဖောက်သည်တွေအနေနဲ့ network မှတ်တမ်းတွေအပေါ် စီမံခန့်ခွဲမှုလုပ်ငန်းစဉ်ကို အဆုံးသတ်ပြီး၊ sovereign database ထဲမှာ ငွေတောင်းခံမှု (billing) ဒါမှမဟုတ် အဖွဲ့ဝင်အခြေအနေ (membership state) ကို နှစ်ခါ မထပ်မိအောင် tenant context ကို ပြန်သွားနိုင်စေပါတယ်။

Operator တွေအတွက် လက်တွေ့ကျတဲ့ စည်းမျဉ်းကတော့- sovereign network တွေအတွက် billing၊ account၊ checkout၊ invoice၊ template နဲ့ domain-management စာမျက်နှာတွေကို main site ပေါ်မှာ အမြဲရှိနေဖို့ ဖြစ်ပါတယ်။ Tenant dashboard တွေက အဆိုပါ စာမျက်နှာတွေဆီကို လင့်ခ်ပေးနိုင်ပေမယ့်၊ လုပ်ဆောင်ချက်ရဲ့ အရင်းအမြစ် (source of truth) ကတော့ main site ပဲ ရှိနေမှာ ဖြစ်ပါတယ်။
