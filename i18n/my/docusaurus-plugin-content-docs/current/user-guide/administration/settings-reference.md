---
title: ဆက်တင်များ ကိုးကားချက်
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Settings ရည်ညွှန်းချက်

ဤစာမျက်နှာသည် Ultimate Multisite တွင် နေ့စဉ် စီမံခန့်ခွဲမှုနှင့် မကြာသေးမီ အပြုအမူပြောင်းလဲမှုများကို သက်ရောက်စေသော settings များကို မှတ်တမ်းတင်ထားသည်။

## အခြားရွေးချယ်စရာများ {#other-options}

**အခြားရွေးချယ်စရာများ** ဧရိယာသည် **Ultimate Multisite > Settings > Login & Registration** အောက်တွင် ပေါ်လာသည်။

| Setting | ဖော်ပြချက် |
|---|---|
| **Enable Jumper** | admin ဧရိယာတွင် Jumper အမြန်လမ်းညွှန်ကိရိယာကို ပြသည်။ ၎င်းကို အသုံးပြု၍ Ultimate Multisite မျက်နှာပြင်များ၊ network object များနှင့် ပံ့ပိုးထားသော admin သွားရန်နေရာများသို့ တိုက်ရိုက်သွားနိုင်သည်။ ဤ shortcut ကို မပြစေလိုပါက ပိတ်ထားပါ။ |

## Error reporting နှင့် telemetry {#error-reporting-and-telemetry}

ယခင် error-reporting opt-in setting ကို settings စာမျက်နှာမှ ဖယ်ရှားပြီးဖြစ်သည်။ အမည်မသိ telemetry ကို ပိတ်ထားပြီး ၎င်းကို ဖွင့်ရန် UI toggle မရှိပါ။

settings စာမျက်နှာအတွက် အတွင်းပိုင်း runbook များ သို့မဟုတ် screenshot များကို ထိန်းသိမ်းထားပါက၊ ယခင် error-reporting opt-in field ကို ရည်ညွှန်းထားချက်များကို ဖယ်ရှားပါ။ ထို့ကြောင့် administrator များသည် မရှိတော့သော setting ကို မရှာတော့ပါ။

## Import/Export settings {#importexport-settings}

**Import/Export** settings tab သည် မည်သည့် settings များကို ထိန်းချုပ်ကြောင်း ဖော်ပြပြီး site နှင့် network archive များအတွက် **Ultimate Multisite > Site Export** သို့ တိုက်ရိုက် link ချိတ်ထားသည်။ import/export ပြင်ဆင်မှုအတွက် settings tab ကို အသုံးပြုပါ၊ single-site export/import လုပ်ငန်းစဉ်အတွက် **Tools > Export & Import** ကို အသုံးပြုပါ၊ Network Export archive အပြည့်လိုအပ်သောအခါ Site Export ကိရိယာကို အသုံးပြုပါ။

## Domain Seller HostAfrica လက်ကျန် သတိပေးချက် {#domain-seller-hostafrica-balance-warning}

Domain Seller addon ကို HostAfrica နှင့် ချိတ်ဆက်ထားသောအခါ၊ reseller account လက်ကျန်သည် domain မှတ်ပုံတင်ခြင်း သို့မဟုတ် သက်တမ်းတိုးခြင်းကို ယုံကြည်စိတ်ချစွာ ဆောင်ရွက်ရန် နည်းပါးလွန်းလျှင် network administrator များသည် ပိတ်နိုင်သော လက်ကျန်နည်း သတိပေးချက်ကို ယခု မြင်ရသည်။

ဤအသိပေးချက်ကို လုပ်ငန်းဆိုင်ရာ သတိပေးချက်အဖြစ် သတ်မှတ်ပါ။ ပေးချေထားသော domain မှတ်ပုံတင်မှုများ ပိုမိုလက်ခံမီ HostAfrica reseller လက်ကျန်ကို ဖြည့်ပါ။ ထို့နောက် မှတ်ပုံတင်မှုများနှင့် သက်တမ်းတိုးမှုများ ပုံမှန် ဆက်လက်လုပ်ဆောင်နိုင်ကြောင်း အတည်ပြုရန် Domain Seller settings သို့မဟုတ် domain စောင့်ကြည့်ရေးမျက်နှာပြင်သို့ ပြန်သွားပါ။

## AI provider connector settings {#ai-provider-connector-settings}

AI provider connector settings များသည် ပံ့ပိုးထားသော OAuth account pool များကိုသာ ယခု ဖော်ပြသည်။

| Provider | Setup လုပ်ငန်းစဉ် |
|---|---|
| **Anthropic Max** | OAuth ခလုတ်ဖြင့် Anthropic Max account တစ်ခု သို့မဟုတ် တစ်ခုထက်ပို၍ ချိတ်ဆက်ပါ။ sandboxed browser သည် redirect ကို အလိုအလျောက် မပြီးစီးနိုင်ပါက manual OAuth fallback ကို အသုံးပြုပါ။ |
| **OpenAI ChatGPT/Codex** | တူညီသော OAuth pool လုပ်ငန်းစဉ်မှတစ်ဆင့် ChatGPT account များကို ချိတ်ဆက်ပါ။ account ချိတ်ဆက်ပြီးနောက် connector က ပံ့ပိုးထားသော လုပ်ဆောင်ချက်များသည် ChatGPT Codex tool call များကို အသုံးပြုနိုင်သည်။ |
| **Google AI Pro** | Google AI Pro account များကို OAuth မှတစ်ဆင့် ချိတ်ဆက်ပါ။ account စာရင်းသည် ချက်ချင်း မအပ်ဒိတ်ဖြစ်ပါက connector ကို refresh လုပ်ပါ။ |

Cursor Pro သည် ပံ့ပိုးထားသော provider မဟုတ်တော့ပါ။ Cursor Pro setup field များ သို့မဟုတ် connector path များကို ဖော်ပြထားသော အတွင်းပိုင်း screenshot အဟောင်းများ၊ runbook များ သို့မဟုတ် onboarding အဆင့်များကို ဖယ်ရှားပါ။

provider account များ ထည့်ခြင်း သို့မဟုတ် ဖယ်ရှားခြင်း ပြုလုပ်သောအခါ၊ refresh သို့မဟုတ် ဖျက်မည့် account အတွက် မှန်ကန်သော email address ကို ထည့်ပြီး connector-backed လုပ်ဆောင်ချက်များကို စမ်းသပ်မီ provider settings ကို သိမ်းဆည်းပါ။
