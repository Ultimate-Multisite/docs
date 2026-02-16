---
title: WordPress Multisite ဆိုတာ ဘာလဲ?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# WordPress Multisite ဆိုတာ ဘာလဲ?

WordPress ရဲ့ အဓိက လုပ်ဆောင်ချက်တွေထဲမှာ 'Multisite' လို့ခေါ်တဲ့ feature တစ်ခုပါဝင်ပါတယ်။ ဒီ feature က ၂၀၁၀ ခုနှစ် WordPress 3.0 စတင်မိတ်ဆက်ချိန်ကတည်းက ရှိခဲ့တာပါ။ အဲ့ကတည်းက feature အသစ်တွေ ထပ်ထည့်တာတို့၊ လုံခြုံရေး တိုးမြှင့်တာတို့နဲ့ အကြိမ်ကြိမ် ပြင်ဆင်ခဲ့ပါတယ်။

ရိုးရိုးရှင်းရှင်း ရှင်းပြရရင်၊ WordPress multisite ကို ဒီလိုမြင်ကြည့်နိုင်ပါတယ်: တက္ကသိုလ်တစ်ခုမှာ WordPress တစ်ခုတည်းကို တပ်ဆင်ထားပြီး၊ ဌာနတစ်ခုချင်းစီကတော့ သူတို့ရဲ့ကိုယ်ပိုင် WordPress site တစ်ခုစီ ရှိကြပါတယ်။

## 

## WordPress Multisite ဆိုတာ အတိအကျ ဘာလဲ?

Multisite ဆိုတာ site အများအပြားကို WordPress တစ်ခုတည်းမှာ အတူတကွ သုံးနိုင်စေတဲ့ WordPress ရဲ့ feature တစ်ခုပါ။ Multisite ကို ဖွင့်လိုက်တဲ့အခါ၊ မူလ WordPress site က **site များ၏ network** လို့ အများအားဖြင့် ခေါ်ကြတဲ့ ပုံစံကို ပံ့ပိုးဖို့ ပြောင်းလဲသွားပါတယ်။

ဒီ network က file system ကို မျှဝေသုံးစွဲပါတယ် (ဆိုလိုတာက **plugin တွေနဲ့ theme တွေကိုလည်း မျှဝေသုံးစွဲပါတယ်**)၊ database၊ WordPress core file တွေ၊ wp-config.php စတာတွေကိုလည်း မျှဝေသုံးစွဲပါတယ်။

ဒါကြောင့် WordPress၊ theme နဲ့ plugin update တွေကို သင့် network site အားလုံးအတွက် တစ်ခါတည်း လုပ်ရုံပဲ လိုပါတယ်။ ဘာဖြစ်လို့လဲဆိုတော့ file တွေအားလုံး တစ်နေရာတည်းမှာ ရှိနေလို့ပါပဲ။

ဒါက multisite ရဲ့ အဓိက အားသာချက်တစ်ခုပါပဲ။ site အရေအတွက် တိုးလာပေမယ့်၊ သင့် customer တွေရဲ့ site တွေကို ထိန်းသိမ်းဖို့ လုပ်ရမယ့် အလုပ်တွေကတော့ အတူတူပဲ ဖြစ်နေမှာပါ။

## 

## Subdomain ဒါမှမဟုတ် Subdirectory?

WordPress multisite ကို သုံးနိုင်တဲ့ ပုံစံ နှစ်မျိုးရှိပြီး၊ သင့်ရဲ့ ပုံမှန် WordPress ကို multisite အဖြစ် ပြောင်းလဲတဲ့အခါ တစ်ခုကို ရွေးချယ်ရပါမယ်:

**Subdomain:** ဥပမာ- [site.domain.com](http://site.domain.com)

…ဒါမှမဟုတ်

**Subdirectory:** ဥပမာ- [yourdomain.com/site](http://yourdomain.com/site)

ပုံစံတစ်ခုချင်းစီမှာ အားသာချက်တွေနဲ့ အားနည်းချက်တွေ ရှိပြီး ဆုံးဖြတ်ချက်မချခင် စဉ်းစားဖို့ လိုပါတယ်။

အရေးကြီးတဲ့ အချက်တစ်ခုကတော့: ဆုံးဖြတ်ချက်ချပြီးတဲ့နောက် subdirectory ကနေ subdomain ကို ပြောင်းတာ၊ ဒါမှမဟုတ် ပြန်ပြောင်းတာက အရမ်းခက်ခဲပါတယ် – အထူးသဖြင့် site အများကြီး ဖန်တီးပြီးသားဆိုရင်ပေါ့။

ဆုံးဖြတ်ချက်မချခင်၊ ဒီအချက်တွေကို စဉ်းစားပါ:

**Subdirectory Mode** က တပ်ဆင်ရတာရော ထိန်းသိမ်းရတာရော အလွယ်ဆုံးပါ။ ဘာဖြစ်လို့လဲဆိုတော့ site အားလုံးက main domain ရဲ့ path တွေ ဖြစ်နေလို့ပါ (ဥပမာ- [yourdomain.com/subsite](http://yourdomain.com/subsite))။ ဒါကြောင့် main domain အတွက် **SSL certificate တစ်ခုတည်း** နဲ့ network တစ်ခုလုံးကို လုံခြုံစေပါတယ်။

တစ်ချိန်တည်းမှာပဲ၊ URL ပုံစံကြောင့် Google နဲ့ အခြား search engine အများစုက subdirectory-based network ပေါ်က subsite အားလုံးကို site ကြီးတစ်ခုတည်းအဖြစ် သတ်မှတ်ပါတယ်။ ဒါကြောင့် သင့် customer တွေရဲ့ subsite တွေမှာ ထည့်ထားတဲ့ content တွေက သင့် landing site ရဲ့ SEO performance ကို သက်ရောက်မှု ရှိနိုင်ပါတယ်။ ဒီသက်ရောက်မှုရဲ့ အတိုင်းအတာကတော့ ငြင်းခုံစရာ ရှိပြီး၊ တချို့က ဒီပုံစံက SEO performance အတွက် အကျိုးရှိနိုင်တယ်လို့လည်း ဆိုကြပါတယ်။

**Subdomain Mode** ကတော့ တပ်ဆင်ရတာ နည်းနည်းပိုရှုပ်ပေမယ့်၊ URL ပုံစံ (ဥပမာ- [subsite.yournetwork.com](http://subsite.yournetwork.com)) က "ပိုပရော်ဖက်ရှင်နယ်" ဆန်တယ်လို့ အများအားဖြင့် ရှုမြင်ကြပါတယ်။

Subdomain mode တပ်ဆင်ရာမှာ အဓိက စိန်ခေါ်မှုတစ်ခုက network တစ်ခုလုံးအတွက် SSL (HTTPS) ဖြစ်ပါတယ်။ Browser တွေက subdomain တွေကို သီးခြား entity တွေအဖြစ် သတ်မှတ်လို့ပါ။ ဒါကြောင့် သင့် network ရဲ့ subdomain တစ်ခုချင်းစီအတွက် SSL certificate တစ်ခုစီ လိုမယ်၊ ဒါမှမဟုတ် **Wildcard SSL certificate** လို့ခေါ်တဲ့ အထူး certificate မျိုး လိုမယ်။ မကြာသေးခင်နှစ်တွေမှာ hosting provider တွေနဲ့ panel တွေက SSL ထုတ်ပေးမှုမှာ တိုးတက်လာပြီး တချို့က wildcard certificate ကို ခလုတ်တစ်ချက်နှိပ်ရုံနဲ့ ရအောင် လုပ်ပေးနိုင်တာကြောင့် ပုံစံနှစ်ခုရဲ့ တပ်ဆင်ရ ရှုပ်ထွေးမှု ကွာဟချက်က လျော့နည်းလာပါတယ်။

Subdirectory mode နဲ့ ဆန့်ကျင်ဘက်အနေနဲ့၊ subdomain-based network ပေါ်က subsite တွေကို search engine တွေက သီးခြား website တွေအဖြစ် သတ်မှတ်ပါတယ်။ ဆိုလိုတာက subsite တစ်ခုမှာရှိတဲ့ content က အခြား subsite တွေရဲ့ SEO performance ကို လုံးဝ မသက်ရောက်ပါဘူး။

## Super Admin

Site တစ်ခုတည်းရှိတဲ့ WordPress မှာ user အရေအတွက် အကန့်အသတ်မရှိ ထည့်နိုင်ပြီး၊ user တွေကို permission မတူတဲ့ user role အမျိုးမျိုး ပေးနိုင်ပါတယ်။

WordPress Multisite မှာတော့ user အမျိုးအစားသစ် တစ်ခု ရလာပါတယ်: **super admin** – နဲ့ admin panel အသစ်တစ်ခုလည်း ရလာပါတယ်: **network admin panel**။

နာမည်အတိုင်းပဲ super admin မှာ network ကို အုပ်ချုပ်နိုင်တဲ့ အထူးအခွင့်အရေးတွေ ရှိပါတယ်။ subsite အားလုံး၊ plugin တွေ၊ theme တွေ၊ အားလုံးကို စီမံခန့်ခွဲနိုင်ပါတယ်။

သင့်ရဲ့ site တစ်ခုတည်းရှိတဲ့ WordPress ကို multisite အဖြစ် ပြောင်းလိုက်တဲ့အခါ၊ မူလ site ရဲ့ admin က super admin အဖြစ် အလိုအလျောက် တိုးမြှင့်ခံရပါတယ်။

Plugin တွေနဲ့ theme တွေကို super admin တွေကသာ network admin panel ကနေ install လုပ်တာ ဒါမှမဟုတ် ဖြုတ်တာ လုပ်နိုင်ပါတယ်။ Subsite admin တွေကတော့ plugin တွေ ဒါမှမဟုတ် theme တွေကို activate ဒါမှမဟုတ် deactivate လုပ်ဖို့ ရွေးချယ်နိုင်ပါတယ် – super admin က plugin တစ်ခုကို network activate လုပ်ထားတဲ့အခါမှာ လွဲရင်ပေါ့။ Network activate လုပ်ထားရင် subsite အားလုံးမှာ အမြဲ active ဖြစ်နေပါမယ်။

_မှတ်ချက်: မြင်တဲ့အတိုင်းပဲ၊ တစ်စုံတစ်ယောက်ကို သင့် network မှာ super admin အဖြစ် ဖိတ်ခေါ်လိုက်ရင် ဒီ user က သင့် network ကို အပြည့်အဝ ထိန်းချုပ်နိုင်ပါတယ်။ ဥပမာ အခြား super admin တွေက သင့်ရဲ့ super admin status ကို ဖယ်ရှားပြီး သင့်ကိုယ်ပိုင် network admin panel ကနေ သင့်ကို ပိတ်ပင်နိုင်ပါတယ်။ Ultimate Multisite customer တွေက super admin အပို တစ်ယောက်ချင်းစီ ဘာလုပ်နိုင်တယ်ဆိုတာကို အသေးစိတ် ထိန်းချုပ်နိုင်ဖို့အတွက်၊ ကျွန်တော်တို့မှာ Support Agents လို့ခေါ်တဲ့ add-on ရှိပါတယ်။ ဒီ add-on က user အမျိုးအစားသစ် – agent – တစ်ခု ဖန်တီးနိုင်စေပြီး၊ network မှာ သူတို့လုပ်ရမယ့် အလုပ်တွေအတွက် လိုအပ်တဲ့ permission တွေပဲ ပေးထားနိုင်ပါတယ်။_

## Subsite တွေကြား ဘာတွေ မျှဝေပြီး ဘာတွေ မမျှဝေဘူးလဲ

အစောပိုင်းမှာ ပြောခဲ့သလိုပဲ၊ WordPress multisite ရဲ့ အဓိက အားသာချက်တစ်ခုက subsite အားလုံးက configuration တွေ၊ core file တွေ၊ theme တွေ၊ plugin တွေ၊ WordPress core file တွေ စတာတွေကို မျှဝေသုံးစွဲတာပါ။

ဒါပေမယ့် subsite တစ်ခုချင်းစီအတွက် သီးခြား ခွဲထားတဲ့ အရာတွေလည်း ရှိပါတယ်။

\- ဥပမာ subsite တစ်ခုချင်းစီမှာ သူ့ကိုယ်ပိုင် uploads folder ရှိပါတယ်။ ဒါကြောင့် subsite တစ်ခုရဲ့ user တွေ upload လုပ်ထားတဲ့ file တွေကို အခြား subsite ကနေ ဝင်ကြည့်လို့ မရပါဘူး။

\- Subsite တစ်ခုချင်းစီမှာ သူ့ကိုယ်ပိုင် admin panel ရှိပြီး super admin က network active မလုပ်ထားရင် plugin တွေ ဒါမှမဟုတ် theme တွေကို activate ဒါမှမဟုတ် deactivate လုပ်နိုင်ပါတယ်။

\- Database table အများစုကို subsite တစ်ခုချင်းစီအတွက် ဖန်တီးထားပါတယ်။ ဆိုလိုတာက post တွေ၊ comment တွေ၊ page တွေ၊ setting တွေ စတာတွေက subsite တစ်ခုချင်းစီအတွက် သီးခြား ဖြစ်ပါတယ်။

## WordPress Multisite မှာ User စီမံခန့်ခွဲမှု

WordPress multisite မှာ အခက်အခဲတစ်ခုက user စီမံခန့်ခွဲမှုပါ။ WordPress user table က subsite အားလုံးကြား မျှဝေထားတဲ့ table အနည်းငယ်ထဲက တစ်ခုပါ။

ဒီပုံစံက သင့် network နဲ့ ဘာတည်ဆောက်မလဲ ဆိုတဲ့အပေါ် မူတည်ပြီး ပြဿနာတချို့ ဖြစ်နိုင်ပါတယ်။ အောက်က ဥပမာက အဓိက ပြဿနာကို သရုပ်ပြပါတယ်။

အခြေအနေကို စဉ်းစားကြည့်ပါ:

WordPress multisite network တစ်ခု ဖန်တီးပြီး e-commerce store လိုချင်တဲ့ လူတွေကို လစဉ်ကြေးနဲ့ subsite တွေ ပေးစတင်ပါတယ်။

ပထမဆုံး ငွေပေးချေတဲ့ customer – John ရလာပါတယ်။ John အတွက် site တစ်ခု ဖန်တီးပေးပြီး၊ လိုအပ်တဲ့ plugin အားလုံး install လုပ်ပြီး၊ John က သူ့ store ကို စီမံခန့်ခွဲနိုင်ဖို့ user တစ်ခု ဖန်တီးပေးပါတယ်။

ပြီးတော့ customer ဒုတိယ – Alice လာပါတယ်။ သူ့အတွက်လည်း အတူတူ လုပ်ပေးပြီး အခု သူ့မှာလည်း သင့် network မှာ store တစ်ခု ရှိပါပြီ။

John နဲ့ Alice က သင့် customer နှစ်ယောက်လုံးဖြစ်ပေမယ့်၊ သူတို့ချင်း မသိကြပါဘူး။ ပိုအရေးကြီးတာက တစ်ယောက်က နောက်တစ်ယောက်ရဲ့ store website ကို သွားကြည့်ရင်၊ ဒီ store က site network တစ်ခုတည်းမှာ host လုပ်ထားတယ်ဆိုတာ သိစရာ နည်းလမ်းမရှိပါဘူး။

တစ်နေ့ John က ဖိနပ်အသစ်တစ်ရံ ဝယ်ဖို့ လိုလာပြီး Alice ရဲ့ store မှာ ပြည့်စုံတဲ့ ဖိနပ်တွေ တွေ့ပါတယ်။ ဝယ်ယူမှု အပြီးသတ်ဖို့ ကြိုးစားတဲ့အခါ၊ "email already in use" error message ရပါတယ်။ John က Alice ရဲ့ website ကို ပထမဆုံးအကြိမ် လာကြည့်တာ သေချာတာကြောင့် ဒါက ထူးဆန်းပါတယ်။

ဒီမှာ ဘာဖြစ်သွားတာလဲဆိုတော့ John ရဲ့ user က network တစ်ခုလုံးမှာ မျှဝေထားတာကြောင့် Alice ရဲ့ site မှာ checkout လုပ်ဖို့ account ဖန်တီးရင်၊ WordPress က တူညီတဲ့ email address ရှိတဲ့ user ရှိနေပြီလို့ ရှာတွေ့ပြီး error ပြတာပါ။

_မှတ်ချက်: သင့် use-case ပေါ်မူတည်ပြီး ဒါက ဘယ်လောက် ဆိုးနိုင်တယ်ဆိုတာ ကျွန်တော်တို့ သိပါတယ်။ ဒါကြောင့် Ultimate Multisite မှာ ရှိပြီးသား user စစ်ဆေးမှုကို ကျော်ဖြတ်ပြီး တူညီတဲ့ email address နဲ့ account အများအပြား ဖန်တီးနိုင်တဲ့ option ရှိပါတယ်။ Account တစ်ခုချင်းစီက subsite တစ်ခုနဲ့ ချိတ်ဆက်ထားတာကြောင့် ထိပ်တိုက်တိုးမှု ဖြစ်နိုင်ချေ အနည်းဆုံးပါပဲ။ အထက်က ဥပမာမှာ John က error message မရဘဲ ဖိနပ်တွေ ဝယ်နိုင်ပါမယ်။ ဒီ option ကို Enable Multiple Accounts လို့ ခေါ်ပြီး Ultimate Multisite → Settings → Login & Registration မှာ activate လုပ်နိုင်ပါတယ်။_

User table က မျှဝေထားပေမယ့်၊ user တွေကို subsite admin တွေ ဒါမှမဟုတ် super admin က subsite တွေမှာ ထည့်တာ ဖယ်ရှားတာ လုပ်နိုင်ပြီး၊ subsite မတူရင် user role မတူအောင်လည်း သတ်မှတ်နိုင်ပါတယ်။

## Performance ထည့်သွင်းစဉ်းစားချက်များ

WordPress multisite က ပံ့ပိုးနိုင်တဲ့ site အရေအတွက်မှာ အလွန်ထိရောက်ပါတယ်။ [WordPress.com](https://WordPress.com)၊ Edublogs နဲ့ Campuspress တို့အားလုံးက multisite-based service တွေဖြစ်ပြီး site ထောင်ချီ host လုပ်ထားတာက သက်သေပါပဲ။

သီအိုရီအရ WordPress multisite တစ်ခုမှာ host လုပ်နိုင်တဲ့ site အရေအတွက် အများဆုံး ကန့်သတ်ချက် မရှိပေမယ့်၊ လက်တွေ့မှာ ကျေနပ်ဖွယ် run နိုင်တဲ့ site အရေအတွက်က အချက်အမျိုးမျိုးပေါ် မူတည်ပြီး ကွဲပြားနိုင်ပါတယ်: site တွေက ဘယ်လောက် dynamic ဖြစ်သလဲ၊ subsite တွေမှာ ဘယ် plugin တွေ သုံးနိုင်သလဲ စသဖြင့်ပေါ့။

အကြမ်းဖျင်းအားဖြင့်၊ သင့် network က ရိုးရှင်းလေလေ ပိုကောင်းလေလေပါပဲ။ Content က တကယ် dynamic မဟုတ်တဲ့ site တွေကို ဦးစားပေးရင် (ဒါက aggressive caching strategy တွေအတွက် ကောင်းမွန်တဲ့ ကိုယ်စားလှယ်တွေပါ) နဲ့ plugin stack ကို တတ်နိုင်သမျှ ပေါ့ပါးအောင် ထားရင် (active plugin နည်းလေ ပိုကောင်းလေ) host လုပ်နိုင်တဲ့ subsite အရေအတွက်ကို သိသိသာသာ တိုးနိုင်ပါတယ်။

အကောင်းဆုံးအချက်က ဒါအားလုံး WordPress ဖြစ်နေတာကြောင့်၊ performance တိုးတက်စေဖို့ သင်သိပြီးသား နှစ်သက်ပြီးသား tool တွေက multisite network အတွက်လည်း အလုပ်ဖြစ်ပါတယ်။

Multisite အတွက် အဓိက bottleneck က database ဖြစ်ပေမယ့် အခြားအရာတွေ မှန်မှန်ကန်ကန် တပ်ဆင်ထားရင်၊ စိုးရိမ်ဖို့မလိုခင် site ထောင်ချီ ရနိုင်ပါတယ်။ အဲ့အချိန်ရောက်ရင်တောင် တဖြည်းဖြည်း ထပ်ထည့်နိုင်တဲ့ solution တွေ ရှိပါတယ် (ဥပမာ database sharding solution တွေပေါ့)။
