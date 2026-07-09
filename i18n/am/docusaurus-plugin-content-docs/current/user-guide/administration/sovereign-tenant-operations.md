---
title: የሉዓላዊ ተከራካሪ ኦፕሬሽኖች
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# souverain Tenant Operations {#sovereign-tenant-operations}

Ultimate Multisite: Multi-Tenancy 1.2.0 souverain tenants (subsites) အတွက် လုပ်ငန်းလည်ပတ်မှုဆိုင်ရာ ကိရိယာအသစ်တွေ ထည့်သွင်းပေးထားပါတယ် - ဒါတွေဟာ သူတို့ကိုယ်ပိုင် database၊ filesystem root နဲ့ routing context တွေနဲ့ လည်ပတ်နေပေမယ့် network admin ဆီကနေ မြင်နိုင်စွမ်း ရှိတဲ့ subsites တွေ ဖြစ်ပါတယ်။

ပုံမှန် subsite တစ်ခုကို souverain infrastructure ထဲကို ရွှေ့ပြောင်းတာမျိုး၊ သီးခြားဖောက်သည် সাইတတွေကို စီမံခန့်ခွဲတာ ဒါမှမဟုတ် remote-site လွှဲပြောင်းမှုတွေ လုပ်ဆောင်တဲ့အခါ ဒီစာမျက်နှာကို အသုံးပြုသင့်ပါတယ်။

## administrator တွေအတွက် ဘာတွေ ပြောင်းလဲသွားသလဲ {#what-changes-for-administrators}

- **Stateless tenant autologin** — Network admin တွေဟာ ရှည်ကြာတဲ့ shared session state ကို မအားကိုးဘဲ souverain tenant တစ်ခုကို လာရောက်ကြည့်ရှုနိုင်ပါပြီ။ SSO token ဟာ ရည်ရွယ်ချက်နဲ့ သတ်မှတ်ထားတာ၊ အရင်းအမြစ် (origin) နဲ့ ချိတ်ဆက်ထားတာ၊ ပြန်လည်သုံးစွဲမှုကို ကာကွယ်ထားတာနဲ့ မကြာခဏ ပျောက်ကွယ်သွားမယ့် အချိန်ကာလတိုလေးပဲ ရှိပါတယ်။
- **Sovereign-aware routing** — ရှေးဟောင်း သီးခြား network တွေနဲ့ souverain tenants တွေဟာ site router လမ်းကြောင်းတစ်ခုတည်းကို အသုံးပြုပြီး၊ အရင်ကနဲ့ အခုက သီးခြား install တွေကြားမှာ bootstrap ကွာခြားချက်တွေကို လျော့ချပေးပါတယ်။
- **Verified migration state** — Tenant တစ်ခုကို အပြီးသတ်အဖြစ် မှတ်ယူမယ့် အချိန်မှာ user provisioning၊ database writer ခွင့်ပြုချက်တွေ၊ queue drain ဖြစ်နေတဲ့ အခြေအနေနဲ့ legacy table မရှိတော့တာတွေကို စစ်ဆေးမှုတွေ လုပ်ဆောင်ပေးပါတယ်။
- **Safer teardown** — souverain tenant တွေကို ဖျက်သိမ်းတဲ့အခါ သီးခြား credentials တွေကို သန့်ရှင်းစွာ ဖယ်ရှားပေးမှာဖြစ်လို့ ဖျက်လိုက်တဲ့ tenant တွေက database access အဟောင်းတွေကို ကျန်ရစ်မသွားအောင် လုပ်ဆောင်ပေးပါတယ်။

## sovereign tenant တစ်ခုကို လာရောက်ကြည့်ရှုခြင်း {#visiting-a-sovereign-tenant}

၁။ **Network Admin > Ultimate Multisite > Sites** ကို ဖွင့်ပါ။
၂။ souverain tenant ကို ရွေးချယ်ပါ။
၃။ password ကူးတာ ဒါမှမဟုတ် temporary admin account တွေ ဖန်တီးတာမျိုး မလုပ်ဘဲ အဆင်ပြေရင် **Visit (SSO)** ကို အသုံးပြုပါ။

visit လုပ်တဲ့အခါမှာ အဲ့ဒီ tenant အတွက် ခဏတာ login token တစ်ခုကို ဖန်တီးပေးပြီး tenant audit trail ထဲမှာ SSO ဖြစ်ရပ်ကို မှတ်တမ်းတင်ထားပါတယ်။ ခလုတ်က မအလုပ်ဖြစ်ဘူးဆိုရင် tenant domain ဟာ မျှော်လင့်ထားတဲ့ install နဲ့ ကိုက်ညီမှု ရှိမရှိနဲ့ tenant က network-side SSO endpoint ကို ရောက်နိုင်ခြင်း ရှိ/မရှိ စစ်ဆေးကြည့်ပါ။

## remote-site operations checklist {#remote-site-operations-checklist}

souverain ဒါမှမဟုတ် remote tenant တစ်ခုကို ပြောင်းလဲဖို့ မလုပ်ခင် အောက်ပါအချက်တွေကို အတည်ပြုထားပါ-

የተከራዩ ዶሜን የባለቤትነት ፋይል ሲስተም ባለበት ሆስትን ያመለክታል።
የተከራዩ ዳታቤዝ ሆስት ለዚያ ጭነት የተመዘገበውን ሆስት ባይነድ (host binding) በትክክል ይዛል።
የማሸጋገር ማረጋገጫ (migration verification) ትዕዛዞች በተከራዩ ላይ ያልፋሉ።
DNS ወይም የባለቤትነት ለውጦችን ከመደረጉ በፊት የአሲንክ ማሸጋገር መደብቆች (async migration queues) ባዶ ይደረጋሉ።
የተከራዩ አስተዳዳሪ ተጠቃሚ በማሸጋገር ወቅት ተመድቦ ሲያገኝ በSSO አማካኝነት መግባት ይችላል።

## ሉዓላዊ ተከራዮችን መሰረዝ (Deleting sovereign tenants) {#deleting-sovereign-tenants}

ሉዓላዊ ተከራይ መሰረዝ የሚያስከትል ጉዳት አለው። በመጀመሪያ የባክአፕ እና ኤክስፖርት ሁኔታውን ያረጋግጡ፣ ከዚያም ከሳይት አስተዳደር ስክሪኑ ላይ ይሰርዙ። 1.2.0 የውድቀት ሂደት (teardown flow) እንደ ማጽጃ አካል የተከራዩን ዳታቤዝ መረጃዎች ያስወግዳል፣ ነገር ግን በውጭ ሆስቲንግ ፓነሎች ሲጠቀሙ የሆስት-ደረጃ ዳታቤዝ ተጠቃሚዎች እና ማህደረ ትውስታዎች (folders) ጠፍተዋል ማረጋገጥ አለብዎት።

:::warning
የማሸጋገር ማረጋገጫ እየተካሄደ ሳለ ወይም የአሲንክ ፑሽ ሥራዎች ሲደብቁ አይሰርዙት። የውድቀት ሂደት (teardown) የሚፈልጉትን መረጃ የሚያስፈልጉ ተጠቃሚዎችን እንዳይስወግዱ ለማድረግ ማረጋገጫው እስኪጠናቀቅ ይጠብቁ።
:::
