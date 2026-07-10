---
title: WebLLM အတွက် Ultimate AI Connector Changelog
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM ပြောင်းလဲမှုမှတ်တမ်း {#ultimate-ai-connector-for-webllm-changelog}

## Version 1.1.0 — ၂၀၂၆-၀၄-၀၉ တွင် ထုတ်ဝေခဲ့သည် {#version-110--released-on-2026-04-09}

* **အသစ်:** အုပ်ချုပ်သူဘား (admin-bar) အခြေအနေပြ အမှတ်အသားပါ ဝစ်ဂျက် (Floating chat widget) — အကောင့်ဝင်ထားသည့် အသုံးပြုသူ မည်သူမဆို front end မှတဆင့် browser-side LLM ကို တိုက်ရိုက် မေးမြန်းနိုင်ပြီဖြစ်သည်။
* **အသစ်:** SharedWorker runtime — MLC engine သည် ယခု SharedWorker တွင် လုပ်ဆောင်သောကြောင့်၊ တက်ဘ်များစွာသည် GPU အသုံးပြုမှုအတွက် ယှဉ်ပြိုင်နေမည့်အစား တစ်ခုတည်းသော GPU session ကို မျှဝေအသုံးပြုနိုင်ပြီဖြစ်သည်။
* **အသစ်:** apiFetch middleware interceptor — AI Client SDK ပုံစံနှင့် ကိုက်ညီသော WordPress REST တောင်းဆိုမှုများကို local WebLLM broker သို့ ပွင့်လင်းမြင်သာစွာ လမ်းကြောင်းပြောင်းပေးမည်ဖြစ်ပြီး၊ loopback HTTP round-trip လုပ်ရန် မလိုအပ်တော့ပါ။
* **အသစ်:** ဝစ်ဂျက်ကို ဖွင့်/ပိတ်လုပ်ခြင်းနှင့် အလိုအလျောက် မေးခွန်းထုတ်သည့် အပြုအမူ (auto-prompt behaviour) ကို စီမံခန့်ခွဲနိုင်ရန် Connector panel တွင် ဝစ်ဂျက်ဆက်တင်များ UI ထည့်သွင်းထားသည်။
* **ပြင်ဆင်မှု:** IndexedDB cache backend ကို အတင်းအကျပ် အသုံးပြုစေခြင်း။ ၎င်းသည် model weight များ ဒေါင်းလုဒ်လုပ်မှုများသည် default Cache API လမ်းကြောင်းကို ချိုးဖျက်သည့် HuggingFace xet CDN redirect များကြောင့် ပျက်စီးသွားခြင်းမှ ကာကွယ်ပေးသည်။
* **ပြင်ဆင်မှု:** embedding model များအတွက် context_window KV-cache override ကို ကျော်လွန်သွားစေခြင်း (၎င်းတို့တွင် decoder မရှိသောကြောင့် ဤ override သည် runtime error ကို ဖြစ်စေခဲ့သည်။)
* **ပြင်ဆင်မှု:** worker tab မတိုင်မီ /webllm/v1/models တွင် cold-start candidate model ကို ကြော်ငကြော်ပြခြင်း။ ၎င်းကြောင့် SDK အသုံးပြုသူများသည် မော်ဒယ်ကို ချက်ချင်းမြင်တွေ့ရမည်ဖြစ်သည်။
* **ပြင်ဆင်မှု:** WebLLM ကို wpai_preferred_text_models filter နှင့် ချိတ်ဆက်ပေးခြင်း။ ၎င်းကြောင့် AI Experiments feature သည် မော်ဒယ်တစ်ခုကို စီမံခန့်ခွဲထားပါက browser engine သို့ လမ်းကြောင်းပြောင်းပေးမည်ဖြစ်သည်။
* **ပိုမိုကောင်းမွန်စေခြင်း:** end-to-end စမ်းသပ်မှုများအတွင်း cache-busting၊ content normalisation နှင့် hardware-reference ပြဿနာများကို ဖြေရှင်းပေးခဲ့သည်။

## Version 1.0.0 — ပထမဆုံးထုတ်ဝေမှု {#version-100--initial-release}
