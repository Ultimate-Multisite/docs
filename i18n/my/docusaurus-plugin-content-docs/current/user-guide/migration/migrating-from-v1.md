---
title: V1 မှ ပြောင်းရွှေ့ခြင်း
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# V1 မှ ပြောင်းရွှေ့ခြင်း

## Ultimate Multisite သည် မူလ 1.x ဗားရှင်းများမှ 2.x ဗားရှင်းများသို့ ပြောင်းလဲသွားပါပြီ။

Ultimate Multisite ဗားရှင်း 2.0 နှင့်အထက်သည် ကုဒ်အခြေခံအစအဆုံး ပြန်လည်ရေးသားထားခြင်းဖြစ်ပြီး၊ ဗားရှင်းဟောင်းနှင့် ဗားရှင်းသစ်အကြား တူညီသောအရာ အနည်းငယ်သာရှိပါသည်။ ထို့ကြောင့် 1.x မှ 2.x သို့ အဆင့်မြှင့်တင်သောအခါ၊ သင့်ဒေတာများကို ဗားရှင်းသစ်များ နားလည်နိုင်သော ပုံစံအဖြစ် ပြောင်းလဲပေးရန် လိုအပ်ပါသည်။

ကံကောင်းစွာဖြင့်၊ Ultimate Multisite 2.0+ တွင် ဗားရှင်းဟောင်းမှ ဒေတာများကို ရှာဖွေတွေ့ရှိပြီး ပုံစံသစ်အဖြစ် ပြောင်းလဲပေးနိုင်သော **migrator တစ်ခု ပါဝင်လာ**ပါသည်။ ဤပြောင်းရွှေ့ခြင်းသည် ဗားရှင်း 2.0+ ၏ **Setup Wizard** အတွင်း ဖြစ်ပေါ်ပါသည်။

ဤသင်ခန်းစာတွင် migrator အလုပ်လုပ်ပုံ၊ မအောင်မြင်ပါက ဘာလုပ်ရမည်နည်း၊ နှင့် ဤလုပ်ငန်းစဉ်အတွင်း ဖြစ်ပေါ်လာနိုင်သော ပြဿနာများကို ဘယ်လိုဖြေရှင်းရမည်ကို ဖော်ပြထားပါသည်။

_**အရေးကြီး: ဗားရှင်း 1.x မှ ဗားရှင်း 2.0 သို့ အဆင့်မြှင့်တင်ခြင်း မစတင်မီ သင့်ဆိုက်ဒေတာဘေ့စ်ကို အရန်သိမ်းဆည်းထားကြောင်း သေချာပါစေ**_

## ပထမအဆင့်များ

ပထမအဆင့်မှာ plugin .zip ဖိုင်ကို ဒေါင်းလုဒ်လုပ်ပြီး သင့် network admin dashboard တွင် ဗားရှင်း 2.0 ကို ထည့်သွင်းခြင်းဖြစ်ပါသည်။

[ဗားရှင်း 2.0 ကို ထည့်သွင်းပြီး အသက်သွင်း](../getting-started/installing-ultimate-multisite.md)ပြီးနောက်၊ စနစ်က သင့် Multisite သည် ဗားရှင်းဟောင်းပေါ်တွင် အလုပ်လုပ်နေကြောင်း အလိုအလျောက် ရှာဖွေတွေ့ရှိပြီး plugin စာမျက်နှာအပေါ်ဆုံးတွင် ဤသတင်းစကားကို မြင်ရပါလိမ့်မည်။

_**မှတ်ချက်:** သင့် Multisite တွင် Ultimate Multisite 1.x ထည့်သွင်းထားပါက၊ သင်ယခုလေးတင် ဒေါင်းလုဒ်လုပ်ထားသော ဗားရှင်းဖြင့် plugin ကို အစားထိုးရန် ရွေးချယ်ခွင့်ရှိပါသည်။ ကျေးဇူးပြု၍ **Replace current with uploaded** ကို နှိပ်ပါ။_

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

နောက်စာမျက်နှာတွင် ဗားရှင်း 1.x နှင့်အတူ သင်ထည့်သွင်းထားသော legacy add-on များကို ပြသပေးပါလိမ့်မည်။ သင်အသုံးပြုနေသော ဗားရှင်းသည် ဗားရှင်း 2.0 နှင့် တွဲဖက်အသုံးပြုနိုင်သလား သို့မဟုတ် ပြောင်းရွှေ့ပြီးနောက် add-on ၏ အဆင့်မြှင့်ထားသော ဗားရှင်းကို ထည့်သွင်းရန် လိုအပ်သလားဆိုသည့် ညွှန်ကြားချက်များ ပါဝင်ပါလိမ့်မည်။

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

ဆက်လက်လုပ်ဆောင်ရန် အဆင်သင့်ဖြစ်ပါက၊ **Visit the Installer to finish the upgrade** ဟုဆိုသော ခလုတ်ကို နှိပ်နိုင်ပါသည်။

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

ထို့နောက် ကြိုဆိုသတင်းစကားများပါဝင်သော installation wizard စာမျက်နှာသို့ ခေါ်ဆောင်သွားပါလိမ့်မည်။ နောက်စာမျက်နှာသို့ သွားရန် **Get Started** ကို နှိပ်ရုံသာဖြစ်ပါသည်။

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

**Get Started** ကို နှိပ်ပြီးနောက်၊ Pre-install Checks သို့ ပြန်လည်ညွှန်းပေးပါလိမ့်မည်။ ၎င်းသည် သင့် System Information နှင့် WordPress installation ကို ပြသပြီး **Ultimate Multisite ၏ လိုအပ်ချက်များ**နှင့် ကိုက်ညီမှုရှိမရှိ ပြောပြပေးပါလိမ့်မည်။

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

နောက်အဆင့်မှာ သင့် Ultimate Multisite license key ကို ထည့်သွင်းပြီး plugin ကို အသက်သွင်းခြင်းဖြစ်ပါသည်။ ၎င်းသည် add-on များအပါအဝင် feature အားလုံး သင့်ဆိုက်တွင် ရရှိနိုင်ကြောင်း သေချာစေပါလိမ့်မည်။

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

သင့် key ကို ထည့်သွင်းပြီးနောက်၊ **Agree & Activate** ကို နှိပ်ပါ။

License အသက်သွင်းပြီးနောက်၊ နောက်စာမျက်နှာတွင် **Install** ကို နှိပ်၍ အမှန်တကယ် installation ကို စတင်နိုင်ပါသည်။ ၎င်းသည် ဗားရှင်း 2.0 အလုပ်လုပ်ရန် လိုအပ်သော ဖိုင်များနှင့် ဒေတာဘေ့စ်ကို အလိုအလျောက် ဖန်တီးပေးပါလိမ့်မည်။

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## ယခု၊ ပြောင်းရွှေ့ခြင်း

Migrator တွင် built-in လုံခြုံရေး feature တစ်ခုပါဝင်ပြီး၊ ၎င်းသည် သင့် Ultimate Multisite ဒေတာအားလုံးကို ပြဿနာမရှိဘဲ ပြောင်းရွှေ့နိုင်ကြောင်း သေချာစေရန် သင့် multisite တစ်ခုလုံးကို စစ်ဆေးပေးပါလိမ့်မည်။ လုပ်ငန်းစဉ်ကို စတင်ရန် **Run Check** ခလုတ်ကို နှိပ်ပါ။

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

စစ်ဆေးပြီးနောက်၊ ဖြစ်နိုင်ချေ နှစ်ခုရှိပါသည်: ရလဒ်သည် error **ပါ** သို့မဟုတ် **error မပါ** ဖြစ်နိုင်ပါသည်။

### Error ပါသောအခါ

Error message ရရှိပါက၊ error ကို ဖြေရှင်းရာတွင် ကူညီပေးနိုင်ရန် ကျွန်ုပ်တို့၏ support team သို့ ဆက်သွယ်ရန် လိုအပ်ပါသည်။ ticket ဖွင့်သောအခါ **error log ကို ပေးပါ**ကြောင်း သေချာပါစေ။ log ကို ဒေါင်းလုဒ်လုပ်နိုင်ပါသည် သို့မဟုတ် contact our support team ဟုဆိုသော link ကို နှိပ်နိုင်ပါသည်။ ၎င်းသည် သင့်စာမျက်နှာ ညာဘက်ခြမ်းတွင် help widget ကို ဖွင့်ပေးပြီး description အောက်တွင် error log များအပါအဝင် field များကို ကြိုတင်ဖြည့်သွင်းပေးထားပါသည်။

_**စနစ်က error တွေ့ရှိသောကြောင့်၊ ဗားရှင်း 2.0 သို့ ပြောင်းရွှေ့ခြင်းကို ဆက်လက်လုပ်ဆောင်နိုင်မည် မဟုတ်ပါ။ ထို့နောက် error ပြင်ဆင်ပြီးသည်အထိ သင့် network ကို ဆက်လက်လည်ပတ်ရန် ဗားရှင်း 1.x သို့ ပြန်သွားနိုင်ပါသည်။**_

### Error မပါသောအခါ

စနစ်က error တစ်စုံတစ်ရာ မတွေ့ရှိပါက၊ အောင်မြင်ကြောင်း သတင်းစကားနှင့် ပြောင်းရွှေ့ခြင်းကို ဆက်လက်လုပ်ဆောင်ရန် ခွင့်ပြုသော **Migrate** ခလုတ်ကို အောက်ခြေတွင် မြင်ရပါလိမ့်မည်။ ဤစာမျက်နှာတွင်၊ ရှေ့ဆက်မသွားမီ သင့်ဒေတာဘေ့စ်ကို အရန်သိမ်းဆည်းထားရန် သတိပေးပါလိမ့်မည်၊ ၎င်းကို ကျွန်ုပ်တို့ အလေးအနက် အကြံပြုပါသည်။ အရန်သိမ်းဆည်းပြီးပါက **Migrate** ကို နှိပ်ပါ။

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

ဒါပါပဲ!

Wizard setup ကို ဆက်လက်လုပ်ဆောင်၍ သင့် network တွင် logo နှင့် အခြားအရာများကို အပ်ဒိတ်လုပ်နိုင်ပါသည် သို့မဟုတ် သင့် Ultimate Multisite ဗားရှင်း 2.0 menu နှင့် ၎င်း၏ interface အသစ်ကို စတင်လေ့လာနိုင်ပါသည်။ စိတ်လက်ပေါ့ပါးစွာ အသုံးပြုလိုက်ပါ။
