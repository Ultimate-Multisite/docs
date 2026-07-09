---
title: Nhoroondo yekuchinja kweCaptcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Nhoroondo yeshanduko yeCaptcha {#captcha-changelog}

Version: 1.5.0 - Yakaburitswa musi wa2026-05-22
* Zvitsva: Hard-stop rate limiter — inoverenga GET nePOST yega yega panzvimbo dzakachengetedzwa necaptcha (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) uye inopindura neHTTP 429, `Retry-After` header, uye tarpit sleep yakasarudzwa zvisina kurongeka (1–5s, yakaganhurirwa zvakasimba pa15s).
* Zvitsva: `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` marongero ekugadzirisa hwindo reTarpit.
* Zvitsva: `wu_cap_rate_limit_whitelist_ip` filter yekusabvisa IP ranges dzakavimbika.
* Zvitsva: `wu_cap_rate_limit_will_block` action inotanga pakarepo mhinduro ye hard-stop isati yatumirwa.
* Zvitsva: Kuziva client-IP kunodzivirira spoofing. `Captcha_Core::get_client_ip()` (sosi yechokwadi yemakiyi e rate-limit bucket, captcha siteverify `remoteip`, uye mahash eIP ezviverengero) zvino inosimbisa modhi yakasimba yekuvimba: REMOTE_ADDR ndiyo hwaro, `CF-Connecting-IP` inoremekedzwa chete kana peer yepedyo iri mukati meCloudflare IP range yazvino, uye `X-Forwarded-For` inoremekedzwa chete kana peer yepedyo iri murondedzero ye trusted-proxy yakagadzirirwa neadmin, nekufamba kubva kurudyi kuenda kuruboshwe kunosvetuka trusted/CF hops isati yasvika paIP yemushanyi.
* Zvitsva: `cap_trust_cloudflare_headers` setting (default OFF) — sarudza kuvimba ne`CF-Connecting-IP` kana uri kuseri kweCloudflare. plugin inouya neCloudflare CIDR snapshot yakasanganisirwa uye inoiwedzera vhiki nevhiki kuburikidza newp-cron ine fallback yakasanganisirwa kana kuwedzera kukatadza.
* Zvitsva: `cap_trusted_proxies` setting — textarea yeCIDRs kana IPs dzisina zvimwe (imwe pamutsetse, `#` makomendi anotenderwa) inonyora ma proxies / load-balancers ako epamberi. Pasina izvi, `X-Forwarded-For` inoregererwa kunyange kana rate limiter yakabatidzwa.
* Zvitsva: Auto-detection pakutanga-kugonesa yeCloudflare / proxy posture ingangovapo ine admin notice ye one-click "Shandisa marongero aonekwa". plugin haimbonyori pamusoro pemakoshero ako akachengetwa; kana traffic inotevera ikaratidza kuti config yako haichawirirani nechokwadi (semuenzaniso Cloudflare yakachinja CIDR ranges uye proxy CIDR yako yava yekare), notice yemismatch isingabviswe inoratidza update inokurudzirwa.
* Yakagadziriswa: Invisible mode haichadzikisi chinyararire `cap_security_level` kuFAST — level yakagadzirirwa neadmin inoremekedzwa. `wu_cap_server_security_level` filter itsva iripo yemasaiti anoda logic yakagadzirwa zvakasiyana.
* Yakagadziriswa: Statistics `rate_limits_triggered` counter zvino inowedzera pablock yega yega, kwete chete pane nzira isingawanzoitika ye post-success backstop.
* Yakagadziriswa: `Captcha_Core::get_client_ip()` zvino ndiyo sosi imwe chete yechokwadi pakupa IP yemushanyi mu rate limiter, captcha providers (reCAPTCHA + hCaptcha `siteverify`), uye statistics — ichivhara nzira ye spoofing apo zvikumbiro zvakananga ku origin-server zvine `CF-Connecting-IP` header yakanyeperwa zvaigona kuiswa mubucket neIP yakanyeperwa panzvimbo yepeer chaiyo.
* Yakagadziriswa: WooCommerce classic checkout rate-limit gate zvino inotanga pa`template_redirect` (priority 1) panzvimbo pe`woocommerce_before_checkout_form`. Hook yepadanho re form haitombotangi kana cart isina chinhu, saka flood traffic isingambo wedzeri product yaipfuura limiter zvachose.
* Yakagadziriswa: WooCommerce pay-for-order rate-limit gate zvino inotanga pa`template_redirect` panzvimbo pe`woocommerce_before_pay_action`. Iyo yekupedzisira inotanga chete mushure mekunge `wp_verify_nonce('woocommerce-pay')` yabudirira, zvinoreva kuti unauth attackers (iyo threat model chaiyo) vaisambotanga limiter.
* Yakagadziriswa: WooCommerce Store API (blocks) checkout rate-limit gate zvino inotanga pa`rest_pre_dispatch` panzvimbo pe`woocommerce_store_api_checkout_update_order_from_request`. Iyo yekupedzisira inotanga chete mushure mekunge Store API yasimbisa cart nemafield ekubhadhara, saka unauth bots dzaigamuchira 400 kubva kuvalidator uye dzaisambobata limiter.
* Yakagadziriswa: Ultimate Multisite inline-login rate-limit gate zvino inotanga pa`wu_ajax_nopriv_wu_inline_login` priority 1 (uye mirror ye logged-in) panzvimbo pe`wu_before_inline_login`. Iyo yekupedzisira inotanga chete mushure mekunge `check_ajax_referer('wu_checkout')` yabudirira, saka unauth bots dzisina wu_checkout nonce inoshanda dzaigamuchira 403 uye dzaisambobata limiter.
* Yakagadziriswa: `Rate_Limiter::enforce()` zvino inoshandisa guard ye once-per-request ine key ye`surface|ip`, saka upstream hooks dzinotanga kaviri pa render (kunyanya `wu_setup_checkout` muUltimate Multisite) hadzichadimburi threshold ye rate-limit inoshanda nepakati.
* Yakagadziriswa: Rate-limit surface gates hadzichabvunzi `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter). Filter iyoyo inoratidza kuti "captcha yatobatwa neimwe surface" uye yakazvimirira kubva pakudzivirirwa kweflood — integration yeWooCommerce yainge ichiibata kuti isvetuke captcha yeWordPress login kana Woo nonce iripo, izvo zvakapinda mukuverenga rate uye zvakabvumira Woo POSTs kunzvenga limiter. `wu_cap_rate_limit_whitelist_ip` filter yakanyatsogadzirirwa rate-limit ndiyo chete bypass inoshanda zvino.

Version: 1.3.2 - Yakaburitswa musi wa2026-01-27
* Yakagadziriswa: Cap widget isiri kuratidzwa pama checkout forms anoshandisa Elementor kana mamwe page builders
* Yakagadziriswa: cap-widget custom element yaibviswa ne wp_kses() sanitization
* Yakavandudzwa: Shandisa callable content yecheckout captcha field kuti upfuure HTML filtering
* Yakavandudzwa: JavaScript yakarerutswa ine fallback yemamiriro akaoma

Version: 1.3.1 - Yakaburitswa musi wa2026-01-26
* Yakagadziriswa: Cap Captcha invisible mode isiri auto-solving pama Ultimate Multisite checkout forms ane dynamic
* Yakavandudzwa: Cap checkout script zvino inoshandisa MutationObserver kuona widgets dzinoiswa dynamically
* Yakavandudzwa: Yakawedzera checkout button interception kuti imirire token isati yatumirwa

Version: 1.3.0 - Yakaburitswa musi wa2026-01-27
* Itsva: WooCommerce Blocks checkout kubatanidzwa neStore API fetch interception
* Itsva: Rutsigiro rwecaptcha isingaoneki yeWooCommerce checkout (hCaptcha isingaoneki, reCAPTCHA v2 isingaoneki, v3)
* Itsva: Peji rezvirongwa rakazvimirira rekushandisa pasina Ultimate Multisite
* Itsva: Jetpack Autoloader yekudzivirira kusawirirana kwezvinotsamira pazviri
* Yakagadziriswa: hCaptcha isiri kuratidzwa paUltimate Multisite checkout ine zvemukati zvinotakurwa neAJAX
* Yakagadziriswa: Captcha isiri kuzorodzwa/kusetwazve kana zvikanganiso zvekusimbisa fomu zvikaitika
* Yakagadziriswa: hCaptcha isiri kuoneka papeji yeWooCommerce checkout
* Yakagadziriswa: kukanganisa kwekirasi ye reCAPTCHA isina kuwanikwa (yakawedzera google/recaptcha PHP library)
* Yakavandudzwa: Kuonekwa kwezvikanganiso kuburikidza neWordPress hooks, MutationObserver, uye AJAX interception
* Yakavandudzwa: Tsananguro dzezvirongwa zvino dzinosanganisira dashboard URLs dzemakiyi eAPI

Version: 1.2.2 - Yakaburitswa musi wa2026-01-24
* Yakagadziriswa: Captcha isiri kuratidzwa paUltimate Multisite Login Form Element (kusawirirana kwezita refirita yefomu)
* Yakagadziriswa: Cap widget HTML ichibviswa ne wp_kses() sanitization
* Yakagadziriswa: JavaScript selectors isingawani mafomu ane maslashes mu element IDs
* Yakawedzerwa: Filter hook `wu_kses_allowed_html` yeclassaddons kuti awedzere HTML tags anotenderwa
* Yakabviswa: Mafaira eJavaScript ekare asisashandi akatsiviwa nema scripts akanangana nemupi

Version: 1.2.1 - Yakaburitswa musi wa2026-01-23

* Yakagadziriswa: Kusimbiswa kweCap Captcha token kuchikundikana munzvimbo dze multisite (ikozvino inoshandisa network-wide transients)
* Yakagadziriswa: Captcha zvino inoratidzwa zvakafanana kuvashandisi vese zvisinei nemamiriro ekupinda
* Yakagadziriswa: Kusawirirana pakati pekuratidzwa kwecaptcha nekusimbiswa kwakakonzera kukundikana kwecheckout

Version: 1.2.0 - Yakaburitswa musi wa2026-01-21

* Itsva: Cap Captcha - captcha yeproof-of-work inogarwa wega, inogoneswa nekusarudzika pakumisikidzwa
* Itsva: Dziviriro isina kugadziridzwa - shandisa addon uye unodzivirirwa pakarepo
* Itsva: Dhizaini yevanopa captcha yakasiyana-siyana yekuwedzera zviri nyore
* Itsva: WooCommerce Store API checkout dziviriro kubva pakuedzwa kwemakadhi
* Itsva: Dashboard yekutevera manhamba inoratidza matambudziko, kusimbiswa, uye kurwiswa kwakavharwa
* Itsva: Mapreseti edanho rekuchengeteka (Fast, Medium, Max) ekuoma kweCap Captcha
* Itsva: Makirasi ebhesi abstract evanopa reCAPTCHA ne hCaptcha
* Yakavandudzwa: Codebase yakarongedzwazve kuita makirasi evanopa ane zvikamu
* Yakavandudzwa: Kupatsanurwa kuri nani kwezvinhu zvine chekuita nekirasi yemaneja yakatsaurirwa
* Fixed: Security improvements for $_SERVER variable sanitization
* Yakagadziriswa: PHPUnit test configuration yezvibvumirano zvekutumidza mazita zveWordPress

Version: 1.0.1 - Yakaburitswa musi wa2025-09-28

* Tumidzazve prefix kuti ive ultimate-multisite; gadziridza text domain; kusimudzira vhezheni.
