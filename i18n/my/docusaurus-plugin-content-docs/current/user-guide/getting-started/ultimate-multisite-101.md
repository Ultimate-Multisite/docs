---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite ၁၀၁

Ultimate Multisite ဆိုတာ WordPress Multisite plugin တစ်ခုဖြစ်ပြီး သင့်ဖောက်သည်တွေကို WaaS (Websites as a Service) ဝန်ဆောင်မှု ပေးနိုင်စေပါတယ်။ Ultimate Multisite က သင့်စီးပွားရေးနဲ့ ဖောက်သည်တွေကို ဘယ်လိုကူညီနိုင်လဲဆိုတာ မစမီမှာ အခြေခံအသိပညာတချို့ကို ဦးစွာလေ့လာဖို့ လိုအပ်ပါတယ်။

## WordPress Multisite

ကျွန်တော်တို့အများစုက သာမန် WordPress installation ကို ရင်းနှီးကြပါတယ်။ hosting provider ရဲ့ control panel ကတဆင့် ဖန်တီးတာဖြစ်စေ၊ ရဲရင့်သူတွေအတွက်တော့ web server နဲ့ database အသစ်တစ်ခု တည်ဆောက်ပြီး core files တွေ download ချကာ installation process ကို စတင်တာဖြစ်စေ လုပ်ဆောင်နိုင်ပါတယ်။

ဒီနည်းလမ်းက ကမ္ဘာတစ်ဝှမ်းမှာရှိတဲ့ WordPress site သန်းပေါင်းများစွာအတွက် အဆင်ပြေပေမယ့် agency ဒါမှမဟုတ် hosting provider ရှုထောင့်ကနေ ပမာဏအကြောင်း ခဏစဉ်းစားကြည့်ရအောင်။

WordPress site တစ်ခု ဖန်တီးဖို့ ဒါမှမဟုတ် automated control panel ကတဆင့် ရာဂဏန်းလောက် ဖန်တီးဖို့က လွယ်ကူပေမယ့် ဒီ site တွေကို စီမံခန့်ခွဲရာမှာတော့ ပြဿနာတွေ ပေါ်လာပါတယ်။ စီမံခန့်ခွဲမှုမရှိဘဲ ထားရင် malware အတွက် ပစ်မှတ်ကောင်းတစ်ခု ဖြစ်သွားမှာပါ။ စီမံခန့်ခွဲဖို့ဆိုရင်တော့ အားထုတ်မှုနဲ့ အရင်းအမြစ်တွေ လိုအပ်ပြီး WordPress site တွေရဲ့ စီမံခန့်ခွဲမှုကို ပိုမိုလွယ်ကူစေဖို့ external tool တွေနဲ့ plugin တွေ ရှိနေပေမယ့် ဖောက်သည်တွေမှာ administrative access ရှိနေတဲ့အတွက် ဒီအားထုတ်မှုတွေက အချည်းနှီးဖြစ်သွားနိုင်ပါတယ်။

WordPress ရဲ့ core ထဲမှာ 'Multisite' လို့ ရိုးရှင်းစွာ အမည်ပေးထားတဲ့ feature တစ်ခုပါဝင်ပြီး ၂၀၁၀ ခုနှစ် WordPress 3.0 မိတ်ဆက်ချိန်ကတည်းက စတင်ခဲ့ပါတယ်။ ထိုအချိန်မှစ၍ feature အသစ်တွေ ထည့်သွင်းခြင်းနဲ့ လုံခြုံရေး တင်းကျပ်စေခြင်းအတွက် ပြင်ဆင်မွမ်းမံမှုများစွာ ပြုလုပ်ခဲ့ပါတယ်။

အနှစ်ချုပ်အနေနဲ့ WordPress multisite ကို ဒီလိုမြင်ယောင်ကြည့်နိုင်ပါတယ်: တက္ကသိုလ်တစ်ခုက WordPress installation တစ်ခုတည်းကို ထိန်းသိမ်းထားပေမယ့် ဌာနတစ်ခုချင်းစီက သူတို့ကိုယ်ပိုင် WordPress site ကို ထိန်းသိမ်းကြပါတယ်။

ဒီဖော်ပြချက်ကို ပိုနားလည်စေဖို့ Ultimate Multisite documentation မှာသာမက WordPress community တစ်ခုလုံးမှာလည်း အသုံးပြုတဲ့ အခြေခံအသုံးအနှုန်းတချို့ကို လေ့လာကြရအောင်။

### Network

WordPress အရ multisite network ဆိုတာ dashboard တစ်ခုတည်းကနေ subsite အများအပြားကို စီမံခန့်ခွဲနိုင်တဲ့နေရာ ဖြစ်ပါတယ်။ Multisite network ဖန်တီးပုံက hosting provider အလိုက် ကွဲပြားပေမယ့် နောက်ဆုံးရလဒ်ကတော့ wp-config.php file ထဲမှာ WordPress ကို ဒီ mode နဲ့ အလုပ်လုပ်နေကြောင်း အသိပေးတဲ့ directive တချို့ ထပ်ပေါင်းထည့်ခြင်း ဖြစ်ပါတယ်။

Multisite network နဲ့ stand-alone WordPress installation အကြား ကွဲပြားချက်များစွာ ရှိပြီး အကျဉ်းချုပ် ဆွေးနွေးပါမယ်။

#### Subdomain vs. Subdirectory

ချက်ချင်းဆုံးဖြတ်ရမယ့် ကိစ္စတစ်ခုက multisite installation ကို _subdirectory_ နဲ့ အသုံးပြုမလား _subdomain_ နဲ့ အသုံးပြုမလား ဆိုတာပါ။ Ultimate Multisite က နှစ်ခုလုံးနဲ့ အညီအမျှ ကောင်းကောင်းအလုပ်လုပ်ပေမယ့် configuration နှစ်ခုအကြား ဗိသုကာပိုင်းဆိုင်ရာ ကွဲပြားမှုတချို့ ရှိပါတယ်။

_Subdirectory_ configuration မှာ network site တွေက main domain name အပေါ်မူတည်တဲ့ path ကို အမွေဆက်ခံပါတယ်။ ဥပမာ 'site1' လို့ အမည်ပေးထားတဲ့ network site ရဲ့ full URL က https://domain.com/site1 ဖြစ်ပါလိမ့်မယ်။ _Subdomain_ configuration မှာတော့ network site က main domain name ကနေ ဆင်းသက်လာတဲ့ သူ့ကိုယ်ပိုင် _subdomain_ ရှိပါလိမ့်မယ်။ ဒါကြောင့် 'site1' လို့ အမည်ပေးထားတဲ့ site ရဲ့ full URL က https://site1.domain.com/ ဖြစ်ပါလိမ့်မယ်။

နှစ်ခုလုံး မှန်ကန်တဲ့ ရွေးချယ်မှုတွေ ဖြစ်ပေမယ့် _subdomain_ အသုံးပြုခြင်းက အားသာချက်တချို့ ပေးပါတယ်၊ သို့သော် ဗိသုကာပိုင်းမှာ ပိုပြီး စဉ်းစားတွေးခေါ်ရ စီမံရမှု လိုအပ်ပါတယ်။

DNS ပိုင်းမှာ _subdirectory_ အသုံးပြုခြင်းက အတော်ရိုးရှင်းတဲ့ စိန်ခေါ်မှုတစ်ခုပဲ ဖြစ်ပါတယ်။ Network site တွေက parent path ရဲ့ child တွေ ဖြစ်တဲ့အတွက် main domain name အတွက် domain name entry တစ်ခုတည်းသာ လိုအပ်ပါတယ်။ _Subdomain_ အတွက်တော့ စိန်ခေါ်မှုက ပိုရှုပ်ထွေးပြီး network site တစ်ခုချင်းစီအတွက် သီးခြား CNAME entry ဒါမှမဟုတ် DNS record တွေမှာ wildcard (*) entry လိုအပ်ပါတယ်။

နောက်ထပ်စဉ်းစားရမယ့်အချက်က SSL နဲ့ SSL certificate ထုတ်ပေးခြင်းနှင့် အသုံးပြုခြင်း ဖြစ်ပါတယ်။ _Subdirectory_ configuration မှာ network site တွေက main domain name ရဲ့ path တွေသာ ဖြစ်တဲ့အတွက် domain certificate တစ်ခုတည်းနဲ့ အသုံးပြုနိုင်ပါတယ်။ ဒါကြောင့် domain.com အတွက် certificate က https://domain.com/site1, https://domain.com/site2 စသည်တို့အတွက် SSL ကို လုံလောက်စွာ ပေးနိုင်ပါလိမ့်မယ်။

_Subdomain_ configuration မှာ wildcard SSL certificate အသုံးပြုခြင်းက အသုံးအများဆုံး ရွေးချယ်မှုတစ်ခု ဖြစ်ပါတယ်။ ဒီ SSL certificate အမျိုးအစားက domain နဲ့ သူ့ရဲ့ _subdomain_ တွေအတွက် encryption ပေးပါတယ်။ ဒါကြောင့် wildcard SSL certificate က https://site1.domain.com, https://site2.domain.com နဲ့ https://domain.com ကိုယ်တိုင်အတွက် encryption ပေးပါလိမ့်မယ်။

အခြား option တွေ ရှိပေမယ့် အဲဒါတွေက scope နဲ့ application မှာ ကန့်သတ်ချက်ရှိပြီး သင့်လျော်မှုနဲ့ပတ်သက်ပြီး ထပ်ဆောင်း configuration နဲ့ စဉ်းစားတွေးခေါ်မှု လိုအပ်ပါတယ်။

#### Plugin များနှင့် Theme များ

WordPress ပေးသလို ယူပြန်လည်းယူပါတယ်၊ အနည်းဆုံးတော့ ဖောက်သည်ရှုထောင့်ကနေပေါ့။ Stand-alone WordPress installation မှာ site administrator က မကောင်းတဲ့ plugin တစ်ခု install လုပ်မိတာဖြစ်စေ သူတို့ရဲ့ installation ကို update မလုပ်ဘဲ ထားခဲ့တာဖြစ်စေ၊ ထိခိုက်သူနဲ့ နစ်နာသူက သူတို့ကိုယ်တိုင်သာ ဖြစ်ပါတယ်။ သို့သော် multisite installation မှာ site administrator တစ်ယောက်က မကောင်းတဲ့ plugin install လုပ်မိရင် network ထဲမှာ install လုပ်ထားတဲ့ site တိုင်းကို ထိခိုက်စေပါတယ်။

ဒီအကြောင်းကြောင့် multisite အဖြစ် configure လုပ်တဲ့အခါ WordPress က site administrator တွေကို plugin နဲ့ theme တွေ install လုပ်ခွင့် ဖယ်ရှားပြီး ဒီအခွင့်အာဏာကို အသစ်ဖန်တီးထားတဲ့ network administrator ဒါမှမဟုတ် 'super admin' role ထံ ရွှေ့ပြောင်းပါတယ်။ ဒီ privileged role က network site administrator တွေကို သူတို့ dashboard ထဲမှာ plugins menu ကို မြင်ခွင့်ဒါမှမဟုတ် ဝင်ခွင့်ပေးမလား၊ ပေးရင်လည်း ဒီ permission တွေက plugin တွေကို _activate_ ဒါမှမဟုတ် _deactivate_ လုပ်ခြင်းအထိ ပါဝင်မလား ဆုံးဖြတ်နိုင်ပါတယ်။

ဒီအတိုင်းအတာအရ network administrator က network ထဲသို့ plugin နဲ့ theme တွေ install လုပ်ရန် တာဝန်ရှိပြီး ဒီ plugin နဲ့ theme တွေကို အသုံးပြုခွင့် permission ကို network site တွေသို့ လွှဲအပ်ပါတယ်။ Site administrator တွေက plugin နဲ့ theme တွေ install လုပ်လို့မရသလို သူတို့ site သို့ assign မလုပ်ထားတဲ့ plugin နဲ့ theme တွေကိုလည်း access လုပ်လို့မရပါ။

#### User များနှင့် Administrator များ

WordPress Multisite မှာ network site အားလုံးက တူညီတဲ့ database ကို မျှဝေသုံးစွဲတဲ့အတွက် တူညီတဲ့ user, role နဲ့ capability တွေကိုလည်း မျှဝေပါတယ်။ အကောင်းဆုံး စဉ်းစားနည်းက user အားလုံးက network ရဲ့ member တွေဖြစ်ပြီး တိကျတဲ့ site တစ်ခုခုရဲ့ member မဟုတ်ဘူးလို့ မြင်တာပါ။

ဒီနားလည်မှုအရ user တွေကို ဖန်တီးခွင့်ပေးတာ မလိုလားနိုင်ပြီး ဒီအကြောင်းကြောင့် WordPress Multisite က site administrator တွေဆီက ဒီအခွင့်အာဏာကို ဖယ်ရှားပြီး network administrator ဆီ ရွှေ့ပြောင်းပါတယ်။ Network administrator ကလည်း site administrator ကို သူတို့ကိုယ်ပိုင် site အတွက် user account ဖန်တီးခွင့်ပြုဖို့ လိုအပ်တဲ့ privilege တွေ လွှဲအပ်ပေးနိုင်ပါတယ်။

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

အထက်မှာ ပြောခဲ့သလို user account တွေက site နဲ့ ဆက်စပ်နေသလို ပေါ်ပေမယ့် တကယ်တော့ network ကို allocate လုပ်ထားတာဖြစ်ပြီး network တစ်ခုလုံးမှာ unique ဖြစ်ရပါမယ်။ ဒီအကြောင်းကြောင့် username တချို့ register လုပ်လို့မရတဲ့ အခြေအနေတွေ ရှိနိုင်ပါတယ်။

Enterprise system တွေမှာ အဆန်းမဟုတ်ပေမယ့် user registration နဲ့ authentication ကို နေရာတစ်ခုတည်းမှ စီမံခြင်းဆိုတဲ့ ဒီအယူအဆက user administration ပိုလွယ်ကူတဲ့ stand-alone WordPress installation နဲ့ ရင်းနှီးသူတွေအတွက် နားလည်ရခက်တဲ့ concept တစ်ခု ဖြစ်လေ့ရှိပါတယ်။

#### Media

WordPress Multisite မှာ network site တွေက database တစ်ခုတည်းကို မျှဝေသုံးစွဲပေမယ့် media file တွေအတွက် filesystem ပေါ်မှာ သီးခြား path တွေ ထိန်းသိမ်းပါတယ်။

စံ WordPress location (wp-content/uploads) က ကျန်ရှိနေပါတယ်၊ သို့သော် သူ့ path ကို network site ရဲ့ unique ID ကို ထင်ဟပ်စေဖို့ ပြောင်းလဲထားပါတယ်။ ထို့ကြောင့် network site တစ်ခုအတွက် media file တွေက wp-contents/uploads/site/[id] အဖြစ် ပေါ်လာပါတယ်။

#### Permalink များ

အရင်က _subdomain_ က _subdirectory_ configuration ထက် ထင်ရှားတဲ့ အားသာချက်တွေ ရှိတယ်လို့ ပြောခဲ့ပြီး ဒီနေရာမှာ ပေါ်လာပါတယ်: path တွေပါ။

_Subdirectory_ configuration မှာ main site (network တည်ဆောက်တဲ့အခါ ပထမဆုံးဖန်တီးတဲ့ site) နဲ့ network subsite တွေက domain name ကနေ ဆင်းသက်လာတဲ့ တူညီတဲ့ path ကို မျှဝေရပါတယ်။ ဒါက conflict အများအပြား ဖြစ်နိုင်ခြေ ရှိပါတယ်။

Post တွေအတွက် main site မှာ network site တွေနဲ့ ပဋိပက္ခမဖြစ်အောင် မဖြစ်မနေ /blog/ path ထည့်ပေးရပါတယ်။ ဆိုလိုတာက 'Post name' လို pretty permalink တွေက domain.name/blog/post-name/ အဖြစ် ပေါ်လာပါလိမ့်မယ်။

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

_Subdomain_ configuration မှာတော့ network site တစ်ခုချင်းစီက domain ခွဲထွက်မှု အပြည့်အဝရတဲ့အတွက် ဒီလုပ်ဆောင်ချက် မလိုအပ်ပါဘူး၊ path တစ်ခုတည်းကို မှီခိုနေစရာ မလိုပါဘူး။ သူတို့ _subdomain_ အပေါ်မူတည်ပြီး သူတို့ကိုယ်ပိုင် path တွေ ထိန်းသိမ်းထားပါတယ်။

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Static Page များ

_Subdirectory_ configuration မှာ main site နဲ့ network site တွေက တူညီတဲ့ path ကို မျှဝေတဲ့အတွက် static page တွေအတွက်လည်း အမည်ပဋိပက္ခ ဖြစ်နိုင်ခြေ ရှိပါတယ်။

ဒါကို ကာကွယ်ဖို့ WordPress က ပထမ site ရဲ့ page တွေနဲ့ ပဋိပက္ခမဖြစ်အောင် site name တချို့ကို blacklist လုပ်ထားနိုင်တဲ့ နည်းလမ်းပေးထားပါတယ်။ ပုံမှန်အားဖြင့် network administrator က main site ရဲ့ page တွေရဲ့ root path တွေကို ထည့်သွင်းပါလိမ့်မယ်။

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

_Subdomain_ configuration မှာ _subdomain_ က network site အတွက် unique ဖြစ်ပြီး main site နဲ့ မည်သို့မျှ မဆက်စပ်တဲ့အတွက် အမည်ပဋိပက္ခ ဖြစ်နိုင်ခြေ နည်းပါတယ်။

### Registration

WordPress Multisite ရဲ့ network setting တွေထဲမှာ user registration option အသစ်များစွာ ရနိုင်ပြီး user အသစ်နဲ့ ရှိပြီးသား user တွေကို site တွေ ဖန်တီးခွင့်ပေးပါတယ်။

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

Stand-alone WordPress installation တွေနဲ့ ဆန့်ကျင်ဘက်အနေနဲ့ network site တွေမှာ user registration ခွင့်ပြုခြင်းဒါမှမဟုတ် ထို registration တွေကို role တွေ assign လုပ်ခြင်း စတဲ့ ရင်းနှီးတဲ့ option တွေ မရှိပါဘူး။

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

User account တွေ ဖန်တီးတဲ့အခါ အဲဒီ account တွေက network level မှာ generate လုပ်ပါတယ်။ ဒါကြောင့် site တစ်ခုခုနဲ့ သက်ဆိုင်တာမဟုတ်ဘဲ network နဲ့ သက်ဆိုင်ပါတယ်။ ဒါက ထင်ရှားတဲ့ အားသာချက်နဲ့ အားနည်းချက်တချို့ ရှိပါတယ်။

ဥပမာ သင့် WordPress Multisite က သတင်းနဲ့ သတင်းအချက်အလက် လုပ်ငန်းမှာ ရှိတယ်ဆိုပါစို့။ Multisite ကို တည်ဆောက်ပြီး finance, technology, entertainment နဲ့ အခြား စိတ်ဝင်စားစရာနယ်ပယ်တွေအတွက် network site တွေ ဖန်တီးမယ်၊ plugin နဲ့ theme တွေကိုတော့ အလုံးစုံ ထိန်းချုပ်ထားမယ်။ Network site တစ်ခုချင်းစီက custom post type ဒါမှမဟုတ် သာမန် post category တွေထက် သူတို့ network site ရဲ့ ပုံပန်း၊ စတိုင်နဲ့ user experience ကို ပိုမိုထိန်းချုပ်နိုင်ပါလိမ့်မယ်။

ဒီအတိုင်းအတာအရ user တစ်ယောက် login ဝင်တဲ့အခါ network ကို login ဝင်တာဖြစ်ပြီး နောက်ဆုံးမှာ network site တစ်ခုချင်းစီကိုလည်း login ဝင်ထားပြီးသားဖြစ်ပြီး seamless experience ရရှိစေပါတယ်။ သင့် site အသစ်က subscription အခြေခံ ဖြစ်ရင် ဒါက အကောင်းဆုံး ဖြေရှင်းချက်နဲ့ ရလဒ် ဖြစ်ပါလိမ့်မယ်။

သို့သော် multisite ရဲ့ ရည်ရွယ်ချက်က တစ်ခုနဲ့တစ်ခု ဆက်စပ်မှုမရှိတဲ့ သီးခြား network site တွေကို ပေးဖို့ ဖြစ်ရင်တော့ user role တွေကို ကိုင်တွယ်ဖို့ external ဒါမှမဟုတ် additional plugin တွေ လိုအပ်တာ အမြဲလိုလိုပါပဲ။

### Domain နှင့် SSL

WordPress Multisite installation တစ်ခုအကြောင်း ပြောရအောင်၊ ကျွန်တော်တို့ သတိမမူမိလောက်တဲ့ တစ်ခု - WordPress.com ပါ။ ဒါက WordPress multisite ရဲ့ အကျယ်ပြန့်ဆုံး ဥပမာဖြစ်ပြီး ရည်ရွယ်ချက်တစ်ခုကို ပြည့်မီစေဖို့ customize လုပ်နိုင်ပြီး ပုံသွင်းနိုင်တဲ့ ကျယ်ပြန့်တဲ့ စွမ်းရည်တွေကို သရုပ်ပြပါတယ်။

ယနေ့ခေတ် internet မှာ SSL အသုံးပြုခြင်းက မဖြစ်မနေလိုလိုဖြစ်ပြီး WordPress multisite တွေရဲ့ network administrator တွေက ဒီစိန်ခေါ်မှုတွေနဲ့ မကြာခင် ရင်ဆိုင်ရပါတယ်။

_Subdomain_ configuration မှာ site တွေကို root domain name အပေါ်မူတည်ပြီး ဖန်တီးပါတယ်။ ဒါကြောင့် 'site1' လို့ အမည်ပေးထားတဲ့ site ကို 'site1.domain.com' အဖြစ် ဖန်တီးပါလိမ့်မယ်။ Wildcard SSL certificate ကို အသုံးပြုပြီး network administrator က ဒီစိန်ခေါ်မှုကို အောင်မြင်စွာ ကိုင်တွယ်နိုင်ပြီး network အတွက် SSL encryption စွမ်းရည်တွေ ပေးနိုင်ပါတယ်။

WordPress Multisite မှာ domain mapping function ပါဝင်ပြီး network site တွေကို custom domain name ဒါမှမဟုတ် network ရဲ့ root domain နဲ့ ကွဲပြားတဲ့ domain name တွေနဲ့ ချိတ်ဆက်ခွင့်ပေးပါတယ်။

Network administrator တွေအတွက် ဒါက domain name configuration နဲ့ SSL certificate ထုတ်ပေးခြင်းနှင့် ထိန်းသိမ်းခြင်း နှစ်ခုလုံးမှာ ရှုပ်ထွေးမှု အလွှာတစ်ခု ထပ်ပေါင်းထည့်ပါတယ်။

ဒီအတိုင်းအတာအရ WordPress Multisite က [www.anotherdomain.com](http://www.anotherdomain.com) ကို 'site1' သို့ map လုပ်ခွင့်ပေးပေမယ့် network administrator က DNS entry တွေကို ပြင်ပမှ စီမံခန့်ခွဲခြင်းနဲ့ SSL certificate တွေ အကောင်အထည်ဖော်ခြင်းဆိုတဲ့ စိန်ခေါ်မှုနဲ့ ကျန်ရစ်ပါတယ်။

## Ultimate Multisite

Stand-alone WordPress installation နဲ့ Multisite installation အကြား ကွဲပြားချက်တွေကို နားလည်ပြီးနောက် Ultimate Multisite က Websites as a Service ပေးဖို့ အဓိကလက်နက် ဖြစ်တာကို ကြည့်ကြရအောင်။

### မိတ်ဆက်

Ultimate Multisite က Website as a Service (WaaS) ဖန်တီးဖို့ သင့်ရဲ့ Swiss Army knife ပါ။ Wix.com, Squarespace, WordPress.com တို့ကို စဉ်းစားကြည့်ပြီး သင့်ကိုယ်ပိုင် service ပိုင်ဆိုင်တာကို စဉ်းစားကြည့်ပါ။

အတွင်းပိုင်းမှာ Ultimate Multisite က WordPress Multisite ကို အသုံးပြုပေမယ့် network administrator တွေ multisite installation တွေမှာ ရင်ဆိုင်ရတဲ့ စိန်ခေါ်မှုများစွာကို ဖြေရှင်းပေးရုံသာမက use case အမျိုးမျိုးကို support လုပ်နိုင်စေတဲ့ စွမ်းရည်တွေကိုလည်း မြှင့်တင်ပေးပါတယ်။

အောက်ပါ section တွေမှာ အသုံးများတဲ့ use case တချို့နဲ့ အဲဒီ case တွေကို support လုပ်ဖို့ လိုအပ်တဲ့ considerations တွေကို ကြည့်ကြမယ်။

### Use Case များ

#### Case 1: Agency

ပုံမှန်အားဖြင့် agency တစ်ခုရဲ့ အဓိက skill က website design ဖြစ်ပြီး hosting ဒါမှမဟုတ် marketing လို အရာတွေကို ထပ်ဆောင်းဝန်ဆောင်မှုအဖြစ် စာရင်းသွင်းထားပါတယ်။

Agency တွေအတွက် Ultimate Multisite က platform တစ်ခုတည်းမှာ website အများအပြားကို host လုပ်ပြီး စီမံခန့်ခွဲနိုင်တဲ့ စွမ်းရည်အရ မယုံနိုင်လောက်တဲ့ တန်ဖိုးပေးပါတယ်။ GeneratePress, Astra, OceanWP ဒါမှမဟုတ် အခြား theme တွေလို တိကျတဲ့ theme တွေပေါ်မှာ design ကို စံသတ်မှတ်ထားတဲ့ agency တွေအတွက်ပို၍ပင် ကောင်းပြီး Ultimate Multisite ရဲ့ site အသစ်တိုင်းအတွက် ဒီ theme တွေကို အလိုအလျောက် activate လုပ်ပေးတဲ့ စွမ်းရည်ကို အသုံးချနိုင်ပါတယ်။

အလားတူပဲ လူသိများတဲ့ plugin တွေအတွက် agency pricing deal တွေ ပေါများလာတာနဲ့အမျှ Ultimate Multisite အသုံးပြုခြင်းက agency တွေကို plugin တွေ install လုပ်၊ ထိန်းသိမ်းပြီး အသုံးချနိုင်တဲ့ common platform ပေးခြင်းဖြင့် ရှိပြီးသား ရင်းနှီးမြှုပ်နှံမှုတွေကို အသုံးချခွင့်ပေးပါတယ်။

_Subdomain_ configuration အသုံးပြုချင်စရာ ဖြစ်နိုင်ပြီး ကံကောင်းစွာပဲ Ultimate Multisite က လူကြိုက်များတဲ့ hosting provider အများအပြားအပြင် Cloudflare နဲ့ cPanel လို service တွေနဲ့ integration တွေရှိတာကြောင့် domain mapping နဲ့ SSL certificate တွေကို အလွန်လွယ်ကူစွာ လုပ်ဆောင်နိုင်ပါတယ်။

ဒါကြောင့် ဒီ provider တွေထဲက တစ်ခုကို အသုံးချခြင်းဖြင့် ဒါမှမဟုတ် Ultimate Multisite ကို Cloudflare နောက်မှာ ထားခြင်းဖြင့် domain နဲ့ SSL certificate စီမံခန့်ခွဲခြင်းလို အရာတွေက အတော်လေး ရိုးရှင်းသွားပါတယ်။

Site ဖန်တီးခြင်းကို တင်းကျပ်စွာ ထိန်းချုပ်ထားချင်တဲ့ agency တွေက Ultimate Multisite ရဲ့ streamlined interface ကတဆင့် site တွေ ဖန်တီးပြီး ဖောက်သည်တွေနဲ့ plan တွေနဲ့ ချိတ်ဆက်နိုင်တဲ့ လွယ်ကူမှုကို တန်ဖိုးထားပါလိမ့်မယ်။

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Plugin နဲ့ theme တွေကို product တစ်ခုချင်းစီအလိုက် တင်းကျပ်စွာ ထိန်းချုပ်ထားနိုင်ပြီး Ultimate Multisite ရဲ့ intuitive interface တွေက plugin နဲ့ theme တွေကို available ဖြစ်စေဖို့ ဒါမှမဟုတ် ဖျောက်ထားဖို့ အပြင် site အသစ်အတွက် instantiate လုပ်တဲ့အခါ activation state ကိုပါ သတ်မှတ်နိုင်ပါတယ်။

![Product plugin limitations interface](/img/config/product-plugins.png)

Theme တွေကလည်း အလားတူ functionality ပေးပြီး site ဖန်တီးတဲ့အခါ တိကျတဲ့ theme တွေကို activate လုပ်ခြင်း ဒါမှမဟုတ် ဖျောက်ထားခြင်း လုပ်နိုင်ပါတယ်။

![Product theme limitations interface](/img/config/product-themes.png)

Agency တွေက Ultimate Multisite နဲ့ စိတ်ချမှုရပြီး သူတို့ အကောင်းဆုံးလုပ်တတ်တာ - ထူးခြားတဲ့ website တွေ design လုပ်ခြင်း - ကို လုပ်နိုင်ပါလိမ့်မယ်။

#### Case 2: Niche Provider

"အရာတစ်ခုကို လုပ်ပြီး ကောင်းကောင်းလုပ်" ဆိုတဲ့ ရှေးစကားပုံ ရှိပါတယ်။ specialist အများအပြားအတွက် ဒါက core idea တစ်ခုတည်းကို အခြေခံတဲ့ product ဒါမှမဟုတ် service ဖန်တီးခြင်း ဖြစ်ပါတယ်။

သင်က club တွေကို website promote လုပ်ပေးတဲ့ golf ချစ်သူတစ်ယောက် ဖြစ်နိုင်သလို clan တွေကို website ပေးတဲ့ esports gamer တစ်ယောက်လည်း ဖြစ်နိုင်ပါတယ်။ Restaurant တွေကို booking service promote လုပ်တဲ့ လူတစ်ယောက်လား။

အကြောင်းအမျိုးမျိုးကြောင့် common framework နဲ့ platform အပေါ်မူတည်တဲ့ service တွေ ပေးချင်ပါလိမ့်မယ်။ လိုအပ်တဲ့ functionality ပေးဖို့ bespoke plugin တွေ design လုပ်ထားတာ ဒါမှမဟုတ် ရင်းနှီးမြှုပ်နှံထားတာ ဖြစ်နိုင်သလို လုပ်ငန်းနယ်ပယ် best practice တွေက design မှာ standardized approach တစ်မျိုးမျိုး လိုအပ်တာလည်း ဖြစ်နိုင်ပါတယ်။

Ultimate Multisite ရဲ့ ဆန်းသစ်တီထွင်မှုရှိတဲ့ feature တစ်ခုက template site အသုံးပြုခြင်း ဖြစ်ပါတယ်။ Template site ဆိုတာ theme install လုပ်ပြီး activate လုပ်ထားပြီး၊ လိုအပ်တဲ့ plugin တွေ install နဲ့ activate လုပ်ထားပြီး sample post ဒါမှမဟုတ် page တွေ ဖန်တီးထားတဲ့ site ဖြစ်ပါတယ်။ ဖောက်သည်တစ်ယောက်က template အပေါ်မူတည်ပြီး site အသစ်ဖန်တီးတဲ့အခါ template ရဲ့ content နဲ့ setting တွေကို site အသစ်သို့ copy ကူးပါတယ်။

Niche site နဲ့ service တွေ ပေးတဲ့သူအတွက် ဒါက custom plugin နဲ့ design နဲ့ အသင့်သုံးနိုင်တဲ့ site ကို ချက်ချင်းဖန်တီးနိုင်တဲ့ နှိုင်းယှဉ်မရနိုင်တဲ့ အားသာချက် ပေးပါတယ်။ ဖောက်သည်က service ပြီးမြောက်ဖို့ အနည်းငယ်ဆုံး input သာ ပေးရပါမယ်။

လိုအပ်ချက်တွေပေါ်မူတည်ပြီး _subdirectory_ ဒါမှမဟုတ် _subdomain_ configuration နှစ်ခုလုံး သင့်လျော်နိုင်ပြီး ဗိသုကာရွေးချယ်မှုက _subdirectory_ အတွက် ရိုးရှင်းတဲ့ SSL certificate ဒါမှမဟုတ် _subdomain_ အတွက် wildcard SSL certificate ကြားမှာ ဖြစ်ပါလိမ့်မယ်။

#### Case 3: WordPress Web Hosting

WordPress site တွေ host လုပ်ဖို့ နည်းလမ်းများစွာ ရှိပေမယ့် pre-install လုပ်ထားတဲ့ WordPress version နဲ့ ဖောက်သည်ကို web space ပေးရုံနဲ့ ရိုးရှင်းတာ ရှားပါတယ်။ ဘာလို့လဲဆိုတော့ အဓိပ္ပာယ်ရှိတဲ့ service ပေးဖို့ ဆုံးဖြတ်ချက်နဲ့ considerations အများအပြား ပေါင်းစပ်ရပါတယ်။

Ultimate Multisite က WordPress site တွေ host လုပ်ဖို့ ပြည့်စုံတဲ့ turnkey solution ပေးခြင်းဖြင့် ဒီနယ်ပယ်မှာ ထူးချွန်ပါတယ်။ Solution ထဲမှာ subscription service, payment collection, checkout form, discount voucher နဲ့ customer communication တွေ ပေးဖို့ core mechanism တွေ ပါဝင်ပါတယ်။

WordPress Multisite ကို မှန်ကန်စွာ install လုပ်၊ configure လုပ်ပြီး ထိန်းသိမ်းဖို့ လိုအပ်တဲ့ integral work အများစုကို Ultimate Multisite က facilitate လုပ်ပေးတဲ့အတွက် network administrator တွေက product tier, pricing နဲ့ service offer တွေလို သူတို့ service ဒါမှမဟုတ် niche နဲ့ သက်ဆိုင်တဲ့ အရာတွေကိုသာ စဉ်းစားရပါမယ်။

Ultimate Multisite နဲ့ integrate လုပ်ချင်တဲ့ developer တွေအတွက် solution က ပြည့်စုံတဲ့ RESTful API နဲ့ event notification အတွက် Webhook တွေလည်း ပေးပါတယ်။

External plugin နဲ့ license အများအပြားကို မှီခိုစရာမလိုဘဲ Ultimate Multisite က Wix, Squarespace, WordPress.com နဲ့ အခြားတို့နဲ့ နှိုင်းယှဉ်နိုင်တဲ့ feature ပြည့်စုံတဲ့ solution ပေးပါတယ်။

### ဗိသုကာပိုင်းဆိုင်ရာ စဉ်းစားချက်များ

ပြည့်စုံတဲ့ guide မဟုတ်ပေမယ့် အောက်ပါအချက်တွေက Ultimate Multisite installation ကို support လုပ်ဖို့ technology မှန်ကန်စွာ ရွေးချယ်ခြင်းအတွက် လမ်းညွှန်ချက်အဖြစ် ရှိသင့်ပါတယ်။

#### Shared vs. Dedicated Hosting

ကံမကောင်းစွာပဲ hosting provider အားလုံး တန်းတူမဟုတ်ဘဲ တချို့က အလွန်အကျွံ server density ကျင့်သုံးပါတယ်။ စျေးသက်သာတဲ့ provider တွေက server density ကို အမြင့်ဆုံးဖြစ်အောင် လုပ်ခြင်းဖြင့် ဝင်ငွေရှာလေ့ရှိပါတယ်။ ဒါကြောင့် သင့် Ultimate Multisite installation က တူညီတဲ့ server ပေါ်မှာ ရာဂဏန်းရှိတဲ့ site တွေထဲက တစ်ခုသာ ဖြစ်နိုင်ပါတယ်။

Provider ထံက သင့်လျော်တဲ့ ကာကွယ်မှုတွေ မရှိဘဲ shared server ပေါ်မှာ site တွေက 'noisy neighbour' ပြဿနာကို တွေ့ကြုံရပါတယ်။ ဆိုလိုတာက တူညီတဲ့ server ပေါ်မှာ site တစ်ခုက resource တွေကို များစွာ သုံးစွဲနေတဲ့အတွက် အခြား site တွေက ကျန်ရှိတဲ့ resource တွေအတွက် ယှဉ်ပြိုင်ရပါတယ်။ ဒါက နှေးကွေးတဲ့ ဒါမှမဟုတ် အချိန်မီ response မပြန်တဲ့ site တွေအဖြစ် ပေါ်လာလေ့ရှိပါတယ်။

သင်ကိုယ်တိုင် web hosting provider တစ်ခုအဖြစ် flow on effect တွေက သင့်ဖောက်သည်တွေ နှေးကွေးတဲ့ speed, နိမ့်ကျတဲ့ page rank နဲ့ မြင့်မားတဲ့ bounce rate တွေ ကြုံတွေ့ရပြီး အခြား service တွေရှာကြတဲ့အခါ customer churn ဖြစ်စေပါတယ်။

အတိုချုပ်ပြောရရင် စျေးသက်သာခြင်းက ကောင်းခြင်း မဟုတ်ပါ။

Ultimate Multisite က ကောင်းမွန်တဲ့ hosting provider အများအပြားနဲ့ အလုပ်လုပ်ကြောင်း သိရှိရပြီး domain mapping နဲ့ automatic SSL လို function တွေ ပေးဖို့ သူတို့ပတ်ဝန်းကျင်နဲ့ ကောင်းကောင်း integrate ဖြစ်ပါတယ်။ ဒီ provider တွေက performance ကို တန်ဖိုးထားပြီး shared hosting ထက် အဆင့်မြင့်တဲ့ service ပေးပါတယ်။

Compatible provider စာရင်းနဲ့ တစ်ခုချင်းစီအတွက် ပြည့်စုံတဲ့ set-up instruction တွေအတွက် Compatible Provider documentation ကို စစ်ဆေးပါ။

#### Performance ဆိုင်ရာ စဉ်းစားချက်များ

Ultimate Multisite က နှေးကွေးတဲ့ application မဟုတ်ပါ၊ တကယ်တော့ အလွန်မြန်ဆန်ပါတယ်။ သို့သော် underlying application နဲ့ infrastructure လောက်သာ ကောင်းမွန်ပြီး access ရှိတဲ့ အရာတွေကိုသာ အသုံးချနိုင်ပါတယ်။

ဒီလိုစဉ်းစားကြည့်ပါ: သင်က site ၁၀၀ ပါတဲ့ Ultimate Multisite installation ရဲ့ network administrator ဖြစ်ပါတယ်။ အဲဒီ site တချို့က ကောင်းကောင်းအလုပ်လုပ်နေပြီး နေ့တိုင်း website visitor အများအပြား ဆွဲဆောင်ပါတယ်။

ဒီ scenario က site ငါးခု ဒါမှမဟုတ် တစ်ခုလောက် သေးငယ်တဲ့ scale မှာ ကွဲပြားပေမယ့် မကြာခင် scale ပြဿနာတွေ ထင်ရှားလာပါလိမ့်မယ်။

ဂရုမစိုက်ဘဲ ထားရင် Ultimate Multisite site တစ်ခုတည်းက site အားလုံးရဲ့ visitor တွေရဲ့ request တွေအားလုံးကို ဖြည့်ဆည်းပေးရပါမယ်။ ဒီ request တွေက dynamic PHP page တွေ ဒါမှမဟုတ် stylesheet, javascript ဒါမှမဟုတ် media file တွေလို static asset တွေ ဖြစ်နိုင်ပါတယ်။ Site တစ်ခုဖြစ်စေ ရာဖြစ်စေ ဒီ task တွေက ထပ်ခါထပ်ခါလုပ်ရ၊ monotonous ဖြစ်ပြီး wasteful ဖြစ်ပါတယ်။ Output က request တိုင်းအတွက် တူညီတဲ့ static information ဖြစ်နေတဲ့အခါ PHP file process လုပ်ဖို့ CPU power နဲ့ memory သုံးရတာ မလိုအပ်ပါ။

အလားတူပဲ PHP ဒါမှမဟုတ် HTML page အတွက် request တစ်ခုက script, stylesheet နဲ့ image file တွေအတွက် နောက်ဆက်တွဲ request အများအပြား generate လုပ်ပါတယ်။ အဲဒီ request တွေက သင့် Ultimate Multisite server ကို တိုက်ရိုက် target လုပ်ပါတယ်။

ဒီပြဿနာကို server upgrade လုပ်ခြင်းဖြင့် လွယ်ကူစွာ ဖြေရှင်းနိုင်ပေမယ့် secondary ပြဿနာတစ်ခုကို မဖြေရှင်းနိုင်ပါ - geographic latency တွေပါ။ Location အများအပြားမှာ server အများအပြားသာ ဒီပြဿနာကို ကောင်းစွာ ဖြေရှင်းနိုင်ပါတယ်။

ဒီအကြောင်းကြောင့် network administrator အများစုက static page တွေအတွက် request တွေကို ဖြည့်ဆည်းပေးဖို့ front-end caching solution နဲ့ content distribution network (CDN) တွေ အသုံးပြုကြပါတယ်။ ဒီ request တွေကို ဖြည့်ဆည်းပေးပြီး server ဆီ ရောက်မလာမီ asset တွေ serve လုပ်ခြင်းက processing resource သက်သာစေ၊ delay တွေ ဖယ်ရှား၊ မလိုအပ်တဲ့ upgrade တွေ ရှောင်ရှားပြီး technology ရင်းနှီးမြှုပ်နှံမှုတွေကို အမြင့်ဆုံးဖြစ်စေပါတယ်။

Ultimate Multisite မှာ sophisticated Cloudflare add-on ပါဝင်ပြီး network administrator တွေကို သူတို့ installation တွေကို Cloudflare နောက်မှာ ထားနိုင်စေပြီး caching capability တွေသာမက DNS hosting, SSL certificate နဲ့ security mechanism တွေကိုလည်း အသုံးပြုနိုင်စေပါတယ်။

#### Backup များ

Backup အကြောင်း အကြံဥာဏ်အတွက် လူ ၅၀ ကို မေးရင် backup strategy အကြောင်း မတူညီတဲ့ အမြင် ၅၀ ရနိုင်ပါတယ်။ အဖြေကတော့ အခြေအနေပေါ် မူတည်ပါတယ်။

ငြင်းခုံစရာမရှိတာက backup တွေ လိုအပ်ပြီး managed service ပေးတဲ့ provider မှ စီမံခန့်ခွဲရမှာဖြစ်တာ မယုံနိုင်လောက်အောင် မဖြစ်မနေလိုလိုပါ။ ထို့ကြောင့် ဖောက်သည်တွေက ဒီ service ကို ပေးပြီး စီမံခန့်ခွဲဖို့ network administrator ကို ကြည့်ပါလိမ့်မယ်။ Network administrator က ဘယ်သူ့ကို ကြည့်မလဲဆိုတာကတော့ လုံးဝကွဲပြားတဲ့ ပြဿနာပါ။

ဒီ section ရဲ့ ရည်ရွယ်ချက်အတွက် backup ဆိုတာ backup စတင်ချိန်မှာ system state ရဲ့ point-in-time copy တစ်ခုဖြစ်တယ်လို့ သဘောတူကြရအောင်။ ရိုးရှင်းစွာပြောရရင် backup ချိန်မှာ system ရဲ့ state ဘယ်လိုပဲဖြစ်ဖြစ် အဲဒီ state ကို capture လုပ်ပြီး backup ထဲမှာ သိမ်းဆည်းထားပါတယ်။

ဒီနားလည်မှုနဲ့အတူ backup တွေ ဘယ်လိုရရမလဲ နဲ့ သင့်ပတ်ဝန်းကျင်အတွက် ဘာက အကောင်းဆုံးလဲဆိုတဲ့ အဖြေက သင့်လိုအပ်ချက်တွေနဲ့ hosting provider ရဲ့ အဲဒီလိုအပ်ချက်တွေကို ဖြည့်ဆည်းပေးနိုင်မှုပေါ် အများအပြား မူတည်ပါလိမ့်မယ်။ သို့သော် အထင်အမြင်အရှိဆုံးကနေ အနည်းဆုံးအထိ အောက်ပါ option တွေက လမ်းညွှန်ချက်တချို့ ပေးသင့်ပါတယ်။

#### Snapshot များ

Snapshot တွေက backup တွေအတွက် silver bullet တွေ ဖြစ်ပါတယ်၊ ဘာလို့လဲဆိုတော့ လွယ်ကူ၊ ရှုပ်ထွေးမှုမရှိ (restore လုပ်ချင်တဲ့အထိ) ပြီး 'just work' ဖြစ်ပါတယ်။ သို့သော် သင့် provider ထံက အကူအညီတချို့ လိုအပ်ပြီး VPS (Virtual Private Server) ဒါမှမဟုတ် အလားတူ ရှိမှသာ အသုံးဝင်ပါတယ်။ ကျွန်တော်တို့ 'Compatible Provider' documentation မှာ စာရင်းသွင်းထားတဲ့ provider အများအပြားက network administrator ထံက ထပ်ဆောင်း intervention ဒါမှမဟုတ် consideration မလိုအပ်တဲ့ backup တွေ ပေးပါတယ်။

Traditional backup တွေက file နဲ့ database တွေကို target လုပ်တဲ့နေရာမှာ snapshot က disk တစ်ခုလုံးကို target လုပ်ပါတယ်။ ဆိုလိုတာက site ရဲ့ data သာမက operating system နဲ့ configuration ကိုပါ snapshot ထဲမှာ capture လုပ်ပါတယ်။ အများအပြားအတွက် ဒါက ထင်ရှားတဲ့ အားသာချက်ဖြစ်ပြီး system အသစ်တစ်ခုကို snapshot ကနေ ချက်ခြင်းလိုလို spawn လုပ်နိုင်ပြီး ပြဿနာရှိနေတဲ့ instance ကို အစားထိုးဖို့ operation ထဲ ထည့်နိုင်ပါတယ်။ အလားတူပဲ file တွေ retrieve လုပ်ဖို့ recovery process က snapshot image ကို ရှိပြီးသား instance မှာ disk အဖြစ် attach လုပ်ရုံပဲ လိုအပ်ပြီး file တွေကို access နဲ့ copy ကူးနိုင်ပါတယ်။

Snapshot တွေက hosting provider မှာ ထပ်ဆောင်းစရိတ် ဆွဲနိုင်ပေမယ့် မတော်တဆမှုတွေအတွက် insurance policy တစ်ခု ဖြစ်ပါတယ်။

#### External Script များ

WordPress နဲ့ MySQL resource တွေ backup လုပ်ဖို့ external script နဲ့ solution တွေ ပေါများနေပြီး Ultimate Multisite က WordPress filesystem နဲ့ database ကို အသုံးပြုတဲ့ WordPress plugin တစ်ခုဖြစ်တဲ့အတွက် ဒါတွေက Ultimate Multisite အတွက် ကောင်းကောင်း အလုပ်လုပ်ပါလိမ့်မယ်။ ဒါကြောင့် WordPress site တွေ backup လုပ်ပေးတဲ့ solution က Ultimate Multisite ရဲ့ လိုအပ်ချက်တွေကို လုံလောက်စွာ cover လုပ်ပါလိမ့်မယ်။

Script တစ်ခုကို အခြားတစ်ခုထက် recommend မလုပ်နိုင်ပေမယ့် ကျွန်တော်တို့ အထွေထွေ အကြံပြုချက်က ရလဒ်တွေ လိုချင်တဲ့အတိုင်း ဖြစ်မဖြစ် သေချာစေဖို့ backup နဲ့ restore test အများအပြား run ဖို့နဲ့ အထူးသဖြင့် differential backup strategy တစ်မျိုးမျိုး အသုံးပြုထားတဲ့နေရာမှာ script နဲ့ သူ့ functionality ကို ဆက်လက်အကဲဖြတ်ခြင်းဖြင့် 'be sure to be sure' ဖြစ်ဖို့ပါ။

ဒီ script တွေက run နေစဉ် system load တိုးစေပြီး ဒါကို ထည့်သွင်းစဉ်းစားသင့်ပါတယ်။

#### Plugin များ

WordPress မှာ plugin နဲ့ မဖြေရှင်းနိုင်တဲ့ ပြဿနာ မရှိသလောက်ပဲ ဖြစ်ပြီး external script တွေ manage လုပ်တာ သင့်အတွက် သင့်တော်မှုမဟုတ်ရင် plugin က နောက်ထပ်အကောင်းဆုံး option ဖြစ်နိုင်ပါတယ်။

Plugin တွေက option နဲ့ feature တွေ ကွဲပြားပေမယ့် အများစုက တူညီတဲ့ function ကို လုပ်ဆောင်ပါတယ်၊ ဆိုလိုတာက WordPress file နဲ့ database content တွေရဲ့ copy ကူးခြင်း ဖြစ်ပါတယ်။ ထို့နောက် functionality တွေ ကွဲပြားပြီး plugin တချို့က backup တွေကို Google Drive ဒါမှမဟုတ် Dropbox လို external service တွေသို့ ဒါမှမဟုတ် S3, Wasabi ဒါမှမဟုတ် အခြား compatible object storage service တစ်မျိုးမျိုးသို့ ပို့ပေးနိုင်ပါတယ်။ ပိုပြည့်စုံတဲ့ plugin တွေက external storage cost သက်သာစေဖို့ ပြောင်းလဲသွားတဲ့ data တွေကိုသာ backup လုပ်ဖို့ differential backup ဒါမှမဟုတ် strategy တစ်မျိုးမျိုး ပေးပါတယ်။

သင့် plugin ရွေးချယ်ရာမှာ multisite aware ဖြစ်မဖြစ် verify လုပ်ဖို့ ဂရုစိုက်ပါ။ သူ့ operation သဘာဝအရ backup run နေစဉ် process ပြီးသည်အထိ server ပေါ်မှာ ယာယီ load ရှိနိုင်ပါတယ်။

#### Domain နှင့် SSL

Multisite _subdomain_ mode မှာ domain name တွေအကြောင်း အများအပြား ဆွေးနွေးပြီးပါပြီ။ Network administrator တွေအတွက် အလွန်လူသိများတဲ့ ဖြေရှင်းချက်က wildcard DNS entry အသုံးပြုခြင်း ဖြစ်ပါတယ်။

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

ဒီ DNS entry အမျိုးအစားက 'site1.domain.com' နဲ့ 'site2.domain.com' လို _subdomain_ တွေကို 1.2.3.4 IP address သို့ အောင်မြင်စွာ resolve လုပ်ပြီး Ultimate Multisite ကိုရော _subdomain_ mode သုံးတဲ့ WordPress Multisite ကိုပါ support လုပ်ပါတယ်။

ဒါက HTTP အတွက် ကောင်းကောင်း အလုပ်လုပ်နိုင်ပါတယ်၊ ဘာလို့လဲဆိုတော့ target host ကို HTTP header တွေကနေ ဖတ်ပါတယ်။ ဒါပေမယ့် secure HTTPS transaction တွေ မဖြစ်မနေလိုလို ဖြစ်နေတဲ့ ယနေ့ web မှာ ဒီလောက်ရိုးရှင်းတာ ရှားပါတယ်။

ကံကောင်းစွာပဲ SSL certificate တွေအတွက် လွယ်ကူတဲ့ option တွေ ရှိပါတယ်။ _Subdirectory_ mode မှာ သာမန် domain certificate ကို အသုံးပြုနိုင်ပါတယ်။ ဒါတွေက hosting provider တွေဆီက အခမဲ့ LetsEncrypt service ဒါမှမဟုတ် အခြား source သုံးပြီး အလွယ်တကူ ရနိုင်ပါတယ်။ ဒါမှမဟုတ် certificate signing request generate လုပ်နိုင်ရင် authority တွေဆီက commercially ရနိုင်ပါတယ်။

_Subdomain_ mode အတွက် wildcard SSL certificate အသုံးပြုခြင်းက wildcard domain နဲ့ ကောင်းစွာ တွဲဖက်ပြီး ထပ်ဆောင်း configuration မလိုဘဲ root domain နဲ့ _subdomain_ အားလုံးအတွက် certificate ကို authoritative ဖြစ်စေပါတယ်။

သို့သော် wildcard SSL certificate တွေက enterprise plan မှာ မဟုတ်လျှင် ဒါမှမဟုတ် entry ကို DNS only မှာ set မလုပ်လျှင် Cloudflare လို service တွေနဲ့ အလုပ်မလုပ်နိုင်ကြောင်း သတိပြုသင့်ပါတယ်၊ အဲဒီအခါ caching နဲ့ optimization အားလုံး bypass ဖြစ်သွားပါတယ်။

Out-of-the-box Ultimate Multisite က ဒီပြဿနာအတွက် ဖြေရှင်းချက်ပေးပြီး WordPress multisite တွေရဲ့ လိုအပ်ချက်တွေနဲ့ ကျွန်တော်တို့ရဲ့ ကျယ်ပြန့်တဲ့ အတွေ့အကြုံကို သရုပ်ပြပါတယ်။ ဒီရိုးရှင်းတဲ့ add-on ကို activate လုပ်ခြင်းက Ultimate Multisite ကို သင့် Cloudflare credential တွေ သုံးပြီး Cloudflare မှာ network site တွေအတွက် DNS entry တွေ အလိုအလျောက်ထည့်ပြီး သူတို့ mode ကို 'proxied' သို့ set လုပ်စေပါလိမ့်မယ်။ ဒီနည်းနဲ့ network subsite တစ်ခုချင်းစီက ဖန်တီးတဲ့အခါ SSL အပါအဝင် Cloudflare ရဲ့ protection နဲ့ benefit အပြည့်အဝ ရရှိပါလိမ့်မယ်။

သင့် Ultimate Multisite installation ရဲ့ သဘာဝနဲ့ ရည်ရွယ်ချက်ပေါ်မူတည်ပြီး ဖောက်သည်တွေ သူတို့ကိုယ်ပိုင် domain သုံးဖို့ လိုအပ်နိုင်ပါတယ်။ ဒီအခြေအနေမှာ network administrator က ပြဿနာ နှစ်ခုကို ဖြေရှင်းရပါတယ်။ တစ်ခုက domain name hosting နဲ့ နှစ်ခုက domain အတွက် SSL certificate တွေပါ။

အများအပြားအတွက် Cloudflare အသုံးပြုခြင်းက လွယ်ကူတဲ့ option ဖြစ်ပါတယ်။ ဖောက်သည်က သူတို့ domain ကို Cloudflare ပေါ်မှာ ထားပြီး CNAME ကို Ultimate Multisite ရဲ့ root domain သို့ ညွှန်ပြကာ သူတို့ domain ကို Ultimate Multisite မှာ map လုပ်ရုံပဲ၊ သူတို့ custom domain name ကို အသုံးချနိုင်ပါပြီ။

ဒီအပြင်တော့ alternative solution တွေ ရှာရပါမယ်၊ ဒါကြောင့် Ultimate Multisite က Compatible Provider စာရင်း recommend လုပ်ပါတယ်။ ဘာလို့လဲဆိုတော့ DNS နဲ့ SSL set up လုပ်တဲ့ process က non-trivial process ဖြစ်နိုင်ပါတယ်။ သို့သော် Ultimate Multisite ရဲ့ ဒီ provider တွေနဲ့ integration ရှိခြင်းက ရှုပ်ထွေးမှုကို များစွာ ဖယ်ရှားပေးပြီး procedure ကို automate လုပ်ပေးပါတယ်။

#### Plugin များ

သင့်ဖောက်သည်တွေ ဒါမှမဟုတ် network site တွေကို functionality ပေးဖို့ additional plugin တွေ လိုအပ်ဖွယ် အလွန်များပါတယ်။ Plugin အားလုံးက WordPress Multisite နဲ့ Ultimate Multisite နဲ့ အလုပ်လုပ်သလား။ အဲဒါတော့ အခြေအနေပေါ် မူတည်ပါတယ်။

Plugin အများစုက WordPress Multisite မှာ install လုပ်လို့ရပေမယ့် သူတို့ activation နဲ့ licensing က author အလိုက် ကွဲပြားပါတယ်။

စိန်ခေါ်မှုက licensing ဘယ်လို apply လုပ်သလဲဆိုတာမှာ ရှိပြီး plugin တချို့က per-domain basis နဲ့ licensing လိုအပ်ပါတယ်။ ဆိုလိုတာက plugin တချို့အတွက် network administrator က site အသစ်တစ်ခုချင်းစီမှာ plugin တစ်ခုချင်းစီအတွက် license ကို manually activate လုပ်ရပါတယ်။

ထို့ကြောင့် plugin author ကို သူတို့ plugin က WordPress Multisite နဲ့ ဘယ်လို အလုပ်လုပ်မလဲ နဲ့ license လုပ်ဖို့ လိုအပ်တဲ့ special requirement ဒါမှမဟုတ် procedure တွေ ရှိမရှိ စစ်ဆေးတာ အကောင်းဆုံး ဖြစ်နိုင်ပါတယ်။
