---
title: Alati i konfiguracija
sidebar_position: 4
_i18n_hash: f27cdab7be320668b6c1d53db1190775
---
# Alati i konfiguracija

Theme Builder koristi niz alata za analizu, dizajn i izgradnju vaše WordPress stranice. U verziji 1.16.0, **sd-ai-agent/site-scrape je sada alat Tier 1**, što ga čini podrazumevano dostupnim u Theme Builderu.

## Dostupni alati

### Alati Tier 1 (Uvijek dostupni)

Alati Tier 1 podrazumijevano su dostupni u Theme Builderu bez bilo kakve dodatne konfiguracije.

#### sd-ai-agent/site-scrape

**Svrha:** Analizira postojeće web stranice kako bi izvukao inspiraciju dizajna, strukturu sadržaja i funkcionalnost.

**Mogućnosti:**

- **Analiza web stranica** — skraping i analiza web stranica konkurencije ili inspiracije
- **Izvlačenje dizajna** — prepoznavanje boja, fontova i obrazaca rasporeda
- **Struktura sadržaja** — razumijevanje organizacije i hijerarhije stranice
- **Detekcija funkcija** — prepoznavanje pluginova i funkcionalnosti
- **Analiza performansi** — provjera brzine stranice i optimizacije
- **SEO analiza** — pregled meta tagova i strukturiranih podataka

**Upotreba:**

```
Analiziraj dizajn example.com i koristi ga kao inspiraciju za moju stranicu.
```

**Šta izvlači:**

- Paleta boja i korištenje boja
- Tipografija (fontovi i veličine)
- Struktura rasporeda i razmak
- Uzorci navigacije
- Organizacija sadržaja
- Korištenje slika i medija
- Interaktivni elementi
- Mobilna prilagodljivost

**Ograničenja:**

- Ne može skrapovati stranice zaštićene lozinkom
- Poštuje robots.txt i politike stranice
- Možda ne uhvati dinamički sadržaj
- Stranice sa mnogo JavaScript-a mogu imati ograničenu analizu
- Velike stranice mogu trajati duže za analizu

### Alati Tier 2 (Opcionalni)

Alati Tier 2 dostupni su kada se eksplicitno aktiviraju u postavkama Theme Builder-a.

#### Advanced Analytics

Nudi detaljne metrike performansi:

- Vrijeme učitavanja stranice
- Core Web Vitals
- SEO rezultat
- Dostupnost (Accessibility) rezultat
- Rezultat najboljih praksi

#### Content Optimizer

Analizira i predlaže poboljšanja za:

- Čitljivost
- SEO optimizaciju
- Korištenje ključnih riječi
- Strukturu sadržaja
- Pozicioniranje poziva na akciju

### Alati Tier 3 (Premium)

Alati Tier 3 zahtijevaju dodatnu konfiguraciju ili premium značajke.

#### AI Content Generator

Generiše sadržaj za:

- Opise proizvoda
- Stranice usluga
- Blog postove
- Meta opise
- Tekst poziva na akciju

#### Advanced Design Tools

Nudi napredne dizajnerske mogućnosti:

- Generisanje prilagođenog CSS-a
- Kreiranje animacija
- Dizajn interaktivnih elemenata
- Napredna teorija boja
- Optimizacija tipografije

## Konfiguracija alata

### Aktivacija alata

Da biste aktivirali dodatne alate u Theme Builderu:

1. Idite na **Gratis AI Agent → Settings**
2. Idite na **Theme Builder → Tools**
3. Prebacujte alate na uključeno/isključeno kako je potrebno
4. Sačuvajte postavke

### Dopuštenja alata

Neki alati zahtijevaju dozvole:

- **Skraping stranica** — zahtijeva pristup internetu
- **Analitika** — zahtijeva integraciju Google Analytics-a
- **Generisanje sadržaja** — zahtijeva API ključeve
- **Napredne značajke** — mogu zahtijevati premium pretplatu

### API ključevi i akreditivi

Konfigurišite API ključeve za alate koji ih zahtijevaju:

1. Idite na **Gratis AI Agent → Settings → API Keys**
2. Unesite akreditive za svaki alat
3. Testirajte konekciju
4. Sigurno sačuvajte

## Korištenje sd-ai-agent/site-scrape

### Osnovna upotreba

Zamolite Theme Builder da analizira web stranicu:

```
Analiziraj dizajn stranice mog konkurenta na competitor.com
i predloži poboljšanja dizajna za moju stranicu.
```

### Specifična analiza

Zatražite specifične tipove analize:

```
Izvuci paletu boja sa example.com i koristi je kao inspiraciju.
```

```
Analiziraj strukturu navigacije example.com i primijeni sličnu
organizaciju na moju stranicu.
```

```
Provjeri mobilnu prilagodljivost example.com i osiguraj da je moja stranica
isto prilagodljiva.
```

### Poređivačka analiza

Poredite više stranica:

```
Poredi dizajne site1.com i site2.com i kreiraj dizajn
koji kombinuje najbolje elemente obje.
```

## Ograničenja i razmatranja alata

### Ograničenje brzine (Rate Limiting)

- Skraping je ograničen kako bi se spriječio preopterećenje servera
- Više zahtjeva na istu stranicu može biti usporeno
- Velike stranice mogu trajati duže za analizu

### Tačnost sadržaja

- Dinamički sadržaj možda neće biti u potpunosti uhvaćen
- Sadržaj generisan JavaScript-om može biti nepotpun
- Podaci u realnom vremenu možda neće biti odraženi
- Neki sadržaj može biti iza plaćenih zidova

### Pravna i etička razmatranja

- Poštujte robots.txt i politike stranice
- Ne skrapujte zaštićeni sadržaj radi reprodukcije
- Koristite analizu za inspiraciju, a ne za kopiranje
- Provjerite da li imate prava za korištenje izvvučenog sadržaja
- Pridržavajte uslove korištenja analiziranih stranica

### Utjecaj na performanse

- Skraping velikih stranica može trajati
- Više istovremenih skrapova može biti sporije
- Mrežno povezivanje utječe na brzinu
- Veliki skupovi podataka mogu zahtijevati više obrade

## Najbolje prakse

### Korištenje analize stranica

1. **Analizirajte više stranica** — prikupite inspiraciju sa nekoliko izvora
2. **Fokusirajte se na strukturu** — naučite obrasce rasporeda i organizacije
3. **Izvucite boje** — koristite palete boja kao početne tačke
4. **Istražite tipografiju** — identifikujte kombinacije fontova koje volite
5. **Pregledajte navigaciju** — razumite organizaciju menija

### Etičko skrapovanje

1. **Poštujte robots.txt** — slijedite smjernice stranice
2. **Ne kopirajte sadržaj** — koristite analizu samo za inspiraciju
3. **Provjerite prava** — osigurajte da možete koristiti izvvučeni sadržaj
4. **Navedite izvore** — kreditirajte izvore inspiracije
5. **Pridržavajte uslove** — usklađujte se sa uslovima korištenja stranice

### Maksimaliziranje učinkovitosti alata

1. **Budite specifični** — tražite specifične tipove analize
2. **Dajte kontekst** — objasnite svrhu vaše stranice
3. **Postavite očekivanja** — opišite svoje dizajnerske ciljeve
4. **Iterirajte** — usavršavajte na osnovu rezultata
5. **Kombinujte alate** — koristite više alata za sveobuhvatnu analizu

## Rješavanje problema

### Stranica se ne skrapuje

- Provjerite je li stranica javno dostupna
- Potvrdite da li robots.txt dozvoljava skraping
- Pokušajte sa nekom drugom stranicom
- Provjerite internet konekciju
- Kontaktirajte podršku ako problem traje

### Nepotpuna analiza

- Stranica može imati dinamički sadržaj
- JavaScript možda nije u potpunosti renderovan
- Velike stranice mogu doživjeti timeout
- Pokušajte analizirati specifične stranice umjesto toga
- Zatražite specifične tipove analize

### Spori performanse

- Velike stranice traže više vremena za analizu
- Više istovremenih skrapova je sporije
- Mrežno povezivanje utječe na brzinu
- Pokušajte tokom manje zauzetih sati
- Analizirajte manje dijelove prvo

## Povezana dokumentacija

- [Discovery Interview](./discovery-interview.md) — prikupite informacije o dizajnu
- [Design Direction](./design-direction.md) — usavršite svoj dizajn
- [Hospitality Menus](./hospitality-menus.md) — kreirajte stranice menija
