---
title: သင့်မှတ်ပုံတင်ဖောင်ကို စိတ်ကြိုက်ပြင်ဆင်ခြင်း
sidebar_position: 17
_i18n_hash: 01f3aeee38a564a8b5c4676a229748cf
---
# သင့် Registration Form ကို စိတ်ကြိုက် ပြုပြင်ခြင်း

WordPress platform ပေါ်မှာ တည်ဆောက်ထားတဲ့ တခြား SaaS တွေနဲ့ မတူအောင် သင့် network ကို ထူးခြားအောင် ပြုလုပ်ဖို့အတွက်၊ Ultimate Multisite က **Checkout Forms** feature နဲ့ သင့် registration နဲ့ login pages တွေကို စိတ်ကြိုက် ပြုပြင်နိုင်အောင် လုပ်ပေးပါတယ်။

ဒီ forms တွေဟာ customer အသစ်တွေကို ပြောင်းလဲရယူဖို့ ကြိုးစားတဲ့အခါ နည်းလမ်းအမျိုးမျိုးနဲ့ စမ်းသပ်ဖို့ လွယ်ကူပြီး ပြောင်းလွယ်ပြင်လွယ် နည်းလမ်းတစ်ခု ဖြစ်ပေမယ့်၊ အဓိကအားဖြင့်တော့ ကိုယ်ပိုင် registration forms တွေ ဖန်တီးဖို့ အသုံးပြုကြပါတယ်။ ဒီဆောင်းပါးက သင် ဘယ်လိုလုပ်နိုင်တယ်ဆိုတာ ပြသပေးမှာ ဖြစ်ပါတယ်။

## Login နှင့် registration pages များ:

Ultimate Multisite ကို install လုပ်လိုက်တာနဲ့၊ သင့် main site မှာ custom login နဲ့ registration pages တွေကို အလိုအလျောက် ဖန်တီးပေးပါတယ်။ ဒီ default pages တွေကို **Ultimate Multisite > Settings > Login & Registration** page အောက်ကနေ အချိန်မရွေး ပြောင်းလဲနိုင်ပါတယ်။

![Login and Registration settings page](/img/config/settings-general.png)

**Login & Registration** page မှာ စိတ်ကြိုက်ပြုပြင်နိုင်တဲ့ option တစ်ခုချင်းစီကို ကြည့်ရအောင်:

  * **Enable registration:** ဒီ option က သင့် network မှာ registration ကို ဖွင့်ခြင်း သို့မဟုတ် ပိတ်ခြင်း လုပ်ပေးပါတယ်။ ပိတ်ထားရင် သင့် customers တွေ register လုပ်ပြီး သင့် products တွေကို subscribe လုပ်လို့ ရမှာ မဟုတ်ပါဘူး။

  * **Enable email verification:** ဒီ option ကို ဖွင့်ထားရင်၊ free plan သို့မဟုတ် trial period ပါတဲ့ paid plan ကို subscribe လုပ်တဲ့ customers တွေ verification email ရရှိမှာ ဖြစ်ပြီး သူတို့ websites တွေ ဖန်တီးခံရဖို့ verification link ကို နှိပ်ရပါမယ်။

  * **Default registration page:** ဒါက registration အတွက် default page ဖြစ်ပါတယ်။ ဒီ page ကို သင့် website မှာ publish လုပ်ထားရမယ်၊ ပြီးတော့ registration form (checkout form လို့လည်း ခေါ်ပါတယ်) - သင့် clients တွေ သင့် products တွေကို subscribe လုပ်မယ့်နေရာ ပါရမယ်။ Registration pages နဲ့ checkout forms ကို သင်လိုသလောက် ဖန်တီးနိုင်ပါတယ်၊ checkout form shortcode ကို registration page မှာ ထည့်ဖို့ မမေ့ပါနဲ့၊ မထည့်ရင် ပေါ်မှာ မဟုတ်ပါဘူး။

  * **Use custom login page:** ဒီ option က default wp-login.php page အစား စိတ်ကြိုက် ပြုပြင်ထားတဲ့ login page ကို သုံးနိုင်စေပါတယ်။ ဒီ option ကို ဖွင့်ထားရင်၊ **Default login page** option (အောက်မှာရှိတဲ့) မှာ ဘယ် page ကို login အတွက် သုံးမလဲ ရွေးချယ်နိုင်ပါတယ်။

  * **Obfuscate the original login url (wp-login.php):** မူရင်း login URL ကို ဖျောက်ချင်ရင် ဒီ option ကို ဖွင့်နိုင်ပါတယ်။ ဒါက brute-force attacks တွေကို ကာကွယ်ဖို့ အသုံးဝင်ပါတယ်။ ဒီ option ကို ဖွင့်ထားရင်၊ user တစ်ယောက် မူရင်း wp-login.php link ကို ဝင်ကြည့်ဖို့ ကြိုးစားတဲ့အခါ Ultimate Multisite က 404 error ပြပေးမှာ ဖြစ်ပါတယ်။

  * **Force synchronous site publication:** Customer တစ်ယောက် network မှာ product ကို subscribe လုပ်ပြီးတဲ့နောက်၊ pending site အသစ်ကို တကယ့် network site အဖြစ် ပြောင်းလဲရပါမယ်။ Publishing process က Job Queue ကနေ asynchronously ဖြစ်ပါတယ်။ Publication ကို signup နဲ့ တစ်ခါတည်း request မှာ ဖြစ်စေဖို့ ဒီ option ကို ဖွင့်ပါ။

အခု Login & Registration page တူညီမှာပဲ **Other options** အောက်မှာရှိတဲ့ login နဲ့ registration process နဲ့ ဆိုင်တဲ့ တခြား options တွေကို ကြည့်ရအောင်:

  * **Default role:** ဒါက signup process ပြီးတဲ့နောက် သင့် customers တွေ သူတို့ website မှာ ရရှိမယ့် role ဖြစ်ပါတယ်။

  * **Add users to the main site as well:** ဒီ option ကို ဖွင့်ရင် signup process ပြီးတဲ့နောက် user ကို သင့် network ရဲ့ main site မှာလည်း ထည့်ပေးမှာ ဖြစ်ပါတယ်။ ဒီ option ကို ဖွင့်ရင်၊ သင့် website မှာ ဒီ users တွေရဲ့ **default role** ကို သတ်မှတ်ဖို့ option တစ်ခု အောက်မှာ ပေါ်လာမှာ ဖြစ်ပါတယ်။

  * **Enable multiple accounts:** Users တွေကို သင့် network ရဲ့ မတူညီတဲ့ sites တွေမှာ email address တစ်ခုတည်းနဲ့ accounts ရှိခွင့် ပြုပါတယ်။ ဒီ option ကို ပိတ်ထားရင်၊ သင့် customers တွေ သင့် network မှာ run နေတဲ့ တခြား websites တွေမှာ email address တစ်ခုတည်းနဲ့ account ဖန်တီးလို့ ရမှာ မဟုတ်ပါဘူး။

ဒါဆိုရင် login နဲ့ registration နဲ့ ဆိုင်တဲ့ စိတ်ကြိုက်ပြုပြင်နိုင်တဲ့ options အားလုံး ပြီးပါပြီ! ပြင်ဆင်ပြီးတဲ့နောက် သင့် settings တွေကို save လုပ်ဖို့ မမေ့ပါနဲ့။

## Registration forms အများအပြား အသုံးပြုခြင်း:

Ultimate Multisite 2.0 မှာ checkout form editor ပါဝင်ပြီး fields အမျိုးမျိုး၊ ရောင်းချမယ့် products အမျိုးမျိုးနဲ့ forms သင်လိုသလောက် ဖန်တီးနိုင်ပါတယ်။

Login နဲ့ registration pages နှစ်ခုလုံးကို shortcodes နဲ့ ထည့်သွင်းထားပါတယ်: login page မှာ **[wu_login_form]** နဲ့ registration page အတွက် **[wu_checkout]**။ Checkout forms တွေ တည်ဆောက်ခြင်း သို့မဟုတ် ဖန်တီးခြင်းဖြင့် registration page ကို ပိုမို စိတ်ကြိုက်ပြုပြင်နိုင်ပါတယ်။

ဒီ feature ကို ဝင်ရောက်ဖို့ ဘယ်ဘက် side-bar မှာရှိတဲ့ **Checkout Forms** menu ကို သွားပါ။

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

ဒီ page မှာ သင်မှာရှိတဲ့ checkout forms အားလုံးကို မြင်ရပါမယ်။

အသစ်တစ်ခု ဖန်တီးချင်ရင်၊ page ရဲ့ အပေါ်မှာရှိတဲ့ **Add Checkout Form** ကို နှိပ်ပါ။

သင့် စတင်ရာအတွက် ဒီ options သုံးခုထဲက တစ်ခုကို ရွေးနိုင်ပါတယ်: single step၊ multi-step သို့မဟုတ် blank။ ပြီးရင် **Go to the Editor** ကို နှိပ်ပါ။

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

တစ်နည်းအားဖြင့်၊ သင့်မှာ ရှိပြီးသား forms တွေကို သူ့နာမည်အောက်မှာရှိတဲ့ options တွေကို နှိပ်ပြီး edit သို့မဟုတ် duplicate လုပ်နိုင်ပါတယ်။ အဲ့မှာ form ရဲ့ shortcode ကို copy လုပ်ဖို့ သို့မဟုတ် form ကို delete လုပ်ဖို့ options တွေလည်း တွေ့ရပါမယ်။

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Single step သို့မဟုတ် multi-step ကို ရွေးရင်၊ checkout form မှာ အလုပ်လုပ်ဖို့ လိုအပ်တဲ့ basic steps တွေ ကြိုတင် ဖြည့်ထားပြီးသား ဖြစ်ပါမယ်။ ပြီးရင် လိုချင်ရင် steps တွေ ထပ်ထည့်နိုင်ပါတယ်။

### Checkout Form တစ်ခုကို ပြင်ဆင်ခြင်း:

အရင်က ပြောခဲ့သလို ရည်ရွယ်ချက် အမျိုးမျိုးအတွက် checkout forms တွေ ဖန်တီးနိုင်ပါတယ်။ ဒီ ဥပမာမှာတော့ registration form တစ်ခုအပေါ် လုပ်ဆောင်ပါမယ်။

Checkout form editor ကို သွားပြီးတဲ့နောက်၊ သင့် form ကို နာမည်တစ်ခုပေးပါ (internal reference အတွက်သာ သုံးပါမယ်) နဲ့ slug တစ်ခု (shortcodes ဖန်တီးဖို့ သုံးပါမယ်)။

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Forms တွေကို steps နဲ့ fields တွေနဲ့ ဖွဲ့စည်းထားပါတယ်။ **Add New Checkout Step** ကို နှိပ်ပြီး step အသစ် ထည့်နိုင်ပါတယ်။

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Modal window ရဲ့ ပထမ tab မှာ သင့် form ရဲ့ step အတွက် content ကို ဖြည့်ပါ။ ID၊ နာမည်နဲ့ description ပေးပါ။ ဒီ items တွေကို အများအားဖြင့် internal အတွက်သာ သုံးပါတယ်။

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step.png)

ပြီးရင် step ရဲ့ visibility ကို သတ်မှတ်ပါ။ **Always show**၊ **Only show for logged in users** သို့မဟုတ် **Only show for guests** ကို ရွေးနိုင်ပါတယ်။

![Checkout step visibility options](/img/config/checkout-form-step.png)

နောက်ဆုံးအနေနဲ့ step style ကို configure လုပ်ပါ။ ဒါတွေက optional fields တွေ ဖြစ်ပါတယ်။

![Checkout step style configuration](/img/config/checkout-form-step.png)

အခု ကျွန်တော်တို့ ပထမ step မှာ fields တွေ ထည့်ဖို့ အချိန်ရောက်ပါပြီ။ **Add New Field** ကို နှိပ်ပြီး သင်လိုချင်တဲ့ section အမျိုးအစားကို ရွေးပါ။

![Add New Field button](/img/config/checkout-form-editor.png)![Field type selection dropdown](/img/config/checkout-form-step.png)

Field တစ်ခုချင်းစီမှာ ဖြည့်ရမယ့် parameters အမျိုးမျိုး ရှိပါတယ်။ ပထမဆုံး ဝင်ခုအတွက် **Username** field ကို ရွေးပါမယ်။

![Username field configuration](/img/config/checkout-form-step.png)![Username field parameters](/img/config/checkout-form-step.png)![Username field additional settings](/img/config/checkout-form-step.png)

သင်လိုအပ်သလောက် steps နဲ့ fields တွေ ထည့်နိုင်ပါတယ်။ သင့် customers တွေ ရွေးချယ်ဖို့ products တွေကို ပြသဖို့ Pricing Table field ကို သုံးပါ။ သင့် clients တွေကို template ရွေးခွင့်ပေးချင်ရင် Template Selection field ကို ထည့်ပါ။ စသည်ဖြင့်။

_**မှတ်ချက်:** သင့် checkout form ဖန်တီးပြီးမှ product ဖန်တီးရင်၊ ထို product ကို Pricing table section မှာ ထည့်ရပါမယ်။ မထည့်ရင် registration page မှာ သင့် customers တွေကို product ပေါ်မှာ မဟုတ်ပါဘူး။_

_**မှတ်ချက် ၂:** username၊ email၊ password၊ site title၊ site URL၊ order summary၊ payment နဲ့ submit button တို့သည် checkout form ဖန်တီးဖို့ မဖြစ်မနေ ထည့်ရမယ့် fields တွေ ဖြစ်ပါတယ်။_

သင့် checkout form ကို လုပ်ဆောင်နေစဉ်၊ သင့် clients တွေ form ကို ဘယ်လိုမြင်ရမလဲဆိုတာ ကြည့်ဖို့ Preview button ကို အမြဲ သုံးနိုင်ပါတယ်။ Existing user သို့မဟုတ် visitor အနေနဲ့ ကြည့်တာကိုလည်း ပြောင်းနိုင်ပါတယ်။

![Preview button on the checkout form editor](/img/config/checkout-form-editor.png)![Checkout form preview as visitor or existing user](/img/config/checkout-form-editor.png)

နောက်ဆုံးအနေနဲ့ **Advanced Options** မှာ **Thank You** page အတွက် message ကို configure လုပ်နိုင်ပါတယ်၊ conversions တွေ track လုပ်ဖို့ snippets တွေ ထည့်နိုင်ပါတယ်၊ သင့် checkout form မှာ custom CSS ထည့်နိုင်ပါတယ် သို့မဟုတ် အချို့နိုင်ငံတွေအတွက်သာ ကန့်သတ်နိုင်ပါတယ်။

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

ညာဘက် column မှာရှိတဲ့ ဒီ option ကို toggle လုပ်ပြီး သင့် checkout form ကို manually ဖွင့်ခြင်း သို့မဟုတ် ပိတ်ခြင်း လုပ်နိုင်ပါတယ်၊ သို့မဟုတ် form ကို အပြီးအပိုင် delete လုပ်နိုင်ပါတယ်။

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

သင့် checkout form ကို save လုပ်ဖို့ မမေ့ပါနဲ့!

![Save Checkout Form button](/img/config/checkout-form-save.png)

သင့် form ရဲ့ shortcode ရဖို့ **Generate Shortcode** ကို နှိပ်ပြီး modal window မှာ ပြထားတဲ့ result ကို copy လုပ်ပါ။

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**မှတ်ချက်:** ဒီ checkout form ကို ထည့်ဖို့ ဒီ shortcode ကို သင့် registration page မှာ ထည့်ရပါမယ်။_

## URL parameters မှတဆင့် products နှင့် templates များကို ကြိုတင်ရွေးချယ်ခြင်း:

သင့် products တွေအတွက် စိတ်ကြိုက် pricing tables တွေ ဖန်တီးချင်ပြီး သင့် pricing table သို့မဟုတ် templates page ကနေ သင့် customer ရွေးချယ်တဲ့ product သို့မဟုတ် template ကို checkout form မှာ ကြိုတင်ရွေးချယ်ထားချင်ရင်၊ URL parameters တွေကို သုံးနိုင်ပါတယ်။

### **Plans အတွက်:**

**Ultimate Multisite > Products > Select a plan** ကို သွားပါ။ Page ရဲ့ အပေါ်မှာ **Click to copy Shareable Link** button ကို တွေ့ရပါမယ်။ ဒါက သင့် checkout form မှာ ဒီ plan ကို ကြိုတင်ရွေးချယ်ဖို့ သုံးနိုင်တဲ့ link ဖြစ်ပါတယ်။

![Product page with shareable link button](/img/config/products-list.png)

ဒီ shareable link က **Plans** အတွက်သာ အကျုံးဝင်ကြောင်း သတိပြုပါ။ Packages သို့မဟုတ် services တွေအတွက် shareable links တွေ သုံးလို့ မရပါဘူး။

### Templates အတွက်:

သင့် checkout form မှာ site templates တွေကို ကြိုတင်ရွေးချယ်ချင်ရင်၊ သင့် registration page URL မှာ parameter: **?template_id=X** ကို သုံးနိုင်ပါတယ်။ "X" ကို **site template ID number** နဲ့ အစားထိုးရပါမယ်။ ဒီ number ကို ရဖို့ **Ultimate Multisite > Sites** ကို သွားပါ။

သင်သုံးချင်တဲ့ site template အောက်မှာရှိတဲ့ **Manage** ကို နှိပ်ပါ။ SITE ID number ကို တွေ့ရပါမယ်။ ဒီ number ကို သင့် checkout form မှာ ဒီ site template ကို ကြိုတင်ရွေးချယ်ထားဖို့ သုံးပါ။ ဒီမှာ ကျွန်တော်တို့ ကိစ္စမှာ URL parameter က **?template_id=2** ဖြစ်ပါမယ်။

![Sites list showing site template ID](/img/config/site-templates-list.png)

ကျွန်တော်တို့ network website က [**www.mynetwork.com**](http://www.mynetwork.com) ဖြစ်ပြီး ကျွန်တော်တို့ checkout form ပါတဲ့ registration page က **/register** page မှာ ရှိတယ်ဆိုပါစို့။ ဒီ site template ကြိုတင်ရွေးချယ်ထားတဲ့ URL တစ်ခုလုံးက [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2** ဖြစ်ပါမယ်။

သင်လိုချင်ရင် products နဲ့ templates နှစ်ခုလုံးကို သင့် checkout form မှာ ကြိုတင်ရွေးချယ်နိုင်ပါတယ်။ Plan ရဲ့ shareable link ကို copy လုပ်ပြီး template parameter ကို အဆုံးမှာ ကပ်ထည့်ရုံပါပဲ။ [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2** လို ဖြစ်ပါမယ်။
