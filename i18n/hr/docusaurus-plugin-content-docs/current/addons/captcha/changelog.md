---
title: Dnevnik promjena za Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Dnevnik promjena za Captcha

Verzija: 1.5.0 - Objavljeno 2026-05-22
* Novo: Konačni rate limiter — broji svaki GET i POST na površinama zaštićenima captchom (wp-login / registracija / izgubljena lozinka / komentari, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) i odgovara s HTTP 429, `Retry-After` headerom i nasumičnim tarpit mirovanjem (1–5 s, strogo ograničeno na 15 s).
* Novo: Postavke `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` za podešavanje tarpit prozora.
* Novo: Filtar `wu_cap_rate_limit_whitelist_ip` za izuzimanje pouzdanih IP raspona.
* Novo: Akcija `wu_cap_rate_limit_will_block` koja se pokreće neposredno prije slanja konačnog odgovora.
* Novo: Otkrivanje klijentskog IP-a otporno na lažiranje. `Captcha_Core::get_client_ip()` (izvor istine za ključeve rate-limit spremnika, captcha siteverify `remoteip` i IP hashove statistike) sada provodi strogi model povjerenja: REMOTE_ADDR je osnova, `CF-Connecting-IP` se poštuje samo kada je neposredni peer unutar trenutačnog Cloudflare IP raspona, a `X-Forwarded-For` se poštuje samo kada je neposredni peer na administratorski konfiguriranom popisu pouzdanih proxyja, uz prolazak zdesna nalijevo koji preskače pouzdane/CF hopove prije odabira IP-a posjetitelja.
* Novo: Postavka `cap_trust_cloudflare_headers` (zadano ISKLJUČENO) — uključite povjerenje u `CF-Connecting-IP` kada ste iza Cloudflare. Plugin isporučuje uključenu Cloudflare CIDR snimku i osvježava je tjedno putem wp-crona, s uključenom rezervnom verzijom ako osvježavanje ne uspije.
* Novo: Postavka `cap_trusted_proxies` — tekstno područje s CIDR-ovima ili običnim IP-ovima (jedan po retku, `#` komentari dopušteni) koje navodi vaše vlastite prednje proxyje / load-balancere. Bez toga se `X-Forwarded-For` zanemaruje čak i kada je rate limiter omogućen.
* Novo: Automatsko otkrivanje vjerojatnog Cloudflare / proxy stanja pri prvom omogućavanju, uz administratorsku obavijest s jednim klikom "Primijeni otkrivene postavke". Plugin nikada ne prepisuje vaše spremljene vrijednosti; ako naknadni promet sugerira da vaša konfiguracija više ne odgovara stvarnosti (npr. Cloudflare je promijenio CIDR raspone, a vaš proxy CIDR je sada zastario), prikazuje se neuklonjiva obavijest o nepodudarnosti s preporučenim ažuriranjem.
* Ispravljeno: Nevidljivi način više ne spušta tiho `cap_security_level` na FAST — poštuje se administratorova konfigurirana razina. Novi filtar `wu_cap_server_security_level` dostupan je za stranice koje žele prilagođenu logiku.
* Ispravljeno: Brojač statistike `rate_limits_triggered` sada se povećava pri svakom blokiranju, ne samo na rijetkom backstop putu nakon uspjeha.
* Ispravljeno: `Captcha_Core::get_client_ip()` sada je jedini izvor istine za pripisivanje IP-a posjetitelja u rate limiteru, captcha pružateljima (reCAPTCHA + hCaptcha `siteverify`) i statistici — zatvara vektor lažiranja u kojem bi izravni zahtjevi prema izvornom poslužitelju s krivotvorenim `CF-Connecting-IP` headerom bili svrstani prema lažiranom IP-u umjesto prema stvarnom peeru.
* Ispravljeno: WooCommerce klasična checkout rate-limit vrata sada se pokreću na `template_redirect` (prioritet 1) umjesto na `woocommerce_before_checkout_form`. Hook na razini obrasca nikada se ne pokreće kada je košarica prazna, pa je poplavni promet koji nikada ne dodaje proizvod u potpunosti zaobilazio limiter.
* Ispravljeno: WooCommerce pay-for-order rate-limit vrata sada se pokreću na `template_redirect` umjesto na `woocommerce_before_pay_action`. Potonje se pokreće tek nakon što `wp_verify_nonce('woocommerce-pay')` uspije, što znači da neautentificirani napadači (stvarni model prijetnje) nikada nisu aktivirali limiter.
* Ispravljeno: WooCommerce Store API (blokovi) checkout rate-limit vrata sada se pokreću na `rest_pre_dispatch` umjesto na `woocommerce_store_api_checkout_update_order_from_request`. Potonje se pokreće tek nakon što Store API validira košaricu i polja za naplatu, pa su neautentificirani botovi dobivali 400 od validatora i nikada nisu aktivirali limiter.
* Ispravljeno: Ultimate Multisite inline-login rate-limit vrata sada se pokreću na `wu_ajax_nopriv_wu_inline_login` s prioritetom 1 (i prijavljeni zrcalni ekvivalent) umjesto na `wu_before_inline_login`. Potonje se pokreće tek nakon što `check_ajax_referer('wu_checkout')` uspije, pa su neautentificirani botovi bez valjanog wu_checkout noncea dobivali 403 i nikada nisu aktivirali limiter.
* Ispravljeno: `Rate_Limiter::enforce()` sada primjenjuje zaštitu jednom po zahtjevu, ključanu prema `surface|ip`, pa upstream hookovi koji se pokreću dvaput po renderiranju (osobito `wu_setup_checkout` u Ultimate Multisite) više ne prepolovljuju efektivni prag rate limita.
* Ispravljeno: Površinska rate-limit vrata više ne provjeravaju `Captcha_Core::is_whitelisted()` (filtar `wu_captcha_whitelisted`). Taj filtar signalizira "captcha je već obrađena na drugoj površini" i neovisan je o zaštiti od poplave — WooCommerce integracija ga je koristila za preskakanje WordPress login captche kada je Woo nonce bio prisutan, što se prelilo u brojanje ratea i omogućilo Woo POST-ovima da izbjegnu limiter. Filtar specifičan za rate-limit `wu_cap_rate_limit_whitelist_ip` jedini je obilazak koji se sada primjenjuje.

Verzija: 1.3.2 - Objavljeno 2026-01-27
* Ispravljeno: Cap widget se nije renderirao na checkout obrascima koji koriste Elementor ili druge page buildere
* Ispravljeno: cap-widget prilagođeni element uklanjala je wp_kses() sanitizacija
* Poboljšano: Koristi se pozivljivi sadržaj za checkout captcha polje kako bi se zaobišlo HTML filtriranje
* Poboljšano: Pojednostavljen JavaScript s rezervnim rješenjem za rubne slučajeve

Verzija: 1.3.1 - Objavljeno 2026-01-26
* Ispravljeno: Nevidljivi način Cap Captcha nije se automatski rješavao na dinamičkim Ultimate Multisite checkout obrascima
* Poboljšano: Cap checkout skripta sada koristi MutationObserver za otkrivanje dinamički učitanih widgeta
* Poboljšano: Dodano je presretanje checkout gumba radi čekanja tokena prije slanja

Verzija: 1.3.0 - Objavljeno 2026-01-27
* Novo: Integracija WooCommerce Blocks naplate s presretanjem Store API dohvaćanja
* Novo: Podrška za nevidljivi captcha za WooCommerce naplatu (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Novo: Samostalna stranica postavki za upotrebu bez Ultimate Multisite
* Novo: Jetpack Autoloader za sprječavanje sukoba ovisnosti
* Ispravljeno: hCaptcha se nije prikazivao na dinamičnoj Ultimate Multisite naplati (AJAX-om učitan sadržaj)
* Ispravljeno: Captcha se nije osvježavao/resetirao kada se pojave pogreške validacije obrasca
* Ispravljeno: hCaptcha se nije prikazivao na WooCommerce stranici naplate
* Ispravljeno: pogreška da reCAPTCHA klasa nije pronađena (dodana google/recaptcha PHP biblioteka)
* Poboljšano: Otkrivanje pogrešaka putem WordPress hookova, MutationObservera i AJAX presretanja
* Poboljšano: Opisi postavki sada uključuju URL-ove dashboarda za API ključeve

Verzija: 1.2.2 - Objavljeno 2026-01-24
* Ispravljeno: Captcha se nije prikazivao na Ultimate Multisite elementu obrasca za prijavu (nepodudaranje naziva filtra obrasca)
* Ispravljeno: HTML Cap widgeta uklanjao se wp_kses() sanitizacijom
* Ispravljeno: JavaScript selektori nisu pronalazili obrasce s kosim crticama u ID-ovima elemenata
* Dodano: Filter hook `wu_kses_allowed_html` za classaddons kako bi proširili dopuštene HTML oznake
* Uklonjeno: Neaktivne JavaScript datoteke zamijenjene skriptama specifičnima za pružatelja

Verzija: 1.2.1 - Objavljeno 2026-01-23

* Ispravljeno: Validacija Cap Captcha tokena nije uspijevala u multisite okruženjima (sada koristi transiente na razini mreže)
* Ispravljeno: Captcha se sada dosljedno prikazuje za sve korisnike bez obzira na status prijave
* Ispravljeno: Nepodudaranje između prikazivanja i validacije captcha koje je uzrokovalo neuspjehe naplate

Verzija: 1.2.0 - Objavljeno 2026-01-21

* Novo: Cap Captcha - samostalno hostani proof-of-work captcha, zadano omogućen pri aktivaciji
* Novo: Zaštita bez konfiguracije - aktivirajte addon i odmah ste zaštićeni
* Novo: Polimorfna arhitektura pružatelja captcha za jednostavno proširivanje
* Novo: WooCommerce Store API zaštita naplate od napada testiranja kartica
* Novo: Dashboard za praćenje statistike koji prikazuje izazove, verifikacije i blokirane napade
* Novo: Unaprijed postavljene razine sigurnosti (Brza, Srednja, Maks.) za težinu Cap Captcha
* Novo: Apstraktne osnovne klase za reCAPTCHA i hCaptcha pružatelje
* Poboljšano: Refaktorirana kodna baza u modularne klase pružatelja
* Poboljšano: Bolje razdvajanje odgovornosti s namjenskom klasom upravitelja
* Fixed: Security improvements for $_SERVER variable sanitization
* Ispravljeno: PHPUnit testna konfiguracija za WordPress konvencije imenovanja

Verzija: 1.0.1 - Objavljeno 2025-09-28

* Preimenovan prefiks u ultimate-multisite; ažurirana tekstualna domena; povećana verzija.
