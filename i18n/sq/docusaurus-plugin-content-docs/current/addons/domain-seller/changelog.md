---
title: Regjistri i ndryshimeve i shitësit të domenit
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Regjistri i ndryshimeve i Domain Seller

Version 1.3.0 - Lëshuar më 2026-06-02
- E re: U shtua një paralajmërim për network-admin kur bilanci i rishitësit HostAfrica bëhet shumë i ulët
- E re: U shtua hartëzim automatik i domeneve të regjistruara rishtas te faqja e rrjetit
- Rregullim: U zbatuan kërkesat e fushave të regjistruesit vetëm kur regjistrohet një domen i ri
- Rregullim: Njoftimet e monitorimit të bilancit u bënë të mbyllshme
- Rregullim: U sigurua që detajet e faturimit të regjistruesit në WooCommerce të ruhen
- Rregullim: U detyruan kërkesat e kontaktit të regjistruesit gjatë regjistrimit
- Rregullim: U parandalua krijimi i produkteve të regjistrimit të domeneve me markup 0%
- Rregullim: U ruajtën përzgjedhjet e domeneve dhe çmimet gjatë rrjedhës së sesionit të checkout
- Rregullim: U përmirësua shfaqja e monedhës për çmimet e domeneve HostAfrica
- Rregullim: U përmirësua sjellja e form-action në checkout për të parandaluar mospërputhjet e query-var të WP-core
- Përmirësuar: U lidh dokumentacioni i konfigurimit të rishitësit HostAfrica në udhëzimet e konfigurimit

Version 1.2.0 - Lëshuar më 2026-05-25
- E re: U shtua HostAfrica si integrim për shitjen e domeneve me mbështetje për checkout, magjistar konfigurimi, kërkim, TLD/çmime, regjistrim, rinovim, transferim, nameserver, DNS, EPP code, bllokim nga regjistrari dhe mbrojtje ID
- E re: U shtua Openprovider si integrim për shitjen e domeneve me mbështetje për çmime rishitësi, regjistrim, rinovim, transferim, nameserver, DNS, EPP code, bllokim nga regjistrari, privatësi WHOIS dhe sinkronizim TLD
- E re: U shtua Hostinger si integrim për shitjen e domeneve duke përdorur token-in e përbashkët të Hostinger API nga integrimi bazë për kontrolle disponueshmërie, regjistrim, përditësime nameserver, bllokim nga regjistrari dhe privatësi WHOIS
- Përmirësuar: U shtuan docblocks për veprime të ciklit jetësor të domenit dhe filtra për udhëzime integrimi për zhvillues
- Përmirësuar: U përditësuan metadatat e përputhshmërisë së plugin-it në WordPress 7.0 në readme-n e shtesës
- Përmirësuar: U përditësuan shabllonet e planifikimit të përdorura për koordinimin e publikimeve të ardhshme

Version 1.1.0 - Lëshuar më 2026-05-08
- E re: Krijimi i rekordeve DNS (add_dns_record) u implementua për regjistrarët ResellerClub, Enom dhe OpenSRS
- Rregullim: Analizuesi i Parazgjedhur i Rekordeve DNS tani toleron token-ët {DOMAIN} dhe {SITE_URL}
- Rregullim: Slug-ët e fushës së checkout për përzgjedhjen e domenit u vendosën në namespace për të parandaluar përplasjen me site_url

Version 1.0.8 - Lëshuar më 2026-05-07
- Rregullim: Çmimet e domeneve ResellerClub tani marrin çmimet aktuale të kostos nga endpoint-i i saktë i API-së

Version 1.0.7 - Lëshuar më 2026-05-06
* Rregullim: ResellerClub test_connection dërgon parametrin e kërkuar tlds (#224)

Version 1.0.6 - Lëshuar më 2026-05-05
* Rregullim: Regjistrimi i domeneve ResellerClub tani funksionon saktë me trajtim të përmirësuar të përgjigjeve API dhe drejtim të ofruesit të udhëhequr nga regjistri
* Rregullim: Përmirësime UX në faqen admin Register Domain
* Hequr: Integrimi i regjistrarit CyberPanel

Version 1.0.5 - Lëshuar më 2026-04-02
* E re: Integrim i regjistrarit GoDaddy për regjistrim dhe menaxhim domenesh
* E re: Integrim i regjistrarit NameSilo
* E re: Integrim i regjistrarit ResellerClub
* E re: Verifikim automatik i domenit dërgues SES në blerje dhe hartëzim domeni
* Rregullim: U mbrojtën konstantet e plugin-it nga rideklarimi në mjedisin e testimit
* Rregullim: Flamujt MySQL ndahen saktë sipas fjalëve në install-wp-tests.sh

Version 1.0.4 - Lëshuar më 2026-03-14
* **Rregullim:** Disa asete css që mungonin
* **Rregullim:** Gabim lidhur me tld-të e padisponueshme

Version 1.0.3 - Lëshuar më 2026-03-09
* **Rregullim:** Gabime të vetive reaktive Vue (domain_option, selected_domain, domain_provider) kur përdoret shablloni i vjetër i regjistrimit me shortcode-in e checkout
* **Rregullim:** Mospërputhje e fushës së hyrjes për nëndomenin dhe tekst tepër i madh në fushën e checkout për përzgjedhjen e domenit
* **Rregullim:** Fshihe bllokun e parapamjes "URL-ja juaj do të jetë" kur fusha e përzgjedhjes së domenit është e pranishme

Version 1.0.2 - Lëshuar më 2026-03-01
* **Përmirësuar:** U hoqën cilësimet globale të markup nga faqja e cilësimeve — çmimet tani janë ekskluzivisht për çdo produkt
* **Përmirësuar:** U shtua lidhja "Menaxho Produktet e Domeneve" në faqen e cilësimeve për navigim të shpejtë
* **Përmirësuar:** Përshkrime më të qarta të fushave dhe tooltips për cilësimet e produkteve të domeneve (catch-all kundrejt specifike për TLD, lloje markup, çmime hyrëse)
* **Përmirësuar:** Përshkrime më të mira në të gjithë faqen e cilësimeve (kërkimi i TLD-ve, rinovime, DNS, njoftime)

Version 1.0.1 - Lëshuar më 2026-02-27

* **E re:** Mjet importimi TLD për menaxhim masiv të çmimeve
* **E re:** Mbështetje për çmime hyrëse për produkte domenesh
* **E re:** Paketë testesh E2E me Cypress
* **E re:** Shabllone email-i për njoftime të ciklit jetësor të domenit
* **E re:** Fusha të adresës së regjistruesit në modalin e regjistrimit të domenit në admin, të parapopulluara nga cilësimet
* **E re:** Ndërfaqe e menaxhimit DNS për klientin me mbështetje për shtim, redaktim dhe fshirje rekordesh
* **E re:** Opsion checkout "Bring your own domain" me hartëzim automatik të domenit
* **E re:** Gjenerim automatik i URL-së së faqes nga emri i domenit gjatë checkout
* **E re:** Konfigurim i nameserver-it të parazgjedhur dhe i rekordeve DNS te cilësimet
* **E re:** Detaje të regjistrimit të domenit dhe menaxhim DNS në faqen kryesore të redaktimit të domenit
* **E re:** Asistenti i konfigurimit krijon automatikisht një produkt domeni të parazgjedhur me vlera të arsyeshme
* **E re:** Sinkronizim automatik ditor TLD përmes cron në të gjithë ofruesit e konfiguruar
* **E re:** Mbrojtje privatësie WHOIS me konfigurim për çdo produkt (gjithmonë aktive, zgjedhje e klientit, ose e çaktivizuar)
* **E re:** Kuti zgjedhjeje për privatësinë WHOIS në checkout me shfaqje çmimi dhe mbështetje për modalitet të errët
* **E re:** Faqe admini Register Domain për regjistrim manual domeni
* **E re:** Përditësime automatike plugin-i përmes serverit të përditësimeve Ultimate Multisite
* **E re:** Skedë filtri për llojin e produktit domen në tabelën e listës së produkteve me stilizim badge ngjyrë vjollcë
* **E re:** Fusha kontakti të regjistruesit (emër, adresë, qytet, shtet, kod postar, vend, telefon) në formularin e checkout për domenin
* **E re:** Validim i fushave të regjistruesit përpara thirrjes së API-së së regjistrarit me mesazhe gabimi të qarta
* **E re:** Kanale log-u specifike për ofruesin për ngjarjet e regjistrimit të domenit (p.sh. domain-seller-namecheap.log)
* **E re:** Fusha kontakti të regjistruesit në formularin kryesor të regjistrimit/signup checkout (shfaqen kur regjistrohet një domen)
* **E përmirësuar:** U zëvendësua fusha Domain Search në checkout me fushën e unifikuar Domain Selection që mbështet skeda për nën-domen, regjistrim dhe domen ekzistues
* **E përmirësuar:** Cilësimet e produktit domen shfaqen inline në faqen e redaktimit të produktit përmes sistemit kryesor të widget-eve
* **E përmirësuar:** Informacioni i domenit të klientit lidhet me widget-in kryesor të hartëzimit të domenit në vend të një metabox-i të veçantë
* **E përmirësuar:** Asistenti i importimit TLD u thjeshtua në sinkronizim me një klik nga të gjithë ofruesit
* **E përmirësuar:** Disponueshmëria e domenit Namecheap përdor thirrje batch API për kërkim më të shpejtë
* **E përmirësuar:** API-ja e çmimeve Namecheap përdor parametra dhe analizim përgjigjeje të saktë
* **E përmirësuar:** Ruajtje e centralizuar TLD në një opsion të vetëm rrjeti
* **E përmirësuar:** Regjistrim aktiviteti të domenit për ndryshime DNS, transferime dhe aplikim konfigurimi
* **E përmirësuar:** Sinkronizim i plotë TLD për OpenSRS duke përdorur listën master IANA me validim batch
* **E përmirësuar:** Sinkronizim i plotë TLD për Namecheap me kërkesa API të faqëzuara
* **E përmirësuar:** U zëvendësuan klasat legacy të ofruesve me modelin Integration Registry
* **E përmirësuar:** Panel cilësimesh me konfigurim DNS dhe transferimi
* **E përmirësuar:** Numrat e telefonit formatohen automatikisht në formatin e regjistrarit +CC.NNN
* **E përmirësuar:** Validimi i fushës së telefonit heq karakteret e formatimit përpara dërgimit
* **E përmirësuar:** Kërkesa e versionit u ngrit në Ultimate Multisite 2.4.12 me njoftim më të qartë
* **E përmirësuar:** Rrjedha CI përdor checkout të duhur si për addon-in ashtu edhe për plugin-in kryesor
* **E përmirësuar:** prepare_registrant_info() lexon nga meta e përdoruesit e ruajtur nga checkout me fallback te adresa e faturimit
* **E rregulluar:** AJAX-i i kërkimit të domenit dështonte për përdoruesit pa hyrë në llogari gjatë checkout
* **E rregulluar:** AJAX-i i çmimeve të domenit dështonte për përdoruesit pa hyrë në llogari gjatë checkout
* **E rregulluar:** Gabim fatal i rideklarimit të klasës Spyc gjatë ekzekutimit të komandave WP-CLI
* **E rregulluar:** Timeout-i i Namecheap sandbox API ishte shumë i shkurtër
* **E rregulluar:** Teksti i butonit Select në kërkimin e domenit nuk ishte i dukshëm në sfond të gjelbër
* **E rregulluar:** Regjistrimi i domenit dështonte me gabimin "RegistrantFirstName is Missing" për shkak të mungesës së informacionit të kontaktit
* **E rregulluar:** Rekordi i domenit krijohej me blog_id=0 kur faqja nuk ekzistonte ende në kohën e checkout
* **E rregulluar:** Cilësimi i TLD-ve të parazgjedhura kthehej si string në vend të array-t të analizuar
* **E hequr:** Faqe admini e veçantë për Domain Management — tani trajtohet përmes faqeve kryesore të domenit

Versioni 1.0.0 - Lëshuar më 2025-09-28

**Rishkrim madhor për Ultimate Multisite v2**

* **E re:** Rishkrim i plotë me arkitekturë moderne PHP 7.4+
* **E re:** Integrim i pandërprerë me sistemin checkout të Ultimate Multisite v2
* **E re:** Menaxhim i produkteve të domenit me opsione fleksibël çmimesh
* **E re:** Arkitekturë mbështetjeje për shumë ofrues domenesh
* **E re:** Integrim me rinovim automatik dhe abonim
* **E re:** Ndërfaqe e menaxhimit të domenit për klientin
* **E re:** Monitorim dhe log-e domenesh për adminin
* **E re:** Mbështetje kuponësh për produkte domenesh
* **E re:** Menaxhim gjithëpërfshirës i cilësimeve
* **E re:** Bazë kodi e zgjerueshme dhe miqësore për zhvilluesit
* **E përmirësuar:** Ofruesi OpenSRS u përditësua me mbështetje të plotë funksionesh
* **E përmirësuar:** UI modern në përputhje me Ultimate Multisite v2
* **E rregulluar:** I gjithë kodi i amortizuar v1 u përditësua sipas standardeve v2
* **E hequr:** Përputhshmëria legacy v1 (ndryshim që prish përputhshmërinë)

### Versionet e mëparshme (v1 Legacy)

### Versioni 0.0.3 - 20/08/2019

* U rregullua: Papajtueshmëri me Groundhogg CRM
* Shënim: Ky ishte lëshimi i fundit i përputhshëm me v1

### Versioni 0.0.2 - 07/12/2018

* U rregullua: U hoq fusha License Key
* U rregullua: Skedat e planit mungonin kur plugin-i i veçorisë është aktiv
* U përmirësua: U shtua një buton kapërcimi në fushën e regjistrimit

### Versioni 0.0.1 - Lëshimi fillestar

* Integrim bazë OpenSRS për WP Ultimo v1
* Kërkim dhe regjistrim i thjeshtë domeni
* Leje domeni të bazuara në plan
