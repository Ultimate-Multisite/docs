---
title: အခြေခံသဘောတရားများ
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# အခြေခံ သဘောတရားများ

WordPress Multisite အသုံးပြုသူ အသစ်တစ်ဦးနှင့် Ultimate Multisite စတင်အသုံးပြုသူတစ်ဦးအတွက် စတင်ချိန်တွင် စကားလုံးနှင့် အသုံးအနှုန်း အသစ်များစွာကို လေ့လာရနိုင်ပါသည်။ ဤအရာများကို လေ့လာသင်ယူခြင်းသည် platform နှင့် ၎င်း၏ လုပ်ဆောင်ပုံ တစ်ခုလုံးကို နားလည်ရန် အရေးကြီးသော အလုပ်တစ်ခု ဖြစ်ပါသည်။

ဤဆောင်းပါးတွင် WordPress ၏ အဓိက သဘောတရားအချို့ကို အဓိပ္ပာယ်ဖွင့်ဆိုပြီး ရှင်းပြပေးပါမည်။ အချို့သော အကြောင်းအရာများသည် အသုံးပြုသူများအတွက် ပိုမိုသက်ဆိုင်ပြီး၊ အချို့က developer များအတွက်၊ အချို့က နှစ်ဖက်စလုံးအတွက် သက်ဆိုင်ပါသည်။

## WordPress Multisite

WordPress **Multisite** သည် WordPress dashboard တစ်ခုတည်းမှ ဝက်ဘ်ဆိုက်များစွာကို ဖန်တီးပြီး စီမံခန့်ခွဲနိုင်သော WordPress installation အမျိုးအစားတစ်ခု ဖြစ်ပါသည်။ ဆိုက်အရေအတွက်၊ feature များ၊ theme များနှင့် user role များအပါအဝင် အရာအားလုံးကို စီမံခန့်ခွဲနိုင်ပါသည်။ ဆိုက်ရာနှင့်ချီ၊ ထောင်နှင့်ချီ စီမံခန့်ခွဲနိုင်ပါသည်။

## Network

WordPress အရ ပြောရလျှင်၊ multisite network ဆိုသည်မှာ dashboard တစ်ခုတည်းမှ **subsite** များစွာကို စီမံခန့်ခွဲနိုင်သော နေရာတစ်ခု ဖြစ်ပါသည်။ Multisite network ဖန်တီးခြင်းသည် hosting provider အလိုက် ကွဲပြားသော်လည်း၊ နောက်ဆုံးရလဒ်အနေဖြင့် **wp-config.php** ဖိုင်တွင် WordPress ကို ဤ mode အထူးတွင် လုပ်ဆောင်နေကြောင်း အသိပေးသော directive အပိုအချို့ ရှိတတ်ပါသည်။

Multisite network နှင့် သီးခြား WordPress installation ကြား ထူးခြားသော ကွာခြားချက်များစွာ ရှိပြီး ၎င်းတို့ကို အတိုချုံး ဆွေးနွေးပါမည်။

## Database

Database ဆိုသည်မှာ ဖွဲ့စည်းထားသော၊ စနစ်တကျ စီစဉ်ထားသော data အစုအဝေး ဖြစ်ပါသည်။ ကွန်ပျူတာ ဝေါဟာရအရ database ဆိုသည်မှာ data ကို သိမ်းဆည်းပြီး စနစ်တကျ စီစဉ်ရန် အသုံးပြုသော software ကို ရည်ညွှန်းပါသည်။ ၎င်းကို table ဟုခေါ်သော အပိုင်းအခြားများတွင် data သိမ်းဆည်းထားသော ဖိုင်တွက် အဖြစ် မြင်ယောင်ကြည့်ပါ။

WordPress Multisite သည် database တစ်ခုတည်း အသုံးပြုပြီး subsite တစ်ခုစီသည် prefix တွင် blog id ပါဝင်သော ၎င်း၏ကိုယ်ပိုင် table များ ရရှိပါသည်။ ထို့ကြောင့် network installation တပ်ဆင်ပြီး subsite တစ်ခု ဖန်တီးပြီးသည်နှင့် ဤ table များ ရှိသင့်ပါသည်:

_wp_1_options_ \- ပထမ subsite အတွက် options table

_wp_2_options_ \- ဒုတိယ subsite အတွက် options table

## Hosting provider

Hosting provider ဆိုသည်မှာ စီးပွားရေးလုပ်ငန်းများနှင့် တစ်ဦးချင်းစီတို့၏ ဝက်ဘ်ဆိုက်များကို World Wide Web မှတစ်ဆင့် အသုံးပြုနိုင်အောင် ဖြစ်စေသော ကုမ္ပဏီတစ်ခု ဖြစ်ပါသည်။ Web hosting provider များ ပေးဆောင်သော ဝန်ဆောင်မှုများသည် ကွဲပြားနိုင်သော်လည်း ပုံမှန်အားဖြင့် ဝက်ဘ်ဆိုက် ဒီဇိုင်း၊ host တွင် သိမ်းဆည်းမှု နေရာနှင့် အင်တာနက်သို့ ချိတ်ဆက်မှုတို့ ပါဝင်ပါသည်။

## Domain

Domain name ဆိုသည်မှာ လူများက သင့်ဆိုက်ကို လာရောက်ကြည့်ရှုရန် အသုံးပြုသော လိပ်စာ ဖြစ်ပါသည်။ ၎င်းသည် web browser ကို သင့်ဆိုက်ကို ရှာဖွေရမည့်နေရာကို ပြောပြပါသည်။ လမ်းလိပ်စာကဲ့သို့ပင် domain သည် လူများ သင့်ဝက်ဘ်ဆိုက်ကို အွန်လိုင်းတွင် လာရောက်ကြည့်ရှုသော နည်းလမ်း ဖြစ်ပါသည်။ ထို့ပြင် သင့်ဆိုင်ရှေ့တွင် ဆိုင်းဘုတ်တပ်ထားသည်နှင့် တူပါသည်။ ကျွန်ုပ်တို့၏ ဝက်ဘ်ဆိုက်ကို လာရောက်ကြည့်ရှုလိုပါက သင့် browser ၏ address တွင် ကျွန်ုပ်တို့၏ web address ဖြစ်သော [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) ကို ရိုက်ထည့်ရပါမည်။ ၎င်းတွင် [**ultimatemultisite.com**](http://ultimatemultisite.com) သည် domain name ဖြစ်ပါသည်။

## Subdomain

Subdomain ဆိုသည်မှာ main domain အောက်ရှိ ဝက်ဘ်ဆိုက် အဆင့်ဆင့် တည်ဆောက်ပုံ အမျိုးအစားတစ်ခု ဖြစ်ပြီး၊ ဝက်ဘ်ဆိုက်ပေါ်တွင် အကြောင်းအရာများကို ဖိုဒါများဖြင့် စနစ်တကျ စီစဉ်မည့်အစား သူ့ဘာသာသူ ဝက်ဘ်ဆိုက်တစ်ခု ရရှိသကဲ့သို့ ဖြစ်ပါသည်။ ၎င်းကို [**https://site1.domain.com/**](https://site1.domain.com/) ဟု ပြသပြီး _site1_ သည် subdomain name ဖြစ်ပြီး [_domain.com_](http://domain.com) သည် main domain ဖြစ်ပါသည်။

## Subdirectory

Subdirectory ဆိုသည်မှာ root domain အောက်ရှိ ဝက်ဘ်ဆိုက် အဆင့်ဆင့် တည်ဆောက်ပုံ အမျိုးအစားတစ်ခု ဖြစ်ပြီး ဝက်ဘ်ဆိုက်ပေါ်တွင် အကြောင်းအရာများကို ဖိုဒါများဖြင့် စနစ်တကျ စီစဉ်ပါသည်။ Subdirectory သည် subfolder နှင့် အတူတူပင် ဖြစ်ပြီး အမည်နှစ်ခုကို တစ်ခုနှင့်တစ်ခု အစားထိုး အသုံးပြုနိုင်ပါသည်။ ၎င်းကို [**https://domain.com/site1**](https://domain.com/site1) ဟု ပြသပြီး _site1_ သည် subdirectory name ဖြစ်ပြီး [_domain.com_](http://domain.com) သည် main domain ဖြစ်ပါသည်။

## Subsite

Subsite ဆိုသည်မှာ Multisite network တွင် သင်ဖန်တီးသော child site ဖြစ်ပါသည်။ ၎င်းသည် သင့် WordPress Multisite installation ကို မည်သို့ configure လုပ်ထားသည်ပေါ် မူတည်၍ **subdomain** သို့မဟုတ် **subdirectory** ဖြစ်နိုင်ပါသည်။

## Super Admin

WordPress Super Admin သည် Multisite network ပေါ်ရှိ subsite များအားလုံးကို စီမံခန့်ခွဲနိုင်သော အပြည့်အဝ စွမ်းဆောင်ရည်ရှိသော user role တစ်ခု ဖြစ်ပါသည်။ Multisite အသုံးပြုသူများအတွက် ၎င်းသည် သင့် WordPress installation တွင် ပေးနိုင်သော **အမြင့်ဆုံး ဝင်ရောက်ခွင့်အဆင့်** ဖြစ်ပါသည်။

## Plugin

ယေဘုယျအားဖြင့် plugin ဆိုသည်မှာ သင့် WordPress ဆိုက်တွင် အပို လုပ်ဆောင်ချက်များ ထည့်သွင်းပေးသော code အစုအဝေး ဖြစ်ပါသည်။ ၎င်းသည် login logo ပြောင်းလဲခြင်းကဲ့သို့ ရိုးရှင်းသော အရာမှ e-commerce လုပ်ဆောင်ချက်များ ထည့်သွင်းခြင်းကဲ့သို့ ရှုပ်ထွေးသော အရာအထိ ဖြစ်နိုင်ပါသည်။ _Woocommerce နှင့် Contact Form_ တို့သည် plugin ဥပမာများ ဖြစ်ပါသည်။

WordPress Multisite တွင် plugin များကို Super Admin မှ network admin dashboard မှသာ install လုပ်နိုင်ပါသည်။ Subsite Admin များသည် ၎င်းတို့၏ subsite အတွင်း plugin များကို activate နှင့် deactivate သာ လုပ်နိုင်ပါသည်။

## Themes

WordPress theme ဆိုသည်မှာ ဆိုက်၏ အလုံးစုံ အသွင်အပြင်ကို သတ်မှတ်ပေးသော ဖိုင်များအစု (_ဂရပ်ဖစ်များ၊ style sheet များနှင့် code_) ဖြစ်ပါသည်။ ၎င်းသည် ဖောင့် style၊ page layout၊ အရောင်များ စသည်တို့ကဲ့သို့ front-end style အားလုံးကို ပံ့ပိုးပေးပါသည်။

Plugin များကဲ့သို့ပင် WordPress Multisite တွင် theme များကို Super Admin မှသာ install လုပ်နိုင်ပြီး subsite admin များက subsite အဆင့်တွင် activate လုပ်နိုင်ပါသည်။

## Site Template

**Site Template** ဆိုသည်မှာ သင့် network တွင် ဆိုက်အသစ်များ ဖန်တီးရာတွင် အခြေခံအဖြစ် အသုံးပြုနိုင်သော boilerplate ဆိုက်တစ်ခု ဖြစ်ပါသည်။

ဆိုလိုသည်မှာ သင်သည် အခြေခံဆိုက်တစ်ခု ဖန်တီးနိုင်ပြီး plugin အမျိုးမျိုး activate လုပ်နိုင်ကာ active theme တစ်ခု သတ်မှတ်နိုင်ပြီး သင်နှစ်သက်သလို ပြုပြင်မွမ်းမံနိုင်ပါသည်။ ထို့နောက် သင့် customer က account အသစ်တစ်ခု ဖန်တီးသောအခါ အတွင်း၌ အဓိပ္ပာယ်ရှိသော အကြောင်းအရာမပါသော default WordPress ဆိုက်တစ်ခု ရမည့်အစား ပြုပြင်မွမ်းမံမှုများနှင့် အကြောင်းအရာများ အားလုံး ပါဝင်ပြီးသား သင့် base site ၏ မိတ္တူတစ်ခု ရရှိမည် ဖြစ်ပါသည်။

## Domain Mapping

WordPress ဖြင့် **Domain mapping** ဆိုသည်မှာ ဝက်ဘ်ဆိုက်၏ လိပ်စာမှတစ်ဆင့် အသုံးပြုသူများကို မှန်ကန်သော host သို့ redirect လုပ်ပေးသော နည်းလမ်းတစ်ခု ဖြစ်ပါသည်။ WordPress Multisite တွင် subsite များကို subdirectory သို့မဟုတ် subdomain အသုံးပြုပြီး ဖန်တီးပါသည်။ Domain mapping လုပ်ဆောင်သည်မှာ subsite အသုံးပြုသူများအား ၎င်းတို့၏ ဆိုက်လိပ်စာကို ပိုမို professional ဆန်အောင် [**joesbikeshop.com**](http://joesbikeshop.com) ကဲ့သို့ top-level domain အသုံးပြုခွင့် ပေးခြင်း ဖြစ်ပါသည်။

## SSL

SSL ဆိုသည်မှာ **Secure Sockets Layer** ကို ကိုယ်စားပြုပါသည်။ ၎င်းသည် ဝက်ဘ်ဆိုက်၏ identity ကို အတည်ပြုပြီး encrypted connection ကို ဖြစ်စေသော digital certificate တစ်ခု ဖြစ်ပါသည်။ ယနေ့ခေတ်တွင် ၎င်းသည် အင်တာနက် ချိတ်ဆက်မှုကို လုံခြုံအောင် ထားရှိရန်နှင့် စနစ်နှစ်ခုကြား ပို့ဆောင်နေသော အရေးကြီးသော data များကို ကာကွယ်ရန် standard နည်းပညာအဖြစ် အသုံးပြုပြီး ရာဇဝတ်ကောင်များက ဖြစ်နိုင်ချေရှိသော ကိုယ်ရေးကိုယ်တာ အချက်အလက်များအပါအဝင် လွှဲပြောင်းထားသော သတင်းအချက်အလက်များကို ဖတ်ခြင်းနှင့် ပြင်ဆင်ခြင်းမှ တားဆီးပါသည်။ ခေတ်မီ browser များသည် SSL လိုအပ်ပြီး ဝက်ဘ်ဆိုက် ဖန်တီးပြီး လည်ပတ်ရာတွင် မရှိမဖြစ် လိုအပ်ပါသည်။

## Media

Media ဆိုသည်မှာ ဝက်ဘ်ဆိုက်တစ်ခုကို ဖွဲ့စည်းသော ပုံများ၊ အသံ၊ ဗီဒီယိုနှင့် အခြား ဖိုင်များ ဖြစ်ပါသည်။

WordPress Multisite တွင် Network site များသည် database တစ်ခုတည်းကို မျှဝေသုံးစွဲသော်လည်း media file များအတွက် filesystem ပေါ်တွင် သီးခြား path များ ထိန်းသိမ်းထားပါသည်။

Standard WordPress တည်နေရာ (wp-content/uploads) သည် ကျန်ရှိနေသော်လည်း ၎င်း၏ path ကို network site ၏ ထူးခြားသော ID ကို ထင်ဟပ်စေရန် ပြောင်းလဲထားပါသည်။ ထို့ကြောင့် network site တစ်ခုအတွက် media file များသည် wp-contents/uploads/site/[id] အဖြစ် ပေါ်လာပါသည်။

## Permalinks

Permalinks ဆိုသည်မှာ သင့်ဆိုက်အတွင်းရှိ တစ်ခုချင်းစီသော blog post သို့မဟုတ် page ၏ permanent URL များ ဖြစ်ပါသည်။ Permalinks ကို **pretty links** ဟုလည်း ခေါ်ဝေါ်ပါသည်။ ပုံမှန်အားဖြင့် WordPress URL များသည် ဤကဲ့သို့ ပုံစံ query string format ကို အသုံးပြုပါသည်:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite သည် WordPress Multisite install များအတွက် ဖန်တီးထားသော WordPress plugin တစ်ခုဖြစ်ပြီး သင့် WordPress install ကို [WordPress.com](https://WordPress.com) ကဲ့သို့ premium network of sites အဖြစ် ပြောင်းလဲပေးကာ client များအား လစဉ်၊ သုံးလတစ်ကြိမ် သို့မဟုတ် နှစ်စဉ် ကြေးများဖြင့် ဆိုက်များ ဖန်တီးခွင့် ပေးပါသည် (Free plan များလည်း ဖန်တီးနိုင်ပါသည်)။

## Checkout Form

Checkout Form ဆိုသည်မှာ Ultimate Multisite registration မှတစ်ဆင့် subsite၊ membership နှင့် user account ဖန်တီးခြင်း ပါဝင်သော single သို့မဟုတ် multi-step order form ဖြစ်ပါသည်။ ၎င်းတွင် အသုံးပြုသူ sign-up လုပ်ငန်းစဉ်အတွင်း submit လုပ်ရမည့် field အမျိုးမျိုးနှင့် payment form များ ပါဝင်ပါသည်။

## Webhook

Webhook (web callback သို့မဟုတ် HTTP push API ဟုလည်း ခေါ်သည်) ဆိုသည်မှာ app တစ်ခုက အခြား application များကို real-time သတင်းအချက်အလက် ပေးနိုင်သော နည်းလမ်းတစ်ခု ဖြစ်ပါသည်။ Webhook သည် data ဖြစ်ပေါ်သည်နှင့် အခြား application များသို့ ပို့ဆောင်ပေးသောကြောင့် data ကို ချက်ချင်း ရရှိပါသည်။

**Ultimate Multisite webhooks** သည် အကန့်အသတ်မဲ့ ဖြစ်နိုင်ခြေများကို ဖွင့်ပေးပြီး network admin များအား အထူးသဖြင့် _Zapier နှင့် IFTTT_ ကဲ့သို့ service များနှင့် တွဲဖက်အသုံးပြုပါက ထူးဆန်းသော်လည်း အသုံးဝင်သော integration အမျိုးမျိုး လုပ်ဆောင်နိုင်စေပါသည်။

## Events

Event ဆိုသည်မှာ mouse click ကဲ့သို့ အသုံးပြုသူ သို့မဟုတ် အခြား source ၏ action ကြောင့် ဖြစ်ပေါ်လာသော action တစ်ခု ဖြစ်ပါသည်။ Ultimate Multisite သည် သင့် network တစ်ခုလုံးအတွင်း ဖြစ်ပေါ်နေသော event နှင့် log များအားလုံးကို မှတ်တမ်းတင်ထားပါသည်။ ၎င်းသည် plan ပြောင်းလဲမှုများကဲ့သို့ သင့် multisite တွင် ဖြစ်ပေါ်နေသော လှုပ်ရှားမှု အမျိုးမျိုးကို ခြေရာခံပါသည်။
