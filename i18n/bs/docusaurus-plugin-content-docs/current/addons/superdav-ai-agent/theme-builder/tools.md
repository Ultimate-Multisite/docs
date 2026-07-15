---
title: Alati i konfiguracija
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Alati i konfiguracija

Theme Builder koristi skup alata za analizu, dizajn i izgradnju vaše WordPress stranice. U verziji 1.16.0, **sd-ai-agent/site-scrape je sada alat Nivoa 1**, što ga čini dostupnim po zadanim postavkama u Theme Builderu. Superdav AI Agent v1.18.0 također uvodi odvojeno distribuiran napredni prateći paket za pouzdane razvojne tokove rada; ti alati nisu dio osnovnog WordPress.org paketa i moraju se instalirati i autorizovati odvojeno.

## Dostupni alati {#available-tools}

### Alati Nivoa 1 (Uvijek dostupni) {#tier-1-tools-always-available}

Alati Nivoa 1 dostupni su po zadanim postavkama u Theme Builderu bez dodatne konfiguracije.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Svrha:** Analizirati postojeće web stranice radi izdvajanja dizajnerske inspiracije, strukture sadržaja i funkcionalnosti.

**Mogućnosti:**

- **Analiza web stranice** — prikupljanje i analiza konkurentskih ili inspirativnih web stranica
- **Izdvajanje dizajna** — prepoznavanje boja, fontova i obrazaca rasporeda
- **Struktura sadržaja** — razumijevanje organizacije i hijerarhije stranica
- **Detekcija funkcija** — prepoznavanje pluginova i funkcionalnosti
- **Analiza performansi** — provjera brzine stranice i optimizacije
- **SEO analiza** — pregled meta oznaka i strukturiranih podataka

**Upotreba:**

```
Analiziraj dizajn example.com i koristi ga kao inspiraciju za moju stranicu.
```

**Šta izdvaja:**

- Paletu boja i upotrebu boja
- Tipografiju (fontove i veličine)
- Strukturu rasporeda i razmake
- Obrasce navigacije
- Organizaciju sadržaja
- Upotrebu slika i medija
- Interaktivne elemente
- Prilagodljivost mobilnim uređajima

**Ograničenja:**

- Ne može prikupljati podatke sa stranica zaštićenih lozinkom
- Poštuje robots.txt i pravila stranice
- Možda neće obuhvatiti dinamički sadržaj
- Stranice koje se u velikoj mjeri oslanjaju na JavaScript mogu imati ograničenu analizu
- Analiza velikih stranica može trajati duže

### Alati Nivoa 2 (Opcionalno) {#tier-2-tools-optional}

Alati Nivoa 2 dostupni su kada su izričito omogućeni u postavkama Theme Buildera.

#### Napredna analitika {#advanced-analytics}

Pruža detaljne metrike performansi:

- Vremena učitavanja stranice
- Core Web Vitals
- SEO rezultat
- Rezultat pristupačnosti
- Rezultat najboljih praksi

#### Optimizator sadržaja {#content-optimizer}

Analizira i predlaže poboljšanja za:

- Čitljivost
- SEO optimizaciju
- Upotrebu ključnih riječi
- Strukturu sadržaja
- Položaj poziva na akciju

### Alati Nivoa 3 (Premium) {#tier-3-tools-premium}

Alati Nivoa 3 zahtijevaju dodatnu konfiguraciju ili premium funkcije.

#### AI generator sadržaja {#ai-content-generator}

Generiše sadržaj za:

- Opise proizvoda
- Stranice usluga
- Blog objave
- Meta opise
- Tekst poziva na akciju

#### Napredni dizajnerski alati {#advanced-design-tools}

Pruža napredne dizajnerske mogućnosti:

- Generisanje prilagođenog CSS-a
- Kreiranje animacija
- Dizajn interaktivnih elemenata
- Naprednu teoriju boja
- Optimizaciju tipografije

### Napredni prateći alati (Odvojeni paket) {#advanced-companion-tools-separate-package}

Napredni prateći paket distribuira se odvojeno od osnovnog izdanja Superdav AI Agenta. Namijenjen je pouzdanim okruženjima za programere i vlasnike stranica gdje administratori izričito dozvoljavaju agentu da koristi alate visokog utjecaja.

Mogućnosti naprednog pratećeg paketa mogu uključivati:

- **Alati sistema datoteka** — pregled i izmjena odobrenih datoteka u pouzdanim okruženjima
- **Alati baze podataka** — upiti ili ažuriranje podataka stranice kada je izričito autorizovano
- **WP-CLI alati** — pokretanje WordPress komandi za održavanje i inspekciju
- **Alati REST dispečera** — pozivanje registrovanih REST endpointa kroz kontrolisane tokove dispečiranja
- **Alati za izgradnju pluginova** — postavljanje okvira i iteriranje nad kodom plugina
- **Alati Git snimaka** — kreiranje snimaka prije rizičnih razvojnih operacija
- **Alati za upravljanje korisnicima** — pomoć pri pregledu ili prilagođavanju korisničkih zapisa gdje je dozvoljeno
- **Benchmark alati** — pokretanje benchmarka performansi ili mogućnosti za razvojni pregled

Nemojte ih dokumentovati kao općenito dostupne Theme Builder alate za svaku instalaciju. Dostupni su samo kada je napredni prateći paket instaliran, omogućen i ograničen na pouzdane administratore.

## Konfiguracija alata {#tool-configuration}

### Omogućavanje alata {#enabling-tools}

Da omogućite dodatne alate u Theme Builderu:

1. Idite na **Gratis AI Agent → Settings**
2. Idite na **Theme Builder → Tools**
3. Uključite/isključite alate prema potrebi
4. Sačuvajte postavke

### Dozvole alata {#tool-permissions}

Neki alati zahtijevaju dozvole:

- **Prikupljanje podataka sa stranice** — zahtijeva pristup internetu
- **Analitika** — zahtijeva integraciju s Google Analytics
- **Generisanje sadržaja** — zahtijeva API ključeve
- **Napredne funkcije** — mogu zahtijevati premium pretplatu
- **Napredni prateći alati** — zahtijevaju odvojeno distribuirani napredni paket i izričito povjerenje administratora

### API ključevi i akreditivi {#api-keys-and-credentials}

Konfigurišite API ključeve za alate kojima su potrebni:

1. Idite na **Gratis AI Agent → Settings → API Keys**
2. Unesite akreditive za svaki alat
3. Testirajte vezu
4. Sačuvajte sigurno

### Instaliranje naprednog pratećeg paketa {#installing-the-advanced-companion-package}

Napredni prateći paket objavljuje se odvojeno od osnovnog WordPress.org ZIP-a. Instalirajte ga samo iz službenog distribucijskog kanala projekta za izdanje, a zatim ograničite pristup na pouzdane administratore. Pregledajte mehanizme ljudskog odobrenja i ponašanje git snimaka prije omogućavanja alata za sistem datoteka, bazu podataka, WP-CLI, REST dispečer, izgradnju pluginova, upravljanje korisnicima ili benchmark na produkcijskoj stranici.

## Korištenje sd-ai-agent/site-scrape {#using-sd-ai-agentsite-scrape}

### Osnovna upotreba {#basic-usage}

Zatražite od Theme Buildera da analizira web stranicu:

```
Analiziraj dizajn stranice mog konkurenta na competitor.com
i predloži poboljšanja dizajna za moju stranicu.
```

### Specifična analiza {#specific-analysis}

Zatražite specifične vrste analize:

```
Izdvoji paletu boja sa example.com i koristi je kao inspiraciju.
```

```
Analiziraj strukturu navigacije na example.com i primijeni sličnu
organizaciju na moju stranicu.
```

```
Provjeri prilagodljivost example.com mobilnim uređajima i osiguraj da je moja stranica
jednako prilagodljiva.
```

### Uporedna analiza {#comparison-analysis}

Uporedite više stranica:

```
Uporedi dizajne site1.com i site2.com i kreiraj dizajn
koji kombinuje najbolje elemente oba.
```

## Ograničenja i razmatranja alata {#tool-limitations-and-considerations}

### Ograničenje učestalosti {#rate-limiting}

- Prikupljanje podataka je ograničeno po stopi kako bi se spriječilo preopterećenje servera
- Višestruki zahtjevi prema istoj stranici mogu biti usporeni
- Za analizu velikih stranica može biti potrebno više vremena

### Tačnost sadržaja {#content-accuracy}

- Dinamički sadržaj možda neće biti u potpunosti obuhvaćen
- Sadržaj renderovan pomoću JavaScript-a može biti nepotpun
- Podaci u stvarnom vremenu možda neće biti prikazani
- Neki sadržaj može biti iza paywall-a

### Pravna i etička razmatranja {#legal-and-ethical-considerations}

- Poštujte robots.txt i pravila stranice
- Nemojte prikupljati autorski zaštićen sadržaj radi reprodukcije
- Koristite analizu za inspiraciju, ne za kopiranje
- Provjerite imate li prava za korištenje izdvojenog sadržaja
- Pridržavajte se uslova korištenja analiziranih stranica

### Uticaj na performanse {#performance-impact}

- Prikupljanje podataka s velikih stranica može potrajati
- Višestruka istovremena prikupljanja podataka mogu biti sporija
- Mrežna povezanost utiče na brzinu
- Veliki skupovi podataka mogu zahtijevati više obrade

## Najbolje prakse {#best-practices}

### Korištenje analize stranice {#using-site-analysis}

1. **Analizirajte više stranica** — prikupite inspiraciju iz nekoliko izvora
2. **Fokusirajte se na strukturu** — naučite obrasce rasporeda i organizacije
3. **Izdvojite boje** — koristite palete boja kao početne tačke
4. **Proučite tipografiju** — identificirajte kombinacije fontova koje vam se sviđaju
5. **Pregledajte navigaciju** — razumite organizaciju menija

### Etičko prikupljanje podataka {#ethical-scraping}

1. **Poštujte robots.txt** — slijedite smjernice stranice
2. **Nemojte kopirati sadržaj** — koristite analizu samo za inspiraciju
3. **Provjerite prava** — osigurajte da možete koristiti izdvojeni sadržaj
4. **Navedite izvore** — priznajte izvore inspiracije
5. **Pridržavajte se uslova** — poštujte uslove korištenja stranice

### Maksimiziranje efikasnosti alata {#maximizing-tool-effectiveness}

1. **Budite specifični** — zatražite konkretne vrste analize
2. **Pružite kontekst** — objasnite svrhu svoje stranice
3. **Postavite očekivanja** — opišite svoje dizajnerske ciljeve
4. **Iterirajte** — usavršavajte na osnovu rezultata
5. **Kombinirajte alate** — koristite više alata za sveobuhvatnu analizu

## Rješavanje problema {#troubleshooting}

### Nije moguće prikupljati podatke sa stranice {#site-wont-scrape}

- Provjerite je li stranica javno dostupna
- Provjerite dozvoljava li robots.txt prikupljanje podataka
- Pokušajte s drugom stranicom
- Provjerite internet vezu
- Kontaktirajte podršku ako se problem nastavi

### Nepotpuna analiza {#incomplete-analysis}

- Stranica može imati dinamički sadržaj
- JavaScript možda neće biti u potpunosti renderovan
- Velike stranice mogu isteći zbog vremenskog ograničenja
- Pokušajte umjesto toga analizirati konkretne stranice
- Zatražite konkretne vrste analize

### Spore performanse {#slow-performance}

- Analiza velikih stranica traje duže
- Višestruka istovremena prikupljanja podataka su sporija
- Mrežna povezanost utiče na brzinu
- Pokušajte tokom sati manjeg opterećenja
- Prvo analizirajte manje sekcije

## Povezana dokumentacija {#related-documentation}

- [Discovery Interview](./discovery-interview.md) — prikupite informacije o dizajnu
- [Design Direction](./design-direction.md) — usavršite svoj dizajn
- [Hospitality Menus](./hospitality-menus.md) — kreirajte stranice menija
