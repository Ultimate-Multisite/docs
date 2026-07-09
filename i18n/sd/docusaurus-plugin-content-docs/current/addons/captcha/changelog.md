---
title: ڪيپچا تبديلي لاگ
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha تبديلين جو رڪارڊ {#captcha-changelog}

Version: 1.5.0 - 2026-05-22 تي جاري ٿيو
* نئون: سخت-روڪ شرح محدود ڪندڙ — captcha-محفوظ سطحن تي هر GET ۽ POST ڳڻي ٿو (wp-login / register / lost-password / comments، WooCommerce my-account / checkout / pay-for-order، Ultimate Multisite checkout / inline-login) ۽ HTTP 429، هڪ `Retry-After` header، ۽ بي ترتيب tarpit sleep (1–5s، سخت حد 15s) سان جواب ڏئي ٿو.
* نئون: tarpit ونڊو ترتيب ڏيڻ لاءِ `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` سيٽنگون.
* نئون: ڀروسي جوڳن IP حدن کي ڇوٽ ڏيڻ لاءِ `wu_cap_rate_limit_whitelist_ip` filter.
* نئون: `wu_cap_rate_limit_will_block` action جيڪو سخت-روڪ جواب موڪلجڻ کان فوراً اڳ هلندو آهي.
* نئون: جعلسازي-مزاحم client-IP سڃاڻپ. `Captcha_Core::get_client_ip()` (rate-limit bucket keys، captcha siteverify `remoteip`، ۽ انگن اکرن جي IP hashes لاءِ سچ جو ذريعو) هاڻي سخت اعتماد وارو ماڊل لاڳو ڪري ٿو: REMOTE_ADDR بنياد آهي، `CF-Connecting-IP` رڳو تڏهن مڃيو وڃي ٿو جڏهن فوري peer موجوده Cloudflare IP حد اندر هجي، ۽ `X-Forwarded-For` رڳو تڏهن مڃيو وڃي ٿو جڏهن فوري peer admin-ترتيب ڏنل trusted-proxy فهرست ۾ هجي، ساڄي کان کاٻي طرف هلڻ سان جيڪو trusted/CF hops کي ڇڏي visitor IP تي بيهي ٿو.
* نئون: `cap_trust_cloudflare_headers` سيٽنگ (default OFF) — Cloudflare پويان هئڻ وقت `CF-Connecting-IP` اعتماد ۾ شامل ٿيو. plugin گڏيل Cloudflare CIDR snapshot سان اچي ٿو ۽ ان کي هفتيوار wp-cron ذريعي تازو ڪري ٿو، refresh ناڪام ٿيڻ تي گڏيل fallback سان.
* نئون: `cap_trusted_proxies` سيٽنگ — CIDRs يا سادن IPs جو textarea (هر ليڪ تي هڪ، `#` comments اجازت يافته) جيڪو توهان جي پنهنجي front-line proxies / load-balancers کي لسٽ ڪري ٿو. هن کان سواءِ، `X-Forwarded-For` نظرانداز ڪيو وڃي ٿو، جيتوڻيڪ rate limiter فعال هجي.
* نئون: ممڪن Cloudflare / proxy حالت جي پهرين-فعال auto-detection، هڪ-ڪلڪ "ڳوليل سيٽنگون لاڳو ڪريو" admin notice سان. plugin ڪڏهن به توهان جا محفوظ ڪيل قدر مٿان نٿو لکي؛ جيڪڏهن بعد واري traffic ظاهر ڪري ته توهان جي config هاڻي حقيقت سان نٿي ملي (مثلاً Cloudflare CIDR حدون تبديل ڪري ڇڏيون ۽ توهان جو proxy CIDR هاڻي پراڻو آهي)، هڪ نه-هٽائي سگهندڙ mismatch notice سفارش ڪيل update ڏيکاري ٿو.
* درست ڪيو: Invisible mode هاڻي خاموشي سان `cap_security_level` کي FAST ڏانهن گهٽ نٿو ڪري — admin جي ترتيب ڏنل سطح جو احترام ڪيو وڃي ٿو. انهن sites لاءِ نئون `wu_cap_server_security_level` filter موجود آهي جيڪي مخصوص logic چاهين ٿيون.
* درست ڪيو: Statistics `rate_limits_triggered` counter هاڻي هر block تي وڌي ٿو، نه رڳو ناياب post-success backstop path تي.
* درست ڪيو: `Captcha_Core::get_client_ip()` هاڻي rate limiter، captcha providers (reCAPTCHA + hCaptcha `siteverify`)، ۽ statistics ۾ visitor IP attribution لاءِ واحد سچ جو ذريعو آهي — اهو spoofing vector بند ڪري ٿو جتي forged `CF-Connecting-IP` header کڻندڙ سڌيون origin-server درخواستون real peer بدران spoofed IP سان bucket ڪيون وڃن ها.
* درست ڪيو: WooCommerce classic checkout rate-limit gate هاڻي `woocommerce_before_checkout_form` بدران `template_redirect` (priority 1) تي هلندو آهي. form-level hook ڪڏهن به نٿو هلي جڏهن cart خالي هجي، تنهنڪري flood traffic جيڪو ڪڏهن به product شامل نٿو ڪري، limiter کي مڪمل طور bypass ڪري رهيو هو.
* درست ڪيو: WooCommerce pay-for-order rate-limit gate هاڻي `woocommerce_before_pay_action` بدران `template_redirect` تي هلندو آهي. پويون رڳو `wp_verify_nonce('woocommerce-pay')` ڪامياب ٿيڻ کان پوءِ هلندو آهي، جنهن جو مطلب آهي unauth attackers (حقيقي threat model) ڪڏهن به limiter کي trigger نٿا ڪن.
* درست ڪيو: WooCommerce Store API (blocks) checkout rate-limit gate هاڻي `woocommerce_store_api_checkout_update_order_from_request` بدران `rest_pre_dispatch` تي هلندو آهي. پويون رڳو Store API cart ۽ billing fields validate ڪرڻ کان پوءِ هلندو آهي، تنهنڪري unauth bots validator کان 400 وٺندا هئا ۽ limiter کي ڪڏهن به trip نه ڪندا هئا.
* درست ڪيو: Ultimate Multisite inline-login rate-limit gate هاڻي `wu_before_inline_login` بدران `wu_ajax_nopriv_wu_inline_login` priority 1 (۽ logged-in mirror) تي هلندو آهي. پويون رڳو `check_ajax_referer('wu_checkout')` ڪامياب ٿيڻ کان پوءِ هلندو آهي، تنهنڪري valid wu_checkout nonce کان سواءِ unauth bots کي 403 ملندو هو ۽ اهي limiter کي ڪڏهن به trip نه ڪندا هئا.
* درست ڪيو: `Rate_Limiter::enforce()` هاڻي `surface|ip` ذريعي keyed هڪ once-per-request guard لاڳو ڪري ٿو، تنهنڪري upstream hooks جيڪي هر render تي ٻه ڀيرا هلن ٿا (خاص طور `wu_setup_checkout` Ultimate Multisite ۾) هاڻي اثرائتي rate-limit threshold کي اڌ نٿا ڪن.
* درست ڪيو: Rate-limit surface gates هاڻي `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter) سان صلاح نٿا ڪن. اهو filter اشارو ڏئي ٿو "captcha اڳ ئي ٻي surface سان handled آهي" ۽ flood protection کان الڳ آهي — WooCommerce integration ان کي hook ڪري رهيو هو ته Woo nonce موجود هئڻ وقت WordPress login captcha skip ٿئي، جيڪو rate counting ۾ وهي آيو ۽ Woo POSTs کي limiter کان بچڻ ڏنو. rate-limit-specific `wu_cap_rate_limit_whitelist_ip` filter ئي واحد bypass آهي جيڪو هاڻي لاڳو ٿئي ٿو.

Version: 1.3.2 - 2026-01-27 تي جاري ٿيو
* درست ڪيو: Elementor يا ٻين page builders استعمال ڪندڙ checkout forms تي Cap widget render نه ٿي رهيو هو
* درست ڪيو: cap-widget custom element، wp_kses() sanitization ذريعي هٽايو پيو وڃي
* بهتر ڪيو: HTML filtering bypass ڪرڻ لاءِ checkout captcha field لاءِ callable content استعمال ڪريو
* بهتر ڪيو: edge cases لاءِ fallback سان JavaScript سادي ڪئي

Version: 1.3.1 - 2026-01-26 تي جاري ٿيو
* درست ڪيو: Cap Captcha invisible mode، dynamic Ultimate Multisite checkout forms تي auto-solving نه ٿي رهيو هو
* بهتر ڪيو: Cap checkout script هاڻي dynamically loaded widgets سڃاڻڻ لاءِ MutationObserver استعمال ڪري ٿو
* بهتر ڪيو: submission کان اڳ token جو انتظار ڪرڻ لاءِ checkout button interception شامل ڪئي

Version: 1.3.0 - 2026-01-27 تي جاري ڪيو ويو
* نئون: WooCommerce Blocks checkout انضمام Store API fetch روڪٿام سان
* نئون: WooCommerce checkout لاءِ Invisible captcha سهائتا (hCaptcha invisible، reCAPTCHA v2 invisible، v3)
* نئون: Ultimate Multisite کان سواءِ استعمال لاءِ الڳ settings صفحو
* نئون: انحصار جي ٽڪراءَ کان بچاءَ لاءِ Jetpack Autoloader
* درست ڪيو ويو: dynamic Ultimate Multisite checkout تي hCaptcha render نه ٿي رهيو هو (AJAX-loaded content)
* درست ڪيو ويو: form validation غلطيون ٿيڻ وقت Captcha refresh/reset نه ٿي رهيو هو
* درست ڪيو ويو: WooCommerce checkout صفحي تي hCaptcha ظاهر نه ٿي رهيو هو
* درست ڪيو ويو: reCAPTCHA class not found غلطي (google/recaptcha PHP library شامل ڪئي وئي)
* بهتر ڪيو ويو: WordPress hooks، MutationObserver، ۽ AJAX interception ذريعي غلطي جي سڃاڻپ
* بهتر ڪيو ويو: Settings وضاحتن ۾ هاڻي API keys لاءِ dashboard URLs شامل آهن

Version: 1.2.2 - 2026-01-24 تي جاري ڪيو ويو
* درست ڪيو ويو: Ultimate Multisite Login Form Element تي Captcha ظاهر نه ٿي رهيو هو (form filter name mismatch)
* درست ڪيو ويو: Cap widget HTML کي wp_kses() sanitization ذريعي هٽايو پئي ويو
* درست ڪيو ويو: JavaScript selectors element IDs ۾ slashes رکندڙ forms نه ڳولي رهيا هئا
* شامل ڪيو ويو: classaddons لاءِ allowed HTML tags وڌائڻ لاءِ Filter hook `wu_kses_allowed_html`
* هٽايو ويو: Dead code JavaScript files کي provider-specific scripts سان تبديل ڪيو ويو

Version: 1.2.1 - 2026-01-23 تي جاري ڪيو ويو

* درست ڪيو ويو: multisite environments ۾ Cap Captcha token validation ناڪام ٿي رهي هئي (هاڻي network-wide transients استعمال ڪري ٿو)
* درست ڪيو ويو: Captcha هاڻي login status کان قطع نظر سڀني users لاءِ هڪجهڙو render ٿئي ٿو
* درست ڪيو ويو: captcha rendering ۽ validation جي وچ ۾ عدم مطابقت جنهن سبب checkout ناڪام ٿي رهيا هئا

Version: 1.2.0 - 2026-01-21 تي جاري ڪيو ويو

* نئون: Cap Captcha - self-hosted proof-of-work captcha، activation تي default طور فعال
* نئون: Zero-configuration protection - addon فعال ڪريو ۽ توهان فوراً محفوظ آهيو
* نئون: آسان extensibility لاءِ Polymorphic captcha provider architecture
* نئون: card testing attacks خلاف WooCommerce Store API checkout protection
* نئون: challenges، verifications، ۽ blocked attacks ڏيکاريندڙ Statistics tracking dashboard
* نئون: Cap Captcha difficulty لاءِ Security level presets (Fast، Medium، Max)
* نئون: reCAPTCHA ۽ hCaptcha providers لاءِ Abstract base classes
* بهتر ڪيو ويو: codebase کي modular provider classes ۾ refactor ڪيو ويو
* بهتر ڪيو ويو: dedicated manager class سان خدشن جي بهتر الڳائي
* Fixed: Security improvements for $_SERVER variable sanitization
* درست ڪيو ويو: WordPress naming conventions لاءِ PHPUnit test configuration

Version: 1.0.1 - 2025-09-28 تي جاري ڪيو ويو

* prefix کي ultimate-multisite ۾ تبديل ڪريو؛ text domain اپڊيٽ ڪريو؛ version bump.
