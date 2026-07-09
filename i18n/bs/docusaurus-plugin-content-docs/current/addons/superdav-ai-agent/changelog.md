---
title: Dnevnik promjena
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Dnevnik promjena

## 1.18.0 — Objavljeno 2026-06-29

### Novo

- **Google Calendar alati** — čitajte konfigurirane kalendare i događaje za automatizacije svjesne rasporeda
- **Mapiranje kontakata i pomoćnici za učesnike** — uparite učesnike kalendara s korisnicima i kontaktima stranice
- **Kapije za ljudsko odobrenje i zapisi podsjetnika** — pauzirajte automatizacije radi pregleda i izbjegnite duple obavijesti
- **TextBee SMS provider** — šaljite konfigurirane obavijesti tekstualnim porukama putem TextBee
- **Napredni prateći paket** — dodajte alate za datotečni sistem pouzdanog developera, bazu podataka, WP-CLI, REST dispečer, graditelj plugina, git snapshot, upravljanje korisnicima i benchmark, distribuirane odvojeno od WordPress.org verzije

### Poboljšano

- **Podešavanje upravljane Superdav usluge** — dodajte endpointe hostovane usluge i automatsko obezbjeđivanje veze za podržane stranice
- **Pakovanje izdanja** — izgradite odvojene core i Advanced ZIP datoteke, objavite obje na GitHubu i pošaljite samo core paket na WordPress.org

### Ispravljeno

- **Pouzdanost AI zahtjeva** — poboljšan izbor modela, vremenska ograničenja zahtjeva, podrazumijevani model za podešavanje, rukovanje tekstom rezonovanja i upute za ponovni pokušaj kod nevažećih poziva alata
- **Učvršćivanje kalendara i podsjetnika** — ojačani Google Calendar tokeni i deduplikacija podsjetnika
- **Onboarding i nastavci odobrenja** — ispravljena pokretanja frontend onboardinga i nastavci potvrđenih sposobnosti
- **Problemi pregleda pakovanja za WordPress.org** — obrađene povratne informacije pregleda pakovanja za core izdanje

## 1.16.0 — Objavljeno 2026-05-20

### Novo

- **Sposobnost generiranja Logo SVG-a** — Theme Builder sada može generirati i ugraditi prilagođene logo SVG-ove sa sanitizacijom sigurnom za namespace
- **Upload fotografije u intervjuu za otkrivanje** — intervju za otkrivanje u Theme Builderu sada uključuje korak uploada fotografije za bogatiji dizajnerski kontekst
- **Sposobnost validacije kontrasta palete** — provjerite parove boja za WCAG usklađenost prije primjene na temu
- **Meniji za ugostiteljstvo** — Theme Builder sada može generirati strukturirane stranice menija hrane i pića za ugostiteljske biznise
- **Renderiranje desktop i mobilnog pregleda** — pregledajte svoj dizajn na desktop i mobilnim uređajima tokom izbora dizajnerskog smjera
- **Parametar oznake navigacije** — sposobnost kreiranja menija sada podržava zaseban `navigation_label` odvojen od naslova stranice
- **Dostupnost Tier 1 alata** — sd-ai-agent/site-scrape je sada Tier 1 alat dostupan po defaultu u Theme Builderu

### Ispravljeno

- **Keš AI Clienta** — sada je podržan transientima za postojanost između zahtjeva, čime se sprečava gubitak podataka na dugotrajnim zadacima agenta
- **Linkovi radnji reda plugina** — ispravljeni i preimenovani radi jasnoće

## 1.10.0 — Objavljeno 2026-05-05

### Novo

- **Tavily internet pretraga** — dodajte Tavily kao providera pretrage za bogatije rezultate internet pretrage uz Brave Search
- **Ugrađene vještine svjesne teme** — vodiči za vještine Block Themes, Classic Themes, Kadence Blocks i Kadence Theme sada dolaze s pluginom
- **Sposobnost kontakt forme u graditelju stranice** — dodajte kontakt formu na bilo koju stranicu direktno iz chat interfejsa

### Poboljšano

- **WooCommerce integracija refaktorisana** — sada koristi nativne WooCommerce API-je za bolju pouzdanost i kompatibilnost
- **Lista providera se automatski osvježava** — kada se bilo koji plugin aktivira ili deaktivira

### Ispravljeno

- **navigate-to sposobnost** — ispravljena beskonačna petlja ponovnog učitavanja na nekim admin stranicama
- **list-posts sposobnost** — sada ispravno razrješava nazive kategorija i oznaka u slugove
- **WP-CLI komande** — vraćeni nedostajući aliasi namespacea nakon prethodnog refaktorisanja
- **Automatizacija događaja** — elegantno rukuje stranicama na kojima tabele automatizacije još nisu kreirane
- **memory-save sposobnost** — sada koristi ispravan prefiks namespacea u graditelju sistemske instrukcije
- **Skalarni rezultati alata** — sada su ispravno omotani prije vraćanja AI-ju
- **Statistika upotrebe** — sada ispravno obrađuje naslijeđeni format ključa sposobnosti pri nadogradnji sa starijih verzija
