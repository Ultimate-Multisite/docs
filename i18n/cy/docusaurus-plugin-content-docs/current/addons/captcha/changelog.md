---
title: Llyfrg y newidiadau Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Changelog y Captcha {#captcha-changelog}

Versi: 1.5.0 - Rheoliwyd ar gyfer 22-05-2026
* New: Hard-stop rate limiter — cyfrifennu pob GET a POST ar gyflymau wedi'u gwarchod (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) ac yn cyflwyno HTTP 429, header `Retry-After`, a chwylio tarpit randomiseiddiol (1–5s, wedi'i gyfyngu ar 15s).
* New: Cyd-ddyniadau `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` i dregnu'r cyfnod tarpit.
* New: Ffilter `wu_cap_rate_limit_whitelist_ip` i gael y cyflwyniad o ddifrifau IP a fydd yn cael eu gwarchod.
* New: Gweithredol `wu_cap_rate_limit_will_block` sy'n gweithio yn gyflym قبل y cyflwyniad o stop hard-stop.
* New: Gyfeiriad client-IP a chyfeiriad-gofal. Mae `Captcha_Core::get_client_ip()` (y ffurf gwirioneddol ar gyfer cyfrifennau bucket rate-limit, captcha siteverify `remoteip`, a hasioedd IP) yn gael ei model ddeallt: REMOTE_ADDR yw'r cyntaf, CF-Connecting-IP yn cael ei chynllunio dim ond pan fydd y cyfeiriad y cyflwyniad yn ymddangos mewn cyfathrebu Cloudflare ar gyfer cyfrifennau IP, a X-Forwarded-For yn cael ei chynllunio dim ond pan fydd y cyfeiriad y cyflwyniad yn y llyfrgofal proxy a ddefnyddir gan y admin, gyda chyfathrebu o'r ddefnyddiwr sy'n gwneud y cyflym (right-to-left walk) sy'n cael ei gael ar gyfer y cyfeiriad y ddefnyddiwr.
* New: Cyd-ddyniad `cap_trust_cloudflare_headers` (default OFF) — rhoi'r chymryd i chynllunio trust i `CF-Connecting-IP` pan fydd yn cael ei gael ar gyfer Cloudflare. Mae’r plugin yn cyflwyno snapshot CIDR Cloudflare wedi'i cyddeall a'i newid o hyd mewn cron gyda fallback wedi'i cyddeall os oes anodd y newid.
* New: Cyd-ddyniad `cap_trusted_proxies` — teitl am ddefnyddio CIDRs neu IPau gwaith (un perthynol ar y llinell, allai cael cyfeiriadau `#`) sy'n dangos eich proxy / load-balancers o'r ffurf. Bez eu dim ond hynny, bydd X-Forwarded-For yn cael ei gwarchod er gwaith gan y rate limiter wedi'i chynllunio.

* New: Mae'r cyntaf: canolbwyntio'r ddefnyddio'r Cloudflare / proxy yn sicr gyda nodiad admin un-clic "Cyflawni'r setau a ddod i'r gael". Mae'r plugin yn gwarchio'ch gaelau wedi'u cadw; os mae trafau nesaf yn dangos bod eich cyfathrebu yn anghyffurfio'r rheol (e.e., roedd Cloudflare wedi newid y CIDR-iau ac yw'r CIDR proxy eich bod yn anhygo), bydd nodiad ddiffygio sy'n cael ei gweld yn rhyfeddol yn dangos y cyfathrebu a ddylai ei newid.
* Fixed: Mae'r modd gwahanol yn cael ei ffurfio allan, nid yw'r `cap_security_level` yn cael ei ddefnyddio'n silentor i FAST — mae'r lefel a cyflawni'r admin yn cael ei chwanegu. Mae un filtru newydd, `wu_cap_server_security_level`, ar gael ar gyfer y safleoedd sydd eisiau logi penodol.
* Fixed: Mae'r cyfrifau `rate_limits_triggered` yn llwybr ar bob bloc, nid yn unig ar y ffordd ddiweddarau ar ôl y cyflawniad.
* Fixed: Mae `Captcha_Core::get_client_ip()` yn cael ei fod yn gyfnod gwaith unig am y cyflwyniad IP'r y myfyrwyr arall ar draws y rheol-amgylchedd, y cyfathrebu captcha (reCAPTCHA + hCaptcha `siteverify`), a'r cyfrifau — mae hyn yn gwblhau'r ffordd ddefnyddio'r IP'r angenwr gyda chyfeiriad `CF-Connecting-IP` wedi'i gweithredu, gan fod y myfyrwyr sydd yn cael eu cyflwyno bydd yn cael eu cyfrifio gan yr IP angenwr yn lle y myfyrwyr cywir.
* Fixed: Mae'r gwahaniaeth rheol-amgylchedd WooCommerce classic yn cael ei chwarae ar `template_redirect` (prioriad 1) yn lle `woocommerce_before_checkout_form`. Mae'r hook-level y ffurf yn cael ei chwarae nid oes cart yn llwyr, felly roedd trafau drosol sydd wedi dod i'r cart heb ychwanegu produsg yn gwarchio'r rheol amlwg.

* Arwain: Mae wedi cael ei gyfaddrefnu: mae'r gate cyflawniad (rate-limit gate) ar gyfer y WooCommerce pay-for-order yn fynd ar `template_redirect` yn lle `woocommerce_before_pay_action`. Mae'r olaf yn fynd yn ôl ar ôl i `wp_verify_nonce('woocommerce-pay')` llwyddo, gan ei fod mae cyhoeddau anghyfrifol (y model eiwas yr anomoriol) nid yn cael eu gweithredu.
* Arwain: Mae'r gate cyflawniad ar gyfer y WooCommerce Store API (blocks) checkout yn fynd ar `rest_pre_dispatch` yn lle `woocommerce_store_api_checkout_update_order_from_request`. Mae'r olaf yn fynd yn ôl ar ôl i'r Store API llwybr y cart a'r ffeiliau, felly nid oedd y botau anghyfrifol yn cael cod 400 o'r chyflawniad ac nid oeddent yn gwthio'r cyflawniad.
* Arwain: Mae'r gate cyflawniad ar gyfer y Ultimate Multisite inline-login yn fynd ar `wu_ajax_nopriv_wu_inline_login` gyda priodrwydd 1 (a'r ffurf a ddarganfod) yn lle `wu_before_inline_login`. Mae'r olaf yn fynd yn ôl ar ôl i `check_ajax_referer('wu_checkout')` llwyddo, felly nid oedd y botau anghyfrifol heb nonce wu_checkout gywir yn cael cod 403 ac nid oeddent yn gwthio'r cyflawniad.
* Arwain: Mae `Rate_Limiter::enforce()` yn cyflawni'r gorffennol un-gwrth-gywir ar gyfer y cyflym un-gywir per-request gan ei fod wedi'i gysylltu â `surface|ip`, felly nid oes unrhyw hookau uchel sy'n fynd dros ddwy per render (fel `wu_setup_checkout` yn Ultimate Multisite) yn cael eu hanfodio'r cyflawniad ar gyfer y cyflym effeithiol.

* Gyfe wedi'i gyfystru: Nid yw'r gateau cyflwr ystref (rate-limit surface gates) yn cyfathogh â `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter) anffurfio. Mae'r filter hwn yn dangos "captcha wedi cael ei gael gan ddefnyddwr arall" ac mae'n rhydd â'r amddiffyniad o ddifrifu (flood protection) — roedd y cyfathrebu WooCommerce yn ei gwneud i'r ffilter hwn i sefydlu'r captcha WordPress pan oedd y nonce Woo yn cael ei ddefnyddio i gael ei ddefnyddio'r captcha log-in, gan ddifynnu'r cyfrifau o amddiffyniad ac gael yr POSTs o WooCommerce i fwyta o'r cyflwr. Mae'r ffilter `wu_cap_rate_limit_whitelist_ip` sy'n cyflwyno'r cyfystru am ddifyniad yma yn unigol.

Cyfrif: 1.3.2 - Cyflenwyd ar 2026-01-27
* Gyfeiriad: Nid yw'r widget cap yn dangos ar ffurfau chefed (checkout forms) gan ddefnyddio Elementor neu gweithgribi ar gyfer y peidiad.
* Gyfeiriad: Mae'r element custom o'r widget cap wedi cael ei ddifynnu gan `wp_kses()` sanitization.
* Pwilio: Defnyddio cynnig (callable content) ar gyfer ffurf captcha chefed i ddefnyddio'r filtru HTML.
* Pwilio: Mae'r JavaScript wedi'i symud â chwarae (fallback) ar gyfer ystrefau hanesyddol.

Cyfrif: 1.3.1 - Cyflenwyd ar 2026-01-26
* Gyfeiriad: Nid yw'r modd captcha invisible yn cael ei ddefnyddio'r chefed (checkout forms) sy'n dynnu ar gyfer Ultimate Multisite yn dod olys yn dynamig.
* Pwilio: Mae'r script cap chefed yn defnyddio MutationObserver i ddarganfod widgetau a ddefnyddio yn dynamig.
* Pwilio: Ychwanegu cyfathrebu botllen chefed i gael ei ffordd y token cyn y cyflwyniad.

Versi: 1.3.0 - Rheoliwyd ar gyfer 27-01-2026
* New: Cyfathrebu WooCommerce Blocks gyda ffetrau API Store (Store API fetch interception)
* New: Cyddefnyddio captcha gwahanol am y cyfathrebu WooCommerce (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* New: Peidiad setau (settings page) i ddefnyddio heb Ultimate Multisite
* New: Jetpack Autoloader i prevensio anghyfforddiadau dependynau (dependency conflict prevention)
* Fixed: Nid yn dangos hCaptcha ar gyfathrebu dinamik Ultimate Multisite (cynnwys cynnwys a ddefnyddir AJAX)
* Fixed: Nid yn cyfrifol/refresio captcha pan fydd erosiad validation o ffurfau
* Fixed: Nid yn dangos hCaptcha ar gwefan cyfathrebu WooCommerce
* Fixed: Erosiad "reCAPTCHA class not found" (ychwanegu llyfr PHP google/recaptcha)
* Improved: Cynllunio erosiadau drwy WordPress hooks, MutationObserver, a AJAX interception
* Improved: Mae disgrifiadau setau bellach yn cynnwys URL-au dashboard ar gyfer cyfrannau API

Versi: 1.2.2 - Rheoliwyd ar gyfer 24-01-2026
* Fixed: Nid yn dangos captcha ar Element Cyfathrebu Ultimate Multisite (anwybus ffiltro enw ffurf)
* Fixed: Mae HTML y cap widget yn cael ei ddifyn gan wp_kses() sanitization
* Fixed: Nid yn dod o hyd i ffurfau gyda slaeau mewn ID elementau trwy'r selector JavaScript
* Added: Ffiltro hook `wu_kses_allowed_html` ar gyfer classaddons i ymestri'r tag HTML aelodol a ddefnyddio
* Removed: Fylch gwefan JavaScript wedi'i hanes gan scriptau penodol o'r chyddrefnwr

Versi: 1.2.1 - Rheoliwyd ar gyfer 23-01-2026

* Arwain: Mae'n cap Captcha token validation yn cael ei ddefnyddio mewn amgylchedd multisite (mae'n defnyddio transients arall-gwaith)
* Arwain: Mae'r Captcha yn dangos yn unigol i bobl, nid oes ganddo angen fod wedi cyflwyno
* Arwain: Mae anghyfforddiant rhwng ddarparu a chyfaddef y captcha sydd wedi cael ei gael yn achosi i fethau checkout

Cyfrif: 1.2.0 - Cyflenwyd ar gyfer 2026-01-21

* New: Cap Captcha - captcha gyda gweithrediad cyflwyno (proof-of-work) sydd wedi'i gael yn ei ddefnyddio, mae'n cael ei chynllunio yn defnyddiol ar gyfer y cyflwyniad
* New: Amddiffyniad o ddeall zero - rhwystro'r addon ac byddwch yn cael eich amddiffyn yn gyflym
* New: Archiategol captcha polymorffig i gael ei gyfider yn hawl
* New: Amddiffyniad API WooCommerce ar gyfer checkout yn erbyn y chwaraeau card testio
* New: Dashboard o ddata amgylchion sy'n dangos cyfleiwyr, cyfaddefion, a chwaraeau wedi'u cael eu hanesydd
* New: Presenoldeb lwybr am gystadleuaeth (Fast, Medium, Max) ar gyfer anghyfforddiant Cap Captcha
* New: Clasusau cybasisol abstracta ar gyfer ychwanegwyr reCAPTCHA a hCaptcha
* Improved: Mae'r codwedd yn cael ei ddiffynio eto i clasusau chwarae (provider classes) modur
* Improved: Cyflwyniad gwellter o gyfrifau gyda clasus rheoli (manager class) deddfol
* Fixed: Pwilio amddiffynion ar gyfer sanfyniad y variabl $_SERVER
* Fixed: Cynhyrchu testiau PHPUnit ar gyfer cyflogau WordPress
