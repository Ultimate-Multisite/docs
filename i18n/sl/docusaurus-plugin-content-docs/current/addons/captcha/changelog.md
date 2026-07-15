---
title: Dnevnik sprememb Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Dnevnik sprememb Captcha

Različica: 1.5.0 - Izdano 2026-05-22
* Novo: Omejevalnik hitrosti s popolno zaustavitvijo — šteje vsak GET in POST na površinah, zaščitenih s captcha (wp-login / registracija / izgubljeno geslo / komentarji, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) in odgovori z HTTP 429, `Retry-After` headerjem ter naključnim tarpit mirovanjem (1–5 s, s trdo zgornjo mejo 15 s).
* Novo: nastavitvi `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` za prilagoditev tarpit okna.
* Novo: filter `wu_cap_rate_limit_whitelist_ip` za izvzetje zaupanja vrednih obsegov IP.
* Novo: dejanje `wu_cap_rate_limit_will_block`, ki se sproži tik preden je poslan odgovor s popolno zaustavitvijo.
* Novo: Zaznavanje IP-ja odjemalca, odporno na ponarejanje. `Captcha_Core::get_client_ip()` (vir resnice za ključe vedra omejevanja hitrosti, captcha siteverify `remoteip` in IP zgoščene vrednosti statistike) zdaj uveljavlja strog model zaupanja: REMOTE_ADDR je osnova, `CF-Connecting-IP` se upošteva samo, ko je neposredni vrstnik znotraj trenutnega obsega IP Cloudflare, `X-Forwarded-For` pa se upošteva samo, ko je neposredni vrstnik na skrbniško konfiguriranem seznamu zaupanja vrednih proxyjev, s pregledom od desne proti levi, ki preskoči zaupanja vredne/CF skoke, preden se ustavi pri IP-ju obiskovalca.
* Novo: nastavitev `cap_trust_cloudflare_headers` (privzeto IZKLOPLJENO) — omogočite zaupanje v `CF-Connecting-IP`, ko ste za Cloudflare. Plugin vključuje priložen posnetek Cloudflare CIDR in ga tedensko osvežuje prek wp-cron, s priloženo nadomestno možnostjo, če osveževanje ne uspe.
* Novo: nastavitev `cap_trusted_proxies` — besedilno polje s CIDR-ji ali golimi IP-ji (eden na vrstico, komentarji `#` dovoljeni), ki navaja vaše lastne sprednje proxyje / izravnalnike obremenitve. Brez tega se `X-Forwarded-For` prezre, tudi ko je omejevalnik hitrosti omogočen.
* Novo: Samodejno zaznavanje verjetne drže Cloudflare / proxy ob prvi omogočitvi, z administrativnim obvestilom z enim klikom »Uporabi zaznane nastavitve«. Plugin nikoli ne prepiše vaših shranjenih vrednosti; če poznejši promet nakazuje, da se vaša konfiguracija ne ujema več z realnostjo (npr. Cloudflare je spremenil obsege CIDR in je vaš proxy CIDR zdaj zastarel), se prikaže neodstranljivo obvestilo o neskladju s priporočeno posodobitvijo.
* Popravljeno: Nevidni način ne zniža več tiho `cap_security_level` na FAST — upošteva se skrbniško konfigurirana raven. Nov filter `wu_cap_server_security_level` je na voljo za spletna mesta, ki želijo prilagojeno logiko.
* Popravljeno: Števec statistike `rate_limits_triggered` se zdaj poveča ob vsakem bloku, ne samo na redki poti varovalke po uspehu.
* Popravljeno: `Captcha_Core::get_client_ip()` je zdaj edini vir resnice za pripisovanje IP-ja obiskovalca v omejevalniku hitrosti, ponudnikih captcha (reCAPTCHA + hCaptcha `siteverify`) in statistiki — s tem je zaprt vektor ponarejanja, pri katerem bi bile neposredne zahteve na izvorni strežnik s ponarejenim `CF-Connecting-IP` headerjem razvrščene po ponarejenem IP-ju namesto po resničnem vrstniku.
* Popravljeno: Vrata omejevanja hitrosti za klasični WooCommerce checkout se zdaj sprožijo na `template_redirect` (prioriteta 1) namesto na `woocommerce_before_checkout_form`. Kavelj na ravni obrazca se nikoli ne sproži, ko je košarica prazna, zato je poplavni promet, ki nikoli ne doda izdelka, v celoti obšel omejevalnik.
* Popravljeno: Vrata omejevanja hitrosti za WooCommerce pay-for-order se zdaj sprožijo na `template_redirect` namesto na `woocommerce_before_pay_action`. Slednji se sproži šele po uspešnem `wp_verify_nonce('woocommerce-pay')`, kar pomeni, da neavtenticirani napadalci (dejanski model grožnje) nikoli niso sprožili omejevalnika.
* Popravljeno: Vrata omejevanja hitrosti za WooCommerce Store API (bloki) checkout se zdaj sprožijo na `rest_pre_dispatch` namesto na `woocommerce_store_api_checkout_update_order_from_request`. Slednji se sproži šele po tem, ko Store API potrdi košarico in polja za obračun, zato so neavtenticirani boti prejeli 400 od validatorja in nikoli niso sprožili omejevalnika.
* Popravljeno: Vrata omejevanja hitrosti za Ultimate Multisite inline-login se zdaj sprožijo na `wu_ajax_nopriv_wu_inline_login` prioritete 1 (in zrcalno za prijavljene) namesto na `wu_before_inline_login`. Slednji se sproži šele po uspešnem `check_ajax_referer('wu_checkout')`, zato so neavtenticirani boti brez veljavnega wu_checkout nonce prejeli 403 in nikoli niso sprožili omejevalnika.
* Popravljeno: `Rate_Limiter::enforce()` zdaj uporabi varovalo enkrat na zahtevo, ključeno z `surface|ip`, zato zgornji kavlji, ki se sprožijo dvakrat na izris (zlasti `wu_setup_checkout` v Ultimate Multisite), ne prepolovijo več učinkovitega praga omejevanja hitrosti.
* Popravljeno: Vrata površin omejevanja hitrosti ne preverjajo več `Captcha_Core::is_whitelisted()` (filter `wu_captcha_whitelisted`). Ta filter sporoča »captcha je že obdelana na drugi površini« in je neodvisen od zaščite pred poplavami — integracija WooCommerce ga je uporabljala za preskok WordPress login captcha, ko je bil prisoten Woo nonce, kar je vplivalo na štetje hitrosti in omogočilo Woo POST-om, da se izognejo omejevalniku. Filter, specifičen za omejevanje hitrosti, `wu_cap_rate_limit_whitelist_ip`, je zdaj edini obvod, ki se uporabi.

Različica: 1.3.2 - Izdano 2026-01-27
* Popravljeno: Gradnik Cap se ni izrisal na checkout obrazcih, ki uporabljajo Elementor ali druge graditelje strani
* Popravljeno: Element po meri cap-widget je bil odstranjen s sanitizacijo wp_kses()
* Izboljšano: Uporaba klicljive vsebine za checkout captcha polje za obhod filtriranja HTML
* Izboljšano: Poenostavljen JavaScript z nadomestno možnostjo za robne primere

Različica: 1.3.1 - Izdano 2026-01-26
* Popravljeno: Nevidni način Cap Captcha ni samodejno reševal na dinamičnih Ultimate Multisite checkout obrazcih
* Izboljšano: Skript Cap checkout zdaj uporablja MutationObserver za zaznavanje dinamično naloženih gradnikov
* Izboljšano: Dodano prestrezanje gumba checkout za čakanje na token pred oddajo

Version: 1.3.0 - Izdano 2026-01-27
* Novo: integracija blagajne WooCommerce Blocks s prestrezanjem pridobivanja Store API
* Novo: podpora za nevidno captcha za WooCommerce blagajno (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Novo: samostojna stran z nastavitvami za uporabo brez Ultimate Multisite
* Novo: Jetpack Autoloader za preprečevanje konfliktov odvisnosti
* Popravljeno: hCaptcha se ni prikazal na dinamični blagajni Ultimate Multisite (vsebina, naložena prek AJAX)
* Popravljeno: Captcha se ni osvežil/ponastavil, ko so se pojavile napake pri preverjanju obrazca
* Popravljeno: hCaptcha se ni prikazoval na strani blagajne WooCommerce
* Popravljeno: napaka, da razred reCAPTCHA ni najden (dodana PHP knjižnica google/recaptcha)
* Izboljšano: zaznavanje napak prek kavljev WordPress, MutationObserver in prestrezanja AJAX
* Izboljšano: opisi nastavitev zdaj vključujejo URL-je Dashboard za API ključe

Version: 1.2.2 - Izdano 2026-01-24
* Popravljeno: Captcha se ni prikazoval na elementu Ultimate Multisite Login Form Element (neujemanje imena filtra obrazca)
* Popravljeno: HTML Cap gradnika je bil odstranjen s sanitizacijo wp_kses()
* Popravljeno: JavaScript izbirniki niso našli obrazcev s poševnicami v ID-jih elementov
* Dodano: filter hook `wu_kses_allowed_html` za classaddons za razširitev dovoljenih HTML oznak
* Odstranjeno: neuporabljene JavaScript datoteke kode, nadomeščene s skripti za posamezne ponudnike

Version: 1.2.1 - Izdano 2026-01-23

* Popravljeno: preverjanje žetona Cap Captcha je odpovedovalo v multisite okoljih (zdaj uporablja prehodne podatke na ravni omrežja)
* Popravljeno: Captcha se zdaj dosledno izriše za vse uporabnike ne glede na stanje prijave
* Popravljeno: neujemanje med izrisom in preverjanjem captcha, ki je povzročalo neuspehe blagajne

Version: 1.2.0 - Izdano 2026-01-21

* Novo: Cap Captcha - samogostujoča captcha z dokazom dela, privzeto omogočena ob aktivaciji
* Novo: zaščita brez konfiguracije - aktivirajte dodatek in takoj ste zaščiteni
* Novo: polimorfna arhitektura ponudnika captcha za enostavno razširljivost
* Novo: zaščita blagajne WooCommerce Store API pred napadi testiranja kartic
* Novo: Dashboard za sledenje statistiki, ki prikazuje izzive, preverjanja in blokirane napade
* Novo: prednastavitve varnostne ravni (Fast, Medium, Max) za težavnost Cap Captcha
* Novo: abstraktni osnovni razredi za ponudnike reCAPTCHA in hCaptcha
* Izboljšano: prestrukturirana kodna baza v modularne razrede ponudnikov
* Izboljšano: boljša ločitev odgovornosti z namenskim razredom upravitelja
* Fixed: Security improvements for $_SERVER variable sanitization
* Popravljeno: konfiguracija PHPUnit testov za poimenovalne konvencije WordPress

Version: 1.0.1 - Izdano 2025-09-28

* Preimenovan prefix v ultimate-multisite; posodobljena text domain; dvig različice.
