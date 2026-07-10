---
title: Amateka y’impinduka za Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha Changelog {#captcha-changelog}

Verisiyo: 1.5.0 - Yasohotse ku 2026-05-22
* Gishya: Igenzura ry'igipimo rihagarika burundu — ribara buri GET na POST ku bice birinzwe na captcha (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) kandi rigasubiza HTTP 429, `Retry-After` header, n'isinzira rya tarpit ritunguranye (1–5s, ntirirenga 15s).
* Gishya: Igenamiterere rya `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` ryo guhuza idirishya rya tarpit.
* Gishya: filter `wu_cap_rate_limit_whitelist_ip` yo gusonera intera za IP zizewe.
* Gishya: action `wu_cap_rate_limit_will_block` ikora ako kanya mbere y'uko igisubizo gihagarika burundu cyoherezwa.
* Gishya: Kumenya IP y'umukiriya kudashobora gushukwa byoroshye. `Captcha_Core::get_client_ip()` (isoko y'ukuri ku rufunguzo rwa bucket z'igipimo, captcha siteverify `remoteip`, na hashes za IP z'imibare) ubu ishyira mu bikorwa icyitegererezo gikomeye cy'icyizere: REMOTE_ADDR niyo shingiro, `CF-Connecting-IP` yubahwa gusa iyo mugenzi uhita uhuza ari imbere mu ntera ya IP ya Cloudflare iriho, kandi `X-Forwarded-For` yubahwa gusa iyo mugenzi uhita uhuza ari mu rutonde rwa trusted-proxy rwashyizweho na admin, hakorwa urugendo ruva iburyo rujya ibumoso rusimbuka trusted/CF hops mbere yo gufata IP y'usuye.
* Gishya: Igenamiterere rya `cap_trust_cloudflare_headers` (OFF ku busanzwe) — hitamo kwizera `CF-Connecting-IP` igihe uri inyuma ya Cloudflare. Iyi plugin izana snapshot ya Cloudflare CIDR ipakiwemo kandi iyivugurura buri cyumweru binyuze kuri wp-cron, ikifashisha ipakiwemo nk'inyuma iyo ivugurura ryananiranye.
* Gishya: Igenamiterere rya `cap_trusted_proxies` — textarea ya CIDR cyangwa IP zisanzwe (imwe kuri buri murongo, ibitekerezo bya `#` biremewe) igaragaza proxies / load-balancers zawe z'imbere. Hatabayeho ibi, `X-Forwarded-For` yirengagizwa n'iyo igenzura ry'igipimo ryaba rikora.
* Gishya: Kumenya mu buryo bwikora ku nshuro ya mbere iyo bishoboka ko uko Cloudflare / proxy bihagaze, hamwe n'imenyesha rya admin rya kanda-rimwe "Shyiraho igenamiterere ryamenyekanye". Iyi plugin ntiyigera isimbura indangagaciro wabitse; niba traffic ikurikiyeho igaragaje ko config yawe itagihuye n'ukuri (urugero Cloudflare yahinduye intera za CIDR kandi proxy CIDR yawe ikaba ishaje), imenyesha ry'ukudahuza ridashobora gukurwaho rigaragaza ivugurura risabwa.
* Byakosowe: Uburyo butagaragara ntibukimanura bucece `cap_security_level` ngo bube FAST — urwego rwashyizweho na admin rurubahirizwa. Filter nshya `wu_cap_server_security_level` iraboneka ku mbuga zishaka logique yihariye.
* Byakosowe: Counter `rate_limits_triggered` y'imibare ubu yiyongera kuri buri guhagarika, si gusa ku nzira idakunze kubaho ya backstop nyuma yo gutsinda.
* Byakosowe: `Captcha_Core::get_client_ip()` ubu niyo soko imwe y'ukuri yo guha IP y'usuye agaciro hose mu igenzura ry'igipimo, abatanga captcha (reCAPTCHA + hCaptcha `siteverify`), n'imibare — bifunga inzira yo gushuka aho ibisabwa biturutse kuri origin-server mu buryo butaziguye bitwaye header `CF-Connecting-IP` mpimbano byari gushyirwa muri bucket hakurikijwe IP mpimbano aho gukurikiza mugenzi nyakuri.
* Byakosowe: Irembo ry'igipimo rya WooCommerce classic checkout ubu rikora kuri `template_redirect` (priority 1) aho kuba `woocommerce_before_checkout_form`. Hook yo ku rwego rwa form ntikora na rimwe iyo cart irimo ubusa, bityo traffic y'umuvundo itigeze yongeramo igicuruzwa yarengaga igenzura ry'igipimo burundu.
* Byakosowe: Irembo ry'igipimo rya WooCommerce pay-for-order ubu rikora kuri `template_redirect` aho kuba `woocommerce_before_pay_action`. Iryo rya nyuma rikora gusa nyuma y'uko `wp_verify_nonce('woocommerce-pay')` itsinze, bivuze ko abateye badafite auth (ari bo threat model nyayo) batigeze batangiza igenzura ry'igipimo.
* Byakosowe: Irembo ry'igipimo rya checkout ya WooCommerce Store API (blocks) ubu rikora kuri `rest_pre_dispatch` aho kuba `woocommerce_store_api_checkout_update_order_from_request`. Iryo rya nyuma rikora gusa nyuma y'uko Store API yemeje cart n'imyanya ya billing, bityo bots zidafite auth zabonaga 400 ivuye kuri validator ntizigere zikoma ku igenzura ry'igipimo.
* Byakosowe: Irembo ry'igipimo rya Ultimate Multisite inline-login ubu rikora kuri `wu_ajax_nopriv_wu_inline_login` priority 1 (n'indorerwamo y'abinjiye) aho kuba `wu_before_inline_login`. Iryo rya nyuma rikora gusa nyuma y'uko `check_ajax_referer('wu_checkout')` itsinze, bityo bots zidafite auth zidafite wu_checkout nonce yemewe zabonaga 403 ntizigere zikoma ku igenzura ry'igipimo.
* Byakosowe: `Rate_Limiter::enforce()` ubu ikoresha guard rimwe-kuri-request ishingiye kuri `surface|ip`, bityo hooks zo hejuru zikora kabiri kuri buri render (cyane cyane `wu_setup_checkout` muri Ultimate Multisite) ntizikigabanya kabiri threshold y'igipimo ikora.
* Byakosowe: Amarembo y'ibice by'igipimo ntakigisha inama `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter). Iyo filter igaragaza "captcha yamaze gukemurwa n'ikindi gice" kandi ntaho ihuriye no kurinda umuvundo — integration ya WooCommerce yayihuzaga kugira ngo isimbuke WordPress login captcha iyo Woo nonce yabaga ihari, ibyo bikavangirwa mu kubara igipimo bigatuma Woo POSTs zica ku ruhande rw'igenzura ry'igipimo. Filter yihariye y'igipimo `wu_cap_rate_limit_whitelist_ip` niyo nzira yonyine yo kurenga ubu ikora.

Verisiyo: 1.3.2 - Yasohotse ku 2026-01-27
* Byakosowe: Widget ya Cap itagaragaraga kuri checkout forms zikoresha Elementor cyangwa abandi bubatsi b'amapaji
* Byakosowe: Element yihariye ya cap-widget yakurwagaho na sanitization ya wp_kses()
* Byanonosowe: Gukoresha content callable ku mwanya wa checkout captcha kugira ngo hirindwe iyungurura rya HTML
* Byanonosowe: JavaScript yoroshye hamwe na fallback ku bihe byihariye

Verisiyo: 1.3.1 - Yasohotse ku 2026-01-26
* Byakosowe: Uburyo butagaragara bwa Cap Captcha butakemuraga mu buryo bwikora kuri checkout forms za Ultimate Multisite zihinduka
* Byanonosowe: Script ya Cap checkout ubu ikoresha MutationObserver kugira ngo imenye widgets zipakirwa mu buryo buhinduka
* Byanonosowe: Hyongewemo guhagarika button ya checkout kugira ngo itegereze token mbere yo kohereza

Version: 1.3.0 - Yasohotse ku wa 2026-01-27
* Gishya: Ihuzwa rya WooCommerce Blocks checkout hamwe no gufata Store API fetch
* Gishya: Ubufasha bwa captcha itagaragara kuri WooCommerce checkout (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Gishya: Urupapuro rwihariye rw'amagenamiterere rwo gukoresha nta Ultimate Multisite
* Gishya: Jetpack Autoloader yo gukumira amakimbirane y'ibishingirwaho
* Byakosowe: hCaptcha itagaragaraga kuri Ultimate Multisite checkout ihinduka (ibirimo byinjijwe na AJAX)
* Byakosowe: Captcha itavugururwaga/itasubizwagamo igihe habaye amakosa yo kugenzura ifishi
* Byakosowe: hCaptcha itagaragaraga ku rupapuro rwa WooCommerce checkout
* Byakosowe: ikosa rya reCAPTCHA class not found (hongerewemo google/recaptcha PHP library)
* Byanonosowe: Kumenya amakosa binyuze muri WordPress hooks, MutationObserver, no gufata AJAX
* Byanonosowe: Ibisobanuro by'amagenamiterere ubu birimo dashboard URLs za API keys

Version: 1.2.2 - Yasohotse ku wa 2026-01-24
* Byakosowe: Captcha itagaragaraga kuri Ultimate Multisite Login Form Element (izina rya form filter ritahuraga)
* Byakosowe: Cap widget HTML yakurwagaho na wp_kses() sanitization
* Byakosowe: JavaScript selectors zitabonaga amafishi afite slash muri element IDs
* Byongeweho: Filter hook `wu_kses_allowed_html` kugira ngo classaddons zagure HTML tags zemewe
* Byakuweho: Amadosiye ya JavaScript adakoreshwa yasimbujwe scripts zihariye ku mutangizi

Version: 1.2.1 - Yasohotse ku wa 2026-01-23

* Byakosowe: Igenzura rya Cap Captcha token ryatsindwaga mu bidukikije bya multisite (ubu rikoresha transients zo ku rwego rwa network yose)
* Byakosowe: Captcha ubu igaragara neza ku bakoresha bose hatitawe ku mimerere yo kwinjira
* Byakosowe: Kudahuza hagati yo kugaragaza captcha no kuyigenzura byateraga checkout gutsindwa

Version: 1.2.0 - Yasohotse ku wa 2026-01-21

* Gishya: Cap Captcha - captcha ya proof-of-work yakirwa ku bwakira bwawe, ifungurwa ku buryo mburabuzi igihe ikozwe activation
* Gishya: Uburinzi budasaba igenamiterere - fungura addon uhite urindwa ako kanya
* Gishya: Imiterere ya polymorphic captcha provider yoroshya kwagura
* Gishya: Uburinzi bwa WooCommerce Store API checkout bwo kurwanya ibitero byo kugerageza amakarita
* Gishya: Dashboard yo gukurikirana imibare igaragaza challenges, verifications, n'ibitero byabujijwe
* Gishya: Security level presets (Fast, Medium, Max) ku rugero rw'ikigoye cya Cap Captcha
* Gishya: Abstract base classes za reCAPTCHA na hCaptcha providers
* Byanonosowe: Codebase yongeye gutunganywa mu ma provider classes agize module
* Byanonosowe: Gutandukanya inshingano neza kurushaho hakoreshejwe manager class yihariye
* Fixed: Security improvements for $_SERVER variable sanitization
* Byakosowe: Igenamiterere rya PHPUnit test kuri WordPress naming conventions

Version: 1.0.1 - Yasohotse ku wa 2025-09-28

* Hindura prefix ibe ultimate-multisite; vugurura text domain; kuzamura version.
