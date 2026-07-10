---
title: Ultimate AI Connector for Compatible Endpoints Changelog
sidebar_position: 99
_i18n_hash: bc1e5acc3b2415defb863e64a18d271c
---
# Ultimate AI Connector အတွက် Compatible Endpoints များ၏ ပြောင်းလဲမှုမှတ်တမ်း (Changelog) {#ultimate-ai-connector-for-compatible-endpoints-changelog}

## Version 2.0.0 — 2026-04-24 တွင် ထုတ်ဝေခဲ့သည် {#version-200--released-on-2026-04-24}

* အသစ်ထည့်သည်- ပံ့ပိုးပေးသူ (Multi-provider) အများအပြားကို ပံ့ပိုးမှု။ AI endpoints များစွာကို စနစ်ထည့်သွင်းနိုင်ပြီး၊ ပံ့ပိုးပေးသူများအကြား အလိုအလျောက် ပြန်လည်ရွေးချယ်မှု (automatic fallback) ဖြင့် request များကို ပို့ဆောင်ပေးနိုင်ခြင်း။
* ပြင်ဆင်သည်- ပံ့ပိုးပေးသူတစ်ခုချင်းစီအတွက် မှန်ကန်သော provider ID များ၊ မှတ်ပုံတင် URL များ၊ နှင့် HTTP filter scoping တို့ဖြင့် Multi-provider SDK ကို ပေါင်းစပ်မှု ပြင်ဆင်ခဲ့သည်။
* ပြင်ဆင်သည်- ပံ့ပိုးပေးသူကတ် (provider card) အသစ်ကို ထည့်လိုက်တာနဲ့ အလိုအလျောက် ကျယ်ပြန့်သွားပြီ။ plugin update လုပ်တဲ့အခါ script cache busting ကိုလည်း ပြင်ဆင်ခဲ့သည်။
* ပြင်ဆင်သည်- eval() အတွက် dynamic provider class namespace ကိုလည်းကောင်း၊ အသစ်ထည့်လိုက်တဲ့ ပံ့ပိုးပေးသူတွေအတွက် အလိုအလျောက် ကျယ်ပြန့်တဲ့ လုပ်ဆောင်ချက် (auto-expand behaviour) ကိုလည်းကောင်း ပြင်ဆင်ခဲ့သည်။
* ပြင်ဆင်သည်- WordPress 6.9+ နှင့် တွဲဖက်အသုံးပြုနိုင်စေရန်အတွက် ယခင်က စမ်းသပ်အဆင့် (experimental) မဟုတ်တော့သည့် stable Card/CardBody/CardHeader/CardDivider components များကို အသုံးပြုခဲ့သည်။
* ပြင်ဆင်သည်- ပံ့ပိုးပေးသူများကို drag လုပ်ပြီး ပြန်စီစဉ်နိုင်ရန် (drag-to-reorder) အတွက် undefined DragHandle ကို unicode grip icon ဖြင့် အစားထိုးခဲ့သည်။
* ပြင်ဆင်သည်- စာမျက်နှာတိုင်း load လုပ်တဲ့အခါ အမြဲတမ်း ပို့နေတဲ့ (blocking) HTTP request ကို ဖယ်ရှားခဲ့သည်။
* မြှင့်တင်သည်- GitHub Actions workflows များကို Node.js 24 သို့ အဆင့်မြှင့်တင်ခဲ့သည်။

## Version 1.0.0 — ပထမဆုံးထုတ်ဝေမှု {#version-100--initial-release}
