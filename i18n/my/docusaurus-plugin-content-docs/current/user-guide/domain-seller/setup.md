---
title: တပ်ဆင်ခြင်းနှင့် ပံ့ပိုးသူ စီစဉ်သတ်မှတ်ခြင်း
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# ဒိုမိန်း ရောင်းချသူ- စတင်ပြင်ဆင်ခြင်းနှင့် ပံ့ပိုးသူ ပြင်ဆင်သတ်မှတ်ခြင်း

ဒိုမိန်း ရောင်းချသူ addon တွင် လိုအပ်သော အဆင့်တိုင်းကို လမ်းညွှန်ပေးသည့် စတင်ပြင်ဆင်မှု wizard ပါဝင်သည်။ ဤစာမျက်နှာတွင် wizard လုပ်ငန်းစဉ်နှင့် နောက်ပိုင်းတွင် ပံ့ပိုးသူများကို ပြင်ဆင်သတ်မှတ်ခြင်း သို့မဟုတ် ပြန်လည်ပြင်ဆင်သတ်မှတ်ခြင်းနည်းလမ်းကို ဖော်ပြထားသည်။

## လိုအပ်ချက်များ {#requirements}

- **Multisite Ultimate** v2.4.12 သို့မဟုတ် အထက်၊ network-activated ဖြစ်ရမည်
- **PHP** 7.4+
- ပံ့ပိုးထားသော registrar အနည်းဆုံးတစ်ခုအတွက် API credentials

## ပထမဆုံးအသုံးပြုချိန် စတင်ပြင်ဆင်မှု wizard {#first-run-setup-wizard}

plugin ကို ပထမဆုံး network-activate လုပ်သည့်အခါ စတင်ပြင်ဆင်မှု wizard သည် အလိုအလျောက် စတင်သည်။ ၎င်းကို **Network Admin › Ultimate Multisite › ဒိုမိန်း ရောင်းချသူ စတင်ပြင်ဆင်မှု** မှ အချိန်မရွေးလည်း အသုံးပြုနိုင်သည်။

### အဆင့် ၁ — ပံ့ပိုးသူ ရွေးချယ်ပါ {#step-1--choose-a-provider}

ချိတ်ဆက်လိုသော registrar ကို ရွေးချယ်ပါ။ ပံ့ပိုးထားသော ရွေးချယ်စရာများ-

| ပံ့ပိုးသူ | DNS စီမံခန့်ခွဲမှု | WHOIS ကိုယ်ရေးလုံခြုံမှု |
|---|---|---|
| OpenSRS | ရှိသည် | ရှိသည် |
| Namecheap | မရှိပါ | ရှိသည် (WhoisGuard၊ အခမဲ့) |
| HostAfrica | ရှိသည် | ရှိသည် (ID ကာကွယ်မှု) |
| Openprovider | ရှိသည် | ရှိသည် |
| Hostinger | hosted domains များအတွက် core Hostinger domain mapping မှတစ်ဆင့် | ရှိသည် |
| GoDaddy | မရှိပါ | မရှိပါ |
| ResellerClub | ရှိသည် | မရှိပါ |
| NameSilo | မရှိပါ | မရှိပါ |
| Enom | ရှိသည် | မရှိပါ |

### အဆင့် ၂ — credentials ထည့်ပါ {#step-2--enter-credentials}

ပံ့ပိုးသူတိုင်းတွင် credential field များ ကွဲပြားသည်-

**OpenSRS** — Username နှင့် private key (OpenSRS Reseller Control Panel မှ)

**Namecheap** — Username နှင့် API key (Account › Tools › API Access မှ)

**HostAfrica** — HostAfrica reseller module မှ Domains Reseller API endpoint နှင့် credentials။ သီးခြား sandbox endpoint ကို လက်ရှိတွင် မှတ်တမ်းတင်ထားခြင်း မရှိသေးပါ။ live registrations မလုပ်ဆောင်မီ လုံခြုံသော read-only စစ်ဆေးမှုများဖြင့် စမ်းသပ်ပါ။

**Openprovider** — API access ဖွင့်ထားသော Username နှင့် password။ ရွေးချယ်နိုင်သော sandbox mode သည် Openprovider sandbox API ကို အသုံးပြုပြီး၊ ရွေးချယ်နိုင်သော default customer handle ကို registrations များအတွက် ပြန်လည်အသုံးပြုနိုင်သည်။

**Hostinger** — core Hostinger integration မှ shared Hostinger hPanel API token။ အလားတူ token သည် core domain mapping နှင့် ဒိုမိန်း ရောင်းချသူ registration လုပ်ငန်းများကို အလုပ်လုပ်စေသည်။

**GoDaddy** — API key နှင့် secret (developer.godaddy.com မှ)

**ResellerClub** — Reseller ID နှင့် API key (ResellerClub control panel မှ)

**NameSilo** — API key (namesilo.com › Account › API Manager မှ)

**Enom** — Account ID နှင့် API token

live မလုပ်ဆောင်မီ ပံ့ပိုးသူ၏ test environment တွင် စမ်းသပ်ရန် ရရှိနိုင်သည့်နေရာများတွင် **Sandbox mode** ကို အမှန်ခြစ်ပါ။

### အဆင့် ၃ — ချိတ်ဆက်မှုကို စမ်းသပ်ပါ {#step-3--test-the-connection}

**ချိတ်ဆက်မှု စမ်းသပ်ရန်** ကို နှိပ်ပါ။ wizard သည် credentials နှင့် ချိတ်ဆက်နိုင်မှုကို အတည်ပြုရန် ပေါ့ပါးသော API call တစ်ခု ပို့သည်။ ဆက်မလုပ်ဆောင်မီ credential ပြဿနာများကို ပြင်ဆင်ပါ။

### အဆင့် ၄ — TLDs တင်သွင်းပါ {#step-4--import-tlds}

ချိတ်ဆက်ထားသော ပံ့ပိုးသူထံမှ ရရှိနိုင်သော TLDs အားလုံးနှင့် wholesale pricing ကို ဆွဲယူရန် **TLDs တင်သွင်းရန်** ကို နှိပ်ပါ။ ၎င်းသည် domain products များအသုံးပြုသည့် TLD စာရင်းကို ဖြည့်သွင်းပေးသည်။ TLD catalog ကြီးမားသော ပံ့ပိုးသူများအတွက် တင်သွင်းမှုသည် ၃၀–၆၀ စက္ကန့် ကြာနိုင်သည်။

TLDs များကို scheduled cron job မှတစ်ဆင့် တစ်နေ့တစ်ကြိမ် အလိုအလျောက် ပြန်လည် sync လည်း လုပ်သည်။

### အဆင့် ၅ — ဒိုမိန်း product တစ်ခု ဖန်တီးပါ {#step-5--create-a-domain-product}

wizard သည် ၁၀% markup ပါသော default catch-all domain product တစ်ခု ဖန်တီးသည်။ ဤ product ကို ချက်ချင်း ပြင်ဆင်နိုင်သည်၊ သို့မဟုတ် ကျော်သွားပြီး **Ultimate Multisite › Products** အောက်တွင် products များကို ကိုယ်တိုင် ဖန်တီးနိုင်သည်။

product ပြင်ဆင်သတ်မှတ်မှု လမ်းညွှန်အပြည့်အစုံအတွက် [ဒိုမိန်း Products နှင့် စျေးနှုန်းသတ်မှတ်ခြင်း](./domain-products) ကို ကြည့်ပါ။

---

## ပံ့ပိုးသူကို ပြန်လည်ပြင်ဆင်သတ်မှတ်ခြင်း {#reconfiguring-a-provider}

**Network Admin › Ultimate Multisite › Settings › ဒိုမိန်း ရောင်းချသူ** သို့ သွားပါ (သို့မဟုတ် plugin စာရင်းရှိ **Settings** ကို နှိပ်ပါ)။

settings စာမျက်နှာတွင် ပါဝင်သည်များ-

- **ဒိုမိန်းရောင်းချခြင်း ဖွင့်ရန်** — feature တစ်ခုလုံးကို ဖွင့်/ပိတ်ရန် toggle
- **Default ပံ့ပိုးသူ** — domain searches နှင့် new products များအတွက် အသုံးပြုသော ပံ့ပိုးသူ
- **ရှာဖွေမှုတစ်ကြိမ်လျှင် အများဆုံး TLDs** — customer ရှာဖွေသည့်အခါ စစ်ဆေးမည့် TLD အရေအတွက်။ တန်ဖိုးမြင့်လေလေ ရွေးချယ်စရာ ပိုများလေလေ ဖြစ်သော်လည်း ပိုနှေးသည်
- **ရရှိနိုင်မှု cache ကြာချိန်** — availability နှင့် pricing results များကို cache လုပ်မည့် ကြာချိန်။ တန်ဖိုးနည်းလေလေ ပိုတိကျသော်လည်း API calls များ တိုးလာသည်
- **ဒိုမိန်း products စီမံခန့်ခွဲရန်** — Products စာရင်းသို့ မြန်ဆန်သော link
- **ပံ့ပိုးသူများ ပြင်ဆင်သတ်မှတ်ရန်** — ပံ့ပိုးသူများ ထည့်ရန် သို့မဟုတ် ပြန်လည်ပြင်ဆင်သတ်မှတ်ရန် Integration Wizard ကို ဖွင့်သည်

### ဒုတိယ ပံ့ပိုးသူ ထည့်ခြင်း {#adding-a-second-provider}

**ပံ့ပိုးသူများ ပြင်ဆင်သတ်မှတ်ရန်** ကို နှိပ်ပြီး registrar အသစ်အတွက် wizard ကို ထပ်မံ run ပါ။ ပံ့ပိုးသူများစွာကို တစ်ပြိုင်နက် ပြင်ဆင်သတ်မှတ်ထားနိုင်သည်။ domain product တစ်ခုချင်းစီကို သတ်မှတ်ထားသော ပံ့ပိုးသူတစ်ခုနှင့် ချိတ်ပါ၊ သို့မဟုတ် default တွင် ထားပါ။

### TLDs ကို ကိုယ်တိုင် sync လုပ်ခြင်း {#syncing-tlds-manually}

settings စာမျက်နှာတွင် နောက်ဆုံး pricing ကို ဆွဲယူရန် ပြင်ဆင်သတ်မှတ်ထားသော ပံ့ပိုးသူ မည်သည့်တစ်ခုမဆို၏ ဘေးရှိ **TLDs sync လုပ်ရန်** ကို နှိပ်ပါ။ ပံ့ပိုးသူတစ်ဦးက wholesale pricing ကို update လုပ်ပြီးနောက် သို့မဟုတ် TLDs အသစ်များ ထည့်ပြီးနောက် ၎င်းသည် အသုံးဝင်သည်။

---

## Logs {#logs}

ပံ့ပိုးသူတိုင်းသည် မိမိ၏ log channel သို့ ရေးသားသည်။ Logs များကို **Network Admin › Ultimate Multisite › Logs** အောက်တွင် ကြည့်နိုင်သည်-

| Log channel | ပါဝင်သောအကြောင်းအရာ |
|---|---|
| `domain-seller-registration` | registration ကြိုးပမ်းမှုအားလုံး (အောင်မြင်မှုနှင့် မအောင်မြင်မှု) |
| `domain-seller-renewal` | renewal job results |
| `domain-seller-opensrs` | OpenSRS API လုပ်ဆောင်ချက် အကြမ်း |
| `domain-seller-namecheap` | Namecheap API လုပ်ဆောင်ချက် အကြမ်း |
| `domain-seller-hostafrica` | HostAfrica API လုပ်ဆောင်ချက် အကြမ်း |
| `domain-seller-openprovider` | Openprovider API လုပ်ဆောင်ချက် အကြမ်း |
| `domain-seller-hostinger` | Hostinger API လုပ်ဆောင်ချက် အကြမ်း |
| `domain-seller-godaddy` | GoDaddy API လုပ်ဆောင်ချက် အကြမ်း |
| `domain-seller-resellerclub` | ResellerClub API လုပ်ဆောင်ချက် အကြမ်း |
| `domain-seller-namesilo` | NameSilo API လုပ်ဆောင်ချက် အကြမ်း |
| `domain-seller-enom` | Enom API လုပ်ဆောင်ချက် အကြမ်း |

---

## ပံ့ပိုးသူ စွမ်းဆောင်နိုင်မှု မှတ်ချက်များ {#provider-capability-notes}

registrar API တိုင်းက တူညီသော လုပ်ဆောင်ချက်များကို ဖော်ထုတ်ပေးခြင်း မဟုတ်ပါ။ addon သည် ပံ့ပိုးမထားသော လုပ်ဆောင်ချက်များကို တိတ်တဆိတ် မအောင်မြင်စေဘဲ admin-facing errors များဖြင့် ရှင်းလင်းစွာ ပြသပေးသည်။

- **HostAfrica** သည် lookup, TLD/pricing sync, registration, renewal, transfer, nameserver updates, DNS records, EPP codes, registrar lock နှင့် ID protection အပါအဝင် live reseller လုပ်ငန်းစဉ်အကျယ်ပြန့်ဆုံးကို ပံ့ပိုးသည်။
- **Openprovider** သည် reseller စျေးနှုန်းဖြင့် TLD sync, registration, renewal, transfers, nameserver updates, DNS zones, EPP codes, registrar lock နှင့် WHOIS privacy တို့ကို ပံ့ပိုးသည်။ ၎င်းသည် သက်တမ်းတို bearer token ဖြင့် အထောက်အထားစစ်ဆေးပြီး addon က အလိုအလျောက် refresh လုပ်သည်။
- **Hostinger** သည် shared hPanel API token မှတစ်ဆင့် availability search, registration, portfolio lookup, nameserver updates, registrar lock နှင့် WHOIS privacy တို့ကို ပံ့ပိုးသည်။ Hostinger ၏ public Domains API သည် reseller/wholesale pricing, inbound transfer, explicit renewal, သို့မဟုတ် EPP-code retrieval ကို မဖော်ပြပေးပါ။ renewals များသည် auto-renew သာဖြစ်သည်။
