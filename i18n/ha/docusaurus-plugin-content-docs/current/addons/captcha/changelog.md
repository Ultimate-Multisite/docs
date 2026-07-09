---
title: Tarihin canje-canje na Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Tarihin Canje-canje na Captcha {#captcha-changelog}

Siga: 1.5.0 - An fitar a 2026-05-22
* Sabo: Mai takaita yawan buƙatu mai tsayarwa gaba ɗaya — yana ƙirga kowane GET da POST a wuraren da captcha ke karewa (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) kuma yana amsawa da HTTP 429, `Retry-After` header, da barcin tarpit na bazuwar (1–5s, an iyakance shi da ƙarfi zuwa 15s).
* Sabo: Saitunan `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` don daidaita taga tarpit.
* Sabo: Matatar `wu_cap_rate_limit_whitelist_ip` don keɓe amintattun zangon IP.
* Sabo: Aikin `wu_cap_rate_limit_will_block` da ke aiki nan take kafin a aika amsar tsayarwa gaba ɗaya.
* Sabo: Gano IP na client mai jure ƙirƙira. `Captcha_Core::get_client_ip()` (asalin gaskiya don maɓallan bucket na takaita yawan buƙatu, captcha siteverify `remoteip`, da hashes na IP na ƙididdiga) yanzu yana tilasta tsauraran tsarin amincewa: REMOTE_ADDR shi ne tushe, ana girmama `CF-Connecting-IP` ne kawai idan abokin haɗin kai na nan take yana cikin zangon IP na Cloudflare na yanzu, kuma ana girmama `X-Forwarded-For` ne kawai idan abokin haɗin kai na nan take yana cikin jerin trusted-proxy da admin ya saita, tare da tafiya daga dama zuwa hagu da ke tsallake amintattun/CF hops kafin ya zauna kan IP na baƙo.
* Sabo: Saitin `cap_trust_cloudflare_headers` (tsoho KASHE) — zaɓi amincewa da `CF-Connecting-IP` idan kana bayan Cloudflare. Plugin ɗin yana zuwa da haɗaɗɗen hoton Cloudflare CIDR kuma yana sabunta shi mako-mako ta wp-cron tare da madadin da aka haɗa idan sabuntawar ta gaza.
* Sabo: Saitin `cap_trusted_proxies` — textarea na CIDRs ko IPs kai tsaye (ɗaya a kowane layi, ana yarda da sharhin `#`) da ke lissafa naka proxies / load-balancers na gaba. Ba tare da wannan ba, ana watsi da `X-Forwarded-For` ko da an kunna mai takaita yawan buƙatu.
* Sabo: Gano kai tsaye a farkon kunnawa na yiwuwar yanayin Cloudflare / proxy tare da sanarwar admin ta dannawa ɗaya "Aiwatar da saitunan da aka gano". Plugin ɗin ba ya taɓa maye gurbin ƙimomin da ka ajiye; idan zirga-zirgar gaba ta nuna config ɗinka bai ƙara dacewa da gaskiya ba (misali Cloudflare ya canza zangon CIDR kuma proxy CIDR ɗinka yanzu ya tsufa), sanarwar rashin daidaito da ba za a iya rufewa ba za ta nuna sabuntawar da aka ba da shawara.
* An gyara: Yanayin invisible ba ya ƙara saukar da `cap_security_level` cikin shiru zuwa FAST — ana girmama matakin da admin ya saita. Sabuwar matatar `wu_cap_server_security_level` tana samuwa ga sites da ke son dabaru na musamman.
* An gyara: Mai ƙirga ƙididdiga `rate_limits_triggered` yanzu yana ƙaruwa a kowane toshewa, ba kawai a kan hanyar baya mai wuya bayan nasara ba.
* An gyara: `Captcha_Core::get_client_ip()` yanzu shi ne tushen gaskiya guda ɗaya don danganta IP na baƙo a cikin mai takaita yawan buƙatu, masu samar da captcha (reCAPTCHA + hCaptcha `siteverify`), da ƙididdiga — yana rufe wata hanyar ƙirƙira inda buƙatun kai tsaye zuwa origin-server masu ɗauke da ƙirƙirarren `CF-Connecting-IP` header da an saka su cikin bucket ta IP ɗin da aka ƙirƙira maimakon ainihin abokin haɗin kai.
* An gyara: Ƙofar takaita yawan buƙatu ta WooCommerce classic checkout yanzu tana aiki a kan `template_redirect` (priority 1) maimakon `woocommerce_before_checkout_form`. Hook na matakin form ba ya taɓa aiki idan cart babu komai, don haka zirga-zirgar ambaliya da ba ta taɓa ƙara product ba tana wuce mai takaita buƙatun gaba ɗaya.
* An gyara: Ƙofar takaita yawan buƙatu ta WooCommerce pay-for-order yanzu tana aiki a kan `template_redirect` maimakon `woocommerce_before_pay_action`. Na ƙarshen yana aiki ne kawai bayan `wp_verify_nonce('woocommerce-pay')` ya yi nasara, wanda ke nufin unauth attackers (ainihin tsarin barazana) ba su taɓa kunna mai takaita buƙatun ba.
* An gyara: Ƙofar takaita yawan buƙatu ta WooCommerce Store API (blocks) checkout yanzu tana aiki a kan `rest_pre_dispatch` maimakon `woocommerce_store_api_checkout_update_order_from_request`. Na ƙarshen yana aiki ne kawai bayan Store API ya tabbatar da cart da filayen billing, don haka bots marasa auth sun samu 400 daga validator kuma ba su taɓa kunna mai takaita buƙatun ba.
* An gyara: Ƙofar takaita yawan buƙatu ta Ultimate Multisite inline-login yanzu tana aiki a kan `wu_ajax_nopriv_wu_inline_login` priority 1 (da madubin masu shiga) maimakon `wu_before_inline_login`. Na ƙarshen yana aiki ne kawai bayan `check_ajax_referer('wu_checkout')` ya yi nasara, don haka bots marasa auth ba tare da ingantaccen wu_checkout nonce ba sun samu 403 kuma ba su taɓa kunna mai takaita buƙatun ba.
* An gyara: `Rate_Limiter::enforce()` yanzu yana aiwatar da kariyar sau-ɗaya-a-kowane-buƙata da aka maɓalle da `surface|ip`, don haka hooks na sama da ke aiki sau biyu a kowane render (musamman `wu_setup_checkout` a cikin Ultimate Multisite) ba su ƙara raba ingantaccen ma'aunin takaita yawan buƙatu gida biyu ba.
* An gyara: Ƙofofin wuraren takaita yawan buƙatu ba su ƙara tuntuɓar `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter). Wannan filter yana nuna "an riga an kula da captcha ta wani wuri" kuma yana dabam da kariyar ambaliya — haɗin WooCommerce yana hook da shi don tsallake captcha na shiga WordPress idan Woo nonce yana nan, wanda ya zube cikin ƙirga yawan buƙatu kuma ya bar Woo POSTs su guje wa mai takaita buƙatun. Filter na musamman don takaita yawan buƙatu `wu_cap_rate_limit_whitelist_ip` shi ne kawai wucewa da yanzu yake aiki.

Siga: 1.3.2 - An fitar a 2026-01-27
* An gyara: Cap widget ba ya bayyana a kan checkout forms da ke amfani da Elementor ko wasu page builders
* An gyara: Ana cire custom element na cap-widget ta tsaftacewar wp_kses()
* An inganta: Yi amfani da callable content don checkout captcha field don kauce wa HTML filtering
* An inganta: An sauƙaƙa JavaScript tare da fallback don edge cases

Siga: 1.3.1 - An fitar a 2026-01-26
* An gyara: Yanayin invisible na Cap Captcha ba ya warware kansa kai tsaye a kan dynamic Ultimate Multisite checkout forms
* An inganta: Script na Cap checkout yanzu yana amfani da MutationObserver don gano widgets da aka loda cikin dynamic
* An inganta: An ƙara tare maɓallin checkout don jira token kafin submission

Version: 1.3.0 - An sake shi a 2026-01-27
* Sabo: Haɗakar WooCommerce Blocks checkout tare da katsewar fetch na Store API
* Sabo: Tallafin captcha marar ganuwa don WooCommerce checkout (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Sabo: Shafin saituna mai zaman kansa don amfani ba tare da Ultimate Multisite ba
* Sabo: Jetpack Autoloader don hana rikicin dogaro
* An gyara: hCaptcha ba ya nunawa a kan Ultimate Multisite checkout mai motsi (abun ciki da aka loda ta AJAX)
* An gyara: Captcha ba ya wartsakewa/sake saitawa lokacin da kurakuran tabbatar da fom suka faru
* An gyara: hCaptcha ba ya bayyana a shafin WooCommerce checkout
* An gyara: Kuskuren class na reCAPTCHA ba a samu ba (an ƙara google/recaptcha PHP library)
* An inganta: Gano kuskure ta hanyar WordPress hooks, MutationObserver, da katsewar AJAX
* An inganta: Bayanan saituna yanzu suna haɗa URLs na dashboard don API keys

Version: 1.2.2 - An sake shi a 2026-01-24
* An gyara: Captcha ba ya bayyana a Ultimate Multisite Login Form Element (rashin daidaiton sunan form filter)
* An gyara: HTML na Cap widget ana cire shi ta tsabtace wp_kses()
* An gyara: JavaScript selectors ba su samun fom masu slash a cikin IDs na element
* An ƙara: Filter hook `wu_kses_allowed_html` don classaddons su faɗaɗa HTML tags da aka yarda da su
* An cire: Fayilolin JavaScript marasa amfani da aka maye gurbinsu da scripts na musamman ga mai bayarwa

Version: 1.2.1 - An sake shi a 2026-01-23

* An gyara: Tabbatar da Cap Captcha token yana gazawa a muhallan multisite (yanzu yana amfani da transients na dukkan network)
* An gyara: Captcha yanzu yana nunawa daidai ga duk masu amfani ba tare da la’akari da matsayin shiga ba
* An gyara: Rashin daidaito tsakanin nuna captcha da tabbatarwa wanda ya haifar da gazawar checkout

Version: 1.2.0 - An sake shi a 2026-01-21

* Sabo: Cap Captcha - captcha na proof-of-work da aka karɓi bakunci da kai, ana kunna shi ta tsohuwa lokacin kunnawa
* Sabo: Kariya ba tare da saiti ba - kunna addon ɗin kuma ana kare ka nan take
* Sabo: Tsarin masu bayar da captcha na polymorphic don sauƙin faɗaɗawa
* Sabo: Kariyar WooCommerce Store API checkout daga hare-haren gwajin katin
* Sabo: Dashboard na bin diddigin ƙididdiga da ke nuna ƙalubale, tabbatarwa, da hare-haren da aka toshe
* Sabo: Shirye-shiryen matakin tsaro (Fast, Medium, Max) don wahalar Cap Captcha
* Sabo: Abstract base classes don masu bayar da reCAPTCHA da hCaptcha
* An inganta: An sake tsara codebase zuwa classes na provider masu module-module
* An inganta: Kyakkyawan raba nauyi tare da dedicated manager class
* Fixed: Security improvements for $_SERVER variable sanitization
* An gyara: Tsarin saitin gwajin PHPUnit don ka’idojin suna na WordPress

Version: 1.0.1 - An sake shi a 2025-09-28

* Sake suna prefix zuwa ultimate-multisite; sabunta text domain; ƙara version.
