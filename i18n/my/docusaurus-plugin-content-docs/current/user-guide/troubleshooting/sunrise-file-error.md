---
title: Sunrise ဖိုင် အမှား
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Sunrise File ထည့်သွင်းရာတွင် အမှားဖြစ်ခြင်း

sunrise.php ဖိုင်သည် WordPress စတင်အလုပ်လုပ်စဉ်တွင် ရှာဖွေသည့် အထူးဖိုင်တစ်ခုဖြစ်သည်။ WordPress က sunrise.php ဖိုင်ကို တွေ့ရှိနိုင်ရန် **wp-content folder** အတွင်းတွင် ရှိနေရန် လိုအပ်သည်။

Ultimate Multisite ကို activate လုပ်ပြီး screenshot တွင် မြင်ရသည့်အတိုင်း setup wizard ကို လုပ်ဆောင်သောအခါ Ultimate Multisite သည် ကျွန်ုပ်တို့၏ sunrise.php ဖိုင်ကို wp-content folder သို့ ကူးယူရန် ကြိုးစားသည်။

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

အချိန်အများစုတွင် ဖိုင်ကို အောင်မြင်စွာ ကူးယူနိုင်ပြီး အရာအားလုံး အဆင်ပြေပါသည်။ သို့သော် တစ်စုံတစ်ခု မှန်ကန်စွာ မသတ်မှတ်ထားပါက (ဥပမာ folder permissions) Ultimate Multisite က ဖိုင်ကို မကူးယူနိုင်သည့် အခြေအနေနှင့် ကြုံတွေ့နိုင်ပါသည်။

Ultimo ပေးသည့် error message ကို ဖတ်ကြည့်လျှင် ဒီနေရာတွင် ဖြစ်ပျက်ခဲ့သည်မှာ အတိအကျ ထိုအရာပင်ဖြစ်ကြောင်း တွေ့ရလိမ့်မည်: **Sunrise copy failed**။

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

ထိုပြဿနာကို ဖြေရှင်းရန် wp-ultimo plugin folder အတွင်းရှိ sunrise.php ဖိုင်ကို ကူးယူပြီး သင့် wp-content folder ထဲသို့ ကူးထည့်လိုက်ရုံပါပဲ။ ထိုသို့လုပ်ဆောင်ပြီးနောက် wizard page ကို reload လုပ်လိုက်ပါက checks များ အောင်မြင်သွားသင့်ပါသည်။

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> မည်သို့ပင်ဆိုစေ၊ နောင်တွင် ပြဿနာများ မဖြစ်အောင် (Ultimate Multisite နှင့်သာမက အခြား plugins နှင့် themes များနှင့်ပါ) သင့် folder permissions ကို ယေဘုယျအားဖြင့် စစ်ဆေးသင့်ပါသည်။

WordPress ၏ တစ်စိတ်တစ်ပိုင်းဖြစ်သည့် **Health Check tool** (သင့် main site **admin panel > Tools > Health Check** မှတဆင့် ဝင်ရောက်နိုင်သည်) သည် WordPress နှင့် ပြဿနာဖြစ်စေနိုင်သည့် တန်ဖိုးများသို့ folder permissions သတ်မှတ်ထားခြင်း ရှိ/မရှိ အသိပေးနိုင်ပါသည်။

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
