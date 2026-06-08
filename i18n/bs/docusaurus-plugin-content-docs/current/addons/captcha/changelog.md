---
title: |-
  Člonačnik (ili: Izmjene) Capthe
  Captcha Izmjene
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Changelog za Captcha

Verzija: 1.5.0 - Obraćeno 2026-05-22
* Novo: Hard-stop ograničilac brzine — broji svaki GET i POST zahtjev na površinama zaštićenim Captchom (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) i odgovara HTTP 429, `Retry-After` zaglavljem i randomizovanim "tarpit" spavanjem (1–5s, maksimalno 15s).
* Novo: Podešavanja `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` za podešavanje prozora za tarpit.
* Novo: Filter `wu_cap_rate_limit_whitelist_ip` za izuzimanje pouzdanih IP raspona.
* Novo: Akcija `wu_cap_rate_limit_will_block` koja se aktivira odmah prije slanja hard-stop odgovora.
* Novo: Detekcija IP adrese klijenta otporna na lažiranje (spoofing). `Captcha_Core::get_client_ip()` (jedini pouzdan izvor za ključeve baceta ograničenja brzine, captcha siteverify `remoteip` i statističke IP hash-eve) sada nameće strogi model povjerenja: `REMOTE_ADDR` je podloga, `CF-Connecting-IP` se poštuje samo kada je neposredni peer unutar trenutnog Cloudflare IP raspona, a `X-Forwarded-For` se poštuje samo kada je neposredni peer u listi pouzdanih proxy-ja koje je administrator konfigurisao, s desno-lijevo prohodom koji preskače pouzdane/CF skokove prije nego što se utvrdi IP adresa posjetitelja.
* Novo: Podešavanje `cap_trust_cloudflare_headers` (podrazumevano ISKLJUČENO) — opcija za povjerenje u `CF-Connecting-IP` kada ste iza Cloudflare-a. Plugin dolazi s pakovanim Cloudflare CIDR snimkom i osvježava ga sedmično putem wp-cron s pakovnim fallback-om ako osvježavanje ne uspije.
* Novo: Podešavanje `cap_trusted_proxies` — tekstualni okvir za CIDR-ove ili sirove IP adrese (jedna po redu, dozvoljeni su `#` komentari) koji navode vaše front-line proxyje / load-balancere. Bez ovoga, `X-Forwarded-For` se ignorira čak i kada je ograničilac brzine omogućen.
* Novo: Prvo omogućavanje automatske detekcije vjerojatnog Cloudflare / proxy statusa s obaviješću za administratora "Primijeni otkrivene postavke" jednim klikom. Plugin nikada ne nadjačava vaše spremljene vrijednosti; ako kasniji promet sugerira da vaše konfiguracije više ne odgovaraju stvarnosti (npr. Cloudflare je promijenio CIDR rasponove, a vaš proxy CIDR je sada zastario), pojavljuje se obavijest o neusklađenosti koja nije moguće ignorisati i koja predlaže potrebna ažuriranja.
* Popravljeno: Invisible mode više ne smanjuje `cap_security_level` u tišini na FAST — nivo koji je administrator konfigurisao poštuje se. Dostupan je novi filter `wu_cap_server_security_level` za stranice koje žele prilagođenu logiku.
* Popravljeno: Brojač statistike `rate_limits_triggered` sada se inkrementira pri svakom blokiranju, a ne samo na rijetkom putu za zaustavljanje nakon uspjeha.
* Popravljeno: `Captcha_Core::get_client_ip()` je sada jedini pouzdan izvor za pripisivanje IP adrese posjetitelja kroz ograničilac brzine, captcha provajdere (reCAPTCHA + hCaptcha `siteverify`) i statistiku — zatvarajući vektor lažiranja gdje bi zahtjevi izravno s izvornog servera koji nose lažni `CF-Connecting-IP` zaglavlje bili baceni u bacet lažiranim IP adresom umjesto stvarnog peera.
* Popravljeno: Rate-limit kapija za klasični WooCommerce checkout sada se aktivira na `template_redirect` (prioritet 1) umjesto `woocommerce_before_checkout_form`. Hook na nivou forme nikada se ne aktivira kada je košarica prazna, pa je promet koji nikada ne dodaje proizvod zaobilazio ograničilac.
* Popravljeno: Rate-limit kapija za WooCommerce pay-for-order sada se aktivira na `template_redirect` umjesto `woocommerce_before_pay_action`. Posljednji se aktivira tek nakon što `wp_verify_nonce('woocommerce-pay')` uspije, što znači da napadači bez prijave (stvarniji model prijetnje) nikada nisu aktivirali ograničilac.
* Popravljeno: Rate-limit kapija za WooCommerce Store API (blocks) checkout sada se aktivira na `rest_pre_dispatch` umjesto `woocommerce_store_api_checkout_update_order_from_request`. Posljednji se aktivira tek nakon što Store API validira polja za košaricu i naplatu, pa su neautentizovani botovi dobili 400 od validatora i nikada nisu pokrenuli ograničilac.
* Popravljeno: Rate-limit kapija za Ultimate Multisite inline-login sada se aktivira na `wu_ajax_nopriv_wu_inline_login` prioritet 1 (i na logiranom ogledalu) umjesto `wu_before_inline_login`. Posljednji se aktivira tek nakon što `check_ajax_referer('wu_checkout')` uspije, pa su neautentizovani botovi bez validnog wu_checkout nonca dobili 403 i nikada nisu pokrenuli ograničilac.
* Popravljeno: `Rate_Limiter::enforce()` sada primjenjuje zaštitu "jednom po zahtjevu" ključanu po `surface|ip`, tako da upstream hookovi koji se aktiviraju dvaput po renderovanju (primjerice `wu_setup_checkout` u Ultimate Multisite) više ne smanjuju efektivni prag ograničenja brzine.
* Popravljeno: Kapije ograničenja brzine više ne konzultiraju `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter). Taj filter signalizira "captcha je već obrađen na drugoj površini" i ortogonalan je za zaštitu od poplava — WooCommerce integracija ga je koristila da preskoči WordPress login captcha kada je bio prisutan Woo nonce, što je utjecalo na brojanje ograničenja brzine i omogućilo je Woo POST zahtjevima da zaobiđu ograničilac. Jedini bypass koji sada vrijedi je specifični za ograničenje brzine filter `wu_cap_rate_limit_whitelist_ip`.

Verzija: 1.3.2 - Obraćeno 2026-01-27
* Popravljeno: Widget Captcha ne renderuje se na checkout formama koje koriste Elementor ili druge page buildere.
* Popravljeno: Custom element za widget Captcha je bio uklonjen (stripping) putem sanitizacije `wp_kses()`.
* Poboljšano: Korištenje pozivnog sadržaja (callable content) za captcha polje na checkoutu kako bi se zaobišla HTML filtracija.
* Poboljšano: Pojednostavljen JavaScript s fallback-om za rubne slučajeve.

Verzija: 1.3.1 - Obraćeno 2026-01-26
* Popravljeno: Invisible mode Captcha ne rješava automatski na dinamičnim Ultimate Multisite checkout formama.
* Poboljšano: Captcha checkout skripta sada koristi MutationObserver za detekciju dinamički učitanih widgeta.
* Poboljšano: Dodata interceptacija gumba za checkout kako bi se čekalo na token prije slanja.

Verzija: 1.3.0 - Obraćeno 2026-01-27
* Novo: Integracija WooCommerce Blocks checkout s interceptacijom Store API fetch-a.
* Novo: Invisible captcha podrška za WooCommerce checkout (hCaptcha invisible, reCAPTCHA v2 invisible, v3).
* Novo: Samostalna stranica za podešavanja za korištenje bez Ultimate Multisite-a.
* Novo: Jetpack Autoloader za sprečavanje konflikata zavisnosti.
* Popravljeno: hCaptcha ne renderuje se na dinamičnom Ultimate Multisite checkoutu (AJAX-učitani sadržaj).
* Popravljeno: Captcha se ne osvježava/resetira kada dođe do grešaka validacije forme.
* Popravljeno: hCaptcha nije prikazan na WooCommerce checkout stranici.
* Popravljeno: Greška "reCAPTCHA class not found" (dodata google/recaptcha PHP biblioteka).
* Poboljšano: Detekcija grešaka putem WordPress hookova, MutationObserver-a i AJAX interceptacije.
* Poboljšano: Opisi podešavanja sada uključuju URL-ove dashboarda za API ključeve.

Verzija: 1.2.2 - Obraćeno 2026-01-24
* Popravljeno: Captcha nije prikazan na Ultimate Multisite Login Form Elementu (neusklađenost imena filtera forme).
* Popravljeno: HTML widgeta Captcha je bio uklonjen (stripping) putem sanitizacije `wp_kses()`.
* Popravljeno: JavaScript selektori nisu pronašli forme s crtama u ID elementima.
* Dodano: Filter hook `wu_kses_allowed_html` za classaddons kako bi se proširili dozvoljeni HTML tagovi.
* Uklonjeno: JavaScript fajlovi mrtvog koda zamijenjeni specifičnim skriptama provajdera.

Verzija: 1.2.1 - Obraćeno 2026-01-23

* Popravljeno: Validacija Captcha tokena ne uspijeva u multisite okruženjima (sada koristi transijente na nivou mreže).
* Popravljeno: Captcha sada renderuje dosljedno za sve korisnike bez obzira na status prijave.
* Popravljeno: Neusklađenost između renderovanja i validacije Captcha koja je uzrokovala neuspjeh checkouta.

Verzija: 1.2.0 - Obraćeno 2026-01-21

* Novo: Cap Captcha - self-hosted proof-of-work captcha, omogućen podrazumjetno pri aktivaciji.
* Novo: Zaštita bez konfiguracije - aktivirajte addon i odmah ste zaštićeni.
* Novo: Polimorfna arhitektura provajdera Captcha za lako proširivanje.
* Novo: WooCommerce Store API checkout zaštita od napada testiranja karticama.
* Novo: Dashboard za praćenje statistike koji prikazuje izazove, verifikacije i blokirane napade.
* Novo: Preddefinirani nivoi sigurnosti (Fast, Medium, Max) za težinu Cap Captcha.
* Novo: Apstraktne bazne klase za reCAPTCHA i hCaptcha provajdere.
* Poboljšano: Preuređeni kod u modularne provajderske klase.
* Poboljšano: Bolje razdvajanje briga s posvećenom manager klasom.
* Popravljeno: Poboljšanja sigurnosti za sanitizaciju varijable $_SERVER.
* Popravljeno: PHPUnit konfiguracija testiranja za WordPress konvencije imenovanja.

Verzija: 1.0.1 - Obraćeno 2025-09-28

* Prefiks preimenovan na ultimate-multisite; ažuriran tekstualni domen; povećan broj verzije.
