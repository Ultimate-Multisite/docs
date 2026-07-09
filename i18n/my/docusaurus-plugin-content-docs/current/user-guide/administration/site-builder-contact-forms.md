---
title: ဝက်ဘ်ဆိုဒ်တည်ဆောက်သူ ဆက်သွယ်ရန် ပုံစံများ
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Site Builder ဆက်သွယ်ရန် ပုံစံများ {#site-builder-contact-forms}

Superdav AI Agent v1.10.0 သည် Site Builder agent ကို အသုံးပြု၍ chat interface မှတဆင့် ဆက်သွယ်ရန် ပုံစံများ ဖန်တီးနိုင်သည့် စွမ်းရည်ကို ထပ်ပေါင်းပေးထားပါသည်။ ၎င်းသည် chat မှ မခွာဘဲ မည်သည့် page ပေါ်တွင်မဆို အပြည့်အဝ အလုပ်လုပ်နိုင်သော ဆက်သွယ်ရန် ပုံစံများကို ထည့်သွင်းနိုင်စေပါသည်။

## အကျဉ်းချုပ် {#overview}

Site Builder ၏ ဆက်သွယ်ရန် ပုံစံ ဖန်တီးနိုင်မှု (`create_contact_form`) သည် သင်ထည့်သွင်းထားသော form plugin ကို အလိုအလျောက် သိရှိပြီး ထို plugin ၏ မူရင်း စွမ်းဆောင်ရည်များကို အသုံးပြု၍ ဆက်သွယ်ရန် ပုံစံတစ်ခုကို ဖန်တီးပေးပါသည်။ အထောက်အကူရရှိသော form plugin များမှာ အောက်ပါအတိုင်း ဖြစ်သည်-

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Assistant သည် သင့် site ပေါ်တွင် ရရှိနိုင်သော အကောင်းဆုံး form plugin ကို အလိုအလျောက် ရွေးချယ်ပေးပြီး ထို plugin နှင့် ကိုက်ညီသည့် ဆက်သွယ်ရန် ပုံစံကို ဖန်တီးပေးပါသည်။

## ဆက်သွယ်ရန် ပုံစံ ဖန်တီးခြင်း {#creating-a-contact-form}

Site Builder ကို အသုံးပြု၍ ဆက်သွယ်ရန် ပုံစံတစ်ခု ဖန်တီးရန်-

၁။ WordPress admin တွင် **Gratis AI Agent** chat panel ကို ဖွင့်ပါ။
၂။ chat header ရှိ agent icon ကို နှိပ်၍ **Site Builder** agent သို့ ပြောင်းပါ။
၃။ သင်ဖန်တီးလိုသည့် ဆက်သွယ်ရန် ပုံစံကို ဖော်ပြပါ။ ဥပမာ-

   > "Contact page ပေါ်တွင် name၊ email၊ message နှင့် phone number field များပါသော ဆက်သွယ်ရန် ပုံစံတစ်ခု ထည့်ပေးပါ။"

   သို့မဟုတ် ရိုးရိုးလေး-

   > "Contact page အတွက် ဆက်သွယ်ရန် ပုံစံတစ်ခု ဖန်တီးပေးပါ။"

၄။ Site Builder သည် ဆက်သွယ်ရန် ပုံစံကို ဖန်တီးပေးပြီး ထည့်သွင်းရန် အသင့်ရှိသော shortcode တစ်ခုကို ပြန်ပေးပါလိမ့်မည်။

## ဖန်တီးထားသော Shortcode ကို အသုံးပြုခြင်း {#using-the-generated-shortcode}

Site Builder က ဆက်သွယ်ရန် ပုံစံကို ဖန်တီးပြီးပါက၊ ၎င်းသည် shortcode တစ်ခုကို ပြန်ပေးပါလိမ့်မည် (ဥပမာ၊ `[contact-form-7 id="123"]`)။ သင်သည်-

၁။ **Page သို့မဟုတ် Post တွင် ထည့်သွင်းခြင်း** — shortcode ကို ကူးယူပြီး block editor သို့မဟုတ် classic editor ကို အသုံးပြု၍ မည်သည့် page သို့မဟုတ် post တွင်မဆို ကပ်ထည့်နိုင်ပါသည်။
၂။ **Site Builder မှတစ်ဆင့် ထည့်သွင်းခြင်း** — Site Builder ကို သီးသန့် page တစ်ခုတွင် ပုံစံကို အလိုအလျောက် ထည့်ပေးရန် မေးမြန်းနိုင်သည်-

   > "Contact page ပေါ်တွင် ဆက်သွယ်ရန် ပုံစံကို ထည့်ပေးပါ။"

၃။ **Template တွင် အသုံးပြုခြင်း** — PHP ကို အသုံးပြုရာတွင် အဆင်ပြေပါက shortcode ကို theme template file ထဲသို့ ထည့်သွင်းနိုင်ပါသည်။

## ဆက်သွယ်ရန် ပုံစံကို စိတ်ကြိုက်ပြင်ဆင်ခြင်း {#customizing-the-contact-form}

Site Builder က ဆက်သွယ်ရန် ပုံစံကို ဖန်တီးပြီးနောက်၊ သင်သည် ၎င်းကို ပိုမိုစိတ်ကြိုက်ပြင်ဆင်နိုင်ပါသည်-

### Chat Interface မှတစ်ဆင့် {#via-the-chat-interface}

Site Builder ကို ပုံစံကို ပြင်ဆင်ခိုင်းပါ-

> "subject field တစ်ခု ထပ်ထည့်ပြီး message field ကို မဖြစ်မနေ ဖြည့်ရမည် (required) အဖြစ် ပြင်ပေးပါ။"

Site Builder သည် ပုံစံကို အဆင့်မြှင့်ပြင်ဆင်ပေးပြီး အဆင့်မြှင့်ထားသော shortcode ကို ပြန်ပေးပါလိမ့်မည်။

### Form Plugin ၏ Admin Interface မှတစ်ဆင့် {#via-the-form-plugins-admin-interface}

သင်သည် form plugin ၏ settings များတွင်လည်း ပုံစံကို တိုက်ရိုက် စိတ်ကြိုက်ပြင်ဆင်နိုင်သည်-

၁။ WordPress admin တွင် **Contact Form 7** (သို့မဟုတ် သင်ထည့်သွင်းထားသော form plugin) သို့ သွားပါ။
၂။ Site Builder က ဖန်တီးပေးထားသော ပုံစံကို ရှာပါ။
၃။ လိုအပ်သလို form fields များ၊ validation rules များ၊ နှင့် email notifications များကို ပြင်ဆင်ပါ။

## Form Plugins နှင့် တွဲဖက်အသုံးပြုနိုင်မှု {#form-plugins-and-compatibility}

Site Builder သည် သင့် site တွင် မည်သည့် form plugin ကို ထည့်သွင်းထားသည်ကို အလိုအလျောက် သိရှိပြီး ဆက်သွယ်ရန် ပုံစံကို ဖန်တီးရာတွင် ၎င်းကို အသုံးပြုပါသည်။ form plugin များစွာ ထည့်သွင်းထားပါက၊ Site Builder သည် အောက်ပါအစီအစဉ်အတိုင်း ဦးစားပေးသည်-

၁။ Contact Form 7
၂။ WPForms
၃။ Fluent Forms
၄။ Gravity Forms

ဤ plugin များ မည်သည့်အရာမှ ထည့်သွင်းထားခြင်းမရှိပါက၊ Site Builder သည် ဆက်သွယ်ရန် ပုံစံကို ဖန်တီးခြင်းမပြုမီ တစ်ခုခု ထည့်သွင်းရန် အကြံပြုပါလိမ့်မည်။

## အီးမေးလ် အကြောင်းကြားချက်များ {#email-notifications}

Site Builder မှ ဖန်တီးထားသော ဆက်သွယ်ရန် ပုံစံများသည် site administrator ထံသို့ အီးမေးလ် အကြောင်းကြားချက်များ ပေးပို့ရန် default အတိုင်း စီစဉ်ပေးထားပါသည်။ သင်သည် လက်ခံမည့် email address နှင့် အကြောင်းကြားချက် မက်ဆေ့ခ်ျကို စိတ်ကြိုက်ပြင်ဆင်နိုင်သည်-

၁။ သင်၏ form plugin ၏ admin interface သို့ သွားပါ။
၂။ Site Builder က ဖန်တီးပေးထားသော ပုံစံကို ရှာပါ။
၃။ email notification settings များကို ပြင်ဆင်ပါ။

အသေးစိတ် ညွှန်ကြားချက်များအတွက် သင်၏ form plugin ၏ documentation ကို ကြည့်ရှုပါ-

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## အသုံးပြုမှု ဥပမာများ {#example-use-cases}

### ရိုးရှင်းသော ဆက်သွယ်ရန် ပုံစံ {#simple-contact-form}

> "name၊ email နှင့် message field များပါသော ရိုးရှင်းသည့် ဆက်သွယ်ရန် ပုံစံတစ်ခု ဖန်တီးပေးပါ။"

### အဆင့်များစွာပါသော ပုံစံ (Multi-Step Form) {#multi-step-form}

> "ပထမအဆင့်မှာ ဆက်သွယ်ရန် အချက်အလက်များ၊ ဒုတိယအဆင့်မှာ message နှင့် နှစ်သက်သော ဆက်သွယ်မှု နည်းလမ်းများ ပါဝင်သည့် ဆက်သွယ်ရန် ပုံစံတစ်ခု ဖန်တီးပေးပါ။"

### Conditional Logic ပါသော ပုံစံ {#form-with-conditional-logic}

> "dropdown မှ အသုံးပြုသူ၏ ရွေးချယ်မှုအပေါ် မူတည်၍ မတူညီသော field များကို ပြသသည့် ဆက်သွယ်ရန် ပုံစံတစ်ခု ဖန်တီးပေးပါ။"

### File Upload ပါသော ပုံစံ {#form-with-file-upload}

> "အသုံးပြုသူများ ဖိုင် သို့မဟုတ် attachment တစ်ခု တင်နိုင်သည့် ဆက်သွယ်ရန် ပုံစံတစ်ခု ဖန်တီးပေးပါ။"

:::note
Contact form creation သည် Superdav AI Agent v1.10.0 နှင့် နောက်ပိုင်းဗားရှင်းများတွင် ရရှိနိုင်ပါသည်။ ဤစွမ်းရည်ကို အသုံးပြုရန် Site Builder agent ကို အသက်ဝင်စေရပါမည်။
:::
