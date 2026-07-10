---
title: Jounal chanjman Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Jounal chanjman Captcha {#captcha-changelog}

Version: 1.5.0 - Pibliye nan 2026-05-22
* Nouvo: Limiteur pousantaj ak arè total — konte chak GET ak POST sou sifas ki pwoteje ak captcha (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) epi li reponn ak HTTP 429, yon header `Retry-After`, ak yon dòmi tarpit owaza (1–5s, limite di a 15s).
* Nouvo: Paramèt `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` pou ajiste fenèt tarpit la.
* Nouvo: Filtè `wu_cap_rate_limit_whitelist_ip` pou egzante seri IP ou fè konfyans.
* Nouvo: Aksyon `wu_cap_rate_limit_will_block` ki deklanche touswit anvan yo voye repons arè total la.
* Nouvo: Deteksyon IP kliyan ki reziste kont falsifikasyon. `Captcha_Core::get_client_ip()` (sous verite pou kle bokit limit pousantaj yo, captcha siteverify `remoteip`, ak hash IP estatistik yo) kounye a aplike yon modèl konfyans strik: REMOTE_ADDR se baz la, yo respekte `CF-Connecting-IP` sèlman lè parèy imedya a anndan yon seri IP Cloudflare aktyèl, epi yo respekte `X-Forwarded-For` sèlman lè parèy imedya a nan lis proxy ou fè konfyans admin lan konfigire a, avèk yon mache soti adwat pou ale agoch ki sote hop ou fè konfyans/CF yo anvan li chwazi IP vizitè a.
* Nouvo: Paramèt `cap_trust_cloudflare_headers` (default OFF) — chwazi fè `CF-Connecting-IP` konfyans lè w dèyè Cloudflare. Plugin nan vini ak yon snapshot CIDR Cloudflare entegre epi li rafrechi li chak semèn via wp-cron ak yon fallback entegre si rafrechisman an echwe.
* Nouvo: Paramèt `cap_trusted_proxies` — textarea CIDR oswa IP senp (youn pa liy, kòmantè `#` pèmèt) ki lis pwòp proxy / load-balancer premye liy ou yo. San sa, yo inyore `X-Forwarded-For` menm lè limiteur pousantaj la aktive.
* Nouvo: Oto-deteksyon premye aktivasyon pou posib pozisyon Cloudflare / proxy avèk yon avi admin "Aplike paramèt detekte yo" yon sèl klik. Plugin nan pa janm ranplase valè ou sove yo; si trafik apre sa sijere konfigirasyon ou pa koresponn ak reyalite ankò (pa egzanp Cloudflare chanje seri CIDR yo epi CIDR proxy ou a vin demode), yon avi dezakò ki pa ka fèmen parèt ak mizajou rekòmande a.
* Korije: Mòd envizib pa bese `cap_security_level` an silans ankò pou FAST — nivo admin lan konfigire a respekte. Yon nouvo filtè `wu_cap_server_security_level` disponib pou sit ki vle lojik pèsonalize.
* Korije: Kontè estatistik `rate_limits_triggered` kounye a ogmante sou chak blokaj, pa sèlman sou chemen backstop ra apre siksè a.
* Korije: `Captcha_Core::get_client_ip()` kounye a se sèl sous verite pou atribisyon IP vizitè atravè limiteur pousantaj la, founisè captcha yo (reCAPTCHA + hCaptcha `siteverify`), ak estatistik — sa fèmen yon vektè falsifikasyon kote demann dirèk sou sèvè orijin ki pote yon header `CF-Connecting-IP` fo t ap klase nan bokit dapre IP fo a olye de parèy reyèl la.
* Korije: Pòtay limit pousantaj checkout klasik WooCommerce kounye a deklanche sou `template_redirect` (priyorite 1) olye de `woocommerce_before_checkout_form`. Hook nivo fòm nan pa janm deklanche lè panye a vid, kidonk trafik inondasyon ki pa janm ajoute yon pwodwi t ap kontoune limiteur la nèt.
* Korije: Pòtay limit pousantaj pay-for-order WooCommerce kounye a deklanche sou `template_redirect` olye de `woocommerce_before_pay_action`. Dènye a deklanche sèlman apre `wp_verify_nonce('woocommerce-pay')` reyisi, sa vle di atakan ki pa otantifye (vrè modèl menas la) pa t janm deklanche limiteur la.
* Korije: Pòtay limit pousantaj checkout WooCommerce Store API (blocks) kounye a deklanche sou `rest_pre_dispatch` olye de `woocommerce_store_api_checkout_update_order_from_request`. Dènye a deklanche sèlman apre Store API valide panye a ak chan bòdwo yo, kidonk bots ki pa otantifye yo te resevwa yon 400 nan men validatè a epi yo pa t janm fè limiteur la deklanche.
* Korije: Pòtay limit pousantaj inline-login Ultimate Multisite kounye a deklanche sou `wu_ajax_nopriv_wu_inline_login` priyorite 1 (ak glas pou moun ki konekte a) olye de `wu_before_inline_login`. Dènye a deklanche sèlman apre `check_ajax_referer('wu_checkout')` reyisi, kidonk bots ki pa otantifye san yon nonce wu_checkout valid te resevwa yon 403 epi yo pa t janm fè limiteur la deklanche.
* Korije: `Rate_Limiter::enforce()` kounye a aplike yon gad yon fwa pa demann ki kle sou `surface|ip`, kidonk hooks upstream ki deklanche de fwa pou chak rann (sitou `wu_setup_checkout` nan Ultimate Multisite) pa koupe papòt limit pousantaj efikas la an de ankò.
* Korije: Pòtay sifas limit pousantaj yo pa konsilte `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter) ankò. Filtè sa a siyale "captcha deja jere pa yon lòt sifas" epi li endepandan de pwoteksyon kont inondasyon — entegrasyon WooCommerce la t ap konekte ladan l pou sote captcha koneksyon WordPress la lè yon nonce Woo te prezan, sa ki te koule nan konte pousantaj la epi pèmèt POST Woo yo evite limiteur la. Filtè espesifik pou limit pousantaj `wu_cap_rate_limit_whitelist_ip` la se sèl kontounman ki aplike kounye a.

Version: 1.3.2 - Pibliye nan 2026-01-27
* Korije: Widget Cap pa t rann sou fòm checkout ki itilize Elementor oswa lòt page builders
* Korije: Eleman pèsonalize cap-widget t ap retire pa sanitizasyon wp_kses()
* Amelyore: Itilize kontni callable pou chan captcha checkout la pou kontoune filtraj HTML
* Amelyore: JavaScript senplifye ak fallback pou ka limit yo

Version: 1.3.1 - Pibliye nan 2026-01-26
* Korije: Mòd envizib Cap Captcha pa t rezoud otomatikman sou fòm checkout Ultimate Multisite dinamik yo
* Amelyore: Script checkout Cap la kounye a itilize MutationObserver pou detekte widgets ki chaje dinamikman
* Amelyore: Te ajoute entèsepsyon bouton checkout pou tann token an anvan soumèt

Vèsyon: 1.3.0 - Lage nan 2026-01-27
* Nouvo: Entegrasyon checkout WooCommerce Blocks ak entèsepsyon fetch Store API
* Nouvo: Sipò pou captcha envizib pou checkout WooCommerce (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Nouvo: Paj paramèt otonòm pou itilize san Ultimate Multisite
* Nouvo: Jetpack Autoloader pou prevansyon konfli depandans
* Korije: hCaptcha pa t ap rann sou checkout dinamik Ultimate Multisite (kontni chaje pa AJAX)
* Korije: Captcha pa t ap rafrechi/retabli lè erè validasyon fòm rive
* Korije: hCaptcha pa t ap parèt sou paj checkout WooCommerce
* Korije: Erè klas reCAPTCHA pa jwenn (yo ajoute bibliyotèk PHP google/recaptcha)
* Amelyore: Deteksyon erè atravè WordPress hooks, MutationObserver, ak entèsepsyon AJAX
* Amelyore: Deskripsyon paramèt yo kounye a enkli URL dashboard pou API keys

Vèsyon: 1.2.2 - Lage nan 2026-01-24
* Korije: Captcha pa t ap parèt sou Ultimate Multisite Login Form Element (non filtè fòm pa t koresponn)
* Korije: HTML widget Cap la t ap retire pa sanitizasyon wp_kses()
* Korije: Selektè JavaScript pa t ap jwenn fòm ki gen slash nan ID eleman yo
* Ajoute: Filter hook `wu_kses_allowed_html` pou classaddons elaji tags HTML ki otorize yo
* Retire: Fichye JavaScript kòd mouri ranplase pa script espesifik pou chak founisè

Vèsyon: 1.2.1 - Lage nan 2026-01-23

* Korije: Validasyon token Cap Captcha t ap echwe nan anviwònman multisite (kounye a li itilize transients nan tout rezo a)
* Korije: Captcha kounye a rann yon fason konsistan pou tout itilizatè kèlkeswa estati koneksyon yo
* Korije: Dezako ant rann captcha ak validasyon ki te lakòz echèk checkout

Vèsyon: 1.2.0 - Lage nan 2026-01-21

* Nouvo: Cap Captcha - captcha proof-of-work ki òganize sou pwòp sèvè ou, aktive pa default lè w aktive li
* Nouvo: Pwoteksyon san konfigirasyon - aktive addon nan epi ou pwoteje imedyatman
* Nouvo: Achitekti founisè captcha polimòfik pou ekstansibilite fasil
* Nouvo: Pwoteksyon checkout WooCommerce Store API kont atak tès kat
* Nouvo: Dashboard swivi estatistik ki montre defi, verifikasyon, ak atak bloke
* Nouvo: Preset nivo sekirite (Fast, Medium, Max) pou difikilte Cap Captcha
* Nouvo: Klas baz abstrè pou founisè reCAPTCHA ak hCaptcha
* Amelyore: Baz kòd refaktore an klas founisè modilè
* Amelyore: Pi bon separasyon responsablite ak klas manadjè dedye
* Fixed: Security improvements for $_SERVER variable sanitization
* Korije: Konfigirasyon tès PHPUnit pou konvansyon nonmen WordPress

Vèsyon: 1.0.1 - Lage nan 2025-09-28

* Chanje non prefiks la pou ultimate-multisite; mete text domain ajou; ogmantasyon vèsyon.
