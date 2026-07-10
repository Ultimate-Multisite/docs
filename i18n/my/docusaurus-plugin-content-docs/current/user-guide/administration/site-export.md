---
title: ဝက်ဘ်ဆိုဒ် တင်ပို့ခြင်း
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Site Export (ဆိုဒ် အချက်အလက် ထုတ်ယူခြင်း) {#site-export}

**Site Export** အုပ်ချုပ်မှု စာမျက်နှာသည် network စီမံခန့်ခွဲသူများအား ဝက်ဘ်ဆိုဒ်တစ်ခုလုံး၊ သို့မဟုတ် network တစ်ခုလုံးကို ရွှေ့ပြောင်းရန်၊ အရန်သိမ်းဆည်းရန် သို့မဟုတ် အခြားသူထံ ပေးအပ်ရန်အတွက် ဒေါင်းလုဒ်လုပ်နိုင်သော archive အဖြစ် ထုပ်ပိုးပေးပါသည်။

## Exporting one site (ဆိုဒ်တစ်ခုကို ထုတ်ယူခြင်း) {#exporting-one-site}

**Ultimate Multisite > Site Export** သို့ သွားပြီး **Generate new Site Export** ကို ရွေးချယ်ပါ။ ထုတ်ယူလိုသည့် subsite ကို ရွေးချယ်ပြီး archive ထဲတွင် uploads၊ plugins နှင့် themes များကို ထည့်သွင်းမည်လားဆိုသည်ကို ရွေးချယ်ပါ။

Export လုပ်မှု ပြီးဆုံးသွားပါက **Existing Exports** စာရင်းမှ ZIP ကို ဒေါင်းလုဒ်လုပ်ပါ။ ယခုအခါ Export ZIP များတွင် self-booting `index.php` နှင့် `readme.txt` တို့ ပါဝင်လာသောကြောင့်၊ archive ကို fresh host တစ်ခုပေါ်သို့ တင်ပြီး၊ သီးခြား importer plugin တစ်ခုကို အရင် install လုပ်စရာမလိုဘဲ စတင်အသုံးပြုနိုင်ပါသည်။

## Exporting the whole network (network တစ်ခုလုံးကို ထုတ်ယူခြင်း) {#exporting-the-whole-network}

network အတွင်းရှိ subsite အားလုံးကို ပါဝင်သည့် single archive တစ်ခု လိုအပ်ပါက Site Export စာမျက်နှာရှိ **Network Export** ကို အသုံးပြုပါ။ ဤအရာသည် host ပြောင်းရွှေ့မှုများ၊ ဘေးအန္တရာယ်မှ ပြန်လည်ရရှိရေး လေ့ကျင့်မှုများ သို့မဟုတ် staging rebuild များ မပြုလုပ်မီ အလွန်အသုံးဝင်ပြီး၊ ထိုနေရာများတွင် subsite တစ်ခုချင်းစီသည် အတူတကွ ရွေ့ပြောင်းရန် လိုအပ်ပါသည်။

Network export သည် single-site export ထက် ပိုကြီးနိုင်သောကြောင့်၊ အသွားအလာ နည်းပါးသည့် အချိန်ကာလအတွင်း လုပ်ဆောင်သင့်ပြီး၊ uploads၊ plugins၊ themes နှင့် ဖန်တီးထားသော ZIP file များအတွက် ပစ်မှတ် storage တွင် လုံလောက်သော အခမဲ့နေရာ ရှိမရှိ စစ်ဆေးအတည်ပြုပါ။

### Network Import Bundles (Network တင်သွင်းမှု အစုအဝေးများ) {#network-import-bundles}

Ultimate Multisite 2.12.0 မှစ၍ Site Exporter သည် **network import bundles** များကို ဖန်တီးပေးနိုင်ပြီဖြစ်သည် — ၎င်းတို့သည် network တစ်ခုလုံးကို ချောမွေ့စွာ ပြန်လည်ရရှိစေရန် ဒီဇိုင်းထုတ်ထားသော အထူး archive များဖြစ်သည်။ Network import bundle တစ်ခုသည် subsite များစွာကို network အသစ်တစ်ခုပေါ်သို့ ပြန်လည်ရရှိစေရန် လိုအပ်သော file များ၊ metadata အားလုံးကို ပါဝင်သည်။

#### Generating a Network Import Bundle (Network Import Bundle တစ်ခု ဖန်တီးခြင်း) {#generating-a-network-import-bundle}

1. **Ultimate Multisite > Site Export** သို့ သွားပါ။
2. **Generate new Network Export** ကို နှိပ်ပါ။
3. Export အမျိုးအစားအဖြစ် **Network Import Bundle** ကို ရွေးချယ်ပါ။
4. uploads၊ plugins နှင့် themes များကို ထည့်သွင်းမည်လားဆိုသည်ကို ရွေးချယ်ပါ။
5. **Generate** ကို နှိပ်ပါ။
6. **Existing Exports** စာရင်းမှ bundle ZIP ကို ဒေါင်းလုဒ်လုပ်ပါ။

#### Restoring from a Network Import Bundle (Network Import Bundle မှ ပြန်လည်ရရှိစေခြင်း) {#restoring-from-a-network-import-bundle}

Network import bundle မှ site များကို ပြန်လည်ရရှိစေရန် အဆင့်များမှာ-

1. ပစ်မှတ် host ပေါ်တွင် Ultimate Multisite ကို install လုပ်ပါ။
2. multisite setup wizard ကို ပြီးမြောက်အောင် လုပ်ဆောင်ပါ။
3. network အသစ်ပေါ်ရှိ **Ultimate Multisite > Site Export** သို့ သွားပါ။
4. **Import Network Bundle** ကို နှိပ်ပါ။
5. network import bundle ZIP file ကို upload လုပ်ပါ။
6. မျက်နှာပြင်ပေါ်ရှိ import ညွှန်ကြားချက်များကို လိုက်နာပါ။
7. import လုပ်ငန်းစဉ်သည် site များ၊ ၎င်းတို့၏ content နှင့် configuration အားလုံးကို ပြန်လည်ရရှိစေမည်ဖြစ်သည်။

Network import bundles များသည် အောက်ပါအရာများကို ထိန်းသိမ်းထားသည်-
- Site content (posts, pages, custom post types)
- Site settings and options
- User roles and permissions
- Plugins and themes (bundle တွင် ပါဝင်ပါက)
- Media uploads (bundle တွင် ပါဝင်ပါက)
- Custom database tables and data

## Installing a self-booting export ZIP (self-booting export ZIP တစ်ခု ထည့်သွင်းခြင်း) {#installing-a-self-booting-export-zip}

fresh host ပေါ်တွင် self-booting ZIP တစ်ခုကို ပြန်လည်ရရှိစေရန်-

1. Export လုပ်ထားသော ZIP အကြောင်းအရာများကို ပစ်မှတ် web root သို့ upload လုပ်ပါ။
2. upload လုပ်ထားသော `index.php` ကို browser တွင် ဖွင့်ပါ။
3. bundle export package မှ မျက်နှာပြင်ပေါ်ရှိ installer ညွှန်ကြားချက်များကို လိုက်နာပါ။
4. ခေတ္တဖိုင်များကို ဖယ်ရှားခြင်းမပြုမီ export နှင့် သက်ဆိုင်သည့် မှတ်စုများအတွက် bundle လုပ်ထားသော `readme.txt` ကို ပြန်လည်စစ်ဆေးပါ။

addon-specific installation နှင့် import အသေးစိတ်အချက်အလက်များအတွက် [Site Exporter addon documentation](/addons/site-exporter) ကို ကြည့်ပါ။

Ultimate Multisite 2.9.0 တွင် ထည့်သွင်းခဲ့သော single-site tool အတွက် [Export & Import](/user-guide/administration/export-import) ကို ကြည့်ပါ။
