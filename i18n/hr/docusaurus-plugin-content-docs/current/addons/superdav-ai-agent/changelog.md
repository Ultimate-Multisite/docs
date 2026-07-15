---
title: Dnevnik promjena
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Dnevnik promjena

## 1.18.0 — Objavljeno 2026-06-29 {#1180--released-on-2026-06-29}

### Novo {#new}

- **Alati Google Calendar** — čitanje konfiguriranih kalendara i događaja za automatizacije svjesne rasporeda
- **Mapiranje kontakata i pomoćnici za sudionike** — povezivanje sudionika kalendara s korisnicima i kontaktima web-mjesta
- **Vrata za ljudsko odobrenje i zapisi podsjetnika** — pauziranje automatizacija radi pregleda i izbjegavanje dupliciranih obavijesti
- **TextBee SMS provider** — slanje konfiguriranih obavijesti tekstualnim porukama putem TextBee
- **Napredni prateći paket** — dodavanje alata za datotečni sustav pouzdanog developera, bazu podataka, WP-CLI, REST dispečer, izradu pluginova, git snimku stanja, upravljanje korisnicima i benchmark, distribuiranih odvojeno od WordPress.org izdanja

### Poboljšano {#improved}

- **Postavljanje upravljane Superdav usluge** — dodavanje endpointa hostane usluge i automatske pripreme povezivanja za podržana web-mjesta
- **Pakiranje izdanja** — izrada odvojenih osnovnih i naprednih ZIP-ova, objava oba na GitHubu i slanje samo osnovnog paketa na WordPress.org

### Ispravljeno {#fixed}

- **Pouzdanost AI zahtjeva** — poboljšani odabir modela, vremenska ograničenja zahtjeva, zadani model za postavljanje, obrada teksta zaključivanja i smjernice za ponovni pokušaj kod nevaljanih poziva alata
- **Učvršćivanje kalendara i podsjetnika** — ojačani Google Calendar tokeni i deduplikacija podsjetnika
- **Onboarding i nastavci odobrenja** — ispravljena pokretanja onboardinga na frontendu i nastavci potvrđenih sposobnosti
- **Problemi pregleda pakiranja za WordPress.org** — obrađene povratne informacije pregleda pakiranja za osnovno izdanje

## 1.16.0 — Objavljeno 2026-05-20 {#1160--released-on-2026-05-20}

### Novo {#new-1}

- **Sposobnost Generate Logo SVG** — Theme Builder sada može generirati i ugraditi prilagođene SVG-ove logotipa sa saniranjem sigurnim za namespace
- **Prijenos fotografije u discovery intervjuu** — discovery intervju za Theme Builder sada uključuje korak prijenosa fotografije za bogatiji dizajnerski kontekst
- **Sposobnost Validate Palette Contrast** — provjera parova boja za usklađenost s WCAG-om prije primjene na temu
- **Ugostiteljski jelovnici** — Theme Builder sada može generirati strukturirane stranice jelovnika hrane i pića za ugostiteljske tvrtke
- **Renderiranje pregleda za desktop i mobilne uređaje** — pregledajte svoj dizajn na desktopu i mobilnim uređajima tijekom odabira dizajnerskog smjera
- **Parametar oznake navigacije** — sposobnost Create Menu sada podržava zaseban `navigation_label` odvojen od naslova stranice
- **Dostupnost alata razine 1** — sd-ai-agent/site-scrape sada je alat razine 1 dostupan prema zadanim postavkama u Theme Builderu

### Ispravljeno {#fixed-1}

- **Predmemorija AI klijenta** — sada je podržana transientima za postojanost između zahtjeva, čime se sprječava gubitak podataka u dugotrajnim zadacima agenta
- **Poveznice radnji u retku plugina** — ispravljene i preimenovane radi jasnoće

## 1.10.0 — Objavljeno 2026-05-05 {#1100--released-on-2026-05-05}

### Novo {#new-2}

- **Tavily internetsko pretraživanje** — dodavanje Tavilyja kao providera pretraživanja za bogatije rezultate internetskog pretraživanja uz Brave Search
- **Ugrađene vještine svjesne teme** — vodiči za vještine Block Themes, Classic Themes, Kadence Blocks i Kadence Theme sada dolaze s pluginom
- **Sposobnost kontakt obrasca za graditelj web-mjesta** — dodavanje kontakt obrasca na bilo koju stranicu izravno iz sučelja za chat

### Poboljšano {#improved-1}

- **WooCommerce integracija refaktorirana** — sada koristi izvorne WooCommerce API-je za bolju pouzdanost i kompatibilnost
- **Popis providera automatski se osvježava** — kada se bilo koji plugin aktivira ili deaktivira

### Ispravljeno {#fixed-2}

- **Sposobnost navigate-to** — ispravljena beskonačna petlja ponovnog učitavanja na nekim administratorskim stranicama
- **Sposobnost list-posts** — sada ispravno razrješava nazive kategorija i oznaka u slugove
- **WP-CLI naredbe** — vraćeni nedostajući aliasi namespacea nakon prethodnog refaktoriranja
- **Automatizacija događaja** — elegantno obrađuje web-mjesta na kojima tablice za automatizaciju još nisu stvorene
- **Sposobnost memory-save** — sada koristi ispravan prefiks namespacea u graditelju sistemskih uputa
- **Skalarni rezultati alata** — sada se ispravno omataju prije vraćanja AI-ju
- **Statistika upotrebe** — sada ispravno obrađuje naslijeđeni format ključa sposobnosti pri nadogradnji sa starijih verzija
