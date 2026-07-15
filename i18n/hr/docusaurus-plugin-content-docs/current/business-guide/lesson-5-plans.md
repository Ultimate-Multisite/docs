---
title: 'Lekcija 5: Dizajniranje vaših planova'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Lekcija 5: Dizajniranje vaših planova

Razine vaših planova nisu samo cjenovni nivoi -- one su odraz načina na koji vaši nišni klijenti stvarno posluju. U ovoj lekciji dizajnirat ćete razine proizvoda koje odgovaraju stvarnim potrebama fitness poduzeća u različitim fazama.

## Gdje smo stali {#where-we-left-off}

FitSite ima spremna tri predloška (Studio Essential, Gym Pro, Fitness Chain). Sada izrađujemo planove koji određuju čemu klijenti dobivaju pristup i koliko plaćaju.

## Razmišljanje u segmentima klijenata {#thinking-in-customer-segments}

Pogreška koju većina ljudi radi jest dizajniranje planova oko tehničkih značajki (pohrana, propusnost, broj stranica). Vaši nišni klijenti ne razmišljaju na taj način. Vlasnik teretane razmišlja o tome što mu treba za vođenje poslovanja.

Za fitness studije postoje tri prirodna segmenta:

| Segment | Tko su oni | Što im treba |
|---------|-------------|----------------|
| **Samostalni treneri / mali studiji** | 1-3 člana osoblja, jedna lokacija, tek počinju | Profesionalno web-mjesto, informacije o satovima, kontakt obrazac |
| **Uhodane teretane** | 5-20 članova osoblja, jedna lokacija, rastu | Sve navedeno plus rezervacije, blog, galerija, prilagođena domena |
| **Fitness lanci** | Više lokacija, uhodan brend | Sve navedeno plus više web-mjesta, stranice lokacija, imenik osoblja |

Vaši planovi trebali bi se preslikati na te segmente, a ne na proizvoljne pakete značajki.

## Izrada FitSite planova {#creating-the-fitsite-plans}

Idite na **Ultimate Multisite > Proizvodi > Dodaj proizvod** za svaki plan.

### Plan 1: FitSite Starter -- $49/mjesečno {#plan-1-fitsite-starter----49month}

**Cilj**: Samostalni treneri i mali studiji

**Kartica opisa**:
- Naziv: FitSite Starter
- Opis: "Sve što osobni trener ili mali studio treba kako bi izgledao profesionalno online."

**Kartica Općenito**:
- Vrsta proizvoda: Plan
- Uloga klijenta: Administrator

**Kartica Predlošci web-mjesta**:
- Dopusti predloške web-mjesta: Omogućeno
- Dostupni predlošci: samo Studio Essential

**Ograničenja**:
- Web-mjesta: 1
- Prostor na disku: 1 GB
- Prilagođena domena: Onemogućeno (koristi `studioname.fitsite.com`)

**Kartica Pluginovi**:
- Plugin za kontakt obrazac: Prisilno aktiviraj
- SEO plugin: Prisilno aktiviraj
- Plugin za rezervacije: Nije dostupno (poticaj za nadogradnju)

**Kartica Teme**:
- Vaša odabrana tema: Prisilno aktiviraj
- Sve ostale teme: Skriveno

### Plan 2: FitSite Growth -- $99/mjesečno {#plan-2-fitsite-growth----99month}

**Cilj**: Uhodane teretane s jednom lokacijom

**Kartica opisa**:
- Naziv: FitSite Growth
- Opis: "Za uhodane teretane spremne povećati svoju online prisutnost i privući nove članove."

**Kartica Predlošci web-mjesta**:
- Dostupni predlošci: Studio Essential i Gym Pro

**Ograničenja**:
- Web-mjesta: 1
- Prostor na disku: 5 GB
- Prilagođena domena: Omogućeno

**Kartica Pluginovi**:
- Sve iz Startera, plus:
- Plugin za rezervacije: Prisilno aktiviraj
- Plugin za galeriju: Prisilno aktiviraj
- Funkcionalnost bloga: Dostupno

**Kartica Nadogradnje i vraćanje na niži plan**:
- Grupa planova: FitSite Plans
- Redoslijed proizvoda: 2

### Plan 3: FitSite Pro -- $199/mjesečno {#plan-3-fitsite-pro----199month}

**Cilj**: Fitness lanci s više lokacija

**Kartica opisa**:
- Naziv: FitSite Pro
- Opis: "Cjelovita platforma za fitness brendove s više lokacija."

**Kartica Predlošci web-mjesta**:
- Dostupni predlošci: sva tri predloška

**Ograničenja**:
- Web-mjesta: 5 (jedno po lokaciji)
- Prostor na disku: 20 GB
- Prilagođena domena: Omogućeno

**Kartica Pluginovi**:
- Sve iz Growtha, plus:
- Svi premium pluginovi: Prisilno aktiviraj

**Kartica Nadogradnje i vraćanje na niži plan**:
- Grupa planova: FitSite Plans
- Redoslijed proizvoda: 3

## Postavljanje grupe planova {#setting-up-the-plan-group}

Grupa planova osigurava da klijenti mogu nadograditi ili prijeći na niži plan samo unutar obitelji FitSite planova. Na kartici **Nadogradnje i vraćanje na niži plan** svakog plana:

1. Postavite **Grupu planova** na "FitSite Plans" za sva tri plana
2. Postavite **Redoslijed proizvoda** na 1 (Starter), 2 (Growth), 3 (Pro)

To stvara jasan put nadogradnje: Starter → Growth → Pro.

## Dodavanje dodatnih ponuda uz narudžbu {#adding-order-bumps}

Dodatne ponude uz narudžbu su dodatni proizvodi koji se nude tijekom plaćanja. Za FitSite razmotrite:

- **Paket dodatne pohrane** ($19/mjesečno) -- dodatnih 5 GB prostora na disku
- **Prioritetna podrška** ($29/mjesečno) -- brže vrijeme odgovora
- **Dodatno web-mjesto** ($39/mjesečno) -- za klijente kojima treba više web-mjesta nego što njihov plan dopušta

Izradite ih kao proizvode vrste **Paket** u Ultimate Multisite i povežite ih s relevantnim planovima.

## Zašto ova struktura funkcionira {#why-this-structure-works}

- **Starter** uklanja prepreke za ulazak -- niska cijena, jednostavna ponuda, brzo dovodi trenere online
- **Growth** dodaje značajke koje teretane stvarno traže -- rezervacije, galerije, prilagođene domene
- **Pro** služi segmentu visoke vrijednosti kojem je potrebna podrška za više lokacija
- **Dodatne ponude uz narudžbu** omogućuju klijentima prilagodbu bez kompliciranja osnovnih planova
- **Jasan put nadogradnje** znači da klijenti rastu s vama umjesto da odu

## FitSite mreža do sada {#the-fitsite-network-so-far}

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

## Što smo izradili u ovoj lekciji {#what-we-built-this-lesson}

- **Tri razine planova** preslikane na stvarne segmente fitness poslovanja
- **Ograničavanje značajki** pomoću Ultimate Multisite kontrola za pluginove i predloške
- **Grupu planova** s jasnim putem nadogradnje
- **Proizvode za dodatne ponude uz narudžbu** za dodatni prihod
- **Strukturu cijena** temeljenu na vrijednosti za klijenta, a ne na tehničkim specifikacijama

---

**Sljedeće:** [Lekcija 6: Iskustvo prijave](lesson-6-checkout) -- izgradit ćemo tijek plaćanja koji vlasnike fitness studija pretvara u klijente koji plaćaju.
