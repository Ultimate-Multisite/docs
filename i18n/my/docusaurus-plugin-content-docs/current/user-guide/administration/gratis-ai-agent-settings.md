---
title: Gratis AI Agent ဆက်တင်များ
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent ဆက်တင်များ

Gratis AI Agent ရှိ **Settings → Advanced** မျက်နှာပြင်သည် backend ပေါင်းစည်းမှုများအတွက် စီမံခန့်ခွဲသူအဆင့် ပြင်ဆင်သတ်မှတ်မှုများကို ပေးသည်။ ဤစာမျက်နှာတွင် feedback ပို့ဆောင်ခြင်း၊ ရှာဖွေရေး provider key များ၊ စီမံထားသော Superdav ဝန်ဆောင်မှု တပ်ဆင်ခြင်း၊ Google Calendar ထိန်းချုပ်မှုများ၊ TextBee SMS ဆက်တင်များနှင့် network တစ်ခုလုံးအတွက် feature flag များကို မှတ်တမ်းတင်ထားသည်။

## ဆက်တင်များကို ဝင်ရောက်ခြင်း

1. WordPress admin တွင် **Gratis AI Agent → Settings** သို့ သွားပါ။
2. **Advanced** tab ကို နှိပ်ပါ။

## Feedback Endpoint ပြင်ဆင်သတ်မှတ်မှု

feedback endpoint သည် အသုံးပြုသူက thumbs-down ခလုတ်၊ auto-prompt banner သို့မဟုတ် `/report-issue` command မှတစ်ဆင့် feedback ပေးပို့သည့်အခါတိုင်း AI agent ထံမှ POST request များကို လက်ခံသည်။

| Field | ဖော်ပြချက် |
|---|---|
| **Feedback Endpoint URL** | JSON body ပါသော HTTP POST request များအဖြစ် feedback ပေးပို့မှုများကို လက်ခံသည့် URL။ |
| **Feedback API Key** | feedback request တစ်ခုချင်းစီ၏ `Authorization` header တွင် ပို့သည့် bearer token။ သင့် endpoint သည် authentication မလိုအပ်ပါက ဗလာထားပါ။ |

### မျှော်မှန်းထားသော JSON Payload

သင့် feedback endpoint သည် အနည်းဆုံး အောက်ပါ field များပါဝင်သည့် JSON body ကို လက်ခံနိုင်ရမည်-

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

စကားပြောဆိုမှု context ပေါ်မူတည်၍ payload တွင် နောက်ထပ် field များ ပါဝင်နိုင်သည်။

### `triage_category` တန်ဖိုးများ

AI triage layer သည် payload ကို မပို့မီ `triage_category` သို့ အောက်ပါတန်ဖိုးများထဲမှ တစ်ခုကို သတ်မှတ်ပေးသည်-

| တန်ဖိုး | အဓိပ္ပါယ် |
|---|---|
| `factual_error` | assistant သည် မှားယွင်းသော အချက်အလက်ကို ပေးခဲ့သည်။ |
| `unhelpful_answer` | အဖြေသည် နည်းပညာပိုင်းအရ မှန်ကန်သော်လည်း အသုံးမဝင်ခဲ့ပါ။ |
| `inappropriate_content` | အဖြေတွင် အသုံးပြုသူများကို မပြသသင့်သော အကြောင်းအရာ ပါဝင်ခဲ့သည်။ |
| `other` | feedback သည် သိရှိထားသော အမျိုးအစားနှင့် မကိုက်ညီခဲ့ပါ။ |

### Authentication

သင့် endpoint သည် authentication လိုအပ်ပါက **Feedback API Key** field တွင် သင့် bearer token ကို သတ်မှတ်ပါ။ agent သည် အောက်ပါအတိုင်း ပို့သည်-

```
Authorization: Bearer <your-api-key>
```

**Feedback API Key** field သည် ဗလာဖြစ်ပါက `Authorization` header မပို့ပါ။

### Feedback စုဆောင်းမှုကို ပိတ်ခြင်း

**Feedback Endpoint URL** နှင့် **Feedback API Key** field နှစ်ခုစလုံးကို ဗလာထားပါ။ thumbs-down ခလုတ်နှင့် feedback UI သည် အသုံးပြုသူများအတွက် မြင်သာနေမည်ဖြစ်သော်လည်း ပေးပို့မှုများကို မည်သည့် ပြင်ပဝန်ဆောင်မှုထံမျှ မပို့ပါ။

## Brave Search API Key

**Advanced** tab ပေါ်တွင်လည်း **Brave Search API Key** field သည် [အင်တာနက် ရှာဖွေရေး](../configuration/internet-search) စွမ်းရည်ကို ဖွင့်ပေးသည်။

| Field | ဖော်ပြချက် |
|---|---|
| **Brave Search API Key** | Brave Search developer dashboard မှ သင့် API key။ AI assistant တွင် အင်တာနက် ရှာဖွေရေးကို ဖွင့်ရန် လိုအပ်သည်။ |

field label တွင် Brave Search API စာရင်းသွင်းစာမျက်နှာသို့ နှိပ်နိုင်သော link ပါဝင်သည်။ အင်တာနက် ရှာဖွေရေးကို ပိတ်ရန် ဗလာထားပါ။

ဤ feature အတွက် end-user မှတ်တမ်းကို [အင်တာနက် ရှာဖွေရေး](../configuration/internet-search) တွင် ကြည့်ပါ။

## စီမံထားသော Superdav ဝန်ဆောင်မှု

Superdav AI Agent v1.18.0 သည် ထောက်ပံ့ထားသော site များအတွက် စီမံထားသော Superdav ဝန်ဆောင်မှု endpoint များနှင့် အလိုအလျောက် connection provisioning ကို ထည့်သွင်းထားသည်။ သင့် site သည် လက်ဖြင့် ပြင်ဆင်ထားသော service endpoint အစား hosted provider သို့ ချိတ်ဆက်သင့်သောအခါ ဤထိန်းချုပ်မှုများကို အသုံးပြုပါ။

| Field | ဖော်ပြချက် |
|---|---|
| **Managed Superdav Service** | ထောက်ပံ့ထားသော site များအတွက် hosted Superdav ဝန်ဆောင်မှု connection ကို ဖွင့်ပေးသည်။ |
| **Provision Connection** | အလိုအလျောက် endpoint နှင့် credential provisioning ကို စတင်သည်။ site သည် managed provider ကို အသုံးပြုသင့်ကြောင်း အတည်ပြုပြီးနောက် ဤအရာကို အသုံးပြုပါ။ |
| **Service Endpoint / Connection Status** | provisioning ပြီးနောက် လက်ရှိ endpoint သို့မဟုတ် connection အခြေအနေကို ပြသည်။ |

provisioning ပြီးနောက် ဆက်တင်များကို သိမ်းပြီး managed-service workflow များကို အားမကိုးမီ connection အခြေအနေကို အတည်ပြုပါ။ provisioning မအောင်မြင်ပါက ပြထားသော ပြန်ကြိုးစားရန် လမ်းညွှန်ချက်ကို စစ်ဆေးပြီး site တွင် hosted provider ကို အသုံးပြုခွင့်ရှိကြောင်း အတည်ပြုပါ။

## Google Calendar ပြင်ဆင်သတ်မှတ်မှု

Superdav AI Agent v1.18.0 calendar feature များ ဖွင့်ထားသောအခါ agent သည် ပြင်ဆင်ထားသော calendar များနှင့် event အသေးစိတ်များကို ဖတ်နိုင်သည်။ Calendar tool များသည် ဖတ်ရှုရန် အဓိကထားပြီး schedule-aware သတိပေးချက်များ၊ တက်ရောက်သူ follow-up နှင့် contact matching အတွက် အသုံးဝင်သည်။

| Field | ဖော်ပြချက် |
|---|---|
| **Google Calendar Credentials** | calendar data ကို ဖတ်ရန် လိုအပ်သော credential သို့မဟုတ် token connection ကို သိမ်းဆည်းသည်။ |
| **Calendar Selection** | agent စစ်ဆေးနိုင်သော ပြင်ဆင်ထားသည့် calendar များကို ကန့်သတ်သည်။ |
| **Calendar Connection Status** | လက်ရှိ credential များသည် calendar များနှင့် event များကို ဖတ်နိုင်၊ မဖတ်နိုင် အတည်ပြုသည်။ |

calendar credential များကို agent လိုအပ်သော calendar များအထိသာ ကန့်သတ်ထားပါ။ အခြေအနေတွင် သက်တမ်းကုန် token ဖြစ်ကြောင်း ပြပါက credential များကို ပြန်ချိတ်ဆက်ပါ သို့မဟုတ် ပြောင်းလဲပါ။

## TextBee SMS အသိပေးချက်များ

Superdav AI Agent v1.18.0 သည် ပြင်ဆင်ထားသော အသိပေးချက် workflow များအတွက် TextBee ကို SMS provider အဖြစ် ထည့်သွင်းထားသည်။ SMS အသိပေးချက်များကို အရေးကြီးသော သို့မဟုတ် အသုံးပြုသူများကို ရည်ရွယ်သည့် message များအတွက် လူသား အတည်ပြုဂိတ်များနှင့် တွဲဖက်သင့်သည်။

| Field | ဖော်ပြချက် |
|---|---|
| **TextBee API Key** | TextBee SMS provider သို့ request များကို authentication လုပ်သည်။ |
| **TextBee Device / Sender** | provider က လိုအပ်သည့်အခါ ထွက်ပို့မည့် message များအတွက် အသုံးပြုသော TextBee sender သို့မဟုတ် device ကို ရွေးချယ်သည်။ |
| **SMS Notifications Enabled** | အတည်ပြုထားသော workflow များကို text-message အသိပေးချက်များ ပို့ခွင့်ပြုသည်။ SMS ပို့ခြင်းကို တားဆီးရန် ပိတ်ထားပါ။ |

စမ်းသပ် message ကို စီမံခန့်ခွဲသူပိုင် နံပါတ်တစ်ခုထံသာ ပို့ပါ၊ ထို့နောက် အချိန်ဇယားဖြင့် သို့မဟုတ် တက်ရောက်သူများကို ရည်ရွယ်သည့် သတိပေးချက်များ မဖွင့်မီ approval-gate အပြုအမူကို အတည်ပြုပါ။

## Feature Flag များ

v1.9.0 တွင်လည်း မိတ်ဆက်ထားသည့် **Settings → Feature Flags** tab သည် ရွေးချယ်နိုင်သော လုပ်ဆောင်ချက်များအတွက် toggle switch များကို ပေးသည်။ flag တစ်ခုချင်းစီသည် network တစ်ခုလုံးတွင် ဖွင့်ထားခြင်း သို့မဟုတ် ပိတ်ထားခြင်း ဖြစ်သည်။ ယခုအချိန်တွင် site တစ်ခုချင်းအလိုက် override မရှိပါ။

### Feature Flag များကို ဝင်ရောက်ခြင်း

1. WordPress admin တွင် **Gratis AI Agent → Settings** သို့ သွားပါ။
2. **Feature Flags** tab ကို နှိပ်ပါ။

### ဝင်ရောက်ခွင့် ထိန်းချုပ်မှု Flag များ

| အလံ | မူရင်း | ဖော်ပြချက် |
|---|---|---|
| **စီမံခန့်ခွဲသူများအတွက်သာ ကန့်သတ်ရန်** | ပိတ် | ဖွင့်ထားပါက `administrator` role ရှိသော အသုံးပြုသူများသာ AI Agent ချတ် panel ကို ဖွင့်နိုင်သည်။ အခြား role အားလုံးသည် အစားထိုးအနေဖြင့် "သင်၏ စီမံခန့်ခွဲသူကို ဆက်သွယ်ပါ" စာတိုကို မြင်ရသည်။ |
| **Network Admins အတွက်သာ ကန့်သတ်ရန်** | ပိတ် | multisite network တွင် ဖွင့်ထားပါက Super Admins များသာ agent ကို အသုံးပြုနိုင်သည်။ သီးခြား site admin များကို ပိတ်ဆို့ထားသည်။ နှစ်ခုစလုံး ဖွင့်ထားပါက "စီမံခန့်ခွဲသူများအတွက်သာ ကန့်သတ်ရန်" ထက် ဦးစားပေးသည်။ |
| **Subscriber ဝင်ရောက်ခွင့်ပြုရန်** | ပိတ် | ဖွင့်ထားပါက `subscriber` role ရှိသော အသုံးပြုသူများသည် chat interface ကို အသုံးပြုနိုင်သော်လည်း ဖတ်ရန်သာ လုပ်ဆောင်နိုင်မှုများအထိသာ ကန့်သတ်ထားသည် (ပို့စ် ဖန်တီးခြင်း သို့မဟုတ် ဆက်တင် ပြောင်းလဲခြင်း မရှိ)။ |
| **အဖွဲ့ဝင်မဟုတ်သူများအတွက် ပိတ်ရန်** | ပိတ် | Ultimate Multisite အဖွဲ့ဝင်မှု အခြေအနေနှင့် ပေါင်းစည်းသည်။ ဖွင့်ထားပါက လက်ရှိအဖွဲ့ဝင်မှု မရှိသော site များအတွက် chat ကို ဖျောက်ထားသည်။ |

### အမှတ်တံဆိပ် အလံများ

| အလံ | မူရင်း | ဖော်ပြချက် |
|---|---|---|
| **"Powered by Gratis AI Agent" Footer ဖျောက်ရန်** | ပိတ် | chat widget ၏ အောက်ခြေတွင် ပြထားသော အမှတ်တံဆိပ် အသိအမှတ်ပြု စာကြောင်းကို ဖယ်ရှားသည်။ white-label အသုံးချမှုများအတွက် အကြံပြုသည်။ |
| **စိတ်ကြိုက် Agent အမည်** | *(ဗလာ)* | chat header နှင့် admin menu ထဲရှိ မူရင်း "Gratis AI Agent" label ကို သင့်ကိုယ်ပိုင် ထုတ်ကုန်အမည်ဖြင့် အစားထိုးသည်။ မူရင်းကို အသုံးပြုရန် ဗလာထားပါ။ |
| **Agent ရွေးချယ်ကိရိယာ ဖျောက်ရန်** | ပိတ် | ဖွင့်ထားပါက အသုံးပြုသူများသည် ပါရှိပြီးသား agent ငါးခုအကြား ပြောင်းလဲမရွေးနိုင်ပါ။ လက်ရှိ agent ကို Settings → General တွင် မူရင်းအဖြစ် သတ်မှတ်ထားသည့်အတိုင်း အတည်ဖြစ်စေသည်။ |
| **Chat Avatar အဖြစ် Site Icon အသုံးပြုရန်** | ပိတ် | chat widget header ထဲရှိ မူရင်း AI icon ကို WordPress site icon (Appearance → Customize → Site Identity အောက်တွင် သတ်မှတ်ထားသည်) ဖြင့် အစားထိုးသည်။ |

### အလိုအလျောက်လုပ်ဆောင်မှု လုံခြုံရေး အလံများ

Superdav AI Agent v1.18.0 သည် ပိုမိုလုံခြုံသော အလိုအလျောက်လုပ်ဆောင်မှုများအတွက် လူမှ အတည်ပြုသည့် ဂိတ်များနှင့် သတိပေးချက် မှတ်တမ်းများကို မိတ်ဆက်ထားသည်။ ထည့်သွင်းထားသော package ပေါ်မူတည်၍ ဤထိန်းချုပ်မှုများသည် feature flags သို့မဟုတ် အဆင့်မြင့် အလိုအလျောက်လုပ်ဆောင်မှု ဆက်တင်များတွင် ပေါ်လာနိုင်သည်။

| အလံ | မူရင်း | ဖော်ပြချက် |
|---|---|---|
| **လူမှ အတည်ပြုချက် လိုအပ်သည်** | ဖွင့်ထားရန် အကြံပြု | အခွင့်ပြုထားသော အသုံးပြုသူတစ်ဦးက အဆိုပြုထားသော လုပ်ဆောင်ချက်ကို ပြန်လည်သုံးသပ်ပြီး အတည်မပြုမီအထိ အရေးကြီးသော အလိုအလျောက်လုပ်ဆောင်မှုများကို ခေတ္တရပ်ထားသည်။ |
| **သတိပေးချက် ထပ်ပွားမှု ကာကွယ်ခြင်း** | ဖွင့် | ပို့ပြီးသော သတိပေးချက်များကို မှတ်တမ်းတင်ထားသောကြောင့် ပြန်လည်ကြိုးစားမှုများ သို့မဟုတ် အချိန်ဇယားဖြင့် လုပ်ဆောင်မှုများက ထပ်တူ အကြောင်းကြားချက်များ မပို့စေပါ။ |
| **Calendar Tools ဖွင့်ရန်** | ပြင်ဆင်ပြီးသည်အထိ ပိတ် | agent က ပြင်ဆင်ထားသော Google calendar များနှင့် ဖြစ်ရပ်များကို ဖတ်နိုင်စေသည်။ |
| **SMS အကြောင်းကြားချက်များ ဖွင့်ရန်** | ပြင်ဆင်ပြီးသည်အထိ ပိတ် | credentials များ သိမ်းဆည်းပြီးနောက် အတည်ပြုထားသော workflow များက TextBee SMS အကြောင်းကြားချက်များ ပို့နိုင်စေသည်။ |

### ပြောင်းလဲမှုများ အသုံးချခြင်း

မည်သည့် အလံကိုမဆို ပြောင်းဖွင့်/ပိတ်ပြီးနောက် **ဆက်တင်များ သိမ်းဆည်းရန်** ကို နှိပ်ပါ။ ပြောင်းလဲမှုများသည် ချက်ချင်း သက်ရောက်သည် — cache flush သို့မဟုတ် plugin ပြန်လည်အသက်သွင်းခြင်း မလိုအပ်ပါ။
