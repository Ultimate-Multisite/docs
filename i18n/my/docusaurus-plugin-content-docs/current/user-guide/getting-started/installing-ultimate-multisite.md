---
title: Ultimate Multisite ကို ထည့်သွင်းခြင်း
sidebar_position: 12
_i18n_hash: 400c7f9fc01ce3a8275a1710ef7e903a
---
# Ultimate Multisite ကို ထည့်သွင်းခြင်း

:::note
ဤသင်ခန်းစာသည် သင့်တွင် WordPress Multisite ကို ထည့်သွင်းပြီး configure လုပ်ထားပြီးဖြစ်သည်ဟု ယူဆထားပါသည်။ လုပ်နည်းကို လေ့လာလိုပါက WP Beginner မှ [ဤသင်ခန်းစာ](https://www.wpbeginner.com/glossary/multisite/) ကို ကြည့်ရှုပါ။
:::

## Plugin ကို ထည့်သွင်းခြင်း

Ultimate Multisite ကို [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) တွင် အခမဲ့ရယူနိုင်ပါသည်။

သင့် **Network Admin Dashboard** မှ **Plugins → Add New Plugin** သို့ သွားပါ။

![Network Admin Add New Plugin စာမျက်နှာ](/img/installation/add-new-plugin.png)

**"Ultimate Multisite"** (တိကျစွာရှာဖွေရန် quotation marks နှင့်) ဟု ရှာပါ၊ ပထမဆုံး ရလဒ်အဖြစ် ပေါ်လာပါမည်။ **Install Now** ကို နှိပ်ပါ။

![Ultimate Multisite ပြသနေသော ရှာဖွေမှုရလဒ်များ](/img/installation/search-ultimate-multisite.png)

ထည့်သွင်းပြီးသည်နှင့် သင့် network တစ်ခုလုံးတွင် plugin ကို အသက်သွင်းရန် **Network Activate** ကို နှိပ်ပါ။

![Plugin ထည့်သွင်းပြီး Network Activate ခလုတ်ပါသော](/img/installation/plugin-installed.png)

အသက်သွင်းပြီးနောက် Setup Wizard သို့ အလိုအလျောက် ရောက်သွားပါမည်။

![Plugin အသက်သွင်းပြီး wizard သို့ ရောက်သွားသည်](/img/installation/plugin-activated.png)

## Setup Wizard

Setup Wizard သည် Ultimate Multisite ကို မိနစ် ၁၀ ခန့်အတွင်း configure လုပ်ရာတွင် လမ်းညွှန်ပေးပါမည်။

### ကြိုဆိုပါသည်

စတင်ရန် **Get Started** ကို နှိပ်ပါ။

![Setup Wizard ကြိုဆိုမှု မျက်နှာပြင်](/img/installation/wizard-welcome.png)

### ထည့်သွင်းမှုမတိုင်မီ စစ်ဆေးခြင်းများ

ဤအဆင့်သည် သင့်စနစ်အချက်အလက်နှင့် WordPress ထည့်သွင်းမှုကို Ultimate Multisite ၏ လိုအပ်ချက်များနှင့် ကိုက်ညီမှုရှိမရှိ စစ်ဆေးပါသည်။ အားလုံးကောင်းမွန်ပါက **Go to the Next Step** ကို နှိပ်ပါ။

![စနစ်လိုအပ်ချက်များ ပြသနေသော ထည့်သွင်းမှုမတိုင်မီ စစ်ဆေးခြင်းများ](/img/installation/wizard-pre-install-checks.png)

### ထည့်သွင်းခြင်း

Installer သည် လိုအပ်သော database tables များနှင့် Ultimate Multisite အလုပ်လုပ်ရန် လိုအပ်သော `sunrise.php` ဖိုင်ကို တည်ဆောက်ပါမည်။ ဆက်လက်ဆောင်ရွက်ရန် **Install** ကို နှိပ်ပါ။

![Database tables နှင့် sunrise.php ပြသနေသော ထည့်သွင်းခြင်း အဆင့်](/img/installation/wizard-installation.png)

### သင့်ကုမ္ပဏီ

သင့်ကုမ္ပဏီအချက်အလက်များကို ဖြည့်သွင်းပြီး မူရင်းငွေကြေးကို သတ်မှတ်ပါ။ ဤအချက်အလက်များကို သင့် WaaS platform တစ်လျှောက်တွင် အသုံးပြုပါမည်။ ပြီးသွားသောအခါ **Continue** ကို နှိပ်ပါ။

![သင့်ကုမ္ပဏီ configure လုပ်ခြင်း အဆင့်](/img/installation/wizard-your-company.png)

### မူရင်း Content

ဤအဆင့်တွင် ကြိုတင်ပြင်ဆင်ထားသော templates၊ products နှင့် အခြား starter content များကို ထည့်သွင်းနိုင်ပါသည်။ Ultimate Multisite ၏ features များနှင့် ရင်းနှီးကျွမ်းဝင်စေရန် အကောင်းဆုံးနည်းလမ်းတစ်ခုဖြစ်ပါသည်။ မူရင်း content ထည့်ရန် **Install** ကို နှိပ်ပါ၊ သို့မဟုတ် အစကနေစတင်လိုပါက ဤအဆင့်ကို ကျော်သွားပါ။

![မူရင်း content ထည့်သွင်းခြင်း အဆင့်](/img/installation/wizard-default-content.png)

### အကြံပြုထားသော Plugins များ

အကြံပြုထားသော companion plugins များကို ရွေးချယ်ထည့်သွင်းနိုင်ပါသည်။ ၎င်းတို့ကို ထည့်ရန် **Install** ကို နှိပ်ပါ သို့မဟုတ် ဆက်လက်ဆောင်ရွက်ရန် ကျော်သွားပါ။

![အကြံပြုထားသော plugins အဆင့်](/img/installation/wizard-recommended-plugins.png)

### အဆင်သင့်ဖြစ်ပါပြီ!

ဒါပါပဲ! သင့် Ultimate Multisite ထည့်သွင်းမှု ပြီးစီးပါပြီ။ ယခု **Network Admin Dashboard** မှ သင့် Website as a Service platform ကို စတင်တည်ဆောက်နိုင်ပါပြီ။

![Setup ပြီးစီး - အဆင်သင့် မျက်နှာပြင်](/img/installation/wizard-ready.png)

![Ultimate Multisite အသက်ဝင်နေသော Network Admin Dashboard](/img/installation/network-dashboard.png)

ပျော်ရွှင်စွာ အသုံးပြုလိုက်ပါ!
