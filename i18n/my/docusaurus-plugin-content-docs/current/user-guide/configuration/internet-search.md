---
title: အင်တာနက် ရှာဖွေခြင်း
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# အင်တာနက် ရှာဖွေခြင်း (Internet Search) {#internet-search}

Gratis AI Agent v1.5.0 မှာ **Internet Search** စွမ်းရည်တစ်ခုကို ထပ်ပေါင်းပေးထားပါတယ်။ ဒီစွမ်းရည်က AI assistant ကို စကားပြောနေရင်းနဲ့ အင်တာနက်ပေါ်က နောက်ဆုံးရ အချက်အလက်တွေကို ရှာဖွေယူနိုင်စေပါတယ်။ ဒါကို [Brave Search API](https://brave.com/search/api/) ဒါမှမဟုတ် [Tavily API](https://tavily.com/) တို့က စွမ်းဆောင်ပေးထားတာ ဖြစ်ပါတယ်။

## ဘယ်လိုအလုပ်လုပ်သလဲ (How It Works) {#how-it-works}

Internet search ကို ဖွင့်ထားတဲ့အခါ၊ မေးခွန်းတစ်ခုက လက်ရှိအချက်အလက် ဒါမှမဟုတ် အပြင်က အချက်အလက်တွေ လိုအပ်တယ်လို့ AI က သိတဲ့အခါ၊ သတ်မှတ်ထားတဲ့ search provider ကို အလိုအလျောက် query လုပ်ပေးမှာ ဖြစ်ပါတယ်။ ဥပမာအားဖြင့်၊ မကြာသေးခင်က သတင်းတွေ၊ အချိန်နဲ့တပြေးညီ ဈေးနှုန်းတွေ၊ ဒါမှမဟုတ် model ကို လေ့ကျင့်ပေးခဲ့တဲ့ အချိန်ကတည်းက ပြောင်းလဲသွားနိုင်တဲ့ documentation တွေ စသဖြင့်ပေါ့။

ရလဒ်တွေကို အချိန်နဲ့တပြေးညီ ယူပြီး၊ AI က အဖြေထုတ်ပေးဖို့ မစခင်မှာ assistant ရဲ့ context ထဲကို ထည့်ပေးပါတယ်။ မေးခွန်းတစ်ခုကို အဖြေပေးတဲ့အခါ search ရလဒ်တွေကို အသုံးပြုခဲ့တယ်ဆိုတာကိုလည်း assistant က ဖော်ပြပေးမှာ ဖြစ်ပါတယ်။

## Internet Search ကို ဖွင့်ခြင်း (Enabling Internet Search) {#enabling-internet-search}

Internet search ကို အသုံးပြုဖို့အတွက် သင်ရွေးချယ်တဲ့ search provider ဆီကနေ API key တစ်ခု လိုအပ်ပါတယ်။ ဘယ်လို configure လုပ်ရမလဲဆိုတာ အောက်မှာ ကြည့်လိုက်ပါ။

1. **Gratis AI Agent → Settings → Advanced** ကို သွားပါ။
2. **Internet Search Provider** dropdown ကို ရှာပြီး **Brave Search** ဒါမှမဟုတ် **Tavily** ကို ရွေးချယ်ပါ။
3. သက်ဆိုင်ရာ field မှာ သင့်ရဲ့ API key ကို ထည့်ပါ။ Sign-up link တွေကို field တစ်ခုချင်းစီဘေးမှာ ပြသထားပါတယ်။
4. **Save Settings** ကို နှိပ်ပါ။

key ကို သိမ်းပြီးတာနဲ့ Internet Search စွမ်းရည်ဟာ assistant အတွက် အလိုအလျောက် အသုံးပြုနိုင်မှာ ဖြစ်ပါတယ်။

## Brave Search {#brave-search}

### Brave Search API Key ရယူခြင်း (Obtaining a Brave Search API Key) {#obtaining-a-brave-search-api-key}

1. [Brave Search API page](https://brave.com/search/api/) ကို သွားပါ။
2. အစီအစဉ်တစ်ခုအတွက် Sign up လုပ်ပါ။ လစဉ် request ကန့်သတ်ချက်နဲ့ အခမဲ့ အဆင့် (free tier) ရှိပါတယ်။
3. Brave Search developer dashboard ကနေ သင့်ရဲ့ API key ကို ကူးယူပါ။
4. Gratis AI Agent settings ထဲက **Brave Search API Key** field မှာ ကူးထည့်ပါ။

### အသုံးပြုမှု ကန့်သတ်ချက်များ (Usage Limits) {#usage-limits}

အသုံးပြုမှုနှုန်းကို Brave Search က query ပမာဏအပေါ် မူတည်ပြီး ကောက်ခံပါတယ်။ search ကို အစပျိုးတဲ့ AI response တစ်ခုချင်းစီဟာ query တစ်ခုအဖြစ် ရေတွက်ပါတယ်။ မမျှော်လင့်ဘဲ ငွေကြေးကောက်ခံတာမျိုး မဖြစ်အောင် [Brave Search developer dashboard](https://brave.com/search/api/) မှာ သင့်ရဲ့ အသုံးပြုမှုနှုန်းကို စောင့်ကြည့်သင့်ပါတယ်။

## Tavily {#tavily}

Superdav AI Agent v1.10.0 မှာ **Tavily** ကို အခြားရွေးချယ်စရာ internet search provider အဖြစ် ထပ်ပေါင်းပေးထားပြီး၊ ပိုမိုကြွယ်ဝတဲ့ search ရလဒ်တွေနဲ့ အဆင့်မြင့် သုတေသန စွမ်းရည်တွေကို ပေးစွမ်းနိုင်ပါတယ်။

### Tavily API Key ရယူခြင်း (Obtaining a Tavily API Key) {#obtaining-a-tavily-api-key}

1. [Tavily API page](https://tavily.com/) ကို သွားပါ။
2. အကောင့်တစ်ခုအတွက် Sign up လုပ်ပါ။ လစဉ် request ကန့်သတ်ချက်နဲ့ အခမဲ့ အဆင့် (free tier) ရှိပါတယ်။
3. Tavily dashboard ကနေ သင့်ရဲ့ API key ကို ကူးယူပါ။
4. Gratis AI Agent settings ထဲက **Tavily API Key** field မှာ ကူးထည့်ပါ။

### အသုံးပြုမှု ကန့်သတ်ချက်များ (Usage Limits) {#usage-limits-1}

အသုံးပြုမှုနှုန်းကို Tavily က API call ပမာဏအပေါ် မူတည်ပြီး ကောက်ခံပါတယ်။ search ကို အစပျိုးတဲ့ AI response တစ်ခုချင်းစီဟာ call တစ်ခုအဖြစ် ရေတွက်ပါတယ်။ မမျှော်လင့်ဘဲ ငွေကြေးကောက်ခံတာမျိုး မဖြစ်အောင် [Tavily dashboard](https://tavily.com/) မှာ သင့်ရဲ့ အသုံးပြုမှုနှုန်းကို စောင့်ကြည့်သင့်ပါတယ်။

## Internet Search ကို ပိတ်ခြင်း (Disabling Internet Search) {#disabling-internet-search}

အသုံးပြုနေတဲ့ search provider field ကနေ API key ကို ဖယ်ရှားပြီး သိမ်းလိုက်ပါ။ အဲဒီအခါမှာ Internet Search စွမ်းရည်ကို assistant က နောက်ထပ် မပေးတော့ပါဘူး။

:::note
Internet search ဟာ အဖြေထုတ်ပေးဖို့ assistant က search ရလဒ်တွေကို စောင့်ရတဲ့အတွက် response တွေမှာ အချိန်ကြာမြင့်မှု (latency) ကို ပေါင်းထည့်ပေးပါတယ်။ အချိန်နဲ့အမျှ အရေးပေါ် အသုံးပြုရမယ့် အခြေအနေတွေအတွက်၊ real-time search လိုအပ်ရဲ့လား၊ ဒါမှမဟုတ် assistant ရဲ့ built-in knowledge က လုံလောက်ရဲ့လားဆိုတာကို စဉ်းစားသင့်ပါတယ်။
:::
