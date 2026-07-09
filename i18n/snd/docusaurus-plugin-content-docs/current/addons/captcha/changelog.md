---
title: ڪيپچا تبديلين جو لاگ
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha تبديلي لاگ {#captcha-changelog}

نسخو: 1.5.0 - 2026-05-22 تي جاري ڪيو ويو
* نئون: سخت-روڪ شرح محدود ڪندڙ — captcha سان محفوظ سطحن (wp-login / register / lost-password / comments، WooCommerce my-account / checkout / pay-for-order، Ultimate Multisite checkout / inline-login) تي هر GET ۽ POST ڳڻي ٿو ۽ HTTP 429، هڪ `Retry-After` header، ۽ بي ترتيب ڪيل tarpit ننڊ (1–5s، 15s تي سخت حد بندي) سان جواب ڏئي ٿو.
* نئون: tarpit دري کي ترتيب ڏيڻ لاءِ `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` سيٽنگون.
* نئون: ڀروسي لائق IP حدن کي ڇوٽ ڏيڻ لاءِ `wu_cap_rate_limit_whitelist_ip` filter.
* نئون: `wu_cap_rate_limit_will_block` action جيڪو سخت-روڪ جواب موڪلڻ کان فوراً اڳ هلندو آهي.
* نئون: جعل سازي کان بچاءُ واري client-IP سڃاڻپ. `Captcha_Core::get_client_ip()` (شرح-حد bucket ڪنجين، captcha siteverify `remoteip`، ۽ انگن اکرن جي IP hashes لاءِ حقيقت جو ذريعو) هاڻي سخت ڀروسي ماڊل لاڳو ڪري ٿو: REMOTE_ADDR بنياد آهي، `CF-Connecting-IP` کي صرف تڏهن مڃيو وڃي ٿو جڏهن فوري peer موجوده Cloudflare IP حد اندر هجي، ۽ `X-Forwarded-For` کي صرف تڏهن مڃيو وڃي ٿو جڏهن فوري peer منتظم-ترتيب ڏنل ڀروسي لائق-proxy فهرست ۾ هجي، ساڄي کان کاٻي هلڻ سان جيڪو visitor IP تي پهچڻ کان اڳ ڀروسي لائق/CF hops کي ڇڏي ٿو.
* نئون: `cap_trust_cloudflare_headers` سيٽنگ (ڊفالٽ OFF) — Cloudflare پٺيان هجڻ وقت `CF-Connecting-IP` ڀروسي ۾ داخل ٿيو. plugin هڪ گڏيل Cloudflare CIDR snapshot سان اچي ٿو ۽ جيڪڏهن تازگي ناڪام ٿئي ته گڏيل fallback سان wp-cron ذريعي هفتيوار ان کي تازو ڪري ٿو.
* نئون: `cap_trusted_proxies` سيٽنگ — CIDRs يا سادن IPs جو textarea (هر لڪير تي هڪ، `#` تبصرا اجازت ڏنل) جيڪو توهان جا پنهنجا اڳين قطار proxies / load-balancers فهرست ڪري ٿو. هن کان سواءِ، `X-Forwarded-For` کي نظرانداز ڪيو ويندو آهي، ڀلي شرح محدود ڪندڙ فعال هجي.
* نئون: ممڪن Cloudflare / proxy حالت جي پهرين-فعال ڪرڻ تي خودڪار سڃاڻپ، هڪ-ڪلڪ "سڃاتل سيٽنگون لاڳو ڪريو" admin اطلاع سان. plugin ڪڏهن به توهان جون محفوظ ڪيل قيمتون مٿان نه لکي ٿو؛ جيڪڏهن پوءِ جي traffic مان لڳي ته توهان جي config هاڻي حقيقت سان نٿي ملي (مثال طور Cloudflare CIDR حدون تبديل ڪيون ۽ توهان جو proxy CIDR هاڻي پراڻو آهي)، هڪ نه-هٽائي سگهڻ وارو mismatch اطلاع سفارش ڪيل اپڊيٽ ڏيکاري ٿو.
* درست ڪيو ويو: Invisible mode هاڻي خاموشي سان `cap_security_level` کي FAST ڏانهن گهٽائي نٿو — admin جي ترتيب ڏنل سطح جو احترام ڪيو وڃي ٿو. حسبِ ضرورت logic چاهيندڙ sites لاءِ نئون `wu_cap_server_security_level` filter موجود آهي.
* درست ڪيو ويو: انگن اکرن جو `rate_limits_triggered` counter هاڻي هر block تي وڌي ٿو، رڳو نادر post-success backstop path تي نه.
* درست ڪيو ويو: `Captcha_Core::get_client_ip()` هاڻي rate limiter، captcha providers (reCAPTCHA + hCaptcha `siteverify`)، ۽ انگن اکرن ۾ visitor IP attribution لاءِ حقيقت جو واحد ذريعو آهي — هڪ spoofing vector بند ڪندي جتي جعلي `CF-Connecting-IP` header کڻي سڌيون origin-server درخواستون حقيقي peer بدران spoofed IP سان bucket ڪيون وڃن ها.
* درست ڪيو ويو: WooCommerce classic checkout rate-limit gate هاڻي `woocommerce_before_checkout_form` بدران `template_redirect` (priority 1) تي هلندو آهي. form-level hook ڪڏهن به نٿو هلي جڏهن cart خالي هجي، تنهنڪري flood traffic جيڪو ڪڏهن product شامل نٿو ڪري، limiter کي مڪمل طور bypass ڪري رهيو هو.
* درست ڪيو ويو: WooCommerce pay-for-order rate-limit gate هاڻي `woocommerce_before_pay_action` بدران `template_redirect` تي هلندو آهي. پويون صرف `wp_verify_nonce('woocommerce-pay')` ڪامياب ٿيڻ کان پوءِ هلندو آهي، جنهن جو مطلب آهي unauth attackers (اصل threat model) ڪڏهن به limiter کي trigger نه ڪندا هئا.
* درست ڪيو ويو: WooCommerce Store API (blocks) checkout rate-limit gate هاڻي `woocommerce_store_api_checkout_update_order_from_request` بدران `rest_pre_dispatch` تي هلندو آهي. پويون صرف Store API طرفان cart ۽ billing fields validate ڪرڻ کان پوءِ هلندو آهي، تنهنڪري unauth bots validator کان 400 وٺندا هئا ۽ ڪڏهن به limiter کي trip نه ڪندا هئا.
* درست ڪيو ويو: Ultimate Multisite inline-login rate-limit gate هاڻي `wu_before_inline_login` بدران `wu_ajax_nopriv_wu_inline_login` priority 1 (۽ logged-in mirror) تي هلندو آهي. پويون صرف `check_ajax_referer('wu_checkout')` ڪامياب ٿيڻ کان پوءِ هلندو آهي، تنهنڪري صحيح wu_checkout nonce کان سواءِ unauth bots کي 403 ملندو هو ۽ ڪڏهن به limiter کي trip نه ڪندا هئا.
* درست ڪيو ويو: `Rate_Limiter::enforce()` هاڻي `surface|ip` سان keyed هڪ once-per-request guard لاڳو ڪري ٿو، تنهنڪري upstream hooks جيڪي هر render تي ٻه ڀيرا هلن ٿا (خاص طور Ultimate Multisite ۾ `wu_setup_checkout`) هاڻي اثرائتي rate-limit threshold کي اڌ نه ڪندا.
* درست ڪيو ويو: Rate-limit surface gates هاڻي `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter) سان صلاح نٿا ڪن. اهو filter "captcha اڳ ئي ٻي surface پاران handled آهي" جو اشارو ڏئي ٿو ۽ flood protection کان الڳ آهي — WooCommerce integration ان کي hook ڪري رهي هئي ته Woo nonce موجود هئڻ وقت WordPress login captcha کي skip ڪري، جيڪو rate counting ۾ وهندو هو ۽ Woo POSTs کي limiter کان بچڻ ڏيندو هو. rate-limit-specific `wu_cap_rate_limit_whitelist_ip` filter ئي واحد bypass آهي جيڪو هاڻي لاڳو ٿئي ٿو.

نسخو: 1.3.2 - 2026-01-27 تي جاري ڪيو ويو
* درست ڪيو ويو: Elementor يا ٻين page builders استعمال ڪندڙ checkout forms تي Cap widget render نه ٿيڻ
* درست ڪيو ويو: wp_kses() sanitization پاران cap-widget custom element هٽايو وڃڻ
* بهتر ڪيو ويو: HTML filtering کان بچڻ لاءِ checkout captcha field لاءِ callable content استعمال ڪريو
* بهتر ڪيو ويو: ڪناري وارن حالتن لاءِ fallback سان JavaScript کي سادو ڪيو ويو

نسخو: 1.3.1 - 2026-01-26 تي جاري ڪيو ويو
* درست ڪيو ويو: Cap Captcha invisible mode جو dynamic Ultimate Multisite checkout forms تي auto-solving نه ٿيڻ
* بهتر ڪيو ويو: Cap checkout script هاڻي dynamically loaded widgets کي سڃاڻڻ لاءِ MutationObserver استعمال ڪري ٿو
* بهتر ڪيو ويو: submission کان اڳ token جو انتظار ڪرڻ لاءِ checkout button interception شامل ڪيو ويو

Version: 1.3.0 - 2026-01-27 تي جاري ڪيو ويو
* نئون: WooCommerce Blocks چيڪ آئوٽ انٽيگريشن، Store API fetch interception سان
* نئون: WooCommerce چيڪ آئوٽ لاءِ اڻڏسندڙ captcha سپورٽ (hCaptcha invisible، reCAPTCHA v2 invisible، v3)
* نئون: Ultimate Multisite کان سواءِ استعمال لاءِ الڳ settings صفحو
* نئون: dependency تڪرارن کان بچاءُ لاءِ Jetpack Autoloader
* درست ڪيو ويو: hCaptcha dynamic Ultimate Multisite چيڪ آئوٽ تي render نه ٿي رهيو هو (AJAX-loaded content)
* درست ڪيو ويو: form validation errors ٿيڻ وقت Captcha refresh/reset نه ٿي رهيو هو
* درست ڪيو ويو: hCaptcha WooCommerce چيڪ آئوٽ صفحي تي ظاهر نه ٿي رهيو هو
* درست ڪيو ويو: reCAPTCHA class not found error (google/recaptcha PHP library شامل ڪئي وئي)
* بهتر ڪيو ويو: WordPress hooks، MutationObserver، ۽ AJAX interception ذريعي error detection
* بهتر ڪيو ويو: Settings descriptions ۾ هاڻي API keys لاءِ dashboard URLs شامل آهن

Version: 1.2.2 - 2026-01-24 تي جاري ڪيو ويو
* درست ڪيو ويو: Captcha Ultimate Multisite Login Form Element تي ظاهر نه ٿي رهيو هو (form filter name mismatch)
* درست ڪيو ويو: wp_kses() sanitization ذريعي Cap widget HTML هٽايو پئي ويو
* درست ڪيو ويو: JavaScript selectors عنصر IDs ۾ slashes رکندڙ forms نه ڳولي رهيا هئا
* شامل ڪيو ويو: classaddons لاءِ allowed HTML tags وڌائڻ واسطي Filter hook `wu_kses_allowed_html`
* هٽايو ويو: provider-specific scripts سان مٽايل Dead code JavaScript files

Version: 1.2.1 - 2026-01-23 تي جاري ڪيو ويو

* درست ڪيو ويو: multisite environments ۾ Cap Captcha token validation ناڪام ٿي رهي هئي (هاڻي network-wide transients استعمال ڪري ٿو)
* درست ڪيو ويو: Captcha هاڻي login status کان قطع نظر سڀني users لاءِ هڪجهڙي طرح render ٿئي ٿو
* درست ڪيو ويو: captcha rendering ۽ validation وچ ۾ mismatch، جنهن سبب checkout failures ٿيندا هئا

Version: 1.2.0 - 2026-01-21 تي جاري ڪيو ويو

* نئون: Cap Captcha - self-hosted proof-of-work captcha، activation تي default طور enabled
* نئون: Zero-configuration protection - addon activate ڪريو ۽ توهان فوراً protected آهيو
* نئون: آسان extensibility لاءِ Polymorphic captcha provider architecture
* نئون: card testing attacks خلاف WooCommerce Store API چيڪ آئوٽ تحفظ
* نئون: challenges، verifications، ۽ blocked attacks ڏيکاريندڙ statistics tracking dashboard
* نئون: Cap Captcha difficulty لاءِ security level presets (Fast، Medium، Max)
* نئون: reCAPTCHA ۽ hCaptcha providers لاءِ abstract base classes
* بهتر ڪيو ويو: codebase کي modular provider classes ۾ refactor ڪيو ويو
* بهتر ڪيو ويو: dedicated manager class سان concerns جي بهتر separation
* Fixed: Security improvements for $_SERVER variable sanitization
* درست ڪيو ويو: WordPress naming conventions لاءِ PHPUnit test configuration

Version: 1.0.1 - 2025-09-28 تي جاري ڪيو ويو

* prefix کي ultimate-multisite ۾ rename ڪريو؛ text domain update ڪريو؛ version bump.
