---
title: Hestia Control Panel ပေါင်းစပ်မှု
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel ပေါင်းစပ်အသုံးပြုခြင်း

ဤလမ်းညွှန်တွင် Ultimate Multisite Hestia ပေါင်းစပ်မှုကို ပြင်ဆင်သတ်မှတ်နည်းကို ရှင်းပြထားပါသည်။ သင့် network တွင် map လုပ်ထားသော domain များကို Hestia ရှိ Web Domain Aliases အဖြစ် အလိုအလျောက် ထည့်သွင်းခြင်း (နှင့် ဖယ်ရှားခြင်း) ပြုလုပ်နိုင်မည်ဖြစ်သည်။

- Hestia CLI ကိုးကားချက်: v-add-web-domain-alias / v-delete-web-domain-alias
- တရားဝင် REST API စာရွက်စာတမ်း: https://hestiacp.com/docs/server-administration/rest-api.html

## ဘာလုပ်ဆောင်ပေးသလဲ
- Ultimate Multisite တွင် domain တစ်ခုကို map လုပ်သောအခါ၊ ပေါင်းစပ်မှုသည် Hestia API ကို ခေါ်ယူ၍ အောက်ပါအတိုင်း အလုပ်လုပ်သည်:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Domain mapping ကို ဖယ်ရှားသောအခါ၊ အောက်ပါအတိုင်း အလုပ်လုပ်သည်:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Domain Mapping ဆက်တင်များရှိ "Auto-create www subdomain" ဆက်တင်ပေါ် မူတည်၍ `www.` alias ကိုလည်း ထည့်သွင်းခြင်း/ဖယ်ရှားခြင်း ပြုလုပ်နိုင်သည်။

## ကြိုတင်လိုအပ်ချက်များ
- သင့် WordPress installation ကို ညွှန်ပြထားသော Hestia Web Domain တစ်ခု ရှိနှင့်ပြီးဖြစ်ရမည်။ ပေါင်းစပ်မှုသည် ဤ base domain တွင် alias များကို ချိတ်ဆက်ပေးမည်ဖြစ်သည်။
- Hestia API အသုံးပြုခွင့် ဖွင့်ထားရမည်။ password သို့မဟုတ် API hash/token ဖြင့် အတည်ပြုဝင်ရောက်နိုင်သည်။

API အသုံးပြုခွင့် ဖွင့်ခြင်းနှင့် အတည်ပြုခြင်း အသေးစိတ်အတွက် Hestia ၏ REST API စာရွက်စာတမ်းကို ကြည့်ပါ:
https://hestiacp.com/docs/server-administration/rest-api.html

## ပြင်ဆင်သတ်မှတ်ခြင်း (Wizard → Integrations → Hestia)
အောက်ပါတန်ဖိုးများကို ဖြည့်သွင်းပါ:

- `WU_HESTIA_API_URL` (လိုအပ်သည်)
  - Base API endpoint ဖြစ်ပြီး ပုံမှန်အားဖြင့် `https://your-hestia-host:8083/api/` ဖြစ်သည်။
- `WU_HESTIA_API_USER` (လိုအပ်သည်)
  - API command များအတွက် အသုံးပြုမည့် Hestia user (များသောအားဖြင့် `admin`)။
- `WU_HESTIA_API_PASSWORD` သို့မဟုတ် `WU_HESTIA_API_HASH` (အနည်းဆုံး တစ်ခု)
  - အတည်ပြုခြင်းနည်းလမ်း တစ်ခုကို ရွေးချယ်ပါ: password သို့မဟုတ် API hash/token။
- `WU_HESTIA_ACCOUNT` (လိုအပ်သည်)
  - Hestia ရှိ Web Domain ၏ account (ပိုင်ရှင်); CLI ၏ ပထမ argument ဖြစ်သည်။
- `WU_HESTIA_WEB_DOMAIN` (လိုအပ်သည်)
  - သင့် WordPress ကို serve လုပ်နေသော ရှိနှင့်ပြီးဖြစ်သည့် Hestia Web Domain (alias များကို ဤနေရာတွင် ချိတ်ဆက်မည်)။
- `WU_HESTIA_RESTART` (ရွေးချယ်နိုင်သည်; default `yes`)
  - Alias ပြောင်းလဲမှုများပြီးနောက် service များကို restart/reload လုပ်မလား။

Wizard က ဤ constant များကို `wp-config.php` တွင် ထည့်သွင်းပေးနိုင်သည်၊ သို့မဟုတ် ကိုယ်တိုင် သတ်မှတ်နိုင်သည်။

## Setup ကို အတည်ပြုခြင်း
- Wizard ၏ "Testing" အဆင့်တွင်၊ plugin သည် API မှတစ်ဆင့် `v-list-web-domains <WU_HESTIA_ACCOUNT> json` ကို ခေါ်ယူသည်။ အောင်မြင်သော response ရရှိပါက ချိတ်ဆက်မှုနှင့် အတည်ပြုခြင်း မှန်ကန်ကြောင်း အတည်ပြုသည်။
- Domain တစ်ခုကို map လုပ်ပြီးနောက်၊ Hestia တွင် စစ်ဆေးပါ: Web > base domain > Aliases။ Alias အသစ် ထည့်သွင်းထားသည်ကို တွေ့ရမည်။

## မှတ်ချက်များနှင့် အကြံပြုချက်များ
- `WU_HESTIA_WEB_DOMAIN` သည် ရှိနှင့်ပြီးဖြစ်ရမည်ဖြစ်ပြီး `WU_HESTIA_ACCOUNT` က ပိုင်ဆိုင်ထားရမည်။
- SSL လိုအပ်ပါက၊ certificate များကို Hestia တွင် စီမံပါ။ ဤပေါင်းစပ်မှုသည် လက်ရှိတွင် alias များကိုသာ ကိုင်တွယ်သည်။
- သင်၏ Domain Mapping "www subdomain" ဆက်တင်ပေါ် မူတည်၍ plugin သည် `www.<domain>` ကိုလည်း ထည့်သွင်းခြင်း/ဖယ်ရှားခြင်း ပြုလုပ်နိုင်သည်။

## API ခေါ်ယူမှု ဥပမာ (cURL)
အောက်တွင် သဘောတရား ဥပမာတစ်ခု ဖော်ပြထားသည် (သင့်ပတ်ဝန်းကျင်နှင့် ကိုက်ညီအောင် ပြင်ဆင်ပါ)။ တိကျသော parameter များအတွက် တရားဝင် စာရွက်စာတမ်းကို ကိုးကားပါ။

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (သို့မဟုတ် &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (ထည့်သွင်းမည့် alias)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

ဖျက်ရန်အတွက်၊ `cmd=v-delete-web-domain-alias` နှင့် အတူတူ arg များကို အသုံးပြုပါ။

## ပြဿနာဖြေရှင်းခြင်း
- API မှ HTTP error: `WU_HESTIA_API_URL` သည် ရောက်ရှိနိုင်ပြီး `/api` ပါဝင်ကြောင်း အတည်ပြုပါ။
- Auth error များ: `WU_HESTIA_API_USER` နှင့် `WU_HESTIA_API_PASSWORD` သို့မဟုတ် `WU_HESTIA_API_HASH` မှန်ကန်ကြောင်း အတည်ပြုပါ။
- Log များတွင် "Missing account/base domain": `WU_HESTIA_ACCOUNT` နှင့် `WU_HESTIA_WEB_DOMAIN` သတ်မှတ်ထားပြီး Hestia တွင် မှန်ကန်ကြောင်း သေချာပါစေ။

## ကိုးကားချက်များ
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI ကိုးကားချက် (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
