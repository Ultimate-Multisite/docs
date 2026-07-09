---
title: Alati i konfiguracija
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Alati i konfiguracija {#tools-and-configuration}

Theme Builder koristi skup alata za analizu, dizajn i izradu vaše WordPress stranice. U verziji 1.16.0, **sd-ai-agent/site-scrape sada je alat Tier 1**, što ga čini dostupnim prema zadanim postavkama u Theme Builder. Superdav AI Agent v1.18.0 također uvodi zasebno distribuirani Advanced popratni paket za pouzdane razvojne tijekove rada; ti alati nisu dio osnovnog WordPress.org paketa i moraju se instalirati i autorizirati zasebno.

## Dostupni alati {#available-tools}

### Tier 1 alati (uvijek dostupni) {#tier-1-tools-always-available}

Tier 1 alati dostupni su prema zadanim postavkama u Theme Builder bez ikakve dodatne konfiguracije.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Svrha:** Analizirati postojeće web-stranice radi izdvajanja dizajnerske inspiracije, strukture sadržaja i funkcionalnosti.

**Mogućnosti:**

- **Analiza web-stranice** — dohvatite i analizirajte konkurentske ili inspirativne web-stranice
- **Izdvajanje dizajna** — prepoznajte boje, fontove i obrasce rasporeda
- **Struktura sadržaja** — razumijte organizaciju i hijerarhiju stranica
- **Otkrivanje značajki** — prepoznajte plugine i funkcionalnost
- **Analiza performansi** — provjerite brzinu stranice i optimizaciju
- **SEO analiza** — pregledajte meta oznake i strukturirane podatke

**Upotreba:**

```
Analiziraj dizajn example.com i upotrijebi ga kao inspiraciju za moju stranicu.
```

**Što izdvaja:**

- Paletu boja i upotrebu boja
- Tipografiju (fontove i veličine)
- Strukturu rasporeda i razmake
- Obrasce navigacije
- Organizaciju sadržaja
- Upotrebu slika i medija
- Interaktivne elemente
- Prilagodljivost mobilnim uređajima

**Ograničenja:**

- Ne može dohvaćati stranice zaštićene lozinkom
- Poštuje robots.txt i pravila stranice
- Možda neće obuhvatiti dinamički sadržaj
- Stranice s mnogo JavaScript-a mogu imati ograničenu analizu
- Analiza velikih stranica može potrajati dulje

### Tier 2 alati (neobavezno) {#tier-2-tools-optional}

Tier 2 alati dostupni su kada su izričito omogućeni u postavkama Theme Builder.

#### Napredna analitika {#advanced-analytics}

Pruža detaljne metrike performansi:

- Vrijeme učitavanja stranice
- Core Web Vitals
- SEO ocjenu
- Ocjenu pristupačnosti
- Ocjenu najboljih praksi

#### Optimizator sadržaja {#content-optimizer}

Analizira i predlaže poboljšanja za:

- Čitljivost
- SEO optimizaciju
- Upotrebu ključnih riječi
- Strukturu sadržaja
- Položaj poziva na akciju

### Tier 3 alati (Premium) {#tier-3-tools-premium}

Tier 3 alati zahtijevaju dodatnu konfiguraciju ili premium značajke.

#### AI generator sadržaja {#ai-content-generator}

Generira sadržaj za:

- Opise proizvoda
- Stranice usluga
- Blog objave
- Meta opise
- Tekst poziva na akciju

#### Napredni dizajnerski alati {#advanced-design-tools}

Pruža napredne dizajnerske mogućnosti:

- Generiranje prilagođenog CSS-a
- Izradu animacija
- Dizajn interaktivnih elemenata
- Naprednu teoriju boja
- Optimizaciju tipografije

### Advanced popratni alati (zasebni paket) {#advanced-companion-tools-separate-package}

Advanced popratni paket distribuira se zasebno od osnovnog izdanja Superdav AI Agent. Namijenjen je pouzdanim okruženjima za developere i vlasnike stranica u kojima administratori izričito dopuštaju agentu upotrebu alata s velikim utjecajem.

Advanced popratne mogućnosti mogu uključivati:

- **Alati datotečnog sustava** — pregledavajte i mijenjajte odobrene datoteke u pouzdanim okruženjima
- **Alati baze podataka** — upitujte ili ažurirajte podatke stranice kada je izričito autorizirano
- **WP-CLI alati** — pokrećite WordPress naredbe za održavanje i pregled
- **REST dispatcher alati** — pozivajte registrirane REST endpoint-e putem kontroliranih tijekova dispatch rada
- **Alati za izradu pluginova** — postavite početnu strukturu i iterirajte na kodu plugina
- **Git snapshot alati** — izradite snapshotove prije rizičnih developerskih operacija
- **Alati za upravljanje korisnicima** — pomozite pregledati ili prilagoditi korisničke zapise gdje je dopušteno
- **Benchmark alati** — pokrenite benchmarke performansi ili mogućnosti za razvojni pregled

Nemojte ih dokumentirati kao općenito dostupne Theme Builder alate za svaku instalaciju. Dostupni su samo kada je Advanced popratni paket instaliran, omogućen i ograničen na pouzdane administratore.

## Konfiguracija alata {#tool-configuration}

### Omogućavanje alata {#enabling-tools}

Za omogućavanje dodatnih alata u Theme Builder:

1. Idite na **Gratis AI Agent → Settings**
2. Idite na **Theme Builder → Tools**
3. Uključite ili isključite alate prema potrebi
4. Spremite postavke

### Dopuštenja alata {#tool-permissions}

Neki alati zahtijevaju dopuštenja:

- **Dohvaćanje stranice** — zahtijeva pristup internetu
- **Analitika** — zahtijeva integraciju s Google Analytics
- **Generiranje sadržaja** — zahtijeva API ključeve
- **Napredne značajke** — mogu zahtijevati premium pretplatu
- **Advanced popratni alati** — zahtijevaju zasebno distribuirani Advanced paket i izričito povjerenje administratora

### API ključevi i vjerodajnice {#api-keys-and-credentials}

Konfigurirajte API ključeve za alate koji ih zahtijevaju:

1. Idite na **Gratis AI Agent → Settings → API Keys**
2. Unesite vjerodajnice za svaki alat
3. Testirajte vezu
4. Spremite na siguran način

### Instaliranje Advanced popratnog paketa {#installing-the-advanced-companion-package}

Advanced popratni paket objavljuje se zasebno od osnovnog WordPress.org ZIP-a. Instalirajte ga samo iz službenog distribucijskog kanala projekta za izdanje, zatim ograničite pristup pouzdanim administratorima. Pregledajte kontrolne točke ljudskog odobrenja i ponašanje git snapshota prije omogućavanja alata datotečnog sustava, baze podataka, WP-CLI, REST dispatchera, izrade pluginova, upravljanja korisnicima ili benchmarka na produkcijskoj stranici.

## Upotreba sd-ai-agent/site-scrape {#using-sd-ai-agentsite-scrape}

### Osnovna upotreba {#basic-usage}

Zatražite od Theme Builder da analizira web-stranicu:

```
Analiziraj dizajn stranice mog konkurenta na competitor.com
i predloži poboljšanja dizajna za moju stranicu.
```

### Specifična analiza {#specific-analysis}

Zatražite specifične vrste analize:

```
Izdvoji paletu boja s example.com i upotrijebi je kao inspiraciju.
```

```
Analiziraj navigacijsku strukturu example.com i primijeni sličnu
organizaciju na moju stranicu.
```

```
Provjeri prilagodljivost example.com mobilnim uređajima i osiguraj da je moja stranica
jednako prilagodljiva.
```

### Usporedna analiza {#comparison-analysis}

Usporedite više stranica:

```
Usporedi dizajne site1.com i site2.com i izradi dizajn
koji kombinira najbolje elemente oba.
```

## Ograničenja i razmatranja alata {#tool-limitations-and-considerations}

### Ograničavanje stope {#rate-limiting}

- Scraping je ograničen brzinom kako bi se spriječilo preopterećenje poslužitelja
- Višestruki zahtjevi prema istom siteu mogu biti usporeni
- Analiza velikih siteova može potrajati dulje

### Točnost sadržaja {#content-accuracy}

- Dinamički sadržaj možda neće biti u potpunosti zabilježen
- Sadržaj renderiran JavaScriptom može biti nepotpun
- Podaci u stvarnom vremenu možda neće biti odraženi
- Neki sadržaj može biti iza paywalla

### Pravna i etička razmatranja {#legal-and-ethical-considerations}

- Poštujte robots.txt i pravila sitea
- Nemojte scrapati sadržaj zaštićen autorskim pravima radi reprodukcije
- Koristite analizu za inspiraciju, a ne za kopiranje
- Provjerite imate li prava za upotrebu izdvojenog sadržaja
- Slijedite uvjete korištenja analiziranih siteova

### Utjecaj na performanse {#performance-impact}

- Scraping velikih siteova može potrajati
- Višestruki istodobni scrapovi mogu biti sporiji
- Mrežna povezivost utječe na brzinu
- Veliki skupovi podataka mogu zahtijevati više obrade

## Najbolje prakse {#best-practices}

### Korištenje analize sitea {#using-site-analysis}

1. **Analizirajte više siteova** — prikupite inspiraciju iz nekoliko izvora
2. **Usredotočite se na strukturu** — naučite obrasce rasporeda i organizacije
3. **Izdvojite boje** — koristite palete boja kao polazne točke
4. **Proučite tipografiju** — prepoznajte kombinacije fontova koje vam se sviđaju
5. **Pregledajte navigaciju** — razumijte organizaciju izbornika

### Etički scraping {#ethical-scraping}

1. **Poštujte robots.txt** — slijedite smjernice sitea
2. **Nemojte kopirati sadržaj** — koristite analizu samo za inspiraciju
3. **Provjerite prava** — osigurajte da možete koristiti izdvojeni sadržaj
4. **Navedite izvore** — navedite zasluge za izvore inspiracije
5. **Slijedite uvjete** — pridržavajte se uvjeta korištenja sitea

### Maksimiziranje učinkovitosti alata {#maximizing-tool-effectiveness}

1. **Budite specifični** — zatražite specifične vrste analize
2. **Pružite kontekst** — objasnite svrhu svojeg sitea
3. **Postavite očekivanja** — opišite svoje dizajnerske ciljeve
4. **Iterirajte** — doradite na temelju rezultata
5. **Kombinirajte alate** — koristite više alata za sveobuhvatnu analizu

## Rješavanje problema {#troubleshooting}

### Site se ne može scrapati {#site-wont-scrape}

- Provjerite je li site javno dostupan
- Provjerite dopušta li robots.txt scraping
- Pokušajte s drugim siteom
- Provjerite internetsku vezu
- Kontaktirajte podršku ako se problem nastavi

### Nepotpuna analiza {#incomplete-analysis}

- Site može imati dinamički sadržaj
- JavaScript možda neće biti u potpunosti renderiran
- Veliki siteovi mogu isteći
- Pokušajte umjesto toga analizirati specifične stranice
- Zatražite specifične vrste analize

### Spore performanse {#slow-performance}

- Analiza velikih siteova traje dulje
- Višestruki istodobni scrapovi su sporiji
- Mrežna povezivost utječe na brzinu
- Pokušajte tijekom sati manjeg opterećenja
- Najprije analizirajte manje odjeljke

## Povezana dokumentacija {#related-documentation}

- [Discovery Interview](./discovery-interview.md) — prikupite informacije o dizajnu
- [Design Direction](./design-direction.md) — doradite svoj dizajn
- [Hospitality Menus](./hospitality-menus.md) — izradite stranice izbornika
