---
title: ထုတ်လွှတ်မှု မှတ်စုများ
sidebar_position: 9
_i18n_hash: e9f9d20e55608b81945ab7dfcf495fcb
---
# ထုတ်လွှတ်မှု မှတ်တမ်းများ

## Version 2.12.0 — 2026-05-15 တွင် ထုတ်လွှတ်သည်

- အသစ်- domain mapping ပေါင်းစပ်မှုနဲ့ အသုံးပြုနိုင်တဲ့ host provider အသစ်အဖြစ် Hostinger (hPanel) ကို ထည့်သွင်းလိုက်ပါတယ်။
- အသစ်- Site Exporter က network တစ်ခုလုံးကို အလွယ်တကူ ပြန်လည်တည်ဆောက်နိုင်ဖို့ network import bundles တွေကို ကိုင်တွယ်နိုင်ပါပြီ။
- ပြင်ဆင်မှု- BCC broadcast email တွေဟာ လက်ခံသူတွေရဲ့ အီးမေးလ်လိပ်စာတွေ ပေါ်လွင်မသွားအောင် undisclosed-recipients header ကို အသုံးပြုပါပြီ။
- ပြင်ဆင်မှု- Membership ရဲ့ သက်တမ်းကုန်ဆုံးရက်ကို non-date value နဲ့ သိမ်းဆည်းတဲ့အခါ ပျက်စီးမှုမရှိတော့ပါဘူး။
- ပြင်ဆင်မှု- Stripe membership update တွေဟာ deprecated deleteDiscount API ကို ခေါ်ဆိုစရာမလိုဘဲ discount တွေကို မှန်ကန်စွာ ဖယ်ရှားပေးပါပြီ။
- ပြင်ဆင်မှု- domain-mapped site တွေမှာ SSO redirect တွေဟာ အဆုံးမရှိ redirect loop မဖြစ်အောင် ကန့်သတ်ထားပါပြီ။
- ပြင်ဆင်မှု- Setup wizard ရဲ့ image picker ရွေးချယ်မှုဟာ အောက်ခံ data model ကို မှန်ကန်စွာ update လုပ်ပေးပါပြီ။
- ပြင်ဆင်မှု- Site Exporter CLI က default network site ရွေးချယ်မှုကို မှန်ကန်စွာ ထိန်းသိမ်းထားပါပြီ။
- တိုးတက်ကောင်းမွန်စေမှု- plugin package ကနေ bundled wp-cli ကို ဖယ်ရှားလိုက်တဲ့အတွက် plugin အရွယ်အစား လျော့ကျသွားပါတယ်။

## Version 2.11.0 — 2026-05-11 တွင် ထုတ်လွှတ်သည်

- အသစ်- Site export တွေဟာ self-booting `index.php` ကို bundle လုပ်ပေးတဲ့အတွက် ZIP ကို plugin အသစ်ထည့်စရာမလိုဘဲ fresh host ပေါ်မှာ တင်နိုင်ပါပြီ။
- အသစ်- Network export က admin တွေအနေနဲ့ Site Export admin page ကနေ subsite အားလုံးကို single archive တစ်ခုတည်းအဖြစ် export လုပ်နိုင်ပါပြီ။
- အသစ်- Site Templates plan toggle ကို fallback chain ကနေ အကောင်အထည်ဖော်ပေးတဲ့အတွက် plan ကန့်သတ်ချက်တွေအတွက် template ရရှိနိုင်မှုကို မှန်ကန်စွာ ကန့်သတ်ပေးပါပြီ။
- အသစ်- Checkout form editor က မလိုအပ်တဲ့ field တစ်ခုကို configure မလုပ်ဘဲ product တစ်ခုထည့်တဲ့အခါ သတိပေးချက်ပေးပါပြီ။
- အသစ်- Import/Export settings tab က သူ့ရဲ့ scope ကို ရှင်းရှင်းလင်းလင်း ဖော်ပြပေးပြီး Site Export tool ကို တိုက်ရိုက် link ပေးပါပြီ။

## Version 2.10.0 — 2026-05-05 တွင် ထုတ်လွှတ်သည်

- အသစ်- PayPal အတွက် manual credential တွေ ထည့်သွင်းနိုင်ဖို့ guided setup wizard နဲ့ OAuth flag gate ကို ပေါင်းစပ်ပေးထားပါတယ်။
- အသစ်- Template switch customer panel ကို current-template card၊ persistent grid နဲ့ **Reset current template** ခလုတ်တို့နဲ့ ပြန်လည်ဒီဇိုင်းထုတ်ထားပါတယ်။
- ပြင်ဆင်မှု- Template switching လုပ်တဲ့အခါ AJAX failure ကြောင့် UI ပိတ်ဆို့မှု မရှိတော့ပါဘူး။
- ပြင်ဆင်မှု- Template switching ရဲ့ permission status တွေကို ခွင့်ပြုချက်မရှိဘဲ ဝင်ရောက်မှုတွေကနေ ကာကွယ်ပေးထားပါတယ်။
- ပြင်ဆင်မှု- Site override inputs တွေကို သိမ်းဆည်းခြင်းမပြုခင် validate လုပ်ပေးပါပြီ။
- ပြင်ဆင်မှု- ဘောင်ခလုတ် (Billing address) ကို လိပ်စာ ফাঁকাဖြစ်နေတဲ့အခါ ပြသပေးပါပြီ။
- ပြင်ဆင်မှု- PHP 8.1 null-to-string deprecation notices တွေကို ဖြေရှင်းပေးပါပြီ။
- ပြင်ဆင်မှု- Currents ကို init hook မတိုင်ခင် lazy-load လုပ်ပေးတဲ့အတွက် timing ပြဿနာတွေ မရှိတော့ပါဘူး။
- ပြင်ဆင်မှု- Filtered SSO path ကို login flow အားလုံးမှာ လေးစားလိုက်နာပါပြီ။
- ပြင်ဆင်မှု- Blank site identity options တွေကို သိမ်းဆည်းတဲ့အခါ ထိန်းသိမ်းပေးပါပြီ။

## Version 2.9.0 — 2026-04-30 တွင် ထုတ်လွှတ်သည်

- အသစ်- **Tools > Export & Import** အောက်မှာ single-site export နဲ့ import ကို ထည့်သွင်းပေးထားပါတယ်။
- ပြင်ဆင်မှု- Export ZIP file တွေကို authenticated download endpoint ကနေ ဝန်ဆောင်မှုပေးပါပြီ။
- ပြင်ဆင်မှု- pending export/import query တွေမှာ ရှိတဲ့ SQL injection risk နဲ့ query ပြဿနာတွေကို ပြင်ဆင်ပေးပါပြီ။
- ပြင်ဆင်မှု- admin က customer email ကို manual အတည်ပြုပေးတဲ့အခါ pending site မထုတ်ဝေရသေးဘဲ ကျန်နေတာကို ပြင်ဆင်ပေးပါပြီ။
- ပြင်ဆင်မှု- membership မရှိတဲ့အခါ orphan လုပ်ထားတဲ့ pending_site records တွေကို ရှင်းလင်းပေးပါပြီ။
- ပြင်ဆင်မှု- Settings navigation ရဲ့ padding နဲ့ search anchor navigation ကို ပြင်ဆင်ပေးပါပြီ။
- ပြင်ဆင်မှု- Pending site တွေကို All Sites view မှာ အရင်ဆုံး ပြသပေးပါပြီ။
- ပြင်ဆင်မှု- Screenshot provider (mShots) အတွက် User-Agent header ကို ထည့်ပေးလိုက်တဲ့အတွက် 403 error တွေ မဖြစ်တော့ပါဘူး။
- ပြင်ဆင်မှု- Import cron schedule ရဲ့ circular dependency ကို ဖြေရှင်းပေးပါပြီ။
- ပြင်ဆင်မှု- Tour ID တွေကို user settings keys တွေမှာ underscores နဲ့ ပုံမှန်ဖြစ်အောင် လုပ်ပေးပါပြီ။
- တိုးတက်ကောင်းမွန်စေမှု- better compatibility အတွက် ZipArchive ကို Alchemy/Zippy အစား အသုံးပြုလာပါပြီ။

## Version 2.8.0 — 2026-04-29 တွင် ထုတ်လွှတ်သည်

- အသစ်- Other Options settings UI မှာ Enable Jumper toggle ကို ထည့်သွင်းပေးထားပါတယ်။
- အသစ်- checkout forms list table မှာ Status column ကို ထည့်သွင်းပေးထားပါတယ်။
- အသစ်- custom MU-plugin sunrise extensions အတွက် addon sunrise file loader ကို ထည့်သွင်းပေးထားပါတယ်။
- တိုးတက်ကောင်းမွန်စေမှု- settings page ကနေ error-reporting opt-in setting ကို ဖယ်ရှားလိုက်ပါတယ်။
- ပြင်ဆင်မှု- Thank-you page site card — image ကို ကန့်သတ်ပြီး link တွေကို မှန်ကန်စွာ style လုပ်ပေးပါပြီ။
- ပြင်ဆင်မှု- Screenshot provider ကို thum.io ကနေ WordPress.com mShots ကို ပြောင်းလဲအသုံးပြုပါပြီ။
- ပြင်ဆင်မှု- Enable Registration နဲ့ Default Role တွေကို fresh install လုပ်တဲ့အခါ default အသစ်တွေနဲ့ သတ်မှတ်ပေးပါပြီ။
- ပြင်ဆင်မှု- `get_site_url()` က domain မှာ port ပါတဲ့အခါ empty value မပြန်တော့ပါဘူး။
- ပြင်ဆင်မှု- `copy_media` setting က empty ဖြစ်နေတဲ့အခါ media file တွေကို မှန်ကန်စွာ copy လုပ်ပေးပါပြီ။
- ပြင်ဆင်မှု- network-activate sitemeta write လုပ်ပြီးတဲ့အခါ object cache ကို မှန်ကန်စွာ invalidate လုပ်ပေးပါပြီ။
- ပြင်ဆင်မှု- 3-part domain တွေအတွက် DNS verification လုပ်တဲ့အခါ custom domain ကို primary အဖြစ် အလိုအလျောက် မြှင့်တင်ပေးပါပြီ။
- ပြင်ဆင်မှု- ပေးချေမှု ကုန်ဆုံးသွားတဲ့အခါ pending membership ကို ပယ်ဖျက်ပေးပါပြီ။
- ပြင်ဆင်မှု- Password strength checker ကို inline login prompt ပိတ်လိုက်ပြီးတဲ့အခါ ပြန်လည်ချိတ်ဆက်ပေးပါပြီ။
- ပြင်ဆင်မှု- site ကို အရင်ကတည်းက ဖန်တီးထားပြီးတဲ့အခါ thank-you page မှာ infinite page reload မဖြစ်တော့ပါဘူး။
- ပြင်ဆင်မှု- WP core registration option ကို plugin activate လုပ်တဲ့အခါနဲ့ settings save လုပ်တဲ့အခါ sync လုပ်ပေးပါပြီ။
- ပြင်ဆင်မှု- PHP 8.4 နဲ့ compatibility အတွက် `calculate_expiration` မှာ Null expiration guard ကို ထည့်ပေးပါပြီ။
- ပြင်ဆင်မှု- customer က active membership ရှိနေရင် duplicate signups တွေကို ပိတ်ဆို့ပေးပါပြီ။
- ပြင်ဆင်မှု- checkout မှာ `date_expiration` အတွက် Null check ကို ထည့်ပေးပါပြီ။
- ပြင်ဆင်မှု- Site provisioning ကို ပိုမိုခိုင်မာစေပါတယ် — ကန့်သတ်ချက်များ၊ membership inference၊ domain promotion တို့ကို။
- ပြင်ဆင်မှု- Pre-install check status label ကို check ကျတဲ့အခါ NOT Activated လို့ ပြင်ဆင်ပေးပါပြီ။
- ပြင်ဆင်မှု- Email verification အတွက် URL တွေမှာ checkout domain ကို အသုံးပြုပါပြီ။
- ပြင်ဆင်မှု- password field မရှိတဲ့အခါ checkout လုပ်ပြီးတဲ့အခါ auto-login လုပ်ပေးပါပြီ။
- ပြင်ဆင်မှု- Free memberships တွေဟာ ကုန်ဆုံးမှာ မဟုတ်တော့ပါဘူး — lifetime အဖြစ် သတ်မှတ်ပေးပါပြီ။
- ပြင်ဆင်မှု- Email verification gate က customer email ကို အတည်ပြုမပေးမချင်း site publish ကို ထိန်းထားပေးပါပြီ။
- ပြင်ဆင်မှု- SES v2 API endpoint base path နဲ့ identity route ကို ပြင်ဆင်ပေးပါပြီ။
- ပြင်ဆင်မှု- `wu_inline_login_error` hook ကို pre-submit catch block မှာ ထုတ်လွှတ်ပေးပါပြီ။
