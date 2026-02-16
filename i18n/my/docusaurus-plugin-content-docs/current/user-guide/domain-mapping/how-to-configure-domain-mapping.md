---
title: Domain Mapping ကို ဘယ်လို ပြင်ဆင်သတ်မှတ်မလဲ
sidebar_position: 6
_i18n_hash: 1bb022a0d812fd87791d9ea476f7be84
---
# Domain Mapping ပြင်ဆင်ခြင်း နည်းလမ်း (v2)

_**အရေးကြီးသော မှတ်ချက်: ဤဆောင်းပါးသည် Ultimate Multisite version 2.x အတွက် ဖြစ်ပါသည်။**_

Premium network တစ်ခု၏ အစွမ်းထက်ဆုံး feature များထဲမှ တစ်ခုသည် သုံးစွဲသူများကို ၎င်းတို့၏ site များတွင် top-level domain ချိတ်ဆက်ခွင့်ပေးနိုင်ခြင်း ဖြစ်ပါသည်။ [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) နှင့် [_**joesbikeshop.com**_](http://joesbikeshop.com) နှစ်ခုကို နှိုင်းယှဉ်ကြည့်လျှင် ဘယ်ဟာက ပိုပရော်ဖက်ရှင်နယ်ဆန်သလဲ စဉ်းစားကြည့်ပါ။ ထို့ကြောင့် Ultimate Multisite သည် ဤ feature ကို built-in အနေဖြင့် ပေးထားပြီး third-party plugin များ သုံးစရာမလိုပါ။

## Domain mapping ဆိုတာဘာလဲ?

နာမည်အတိုင်းပင် domain mapping ဆိုသည်မှာ Ultimate Multisite မှ ပေးအပ်သော စွမ်းရည်တစ်ခုဖြစ်ပြီး custom domain အတွက် request တစ်ခုကို လက်ခံကာ ထို domain ချိတ်ဆက်ထားသော network ထဲရှိ သက်ဆိုင်ရာ site သို့ ချိတ်ဆက်ပေးခြင်း ဖြစ်ပါသည်။

### သင့် Ultimate Multisite Network တွင် domain mapping ပြင်ဆင်နည်း

Domain mapping အလုပ်လုပ်ရန် သင့်ဘက်မှ အနည်းငယ် ပြင်ဆင်ရပါမည်။ ကျေးဇူးတင်စရာမှာ Ultimate Multisite က ခက်ခဲသော အလုပ်များကို အလိုအလျောက် လုပ်ဆောင်ပေးသောကြောင့် လိုအပ်ချက်များကို အလွယ်တကူ ဖြည့်ဆည်းနိုင်ပါသည်။

Ultimate Multisite ထည့်သွင်းစဉ် wizard သည် **sunrise.php** ကို သတ်မှတ်ထားသော folder သို့ အလိုအလျောက် copy လုပ်ပြီး install လုပ်ပေးမည်ဖြစ်သည်။ **ဤအဆင့် မပြီးမချင်း wizard က သင့်ကို ဆက်လက်ခွင့်ပြုမည် မဟုတ်ပါ**။

![sunrise.php အဆင့်ပါသော Ultimate Multisite installation wizard](/img/config/settings-domain-mapping.png)

ဆိုလိုသည်မှာ Ultimate Multisite installation wizard က သင့် network ပြင်ဆင်မှု ပြီးဆုံးသွားသည်နှင့် custom domain ချိတ်ဆက်ခြင်းကို ချက်ချင်း စတင်နိုင်ပါပြီ။

Ultimate Multisite တွင် domain mapping သည် မဖြစ်မနေ လုပ်ရန်မလိုပါ။ WordPress Multisite ၏ မူလ domain mapping function သို့မဟုတ် အခြား domain mapping solution များကို သုံးရန် ရွေးချယ်နိုင်ပါသည်။

အခြား domain mapping solution များအတွက် Ultimate Multisite domain mapping ကို ပိတ်ထားလိုပါက **Ultimate Multisite > Settings > Domain Mapping** အောက်တွင် ဤ feature ကို ပိတ်ထားနိုင်ပါသည်။

![enable toggle ပါသော Domain Mapping settings](/img/config/settings-domain-mapping.png)

ဤ option အောက်တွင် **Force Admin Redirect** option ကိုလည်း တွေ့ရပါမည်။ ဤ option သည် သင့်သုံးစွဲသူများ ၎င်းတို့၏ admin dashboard ကို custom domain နှင့် subdomain နှစ်ခုလုံးမှ ဝင်ရောက်နိုင်မည်လား သို့မဟုတ် တစ်ခုတည်းမှသာ ဝင်ရောက်နိုင်မည်လားကို ထိန်းချုပ်ခွင့်ပေးပါသည်။

**Force redirect to mapped domain** ကို ရွေးချယ်ပါက သင့်သုံးစွဲသူများသည် ၎င်းတို့၏ admin dashboard ကို custom domain များမှသာ ဝင်ရောက်နိုင်မည်ဖြစ်သည်။

**Force redirect to network domain** option သည် ဆန့်ကျင်ဘက်အတိအကျ လုပ်ဆောင်ပေးပါသည် - သင့်သုံးစွဲသူများသည် custom domain များမှ login ဝင်ရန် ကြိုးစားသော်လည်း subdomain မှသာ dashboard များကို ဝင်ရောက်ခွင့်ရမည်ဖြစ်သည်။

**Allow access to the admin by both mapped domain domain and network domain** option သည် subdomain နှင့် custom domain နှစ်ခုလုံးမှ admin dashboard များကို ဝင်ရောက်ခွင့်ပေးပါသည်။

![domain mapping အတွက် Force Admin Redirect options](/img/config/settings-domain-mapping.png)

Custom domain ချိတ်ဆက်ရန် နည်းလမ်း နှစ်မျိုးရှိပါသည်။ ပထမနည်းလမ်းမှာ super admin အနေဖြင့် network admin dashboard မှ domain name ချိတ်ဆက်ခြင်းဖြစ်ပြီး ဒုတိယနည်းလမ်းမှာ account page အောက်ရှိ subsite admin dashboard မှတဆင့် ချိတ်ဆက်ခြင်းဖြစ်သည်။

သို့သော် သင့် network ရှိ subsite တစ်ခုသို့ custom domain ချိတ်ဆက်ခြင်း မစတင်မီ domain name ၏ **DNS settings** ကို မှန်ကန်စွာ ပြင်ဆင်ထားကြောင်း သေချာစေရပါမည်။

### 

### Domain DNS settings မှန်ကန်စွာ ပြင်ဆင်ထားကြောင်း သေချာစေခြင်း

ချိတ်ဆက်မှု အလုပ်လုပ်ရန် ချိတ်ဆက်မည့် domain သည် သင့် Network ၏ IP address သို့ ညွှန်ပြထားကြောင်း သေချာစေရပါမည်။ Network IP address - Ultimate Multisite install လုပ်ထားသော domain ၏ IP address - လိုအပ်ကြောင်း သတိပြုပါ၊ ချိတ်ဆက်လိုသော custom domain ၏ IP address မဟုတ်ပါ။ Domain တစ်ခု၏ IP address ကို ရှာဖွေရန် [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) သို့ သွားရန် အကြံပြုပါသည်။

Domain ကို မှန်ကန်စွာ ချိတ်ဆက်ရန် သင့် **DNS** configuration တွင် ထို **IP address** သို့ ညွှန်ပြသော **A RECORD** တစ်ခု ထည့်သွင်းရပါမည်။ DNS စီမံခန့်ခွဲမှုသည် domain registrar အသီးသီးတွင် များစွာ ကွဲပြားပါသည်၊ သို့သော် "_Creating A Record on XXXX_" (XXXX သည် သင့် domain registrar ဖြစ်သည်၊ ဥပမာ: "_Creating A Record on GoDaddy_") ဟု ရှာဖွေပါက online တွင် tutorial များစွာ ရှိပါသည်။

ဤအရာ အလုပ်လုပ်ရန် အခက်အခဲရှိပါက **သင့် domain registrar support ကို ဆက်သွယ်ပါ**၊ ၎င်းတို့က ဤအပိုင်းတွင် ကူညီပေးနိုင်ပါမည်။

သင့်သုံးစွဲသူများကို ၎င်းတို့၏ domain များကို ကိုယ်တိုင် ချိတ်ဆက်ခွင့်ပေးရန် စီစဉ်ထားပါက ဤအပိုင်းကို ၎င်းတို့ကိုယ်တိုင် လုပ်ဆောင်ရပါမည်။ A Record ဖန်တီးရန် မတတ်နိုင်ပါက ၎င်းတို့၏ registrar support system သို့ ညွှန်ပြပေးပါ။

### Super Admin အနေဖြင့် custom domain name ချိတ်ဆက်ခြင်း

သင့် network တွင် super admin အဖြစ် login ဝင်ထားသည့်အခါ **Ultimate Multisite > Domains** အောက်သို့ သွားခြင်းဖြင့် custom domain name များကို အလွယ်တကူ ထည့်သွင်းပြီး စီမံခန့်ခွဲနိုင်ပါသည်။

![Ultimate Multisite ရှိ Domains list page](/img/admin/domains-list.png)

ဤ page အောက်တွင် အပေါ်ဘက်ရှိ **Add Domain** button ကို နှိပ်နိုင်ပြီး modal window ပေါ်လာမည်ဖြစ်ကာ **custom domain name**၊ custom domain name အသုံးပြုလိုသော **subsite**၊ နှင့် ၎င်းကို **primary domain** name အဖြစ် သတ်မှတ်လိုသလား မသတ်မှတ်လိုဘူးလား ဆုံးဖြတ်နိုင်ပါသည် (subsite တစ်ခုတွင် **domain name များစွာ ချိတ်ဆက်နိုင်ကြောင်း** သတိပြုပါ)။

![domain name နှင့် site fields ပါသော Add Domain modal](/img/admin/domains-list.png)

အချက်အလက်အားလုံး ဖြည့်သွင်းပြီးနောက် အောက်ခြေရှိ **Add Existing Domain** button ကို နှိပ်နိုင်ပါသည်။

ဤသည် custom domain ၏ DNS အချက်အလက်ကို စစ်ဆေးပြီး ရယူသော လုပ်ငန်းစဉ်ကို စတင်မည်ဖြစ်သည်။ လုပ်ဆောင်နေသော အဆင့်ဆင့်ကို စောင့်ကြည့်ရန် page အောက်ခြေတွင် log တစ်ခုလည်း တွေ့ရပါမည်။ ဤလုပ်ငန်းစဉ်သည် ပြီးမြောက်ရန် မိနစ်အနည်းငယ် ကြာနိုင်ပါသည်။

အရာအားလုံး မှန်ကန်စွာ ပြင်ဆင်ထားပါက **Stage** သို့မဟုတ် status သည် **Checking DNS** မှ **Ready** သို့ ပြောင်းလဲသင့်ပါသည်။

![Checking DNS မှ Ready သို့ ပြောင်းလဲနေသော Domain stage](/img/admin/domains-list.png)

![domains list တွင် Ready status ပြသနေသော Domain](/img/admin/domains-list.png)

Domain name ကို နှိပ်ပါက အတွင်းတွင် option အချို့ကို မြင်ရပါမည်။ ၎င်းတို့ကို အမြန်ကြည့်ရှုကြပါစို့:

![stage, site, active, နှင့် SSL options ပါသော Domain detail page](/img/admin/domains-list.png)

**Stage:** Domain ရောက်ရှိနေသော အဆင့်ဖြစ်သည်။ Domain ကို ပထမဆုံး ထည့်သွင်းသောအခါ **Checking DNS** အဆင့်တွင် ရှိနေနိုင်ပါသည်။ လုပ်ငန်းစဉ်သည် DNS entries များကို စစ်ဆေးပြီး မှန်ကန်ကြောင်း အတည်ပြုပါမည်။ ထို့နောက် domain သည် **Checking SSL** အဆင့်သို့ ရောက်ရှိမည်ဖြစ်သည်။ Ultimate Multisite သည် domain တွင် SSL ရှိမရှိ စစ်ဆေးပြီး သင့် domain ကို **Ready** သို့မဟုတ် **Ready (without SSL)** အဖြစ် အမျိုးအစားခွဲခြားပါမည်။

**Site:** ဤ domain နှင့် ချိတ်ဆက်ထားသော subdomain ဖြစ်သည်။ ချိတ်ဆက်ထားသော domain သည် ဤ site ၏ content ကို ပြသမည်ဖြစ်သည်။

**Active:** Domain ကို activate သို့မဟုတ် deactivate လုပ်ရန် ဤ option ကို on သို့မဟုတ် off လုပ်နိုင်ပါသည်။

**Is Primary Domain?:** သင့်သုံးစွဲသူများသည် site တစ်ခုအတွက် ချိတ်ဆက်ထားသော domain တစ်ခုထက်ပိုပိုင်ဆိုင်နိုင်ပါသည်။ ဤ option ကို သုံး၍ ဤ site အတွက် ၎င်းသည် primary domain ဟုတ်မဟုတ် ရွေးချယ်ပါ။

**Is Secure?:** Ultimate Multisite သည် domain ကို enable မလုပ်မီ SSL certificate ရှိမရှိ စစ်ဆေးသော်လည်း SSL certificate ပါ သို့မဟုတ် မပါဘဲ domain ကို load လုပ်ရန် ကိုယ်တိုင် ရွေးချယ်နိုင်ပါသည်။ Website တွင် SSL certificate မရှိဘဲ SSL ဖြင့် load လုပ်ရန် အတင်းလုပ်ပါက error များ ရနိုင်ကြောင်း သတိပြုပါ။

### Subsite user အနေဖြင့် custom domain name ချိတ်ဆက်ခြင်း

Subsite administrator များသည်လည်း ၎င်းတို့၏ subsite admin dashboard မှ custom domain name များ ချိတ်ဆက်နိုင်ပါသည်။

ပထမဦးစွာ **Domain mapping** settings အောက်တွင် ဤ option ကို enable လုပ်ထားကြောင်း သေချာစေရပါမည်။ အောက်ပါ screenshot ကို ကြည့်ပါ။

![subsite users များကို domain ချိတ်ဆက်ခွင့်ပေးသော Domain mapping settings](/img/config/settings-domain-mapping.png)

**Ultimate Multisite > Products** တွင် **Plan** level သို့မဟုတ် product options အောက်တွင်လည်း ဤ option ကို သတ်မှတ်ပြင်ဆင်နိုင်ပါသည်။

![product settings ရှိ Product custom domains option](/img/config/settings-domain-mapping.png)

ဤ option များထဲမှ တစ်ခုခုကို enable လုပ်ထားပြီး subsite user ကို custom domain name များ ချိတ်ဆက်ခွင့်ပေးထားသည့်အခါ subsite user သည် **Account** page အောက်တွင် **Domains** ဟုခေါ်သော metabox တစ်ခု မြင်ရပါမည်။

![subsite account page ပေါ်ရှိ Domains metabox](/img/admin/domains-list.png)

User သည် **Add Domain** button ကို နှိပ်နိုင်ပြီး လမ်းညွှန်ချက်အချို့ပါသော modal window ပေါ်လာမည်ဖြစ်သည်။

![subsite users များအတွက် DNS လမ်းညွှန်ချက်များပါသော Add Domain modal](/img/admin/domains-list.png)

User သည် **Next Step** ကို နှိပ်ပြီး custom domain name ထည့်သွင်းရန် ဆက်လက်နိုင်ပါသည်။ ၎င်းသည် primary domain ဖြစ်မဖြစ်လည်း ရွေးချယ်နိုင်ပါသည်။

![primary domain option ပါသော custom domain name ထည့်သွင်းရန် field](/img/admin/domains-list.png)

![DNS စစ်ဆေးမှု စတင်ရန် Add Domain ကို နှိပ်ပါ](/img/admin/domains-list.png)**Add Domain** ကို နှိပ်ခြင်းဖြင့် custom domain ၏ DNS အချက်အလက်ကို စစ်ဆေးပြီး ရယူသော လုပ်ငန်းစဉ်ကို စတင်မည်ဖြစ်သည်။

### Domain Syncing အကြောင်း

Domain Syncing သည် **domain mapping အလုပ်လုပ်ရန်** Ultimate Multisite က custom domain name ကို သင့် hosting account တွင် add-on domain အဖြစ် ထည့်သွင်းပေးသော လုပ်ငန်းစဉ်ဖြစ်သည်။

သင့် hosting provider သည် Ultimate Multisite domain mapping feature နှင့် integration ရှိပါက domain syncing သည် အလိုအလျောက် ဖြစ်ပေါ်ပါသည်။ လက်ရှိတွင် ဤ hosting provider များသည် _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ နှင့် _Cpanel_ တို့ဖြစ်ပါသည်။

Ultimate Multisite settings ရှိ **Integration** tab အောက်တွင် ဤ integration ကို activate လုပ်ရပါမည်။

![Ultimate Multisite settings ရှိ Integration tab](/img/config/settings-domain-mapping.png)

![domain syncing အတွက် Hosting provider integration settings](/img/config/settings-domain-mapping.png)

_သင့် hosting provider သည် အထက်ဖော်ပြပါ provider များထဲမှ တစ်ခုမဟုတ်ပါက **domain name ကို သင့် hosting account သို့ ကိုယ်တိုင် sync သို့မဟုတ် ထည့်သွင်းရန် လိုအပ်ပါမည်**။_
