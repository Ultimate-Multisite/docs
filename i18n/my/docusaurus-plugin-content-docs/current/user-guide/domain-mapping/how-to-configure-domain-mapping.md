---
title: Domain Mapping ကို ဘယ်လို သတ်မှတ်ပြင်ဆင်မလဲ
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Domain Mapping (v2) ကို ပြင်ဆင်သတ်မှတ်နည်း {#how-to-configure-domain-mapping-v2}

_**အရေးကြီးမှတ်ချက်: ဤဆောင်းပါးသည် Ultimate Multisite ဗားရှင်း 2.x ကို ရည်ညွှန်းထားသည်။**_

အဆင့်မြင့် network တစ်ခု၏ အားအကောင်းဆုံး လုပ်ဆောင်ချက်များထဲမှ တစ်ခုမှာ မိမိတို့၏ client များအား ၎င်းတို့၏ site များတွင် top-level domain တစ်ခု ချိတ်ဆက်အသုံးပြုနိုင်ရန် အခွင့်အရေး ပေးနိုင်ခြင်းဖြစ်သည်။ နောက်ဆုံးတွင် မည်သည်က ပိုမိုပရော်ဖက်ရှင်နယ် ဆန်သနည်း: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) သို့မဟုတ် [_**joesbikeshop.com**_](http://joesbikeshop.com)? ထို့ကြောင့် Ultimate Multisite သည် third-party plugin များ အသုံးပြုရန် မလိုဘဲ ထိုလုပ်ဆောင်ချက်ကို အသင့်ထည့်သွင်းပေးထားသည်။

## Domain mapping ဆိုတာဘာလဲ? {#whats-domain-mapping}

အမည်အတိုင်းပင် domain mapping ဆိုသည်မှာ custom domain တစ်ခုအတွက် တောင်းဆိုမှုကို လက်ခံပြီး ထို domain ချိတ်ဆက်ထားသော network အတွင်းရှိ သက်ဆိုင်ရာ site သို့ ထိုတောင်းဆိုမှုကို ချိတ်ဆက်ညွှန်ပြပေးနိုင်သော Ultimate Multisite ၏ လုပ်ဆောင်ချက်ဖြစ်သည်။

### သင်၏ Ultimate Multisite Network တွင် domain mapping ကို စတင်သတ်မှတ်နည်း {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Domain mapping အလုပ်လုပ်ရန် သင့်ဘက်မှ အချို့ပြင်ဆင်သတ်မှတ်မှု လိုအပ်သည်။ ကံကောင်းစွာဖြင့် Ultimate Multisite သည် ခက်ခဲသောအပိုင်းများကို သင့်အတွက် အလိုအလျောက်လုပ်ဆောင်ပေးသောကြောင့် လိုအပ်ချက်များကို အလွယ်တကူ ဖြည့်ဆည်းနိုင်သည်။

Ultimate Multisite ထည့်သွင်းနေစဉ် wizard သည် **sunrise.php** ကို သတ်မှတ်ထားသော folder သို့ အလိုအလျောက် ကူးယူပြီး ထည့်သွင်းပေးမည်။ **ဤအဆင့်ပြီးစီးသည်အထိ wizard သည် သင့်အား ရှေ့ဆက်ခွင့်မပြုပါ**။

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

ဤအရာသည် Ultimate Multisite ထည့်သွင်းခြင်း wizard က သင်၏ network ကို ပြင်ဆင်သတ်မှတ်ပြီးသည်နှင့် custom domain ကို ချက်ချင်း စတင်ချိတ်ဆက်နိုင်သည်ဟု ဆိုလိုသည်။

Ultimate Multisite တွင် domain mapping သည် မဖြစ်မနေ မဟုတ်ကြောင်း သတိပြုပါ။ WordPress Multisite ၏ မူလ domain mapping လုပ်ဆောင်ချက် သို့မဟုတ် အခြား domain mapping ဖြေရှင်းနည်းတစ်ခုခုကို အသုံးပြုရန် ရွေးချယ်နိုင်သည်။

အခြား domain mapping ဖြေရှင်းနည်းများကို အသုံးပြုနိုင်ရန် Ultimate Multisite domain mapping ကို ပိတ်ရန် လိုအပ်ပါက **Ultimate Multisite > Settings > Domain Mapping** အောက်တွင် ဤလုပ်ဆောင်ချက်ကို ပိတ်နိုင်သည်။

![admin redirect၊ mapping message နှင့် DNS ရွေးချယ်စရာများကို ပြသထားသော Domain Mapping settings စာမျက်နှာ](/img/config/domain-mapping-settings.png)

ဤရွေးချယ်စရာ၏ အောက်ဘက်တွင် **Force Admin Redirect** ရွေးချယ်စရာကိုလည်း တွေ့နိုင်သည်။ ဤရွေးချယ်စရာက သင့် customer များသည် ၎င်းတို့၏ admin dashboard ကို custom domain နှင့် subdomain နှစ်ခုစလုံးတွင် ဝင်ရောက်နိုင်မလား၊ သို့မဟုတ် ၎င်းတို့ထဲမှ တစ်ခုတည်းတွင်သာ ဝင်ရောက်နိုင်မလားကို ထိန်းချုပ်ခွင့်ပေးသည်။

**Force redirect to mapped domain** ကို ရွေးချယ်ပါက သင့် customer များသည် ၎င်းတို့၏ custom domain များတွင်သာ admin dashboard ကို ဝင်ရောက်နိုင်မည်ဖြစ်သည်။

**Force redirect to** **network domain** ရွေးချယ်စရာသည် ထိုအရာ၏ ဆန့်ကျင်ဘက်ကို တိတိကျကျ လုပ်ဆောင်မည်ဖြစ်သည် - သင့် customer များသည် ၎င်းတို့၏ custom domain များတွင် sign in လုပ်ရန် ကြိုးစားသော်လည်း ၎င်းတို့၏ subdomain တွင်သာ dashboard များကို ဝင်ရောက်ခွင့်ရမည်ဖြစ်သည်။

ထို့အပြင် **Allow access to the admin by both mapped domain domain and network domain** ရွေးချယ်စရာသည် ၎င်းတို့အား subdomain နှင့် custom domain နှစ်ခုစလုံးတွင် admin dashboard များကို ဝင်ရောက်ခွင့်ပေးသည်။

![redirect ရွေးချယ်စရာ သုံးခုကို ပြသရန် ဖြန့်ထားသော Admin Redirect dropdown](/img/config/domain-mapping-redirect-options.png)

custom domain တစ်ခုကို ချိတ်ဆက်သတ်မှတ်ရန် နည်းလမ်းနှစ်ခုရှိသည်။ ပထမနည်းလမ်းမှာ super admin အဖြစ် သင့် network admin dashboard မှ domain name ကို ချိတ်ဆက်သတ်မှတ်ခြင်းဖြစ်ပြီး ဒုတိယနည်းလမ်းမှာ account စာမျက်နှာအောက်ရှိ subsite admin dashboard မှတစ်ဆင့် ပြုလုပ်ခြင်းဖြစ်သည်။

သို့သော် သင်၏ network အတွင်းရှိ subsite တစ်ခုသို့ custom domain ကို မချိတ်ဆက်မီ domain name ၏ **DNS settings** များ မှန်ကန်စွာ ပြင်ဆင်ထားကြောင်း သေချာစေရန် လိုအပ်သည်။

###

### domain ၏ DNS settings များ မှန်ကန်စွာ ပြင်ဆင်ထားကြောင်း သေချာစေရန် {#making-sure-the-domain-dns-settings-are-properly-configured}

ချိတ်ဆက်သတ်မှတ်မှု အလုပ်လုပ်ရန် သင်ချိတ်ဆက်ရန် စီစဉ်နေသော domain သည် သင်၏ Network ၏ IP address သို့ ညွှန်ပြနေကြောင်း သေချာစေရန် လိုအပ်သည်။ သင့်တွင် Network IP address လိုအပ်ကြောင်း သတိပြုပါ - ၎င်းသည် Ultimate Multisite ထည့်သွင်းထားသော domain ၏ IP address ဖြစ်ပြီး သင်ချိတ်ဆက်လိုသော custom domain ၏ IP address မဟုတ်ပါ။ သီးခြား domain တစ်ခု၏ IP address ကို ရှာဖွေရန် ဥပမာအားဖြင့် [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) သို့ သွားရန် အကြံပြုပါသည်။

domain ကို မှန်ကန်စွာ ချိတ်ဆက်သတ်မှတ်ရန် ထို **IP address** သို့ ညွှန်ပြသော **A RECORD** တစ်ခုကို သင်၏ **DNS** ပြင်ဆင်မှုတွင် ထည့်သွင်းရန် လိုအပ်သည်။ DNS စီမံခန့်ခွဲမှုသည် domain registrar တစ်ခုနှင့်တစ်ခု အလွန်ကွာခြားသော်လည်း XXXX သည် သင်၏ domain registrar ဖြစ်သည်ဟုယူဆ၍ " _Creating A Record on XXXX_ " ဟု ရှာဖွေပါက ၎င်းအကြောင်း အွန်လိုင်းတွင် လမ်းညွှန်များစွာ ရှိပါသည် (ဥပမာ - " _Creating A Record on_ _GoDaddy_ ")။

ဤအရာကို အလုပ်လုပ်အောင် ပြုလုပ်ရာတွင် အခက်အခဲရှိပါက **သင်၏ domain registrar support ကို ဆက်သွယ်ပါ**။ ၎င်းတို့သည် ဤအပိုင်းအတွက် သင့်အား ကူညီနိုင်မည်ဖြစ်သည်။

သင့် client များအား ၎င်းတို့၏ domain များကို ကိုယ်တိုင် ချိတ်ဆက်သတ်မှတ်ခွင့်ပြုရန် စီစဉ်ပါက ဤအပိုင်းရှိ လုပ်ဆောင်ချက်ကို ၎င်းတို့ကိုယ်တိုင် လုပ်ဆောင်ရမည်ဖြစ်သည်။ A Record ဖန်တီး၍ မရပါက ၎င်းတို့၏ registrar support system သို့ ညွှန်ပြပေးပါ။

### Super Admin အဖြစ် custom domain name ကို ချိတ်ဆက်သတ်မှတ်ခြင်း {#mapping-custom-domain-name-as-super-admin}

သင်၏ network တွင် super admin အဖြစ် logged in ဖြစ်နေပါက **Ultimate Multisite > Domains** အောက်သို့ သွားခြင်းဖြင့် custom domain name များကို အလွယ်တကူ ထည့်သွင်းပြီး စီမံခန့်ခွဲနိုင်သည်။

![Ultimate Multisite ရှိ Domains စာရင်း စာမျက်နှာ](/img/admin/domains-list.png)

ဤစာမျက်နှာအောက်တွင် အပေါ်ဘက်ရှိ **Add Domain** ခလုတ်ကို နှိပ်နိုင်ပြီး ၎င်းက modal window တစ်ခုကို ဖွင့်ပေးမည်။ ထိုနေရာတွင် **custom domain name**၊ custom domain name ကို အသုံးချလိုသော **subsite** ကို သတ်မှတ်ဖြည့်သွင်းနိုင်ပြီး ၎င်းကို **primary domain** name အဖြစ် သတ်မှတ်မလား မသတ်မှတ်ဘူးလား ဆုံးဖြတ်နိုင်သည် (သင်သည် **domain name များစွာကို subsite တစ်ခုသို့ ချိတ်ဆက်သတ်မှတ်နိုင်သည်** ကို သတိပြုပါ)။

![domain name၊ site ရွေးချယ်ကိရိယာနှင့် primary domain toggle ပါရှိသော Add Domain modal](/img/admin/domain-add-modal.png)

အချက်အလက်အားလုံး ထည့်သွင်းပြီးနောက် အောက်ခြေရှိ **Add Existing Domain** ခလုတ်ကို နှိပ်နိုင်သည်။

၎င်းသည် custom domain ၏ DNS အချက်အလက်များကို အတည်ပြုခြင်းနှင့် ရယူခြင်းလုပ်ငန်းစဉ်ကို စတင်မည်ဖြစ်သည်။ လုပ်ငန်းစဉ် မည်သို့ဆက်လက်ဖြစ်ပေါ်နေသည်ကို လိုက်ကြည့်နိုင်ရန် စာမျက်နှာအောက်ခြေတွင် log တစ်ခုကိုလည်း တွေ့ရမည်။ ဤလုပ်ငန်းစဉ် ပြီးစီးရန် မိနစ်အနည်းငယ် ကြာနိုင်သည်။

Ultimate Multisite v2.13.0 သည် ဆိုက်အသစ်တစ်ခုကို ဆိုက်တစ်ခုချင်းစီအတွက် ဒိုမိန်းအဖြစ် သတ်မှတ်သင့်သည့် host ပေါ်တွင် ဖန်တီးသည့်အခါ အတွင်းပိုင်း ဒိုမိန်းမှတ်တမ်းကိုလည်း အလိုအလျောက် ဖန်တီးပေးသည်။ host သည် network ၏ အဓိက ဒိုမိန်း ဖြစ်ပါက သို့မဟုတ် **ဆိုက် URL** field တွင် သတ်မှတ်ထားသော မျှဝေ checkout-form အခြေခံ ဒိုမိန်းများထဲမှ တစ်ခု ဖြစ်ပါက၊ အလိုအလျောက် mapped-domain မှတ်တမ်းကို ကျော်သွားမည်ဖြစ်ပြီး ထိုမျှဝေ အခြေခံဒိုမိန်းကို အသုံးပြုသည့် ဆိုက်တိုင်းအတွက် ဆက်လက်အသုံးပြုနိုင်စေသည်။

customer တစ်ဦးသည် Domain Seller v1.3.0 သို့မဟုတ် ပိုမိုအသစ်ဖြင့် ဒိုမိန်းအသစ်တစ်ခု မှတ်ပုံတင်သည့်အခါ၊ Ultimate Multisite သည် ပုံမှန်အားဖြင့် မှတ်ပုံတင်ထားသော ဒိုမိန်းကို customer ၏ network ဆိုက်သို့ အလိုအလျောက် map လုပ်ပေးသည်။ အောင်မြင်စွာ မှတ်ပုံတင်ပြီးနောက် primary-domain flag၊ activation state သို့မဟုတ် SSL ကိုင်တွယ်ပုံကဲ့သို့သော option များကို ပြင်ဆင်လိုသည့်အခါမှလွဲ၍ administrator များသည် သီးခြား mapped-domain မှတ်တမ်း ထပ်ထည့်ရန် မလိုတော့ပါ။

အားလုံး မှန်ကန်စွာ စီစဉ်ထားပါက **အဆင့်** သို့မဟုတ် status သည် **DNS စစ်ဆေးနေသည်** မှ **အဆင်သင့်** သို့ ပြောင်းလဲသင့်သည်။

<!-- Screenshot unavailable: ဒိုမိန်းများ စာရင်းတွင် DNS စစ်ဆေးနေသည် အဆင့်ကို ပြသထားသော ဒိုမိန်း row -->

<!-- Screenshot unavailable: အစိမ်းရောင် status indicator ပါသော အဆင်သင့် အဆင့်ကို ပြသထားသော ဒိုမိန်း row -->

ဒိုမိန်းအမည်ကို နှိပ်ပါက ၎င်းအတွင်းရှိ option အချို့ကို မြင်နိုင်ပါမည်။ အမြန်ကြည့်ကြစို့။

![အဆင့်၊ ဆိုက်၊ active၊ primary နှင့် SSL toggle များပါသော ဒိုမိန်း အသေးစိတ် စာမျက်နှာ](/img/admin/domain-edit.png)

**အဆင့်:** ဤသည်မှာ ဒိုမိန်း ရောက်ရှိနေသည့် အဆင့်ဖြစ်သည်။ ဒိုမိန်းကို ပထမဆုံး ထည့်သည့်အခါ **DNS စစ်ဆေးနေသည်** အဆင့်တွင် ရှိနေနိုင်ခြေ များသည်။ လုပ်ငန်းစဉ်သည် DNS entry များကို စစ်ဆေးပြီး မှန်ကန်ကြောင်း အတည်ပြုပါမည်။ ထို့နောက် ဒိုမိန်းကို **SSL စစ်ဆေးနေသည်** အဆင့်သို့ ထားပါမည်။ Ultimate Multisite သည် ဒိုမိန်းတွင် SSL ရှိမရှိ စစ်ဆေးပြီး သင့်ဒိုမိန်းကို **အဆင်သင့်** သို့မဟုတ် **အဆင်သင့် (SSL မပါ)** အဖြစ် အမျိုးအစားခွဲပါမည်။

**ဆိုက်:** ဤဒိုမိန်းနှင့် ဆက်စပ်ထားသော subdomain ဖြစ်သည်။ mapped domain သည် ဤသီးသန့် ဆိုက်၏ content ကို ပြသပါမည်။

**အသက်ဝင်မှု:** ဤ option ကို on သို့မဟုတ် off ပြောင်း၍ ဒိုမိန်းကို အသက်သွင်းနိုင် သို့မဟုတ် အသက်မသွင်းနိုင်ပါ။

**အဓိက ဒိုမိန်းလား?:** သင့် customer များသည် ဆိုက်တစ်ခုစီအတွက် mapped domain တစ်ခုထက်ပို၍ ရှိနိုင်သည်။ ဤသည်က ထိုသီးသန့် ဆိုက်အတွက် အဓိက ဒိုမိန်း ဖြစ်မဖြစ် ရွေးချယ်ရန် ဤ option ကို အသုံးပြုပါ။

**လုံခြုံသလား?:** Ultimate Multisite သည် ဒိုမိန်းကို enable မလုပ်မီ SSL certificate ရှိမရှိ စစ်ဆေးသော်လည်း၊ ဒိုမိန်းကို SSL certificate ပါ၍ သို့မဟုတ် မပါဘဲ load လုပ်ရန် ကိုယ်တိုင် ရွေးချယ်နိုင်သည်။ website တွင် SSL certificate မရှိဘဲ SSL ဖြင့် အတင်း load လုပ်ရန် ကြိုးစားပါက error များ ဖြစ်နိုင်ကြောင်း သတိပြုပါ။

### Subsite user အဖြစ် custom ဒိုမိန်းအမည် map လုပ်ခြင်း {#mapping-custom-domain-name-as-subsite-user}

Subsite administrator များသည် ၎င်းတို့၏ subsite admin Dashboard မှ custom ဒိုမိန်းအမည်များကိုလည်း map လုပ်နိုင်သည်။

ပထမဆုံး **ဒိုမိန်း mapping** setting များအောက်တွင် ဤ option ကို enable လုပ်ထားကြောင်း သေချာစေရပါမည်။ အောက်ပါ screenshot ကို ကြည့်ပါ။

<!-- Screenshot unavailable: Customer DNS Management toggle မှတစ်ဆင့် subsite user များကို ဒိုမိန်း map လုပ်ခွင့်ပြုသော ဒိုမိန်း mapping setting များ -->

ဤ option ကို **အစီအစဉ်** အဆင့် သို့မဟုတ် **Ultimate Multisite > ထုတ်ကုန်များ** ရှိ ထုတ်ကုန် option များအောက်တွင်လည်း သတ်မှတ် သို့မဟုတ် ပြင်ဆင်နိုင်သည်။

![ထုတ်ကုန် edit စာမျက်နှာပေါ်ရှိ Custom Domains section](/img/config/product-custom-domains.png)

ထို option များထဲမှ တစ်ခုခုကို enable လုပ်ထားပြီး subsite user ကို custom ဒိုမိန်းအမည်များ map လုပ်ခွင့်ပြုထားပါက၊ subsite user သည် **Account** စာမျက်နှာအောက်တွင် **ဒိုမိန်းများ** ဟု ခေါ်သော metabox တစ်ခုကို မြင်ရမည်။

<!-- Screenshot unavailable: Add Domain ခလုတ်ပါသော subsite Account စာမျက်နှာပေါ်ရှိ ဒိုမိန်းများ metabox -->

user သည် **ဒိုမိန်း ထည့်ရန်** ခလုတ်ကို နှိပ်နိုင်ပြီး ညွှန်ကြားချက်အချို့ပါသော modal window တစ်ခု ပေါ်လာပါမည်။

<!-- Screenshot unavailable: subsite user များအတွက် DNS A-record ညွှန်ကြားချက်များကို ပြသသော Add Domain modal -->

ထို့နောက် user သည် **နောက်အဆင့်** ကို နှိပ်ပြီး custom ဒိုမိန်းအမည် ထည့်သွင်းရန် ဆက်လက်လုပ်ဆောင်နိုင်သည်။ ၎င်းသည် အဓိက ဒိုမိန်း ဖြစ်မဖြစ်ကိုလည်း ရွေးချယ်နိုင်သည်။

<!-- Screenshot unavailable: custom ဒိုမိန်းအမည် field နှင့် primary domain toggle ပါသော Add Domain form -->

<!-- Screenshot unavailable: DNS verification ကို စတင်စေသော Add Domain အတည်ပြု အဆင့် -->

**ဒိုမိန်း ထည့်ရန်** ကို နှိပ်ပါက custom ဒိုမိန်း၏ DNS အချက်အလက်များကို အတည်ပြုခြင်းနှင့် ရယူခြင်း လုပ်ငန်းစဉ် စတင်ပါမည်။

### ဒိုမိန်း Syncing အကြောင်း {#about-domain-syncing}

ဒိုမိန်း Syncing သည် Ultimate Multisite က custom ဒိုမိန်းအမည်ကို သင့် hosting account ထဲသို့ add-on domain အဖြစ် ထည့်သွင်းပေးသော လုပ်ငန်းစဉ်ဖြစ်ပြီး **ဒိုမိန်း mapping အလုပ်လုပ်ရန်အတွက်** ဖြစ်သည်။

သင့် hosting provider တွင် Ultimate Multisite ဒိုမိန်း mapping feature နှင့် integration ရှိပါက ဒိုမိန်း syncing သည် အလိုအလျောက် ဖြစ်ပေါ်သည်။ လက်ရှိတွင် ဤ hosting provider များမှာ _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ နှင့် _Cpanel_ တို့ ဖြစ်သည်။

host-provider integration တစ်ခု active ဖြစ်နေပါက၊ Ultimate Multisite သည် အသစ်ဖန်တီးထားသော ဆိုက်များအတွက် provider-side DNS သို့မဟုတ် subdomain ဖန်တီးမှု task ကိုလည်း enqueue လုပ်နိုင်သည်။ ထို task ကို နားထောင်နေသော integration မရှိပါက no-op queue entry များကို ရှောင်ရန် background job ကို ကျော်သွားမည်။ mapped domain များအတွက် DNS နှင့် SSL စစ်ဆေးမှုများသည် ပုံမှန် domain-stage လုပ်ငန်းစဉ်မှတစ်ဆင့် ဆက်လက်လုပ်ဆောင်သည်။

ဤ integration ကို Ultimate Multisite setting များရှိ **Integration** tab အောက်တွင် activate လုပ်ရန် လိုအပ်ပါမည်။

![hosting provider များကို ပြသထားသော Ultimate Multisite setting များရှိ Integrations tab](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Integrations setting tab ပေါ်ရှိ hosting provider Configuration link များ -->

_သင့် hosting provider သည် အထက်တွင် ဖော်ပြထားသော provider များထဲမှ တစ်ခု မဟုတ်ပါက၊ **ဒိုမိန်းအမည်ကို သင့် hosting account သို့ ကိုယ်တိုင် sync လုပ်ရန် သို့မဟုတ် ထည့်ရန် လိုအပ်မည်** ဖြစ်ကြောင်း သတိပြုပါ။_
