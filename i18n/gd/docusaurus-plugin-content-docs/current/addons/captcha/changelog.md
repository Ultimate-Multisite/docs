---
title: Captcha Loga nan atharraichean
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Loga-atharrachaidhean Captcha

Tionndadh: 1.5.0 - Air fhoillseachadh air 2026-05-22
* Ùr: Cuingealaiche reata le stad chruaidh — cunntaidh e gach GET agus POST air uachdaran fo dhìon captcha (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) agus freagraidh e le HTTP 429, bann-cinn `Retry-After`, agus cadal tarpit air thuaiream (1–5s, le crìoch chruaidh aig 15s).
* Ùr: Roghainnean `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` gus uinneag an tarpit a ghleusadh.
* Ùr: Criathrag `wu_cap_rate_limit_whitelist_ip` gus raointean IP earbsach a shaoradh.
* Ùr: Gnìomh `wu_cap_rate_limit_will_block` a thèid a chur an gnìomh sa bhad mus tèid am freagairt stad-chruaidh a chur.
* Ùr: Lorg IP cliaint a sheasas an aghaidh mealladh. Tha `Captcha_Core::get_client_ip()` (an tùs fìrinn airson iuchraichean bucaid cuingealachaidh reata, captcha siteverify `remoteip`, agus hashes IP staitistig) a-nis a’ cur an gnìomh modail earbsa teann: ’s e REMOTE_ADDR an làr, thèid `CF-Connecting-IP` urramachadh a-mhàin nuair a tha an co-aoisean sa bhad taobh a-staigh raon IP Cloudflare làithreach, agus thèid `X-Forwarded-For` urramachadh a-mhàin nuair a tha an co-aoisean sa bhad ann an liosta nam proxies earbsach a rèitich an rianaire, le coiseachd bho dheas gu clì a leumas thairis air hopan earbsach/CF mus socraich e air IP an neach-tadhail.
* Ùr: Roghainn `cap_trust_cloudflare_headers` (bunaiteach OFF) — tagh a-steach do dh’earbsa `CF-Connecting-IP` nuair a tha thu air cùl Cloudflare. Tha am plugan a’ tighinn le dealbh CIDR Cloudflare pacaichte agus ga ùrachadh gach seachdain tro wp-cron le cùl-taic pacaichte ma dh’fhàillig an t-ùrachadh.
* Ùr: Roghainn `cap_trusted_proxies` — textarea de CIDRan no IPan lom (aon gach loidhne, ceadaichte beachdan `#`) a’ liostadh do proxies / load-balancers fhèin air an loidhne-aghaidh. Às aonais seo, thèid `X-Forwarded-For` a leigeil seachad eadhon nuair a tha an cuingealaiche reata an comas.
* Ùr: Fèin-lorg aig a’ chiad chomasachadh air suidheachadh coltach Cloudflare / proxy le fios rianaire aon-bhriog “Cuir an sàs na roghainnean a chaidh a lorg”. Cha sgrìobh am plugan thairis air na luachan a shàbhail thu gu bràth; ma tha trafaig às dèidh sin a’ moladh nach eil an rèiteachadh agad a’ freagairt ri fìrinn tuilleadh (m.e. dh’atharraich Cloudflare raointean CIDR agus tha do proxy CIDR a-nis sean), nochdaidh fios mì-fhreagarrachd nach gabh a chur às leis an ùrachadh a thathar a’ moladh.
* Ceartaichte: Chan eil modh do-fhaicsinneach a-nis a’ lughdachadh `cap_security_level` gu FAST gu sàmhach — thèid urram a thoirt don ìre a rèitich an rianaire. Tha criathrag ùr `wu_cap_server_security_level` ri fhaighinn do làraichean a tha ag iarraidh loidsig shònraichte.
* Ceartaichte: Tha cunntair staitistig `rate_limits_triggered` a-nis ag àrdachadh air gach bacadh, chan ann a-mhàin air an t-slighe backstop ainneamh às dèidh soirbheachais.
* Ceartaichte: Tha `Captcha_Core::get_client_ip()` a-nis na aon tùs fìrinn airson sònrachadh IP luchd-tadhail air feadh a’ chuingealaiche reata, solaraichean captcha (reCAPTCHA + hCaptcha `siteverify`), agus staitistig — a’ dùnadh vector meallta far am biodh iarrtasan dìreach gu frithealaiche tùsail le bann-cinn `CF-Connecting-IP` meallta air an cur ann am bucaid leis an IP mheallta an àite an fhìor cho-aoisean.
* Ceartaichte: Tha geata cuingealachaidh reata checkout clasaigeach WooCommerce a-nis a’ ruith air `template_redirect` (prìomhachas 1) an àite `woocommerce_before_checkout_form`. Cha ruith an dubhan aig ìre an fhoirm nuair a tha a’ chairt falamh, mar sin bha trafaig tuil nach cuir toradh ris a-riamh a’ seachnadh a’ chuingealaiche gu tur.
* Ceartaichte: Tha geata cuingealachaidh reata pay-for-order WooCommerce a-nis a’ ruith air `template_redirect` an àite `woocommerce_before_pay_action`. Cha ruith am fear mu dheireadh ach às dèidh do `wp_verify_nonce('woocommerce-pay')` soirbheachadh, a tha a’ ciallachadh nach do bhrosnaich luchd-ionnsaigh gun dearbhadh (am fìor mhodail chunnartan) an cuingealaiche a-riamh.
* Ceartaichte: Tha geata cuingealachaidh reata checkout WooCommerce Store API (blocks) a-nis a’ ruith air `rest_pre_dispatch` an àite `woocommerce_store_api_checkout_update_order_from_request`. Cha ruith am fear mu dheireadh ach às dèidh do Store API a’ chairt agus na raointean bileachaidh a dhearbhadh, mar sin fhuair botaichean gun dearbhadh 400 bhon dearbhadair agus cha do thuit iad air a’ chuingealaiche a-riamh.
* Ceartaichte: Tha geata cuingealachaidh reata inline-login Ultimate Multisite a-nis a’ ruith air `wu_ajax_nopriv_wu_inline_login` prìomhachas 1 (agus an sgàthan le logadh a-steach) an àite `wu_before_inline_login`. Cha ruith am fear mu dheireadh ach às dèidh do `check_ajax_referer('wu_checkout')` soirbheachadh, mar sin fhuair botaichean gun dearbhadh gun nonce wu_checkout dligheach 403 agus cha do thuit iad air a’ chuingealaiche a-riamh.
* Ceartaichte: Tha `Rate_Limiter::enforce()` a-nis a’ cur an sàs dìon aon-uair-gach-iarrtas air a iuchrachadh le `surface|ip`, mar sin chan eil dubhan upstream a ruitheas dà uair gach render (gu sònraichte `wu_setup_checkout` ann an Ultimate Multisite) a-nis a’ lethachadh stairsneach èifeachdach a’ chuingealachaidh reata.
* Ceartaichte: Chan eil geataichean uachdair cuingealachaidh reata a-nis a’ co-chomhairleachadh `Captcha_Core::is_whitelisted()` (criathrag `wu_captcha_whitelisted`). Tha an criathrag sin a’ comharrachadh “captcha air a làimhseachadh mu thràth le uachdar eile” agus tha e neo-eisimeileach bho dhìon an aghaidh tuil — bha amalachadh WooCommerce ga dubhadh gus captcha logadh a-steach WordPress a leum nuair a bha nonce Woo an làthair, rud a shil a-steach do chunntadh reata agus a leig le POSTan Woo an cuingealaiche a sheachnadh. ’S e an criathrag sònraichte do chuingealachadh reata `wu_cap_rate_limit_whitelist_ip` an aon sheachnadh a tha a-nis a’ buntainn.

Tionndadh: 1.3.2 - Air fhoillseachadh air 2026-01-27
* Ceartaichte: Widget Cap nach robh ga renderadh air foirmean checkout a’ cleachdadh Elementor no page builders eile
* Ceartaichte: Eileamaid ghnàthaichte cap-widget ga rùsgadh le slàinteachadh wp_kses()
* Leasaichte: Cleachd susbaint callable airson raon captcha checkout gus sìoladh HTML a sheachnadh
* Leasaichte: JavaScript air a shìmpleachadh le fallback airson cùisean iomallach

Tionndadh: 1.3.1 - Air fhoillseachadh air 2026-01-26
* Ceartaichte: Modh do-fhaicsinneach Cap Captcha gun a bhith ga fhuasgladh gu fèin-obrachail air foirmean checkout Ultimate Multisite dinamach
* Leasaichte: Tha sgriobt checkout Cap a-nis a’ cleachdadh MutationObserver gus widgets a chaidh a luchdadh gu dinamach a lorg
* Leasaichte: Chaidh glacadh putan checkout a chur ris gus feitheamh ri token mus tèid a chur a-steach

Version: 1.3.0 - Air fhoillseachadh air 2026-01-27
* Ùr: Amalachadh checkout WooCommerce Blocks le eadar-ghlacadh fetch Store API
* Ùr: Taic captcha do-fhaicsinneach airson checkout WooCommerce (hCaptcha do-fhaicsinneach, reCAPTCHA v2 do-fhaicsinneach, v3)
* Ùr: Duilleag roghainnean leis fhèin airson cleachdadh às aonais Ultimate Multisite
* Ùr: Jetpack Autoloader airson casg air còmhstri eisimeileachdan
* Ceartaichte: hCaptcha gun a bhith ga renderadh air checkout Ultimate Multisite dinimigeach (susbaint air a luchdadh le AJAX)
* Ceartaichte: Captcha gun ùrachadh/ath-shuidheachadh nuair a thachras mearachdan dearbhaidh foirm
* Ceartaichte: hCaptcha gun nochdadh air duilleag checkout WooCommerce
* Ceartaichte: Mearachd nach deach clas reCAPTCHA a lorg (chaidh leabharlann PHP google/recaptcha a chur ris)
* Leasaichte: Lorg mhearachdan tro hooks WordPress, MutationObserver, agus eadar-ghlacadh AJAX
* Leasaichte: Tha tuairisgeulan roghainnean a-nis a’ gabhail a-steach URLan dashboard airson iuchraichean API

Version: 1.2.2 - Air fhoillseachadh air 2026-01-24
* Ceartaichte: Captcha gun taisbeanadh air Eileamaid Foirm Logadh a-steach Ultimate Multisite (mì-fhreagairt ainm criathraidh foirm)
* Ceartaichte: HTML widget Cap ga rùsgadh le glanadh wp_kses()
* Ceartaichte: Selectors JavaScript gun fhoirmean a lorg le slashes ann an IDan eileamaid
* Air a chur ris: Filter hook `wu_kses_allowed_html` airson classaddons gus tagaichean HTML ceadaichte a leudachadh
* Air a thoirt air falbh: Faidhlichean JavaScript còd marbh air an cur an àite le sgriobtaichean sònraichte do sholaraiche

Version: 1.2.1 - Air fhoillseachadh air 2026-01-23

* Ceartaichte: Dearbhadh token Cap Captcha a’ fàiligeadh ann an àrainneachdan multisite (a-nis a’ cleachdadh transients air feadh an lìonraidh)
* Ceartaichte: Tha Captcha a-nis a’ renderadh gu cunbhalach do gach neach-cleachdaidh ge bith dè an inbhe logaidh a-steach
* Ceartaichte: Mì-fhreagairt eadar renderadh captcha agus dearbhadh a dh’adhbhraich fàilligidhean checkout

Version: 1.2.0 - Air fhoillseachadh air 2026-01-21

* Ùr: Cap Captcha - captcha proof-of-work fèin-aoigheachd, air a chomasachadh gu bunaiteach nuair a ghnìomhaichear e
* Ùr: Dìon gun rèiteachadh - cuir an addon an gnìomh agus tha thu air do dhìon sa bhad
* Ùr: Ailtireachd solaraiche captcha polymorphic airson leudachadh furasta
* Ùr: Dìon checkout WooCommerce Store API an aghaidh ionnsaighean deuchainn chairtean
* Ùr: Dashboard tracadh staitistig a’ sealltainn dhùbhlain, dhearbhaidhean, agus ionnsaighean bacaichte
* Ùr: Presets ìre tèarainteachd (Luath, Meadhanach, As àirde) airson duilgheadas Cap Captcha
* Ùr: Clasaichean bunaiteach eas-chruthach airson solaraichean reCAPTCHA agus hCaptcha
* Leasaichte: Codebase air ath-structaradh gu clasaichean solaraiche modúlach
* Leasaichte: Dealachadh nas fheàrr de dhleastanasan le clas manaidsear sònraichte
* Fixed: Security improvements for $_SERVER variable sanitization
* Ceartaichte: Rèiteachadh deuchainn PHPUnit airson gnàthasan ainmeachaidh WordPress

Version: 1.0.1 - Air fhoillseachadh air 2025-09-28

* Ath-ainmich ro-leasachan gu ultimate-multisite; ùraich text domain; àrdachadh tionndaidh.
