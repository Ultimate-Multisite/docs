---
title: Support Tickets Changelog
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Support Tickets ပြောင်းလဲမှုမှတ်တမ်း {#support-tickets-changelog}

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* ပိုမိုကောင်းမွန်စေသည်: vendor/ directory ကို Git tracking မှ ဖယ်ရှားခဲ့သည် (၎င်းကို .gitignore ကလည်း ဖုံးကွယ်ထားပြီးသားဖြစ်၍)၊ ၎င်းသည် repository အရွယ်အစားကို လျှော့ချပေးပါသည်။
* ပိုမိုကောင်းမွန်စေသည်: WordPress 7.0 အထိ စမ်းသပ်မှုများ ပြုလုပ်ခဲ့ပါသည်။

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* ပြင်ဆင်သည်: null တန်ဖိုးများကို nullable ticket model setters များတွင် လက်ခံနိုင်စေရန်။
* ပြင်ဆင်သည်: Multisite ကို စနစ်တကျ ပံ့ပိုးနိုင်ရန်အတွက် ticket အားလုံးကို global network-wide tables များတွင် သိမ်းဆည်းထားပါသည်။
* ပြင်ဆင်သည်: staff fields များကို ဖုံးကွယ်ပေးခဲ့ပြီး customer new-ticket form တွင် blank-page redirect ဖြစ်ခြင်းကို ပြင်ဆင်ခဲ့ပါသည်။
* ပြင်ဆင်သည်: metadata သိမ်းဆည်းမှုအတွက် undefined add_meta() ခေါ်ဆိုမှုများကို မှန်ကန်သော update_meta() ဖြင့် အစားထိုးခဲ့ပါသည်။
* ပြင်ဆင်သည်: မှတ်ပုံတင်ထားခြင်းမရှိသော capability စစ်ဆေးမှုများကို မှန်ကန်သော wu_view_all_support_tickets ဖြင့် အစားထိုးခဲ့ပါသည်။
* ပြင်ဆင်သည်: ticket status၊ assignment နှင့် quick-edit လုပ်ဆောင်မှုများအတွက် ပျောက်ဆုံးနေသော AJAX handlers များကို ထည့်သွင်းခဲ့ပါသည်။
* ပြင်ဆင်သည်: ticket view များတွင် staff response ကို သိရှိရန် method အမည်ကို ပြင်ဆင်ခဲ့ပါသည်။
* ပြင်ဆင်သည်: duplicate reply handlers များကို စုစည်းပေးခဲ့ပြီး nonce action အမည်များကို တညီတညွတ်တည်း ဖြစ်အောင် စီစဉ်ပေးခဲ့ပါသည်။
* ပြင်ဆင်သည်: [wu_submit_ticket] shortcode အတွက် ပျောက်ဆုံးနေသော frontend view ကို ထည့်သွင်းခဲ့ပါသည်။
* ပြင်ဆင်သည်: ပျောက်ဆုံးနေသော user_id column ကို ထည့်သွင်းခဲ့ပြီး Support_Ticket::get_user_id() method ကို ပြင်ဆင်ခဲ့ပါသည်။
* ပြင်ဆင်သည်: priority filter option tag မှ အပို double-quote ကို ဖယ်ရှားခဲ့ပါသည်။
* ပြင်ဆင်သည်: super admin များအတွက် network admin ticket management panel ကို ထည့်သွင်းခဲ့ပါသည်။
* ပိုမိုကောင်းမွန်စေသည်: admin CSS များကို single external stylesheet တစ်ခုအဖြစ် စုစည်းပေးခဲ့ပါသည်။
* ပိုမိုကောင်းမွန်စေသည်: subsite admin menu မှ Settings submenu ကို ဖယ်ရှားခဲ့ပါသည်။
* ပိုမိုကောင်းမွန်စေသည်: support ticket pages များတွင်သာ frontend assets များကို အခြေအနေအလိုက် load လုပ်ပေးခြင်း။
* ပိုမိုကောင်းမွန်စေသည်: Bedrock root autoloader က အမှီအခိုပြုမှုများကို load လုပ်ပြီးသားဖြစ်ပါက plugin autoloader ကို ကျော်လွန်သွားစေခြင်း။

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* ထည့်သွင်းသည်: Admin နှင့် frontend နှစ်ခုလုံးအတွက် ticket အပြည့်အစုံ ကြည့်ရှုနိုင်သည့် လုပ်ဆောင်ချက်။
* ထည့်သွင်းသည်: ticket reply တင်သွင်းမှုများအတွက် AJAX handler။
* ထည့်သွင်းသည်: form ကို စနစ်တကျ ကိုင်တွယ်မှုဖြင့် ticket reply လုပ်ဆောင်နိုင်မှု ပံ့ပိုးပေးခြင်း။
* ထည့်သွင်းသည်: Admin တွင် ticket တင်သွင်းမှုများနှင့် reply များအတွက် သင့်လျော်သော notice ပြသမှု။
* ထည့်သွင်းသည်: Customer များ ကိုယ်တိုင်တင်သည့် ticket များအတွက် လက်ရှိအသုံးပြုသူနှင့် အလိုအလျောက် ချိတ်ဆက်ပေးခြင်း။
* ထည့်သွင်းသည်: Customer များက ticket ပိုင်ဆိုင်မှုကို အစားထိုးခြင်းမှ ကာကွယ်ရန် လုံခြုံရေးမြှင့်တင်မှု။
* ထည့်သွင်းသည်: ပျောက်ဆုံးနေသော helper functions များ (wu_format_date, wu_user_can_view_ticket စသည်)။
* ထည့်သွင်းသည်: file attachment ဒေါင်းလုဒ်လုပ်ခြင်းနှင့် ကိုင်တွယ်မှု စနစ်။
* ထည့်သွင်းသည်: ticket reply နှင့် status ပြောင်းလဲမှုများအတွက် Email notification စနစ်။
* ပြင်ဆင်သည်: ticket reply form တွင် လိုအပ်သော ticket ID ကို ထည့်သွင်းပေးခဲ့ပါသည်။
* ပြင်ဆင်သည်: Admin ticket view များရှိ notice မြင်ရမှုပြဿနာများကို ပြင်ဆင်ခဲ့ပါသည်။
* ပြင်ဆင်သည်: support ticket functions များရှိ syntax error များကို ပြင်ဆင်ခဲ့ပါသည်။
* ပိုမိုကောင်းမွန်စေသည်: response နှင့် attachment များအတွက် စနစ်တကျ query နှင့် schema class ပါဝင်သော Database structure။
* ပိုမိုကောင်းမွန်စေသည်: ticket model များအတွက် attributes များအစား real properties များသို့ ပြောင်းရွှေ့ခြင်း။

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* အဆင့်မြှင့်သည်: ကိုက်ညီမှုရှိစေရန် prefix ကို ultimate-multisite ဟု အမည်ပြောင်းခဲ့ပါသည်။
* အဆင့်မြှင့်သည်: စာသားနယ်ပယ် (Text domain) ကို စံသတ်မှတ်ခြင်း။
* ပြင်ဆင်သည်: အသေးစား bug များပြင်ဆင်မှုများနှင့် ပိုမိုကောင်းမွန်စေမှုများ။

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* ပထမဆုံးထုတ်ဝေမှု။
* ticket စီမံခန့်ခွဲမှု စနစ် အပြည့်အစုံ။
* အဆင့်အလိုက် ဝင်ရောက်ခွင့် ထိန်းချုပ်မှု။
* thread လုပ်ထားသော စကားဝိုင်း စနစ်။
* File attachment ပံ့ပိုးမှု။
* Email notification စနစ်။
* Admin နှင့် customer interface များ။
* စာရင်းအင်းနှင့် အစီရင်ခံစာ။
