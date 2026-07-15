---
title: Captcha ပြောင်းလဲမှု မှတ်တမ်း
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha ပြောင်းလဲမှု မှတ်တမ်း

Version: 1.5.0 - 2026-05-22 နေ့တွင် ထုတ်ဝေခဲ့သည်
* အသစ်: Hard-stop rate limiter — captcha-ကာကွယ်ထားသည့် နေရာများ (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) ပေါ်ရှိ GET နှင့် POST အားလုံးကို ရေတွက်ပြီး HTTP 429၊ `Retry-After` header နှင့် ကျပန်း အချိန်နှောင့်နှေးမှု (tarpit sleep) (၁–၅ စက္ကန့်၊ အမြင့်ဆုံး ၁၅ စက္ကန့်) ဖြင့် ပြန်လည်ဖြေကြားပါသည်။
* အသစ်: Tarpit အချိန်ကာလကို ချိန်ညှိရန် `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` setting များ။
* အသစ်: ယုံကြည်ရသော IP အကွာအဝေးများကို ကင်းလွတ်ခွင့်ပေးရန် `wu_cap_rate_limit_whitelist_ip` filter။
* အသစ်: hard-stop response ပေးပို့ခြင်းမပြုမီ ချက်ချင်း အလုပ်လုပ်သည့် `wu_cap_rate_limit_will_block` action။
* အသစ်: Spoof-ဒဏ်ခံနိုင်သော client-IP ရှာဖွေခြင်း။ `Captcha_Core::get_client_ip()` (rate-limit bucket key များ၊ captcha siteverify `remoteip` နှင့် statistics IP hash များ၏ အမှန်တရားရင်းမြစ်) သည် ယခုအခါ တင်းကျပ်သော ယုံကြည်မှုပုံစံကို အကောင်အထည်ဖော်သည်- REMOTE_ADDR သည် အနိမ့်ဆုံးအဆင့်ဖြစ်ပြီး၊ `CF-Connecting-IP` ကို လက်ရှိ Cloudflare IP အကွာအဝေးအတွင်းရှိ immediate peer မှသာ အသိအမှတ်ပြုကာ၊ `X-Forwarded-For` ကိုလည်း immediate peer သည် admin-configured trusted-proxy list တွင်သာ ရှိမှ အသိအမှတ်ပြုသည်။ ၎င်းသည် ယုံကြည်ရသော/CF ခုန်ကူးမှုများကို ကျော်လွန်ပြီး ဧည့်သည် IP ပေါ်တွင် ရောက်ရှိသည်အထိ ညာမှဘယ်သို့ စစ်ဆေးသွားပါသည်။
* အသစ်: `cap_trust_cloudflare_headers` setting (default OFF) — Cloudflare နောက်ကွယ်တွင် ရှိနေပါက `CF-Connecting-IP` ကို ယုံကြည်မှုအဖြစ် ရွေးချယ်အသုံးပြုနိုင်ပါသည်။ ဤ plugin သည် Cloudflare CIDR snapshot ကို ပေါင်းစပ်ထည့်သွင်းပေးပြီး၊ refresh လုပ်ခြင်း အဆင်မပြေပါက fallback ပုံစံဖြင့် wp-cron မှတစ်ဆင့် အပတ်စဉ် refresh လုပ်ပေးပါသည်။
* အသစ်: `cap_trusted_proxies` setting — CIDR များ သို့မဟုတ် ရှင်းလင်းသော IP များ (တစ်ကြောင်းလျှင် တစ်ခု၊ `#` comment ခွင့်ပြုသည်) ကို စာသားဧရိယာ (textarea) တွင် စာရင်းပြုစုရန်၊ ၎င်းသည် သင့်ကိုယ်ပိုင် front-line proxy / load-balancers များကို ဖော်ပြသည်။ ၎င်းမရှိပါက rate limiter ကို ဖွင့်ထားသော်လည်း `X-Forwarded-For` ကို လျစ်လျူရှုမည်ဖြစ်သည်။
* အသစ်: Cloudflare / proxy အခြေအနေကို အလိုအလျောက် ရှာဖွေနိုင်မှု ပထမဆုံးအကြိမ်အသုံးပြုခြင်း၊ "Apply detected settings" admin notice ဖြင့် တစ်ချက်နှိပ်ရုံဖြင့် လုပ်ဆောင်နိုင်ပါသည်။ ဤ plugin သည် သင်သိမ်းဆည်းထားသော တန်ဖိုးများကို ဘယ်တော့မှ အစားထိုးမည်မဟုတ်ပါ; နောက်ဆက်တွဲ traffic များက သင့် configuration သည် လက်တွေ့အခြေအနေနှင့် မကိုက်ညီကြောင်း အကြံပြုပါက (ဥပမာ- Cloudflare က CIDR အကွာအဝေးများကို ပြောင်းလဲပြီး သင့် proxy CIDR သည် ခေတ်မမီတော့ပါက)၊ မဖယ်ရှားနိုင်သော မကိုက်ညီမှု အသိပေးချက်သည် အကြံပြုထားသော update ကို ပြသပေးမည်။
* ပြင်ဆင်ခဲ့သည်: Invisible mode သည် `cap_security_level` ကို FAST သို့ တိတ်တဆိတ် အဆင့်မြှော့ချခြင်း မရှိတော့ပါ — admin မှ သတ်မှတ်ထားသော အဆင့်ကို အသိအမှတ်ပြုပါသည်။ စိတ်ကြိုက် logic လိုချင်သော site များအတွက် `wu_cap_server_security_level` filter အသစ်တစ်ခု ရရှိနိုင်ပါသည်။
* ပြင်ဆင်ခဲ့သည်: Statistics `rate_limits_triggered` counter သည် အောင်မြင်ပြီးနောက် အလွန်ရှားပါးသော backstop path ပေါ်တွင်သာမက block လုပ်တိုင်း တိုးမြှင့်ပေးပါသည်။
* ပြင်ဆင်ခဲ့သည်: `Captcha_Core::get_client_ip()` သည် rate limiter၊ captcha ပံ့ပိုးပေးသူများ (reCAPTCHA + hCaptcha `siteverify`) နှင့် statistics အားလုံးအတွက် ဧည့်သည် IP ကို ခွဲခြားသတ်မှတ်ရာတွင် ယခုအခါ အမှန်တရားရင်းမြစ်တစ်ခု ဖြစ်လာသည် — တိုက်ရိုက် origin-server မှ ပေးပို့သော၊ အတုအယောင် `CF-Connecting-IP` header ပါသည့် request များသည် အမှန်တကယ် peer ကို အစားထိုးသည့် IP ဖြင့် bucket လုပ်ခြင်းမှ ကင်းဝေးစေပါသည်။
* ပြင်ဆင်ခဲ့သည်: WooCommerce classic checkout rate-limit gate သည် ယခုအခါ `woocommerce_before_checkout_form` နေရာအစား `template_redirect` (priority 1) တွင် အလုပ်လုပ်ပါသည်။ form-level hook သည် cart မှာ ပစ္စည်းမရှိသည့်အခါ ဘယ်တော့မှ အလုပ်မလုပ်သောကြောင့်၊ ပစ္စည်းထည့်ခြင်းမရှိဘဲ flood traffic များသည် limiter ကို လုံးဝကျော်လွန်နေခဲ့ပါသည်။
* ပြင်ဆင်ခဲ့သည်: WooCommerce pay-for-order rate-limit gate သည် ယခုအခါ `woocommerce_before_pay_action` နေရာအစား `template_redirect` တွင် အလုပ်လုပ်ပါသည်။ နောက်တစ်ခုမှာ `wp_verify_nonce('woocommerce-pay')` အောင်မြင်မှသာ အလုပ်လုပ်သောကြောင့်၊ အခွင့်အရေးမရှိသော တိုက်ခိုက်သူများ (အမှန်တကယ် ခြိမ်းခြောက်မှုပုံစံ) သည် limiter ကို ဘယ်တော့မှ အလုပ်မလုပ်စေခဲ့ပါ။
* ပြင်ဆင်ခဲ့သည်: WooCommerce Store API (blocks) checkout rate-limit gate သည် ယခုအခါ `woocommerce_store_api_checkout_update_order_from_request` နေရာအစား `rest_pre_dispatch` တွင် အလုပ်လုပ်ပါသည်။ နောက်တစ်ခုမှာ Store API က cart နှင့် billing fields များကို အတည်ပြုပြီးမှသာ အလုပ်လုပ်သောကြောင့်၊ အခွင့်အရေးမရှိသော bots များသည် validator မှ 400 ကို ရရှိပြီး limiter ကို ဘယ်တော့မှ မလှုပ်ရှားစေခဲ့ပါ။
* ပြင်ဆင်ခဲ့သည်: Ultimate Multisite inline-login rate-limit gate သည် ယခုအခါ `wu_before_inline_login` နေရာအစား `wu_ajax_nopriv_wu_inline_login` priority 1 (နှင့် logged-in mirror) တွင် အလုပ်လုပ်ပါသည်။ နောက်တစ်ခုမှာ `check_ajax_referer('wu_checkout')` အောင်မြင်မှသာ အလုပ်လုပ်သောကြောင့်၊ တရားဝင် wu_checkout nonce မပါသော အခွင့်အအရေးမရှိသော bots များသည် 403 ကို ရရှိပြီး limiter ကို ဘယ်တော့မှ မလှုပ်ရှားစေခဲ့ပါ။
* ပြင်ဆင်ခဲ့သည်: `Rate_Limiter::enforce()` သည် ယခုအခါ `surface|ip` ဖြင့် key သတ်မှတ်ကာ request တစ်ခုလျှင် တစ်ကြိမ်သာ အကျိုးသက်ရောက်စေသည်၊ ထို့ကြောင့် render တစ်ကြိမ်လျှင် နှစ်ကြိမ် အလုပ်လုပ်သည့် upstream hooks များ (အထူးသဖြင့် Ultimate Multisite တွင် `wu_setup_checkout`) သည် အကျိုးသက်ရောက်မှုရှိသော rate-limit threshold ကို တစ်ဝက်ကျသွားစေခြင်း မရှိတော့ပါ။
* ပြင်ဆင်ခဲ့သည်: Rate-limit surface gates များသည် `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter) ကို မစစ်ဆေးတော့ပါ။ ထို filter သည် "captcha ကို အခြား surface တစ်ခုက စီမံခန့်ခွဲပြီးပြီ" ဟု အချက်ပြခြင်းဖြစ်ပြီး flood protection နှင့် မသက်ဆိုင်ပါ။ WooCommerce integration သည် Woo nonce တစ်ခုရှိသည့်အခါ WordPress login captcha ကို ကျော်လွန်စေရန် ၎င်းကို hook လုပ်ခဲ့ရာမှ rate counting တွင် ယိုယွင်းမှုဖြစ်ကာ Woo POST များသည် limiter ကို ရှောင်ရှားနိုင်ခဲ့သည်။ rate-limit သီးသန့်ဖြစ်သည့် `wu_cap_rate_limit_whitelist_ip` filter သည် ယခုအခါ အကျိုးသက်ရောက်မှုရှိသော တစ်ခုတည်းသော bypass ဖြစ်ပါသည်။

Version: 1.3.2 - 2026-01-27 နေ့တွင် ထုတ်ဝေခဲ့သည်
* ပြင်ဆင်ခဲ့သည်: Elementor သို့မဟုတ် အခြား page builders များကို အသုံးပြုသည့် checkout forms များပေါ်တွင် Cap widget မပေါ်ခြင်း။
* ပြင်ဆင်ခဲ့သည်: cap-widget custom element ကို wp_kses() sanitization မှ ဖယ်ရှားခံရခြင်း။
* မြှင့်တင်ခဲ့သည်: HTML filtering ကို ကျော်လွန်စေရန် checkout captcha field အတွက် callable content ကို အသုံးပြုခြင်း။
* မြှင့်တင်ခဲ့သည်: အထူးအခြေအနေများအတွက် fallback ပါဝင်သော JavaScript ကို ရိုးရှင်းစေခြင်း။

Version: 1.3.1 - 2026-01-26 နေ့တွင် ထုတ်ဝေခဲ့သည်
* ပြင်ဆင်ခဲ့သည်: Dynamic Ultimate Multisite checkout forms များပေါ်တွင် Cap Captcha invisible mode သည် အလိုအလျောက် ဖြေရှင်းပေးခြင်း မရှိခြင်း။
* မြှင့်တင်ခဲ့သည်: Cap checkout script သည် dynamic အနေဖြင့် load လုပ်ထားသော widgets များကို ရှာဖွေရန် MutationObserver ကို အသုံးပြုလာခြင်း။
* မြှင့်တင်ခဲ့သည်: တင်သွင်းမှုမပြုမီ token ကို စောင့်ဆိုင်းရန် checkout button interception ကို ထည့်သွင်းခြင်း။

Version: 1.3.0 - 2026-01-27 နေ့တွင် ထုတ်ဝေခဲ့သည်
* အသစ်: Store API fetch interception ဖြင့် WooCommerce Blocks checkout integration။
* အသစ်: WooCommerce checkout အတွက် Invisible captcha ပံ့ပိုးမှု (hCaptcha invisible, reCAPTCHA v2 invisible, v3)။
* အသစ်: Ultimate Multisite မပါဘဲ အသုံးပြုနိုင်ရန် သီးခြား settings page။
* အသစ်: dependency conflict ကြိုတင်ကာကွယ်ရန် Jetpack Autoloader။
* ပြင်ဆင်ခဲ့သည်: Dynamic Ultimate Multisite checkout (AJAX-loaded content) ပေါ်တွင် hCaptcha မပေါ်ခြင်း။
* ပြင်ဆင်ခဲ့သည်: form validation error များဖြစ်ပေါ်သည့်အခါ Captcha refresh/reset မလုပ်နိုင်ခြင်း။
* ပြင်ဆင်ခဲ့သည်: WooCommerce checkout page ပေါ်တွင် hCaptcha မပေါ်ခြင်း။
* ပြင်ဆင်ခဲ့သည်: reCAPTCHA class မတွေ့ရခြင်း error (google/recaptcha PHP library ကို ထည့်သွင်းခဲ့သည်)။
* မြှင့်တင်ခဲ့သည်: WordPress hooks၊ MutationObserver နှင့် AJAX interception မှတစ်ဆင့် error ရှာဖွေခြင်း။
* မြှင့်တင်ခဲ့သည်: Settings ဖော်ပြချက်များတွင် API key များအတွက် dashboard URL များကို ထည့်သွင်းထားခြင်း။

Version: 1.2.2 - 2026-01-24 နေ့တွင် ထုတ်ဝေခဲ့သည်
* ပြင်ဆင်ခဲ့သည်: Ultimate Multisite Login Form Element ပေါ်တွင် Captcha မပေါ်ခြင်း (form filter name မကိုက်ညီခြင်း)။
* ပြင်ဆင်ခဲ့သည်: Cap widget HTML ကို wp_kses() sanitization မှ ဖယ်ရှားခံရခြင်း။
* ပြင်ဆင်ခဲ့သည်: JavaScript selectors များသည် element ID တွင် slash များပါသော forms များကို ရှာမတွေ့ခြင်း။
* ထည့်သွင်းခဲ့သည်: classaddons များအတွက် ခွင့်ပြုထားသော HTML tag များကို တိုးချဲ့ရန် `wu_kses_allowed_html` filter hook။
* ဖယ်ရှားခဲ့သည်: Dead code JavaScript files များကို provider-specific scripts များဖြင့် အစားထိုးခဲ့သည်။

Version: 1.2.1 - 2026-01-23 နေ့တွင် ထုတ်ဝေခဲ့သည်

* ပြင်ဆင်ခဲ့သည်: multisite environment များတွင် Cap Captcha token validation ပျက်ကွက်ခြင်း (ယခု network-wide transients ကို အသုံးပြုသည်)။
* ပြင်ဆင်ခဲ့သည်: login အခြေအနေ မရွေး ဧည့်သည်အားလုံးအတွက် Captcha သည် တသမတ်တည်း ပေါ်လာခြင်း။
* ပြင်ဆင်ခဲ့သည်: checkout failure များဖြစ်စေသည့် captcha rendering နှင့် validation အကြား မကိုက်ညီမှု။

Version: 1.2.0 - 2026-01-21 နေ့တွင် ထုတ်ဝေခဲ့သည်

* အသစ်: Cap Captcha - self-hosted proof-of-work captcha၊ activate လုပ်သည်နှင့် default အနေဖြင့် ဖွင့်ထားသည်။
* အသစ်: Zero-configuration protection - addon ကို activate လုပ်ရုံဖြင့် ချက်ချင်းကာကွယ်မှုရရှိသည်။
* အသစ်: အလွယ်တကူ တိုးချဲ့နိုင်ရန် Polymorphic captcha provider architecture။
* အသစ်: card testing attacks များမှ WooCommerce Store API checkout ကို ကာကွယ်မှု။
* အသစ်: challenges၊ verifications နှင့် block လုပ်ထားသော attacks များကို ပြသသည့် Statistics tracking dashboard။
* အသစ်: Cap Captcha ခက်ခဲမှုအတွက် security level presets (Fast, Medium, Max)။
* အသစ်: reCAPTCHA နှင့် hCaptcha provider များအတွက် Abstract base classes များ။
* မြှင့်တင်ခဲ့သည်: codebase ကို modular provider classes များအဖြစ် ပြန်လည်ဖွဲ့စည်းခြင်း။
* မြှင့်တင်ခဲ့သည်: dedicated manager class ဖြင့် စိတ်အလိုကျ ခွဲခြားမှု ပိုကောင်းစေခြင်း။
* ပြင်ဆင်ခဲ့သည်: $_SERVER variable sanitization အတွက် security တိုးမြှင့်မှုများ။
* ပြင်ဆင်ခဲ့သည်: WordPress naming conventions အတွက် PHPUnit test configuration။

Version: 1.0.1 - 2025-09-28 နေ့တွင် ထုတ်ဝေခဲ့သည်

* prefix ကို ultimate-multisite အဖြစ် ပြောင်းလဲခြင်း၊ text domain ကို update လုပ်ခြင်း၊ version တိုးမြှင့်ခြင်း။
