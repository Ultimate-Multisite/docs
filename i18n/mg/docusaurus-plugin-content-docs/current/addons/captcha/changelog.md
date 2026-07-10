---
title: Tantaran'ny fanovana Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Changelog Captcha {#captcha-changelog}

Version: 1.5.0 - Navoaka tamin'ny 2026-05-22
* Vaovao: Hard-stop rate limiter — manisa ny GET sy POST rehetra amin'ireo faritra arovan'ny captcha (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) ary mamaly amin'ny HTTP 429, `Retry-After` header, ary tarpit sleep kisendrasendra (1–5s, voafetra mafy amin'ny 15s).
* Vaovao: fikirana `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` hanitsiana ny elanelan'ny tarpit.
* Vaovao: sivana `wu_cap_rate_limit_whitelist_ip` hanafahana ireo IP ranges azo itokisana.
* Vaovao: hetsika `wu_cap_rate_limit_will_block` izay mandeha avy hatrany alohan'ny handefasana ny valin'ny hard-stop.
* Vaovao: Famaritana client-IP mahatohitra spoofing. `Captcha_Core::get_client_ip()` (loharano marina ho an'ny rate-limit bucket keys, captcha siteverify `remoteip`, ary statistics IP hashes) dia mampihatra modely fitokisana hentitra ankehitriny: REMOTE_ADDR no fototra, `CF-Connecting-IP` ekena ihany rehefa ao anatin'ny Cloudflare IP range amin'izao fotoana izao ny peer akaiky indrindra, ary `X-Forwarded-For` ekena ihany rehefa ao amin'ny lisitry ny trusted-proxy napetraky ny admin ny peer akaiky indrindra, miaraka amin'ny fivezivezena havanana-mankavia izay mandingana ny trusted/CF hops alohan'ny hifidianana ny IP an'ny mpitsidika.
* Vaovao: fikirana `cap_trust_cloudflare_headers` (default OFF) — misafidiana ny fitokisana `CF-Connecting-IP` rehefa ao ambadiky ny Cloudflare. Ny plugin dia mitondra Cloudflare CIDR snapshot voafono ary manavao izany isan-kerinandro amin'ny wp-cron miaraka amin'ny fallback voafono raha tsy mahomby ny fanavaozana.
* Vaovao: fikirana `cap_trusted_proxies` — textarea misy CIDRs na IPs tsotra (iray isaky ny andalana, azo atao ny fanehoan-kevitra `#`) mitanisa ireo proxies / load-balancers anao eo amin'ny laharana voalohany. Raha tsy misy izany, dia tsy raharahaina ny `X-Forwarded-For` na dia alefa aza ny rate limiter.
* Vaovao: Fikarohana mandeha ho azy amin'ny fampandehanana voalohany momba ny mety ho Cloudflare / proxy posture miaraka amin'ny fampahafantarana admin "Ampiharo ny fikirana hita" tsindry iray. Tsy manoratra ambonin'ny sanda voatahiry mihitsy ny plugin; raha manondro ny fifamoivoizana manaraka fa tsy mifanaraka amin'ny zava-misy intsony ny config-nao (oh: niova ny Cloudflare CIDR ranges ary lany andro izao ny proxy CIDR-nao), dia hiseho fampahafantarana tsy azo esorina momba ny tsy fitoviana miaraka amin'ny fanavaozana atolotra.
* Voahitsy: Tsy mampidina mangingina ny `cap_security_level` ho FAST intsony ny maody invisible — hajaina ny haavo napetraky ny admin. Misy sivana `wu_cap_server_security_level` vaovao ho an'ireo sites mila lojika manokana.
* Voahitsy: Ny mpanisa statistics `rate_limits_triggered` dia mitombo isaky ny block ankehitriny, fa tsy amin'ilay lalan'ny post-success backstop tsy fahita firy ihany.
* Voahitsy: `Captcha_Core::get_client_ip()` no loharano marina tokana ankehitriny ho an'ny fanondroana IP mpitsidika manerana ny rate limiter, captcha providers (reCAPTCHA + hCaptcha `siteverify`), ary statistics — manidy vector spoofing izay nahafahan'ny fangatahana mivantana amin'ny origin-server mitondra `CF-Connecting-IP` header sandoka ho voasokajy amin'ny IP sandoka fa tsy amin'ny peer tena izy.
* Voahitsy: Ny vavahady rate-limit amin'ny WooCommerce classic checkout dia mandeha amin'ny `template_redirect` (priority 1) ankehitriny fa tsy `woocommerce_before_checkout_form`. Tsy mandeha mihitsy ny hook amin'ny haavon'ny form rehefa foana ny cart, ka ny fifamoivoizana flood izay tsy manampy product mihitsy dia nandalo tanteraka ny limiter.
* Voahitsy: Ny vavahady rate-limit amin'ny WooCommerce pay-for-order dia mandeha amin'ny `template_redirect` ankehitriny fa tsy `woocommerce_before_pay_action`. Ity farany dia mandeha ihany rehefa mahomby ny `wp_verify_nonce('woocommerce-pay')`, izay midika fa tsy nahatonga ny limiter mihitsy ireo mpanafika unauth (modelin'ny loza tena izy).
* Voahitsy: Ny vavahady rate-limit amin'ny WooCommerce Store API (blocks) checkout dia mandeha amin'ny `rest_pre_dispatch` ankehitriny fa tsy `woocommerce_store_api_checkout_update_order_from_request`. Ity farany dia mandeha ihany rehefa manamarina ny cart sy ny billing fields ny Store API, ka nahazo 400 avy amin'ny validator ireo bots unauth ary tsy nampihetsika ny limiter mihitsy.
* Voahitsy: Ny vavahady rate-limit amin'ny Ultimate Multisite inline-login dia mandeha amin'ny `wu_ajax_nopriv_wu_inline_login` priority 1 (sy ny mirror logged-in) ankehitriny fa tsy `wu_before_inline_login`. Ity farany dia mandeha ihany rehefa mahomby ny `check_ajax_referer('wu_checkout')`, ka nahazo 403 ireo bots unauth tsy manana wu_checkout nonce manan-kery ary tsy nampihetsika ny limiter mihitsy.
* Voahitsy: `Rate_Limiter::enforce()` dia mampihatra guard indray mandeha isaky ny fangatahana voakey amin'ny `surface|ip` ankehitriny, ka ireo upstream hooks mandeha indroa isaky ny render (indrindra `wu_setup_checkout` ao amin'ny Ultimate Multisite) dia tsy mampihena antsasany intsony ny tokonam-baravaran'ny rate-limit mahomby.
* Voahitsy: Tsy mijery `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter) intsony ireo vavahady rate-limit surface. Io filter io dia manondro hoe "efa nokarakarain'ny surface hafa ny captcha" ary tsy miankina amin'ny fiarovana amin'ny flood — ny integration WooCommerce dia nampiasa azy mba hitsipahana ny captcha login WordPress rehefa misy Woo nonce, izay niantraika tamin'ny fanisana rate ary namela ny Woo POSTs hiala amin'ny limiter. Ny filter manokana ho an'ny rate-limit `wu_cap_rate_limit_whitelist_ip` ihany no bypass mihatra ankehitriny.

Version: 1.3.2 - Navoaka tamin'ny 2026-01-27
* Voahitsy: Tsy niseho ny Cap widget amin'ny checkout forms mampiasa Elementor na page builders hafa
* Voahitsy: cap-widget custom element nesorin'ny fanadiovana wp_kses()
* Nohatsaraina: Mampiasa callable content ho an'ny checkout captcha field mba hialana amin'ny HTML filtering
* Nohatsaraina: JavaScript notsorina miaraka amin'ny fallback ho an'ny tranga sisiny

Version: 1.3.1 - Navoaka tamin'ny 2026-01-26
* Voahitsy: Cap Captcha invisible mode tsy nanao auto-solving tamin'ny forms checkout Ultimate Multisite dynamic
* Nohatsaraina: Ny script Cap checkout dia mampiasa MutationObserver ankehitriny hamantarana ireo widgets ampidirina dynamic
* Nohatsaraina: Nampiana fisakanana checkout button hiandry token alohan'ny fandefasana

Version: 1.3.0 - Navoaka tamin'ny 2026-01-27
* Vaovao: Fampidirana WooCommerce Blocks checkout miaraka amin'ny fisakanana fakana Store API
* Vaovao: Fanohanana captcha tsy hita maso ho an'ny WooCommerce checkout (hCaptcha tsy hita maso, reCAPTCHA v2 tsy hita maso, v3)
* Vaovao: Pejy toe-javatra mijoro irery ho ampiasaina tsy misy Ultimate Multisite
* Vaovao: Jetpack Autoloader ho fisorohana fifandonan'ny fiankinan-doha
* Namboarina: hCaptcha tsy niseho tamin'ny Ultimate Multisite checkout dinamika (votoaty entina amin'ny AJAX)
* Namboarina: Captcha tsy namelombelona/namerenana rehefa misy hadisoana fanamarinana takelaka
* Namboarina: hCaptcha tsy miseho amin'ny pejy WooCommerce checkout
* Namboarina: Hadisoana reCAPTCHA class not found (nampiana tranomboky PHP google/recaptcha)
* Nohatsaraina: Famantarana hadisoana amin'ny alalan'ny WordPress hooks, MutationObserver, ary fisakanana AJAX
* Nohatsaraina: Ny famaritana toe-javatra izao dia ahitana URL Dashboard ho an'ny API keys

Version: 1.2.2 - Navoaka tamin'ny 2026-01-24
* Namboarina: Captcha tsy miseho amin'ny Ultimate Multisite Login Form Element (tsy fitovian'ny anaran'ny sivana takelaka)
* Namboarina: HTML widget Cap nesorin'ny fanadiovana wp_kses()
* Namboarina: JavaScript selectors tsy mahita takelaka misy tsipika mitongilana ao amin'ny ID singa
* Nampiana: Filter hook `wu_kses_allowed_html` ho an'ny classaddons hanitarana ny HTML tags avela
* Nesorina: Rakitra JavaScript tsy ampiasaina nosoloina script manokana ho an'ny mpamatsy

Version: 1.2.1 - Navoaka tamin'ny 2026-01-23

* Namboarina: Tsy nahomby ny fanamarinana token Cap Captcha amin'ny tontolo multisite (mampiasa transients manerana ny tambajotra izao)
* Namboarina: Captcha izao dia miseho tsy tapaka ho an'ny mpampiasa rehetra na inona na inona sata fidirana
* Namboarina: Tsy fitoviana teo amin'ny fampisehoana captcha sy ny fanamarinana izay niteraka tsy fahombiazan'ny checkout

Version: 1.2.0 - Navoaka tamin'ny 2026-01-21

* Vaovao: Cap Captcha - captcha proof-of-work ampiantranoina tena, alefa ho azy amin'ny fampandehanana
* Vaovao: Fiarovana tsy mila fanamboarana - ampandehano ny addon dia voaaro avy hatrany ianao
* Vaovao: Rafitra mpamatsy captcha polimorfika ho an'ny fanitarana mora
* Vaovao: Fiarovana WooCommerce Store API checkout amin'ny fanafihana fitsapana karatra
* Vaovao: Dashboard fanarahana statistika mampiseho fanamby, fanamarinana, ary fanafihana voasakana
* Vaovao: Preset haavon'ny fiarovana (Haingana, Antonony, Faratampony) ho an'ny fahasarotan'ny Cap Captcha
* Vaovao: Kilasy fototra abstract ho an'ny mpamatsy reCAPTCHA sy hCaptcha
* Nohatsaraina: Nohavaozina ho kilasy mpamatsy modular ny codebase
* Nohatsaraina: Fanasarahana andraikitra tsara kokoa miaraka amin'ny kilasy manager natokana
* Fixed: Security improvements for $_SERVER variable sanitization
* Namboarina: Fanamboarana fitsapana PHPUnit ho an'ny fitsipika fanomezana anarana WordPress

Version: 1.0.1 - Navoaka tamin'ny 2025-09-28

* Ovay ho ultimate-multisite ny prefix; havaozy ny text domain; fampiakarana version.
