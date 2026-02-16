---
title: Multisite Setup Wizard
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite Setup Wizard

Ultimate Multisite မှာ built-in wizard တစ်ခုပါဝင်ပြီး၊ သာမန် WordPress installation ကို WordPress Multisite network အဖြစ် အလိုအလျောက်ပြောင်းလဲပေးပါတယ်။ ဒါကြောင့် `wp-config.php` ကို ကိုယ်တိုင်ပြင်ဆင်တာနဲ့ database commands တွေ run တာတွေ မလုပ်ရတော့ပါဘူး။

:::tip
သင့် WordPress installation က Multisite network အနေနဲ့ အလုပ်လုပ်နေပြီးသားဆိုရင်၊ ဒီအဆင့်ကို လုံးဝကျော်သွားလို့ရပါတယ်။ Multisite မဖွင့်ရသေးတဲ့အခါမှာသာ wizard ပေါ်လာပါတယ်။
:::

## Wizard က ဘယ်အချိန်မှာ ပေါ်လာမလဲ?

သာမန် (non-Multisite) WordPress installation မှာ Ultimate Multisite ကို activate လုပ်တဲ့အခါ၊ plugin က Multisite မဖွင့်ရသေးဘူးလို့ သိရှိပြီး ပုံမှန် setup wizard အစား Multisite Setup Wizard ကို အလိုအလျောက် redirect လုပ်ပေးပါတယ်။

**WP Admin > Ultimate Multisite > Multisite Setup** ကနေလည်း တိုက်ရိုက်ဝင်ရောက်နိုင်ပါတယ်။

## ကြိုတင်လိုအပ်ချက်များ

Wizard ကို မ run ခင်၊ အောက်ပါအချက်တွေကို သေချာပါစေ -

- သင့် WordPress installation အတွက် **administrator access** ရှိရပါမယ်
- သင့် server ရဲ့ `wp-config.php` ဖိုင်ကို web server က **ရေးသားခွင့်ရှိရပါမယ်**
- သင့်ဖိုင်တွေနဲ့ database ကို **မကြာသေးမီက backup** ယူထားရပါမယ်

:::warning
Wizard က သင့် `wp-config.php` ဖိုင်ကို ပြင်ဆင်ပြီး database table အသစ်တွေ ဖန်တီးပါတယ်။ ဆက်မလုပ်ခင် backup အမြဲတမ်းယူထားပါ။
:::

## အဆင့် ၁: ကြိုဆိုခြင်း

ပထမဆုံးစခရင်က WordPress Multisite ဆိုတာ ဘာလဲနဲ့ wizard က ဘာလုပ်မလဲဆိုတာကို ရှင်းပြပါတယ် -

- သင့် WordPress configuration မှာ Multisite feature ကို ဖွင့်ပေးခြင်း
- လိုအပ်တဲ့ network database table တွေ ဖန်တီးခြင်း
- လိုအပ်တဲ့ multisite constant တွေကို `wp-config.php` ထဲ ထည့်ခြင်း
- Ultimate Multisite ကို network တစ်ခုလုံးမှာ network-activate လုပ်ခြင်း

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

ဆက်လုပ်ရန် **Continue** ကို နှိပ်ပါ။

## အဆင့် ၂: Network Configuration

ဒီအဆင့်မှာ သင့် network setting တွေကို configure လုပ်ခိုင်းပါတယ်။

### Site Structure

သင့် network site တွေကို ဘယ်လိုစီစဥ်မလဲ ရွေးချယ်ပါ -

- **Sub-domains** (အကြံပြုထားသည်) — Site တွေက သူတို့ရဲ့ ကိုယ်ပိုင် subdomain ရရှိမယ်၊ ဥပမာ `site1.yourdomain.com`
- **Sub-directories** — Site တွေကို path တွေအဖြစ် ဖန်တီးမယ်၊ ဥပမာ `yourdomain.com/site1`

:::note
Sub-domains ကို ရွေးချယ်ရင်၊ သင့် domain အတွက် **wildcard DNS** နဲ့ **wildcard SSL certificate** configure လုပ်ရပါမယ်။ managed WordPress host အများစုက ဒါကို အလိုအလျောက် ကိုင်တွယ်ပေးပါတယ်။ အသေးစိတ်နှိုင်းယှဉ်ချက်အတွက် [Ultimate Multisite 101](./ultimate-multisite-101) ကို ကြည့်ပါ။
:::

### Network Title

သင့် network အတွက် အမည်တစ်ခု ထည့်ပါ။ ဒါက သင့်လက်ရှိ site title နောက်မှာ "Network" ထည့်ထားတဲ့ default အနေနဲ့ ပေါ်လာပါတယ်။ နောက်မှ network settings ကနေ ပြောင်းလဲနိုင်ပါတယ်။

### Network Admin Email

Network administration notification တွေအတွက် သုံးမယ့် email လိပ်စာပါ။ ဒါက လက်ရှိ user ရဲ့ email လိပ်စာကို default အနေနဲ့ သုံးပါတယ်။

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Field တွေ ဖြည့်ပြီးရင်၊ ဆက်လုပ်ရန် **Continue** ကို နှိပ်ပါ။

## အဆင့် ၃: Installation

စတင်ရန် **Install** ခလုတ်ကို နှိပ်ပါ။ Wizard က အဆင့်ငါးဆင့်ကို အစီအစဥ်အတိုင်း အလိုအလျောက်လုပ်ဆောင်ပြီး၊ တစ်ခုချင်းစီရဲ့ progress ကို real-time မှာ ပြသပါတယ် -

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| အဆင့် | ရှင်းလင်းချက် |
|------|-------------|
| **Enable Multisite** | `wp-config.php` ထဲကို `WP_ALLOW_MULTISITE` constant ထည့်ပါတယ် |
| **Create Network** | Multisite database table တွေ (`wp_site`, `wp_sitemeta`, `wp_blogs` စသည်) ဖန်တီးပြီး သင့် network configuration နဲ့ ဖြည့်ပေးပါတယ် |
| **Update Configuration** | နောက်ဆုံး multisite constant တွေ (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE` စသည်) ကို `wp-config.php` ထဲ ထည့်ပါတယ် |
| **Fix Cookies** | Activation ပြီးနောက် authentication ပြဿနာတွေ မဖြစ်အောင် network metadata ထဲမှာ site URL မှန်ကန်ကြောင်း သေချာစေပါတယ် |
| **Network Activate Plugin** | Ultimate Multisite ကို network တစ်ခုလုံးမှာ လုပ်ဆောင်နိုင်အောင် network-activate လုပ်ပါတယ် |

အဆင့်တစ်ခုချင်းစီက ဒီ status တွေထဲက တစ်ခုကို ပြသပါတယ် -

- **Pending** — လုပ်ဆောင်ရန် စောင့်ဆိုင်းနေသည်
- **Installing...** — လက်ရှိ လုပ်ဆောင်နေသည်
- **Success!** — အောင်မြင်စွာ ပြီးဆုံးသွားပြီ
- **Error message** — Error တစ်ခု ဖြစ်ပွားခဲ့သည် (message က ပြဿနာကို ဖော်ပြပေးပါမယ်)

အဆင့်အားလုံး အောင်မြင်စွာပြီးဆုံးသွားတဲ့အခါ၊ item တစ်ခုချင်းစီအတွက် အစိမ်းရောင် "Success!" status ကို မြင်ရပါမယ် -

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

ပြီးရင် wizard က completion screen ကို အလိုအလျောက် ဆက်သွားပါမယ်။

## အဆင့် ၄: ပြီးဆုံးခြင်း

Installation ပြီးဆုံးတဲ့အခါ၊ WordPress Multisite ဖွင့်ပြီးပြီဆိုတဲ့ success message ကို မြင်ရပါမယ်။

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

အခု သင့် WaaS platform ကို configure လုပ်ဖို့ (ကုမ္ပဏီအသေးစိတ်အချက်အလက်များ၊ default content၊ payment gateway များ စသည်) Ultimate Multisite setup wizard နဲ့ ဆက်လုပ်နိုင်ပါပြီ။

:::note
Multisite installation ပြီးဆုံးပြီးနောက်၊ သင့် browser က အသစ်ဖွင့်လိုက်တဲ့ network admin ကနေ redirect လုပ်ပါမယ်။ Multisite environment အတွက် authentication cookie တွေ update လုပ်တဲ့အတွက် ထပ်မံ login ဝင်ရပါမယ်။
:::

## Manual Setup Fallback

Wizard က သင့် `wp-config.php` ဖိုင်ကို ရေးသားလို့မရရင် (file permission တွေ သို့မဟုတ် server ကန့်သတ်ချက်တွေကြောင့်)၊ ကိုယ်တိုင်ထည့်ရမယ့် code အတိအကျကို ပြသပေးပါမယ် -

1. `/* That's all, stop editing! */` လိုင်းအထက်မှာ ထည့်ရမယ့် **wp-config.php constant များ**
2. သင်ရွေးချယ်ထားတဲ့ site structure (subdomain သို့မဟုတ် subdirectory) အတွက် သင့်လျော်တဲ့ **.htaccess rewrite rule များ**

Manual ပြောင်းလဲမှုတွေ လုပ်ပြီးရင်၊ page ကို refresh လုပ်ပါ၊ wizard က multisite အခုဖွင့်ပြီးပြီလို့ သိရှိပါမယ်။

## ပြဿနာဖြေရှင်းခြင်း

### Wizard က wp-config.php ရေးသားလို့မရဘူးလို့ ပြောနေတယ်

သင့် web server process က `wp-config.php` ဖိုင်ကို ရေးသားခွင့် ရှိဖို့လိုပါတယ်။ ဒီလိုလုပ်နိုင်ပါတယ် -

- File permission တွေကို ယာယီ `644` သို့မဟုတ် `666` သို့ ပြောင်းပါ
- Wizard ပေးထားတဲ့ manual setup fallback ညွှန်ကြားချက်တွေကို သုံးပါ
- သင့် hosting provider ကို အကူအညီတောင်းပါ

### Setup ပြီးနောက် site တွေကို ဝင်လို့မရဘူး (subdomain များ)

Subdomain structure ကို ရွေးထားရင်၊ သင့် domain အတွက် **wildcard DNS** configure လုပ်ရပါမယ်။ DNS record တစ်ခု ထည့်ပါ -

```
Type: A (or CNAME)
Host: *
Value: [your server IP]
```

ဒါကို ဘယ်လို configure လုပ်ရမလဲ မသေချာရင် သင့် hosting provider ကို မေးပါ။

### Setup ပြီးနောက် authentication ပြဿနာများ

Multisite setup ပြီးနောက် logout ဖြစ်သွားတာ သို့မဟုတ် cookie error တွေ ကြုံရရင် -

1. Site အတွက် သင့် browser cookie တွေကို ရှင်းပါ
2. `yourdomain.com/wp-login.php` မှာ ထပ်မံ login ဝင်ပါ
3. ပြဿနာ ဆက်ရှိနေရင်၊ သင့် `wp-config.php` မှာ `COOKIE_DOMAIN` ကို `false` လို့ သတ်မှတ်ထားခြင်း ရှိ/မရှိ စစ်ပါ — ဒါက subdomain multisite installation တွေမှာ သိထားတဲ့ ပြဿနာတစ်ခုပါ

### Installation အတွင်း အဆင့်တစ်ခု fail ဖြစ်သွားတယ်

Installation အဆင့်တစ်ခုက error ပြနေရင် -

1. ပြသထားတဲ့ error message ကို မှတ်ထားပါ
2. Configuration အဆင့်သို့ ပြန်သွားပြီး ထပ်ကြိုးစားပါ
3. Error ဆက်ရှိနေရင်၊ အသေးစိတ်အတွက် သင့် server ရဲ့ PHP error log ကို စစ်ပါ
4. ပြီးသွားပြီးသား အဆင့်တွေကို နောက်ထပ် run တဲ့အခါ ကျော်သွားပါမယ် (installer က idempotent ဖြစ်ပါတယ်)
