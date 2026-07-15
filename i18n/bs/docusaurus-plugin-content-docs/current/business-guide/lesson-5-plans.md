---
title: 'Lekcija 5: Projektovanje Vaših Planova'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Lekcija 5: Dizajniranje vaših planova

Razine vaših planova nisu samo cjenovne kategorije — one odražavaju kako vaše nišne mušterije zapravo posluju. U ovoj lekciji dizajniraćete razine proizvoda koje odgovaraju stvarnim potrebama fitness poslova u različitim fazama.

## Gdje smo stali {#where-we-left-off}

FitSite ima spremne tri predloška (Studio Essential, Gym Pro, Fitness Chain). Sada kreiramo planove koji određuju na šta klijenti imaju pristup i što plaćaju.

## Razmišljanje u segmentima korisnika {#thinking-in-customer-segments}

Greška koju većina ljudi pravi je dizajniranje planova oko tehničkih funkcija (skladište, propusnost, broj stranica). Vaše nišne mušterije ne razmišljaju na taj način. Vlasnik teretane razmišlja o tome što mu je potrebno da bi poslovao.

Za fitness studije, postoje tri prirodna segmenta:

| Segment | Tko su | Što im treba |
|---------|-------------|----------------|
| **Samostalni treneri / mali studiji** | 1-3 zaposlenika, jedna lokacija, tek počinju | Profesionalna stranica, informacije o treninzima, kontakt formular |
| **Uspostavljene teretane** | 5-20 zaposlenika, jedna lokacija, rastu | Sve gore plus rezervacije, blog, galerija, custom domen |
| **Fitness lanci** | Više lokacija, uspostavljeni brend | Sve gore plus multi-site, stranice lokacija, direktorijum zaposlenika |

Vaši planovi bi trebali odgovarati ovim segmentima, a ne proizvolnim paketima funkcija.

## Kreiranje FitSite planova {#creating-the-fitsite-plans}

Idite na **Ultimate Multisite > Products > Add Product** za svaki plan.

### Plan 1: FitSite Starter — 49 $/mjesečno {#plan-1-fitsite-starter----49month}

**Ciljna grupa**: Samostalni treneri i mali studiji

**Tab "Description" (Opis)**:
- Ime: FitSite Starter
- Opis: "Sve što je potrebno personalnom treneru ili malom studiju da izgleda profesionalno online."

**Tab "General" (Općenito)**:
- Tip proizvoda: Plan
- Uloga korisnika: Administrator

**Tab "Site Templates" (Predlošci stranica)**:
- Omogućiti predloške stranica: Omogućeno
- Dostupni predlošci: Samo Studio Essential

**Ograničenja (Limitations)**:
- Stranice: 1
- Prostor na disku: 1 GB
- Custom domen: Onemogućeno (koristi `studioname.fitsite.com`)

**Tab "Plugins" (Pluginovi)**:
- Plugin za kontakt formular: Obavezno aktivirati
- SEO plugin: Obavezno aktivirati
- Plugin za rezervacije: Nije dostupan (pokretač nadogradnje)

**Tab "Themes" (Teme)**:
- Vaša odabrana tema: Obavezno aktivirati
- Sve ostale teme: Sakriveno

### Plan 2: FitSite Growth — 99 $/mjesečno {#plan-2-fitsite-growth----99month}

**Ciljna grupa**: Uspostavljene teretane u jednoj lokaciji

**Tab "Description" (Opis)**:
- Ime: FitSite Growth
- Opis: "Za uspostavljene teretane spremne za rast online prisutnosti i privlačenje novih članova."

**Tab "Site Templates" (Predlošci stranica)**:
- Dostupni predlošci: Studio Essential i Gym Pro

**Ograničenja (Limitations)**:
- Stranice: 1
- Prostor na disku: 5 GB
- Custom domen: Omogućeno

**Tab "Plugins" (Pluginovi)**:
- Sve u Starteru, plus:
- Plugin za rezervacije: Obavezno aktivirati
- Plugin za galeriju: Obavezno aktivirati
- Funkcionalnost bloga: Dostupno

**Tab "Up & Downgrades" (Nadogradnje i sniženja)**:
- Grupa planova: FitSite Plans
- Redni broj proizvoda: 2

### Plan 3: FitSite Pro — 199 $/mjesečno {#plan-3-fitsite-pro----199month}

**Ciljna grupa**: Fitness lanci s više lokacija

**Tab "Description" (Opis)**:
- Ime: FitSite Pro
- Opis: "Potpuna platforma za fitness brendove s više lokacija."

**Tab "Site Templates" (Predlošci stranica)**:
- Dostupni predlošci: Sve tri predloška

**Ograničenja (Limitations)**:
- Stranice: 5 (jedna po lokaciji)
- Prostor na disku: 20 GB
- Custom domen: Omogućeno

**Tab "Plugins" (Pluginovi)**:
- Sve u Growthu, plus:
- Svi premium pluginovi: Obavezno aktivirati

**Tab "Up & Downgrades" (Nadogradnje i sniženja)**:
- Grupa planova: FitSite Plans
- Redni broj proizvoda: 3

## Postavljanje grupe planova {#setting-up-the-plan-group}

Grupa planova osigurava da klijenti mogu nadograditi ili sniziti svoj plan samo unutar porodice planova FitSite. Na tabu **Up & Downgrades** svakog plana:

1. Postavite **Plan Group** na "FitSite Plans" za sva tri plana
2. Postavite **Product Order** na 1 (Starter), 2 (Growth), 3 (Pro)

Ovo stvara jasan put nadogradnje: Starter → Growth → Pro.

## Dodavanje "Order Bumps" (Dodatnih stavki porudžbe) {#adding-order-bumps}

Order bumps su dodani proizvodi koji se nude tijekom checkout procesa. Za FitSite, razmislite o:

- **Extra Storage Pack** (19 $/mjesečno) — dodatnih 5 GB prostora na disku
- **Priority Support** (29 $/mjesečno) — brže vrijeme odgovora
- **Additional Site** (39 $/mjesečno) — za klijente kojima je potrebno više stranica nego što njihov plan dopušta

Kreirajte ih kao proizvode tipa **Package** u Ultimate Multisite i povežite ih s odgovarajućim planovima.

## Zašto ova struktura funkcionira {#why-this-structure-works}

- **Starter** uklanja barijere za ulazak — niska cijena, jednostavna ponuda, brzo stavlja trenere online
- **Growth** dodaje funkcije koje teretane zapravo traže — rezervacije, galerije, custom domene
- **Pro** služi segmentu visoke vrijednosti koji zahtijeva podršku za više lokacija
- **Order bumps** omogućuju klijentima da prilagode bez komplikovanja osnovnih planova
- **Jasan put nadogradnje** znači da klijenti rastu s vama, umjesto da napuštaju

## FitSite Mreža do sada {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## Što smo izgradili u ovoj lekciji {#what-we-built-this-lesson}

- **Tri razine planova** mapirane na stvarne fitness poslovne segmente
- **Kontrola funkcija** korištenjem pluginova i kontrola predložaka Ultimate Multisite-a
- **Grupa planova** s jasnim putem nadogradnje
- **Proizvodi tipa order bump** za dodatni prihod
- **Struktura cijena** bazirana na vrijednosti klijenta, a ne na tehničkim specifikacijama

---

**Sljedeće:** [Lekcija 6: Iskustvo prijave](lesson-6-checkout) — izgradit ćemo proces plaćanja koji pretvara vlasnike fitness studija u plaćene klijente.
