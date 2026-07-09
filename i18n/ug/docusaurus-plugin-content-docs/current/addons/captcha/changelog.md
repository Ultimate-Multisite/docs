---
title: Captcha ئۆزگىرىش خاتىرىسى
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha ئۆزگىرىش خاتىرىسى {#captcha-changelog}

نەشرى: 1.5.0 - 2026-05-22 ئېلان قىلىندى
* يېڭى: قاتتىق توختىتىدىغان سۈرئەت چەكلىگۈچ — captcha بىلەن قوغدالغان يۈزلەردىكى (wp-login / register / lost-password / comments، WooCommerce my-account / checkout / pay-for-order، Ultimate Multisite checkout / inline-login) ھەر بىر GET ۋە POST نى سانايدۇ، ھەمدە HTTP 429، بىر `Retry-After` header، ۋە ئىختىيارىلاشتۇرۇلغان tarpit ئۇيقۇسى (1–5s، قاتتىق ھالدا ئەڭ كۆپ 15s) بىلەن جاۋاب قايتۇرىدۇ.
* يېڭى: tarpit كۆزنىكىنى تەڭشەش ئۈچۈن `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` تەڭشەكلىرى.
* يېڭى: ئىشەنچلىك IP دائىرىلىرىنى كەچۈرۈم قىلىش ئۈچۈن `wu_cap_rate_limit_whitelist_ip` filter.
* يېڭى: قاتتىق توختىتىش جاۋابى ئەۋەتىلىشتىن دەل بۇرۇن ئىجرا بولىدىغان `wu_cap_rate_limit_will_block` action.
* يېڭى: ساختىلىققا چىداملىق خېرىدار-IP بايقاش. `Captcha_Core::get_client_ip()` (سۈرئەت چەك bucket ئاچقۇچلىرى، captcha siteverify `remoteip`، ۋە ئىستاتىستىكا IP hashلىرى ئۈچۈن ھەقىقەت مەنبەسى) ئەمدى قاتتىق ئىشەنچ مودېلىنى مەجبۇرىي قىلىدۇ: REMOTE_ADDR ئاساسىي تۆۋەن چەك، `CF-Connecting-IP` پەقەت بىۋاسىتە ھەمراھ ھازىرقى Cloudflare IP دائىرىسىنىڭ ئىچىدە بولغاندا ھۆرمەت قىلىنىدۇ، ۋە `X-Forwarded-For` پەقەت بىۋاسىتە ھەمراھ باشقۇرغۇچى تەڭشىگەن ئىشەنچلىك proxy تىزىملىكىدە بولغاندا ھۆرمەت قىلىنىدۇ؛ زىيارەتچى IP غا بېكىتىشتىن بۇرۇن ئىشەنچلىك/CF ھالقىشلىرىنى ئاتلاپ ئۆتىدىغان ئوڭدىن سولغا مېڭىش ئىشلىتىلىدۇ.
* يېڭى: `cap_trust_cloudflare_headers` تەڭشىكى (كۆڭۈلدىكى OFF) — Cloudflare ئارقىسىدا بولغاندا `CF-Connecting-IP` ئىشەنچىگە قوشۇلۇڭ. بۇ plugin باغلانما Cloudflare CIDR snapshot بىلەن كېلىدۇ ۋە ئۇنى wp-cron ئارقىلىق ھەپتىدە بىر قېتىم يېڭىلايدۇ؛ يېڭىلاش مەغلۇپ بولسا باغلانما fallback ئىشلىتىلىدۇ.
* يېڭى: `cap_trusted_proxies` تەڭشىكى — ئۆز ئالدىڭىزدىكى proxy / load-balancer لىرىڭىزنى كۆرسىتىدىغان CIDR ياكى يالىڭاچ IP لەرنىڭ textarea سى (ھەر قۇردا بىر دانە، `#` ئىزاھاتلىرىغا رۇخسەت). بۇ بولمىسا، سۈرئەت چەكلىگۈچ قوزغىتىلغان بولسىمۇ `X-Forwarded-For` نەزەردىن ساقىت قىلىنىدۇ.
* يېڭى: ئېھتىمال Cloudflare / proxy ھالىتىنى تۇنجى قېتىم قوزغاتقاندا ئاپتوماتىك بايقاش ۋە بىر چېكىشلىك "بايقالغان تەڭشەكلەرنى قوللان" باشقۇرۇش ئۇقتۇرۇشى. بۇ plugin سىز ساقلىغان قىممەتلەرنى ھەرگىز قاپلىۋەتمەيدۇ؛ كېيىنكى traffic سەپلىمىڭىز ئەمدى ئەمەلىيەت بىلەن ماس كەلمەيدىغانلىقىنى كۆرسەتسە (مەسىلەن Cloudflare CIDR دائىرىلىرى ئۆزگەرگەن ۋە proxy CIDR ىڭىز ئەمدى كونىراپ قالغان بولسا)، تاقىغىلى بولمايدىغان ماس كەلمەسلىك ئۇقتۇرۇشى تەۋسىيە قىلىنغان يېڭىلاشنى كۆرسىتىدۇ.
* تۈزىتىلدى: كۆرۈنمەس ھالەت ئەمدى `cap_security_level` نى جىمجىت FAST غا تۆۋەنلەتمەيدۇ — باشقۇرغۇچى تەڭشىگەن سەۋىيە ھۆرمەت قىلىنىدۇ. ئۆزىگە خاس لوگىكا خالايدىغان site لار ئۈچۈن يېڭى `wu_cap_server_security_level` filter تەمىنلەندى.
* تۈزىتىلدى: ئىستاتىستىكىدىكى `rate_limits_triggered` سانىغۇچى ئەمدى پەقەت ناھايىتى ئاز ئۇچرايدىغان مۇۋەپپەقىيەتتىن كېيىنكى backstop يولىدىلا ئەمەس، ھەر بىر توسۇشتا ئاشىدۇ.
* تۈزىتىلدى: `Captcha_Core::get_client_ip()` ئەمدى سۈرئەت چەكلىگۈچ، captcha تەمىنلىگۈچىلەر (reCAPTCHA + hCaptcha `siteverify`) ۋە ئىستاتىستىكا بويىچە زىيارەتچى IP تەقسىملەشنىڭ بىردىنبىر ھەقىقەت مەنبەسى — بۇ ساختىلىق ياساش يولىنى ياپتى: ساختا `CF-Connecting-IP` header ئېلىپ كەلگەن بىۋاسىتە origin-server تەلەپلىرى ھەقىقىي ھەمراھنىڭ ئورنىغا ساختا IP بويىچە bucket قىلىنىشى مۇمكىن ئىدى.
* تۈزىتىلدى: WooCommerce كلاسسىك checkout سۈرئەت چەك gate ئەمدى `woocommerce_before_checkout_form` نىڭ ئورنىغا `template_redirect` (ئالدىنلىق 1) دا ئىجرا بولىدۇ. ھارۋا بوش بولغاندا form دەرىجىلىك hook ھەرگىز ئىجرا بولمايدۇ، شۇڭا ھېچقاچان product قوشمايدىغان flood traffic چەكلىگۈچنى پۈتۈنلەي ئايلىنىپ ئۆتەتتى.
* تۈزىتىلدى: WooCommerce pay-for-order سۈرئەت چەك gate ئەمدى `woocommerce_before_pay_action` نىڭ ئورنىغا `template_redirect` دا ئىجرا بولىدۇ. كېيىنكىسى پەقەت `wp_verify_nonce('woocommerce-pay')` مۇۋەپپەقىيەتلىك بولغاندىن كېيىنلا ئىجرا بولىدۇ، بۇ unauth ھۇجۇمچىلار (ھەقىقىي تەھدىت مودېلى) نىڭ چەكلىگۈچنى ھەرگىز قوزغاتمايدىغانلىقىنى بىلدۈرىدۇ.
* تۈزىتىلدى: WooCommerce Store API (blocks) checkout سۈرئەت چەك gate ئەمدى `woocommerce_store_api_checkout_update_order_from_request` نىڭ ئورنىغا `rest_pre_dispatch` دا ئىجرا بولىدۇ. كېيىنكىسى پەقەت Store API ھارۋا ۋە billing field لىرىنى دەلىللىگەندىن كېيىنلا ئىجرا بولىدۇ، شۇڭا unauth bot لار دەلىللىگۈچتىن 400 ئېلىپ، چەكلىگۈچنى ھەرگىز چەكمەيتتى.
* تۈزىتىلدى: Ultimate Multisite inline-login سۈرئەت چەك gate ئەمدى `wu_before_inline_login` نىڭ ئورنىغا `wu_ajax_nopriv_wu_inline_login` ئالدىنلىق 1 (ۋە كىرگەن ئىشلەتكۈچى mirror) دا ئىجرا بولىدۇ. كېيىنكىسى پەقەت `check_ajax_referer('wu_checkout')` مۇۋەپپەقىيەتلىك بولغاندىن كېيىنلا ئىجرا بولىدۇ، شۇڭا ئىناۋەتلىك wu_checkout nonce يوق unauth bot لار 403 ئېلىپ، چەكلىگۈچنى ھەرگىز چەكمەيتتى.
* تۈزىتىلدى: `Rate_Limiter::enforce()` ئەمدى `surface|ip` بىلەن ئاچقۇچلانغان ھەر تەلەپكە بىر قېتىملىق قوغدىغۇچنى قوللىنىدۇ، شۇڭا ھەر render دا ئىككى قېتىم ئىجرا بولىدىغان يۇقىرى ئېقىم hook لىرى (بولۇپمۇ Ultimate Multisite دىكى `wu_setup_checkout`) ئەمدى ئۈنۈملۈك سۈرئەت چەك چېكىنى يېرىملىتىۋەتمەيدۇ.
* تۈزىتىلدى: سۈرئەت چەك surface gate لىرى ئەمدى `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter) دىن مەسلىھەت ئالمايدۇ. ئۇ filter "captcha باشقا بىر surface تەرىپىدىن ئاللىقاچان بىر تەرەپ قىلىندى" دېگەننى بىلدۈرىدۇ ۋە flood قوغدىشىغا مۇناسىۋەتسىز — WooCommerce بىرلەشتۈرۈشى Woo nonce مەۋجۇت بولغاندا WordPress كىرىش captcha سىنى ئاتلاش ئۈچۈن ئۇنى hook قىلغان، بۇ سۈرئەت ساناشقا ئېقىپ كىرىپ، Woo POST لىرىنىڭ چەكلىگۈچتىن قېچىشىغا يول قويغان. ھازىر قوللىنىلىدىغان بىردىنبىر ئايلىنىپ ئۆتۈش سۈرئەت چەككە خاس `wu_cap_rate_limit_whitelist_ip` filter دۇر.

نەشرى: 1.3.2 - 2026-01-27 ئېلان قىلىندى
* تۈزىتىلدى: Elementor ياكى باشقا بەت قۇرغۇچىلار ئىشلىتىلگەن checkout form لىرىدا Cap widget كۆرسىتىلمەسلىك
* تۈزىتىلدى: cap-widget custom element نىڭ wp_kses() تازىلاش تەرىپىدىن ئېلىۋېتىلىشى
* ياخشىلاندى: HTML سۈزۈشنى ئايلىنىپ ئۆتۈش ئۈچۈن checkout captcha field ئۈچۈن callable مەزمۇن ئىشلىتىش
* ياخشىلاندى: چېگرا ئەھۋاللىرى ئۈچۈن fallback بار ئاددىيلاشتۇرۇلغان JavaScript

نەشرى: 1.3.1 - 2026-01-26 ئېلان قىلىندى
* تۈزىتىلدى: Cap Captcha كۆرۈنمەس ھالىتىنىڭ دىنامىك Ultimate Multisite checkout form لىرىدا ئاپتوماتىك ھەل بولماسلىقى
* ياخشىلاندى: Cap checkout script ئەمدى دىنامىك يۈكلەنگەن widget لارنى بايقاش ئۈچۈن MutationObserver ئىشلىتىدۇ
* ياخشىلاندى: يوللاشتىن بۇرۇن token نى كۈتۈش ئۈچۈن checkout كۇنۇپكىسىنى تۇتۇپ قېلىش قوشۇلدى

Version: 1.3.0 - 2026-01-27 دە ئېلان قىلىنغان
* يېڭى: WooCommerce Blocks چىقىم قىلىشنى Store API fetch توسۇۋېلىش بىلەن بىرلەشتۈرۈش
* يېڭى: WooCommerce چىقىم قىلىش ئۈچۈن كۆرۈنمەس captcha قوللاش (hCaptcha كۆرۈنمەس، reCAPTCHA v2 كۆرۈنمەس، v3)
* يېڭى: Ultimate Multisite بولمىسا ئىشلىتىشكە مۇستەقىل تەڭشەكلەر بېتى
* يېڭى: بېقىندى توقۇنۇشلىرىنىڭ ئالدىنى ئېلىش ئۈچۈن Jetpack Autoloader
* تۈزىتىلدى: hCaptcha دىنامىك Ultimate Multisite چىقىم قىلىشتا كۆرسىتىلمەسلىكى (AJAX ئارقىلىق يۈكلەنگەن مەزمۇن)
* تۈزىتىلدى: جەدۋەل تەكشۈرۈش خاتالىقلىرى كۆرۈلگەندە Captcha يېڭىلانماسلىقى/قايتا تەڭشەلمەسلىكى
* تۈزىتىلدى: hCaptcha نىڭ WooCommerce چىقىم قىلىش بېتىدە كۆرۈنمەسلىكى
* تۈزىتىلدى: reCAPTCHA class تېپىلمىدى خاتالىقى (google/recaptcha PHP كۈتۈپخانىسى قوشۇلدى)
* ياخشىلاندى: WordPress hooks، MutationObserver ۋە AJAX توسۇۋېلىش ئارقىلىق خاتالىق بايقاش
* ياخشىلاندى: تەڭشەك چۈشەندۈرۈشلىرى ھازىر API keys ئۈچۈن Dashboard URL لىرىنى ئۆز ئىچىگە ئالىدۇ

Version: 1.2.2 - 2026-01-24 دە ئېلان قىلىنغان
* تۈزىتىلدى: Captcha نىڭ Ultimate Multisite Login Form Element دا كۆرۈنمەسلىكى (جەدۋەل filter ئىسمى ماس كەلمەسلىكى)
* تۈزىتىلدى: Cap widget HTML نىڭ wp_kses() تازىلاش ئارقىلىق چىقىرىۋېتىلىشى
* تۈزىتىلدى: JavaScript تاللىغۇچلىرىنىڭ ئېلېمېنت ID لىرىدا سىزىقلار بار جەدۋەللەرنى تاپالماسلىقى
* قوشۇلدى: classaddons لارنىڭ رۇخسەت قىلىنغان HTML tags نى كېڭەيتىشى ئۈچۈن filter hook `wu_kses_allowed_html`
* چىقىرىۋېتىلدى: ئىشلىمەيدىغان كونا JavaScript ھۆججەتلىرى تەمىنلىگۈچىگە خاس scripts بىلەن ئالماشتۇرۇلدى

Version: 1.2.1 - 2026-01-23 دە ئېلان قىلىنغان

* تۈزىتىلدى: Cap Captcha token تەكشۈرۈشىنىڭ multisite مۇھىتلىرىدا مەغلۇپ بولۇشى (ھازىر network-wide transients ئىشلىتىدۇ)
* تۈزىتىلدى: Captcha ھازىر كىرىش ھالىتىدىن قەتئىينەزەر بارلىق ئىشلەتكۈچىلەرگە ئىزچىل كۆرسىتىلىدۇ
* تۈزىتىلدى: چىقىم قىلىش مەغلۇبىيەتلىرىنى كەلتۈرۈپ چىقارغان captcha كۆرسىتىش بىلەن تەكشۈرۈش ئوتتۇرىسىدىكى ماس كەلمەسلىك

Version: 1.2.0 - 2026-01-21 دە ئېلان قىلىنغان

* يېڭى: Cap Captcha - ئۆزىدە ساھىبخان قىلىنغان proof-of-work captcha، قوزغىتىلغاندا سۈكۈتتىكى ھالدا ئىناۋەتلىك قىلىنغان
* يېڭى: نۆل-سەپلەش قوغدىشى - addon نى قوزغىتىڭ، دەرھال قوغدىلىسىز
* يېڭى: ئاسان كېڭەيتىش ئۈچۈن كۆپ شەكىللىك captcha تەمىنلىگۈچى قۇرۇلمىسى
* يېڭى: كارتىنى سىناش ھۇجۇملىرىغا قارشى WooCommerce Store API چىقىم قىلىش قوغدىشى
* يېڭى: challenges، verifications ۋە توسۇلغان ھۇجۇملارنى كۆرسىتىدىغان ئىستاتىستىكا ئىز قوغلاش Dashboard
* يېڭى: Cap Captcha قىيىنلىق دەرىجىسى ئۈچۈن بىخەتەرلىك دەرىجىسى ئالدىن تەڭشەكلىرى (تېز، ئوتتۇرا، ئەڭ يۇقىرى)
* يېڭى: reCAPTCHA ۋە hCaptcha تەمىنلىگۈچىلەر ئۈچۈن abstract base classes
* ياخشىلاندى: كود ئاساسى مودۇللۇق تەمىنلىگۈچى class لىرىغا قايتا قۇرۇلدى
* ياخشىلاندى: مەخسۇس manager class بىلەن مەسئۇلىيەتلەر تېخىمۇ ياخشى ئايرىلدى
* Fixed: Security improvements for $_SERVER variable sanitization
* تۈزىتىلدى: WordPress naming conventions ئۈچۈن PHPUnit test سەپلىمىسى

Version: 1.0.1 - 2025-09-28 دە ئېلان قىلىنغان

* prefix نى ultimate-multisite غا ئۆزگەرتىش؛ text domain نى يېڭىلاش؛ version ئۆستۈرۈش.
