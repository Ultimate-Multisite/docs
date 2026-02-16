---
title: ကုဒ်အပိုင်းအစများ
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# v2 အတွက် Code Snippets များ

အခြေခံအားဖြင့်၊ **WordPress** အတွက် code snippets များကို သီးခြား plugin ငယ်တစ်ခု လိုအပ်နိုင်သည့် အလုပ်များကို လုပ်ဆောင်ရန် အသုံးပြုပါသည်။ ထို code snippets များကို WordPress core သို့မဟုတ် theme ဖိုင်များထဲတွင် (များသောအားဖြင့် သင့် theme ၏ functions.php ဖိုင်တွင်) ထည့်သွင်းနိုင်ပြီး MU plugin အဖြစ်လည်း အသုံးပြုနိုင်ပါသည်။

ဤဆောင်းပါးတွင် **Ultimate Multisite v2** နှင့် အသုံးပြုနိုင်သော code snippets သုံးခုကို ပြသပေးပါမည်:

  * [**Account menu item ၏ တည်နေရာကို ပြောင်းလဲခြင်း**](#changing-the-position-of-the-account-menu-item)

  * [**အသုံးပြုသူသည် သတ်မှတ်ထားသော plan တစ်ခုအောက်တွင် ရှိမရှိ နှင့်/သို့မဟုတ် active subscription ရှိမရှိ စစ်ဆေးနည်း**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Mapped domains များတွင် Font-Icons နှင့် CORS ပြဿနာများကို ဖြေရှင်းခြင်း**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Account menu item ၏ တည်နေရာကို ပြောင်းလဲခြင်း

သင့် client ၏ Dashboard တွင် Account menu item ၏ တည်နေရာကို ပြောင်းလဲရန်၊ အောက်ပါ code snippet ကို သင့် main site ၏ active theme ၏ functions.php တွင် ထည့်သွင်းပါ။ ထို snippet ကို သင့် mu-plugins သို့မဟုတ် custom plugins ထဲတွင်လည်း ထည့်သွင်းနိုင်ပါသည်။

add_filter('wu_my_account_menu_position', function() { return 10; // menu ကို လိုချင်သော နေရာတွင် ထားရန် ဤတန်ဖိုးကို ချိန်ညှိပါ။

## အသုံးပြုသူသည် သတ်မှတ်ထားသော plan တစ်ခုအောက်တွင် ရှိမရှိ နှင့်/သို့မဟုတ် active subscription ရှိမရှိ စစ်ဆေးနည်း

Network admin အနေဖြင့်၊ သင်သည် subscribers သို့မဟုတ် end-users အုပ်စုတစ်ခုအတွက် ၎င်းတို့၏ subscription status နှင့် subscribe လုပ်ထားသော plan အပေါ် အခြေခံ၍ အခြေခံ လုပ်ဆောင်ချက်များ လုပ်ဆောင်ရန် သို့မဟုတ် service/feature တစ်ခုကို ရရှိစေရန် custom functions များ ဖန်တီးရန် လိုအပ်နိုင်ပါသည်။

ဤ Ultimate Multisite native functions များသည် ထိုကိစ္စတွင် သင့်ကို ကူညီပေးပါလိမ့်မည်။

အသုံးပြုသူသည် သတ်မှတ်ထားသော plan တစ်ခု၏ member ဟုတ်မဟုတ် စစ်ဆေးရန်၊ ဤ function ကို အသုံးပြုနိုင်ပါသည်:

wu_has_plan($user_id, $plan_id)

Subscription သည် active ဖြစ်မဖြစ် စစ်ဆေးရန်၊ ဤ function ကို အသုံးပြုနိုင်ပါသည်:

wu_is_active_subscriber($user_id)

အောက်တွင် လက်ရှိအသုံးပြုသူသည် သတ်မှတ်ထားသော plan (_Plan ID 50_) အောက်တွင် ရှိမရှိနှင့် အသုံးပြုသူ၏ subscription သည် active ဖြစ်မဖြစ် စစ်ဆေးသော snippet နမူနာ ဖြစ်ပါသည်။

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // အသုံးပြုသူသည် PLAN ၏ MEMBER ဖြစ်ပြီး SUBSCRIPTION သည် ACTIVE ဖြစ်သည်၊ လုပ်ဆောင်ချက်များ လုပ်ပါ} else { // အသုံးပြုသူသည် PLAN ၏ MEMBER မဟုတ်ပါ -- သို့မဟုတ် -- SUBSCRIPTION သည် ACTIVE မဖြစ်ပါ၊ အခြား လုပ်ဆောင်ချက်များ လုပ်ပါ} // end if;

_**wu_has_plan**_ သည် အလုပ်လုပ်ရန် "Plan ID" လိုအပ်ကြောင်း သတိပြုပါ။

Plan ၏ ID ကို ရယူရန်၊ **Ultimate Multisite > Products** သို့ သွားနိုင်ပါသည်။ product တစ်ခုစီ၏ ID ကို table ၏ ညာဘက်တွင် ပြသထားပါသည်။

အသုံးပြုသူများသည် **Plan** တစ်ခုကိုသာ subscribe လုပ်နိုင်ပြီး Package သို့မဟုတ် Service ကို subscribe လုပ်၍ မရပါ၊ အဘယ်ကြောင့်ဆိုသော် ၎င်းတို့သည် **Plan** အတွက် add-ons များသာ ဖြစ်သောကြောင့် ဖြစ်ပါသည်။

![Plan IDs များကို ပြသထားသော Products list](/img/admin/products-list.png)

## Mapped domains များတွင် Font-Icons နှင့် CORS ပြဿနာများကို ဖြေရှင်းခြင်း
## Mapped domains များတွင် Font-Icons နှင့် CORS ပြဿနာများကို ဖြေရှင်းခြင်း

Sub-site တစ်ခုသို့ domain တစ်ခုကို map လုပ်ပြီးနောက် site သည် custom fonts များကို load လုပ်ရာတွင် ပြဿနာရှိနေသည်ကို တွေ့ရှိနိုင်ပါသည်။ ၎င်းသည် သင့် server settings တွင် cross-origin block ကြောင့် ဖြစ်ပေါ်ပါသည်။

Font files များကို CSS မှ တိုက်ရိုက် load လုပ်လေ့ရှိသောကြောင့်၊ ကျွန်ုပ်တို့၏ domain mapping plugin သည် URLs များကို မူလ domain အစား mapped domain ကို အသုံးပြုရန် rewrite လုပ်နိုင်ခြင်း မရှိပါ၊ ထို့ကြောင့် ပြဿနာကို ဖြေရှင်းရန် သင့် server configuration files များကို ပြင်ဆင်ရန် လိုအပ်ပါသည်။

အောက်တွင် Apache နှင့် NGINX အတွက် ပြဿနာကို ဖြေရှင်းရန် code snippets များ ရှိပါသည်။ ဤပြောင်းလဲမှုများအတွက် server configuration files (.htaccess files နှင့် NGINX config files) ဆိုင်ရာ အဆင့်မြင့် အသိပညာ လိုအပ်ပါသည်။ ထိုပြောင်းလဲမှုများကို ကိုယ်တိုင်လုပ်ဆောင်ရန် အဆင်မပြေပါက၊ အကူအညီ တောင်းဆိုသောအခါ ဤစာမျက်နှာကို သင့် hosting provider support agents ထံ ပေးပို့ပါ။

### Apache

သင့် .htaccess ဖိုင်တွင်၊ ဤကို ထည့်သွင်းပါ:

<FilesMatch ".(ttf|ttc|otf|eot|woff|font.css|css)$"> Header set Access-Control-Allow-Origin "*" 

### NGINX

သင့် server config ဖိုင်တွင် (တည်နေရာသည် server တစ်ခုနှင့်တစ်ခု ကွဲပြားပါသည်)၊ ဤကို ထည့်သွင်းပါ:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin "*";}
