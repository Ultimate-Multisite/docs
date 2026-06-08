---
title: စနစ်ထည့်သွင်းခြင်းနှင့် ပံ့ပိုးပေးသူဖွဲ့စည်းမှု
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Domain Seller: Setup နှင့် Provider ဖွဲ့စည်းပုံ

Domain Seller addon မှာ လိုအပ်တဲ့ အဆင့်တိုင်းကို လမ်းညွှန်ပေးတဲ့ setup wizard တစ်ခု ပါဝင်ပါတယ်။ ဒီစာမျက်နှာမှာ setup wizard ရဲ့ အဆင့်ဆင့် လုပ်ဆောင်ပုံနဲ့ နောက်ပိုင်းမှာ Provider တွေကို ဘယ်လို ဖွဲ့စည်းနိုင်မလဲ၊ ဒါမှမဟုတ် ပြန်လည်ပြင်ဆင်နိုင်မလဲဆိုတာကို ဖော်ပြထားပါတယ်။

## လိုအပ်ချက်များ (Requirements)

- **Multisite Ultimate** v2.4.12 သို့မဟုတ် အထက်၊ network-activated ဖြစ်ရမည်။
- **PHP** 7.4+
- အထောက်အပံ့ပေးထားတဲ့ registrar တစ်ခုအနည်းဆုံးအတွက် API credentials များ။

## ပထမဆုံးအကြိမ် Setup Wizard

ဒီ setup wizard ကို plugin ကို network-activate လုပ်တဲ့ ပထမဆုံးအကြိမ်မှာ အလိုအလျောက် စတင်ပါတယ်။ ဒါ့အပြင် **Network Admin › Ultimate Multisite › Domain Seller Setup** ကနေ ဘယ်အချိန်မဆို ဝင်ရောက် အသုံးပြုနိုင်ပါတယ်။

### အဆင့် ၁ — Provider တစ်ခု ရွေးချယ်ခြင်း

ချိတ်ဆက်လိုတဲ့ registrar ကို ရွေးချယ်ပါ။ အထောက်အပံ့ပေးထားတဲ့ ရွေးချယ်စရာများမှာ-

| Provider | DNS management | WHOIS privacy |
|---|---|---|
| OpenSRS | Yes | Yes |
| Namecheap | No | Yes (WhoisGuard, free) |
| GoDaddy | No | No |
| ResellerClub | Yes | No |
| NameSilo | No | No |
| Enom | Yes | No |

### အဆင့် ၂ — Credentials များ ထည့်သွင်းခြင်း

Provider တစ်ခုစီမှာ မတူညီတဲ့ credential fields တွေ ရှိပါတယ်။

**OpenSRS** — Username နဲ့ private key (OpenSRS Reseller Control Panel မှ)

**Namecheap** — Username နဲ့ API key (Account › Tools › API Access မှ)

**GoDaddy** — API key နဲ့ secret (developer.godaddy.com မှ)

**ResellerClub** — Reseller ID နဲ့ API key (ResellerClub control panel မှ)

**NameSilo** — API key (namesilo.com › Account › API Manager မှ)

**Enom** — Account ID နဲ့ API token

အသုံးပြုနိုင်တဲ့ နေရာမှာ **Sandbox mode** ကို စစ်ဆေးကြည့်ဖို့ အကြံပြုလိုပါတယ်။ ဒါက live မဖြစ်ခင် provider ရဲ့ test environment မှာ စမ်းသပ်နိုင်ပါတယ်။

### အဆင့် ၃ — ချိတ်ဆက်မှုကို စမ်းသပ်ခြင်း

**Test Connection** ကို နှိပ်ပါ။ ဒီ wizard က credentials တွေနဲ့ ချိတ်ဆက်မှု ရှိ၊ မရှိ စစ်ဆေးဖို့အတွက် API call အလေးချိန်နည်းတဲ့ အချက်အလက်တစ်ခုကို ပို့ပေးပါလိမ့်မယ်။ ဆက်လက်လုပ်ဆောင်ခြင်းမပြုမီ credential ပြဿနာများရှိပါက ပြင်ဆင်ပေးပါ။

### အဆင့် ၄ — TLD များကို တင်သွင်းခြင်း (Import TLDs)

ဆက်သွယ်ထားတဲ့ provider ကနေ ရရှိနိုင်တဲ့ TLD အားလုံးနဲ့ wholesale pricing တွေကို ဆွဲယူဖို့ **Import TLDs** ကို နှိပ်ပါ။ ဒါက domain products တွေမှာ အသုံးပြုမယ့် TLD list ကို ဖြည့်ပေးပါတယ်။ TLD catalog ကြီးတဲ့ provider တွေအတွက် ဒီ import လုပ်တာက စက္ကန့် ၃၀ ကနေ ၆၀ အထိ ကြာနိုင်ပါတယ်။

TLD တွေကို တစ်ရက်ကို တစ်ကြိမ် အချိန်ဇယားဆွဲထားတဲ့ cron job ကနေ အလိုအလျောက် ပြန်လည်ချိန်ညှိပေးမှာ ဖြစ်ပါတယ်။

### အဆင့် ၅ — domain product တစ်ခု ဖန်တီးခြင်း

ဒီ wizard က 10% markup ပါတဲ့ default catch-all domain product တစ်ခုကို ဖန်တီးပေးပါတယ်။ ဒီ product ကို ချက်ချင်းပဲ တည်းဖြတ်နိုင်ပါတယ်၊ ဒါမှမဟုတ် ကျော်လွန်ပြီး **Ultimate Multisite › Products** အောက်မှာ ကိုယ်တိုင် product တွေ ဖန်တီးနိုင်ပါတယ်။

အပြည့်အစုံ product ဖွဲ့စည်းပုံ လမ်းညွှန်အတွက် [Domain Products and Pricing](./domain-products) ကို ကြည့်ရှုနိုင်ပါတယ်။

---

## Provider တစ်ခုကို ပြန်လည်ဖွဲ့စည်းခြင်း (Reconfiguring a provider)

**Network Admin › Ultimate Multisite › Settings › Domain Seller** ကို သွားပါ (သို့မဟုတ် plugin list မှာ **Settings** ကို နှိပ်ပါ)။

ဒီ settings page မှာ အောက်ပါအရာတွေ ပါဝင်ပါတယ်-

- **Enable domain selling** — ဒီ feature အားလုံးကို ဖွင့်/ပိတ် လုပ်နိုင်ပါတယ်။
- **Default provider** — domain ရှာဖွေမှုတွေနဲ့ product အသစ်တွေအတွက် အသုံးပြုမယ့် provider ဖြစ်ပါတယ်။
- **Max TLDs per search** — customer တစ်ယောက်က ရှာဖွေတဲ့အခါ TLD ဘယ်နှစ်ခု စစ်ဆေးမလဲ။ တန်ဖိုးများလေ ရွေးချယ်စရာ ပိုများပေမယ့် ပိုနှေးကွေးပါတယ်။
- **Availability cache duration** — ရရှိနိုင်မှုနဲ့ pricing ရလဒ်တွေကို ဘယ်လောက်ကြာကြာ cache လုပ်မလဲ။ တန်ဖိုးနည်းလေ ပိုတိကျပေမယ့် API calls ပိုများစေပါတယ်။
- **Manage domain products** — Products list ကို အမြန်ဝင်ရောက်နိုင်တဲ့ link ပါ။
- **Configure providers** — Provider တွေကို ထည့်ဖို့ ဒါမှမဟုတ် ပြန်လည်ဖွဲ့စည်းဖို့ Integration Wizard ကို ဖွင့်ပေးပါတယ်။

### ဒုတိယ Provider တစ်ခု ထပ်ထည့်ခြင်း

**Configure providers** ကို နှိပ်ပြီး registrar အသစ်အတွက် wizard ကို နောက်တစ်ကြိမ် run ပေးပါ။ Provider အများအပြားကို တစ်ပြိုင်နက်တည်း ဖွဲ့စည်းထားနိုင်ပါတယ်။ domain product တစ်ခုစီကို သီးသန့် provider တစ်ခုနဲ့ ချုပ်ရမယ်၊ ဒါမှမဟုတ် default မှာပဲ ထားခဲ့နိုင်ပါတယ်။

### TLD များကို ကိုယ်တိုင် Sync လုပ်ခြင်း

settings page မှာ၊ ဖွဲ့စည်းထားတဲ့ provider တစ်ခုဘေးက **Sync TLDs** ကို နှိပ်ပြီး နောက်ဆုံးပေါ် pricing တွေကို ဆွဲယူနိုင်ပါတယ်။ Provider တစ်ခုက wholesale pricing ကို update လုပ်လိုက်တဲ့အခါ ဒါမှမဟုတ် TLD အသစ်တွေ ထပ်ထည့်လိုက်တဲ့အခါ ဒါဟာ အသုံးဝင်ပါတယ်။

---

## Logs

Provider တစ်ခုစီက သူ့ရဲ့ log channel ကိုယ်ပိုင် ရေးမှတ်ပါတယ်။ Logs တွေကို **Network Admin › Ultimate Multisite › Logs** အောက်မှာ ကြည့်ရှုနိုင်ပါတယ်-

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | မှတ်ပုံတင်မှု ကြိုးပမ်းမှုအားလုံး (အောင်မြင်သည်/ကျရှုံးသည်) |
| `domain-seller-renewal` | သက်တမ်းတိုးခြင်း job ရလဒ်များ |
| `domain-seller-opensrs` | OpenSRS API လုပ်ဆောင်မှု အစစ်အမှန်များ |
| `domain-seller-namecheap` | Namecheap API လုပ်ဆောင်မှု အစစ်အမှန်များ |
| `domain-seller-godaddy` | GoDaddy API လုပ်ဆောင်မှု အစစ်အမှန်များ |
| `domain-seller-resellerclub` | ResellerClub API လုပ်ဆောင်မှု အစစ်အမှန်များ |
| `domain-seller-namesilo` | NameSilo API လုပ်ဆောင်မှု အစစ်အမှန်များ |
| `domain-seller-enom` | Enom API လုပ်ဆောင်မှု အစစ်အမှန်များ |
