---
title: 'Lekcija 8: Uvođenje korisnika'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Lekcija 8: Uvođenje korisnika

Navesti korisnika da se prijavi samo je pola posla. Ako se prijavi, osjeti se preplavljeno i nikad se ne vrati, izgubili ste ga. Ova lekcija osmišljava iskustvo koje novu prijavu pretvara u aktivnog, angažiranog korisnika.

## Gdje smo stali {#where-we-left-off}

FitSite je potpuno brendiran s funkcionalnim tijekom naplate. Sada se fokusiramo na ono što se događa nakon što vlasnik fitness studija dovrši prijavu i prvi put dođe na svoje novo web-mjesto.

## Zašto je uvođenje važno {#why-onboarding-matters}

Prvih 30 minuta nakon prijave određuje hoće li korisnik ostati ili odustati. Vlasnik fitness studija koji:

- Prijavi se i vidi web-mjesto koje već izgleda kao fitness web-mjesto → ostaje
- Točno zna što treba sljedeće učiniti → ostaje
- Osjeća se izgubljeno u generičkom WordPress Dashboardu → odlazi

Vaši nišni predlošci (Lekcija 4) rješavaju prvu točku. Ova lekcija rješava drugu.

## Iskustvo prve prijave {#the-first-login-experience}

### Widget dobrodošlice na Dashboardu {#welcome-dashboard-widget}

Izradite prilagođeni widget za Dashboard koji pozdravlja nove korisnike i vodi ih kroz postavljanje. Trebao bi se istaknuto prikazati pri njihovoj prvoj prijavi.

**FitSite brzi početak:**

1. **Dodajte naziv i logotip svog studija** -- Poveznica na Customizer ili postavke Site Identity
2. **Ažurirajte raspored svojih treninga** -- Poveznica izravno na uređivač stranice s treninzima
3. **Dodajte svoje trenere** -- Poveznica na uređivač stranice s trenerima
4. **Postavite svoje kontakt podatke** -- Poveznica na uređivač kontaktne stranice
5. **Pregledajte svoje web-mjesto** -- Poveznica na frontend

Svaki korak vodi izravno na relevantnu stranicu ili postavku. Bez traženja po izbornicima.

### Pojednostavite Dashboard {#simplify-the-dashboard}

Novi korisnici ne moraju vidjeti svaku stavku WordPress izbornika. Razmotrite:

- Skrivanje stavki izbornika koje nisu relevantne za upravljanje fitness web-mjestom (npr. komentari ako se ne koriste)
- Promjenu redoslijeda izbornika kako bi najčešće korištene stavke bile prve
- Dodavanje prilagođenih oznaka izbornika koje imaju smisla za nišu ("Vaš studio" umjesto "Izgled")

Addon [Upravitelj pluginova i tema](/addons/plugin-and-theme-manager) može pomoći u kontroli onoga što korisnici vide.

## Sekvenca e-pošte dobrodošlice {#welcome-email-sequence}

Jedna poruka dobrodošlice nije dovoljna. Postavite sekvencu koja vodi korisnike kroz njihov prvi tjedan:

### E-pošta 1: Dobrodošlica (Odmah nakon prijave) {#email-1-welcome-immediately-after-signup}

- Predmet: "Dobrodošli u FitSite -- web-mjesto vašeg studija je aktivno"
- Sadržaj: Poveznica za prijavu, koraci za brzi početak, poveznica na resurse za pomoć
- Ton: Uzbuđen, ohrabrujući, specifičan za fitness

### E-pošta 2: Brze pobjede (1. dan) {#email-2-quick-wins-day-1}

- Predmet: "3 stvari koje prvo trebate napraviti na svom FitSiteu"
- Sadržaj: Dodajte svoj logotip, ažurirajte hero sliku na početnoj stranici, dodajte raspored svojih treninga
- Uključite snimke zaslona koje točno pokazuju gdje kliknuti

### E-pošta 3: Učinite ga svojim (3. dan) {#email-3-make-it-yours-day-3}

- Predmet: "Istaknite svoje fitness web-mjesto"
- Sadržaj: Prilagodite boje, dodajte fotografije trenera, napišite priču svog studija
- Poveznica na primjere izvrsnih fitness web-mjesta na platformi

### E-pošta 4: Objavite uživo (7. dan) {#email-4-go-live-day-7}

- Predmet: "Spremni podijeliti svoj FitSite sa svijetom?"
- Sadržaj: Kontrolni popis onoga što treba provjeriti prije dijeljenja, kako povezati prilagođenu domenu (ako ste na Growth/Pro), savjeti za dijeljenje na društvenim mrežama

:::tip Automatizacija e-pošte
Upotrijebite [Webhooks](/user-guide/integrations/webhooks) ili [Zapier](/user-guide/integrations/zapier) za pokretanje ovih poruka e-pošte putem svoje platforme za email marketing. To vam daje veću kontrolu nad vremenom slanja i omogućuje praćenje angažmana.
:::

## Resursi za pomoć {#help-resources}

Izradite sadržaj pomoći specifičan za nišu koji odgovara na pitanja koja vlasnici fitness studija zapravo postavljaju:

### Članci baze znanja {#knowledge-base-articles}

- "Kako ažurirati raspored treninga"
- "Dodavanje i uređivanje profila trenera"
- "Promjena logotipa i boja vašeg studija"
- "Povezivanje vlastitog naziva domene" (za Growth/Pro korisnike)
- "Dodavanje widgeta za rezervacije na vaše web-mjesto"

Pišite ih za netehničke korisnike. Koristite snimke zaslona. Izbjegavajte WordPress žargon.

### Video vodiči {#video-walkthroughs}

Kratke (2-3 minute) snimke zaslona koje prikazuju:

- Prvu prijavu i orijentaciju
- Uređivanje početne stranice
- Ažuriranje rasporeda treninga
- Dodavanje novog trenera

Ne moraju biti ispolirane produkcije. Važno je da su jasne, korisne i specifične za nišu.

## Account stranica {#the-account-page}

Ultimate Multisite uključuje korisničku [Account stranicu](/user-guide/client-management/account-page) na kojoj korisnici upravljaju svojom pretplatom. Prilagodite je tako da:

- Prikazuje njihov trenutačni FitSite plan
- Prikazuje opcije nadogradnje s pogodnostima specifičnima za fitness
- Omogućuje povijest naplate i preuzimanje računa
- Vodi na resurse za pomoć

## Mjerenje uspjeha uvođenja {#measuring-onboarding-success}

Pratite ove pokazatelje kako biste znali funkcionira li vaše uvođenje:

- **Stopa aktivacije**: Koji postotak prijava zapravo prilagodi svoje web-mjesto tijekom prvog tjedna?
- **Prijave u prvom tjednu**: Koliko se puta novi korisnik prijavi tijekom svog prvog tjedna?
- **Tiketi podrške od novih korisnika**: Velik broj znači da vaše uvođenje ima praznine
- **Konverzija s probnog na plaćeno**: Ako nudite probna razdoblja, koji se postotak konvertira?

## FitSite mreža dosad {#the-fitsite-network-so-far}

```
FitSite mreža
├── WordPress Multisite (način rada s poddomenama)
├── Ultimate Multisite (konfiguriran + brendiran)
├── Domena platforme (fitsite.com + wildcard SSL)
├── Predlošci web-mjesta (Studio Essential, Gym Pro, Fitness Chain)
├── Proizvodi (Starter, Growth, Pro + Order Bumps)
├── Tijek naplate (specifičan za nišu, testiran)
├── Brendiranje (prijava, Dashboard, e-pošta, računi, marketinško web-mjesto)
├── Uvođenje korisnika
│   ├── Widget Quick Start na Dashboardu
│   ├── Pojednostavljeni Dashboard za upravljanje fitness web-mjestom
│   ├── Sekvenca dobrodošlice od 4 e-poruke
│   ├── Baza znanja specifična za nišu
│   ├── Video vodiči
│   └── Prilagođena Account stranica
└── Spremno za strategiju određivanja cijena (sljedeća lekcija)
```

## Što smo izgradili u ovoj lekciji {#what-we-built-this-lesson}

- **Vođeno iskustvo prve prijave** s widgetom Quick Start
- **Pojednostavljeni Dashboard** usmjeren na zadatke upravljanja fitness web-mjestom
- **Sekvencu e-pošte dobrodošlice** koja vodi korisnike kroz njihov prvi tjedan
- **Resurse za pomoć specifične za nišu** napisane za netehničke vlasnike fitness studija
- **Metrike uvođenja** za praćenje i poboljšanje iskustva

---

**Sljedeće:** [Lekcija 9: Određivanje cijena za profit](lesson-9-pricing) -- usavršavamo strategiju određivanja cijena kako bismo maksimizirali prihod i minimizirali churn.
