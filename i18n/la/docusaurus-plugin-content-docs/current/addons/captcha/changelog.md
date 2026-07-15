---
title: Captcha Diarium mutationum
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha Index Mutationum

Versio: 1.5.0 - Emissa die 2026-05-22
* Novum: Limitator frequentiae sistens — numerat omne GET et POST in superficiebus captcha-protectis (wp-login / register / lost-password / commentaria, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) et respondet cum HTTP 429, capite `Retry-After`, et mora tarpit fortuita (1–5s, limite duro ad 15s).
* Novum: Parametra `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` ad fenestram tarpit temperandam.
* Novum: Filtrum `wu_cap_rate_limit_whitelist_ip` ad intervalla IP credita excipienda.
* Novum: Actio `wu_cap_rate_limit_will_block` quae statim ante responsum sistens missum accenditur.
* Novum: Detectio IP clientis simulationi resistens. `Captcha_Core::get_client_ip()` (fons veritatis pro clavibus receptaculorum limitationis frequentiae, captcha siteverify `remoteip`, et hashes IP statisticarum) nunc exemplar fiduciae strictum exigit: REMOTE_ADDR est fundamentum, `CF-Connecting-IP` honoratur solum cum par immediatum intra hodiernum intervallum IP Cloudflare est, et `X-Forwarded-For` honoratur solum cum par immediatum in indice proxy creditorum ab administratore configurato est, cum processu a dextra ad sinistram qui saltus creditos/CF praeterit antequam in IP visitatoris consistat.
* Novum: Parametrum `cap_trust_cloudflare_headers` (praedefinite OFF) — fiduciam `CF-Connecting-IP` elige cum post Cloudflare es. Plugin imaginem Cloudflare CIDR inclusam fert eamque singulis hebdomadibus per wp-cron renovat, cum substituto incluso si renovatio deficit.
* Novum: Parametrum `cap_trusted_proxies` — area textus CIDR-orum vel IP nudarum (una per lineam, commentaria `#` permissa) quae proprios proxies anteriores / distributores oneris enumerat. Sine hoc, `X-Forwarded-For` neglegitur etiam cum limitator frequentiae habilitatus est.
* Novum: Auto-detectio prima habilitatione habitus probabilis Cloudflare / proxy cum admonitione administratoris uno clicco "Adhibe parametra detecta". Plugin valores servatos tuos numquam suprascribit; si commeatus subsequens indicat configurationem tuam iam non congruere realitati (ex. Cloudflare intervalla CIDR mutavit et CIDR proxy tui nunc obsoletum est), admonitio discrepantiae non dimittenda renovationem commendatam ostendit.
* Emendatum: Modus invisibilis iam non tacite `cap_security_level` ad FAST deprimit — gradus ab administratore configuratus honoratur. Novum filtrum `wu_cap_server_security_level` praesto est pro sitibus quae logicam propriam volunt.
* Emendatum: Numerator statisticarum `rate_limits_triggered` nunc in omni obstructione augetur, non solum in rara via subsidiaria post prosperum.
* Emendatum: `Captcha_Core::get_client_ip()` nunc est unicus fons veritatis pro attributione IP visitatoris per limitatorem frequentiae, praebitores captcha (reCAPTCHA + hCaptcha `siteverify`), et statisticas — claudens vectorem simulationis quo petitiones directae ad originis ministrum ferentes caput falsum `CF-Connecting-IP` secundum IP fictam potius quam parem verum in receptaculum coniectae essent.
* Emendatum: Porta limitationis frequentiae WooCommerce classic checkout nunc in `template_redirect` (prioritate 1) accenditur loco `woocommerce_before_checkout_form`. Hamus gradu formae numquam accenditur cum carrus vacuus est, ita commeatus inundans qui numquam productum addit limitatorem omnino praeteribat.
* Emendatum: Porta limitationis frequentiae WooCommerce pay-for-order nunc in `template_redirect` accenditur loco `woocommerce_before_pay_action`. Haec posterior solum accenditur postquam `wp_verify_nonce('woocommerce-pay')` succedit, quod significat oppugnatores non authentificatos (verum exemplar periculi) limitatorem numquam movisse.
* Emendatum: Porta limitationis frequentiae WooCommerce Store API (blocks) checkout nunc in `rest_pre_dispatch` accenditur loco `woocommerce_store_api_checkout_update_order_from_request`. Haec posterior solum accenditur postquam Store API carrum et campos solutionis probat, ita bots non authentificati 400 a validatore acceperunt et limitatorem numquam excitaverunt.
* Emendatum: Porta limitationis frequentiae Ultimate Multisite inline-login nunc in `wu_ajax_nopriv_wu_inline_login` prioritate 1 (et speculo pro usoribus ingressis) accenditur loco `wu_before_inline_login`. Haec posterior solum accenditur postquam `check_ajax_referer('wu_checkout')` succedit, ita bots non authentificati sine valido wu_checkout nonce 403 acceperunt et limitatorem numquam excitaverunt.
* Emendatum: `Rate_Limiter::enforce()` nunc custodiam semel-per-petitionem adhibet clave `surface|ip`, ita hami superiores qui bis per renditionem accenduntur (praesertim `wu_setup_checkout` in Ultimate Multisite) limen effectivum limitationis frequentiae iam non dimidiant.
* Emendatum: Portae superficierum limitationis frequentiae iam non consulunt `Captcha_Core::is_whitelisted()` (filtrum `wu_captcha_whitelisted`). Illud filtrum significat "captcha iam ab alia superficie tractum est" et a tutela contra inundationem separatum est — integratio WooCommerce id adhibebat ut captcha ingressus WordPress praeteriret cum Woo nonce adesset, quod in numerationem frequentiae emanabat et permittebat Woo POSTs limitatorem vitare. Filtrum proprium limitationis frequentiae `wu_cap_rate_limit_whitelist_ip` est unica via praeteritionis quae nunc valet.

Versio: 1.3.2 - Emissa die 2026-01-27
* Emendatum: Widget Cap in formis checkout utens Elementor aut aliis paginarum constructoribus non reddebatur
* Emendatum: Elementum consuetum cap-widget per sanitationem wp_kses() removebatur
* Melioratum: Utere contento callable pro campo captcha checkout ut filtrationem HTML praetereat
* Melioratum: JavaScript simplicatum cum substituto pro casibus marginalibus

Versio: 1.3.1 - Emissa die 2026-01-26
* Emendatum: Modus invisibilis Cap Captcha in formis checkout dynamicis Ultimate Multisite se ipse non solvebat
* Melioratum: Scriptum Cap checkout nunc MutationObserver utitur ad widgets dynamice oneratos detegendos
* Melioratum: Addita interceptio globuli checkout ut token ante submissionem exspectet

Version: 1.3.0 - Edita die 2026-01-27
* Novum: WooCommerce Blocks integratio solutionis cum interceptione petitionis Store API
* Novum: Subsidium captcha invisibilis pro WooCommerce solutione (hCaptcha invisibile, reCAPTCHA v2 invisibile, v3)
* Novum: Pagina optionum sui iuris ad usum sine Ultimate Multisite
* Novum: Jetpack Autoloader ad conflictus dependentiarum praecavendos
* Emendatum: hCaptcha non reddebatur in dynamica Ultimate Multisite solutione (contentum per AJAX oneratum)
* Emendatum: Captcha non renovabatur/restituebatur cum errores validationis formae occurrerent
* Emendatum: hCaptcha non apparebat in pagina solutionis WooCommerce
* Emendatum: error classis reCAPTCHA non inventae (addita bibliotheca PHP google/recaptcha)
* Melioratum: Deprehensio errorum per uncinos WordPress, MutationObserver, et interceptionem AJAX
* Melioratum: Descriptiones optionum nunc URLs Dashboard pro clavibus API continent

Version: 1.2.2 - Edita die 2026-01-24
* Emendatum: Captcha non ostendebatur in Elemento Formae Introitus Ultimate Multisite (nominis colatri formae discrepantia)
* Emendatum: HTML elementi Cap per purificationem wp_kses() removebatur
* Emendatum: Selectores JavaScript formas cum virgulis obliquis in ID elementorum non inveniebant
* Additum: Uncus colatri `wu_kses_allowed_html` pro classaddons ad tags HTML permissas extendendas
* Remotum: Fasciculi JavaScript mortui substituti scriptis propriis pro singulis praebitoribus

Version: 1.2.1 - Edita die 2026-01-23

* Emendatum: Validatio tesserae Cap Captcha in ambitus multisite deficiebat (nunc transientibus per totum rete utitur)
* Emendatum: Captcha nunc constanter omnibus usoribus redditur, cuiuscumque status introitus
* Emendatum: Discrepantia inter redditionem et validationem captchae quae defectus solutionis efficiebat

Version: 1.2.0 - Edita die 2026-01-21

* Novum: Cap Captcha - captcha probationis laboris in proprio hospitio, per defaltam in activatione habilitata
* Novum: Protectio sine configuratione - addon activa et statim protectus es
* Novum: Architectura praebitoris captchae polymorpha ad facilem extensibilitatem
* Novum: Protectio solutionis WooCommerce Store API contra impetus probationis chartarum
* Novum: Dashboard statisticarum vestigationis ostendens provocationes, verificationes, et impetus obstructos
* Novum: Praedefinitiones gradus securitatis (Celer, Medius, Max) pro difficultate Cap Captcha
* Novum: Classes basales abstractae pro praebitoribus reCAPTCHA et hCaptcha
* Melioratum: Basis codicis in classes praebitorum modulares refacta
* Melioratum: Melior separatio officiorum cum classe procuratoris dedicata
* Fixed: Security improvements for $_SERVER variable sanitization
* Emendatum: Configuratio probationis PHPUnit pro conventionibus nominum WordPress

Version: 1.0.1 - Edita die 2025-09-28

* Praefixum mutatum in ultimate-multisite; dominium textus renovatum; incrementum versionis.
