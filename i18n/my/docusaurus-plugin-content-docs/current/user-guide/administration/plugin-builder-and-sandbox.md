---
title: ပလပ်အင်တည်ဆောက်သူနှင့် စမ်းသပ်ကွင်း
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox {#plugin-builder--sandbox}

Gratis AI Agent v1.5.0 မှာ **Plugin Builder & Sandbox System** ကို မိတ်ဆက်ပေးလိုက်ပါတယ်။ ဒီစနစ်က AI assistant ကို သင့် network ပေါ်မှာ WordPress plugins တွေကို generate လုပ်ပေးဖို့၊ activate လုပ်ပေးဖို့နဲ့ manage လုပ်ပေးဖို့ ခွင့်ပြုပါတယ်။ အားလုံးကိုလည်း ဘေးကင်းပြီး ခွဲခြားထားတဲ့ sandbox ပတ်ဝန်းကျင်တစ်ခုကနေ လုပ်ဆောင်ပေးမှာပါ။

## Overview {#overview}

Plugin Builder ကို အသုံးပြုခြင်းအားဖြင့် AI assistant ဟာ natural language (ပုံမှန်စကား) အမေးအဖြေတွေအပေါ် အခြေခံပြီး custom WordPress plugins တွေကို ရေးသားနိုင်ပါတယ်။ အဲဒီကနေ generate လုပ်လိုက်တဲ့ plugins တွေကို live site ရဲ့ လုပ်ဆောင်ချက်တွေကို မထိခိုက်ခင်မှာ validation လုပ်ပေးခြင်း၊ သိမ်းဆည်းပေးခြင်းနဲ့ sandbox layer အတွင်းမှာ activate လုပ်ပေးခြင်းတွေ လုပ်ဆောင်ပေးပါတယ်။

အသုံးပြုနိုင်တဲ့ နေရာတွေကတော့-

- developer အကူအညီမလိုဘဲ ပေါ့ပါးတဲ့ utility plugins တွေကို generate လုပ်ခြင်း။
- WordPress hooks ဒါမှမဟုတ် custom post types တွေ လိုအပ်တဲ့ features တွေကို prototype လုပ်ခြင်း။
- batch လုပ်ဆောင်မှုတွေအတွက် ခဏတာအသုံးပြုမယ့် automation scripts တွေ ဖန်တီးခြင်း။

## AI မှတစ်ဆင့် Plugin တစ်ခုကို Generate လုပ်ခြင်း {#generating-a-plugin-via-ai}

Plugin တစ်ခု generate လုပ်ဖို့အတွက် Gratis AI Agent ရဲ့ chat interface ကို ဖွင့်ပြီး ဘာလိုချင်လဲဆိုတာကို ဖော်ပြပေးရပါမယ်။ ဥပမာ-

> "Dashboard ပေါ်မှာ custom admin notice တစ်ခု ထည့်ပေးမယ့် plugin တစ်ခု ဖန်တီးပေးပါ။"

AI က အောက်ပါအဆင့်တွေကို လုပ်ဆောင်ပေးပါလိမ့်မယ်-

၁။ structured code generation ကို အသုံးပြုပြီး plugin PHP code ကို ထုတ်ပေးခြင်း။
၂။ syntax error တွေနဲ့ ဘေးမကင်းတဲ့ pattern တွေကို စစ်ဆေးပေးခြင်း။
၃။ generate လုပ်ထားတဲ့ plugin ကို sandbox store မှာ သိမ်းဆည်းပေးခြင်း။
၄။ plugin slug နဲ့ **Activate in Sandbox** ခလုတ်ပါတဲ့ အတည်ပြုချက်ကို ပြန်ပေးခြင်း။

activate မလုပ်ခင်မှာ အဲဒီ conversation thread အတိုင်းမှာ follow up လုပ်ပြီး ရလဒ်ကို ပိုမိုကောင်းမွန်အောင် ပြင်ဆင်နိုင်ပါတယ်။

## Sandbox Activation {#sandbox-activation}

sandbox မှာ generate လုပ်ထားတဲ့ plugin တစ်ခုကို activate လုပ်တာဟာ live network ပေါ်မှာ activate လုပ်တာနဲ့ မတူပါဘူး။ sandbox က-

- plugin ကို ခွဲခြားထားတဲ့ WordPress ပတ်ဝန်းကျင် (wp-env) တစ်ခုထဲမှာ run ပေးပါတယ်။
- PHP error တွေ၊ warning တွေ ဒါမှမဟုတ် hook conflict တွေ ရှိရင် စုဆောင်းပေးပါတယ်။
- activate လုပ်တဲ့ ရလဒ်ကို chat interface မှာ ပြန်လည် အစီရင်ခံပေးပါတယ်။

sandbox မှာ plugin တစ်ခု activate လုပ်ဖို့အတွက် AI chat response ထဲက **Activate in Sandbox** ခလုတ်ကို နှိပ်နိုင်ပါတယ်၊ ဒါမှမဟုတ် slash command ကို အသုံးပြုနိုင်ပါတယ်-

```
/activate-plugin <plugin-slug>
```

activate လုပ်တာ အောင်မြင်လား၊ ကျရှုံးလားဆိုတာကို status message က အတည်ပြုပေးပါလိမ့်မယ်။ ကျရှုံးခဲ့ရင် error log ကို chat thread ထဲမှာ ပြသပေးမှာ ဖြစ်ပါတယ်။

## Generated Plugins တွေကို Manage လုပ်ခြင်း {#managing-generated-plugins}

generate လုပ်ထားတဲ့ plugins တွေကို **Gratis AI Agent → Plugin Builder → Manage Plugins** မှာ စာရင်းလုပ်ထားပါတယ်။ ဒီ screen ကနေ သင်လုပ်ဆောင်နိုင်တာတွေက-

| Action | Description |
|---|---|
| **View source** | plugin PHP code အပြည့်အစုံကို ပြန်လည်စစ်ဆေးနိုင်ပါတယ်။ |
| **Re-activate in sandbox** | sandbox activation စစ်ဆေးမှုကို ပြန်လည် run ပေးနိုင်ပါတယ်။ |
| **Install on network** | plugin ကို live network ပေါ်မှာ deploy လုပ်ပေးနိုင်ပါတယ် (လက်နဲ့ အတည်ပြုဖို့ လိုအပ်ပါတယ်)။ |
| **Update** | AI ကနေ version အသစ်တစ်ခု ပေးပြီး ရှိပြီးသား code ကို အစားထိုးနိုင်ပါတယ်။ |
| **Delete** | plugin ကို sandbox store ကနေ ဖယ်ရှားပေးပါတယ်။ ပထမဆုံး site အားလုံးကနေ deactivate လုပ်ပေးမှာပါ။ |

:::warning
**Install on network** ဆိုတာက generate လုပ်ထားတဲ့ plugin ကို သင့် live WordPress multisite ပေါ်မှာ deploy လုပ်ပေးတာ ဖြစ်ပါတယ်။ လုပ်ဆောင်မှုမစခင် plugin code ကို သေချာပြန်စစ်ဆေးပါ။ Gratis AI Agent က live install လုပ်တာကို အပြီးသတ်မလုပ်ခင် အတည်ပြုချက် တောင်းခံပါလိမ့်မယ်။
:::

## Generated Plugin တစ်ခုကို Network ပေါ်မှာ Install လုပ်ခြင်း {#installing-a-generated-plugin-on-the-network}

sandbox မှာ စစ်ဆေးပြီးတဲ့ plugin တစ်ခုနဲ့ သင်ကျေနပ်ပြီဆိုရင် live network ပေါ်မှာ install လုပ်နိုင်ပါပြီ-

၁။ **Gratis AI Agent → Plugin Builder → Manage Plugins** ကို သွားပါ။
၂။ deploy လုပ်လိုတဲ့ plugin ဘေးက **Install on Network** ကို နှိပ်ပါ။
၃။ dialog ကို အတည်ပြုပေးပါ။ plugin ဟာ `wp-content/plugins/` ကို install လုပ်ပေးပြီး network အတိုင်း activate လုပ်ပေးပါလိမ့်မယ်။

ဒါမှမဟုတ် chat interface မှာ slash command ကို အသုံးပြုနိုင်ပါတယ်-

```
/install-plugin <plugin-slug>
```

## Plugin Updates {#plugin-updates}

generate လုပ်ထားတဲ့ plugin တစ်ခုကို update လုပ်ဖို့အတွက် အပြောင်းအလဲကို AI assistant ကို conversation အသစ်တစ်ခုမှာ ဖော်ပြပေးရပါမယ်-

> "dashboard-notice plugin ကို administrator တွေအတွက်ပဲ notice ပြသအောင် update လုပ်ပေးပါ။"

AI က version အသစ်တစ်ခု generate လုပ်ပေးမှာဖြစ်ပြီး၊ အဲဒီ version အသစ်ဟာ လက်ရှိ version နဲ့အတူ sandbox ထဲမှာ ပေါ်လာပါလိမ့်မယ်။ update မလုပ်ခင်မှာ diff ကို သင်ပြန်စစ်ဆေးပြီး အတည်ပြုပေးရမှာ ဖြစ်ပါတယ်။

## HookScanner Integration {#hookscanner-integration}

Plugin Builder ဟာ generate လုပ်ထားတဲ့ plugin တစ်ခုချင်းစီက register လုပ်ထားတဲ့ hooks နဲ့ filters တွေကို ခွဲခြမ်းစိတ်ဖြာဖို့အတွက် **HookScanner** ကို အသုံးပြုပါတယ်။ HookScanner ရဲ့ output ကို chat response ထဲမှာ ပြသပေးမှာဖြစ်ပြီး အောက်ပါအရာတွေ ပါဝင်ပါတယ်-

- action hooks တွေ register လုပ်ထားတာ (`add_action` ခေါ်ဆိုမှုများ)။
- filter hooks တွေ register လုပ်ထားတာ (`add_filter` ခေါ်ဆိုမှုများ)။
- plugin dependencies တွေထဲမှာ တွေ့ရှိတဲ့ hooks တွေ (vendor/ နဲ့ node_modules/ directory တွေကို ကျော်လွန်သွားပါမယ်)။

ဒါက plugin တစ်ခုရဲ့ အပြုအမူကို activate လုပ်ခင်မှာ နားလည်ဖို့ ကူညီပေးပါတယ်။

## Security Considerations {#security-considerations}

- generate လုပ်ထားတဲ့ plugins တွေကို manual install လုပ်ထားတဲ့ plugins တွေနဲ့ ခွဲခြားသိမ်းဆည်းထားတာဖြစ်ပြီး၊ network ပေါ်မှာ သင့်ကိုယ်တိုင် install လုပ်မပေးခင်အထိ standard WordPress plugin management screen ကနေ ဝင်ရောက်လို့ မရပါဘူး။
- sandbox က plugin file တွေ ရေးသားတဲ့အခါ directory traversal ကို ကာကွယ်ဖို့ path validation ကို အသုံးပြုပါတယ်။
- အန္တရာယ်ရှိတဲ့ function call တွေ (ဥပမာ- `eval`, `exec`, `system`) ပါတဲ့ plugins တွေကို validation လုပ်တဲ့အချိန်မှာ flag လုပ်ပေးမှာဖြစ်ပြီး activate လုပ်လို့ မရပါဘူး။
