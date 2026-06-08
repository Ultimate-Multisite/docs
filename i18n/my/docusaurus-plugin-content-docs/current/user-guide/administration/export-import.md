---
title: တင်ပို့ခြင်းနှင့် တင်သွင်းခြင်း
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Export & Import

Ultimate Multisite 2.9.0 မှာ **Tools > Export & Import** အောက်မှာ single-site အတွက် **Export & Import** tool အသစ်တစ်ခု ထည့်ပေးထားပါတယ်။ ဒီ tool ကို သုံးရမှာက WordPress site တစ်ခုလုံးကို ZIP file အဖြစ် ထုပ်ပိုးချင်တဲ့အခါ၊ အဲဒီ ZIP ကို ပြန်လည် restore လုပ်ချင်တဲ့အခါ ဒါမှမဟုတ် site တစ်ခုကို compatible Ultimate Multisite နဲ့ single-site WordPress installation တွေကြား ရွှေ့ပြောင်းချင်တဲ့အခါမျိုးတွေမှာ အသုံးပြုနိုင်ပါတယ်။

## လိုအပ်သော ခွင့်ပြုချက်များ

Export လုပ်မယ့် ဒါမှမဟုတ် Import လုပ်မယ့် site မှာ WordPress ရဲ့ **Tools** menu ကို ဝင်ရောက်နိုင်တဲ့ administrator အကောင့်နဲ့ sign in လုပ်ထားရပါမယ်။ Multisite network တစ်ခုမှာ network-level Ultimate Multisite tools တွေကနေ subsite တွေကို export ဒါမှမဟုတ် import လုပ်တဲ့အခါ network administrator အကောင့်ကို အသုံးပြုရပါမယ်။

Export ZIP download တွေဟာ အတည်ပြုထားတဲ့ download endpoint ကနေ ပေးပို့တာဖြစ်လို့ download ပြီးတဲ့အထိ admin session ကို အမြဲတမ်း ဖွင့်ထားပေးရပါမယ်။ ပြီးတော့ generate လုပ်ထားတဲ့ download URL တွေကို အများသိအောင် မျှဝေတာမျိုး မလုပ်ပါနဲ့။

## Site တစ်ခုကို ZIP အဖြစ် Export လုပ်ခြင်း

၁။ ကူးချလိုတဲ့ site ရဲ့ WordPress admin မှာ **Tools > Export & Import** ကို သွားပါ။
၂။ export လုပ်မယ့် နေရာကို ဖွင့်ပြီး ထုပ်ပိုးလိုတဲ့ site ကို ရွေးချယ်ပါ။
၃။ ရွေးချယ်စရာရှိတဲ့ content တွေ (ဥပမာ- uploads, plugins, themes) ကိုလည်း ရွေးချယ်ထည့်သွင်းနိုင်ပါတယ်။
၄။ Export ကို စတင်ပြီး လုပ်ငန်းစဉ် ပြီးဆုံးဖို့ စောင့်ပါ။ site ကြီးတွေဆိုရင် ZIP အဆင်သင့်ဖြစ်ဖို့ နောက်ကွယ်မှာ အချိန်ယူရနိုင်ပါတယ်။
၅။ export လုပ်ပြီးတဲ့ ZIP ကို exports list ကနေ download လုပ်ပါ။

ဒီ ZIP ကို လုံခြုံတဲ့ နေရာမှာ သိမ်းထားပါ။ အဲဒီထဲမှာ site content၊ settings၊ media files နဲ့ ရွေးချယ်ထားတဲ့ code assets တွေ ပါဝင်နိုင်ပါတယ်။

## Export ထဲမှာ ဘာတွေ ပါဝင်သလဲ

Export ZIP တစ်ခုထဲမှာ အောက်ပါအရာတွေ ပါဝင်နိုင်ပါတယ်-

- ရွေးချယ်ထားတဲ့ site ရဲ့ database content နဲ့ configuration အချက်အလက်များ။
- uploads တွေကို ထည့်သွင်းထားရင် media files တွေ။
- plugins နဲ့ themes တွေကို ရွေးချယ်ထားရင် အဲဒီအရာများ။
- Target installation ပေါ်မှာ site ကို ပြန်လည်တည်ဆောက်ဖို့ Export & Import tool က အသုံးပြုတဲ့ import metadata များ။

ZIP ရဲ့ တိကျတဲ့ အရွယ်အစားက media ပမာဏ၊ ရွေးချယ်ထားတဲ့ plugins နဲ့ themes တွေ၊ နဲ့ site ရဲ့ database table တွေရဲ့ အရွယ်အစားပေါ် မူတည်ပါတယ်။

## ZIP တစ်ခုကနေ Site တစ်ခုကို Import လုပ်ခြင်း

၁။ ပစ်မှတ် (destination) WordPress site မှာ **Tools > Export & Import** ကို သွားပါ။
၂။ import လုပ်မယ့် နေရာကို ဖွင့်ပြီး Export & Import tool နဲ့ ဖန်တီးထားတဲ့ ZIP ကို upload လုပ်ပါ။
၃။ site က address အသစ်ကို သုံးရမှာဆိုရင် replacement URL တစ်ခု ထည့်ပေးပါ၊ ဒါမှမဟုတ် မူရင်း URL ကို ထိန်းသိမ်းချင်ရင် ဒီ field ကို ဘာမှမထည့်ဘဲထားခဲ့ပါ။
၄။ import ပြီးတဲ့အခါ upload လုပ်ထားတဲ့ ZIP ကို ဖျက်ပစ်မလားဆိုတာ ရွေးချယ်ပါ။
၅။ **Begin Import** ကို နှိပ်ပါ။
၆။ import ပြီးဆုံးတဲ့အထိ pending import ကို စောင့်ကြည့်ပါ။ လုပ်ငန်းစဉ် မပြီးခင် ရပ်ချင်မှသာ **Cancel Import** ကို အသုံးပြုပါ။
၇။ ပုံမှန် traffic ဒါမှမဟုတ် customer တွေ ဝင်ရောက်ခွင့် ပေးခင် import လုပ်ထားတဲ့ site ကို သေချာပြန်စစ်ဆေးပါ။

single-site WordPress installation တစ်ခုမှာ ZIP ကို import လုပ်တာဟာ လက်ရှိ site ကို import လုပ်ထားတဲ့ site နဲ့ အစားထိုးလိုက်တာမျိုး ဖြစ်ပါတယ်။ ဒါကြောင့် စတင်ခင်မှာ ပစ်မှတ် site ရဲ့ backup အပြည့်အစုံကို လုပ်ထားသင့်ပြီး၊ site တစ်ခုတည်းအတွက် import မျိုးစုံကို တစ်ချိန်တည်းမှာ စတင်တာမျိုး ရှောင်ရှားသင့်ပါတယ်။

## ကန့်သတ်ချက်များနှင့် တွဲဖက်အသုံးပြုနိုင်မှု အချက်များ

- အလွန်ကြီးမားတဲ့ uploads directory ဒါမှမဟုတ် media library တွေကနေ ZIP file ကြီးတွေ ထွက်လာနိုင်ပါတယ်။ ဒါကြောင့် site ကြီးတွေကို export ဒါမှမဟုတ် import လုပ်တဲ့အခါ PHP upload limits၊ execution limits၊ disk space၊ memory နဲ့ server timeout settings တွေကို ကြိုတင်စစ်ဆေးသင့်ပါတယ်။
- အလွန်ကြီးမားတဲ့ media library တွေကတော့ traffic နည်းတဲ့ maintenance window အချိန်မှာ ရွှေ့ပြောင်းဖို့ လိုအပ်နိုင်ပါတယ်။
- ပစ်မှတ် WordPress installation ဟာ compatible WordPress၊ PHP၊ Ultimate Multisite၊ plugin နဲ့ theme version တွေနဲ့ အလုပ်လုပ်နိုင်ရပါမယ်။
- single-site import လုပ်တာက ပစ်မှတ် site ကို အစားထိုးလိုက်တာမျိုး ဖြစ်ပါတယ်။ ဒါဟာ merge tool မဟုတ်ပါဘူး။
- Multisite ကနေ single-site ကို ရွှေ့တာနဲ့ single-site ကနေ Multisite ကို ရွှေ့တာတွေဟာ ပစ်မှတ် environment က export လုပ်ထားတဲ့ site ရဲ့ plugins၊ themes၊ URLs နဲ့ လိုအပ်တဲ့ Ultimate Multisite components တွေကို အလုပ်လုပ်စေနိုင်မှသာ အထောက်အပံ့ပေးမှာ ဖြစ်ပါတယ်။
- ZIP ကို ကိုယ်ပိုင်သိမ်းထားပါ။ အဲဒီထဲမှာ database content၊ uploaded files နဲ့ export လုပ်ထားတဲ့ site ရဲ့ configuration details တွေ ပါဝင်နိုင်ပါတယ်။

အရင်က network-level export workflow တွေအတွက် [Site Export](/user-guide/administration/site-export) ကို ကြည့်ရှုနိုင်ပါတယ်။
