---
title: ဖြန့်ချိမှု မှတ်စုများ
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# ထုတ်ပြန်ချက် မှတ်စုများ

## Version 2.13.0 — 2026-06-05 တွင် ထုတ်ပြန်ခဲ့သည်

- အသစ်: customer Account၊ checkout၊ billing၊ site၊ invoice၊ template ပြောင်းခြင်းနှင့် domain mapping လုပ်ငန်းစဉ်များအတွက် sovereign-tenant ထောက်ပံ့မှု ထည့်သွင်းခဲ့ပြီး tenant ကွန်ရက်များက စီမံခန့်ခွဲထားသော လုပ်ဆောင်ချက်များအတွက် သုံးစွဲသူများကို အဓိက site သို့ ပြန်ညွှန်နိုင်သည်။
- အသစ်: ထပ်တလဲလဲ membership များအတွက် renewal-credential စစ်ဆေးမှုများ ထည့်သွင်းခဲ့ပြီး သိမ်းဆည်းထားသော billing agreement၊ subscription သို့မဟုတ် vault token မရှိပါက gateway များက auto-renewal ကို ပိတ်နိုင်သည်။
- အသစ်: နောက်ခံအလုပ်များ နှောင့်နှေးသော host များတွင် checkout မှ site ထောက်ပံ့ဖန်တီးမှုကို ပိုမိုယုံကြည်စိတ်ချရစေရန် pending site ဖန်တီးမှုအတွက် HMAC ဖြင့်အတည်ပြုထားသော loopback publishing ကို ထည့်သွင်းခဲ့သည်။
- အသစ်: SSO URL များ၊ checkout-form အခြေခံ domain များနှင့် အလိုအလျောက် domain-record ဖန်တီးမှုများအတွက် developer extension point များ ထည့်သွင်းခဲ့သည်။
- ပြင်ဆင်ချက်: SSO သည် mapped domain များ၊ အမည်မသိ broker လာရောက်မှုများ၊ logout နှင့် plugin အချင်းချင်း dependency ပဋိပက္ခများအတွင်း ပိုမိုယုံကြည်စိတ်ချရလာသည်။
- ပြင်ဆင်ချက်: Pending site ဖန်တီးမှုသည် ယခုအခါ stale publish flag များမှ ပြန်လည်ကောင်းမွန်နိုင်ပြီး သုံးစွဲသူများကို site ဖန်တီးမှု မျက်နှာပြင်တွင် ရပ်တန့်နေစေခြင်းကို ရှောင်ရှားသည်။
- ပြင်ဆင်ချက်: shared checkout-form အခြေခံ domain များအတွက် domain record များကို မဖန်တီးတော့ပါ။ integration မရှိသည့်အခါ အသုံးမပြုသော host-provider နောက်ခံအလုပ်များကိုလည်း ကျော်သွားသည်။
- ပြင်ဆင်ချက်: Checkout၊ billing address၊ password reset၊ email verification၊ template ပြောင်းခြင်း၊ tour များနှင့် customer Dashboard ၏ edge case များသည် ပုံမှန် သုံးစွဲသူလုပ်ငန်းစဉ်များကို မတားဆီးတော့ပါ။
- ပြင်ဆင်ချက်: Broadcast email များသည် recipient list သို့မဟုတ် mail transport များ မအောင်မြင်သည့်အခါ SMTP/plugin fatal error များကို ရှောင်ရှားရင်း လက်ခံသူများကို ယခုအခါ လျှို့ဝှက်ထားသည်။
- ပြင်ဆင်ချက်: Membership renewal များ၊ သက်တမ်းကုန်ဆုံးမှု ပြသခြင်းနှင့် ငွေပေးချေမှုကောက်ခံခြင်း edge case များသည် ယခုအခါ ချက်ချင်းသက်တမ်းကုန်ခြင်း၊ crash ဖြစ်ခြင်း သို့မဟုတ် လိုအပ်သော ငွေပေးချေမှုများ လွတ်သွားခြင်းကို ရှောင်ရှားသည်။
- မြှင့်တင်ချက်: WordPress compatibility ကို 7.0 အထိ စမ်းသပ်ထားပြီး production Vue asset များကို npm source များမှ ပြန်လည်တည်ဆောက်ထားကာ Cypress end-to-end coverage သည် checkout၊ setup၊ SSO နှင့် gateway လုပ်ငန်းစဉ်များကို ပိုမိုစမ်းသပ်ထားသည်။

## Version 2.12.0 — 2026-05-15 တွင် ထုတ်ပြန်ခဲ့သည်

- အသစ်: Hostinger (hPanel) ကို domain mapping integration ပါသော ထောက်ပံ့ထားသည့် host provider အဖြစ် ထည့်သွင်းခဲ့သည်
- အသစ်: Site Exporter သည် ယခုအခါ ကွန်ရက်တစ်ခုလုံး site ပြန်လည်တည်ဆောက်မှုကို ပိုမိုလွယ်ကူစေရန် network import bundle များကို ကိုင်တွယ်နိုင်သည်
- ပြင်ဆင်ချက်: BCC broadcast email များသည် လက်ခံသူလိပ်စာများ ထုတ်ဖော်မိခြင်းမှ ကာကွယ်ရန် undisclosed-recipients header ကို ယခုအခါ အသုံးပြုသည်
- ပြင်ဆင်ချက်: date မဟုတ်သော တန်ဖိုးဖြင့် သိမ်းဆည်းသည့်အခါ membership သက်တမ်းကုန်ဆုံးရက် မပျက်စီးတော့ပါ
- ပြင်ဆင်ချက်: Stripe membership update များသည် ယခုအခါ ရပ်ဆိုင်းထားသော deleteDiscount API ကို မခေါ်ဘဲ discount များကို မှန်ကန်စွာ ရှင်းလင်းသည်
- ပြင်ဆင်ချက်: domain-mapped site များပေါ်ရှိ SSO redirect များကို အဆုံးမရှိ redirect loop မဖြစ်စေရန် ယခုအခါ ကန့်သတ်ထားသည်
- ပြင်ဆင်ချက်: Setup wizard image picker ရွေးချယ်မှုသည် ယခုအခါ အောက်ခံ data model ကို မှန်ကန်စွာ update လုပ်သည်
- ပြင်ဆင်ချက်: Site Exporter CLI သည် ယခုအခါ မှန်ကန်သော မူလ network site ရွေးချယ်မှုကို ထိန်းသိမ်းသည်
- မြှင့်တင်ချက်: bundled wp-cli ကို plugin package မှ ဖယ်ရှားခဲ့ပြီး plugin အရွယ်အစားကို လျှော့ချခဲ့သည်

## Version 2.11.0 — 2026-05-11 တွင် ထုတ်ပြန်ခဲ့သည်

- အသစ်: Site export များသည် ယခုအခါ ကိုယ်တိုင် boot လုပ်နိုင်သော `index.php` ကို bundle လုပ်ထားသောကြောင့် ZIP ကို သီးခြား plugin install မလိုဘဲ host အသစ်ပေါ်တွင် install လုပ်နိုင်သည်။
- အသစ်: Network export သည် administrator များအား Site Export admin page မှ subsite အားလုံးကို archive တစ်ခုတည်းအဖြစ် export လုပ်ခွင့်ပေးသည်။
- အသစ်: Allow Site Templates plan toggle ကို ယခုအခါ fallback chain မှတစ်ဆင့် အကောင်အထည်ဖော်ထားပြီး plan ကန့်သတ်ချက်များအတွက် template ရရှိနိုင်မှုကို မှန်ကန်စွာ ကန့်သတ်သည်။
- အသစ်: လိုအပ်သော field ကို configure မလုပ်ဘဲ product တစ်ခု ထည့်သွင်းသည့်အခါ checkout form editor က သတိပေးသည်။
- အသစ်: Import/Export settings tab သည် ယခုအခါ ၎င်း၏ scope ကို ရှင်းလင်းစွာ ဖော်ပြပြီး Site Export tool သို့ တိုက်ရိုက် link ချိတ်ထားသည်။

## Version 2.10.0 — 2026-05-05 တွင် ထုတ်ပြန်ခဲ့သည်

- အသစ်: ချောမွေ့သော gateway configuration အတွက် OAuth flag gate ပါဝင်သည့် manual credential ထည့်သွင်းမှုအတွက် PayPal guided setup wizard။
- အသစ်: Template switch customer panel ကို လက်ရှိ-template card၊ persistent grid နှင့် **လက်ရှိ template ကို Reset လုပ်ရန်** button ဖြင့် ပြန်လည်ဒီဇိုင်းလုပ်ထားသည်။
- ပြင်ဆင်ချက်: Template ပြောင်းခြင်းသည် AJAX မအောင်မြင်သောအခါ UI ကို ရပ်တန့်မနေစေတော့ပါ။
- ပြင်ဆင်ချက်: Template ပြောင်းခြင်း permission state များကို unauthorized access မှ ကာကွယ်ထားသည်။
- ပြင်ဆင်ချက်: Site override input များကို သိမ်းဆည်းမီ validate လုပ်ထားသည်။
- ပြင်ဆင်ချက်: Address ဗလာဖြစ်နေသည့်အခါ billing address prompt ကို ယခုအခါ ပြသသည်။
- ပြင်ဆင်ချက်: PHP 8.1 null-to-string deprecation notice များကို ဖြေရှင်းပြီးဖြစ်သည်။
- ပြင်ဆင်ချက်: timing issue များကို ကာကွယ်ရန် Currents ကို init hook မတိုင်မီ lazy-loaded လုပ်ထားသည်။
- ပြင်ဆင်ချက်: Filtered SSO path ကို login လုပ်ငန်းစဉ်အားလုံးတွင် လိုက်နာထားသည်။
- ပြင်ဆင်ချက်: ဗလာဖြစ်သော site identity option များကို save လုပ်သည့်အခါ ထိန်းသိမ်းထားသည်။

## Version 2.9.0 — 2026-04-30 တွင် ထုတ်ပြန်ခဲ့သည်

- အသစ်: Single-site export နှင့် import ကို **Tools > Export & Import** အောက်တွင် ထည့်သွင်းခဲ့သည်။
- ပြင်ဆင်ချက်: Export ZIP file များကို ယခုအခါ authenticated download endpoint မှတစ်ဆင့် ပေးပို့သည်။
- ပြင်ဆင်ချက်: pending export/import query များရှိ SQL injection အန္တရာယ်နှင့် query ပြဿနာများကို ပြင်ဆင်ခဲ့သည်။
- ပြင်ဆင်ချက်: admin က customer email ကို manual အတည်ပြုသည့်အခါ pending site ကို publish မလုပ်တော့ပါ။
- ပြင်ဆင်ချက်: membership မရှိသည့်အခါ orphaned pending_site record များကို ရှင်းလင်းထားသည်။
- ပြင်ဆင်ချက်: Settings nav padding နှင့် search anchor navigation ကို ပြင်ဆင်ခဲ့သည်။
- ပြင်ဆင်ချက်: Pending site များကို ယခုအခါ All Sites မြင်ကွင်းတွင် ပထမဆုံး ပြသသည်။
- ပြင်ဆင်ချက်: 403 error များကို ကာကွယ်ရန် screenshot provider (mShots) User-Agent header ကို ထည့်သွင်းခဲ့သည်။
- ပြင်ဆင်ချက်: Import cron schedule circular dependency ကို ဖြေရှင်းခဲ့သည်။
- ပြင်ဆင်ချက်: Tour ID များကို user settings key များတွင် underscore များအဖြစ် ပုံမှန်ပြောင်းထားသည်။
- မြှင့်တင်ချက်: ပိုမိုကောင်းမွန်သော compatibility အတွက် Alchemy/Zippy အစား ZipArchive ကို ယခုအခါ အသုံးပြုသည်။

## Version 2.8.0 — 2026-04-29

- အသစ်: Other Options settings UI တွင် Enable Jumper toggle ထည့်သွင်းထားသည်။
- အသစ်: checkout forms list table တွင် Status column ထည့်သွင်းထားသည်။
- အသစ်: custom MU-plugin sunrise extensions များအတွက် Addon sunrise file loader ထည့်သွင်းထားသည်။
- တိုးတက်မှု: settings page မှ error-reporting opt-in setting ကို ဖယ်ရှားထားသည်။
- ပြင်ဆင်ချက်: Thank-you page site card — image ကို ယခုကန့်သတ်ထားပြီး links များကို မှန်ကန်စွာ style ပြုလုပ်ထားသည်။
- ပြင်ဆင်ချက်: Screenshot provider ကို thum.io မှ WordPress.com mShots သို့ ပြောင်းထားသည်။
- ပြင်ဆင်ချက်: Enable Registration နှင့် Default Role သည် fresh install တွင် ယခု မှန်ကန်သော defaults များ သတ်မှတ်သည်။
- ပြင်ဆင်ချက်: domain တွင် port ပါရှိသည့်အခါ `get_site_url()` သည် empty မပြန်တော့ပါ။
- ပြင်ဆင်ချက်: `copy_media` setting သည် empty ဖြစ်နေသည့်အခါ Clone media files များကို ယခု မှန်ကန်စွာ copy လုပ်သည်။
- ပြင်ဆင်ချက်: network-activate sitemeta write ပြီးနောက် Object cache ကို မှန်ကန်စွာ invalidated လုပ်ထားသည်။
- ပြင်ဆင်ချက်: ၃ ပိုင်းပါ domain များအတွက် DNS verification ပြီးသည့်အခါ Custom domain ကို primary အဖြစ် အလိုအလျောက် promote လုပ်ထားသည်။
- ပြင်ဆင်ချက်: expired payment ကို clean up လုပ်သည့်အခါ pending membership ကို cancelled လုပ်ထားသည်။
- ပြင်ဆင်ချက်: inline login prompt ကို dismiss လုပ်ပြီးနောက် Password strength checker ကို ပြန် bind လုပ်ထားသည်။
- ပြင်ဆင်ချက်: site ကို ဖန်တီးပြီးသားဖြစ်သည့်အခါ thank-you page တွင် infinite page reload ကို ရပ်တန့်ထားသည်။
- ပြင်ဆင်ချက်: plugin activation နှင့် settings save တွင် WP core registration option ကို sync လုပ်ထားသည်။
- ပြင်ဆင်ချက်: PHP 8.4 compatibility အတွက် `calculate_expiration` တွင် Null expiration guard ထည့်ထားသည်။
- ပြင်ဆင်ချက်: customer တွင် active membership ရှိပြီးသားဖြစ်သည့်အခါ duplicate signups များကို ပိတ်ထားသည်။
- ပြင်ဆင်ချက်: checkout တွင် `date_expiration` အတွက် null check ထည့်ထားသည်။
- ပြင်ဆင်ချက်: Site provisioning ကို ပိုမိုခိုင်မာစေထားသည် — limitations, membership inference, domain promotion။
- ပြင်ဆင်ချက်: check မအောင်မြင်သည့်အခါ Pre-install check status label ကို NOT Activated ဟု ပြင်ထားသည်။
- ပြင်ဆင်ချက်: email verification URLs များအတွက် Checkout domain ကို အသုံးပြုထားသည်။
- ပြင်ဆင်ချက်: password field မရှိသည့်အခါ checkout ပြီးနောက် Auto-login လုပ်နိုင်ရန် ပြင်ထားသည်။
- ပြင်ဆင်ချက်: Free memberships များသည် မသက်တမ်းကုန်တော့ပါ — lifetime အဖြစ် သတ်မှတ်ထားသည်။
- ပြင်ဆင်ချက်: customer မှ email verify လုပ်သည်အထိ Email verification gate က site publish ကို ထိန်းထားသည်။
- ပြင်ဆင်ချက်: SES v2 API endpoint base path နှင့် identity route ကို ပြင်ထားသည်။
- ပြင်ဆင်ချက်: pre-submit catch block တွင် `wu_inline_login_error` hook ကို emit လုပ်ထားသည်။
