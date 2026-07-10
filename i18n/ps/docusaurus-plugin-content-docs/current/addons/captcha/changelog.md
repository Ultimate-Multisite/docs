---
title: Captcha بدلون‌ليک
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha بدلون‌لیک {#captcha-changelog}

نسخه: 1.5.0 - په 2026-05-22 خپره شوه
* نوی: د سخت-درېدنې کچې محدودوونکی — په captcha-ساتل شوو سطحو کې هر GET او POST شمېري (wp-login / register / lost-password / comments، WooCommerce my-account / checkout / pay-for-order، Ultimate Multisite checkout / inline-login) او د HTTP 429، د `Retry-After` header، او تصادفي tarpit ځنډ (۱–۵ ثانیې، په ۱۵ ثانیو سخت محدود) سره ځواب ورکوي.
* نوی: د tarpit کړکۍ د تنظیم لپاره `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` امستنې.
* نوی: د باور وړ IP لړیو د معاف کولو لپاره `wu_cap_rate_limit_whitelist_ip` filter.
* نوی: `wu_cap_rate_limit_will_block` action چې د سخت-درېدنې ځواب له لېږلو سمدستي مخکې چلېږي.
* نوی: د جعل پر وړاندې مقاوم د پېرودونکي-IP پېژندنه. `Captcha_Core::get_client_ip()` (د کچې-محدود bucket کلیدونو، captcha siteverify `remoteip`، او احصایوي IP hashes لپاره د حقیقت سرچینه) اوس سخت باور ماډل پلي کوي: REMOTE_ADDR بنسټ دی، `CF-Connecting-IP` یوازې هغه مهال منل کېږي چې نږدې peer د اوسني Cloudflare IP لړ دننه وي، او `X-Forwarded-For` یوازې هغه مهال منل کېږي چې نږدې peer د اډمین-تنظیم شوي باوري-proxy په لېست کې وي، له ښي څخه چپ ته په تګ سره چې باوري/CF hops پرېږدي مخکې له دې چې د لیدونکي IP وټاکي.
* نوی: `cap_trust_cloudflare_headers` امستنه (په اصل کې بنده) — کله چې د Cloudflare تر شا یاست، د `CF-Connecting-IP` باور ته داخل شئ. plugin یو بنډل شوی Cloudflare CIDR انځور له ځانه سره لري او هره اوونۍ یې د wp-cron له لارې تازه کوي، له بنډل شوي بدیل سره که تازه کول ناکام شي.
* نوی: `cap_trusted_proxies` امستنه — د CIDRs یا ساده IPs متن‌ساحه (په هره کرښه کې یو، `#` تبصرې اجازه لري) چې ستاسو خپل مخکښ proxies / load-balancers لېست کوي. له دې پرته، `X-Forwarded-For` له پامه غورځول کېږي حتی که د کچې محدودوونکی فعال وي.
* نوی: د لومړي-فعالولو پر مهال د احتمالي Cloudflare / proxy وضعیت اتومات پېژندنه د یو-کلیک "پېژندل شوې امستنې پلي کړئ" اډمین خبرتیا سره. plugin هېڅکله ستاسو خوندي شوي ارزښتونه نه بدلوي؛ که وروسته ترافیک وښيي چې ستاسو جوړښت نور له واقعیت سره سمون نه خوري (لکه Cloudflare د CIDR لړۍ بدلې کړې او ستاسو proxy CIDR اوس زوړ شوی)، د نه-لرې کېدونکې ناسموالي خبرتیا سپارښتل شوی تازه‌والی ښکاره کوي.
* سم شو: نه‌لیدونکی حالت نور په پټه `cap_security_level` FAST ته نه راټیټوي — د اډمین تنظیم شوې کچه درناوی کېږي. نوی `wu_cap_server_security_level` filter د هغو siteونو لپاره شته چې ځانګړې منطق غواړي.
* سم شو: د احصایو `rate_limits_triggered` شمېرونکی اوس په هر بندیز زیاتېږي، نه یوازې د نادر post-success شاته-تم مسیر کې.
* سم شو: `Captcha_Core::get_client_ip()` اوس د کچې محدودوونکي، captcha برابروونکو (reCAPTCHA + hCaptcha `siteverify`)، او احصایو په اوږدو کې د لیدونکي IP نسبت لپاره یوازینۍ د حقیقت سرچینه ده — هغه جعل‌کولو لار بندوي چې پکې د اصلي origin-server مستقیمې غوښتنې د جوړ شوي `CF-Connecting-IP` header سره به د اصلي peer پر ځای د جعل شوي IP له مخې bucket کېدې.
* سم شو: د WooCommerce کلاسیک checkout د کچې-محدود gate اوس پر `template_redirect` (لومړیتوب 1) چلېږي، د `woocommerce_before_checkout_form` پر ځای. د فورمې-کچې hook کله چې cart تش وي هېڅکله نه چلېږي، نو flood ترافیک چې هېڅکله product نه زیاتوي په بشپړ ډول له محدودوونکي تېرېده.
* سم شو: د WooCommerce pay-for-order د کچې-محدود gate اوس پر `template_redirect` چلېږي، د `woocommerce_before_pay_action` پر ځای. وروستی یوازې وروسته له دې چلېږي چې `wp_verify_nonce('woocommerce-pay')` بریالی شي، یعنې unauth بریدګر (اصلي ګواښ ماډل) هېڅکله محدودوونکی نه فعالاوه.
* سم شو: د WooCommerce Store API (blocks) checkout د کچې-محدود gate اوس پر `rest_pre_dispatch` چلېږي، د `woocommerce_store_api_checkout_update_order_from_request` پر ځای. وروستی یوازې وروسته له دې چلېږي چې Store API د cart او billing fields تایید کړي، نو unauth bots له تاییدوونکي څخه 400 ترلاسه کاوه او محدودوونکی یې نه فعاله کاوه.
* سم شو: د Ultimate Multisite inline-login د کچې-محدود gate اوس پر `wu_ajax_nopriv_wu_inline_login` لومړیتوب 1 (او logged-in mirror) چلېږي، د `wu_before_inline_login` پر ځای. وروستی یوازې وروسته له دې چلېږي چې `check_ajax_referer('wu_checkout')` بریالی شي، نو unauth bots پرته له معتبر wu_checkout nonce څخه 403 ترلاسه کاوه او محدودوونکی یې نه فعاله کاوه.
* سم شو: `Rate_Limiter::enforce()` اوس د هرې غوښتنې یو-ځل guard پلي کوي چې د `surface|ip` له مخې کلید شوی، نو upstream hooks چې په هر render کې دوه ځله چلېږي (په ځانګړي ډول په Ultimate Multisite کې `wu_setup_checkout`) نور د اغېزمن کچې-محدود حد نیمایي نه کوي.
* سم شو: د کچې-محدود سطحې gates نور `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter) ته نه ګوري. دا filter ښيي چې "captcha لا دمخه د بلې سطحې له خوا اداره شوی" او د flood ساتنې سره بېل دی — د WooCommerce ادغام دا hook کاراوه څو د WordPress login captcha پرېږدي کله چې Woo nonce موجود وي، چې د کچې شمېرنې ته ورسېد او Woo POSTs ته یې اجازه ورکړه چې له محدودوونکي تېر شي. د کچې-محدود-ځانګړی `wu_cap_rate_limit_whitelist_ip` filter یوازینی bypass دی چې اوس پلي کېږي.

نسخه: 1.3.2 - په 2026-01-27 خپره شوه
* سم شو: Cap widget په هغو checkout فورمو کې نه ښکاره کېده چې Elementor یا نور page builders کاروي
* سم شو: د cap-widget custom element د wp_kses() sanitization له خوا لرې کېده
* ښه شو: د checkout captcha field لپاره callable منځپانګه وکاروئ څو د HTML filtering څخه تېر شي
* ښه شو: JavaScript د څنډې حالتونو لپاره له fallback سره ساده شو

نسخه: 1.3.1 - په 2026-01-26 خپره شوه
* سم شو: د Cap Captcha نه‌لیدونکی حالت په dynamic Ultimate Multisite checkout فورمو کې په اتومات ډول نه حل کېده
* ښه شو: د Cap checkout script اوس MutationObserver کاروي څو په dynamic ډول بار شوي widgets وپېژني
* ښه شو: د checkout button interception زیات شو څو د لېږلو مخکې token ته انتظار وکړي

Version: 1.3.0 - په 2026-01-27 خپور شو
* نوی: د Store API fetch interception سره د WooCommerce Blocks checkout ادغام
* نوی: د WooCommerce checkout لپاره د نه‌لیدونکي captcha ملاتړ (hCaptcha invisible، reCAPTCHA v2 invisible، v3)
* نوی: له Ultimate Multisite پرته د کارولو لپاره جلا settings پاڼه
* نوی: د dependency شخړو د مخنیوي لپاره Jetpack Autoloader
* سم شو: hCaptcha په dynamic Ultimate Multisite checkout کې نه render کېده (AJAX-loaded content)
* سم شو: Captcha د form validation تېروتنو پر مهال نه تازه/بیا تنظیم کېده
* سم شو: hCaptcha د WooCommerce checkout پاڼه کې نه ښکارېده
* سم شو: د reCAPTCHA class نه موندلو تېروتنه (google/recaptcha PHP library ورزیاته شوه)
* ښه شو: د WordPress hooks، MutationObserver، او AJAX interception له لارې د تېروتنو موندنه
* ښه شو: د settings تشریحات اوس د API keys لپاره dashboard URLs لري

Version: 1.2.2 - په 2026-01-24 خپور شو
* سم شو: Captcha په Ultimate Multisite Login Form Element کې نه ښکارېده (د form filter name mismatch)
* سم شو: د Cap widget HTML د wp_kses() sanitization له خوا لرې کېده
* سم شو: JavaScript selectors هغه forms نه موندل چې په element IDs کې slashes لري
* زیات شو: د classaddons لپاره filter hook `wu_kses_allowed_html` چې allowed HTML tags پراخ کړي
* لرې شو: Dead code JavaScript files د provider-specific scripts له خوا بدل شول

Version: 1.2.1 - په 2026-01-23 خپور شو

* سم شو: د Cap Captcha token validation په multisite چاپېریالونو کې ناکامېده (اوس network-wide transients کاروي)
* سم شو: Captcha اوس د login status له پام پرته د ټولو users لپاره په ثابت ډول render کېږي
* سم شو: د captcha rendering او validation ترمنځ ناسمون چې checkout failures یې رامنځته کول

Version: 1.2.0 - په 2026-01-21 خپور شو

* نوی: Cap Captcha - self-hosted proof-of-work captcha، د activation پر مهال په default ډول فعال
* نوی: Zero-configuration protection - addon فعال کړئ او سمدستي خوندي یاست
* نوی: د اسانه extensibility لپاره polymorphic captcha provider architecture
* نوی: د card testing attacks پر وړاندې د WooCommerce Store API checkout ساتنه
* نوی: Statistics tracking dashboard چې challenges، verifications، او blocked attacks ښيي
* نوی: Security level presets (Fast، Medium، Max) د Cap Captcha difficulty لپاره
* نوی: د reCAPTCHA او hCaptcha providers لپاره abstract base classes
* ښه شو: codebase په modular provider classes کې refactor شو
* ښه شو: د dedicated manager class سره د concerns ښه جلاوالی
* Fixed: Security improvements for $_SERVER variable sanitization
* سم شو: د WordPress naming conventions لپاره PHPUnit test configuration

Version: 1.0.1 - په 2025-09-28 خپور شو

* prefix ultimate-multisite ته بدل کړئ؛ text domain تازه کړئ؛ version bump.
