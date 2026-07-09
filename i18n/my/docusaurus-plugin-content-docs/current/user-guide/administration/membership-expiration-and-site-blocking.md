---
title: အဖွဲ့ဝင်အသစ်သက်တမ်းကုန်ဆုံးခြင်းနှင့် ဝက်ဘ်ဆိုဒ်ပိတ်ဆို့ခြင်း
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# အဖွဲ့ဝင်အဆင့် သက်တမ်းကုန်ဆုံးခြင်းနှင့် Site ပိတ်ဆို့ခြင်း {#membership-expiration-and-site-blocking}

ဤလမ်းညွှန်ချက်သည် Ultimate Multisite က အဖွဲ့ဝင်အဆင့် သက်တမ်းကုန်ဆုံးခြင်း၊ စမ်းသပ်ကာလ ပြီးဆုံးခြင်းနှင့် frontend တွင် Site ကို ပိတ်ဆို့ခြင်းတို့ကို မည်သို့ကိုင်တွယ်သည်ကို ရှင်းပြထားပါသည်။ အဖွဲ့ဝင်အဆင့်တစ်ခု၏ အသက်ဝင်ချိန်မှ သက်တမ်းကုန်ဆုံးချိန်အထိ ဘဝသံသရာ (lifecycle)၊ Site များကို ပိတ်ဆို့ခြင်းကို ထိန်းချုပ်သည့် Setting များ၊ နှင့် အဖွဲ့ဝင်အဆင့် သက်တမ်းကုန်ဆုံးပြီးနောက် Site များ ဆက်လက် ဝင်ရောက်နိုင်နေပါက မည်သည့်အရာများကို စစ်ဆေးရမည်ကို အကျုံးဝင်ပါသည်။

## အဖွဲ့ဝင်အဆင့် အခြေအနေ ဘဝသံသရာ (Membership Status Lifecycle) {#membership-status-lifecycle}

Ultimate Multisite ရှိ အဖွဲ့ဝင်အဆင့်တိုင်းသည် အောက်ပါ အခြေအနေများထဲမှ တစ်ခုခု ရှိပါသည်။

:::note Free memberships are lifetime
အခမဲ့ အဖွဲ့ဝင်အဆင့်များသည် သက်တမ်းကုန်ဆုံးခြင်းမရှိပါ။ Ultimate Multisite က ၎င်းတို့ကို တစ်သက်တာ အသုံးပြုခွင့်အဖြစ် သတ်မှတ်ထားသောကြောင့်၊ စီမံခန့်ခွဲသူ (administrator) က အခြေအနေကို ပြောင်းလဲခြင်း သို့မဟုတ် Customer ကို အခြားထုတ်ကုန်တစ်ခုသို့ ရွှေ့ပြောင်းခြင်း မရှိပါက သက်တမ်းကုန်ဆုံးမှု စစ်ဆေးမှုများတွင် မပါဝင်ပါ။
:::

| Status | အဓိပ္ပာယ် |
|---|---|
| **Pending** | ပထမဆုံး ငွေပေးချေမှု သို့မဟုတ် အီးမေးလ် အတည်ပြုချက် စောင့်ဆိုင်းနေခြင်း |
| **Trialing** | စမ်းသပ်ကာလ အကျိုးသက်ရောက်နေပြီး၊ ငွေကြေး မရရှိသေးခြင်း |
| **Active** | ငွေပေးချေပြီး၊ လက်ရှိ အသုံးပြုနိုင်ခြင်း |
| **On Hold** | သက်တမ်းတိုး ငွေပေးချေမှု စောင့်ဆိုင်းနေခြင်း (Invoice ထုတ်ပေးပြီး၊ ငွေပေးချေမှု စောင့်ဆိုင်းနေသည်) |
| **Expired** | သက်တမ်းကုန်ဆုံးရက်နှင့် ကျေးဇူးကာလ (grace period) အတွင်း သက်တမ်းတိုးခြင်း မရှိခြင်း |
| **Cancelled** | Customer သို့မဟုတ် Admin မှ ရှင်းလင်းစွာ ပယ်ဖျက်ခြင်း |

### အဖွဲ့ဝင်အဆင့်များ မည်သို့ Expired ဖြစ်သို့ ပြောင်းလဲသနည်း {#how-memberships-transition-to-expired}

Ultimate Multisite သည် အဖွဲ့ဝင်အဆင့်များ သက်တမ်းကုန်ဆုံးသင့်သည်ဟု ယူဆရသည့် အရာများကို ရှာဖွေရန် **နာရီတိုင်း** နောက်ကွယ်မှ စစ်ဆေးမှု (background check) တစ်ခုကို လုပ်ဆောင်ပါသည်။ ဤစစ်ဆေးမှုသည် [Action Scheduler](https://actionscheduler.org/) ကို အသုံးပြုသည် (WP-Cron ကို တိုက်ရိုက်မဟုတ်) နှင့် `wu_membership_check` ဟု အမည်ပေးထားသော scheduled action အနေဖြင့် လုပ်ဆောင်ပါသည်။

သက်တမ်းကုန်ဆုံးမှု စစ်ဆေးမှုတွင် မူလအားဖြင့် **ရက် ၃ ရက်ကြာ ကျေးဇူးကာလ (grace period)** ပါရှိပါသည်။ အဖွဲ့ဝင်အဆင့်တစ်ခုသည် ၎င်း၏ `date_expiration` ကျော်လွန်ပြီး ရက် ၃ ရက်အကြာမှသာ `expired` ဟု အမှတ်အသားပြုမည်ဖြစ်သည်။ ၎င်းသည် Customer များအား ၎င်းတို့၏ အခြေအနေ ပြောင်းလဲခြင်းမရှိမီ နောက်ကျကျန်ရစ်ခဲ့သော ငွေပေးချေမှုများကို ပြီးမြောက်စေရန် အချိန်ပေးပါသည်။

:::info
ရက် ၃ ရက်ကြာ သက်တမ်းကုန်ဆုံးမှု ကျေးဇူးကာလ (expiration grace period) သည် အောက်တွင် ဖော်ပြထားသည့် Frontend Block Grace Period setting နှင့် မတူပါ။ သက်တမ်းကုန်ဆုံးမှု ကျေးဇူးကာလသည် အခြေအနေကို active/on-hold မှ expired သို့ **ပြောင်းလဲသည့်အချိန်** ကို ထိန်းချုပ်သည်။ frontend block grace period သည် အခြေအနေက အရင်ပြောင်းလဲပြီးနောက် **Site ကို ပိတ်ဆို့သည့်အချိန်** ကို ထိန်းချုပ်သည်။
:::

#### Auto-Renewing နှင့် Non-Auto-Renewing အဖွဲ့ဝင်အဆင့်များ {#auto-renewing-vs-non-auto-renewing-memberships}

ဤခြားနားချက်သည် သက်တမ်းကုန်ဆုံးမှု အပြုအမူကို နားလည်ရန် အရေးကြီးပါသည်။

- **Non-auto-renewing အဖွဲ့ဝင်အဆင့်များ** (`auto_renew = false`): နာရီအလိုက် cron job သည် အပြည့်အဝ ဘဝသံသရာကို ကိုင်တွယ်သည် — ၎င်းသည် သက်တမ်းတိုး ငွေပေးချေမှုများကို ဖန်တီးပေးသည်၊ အဖွဲ့ဝင်အဆင့်ကို on-hold သို့ ပြောင်းလဲပေးသည်၊ နှင့် နောက်ဆုံးတွင် ငွေပေးချေမှု မရရှိပါက expired ဟု အမှတ်အသားပြုပေးသည်။

- **Auto-renewing အဖွဲ့ဝင်အဆင့်များ** (`auto_renew = true`): cron expiration check သည် ၎င်းတို့ကို **လုံးဝ ကျော်လွန်သွားသည်**။ Payment gateway (Stripe, PayPal စသည်) သည် subscription တစ်ခု ပျက်ယွင်းခြင်း သို့မဟုတ် ပယ်ဖျက်ခြင်းများ ဖြစ်ပေါ်သည့်အခါ webhooks မှတစ်ဆင့် Ultimate Multisite ကို အကြောင်းကြားရန် မျှော်လင့်ရပါသည်။ Webhook ကို မရရှိပါက — ၎င်းသည် endpoint မှားယွင်းစွာ သတ်မှတ်ထားခြင်း၊ gateway အခက်အခဲ၊ သို့မဟုတ် စနစ်အပြင်ဘက်တွင် ပယ်ဖျက်ခြင်းများကြောင့် ဖြစ်သည် — အဖွဲ့ဝင်အဆင့်သည် သက်တမ်းကုန်ဆုံးရက် ကျော်လွန်သွားသည့်တိုင် `active` အနေအထားဖြင့် အချိန်အကြာကြီး ရှိနေနိုင်ပါသည်။

### စမ်းသပ်ကာလများ မည်သို့ ပြီးဆုံးသနည်း {#how-trials-end}

စမ်းသပ်ကာလ အဖွဲ့ဝင်အဆင့်တစ်ခု၏ စမ်းသပ်ကာလ ပြီးဆုံးသည့်အခါ စနစ်သည် အောက်ပါအဆင့်များကို လုပ်ဆောင်သည်-

၁။ အပြည့်အဝ subscription ပမာဏဖြင့် pending renewal payment တစ်ခုကို ဖန်တီးပေးသည်။
၂။ အဖွဲ့ဝင်အဆင့် အခြေအနေကို `trialing` မှ `on-hold` သို့ ပြောင်းလဲပေးသည်။
၃။ Customer ထံသို့ renewal payment အကြောင်းကြားသည့် အီးမေးလ်ကို ပေးပို့သည်။

ဤလုပ်ငန်းစဉ်သည် ပုံမှန် expiration check နှင့် အချိန်ဇယား တူညီစွာ (နာရီအလိုက်) လုပ်ဆောင်သော်လည်း၊ **non-auto-renewing အဖွဲ့ဝင်အဆင့်များအတွက်သာ** ဖြစ်သည်။ auto-renewing စမ်းသပ်မှုများအတွက်၊ payment gateway က စမ်းသပ်ကာလမှ ငွေပေးချေသည့် subscription သို့ ပြောင်းလဲမှုကို ကိုင်တွယ်ပေးသည်။

## Frontend ဝင်ရောက်ခွင့် ပိတ်ဆို့ခြင်း (Block Frontend Access) {#block-frontend-access}

မူလအားဖြင့်၊ အဖွဲ့ဝင်အဆင့် သက်တမ်းကုန်ဆုံးသည် သို့မဟုတ် on hold ဖြစ်သွားသည့်အခါ **wp-admin dashboard ကိုသာ ကန့်သတ်ထားသည်**။ Site ၏ public frontend သည် ဧည့်သည်များအတွက် ဆက်လက် ဝင်ရောက်နိုင်ပါသည်။ Public ဝင်ရောက်ခွင့်ကိုလည်း ပိတ်ဆို့လိုပါက **Block Frontend Access** setting ကို ဖွင့်ပေးရပါမည်။

### Setting ကို စနစ်တကျ သတ်မှတ်ခြင်း (Configuring the Setting) {#configuring-the-setting}

**Ultimate Multisite > Settings > Memberships** သို့ သွားပြီး **Block Frontend Access** ကို ဖွင့်ပေးပါ။

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

အောက်ပါတို့သည် အဖွဲ့ဝင်အဆင့် setting စာမျက်နှာ၏ အပြည့်အစုံ မြင်ကွင်းဖြစ်သည်-

![Membership settings full page](/img/config/settings-membership-full.png)

ဤအပြုအမူကို ထိန်းချုပ်သည့် ဆက်စပ် setting သုံးခုရှိသည်-

| Setting | Description | Default |
|---|---|---|
| **Block Frontend Access** | အဓိက ခလုတ်။ ၎င်းကို ဖွင့်ထားပါက၊ အဖွဲ့ဝင်အဆင့် မတက်ကြွတော့သည့်အခါ network site များ၏ public frontend ကို ပိတ်ဆို့သည်။ | Off |
| **Frontend Block Grace Period** | အဖွဲ့ဝင်အဆင့် မတက်ကြွတော့သည့်နောက် ပိတ်ဆို့ခြင်းမပြုမီ စောင့်ဆိုင်းရမည့် ရက်အရေအတွက်။ ချက်ချင်းပိတ်ဆို့လိုပါက `0` ဟု သတ်မှတ်ပါ။ | 0 |
| **Frontend Block Page** | Site ပိတ်ဆို့သည့်အခါ ဧည့်သည်များကို ပြန်လည်ညွှန်ကြားမည့် main site ပေါ်ရှိ စာမျက်နှာ။ သတ်မှတ်မထားပါက၊ ဧည့်သည်များသည် "Site not available" ဟူသော ယေဘူယျ မက်ဆေ့ခ်ျကို မြင်ရမည်။ | None |

### Site ပိတ်ဆို့သည့်အခါ ဧည့်သည်များ မြင်ရသည်များ {#what-visitors-see-when-a-site-is-blocked}

Frontend ဝင်ရောက်ခွင့် ပိတ်ဆို့ထားသည့်အခါ၊ Site သို့ လာရောက်သူများသည် အောက်ပါအရာများထဲမှ တစ်ခုခုကို မြင်ရမည်-

၁။ **Frontend Block Page** တွင် ရွေးချယ်ထားသည့် စာမျက်နှာသို့ **ပြန်လည်ညွှန်ကြားခံရမည်** (သတ်မှတ်ထားပါက)၊ သို့မဟုတ်
၂။ **Default မက်ဆေ့ခ်ျကို မြင်ရမည်**- "This site is not available at the moment." နှင့် Site admin အတွက် login စာမျက်နှာသို့ လင့်ခ်တစ်ခု။

Site admin များသည် အမြဲတမ်း login ဝင်နိုင်သည် — login စာမျက်နှာကို ဘယ်တော့မှ ပိတ်ဆို့မည်မဟုတ်ပါ။

### မည်သည့်အရာကို မည်သည့်အချိန်တွင် ပိတ်ဆို့သနည်း {#what-gets-blocked-and-when}

ပိတ်ဆို့သည့် အပြုအမူသည် အဖွဲ့ဝင်အဆင့် အခြေအနေပေါ် မူတည်သည်-

| Membership Status | Frontend Blocked? | Grace Period Applied? |
|---|---|---|
| Active | မပိတ်ဆို့ပါ | -- |
| Trialing | **မပိတ်ဆို့ပါ** (အောက်ပါ မှတ်ချက်ကို ကြည့်ပါ) | -- |
| On Hold | အသက်ဝင်သည်ဟု ယူဆသည် -- မပိတ်ဆို့ပါ | -- |
| Expired | **ပိတ်ဆို့သည်**၊ Block Frontend Access ဖွင့်ထားပါက | ပါသည် |
| Cancelled | **ပိတ်ဆို့သည်**၊ အမြဲတမ်း (setting မရွေး) | **မပါ** -- ချက်ချင်း ပိတ်ဆို့သည် |
| Pending | အဖွဲ့ဝင်အဆင့် စစ်ဆေးမှုမှ မပိတ်ဆို့ပါ | -- |

:::warning Trialing memberships are not blocked
စမ်းသပ်ကာလ ပြီးဆုံးသွားသည့်တိုင်၊ `trialing` အခြေအနေရှိ အဖွဲ့ဝင်အဆင့်တစ်ခုကို frontend တွင် **ပိတ်ဆို့မည်မဟုတ်**။ စမ်းသပ်မှုသည် အရင်ဆုံး အခြားအခြေအနေတစ်ခုသို့ (ပုံမှန်အားဖြင့် cron job မှတစ်ဆင့် `on-hold`၊ ထို့နောက် ငွေမပေးပါက `expired`) ပြောင်းလဲရမည်။ စမ်းသပ်မှုများ မပြောင်းလဲဘဲ ရှိနေသည်ကို မြင်ရပါက အောက်ပါ troubleshooting အပိုင်းကို စစ်ဆေးပါ။
:::

:::note Cancelled memberships bypass the grace period
ပယ်ဖျက်ထားသော အဖွဲ့ဝင်အဆင့်များသည် Block Frontend Access ကို ဖွင့်ထားသည်ဖြစ်စေ၊ မဖွင့်ထားသည်ဖြစ်စေ သက်တမ်းကုန်ဆုံးရက် ကျော်လွန်သည်နှင့် အမြဲတမ်း ပိတ်ဆို့ခံရပါသည်။ Frontend Block Grace Period သည် ပယ်ဖျက်ထားသော အဖွဲ့ဝင်အဆင့်များအတွက် အကျိုးမသက်ရောက်ပါ။
:::

## Troubleshooting: သက်တမ်းကုန်ဆုံးပြီးနောက် Site များ ဆက်လက် ဝင်ရောက်နိုင်နေခြင်း {#troubleshooting-sites-remaining-accessible-after-expiration}

အဖွဲ့ဝင်အဆင့် သက်တမ်းကုန်ဆုံးပြီးနောက် Site များ အများပြည်သူအတွက် ဆက်လက် ဝင်ရောက်နိုင်နေပါက၊ အောက်ပါ စစ်ဆေးမှုများကို အစဉ်လိုက် လုပ်ဆောင်ပါ။

### 1. Block Frontend Access Setting ကို ဖွင့်ထားကြောင်း အတည်ပြုပါ {#1-verify-the-block-frontend-access-setting-is-enabled}

**Ultimate Multisite > Settings > Memberships** သို့ သွားပြီး **Block Frontend Access** ခလုတ်သည် ဖွင့်ထားကြောင်း အတည်ပြုပါ။ ဤ setting သည် **မူလအားဖြင့် ပိတ်ထားသည်**၊ ဆိုလိုသည်မှာ အဖွဲ့ဝင်အဆင့် မတက်ကြွတော့သည့်အခါ wp-admin ကိုသာ ကန့်သတ်ထားခြင်းဖြစ်သည်။

### 2. Frontend Block Grace Period ကို စစ်ဆေးပါ {#2-check-the-frontend-block-grace-period}

အလားတူ setting စာမျက်နှာတွင် **Frontend Block Grace Period** တန်ဖိုးကို စစ်ဆေးပါ။ ဥပမာ၊ ၎င်းကို ၇ ရက်ဟု သတ်မှတ်ထားပါက၊ အဖွဲ့ဝင်အဆင့်သည် `expired` ဖြစ်နေသော်လည်း frontend ကို ၇ ရက်အထိ ပိတ်ဆို့မည်မဟုတ်ပါ။

အဖွဲ့ဝင်အဆင့် မတက်ကြွတော့သည်နှင့် ချက်ချင်း ပိတ်ဆို့လိုပါက ၎င်းကို `0` ဟု သတ်မှတ်ပါ။

### 3. Membership Status သည် အမှန်တကယ် ပြောင်းလဲသွားကြောင်း အတည်ပြုပါ {#3-confirm-the-membership-status-has-actually-changed}

**Ultimate Multisite > Memberships** သို့ သွားပြီး ထိခိုက်နေသော အဖွဲ့ဝင်အဆင့်၏ အခြေအနေကို စစ်ဆေးပါ။ သက်တမ်းကုန်ဆုံးရက် ကျော်လွန်နေသော်လည်း `active` အဖြစ် ပြသနေပါက၊ အခြေအနေ ပြောင်းလဲမှု မဖြစ်သေးခြင်း ဖြစ်သည်။ အဖြစ်များသော အကြောင်းရင်းများ-

- **အဖွဲ့ဝင်အဆင့်သည် auto-renewing ဖြစ်သည်**: အဖွဲ့ဝင်အဆင့် edit စာမျက်နှာရှိ `auto_renew` field ကို စစ်ဆေးပါ။ auto-renew ကို ဖွင့်ထားပါက၊ expiration cron သည် ဤအဖွဲ့ဝင်အဆင့်ကို ကျော်လွန်သွားသည် — ၎င်းသည် failure ကို အကြောင်းကြားရန် payment gateway ကို အားကိုးရသည်။ သင့် gateway dashboard (Stripe, PayPal) ကို စစ်ဆေးပြီး subscription အခြေအနေသည် Ultimate Multisite တွင် ပြသသည့်အရာနှင့် ကိုက်ညီမှုရှိမရှိ အတည်ပြုပါ။

- **cron job မလည်ပါက**: နောက်အဆင့်ကို ကြည့်ပါ။

### 4. Action Scheduler အလုပ်လုပ်ခြင်း ရှိမရှိ စစ်ဆေးပါ {#4-verify-action-scheduler-is-running}

Ultimate Multisite သည် ၎င်း၏ cron job များအတွက် Action Scheduler ကို အသုံးပြုသည်။ network admin တွင် **Tools > Scheduled Actions** သို့ သွားပြီး အောက်ပါတို့ကို ရှာဖွေပါ-

- **`wu_membership_check`** -- ၎င်းသည် နာရီတိုင်း လည်ပတ်နေသည့် recurring action အဖြစ် ပေါ်သင့်သည်။ ၎င်းပျောက်နေပါက၊ အဖွဲ့ဝင်အဆင့် စစ်ဆေးမှုများ မအချိန်ဇယားဆွဲဘဲ ရှိနေခြင်း ဖြစ်သည်။
- **`wu_async_mark_membership_as_expired`** -- ၎င်းတို့သည် သီးခြား အဖွဲ့ဝင်အဆင့်များကို expired အဖြစ် အမှတ်အသားပြုရန် လုပ်ငန်းများ ဖြစ်သည်။ ဤနေရာတွင် ပျက်ကျသွားသော actions များကို မြင်ရပါက၊ အဘယ်ကြောင့်ဖြစ်ရသည်ကို ရှင်းပြသည့် error မက်ဆေ့ခ်ျများ ပါဝင်နိုင်သည်။

အလုပ်များ ပိတ်မိနေသည် သို့မဟုတ် ပျက်ကျနေသည်ကို မြင်ရပါက၊ Action Scheduler ပြဿနာတစ်ခု ရှိနိုင်သည်။ အဖြစ်များသော အကြောင်းရင်းများ-

- `wp-config.php` တွင် **`DISABLE_WP_CRON` ကို `true` ဟု သတ်မှတ်ထားပြီး စနစ်အဆင့် cron အစားထိုးမှု မရှိခြင်း**
- **Site traffic နည်းခြင်း** -- WP-Cron သည် Site ကို တစ်စုံတစ်ယောက် ဝင်ရောက်မှသာ လည်ပတ်သည်။

ယုံကြည်စိတ်ချရသော cron လုပ်ဆောင်မှုအတွက်၊ system cron job တစ်ခုကို စနစ်တကျ သတ်မှတ်ပေးပါ-

```bash
# Run every 5 minutes via wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Or via WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Gateway Webhook ပြဿနာများ စစ်ဆေးပါ (Auto-Renewing Memberships) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

အဖွဲ့ဝင်အဆင့်သည် auto-renewing ဖြစ်ပြီး gateway subscription ကို ပယ်ဖျက်ထားသည် သို့မဟုတ် ပျက်ယွင်းသွားသော်လည်း Ultimate Multisite က `active` အဖြစ် ဆက်ပြသနေပါက-

- **Stripe**: Stripe Dashboard > Customers သို့ သွားပြီး subscription အခြေအနေကို စစ်ဆေးပါ။ ထို့နောက် Developers > Webhooks အောက်တွင် webhook endpoint သည် အသက်ဝင်နေကြောင်း စစ်ဆေးပါ။ endpoint သည် သင့် Site ကို ညွှန်ပြရမည်ဖြစ်ပြီး အောင်မြင်စွာ ပေးပို့မှုများကို ပြသရမည်။
- **PayPal**: သင့် PayPal business account တွင် subscription အခြေအနေကို စစ်ဆေးပြီး IPN/webhook ပေးပို့မှုကို စစ်ဆေးပါ။

Gateway က subscription ကို ပယ်ဖျက်ထားသည်ဟု ပြသသော်လည်း Ultimate Multisite က မပြသပါက၊ webhook အကြောင်းကြားချက်သည် ပျောက်ဆုံးသွားခဲ့ခြင်း ဖြစ်နိုင်သည်။ **Ultimate Multisite > Memberships > [Edit Membership]** တွင် အဖွဲ့ဝင်အဆင့် အခြေအနေကို ကိုယ်တိုင် ပြောင်းလဲပေးနိုင်သည်။

### 6. Expiration Grace Period (Cron Level) ကို စစ်ဆေးပါ {#6-check-the-expiration-grace-period-cron-level}

cron check တွင် ၎င်း၏ကိုယ်ပိုင် ကျေးဇူးကာလ (default: ၃ ရက်) ရှိပြီး အဖွဲ့ဝင်အဆင့်ကို expired အဖြစ် အမှတ်အသားပြုခြင်းမပြုမီ ဖြစ်သည်။ ၎င်းသည် frontend block grace period နှင့် မတူပါ။ Site တစ်ခု ပိတ်ဆို့နိုင်သည့် စုစုပေါင်းအချိန်မှာ-

**Expiration grace period (၃ ရက်)** + **Frontend block grace period (သင့် setting)** = စုစုပေါင်း ကြန့်ကြာမှု

ဥပမာအားဖြင့်၊ default setting နှင့် ၇ ရက် frontend grace period ဖြင့်၊ `date_expiration` နောက်ပိုင်းတွင် Site ကို အမှန်တကယ် ပိတ်ဆို့ရန် အချိန် ၁၀ ရက်အထိ ကြာနိုင်သည်။

### 7. အဖွဲ့ဝင်အဆင့်ကို ကိုယ်တိုင် Expire လုပ်ခြင်း {#7-manually-expire-a-membership}

cron cycle ကို စောင့်ဆိုင်းခြင်းမရှိဘဲ Site ကို ချက်ချင်း ပိတ်ဆို့ရန် လိုအပ်ပါက၊ အဖွဲ့ဝင်အဆင့် အခြေအနေကို ကိုယ်တိုင် ပြောင်းလဲပေးနိုင်သည်။

၁။ **Ultimate Multisite > Memberships** သို့ သွားပါ။
၂။ ထိခိုက်နေသော အဖွဲ့ဝင်အဆင့်ကို နှိပ်ပါ။
၃။ အခြေအနေကို **Expired** သို့မဟုတ် **Cancelled** ဟု ပြောင်းလဲပါ။
၄။ **Save** ကို နှိပ်ပါ။

frontend block သည် နောက်စာမျက်နှာကို load လုပ်သည့်အခါ အကျိုးသက်ရောက်မည် (expired အဖွဲ့ဝင်အဆင့်များအတွက် Frontend Block Grace Period နှင့် သက်ဆိုင်သည်၊ သို့မဟုတ် cancelled အဖွဲ့ဝင်အဆင့်များအတွက် ချက်ချင်း ဖြစ်သည်)။

## Summary {#summary}

သက်တမ်းကုန်ဆုံးရက်မှ Site ပိတ်ဆို့သည်အထိ အချိန်ဇယား အပြည့်အစုံ-

```text
date
```

### အကျဉ်းချုပ် {#developer-reference}

အထက်ပါ အကျဉ်းချုပ်သည် အကြောင်းအရာကို အကျဉ်းချုပ်ဖော်ပြထားပါသည်။
