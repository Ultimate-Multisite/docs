---
title: အခမဲ့ AI Agent Settings
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent စက်တင်များ

Gratis AI Agent ၏ **Settings → Advanced** စခရင်တွင် v1.5.0 တွင် မိတ်ဆက်ခဲ့သော backend ပေါင်းစပ်မှုများအတွက် စီမံခန့်ခွဲသူအဆင့် စနစ်ဖွဲ့စည်းမှုများကို ပေးထားပါသည်။ ဤစာမျက်နှာသည် **Feedback Endpoint** field များနှင့် ၎င်းတို့၏ မျှော်လင့်ထားသော ပုံစံများကို ဖော်ပြထားပါသည်။

## စက်တင်များသို့ ဝင်ရောက်ခြင်း

၁။ WordPress admin တွင် **Gratis AI Agent → Settings** သို့ သွားပါ။
၂။ **Advanced** tab ကို နှိပ်ပါ။

## Feedback Endpoint ဖွဲ့စည်းမှု

အသုံးပြုသူတစ်ဦးမှ thumbs-down ခလုတ်၊ auto-prompt banner သို့မဟုတ် `/report-issue` command မှတစ်ဆင့် feedback ပေးသည့်အခါတိုင်း AI agent မှ Feedback endpoint သို့ POST request များ ပေးပို့ပါသည်။

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | JSON body ပါဝင်သည့် HTTP POST request များအဖြစ် feedback ပေးပို့မှုများကို လက်ခံရရှိမည့် URL ဖြစ်ပါသည်။ |
| **Feedback API Key** | feedback request တစ်ခုစီ၏ `Authorization` header တွင် ပေးပို့ရသည့် bearer token ဖြစ်ပါသည်။ ၎င်း၏ endpoint သည် အထောက်အထားစစ်ဆေးမှု မလိုအပ်ပါက နေရာလွတ်ထားခဲ့ပါ။ |

### မျှော်လင့်ထားသော JSON Payload

သင့် feedback endpoint သည် အနည်းဆုံး အောက်ပါ field များပါဝင်သည့် JSON body ကို လက်ခံရမည်ဖြစ်ပါသည်။

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

စကားဝိုင်းအခြေအနေပေါ်မူတည်၍ payload တွင် အပို field များ ပါဝင်နိုင်ပါသည်။

### `triage_category` တန်ဖိုးများ

AI triage layer သည် payload ကို forward မလုပ်မီ `triage_category` အတွက် အောက်ပါတန်ဖိုးများထဲမှ တစ်ခုကို သတ်မှတ်ပေးပါသည်။

| Value | Meaning |
|---|---|
| `factual_error` | assistant က မှားယွင်းသော အချက်အလက်များကို ပေးခဲ့သည်။ |
| `unhelpful_answer` | အဖြေသည် နည်းပညာအရ မှန်သော်လည်း အသုံးမဝင်ပါ။ |
| `inappropriate_content` | အဖြေတွင် အသုံးပြုသူများအား ပြသသင့်သည့် အကြောင်းအရာ မဟုတ်သော အကြောင်းအရာများ ပါဝင်သည်။ |
| `other` | feedback သည် သိရှိပြီးသား အမျိုးအစားနှင့် မကိုက်ညီပါ။ |

### အထောက်အထားစစ်ဆေးခြင်း (Authentication)

သင့် endpoint သည် အထောက်အထားစစ်ဆေးမှု လိုအပ်ပါက **Feedback API Key** field တွင် သင့် bearer token ကို သတ်မှတ်ပါ။ agent သည် အောက်ပါအတိုင်း ပေးပို့ပါမည်။

```
Authorization: Bearer <your-api-key>
```

**Feedback API Key** field ကို နေရာလွတ်ထားပါက `Authorization` header ကို မပေးပို့ပါ။

### Feedback စုဆောင်းခြင်းကို ပိတ်ခြင်း

**Feedback Endpoint URL** နှင့် **Feedback API Key** field နှစ်ခုလုံးကို နေရာလွတ်ထားခဲ့ပါ။ thumbs-down ခလုတ်နှင့် feedback UI များသည် အသုံးပြုသူများအတွက် မြင်ရဆဲဖြစ်သော်လည်း ပေးပို့မှုများကို ပြင်ပဝန်ဆောင်မှု မည်သည့်နေရာသို့မျှ forward လုပ်မည်မဟုတ်ပါ။

## Brave Search API Key

**Advanced** tab တွင်လည်း **Brave Search API Key** field သည် [Internet Search](../configuration/internet-search) စွမ်းရည်ကို အသက်သွင်းပေးပါသည်။

| Field | Description |
|---|---|
| **Brave Search API Key** | Brave Search developer dashboard မှ သင်၏ API key ဖြစ်ပါသည်။ AI assistant တွင် internet search ကို အသက်သွင်းရန် လိုအပ်ပါသည်။ |

ဤ field label တွင် Brave Search API စာရင်းသွင်းစာမျက်နှာသို့ နှိပ်၍ ရနိုင်သော link ပါရှိပါသည်။ internet search ကို ပိတ်ရန် နေရာလွတ်ထားခဲ့ပါ။

ဤ feature အတွက် end-user များအတွက် documentation ကို [Internet Search](../configuration/internet-search) တွင် ကြည့်ရှုနိုင်ပါသည်။

## Feature Flags

v1.9.0 တွင်လည်း မိတ်ဆက်ခဲ့သည့် **Settings → Feature Flags** tab သည် ရွေးချယ်နိုင်သော လုပ်ဆောင်ချက်များအတွက် toggle switches များကို ပေးထားပါသည်။ flag တစ်ခုစီသည် network တစ်ခုလုံးအတွက် ဖွင့်ထားသည် သို့မဟုတ် ပိတ်ထားသည်သာ ဖြစ်ပြီး၊ လက်ရှိအချိန်တွင် site တစ်ခုချင်းစီအတွက် override လုပ်နိုင်ခြင်း မရှိပါ။

### Feature Flags ဝင်ရောက်ခြင်း

၁။ WordPress admin တွင် **Gratis AI Agent → Settings** သို့ သွားပါ။
၂။ **Feature Flags** tab ကို နှိပ်ပါ။

### Access Control Flags

| Flag | Default | Description |
|---|---|---|
| **Restrict to Administrators** | Off | ဖွင့်ထားပါက `administrator` role ရှိသော အသုံးပြုသူများသာ AI Agent chat panel ကို ဖွင့်နိုင်မည်။ အခြား role များအားလုံးသည် "Contact your administrator" ဟူသော မက်ဆေ့ခ်ျကို မြင်ရမည်။ |
| **Restrict to Network Admins** | Off | multisite network တွင် ဖွင့်ထားပါက Super Admins များသာ agent ကို အသုံးပြုနိုင်မည်။ site တစ်ခုချင်းစီ၏ admin များသည် ပိတ်ဆို့ခံရမည်။ နှစ်ခုလုံး ဖွင့်ထားပါက "Restrict to Administrators" ကို အစားထိုးပါသည်။ |
| **Allow Subscriber Access** | Off | ဖွင့်ထားပါက `subscriber` role ရှိသော အသုံးပြုသူများသည် chat interface ကို အသုံးပြုနိုင်သော်လည်း ဖတ်ရုံသာ လုပ်ဆောင်နိုင်သည် (post ဖန်တီးခြင်း သို့မဟုတ် settings ပြောင်းလဲခြင်း မပြုနိုင်ပါ)။ |
| **Disable for Non-Members** | Off | Ultimate Multisite membership status နှင့် ပေါင်းစပ်ထားသည်။ ဖွင့်ထားပါက active membership မရှိသော site များအတွက် chat ကို ဖုံးကွယ်ထားမည်။ |

### Branding Flags

| Flag | Default | Description |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | chat widget ၏ အောက်ခြေတွင် ပြသသည့် branding attribution line ကို ဖယ်ရှားပေးပါသည်။ white-label deployments များအတွက် အကြံပြုပါသည်။ |
| **Custom Agent Name** | *(blank)* | chat header နှင့် admin menu တွင် ပါရှိသည့် default "Gratis AI Agent" label ကို သင်၏ product name ဖြင့် အစားထိုးပေးပါသည်။ default ကို အသုံးပြုရန် နေရာလွတ်ထားခဲ့ပါ။ |
| **Hide Agent Picker** | Off | ဖွင့်ထားပါက အသုံးပြုသူများသည် built-in agent ငါးခုကြား ပြောင်းလဲ၍ မရတော့ပါ။ လက်ရှိ agent ကို Settings → General တွင် default အဖြစ် သတ်မှတ်ထားသည့်အတိုင်း အမြဲတမ်းထားရှိမည်။ |
| **Use Site Icon as Chat Avatar** | Off | chat widget header တွင် ပါရှိသည့် default AI icon ကို WordPress site icon (Appearance → Customize → Site Identity တွင် သတ်မှတ်ထားသည်) ဖြင့် အစားထိုးပေးပါသည်။ |

### ပြောင်းလဲမှုများ အသုံးပြုခြင်း

flag တစ်ခုခုကို toggle လုပ်ပြီးပါက **Save Settings** ကို နှိပ်ပါ။ ပြောင်းလဲမှုများသည် ချက်ချင်းအကျိုးသက်ရောက်ပြီး cache flush သို့မဟုတ် plugin reactivation လုပ်ရန် မလိုအပ်ပါ။
