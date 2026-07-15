---
title: 'Lekcija 8: Uključivanje klijenta'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Lekcija 8: Uključivanje korisnika

Samo što klijenta navedete da se registruje nije pola posla. Ako se prijave, osjete da su previše stvari za njih i više nikada ne vrate, izgubili ste ih. Ova lekcija dizajnira iskustvo koje pretvara novu registraciju u aktivnog, angažovanog klijenta.

## Gdje smo stali {#where-we-left-off}

FitSite je potpuno brendiran sa funkcionalnim procesom plaćanja. Sada se fokusiramo na ono što se dešava nakon što vlasnik fitness studija završi registraciju i prvi put pristigne na svoj novi sajt.

## Zašto je onboarding važan {#why-onboarding-matters}

Prvih 30 minuta nakon registracije određuje da li će klijent ostati ili će otići. Vlasnik fitness studija koji:

- Prijavi se i vidi sajt koji već izgleda kao fitness sajt → ostaje
- Zna tačno šta dalje treba da uradi → ostaje
- Osjeća da je izgubljen u generičkom WordPress dashboardu → odlazi

Vaši nišni šabloni (Lekcija 4) rešavaju prvi tačku. Ova lekcija rešava drugu.

## Prvo prijavljivanje {#the-first-login-experience}

### Widget za početni dashboard {#welcome-dashboard-widget}

Kreirajte prilagođeni widget za dashboard koji pozdravlja nove klijente i vodi ih kroz podešavanje. Ovo bi trebalo da bude vidljivo kada se prvi put prijave.

**FitSite Quick Start:**

1. **Dodajte naziv studija i logo** — Link ka Customizeru ili podešavanjima identiteta sajta
2. **Ažurirajte raspored časova** — Direktni link ka editoru stranice "Classes"
3. **Dodajte trenere** — Link ka editoru stranice "Trainers"
4. **Postavite kontakt podatke** — Link ka editoru stranice "Contact"
5. **Pregledajte sajt** — Link ka frontendu

Svaki korak direktno vodi do relevantne stranice ili podešavanja. Nema potrage kroz menije.

### Pojednostavite dashboard {#simplify-the-dashboard}

Novi klijenti ne treba da vide svaki stav u WordPress meniju. Razmislite o:

- Skrivanju stavki menija koje nisu relevantne za upravljanje fitness sajtovima (npr. Komentari ako se ne koriste)
- Ponovnom uređivanju menija kako bi najčešće korišćene stavke bile na početku
- Dodavanju prilagođenih oznaka menija koje imaju smisla za nišu ("Vaš Studio" umjesto "Appearance")

Addon [Plugin & Theme Manager](/addons/plugin-and-theme-manager) može pomoći u kontrolisanju šta klijenti vide.

## Sekvenca dobrodošlica putem e-pošte {#welcome-email-sequence}

Jedna e-pošta dobrodošlice nije dovoljno. Postavite sekvencu koja vodi klijente kroz prvu nedelju:

### E-pošta 1: Dobrodošlica (Odmah nakon registracije) {#email-1-welcome-immediately-after-signup}

- Predmet: "Dobrodošli u FitSite — vaš sajt studija je aktivan"
- Sadržaj: Link za prijavu, koraci za početak, link ka resursima za pomoć
- Ton: Uzbuđen, podstičući, specifičan za fitness

### E-pošta 2: Brzi pobedi (Dan 1) {#email-2-quick-wins-day-1}

- Predmet: "3 stvari koje treba da uradite na svom FitSiteu"
- Sadržaj: Dodajte logo, ažurirajte hero sliku na početnoj stranici, dodajte raspored časova
- Uključite snimke ekrana koji tačno pokazuju gde da kliknu

### E-pošta 3: Napravite ga svojim (Dan 3) {#email-3-make-it-yours-day-3}

- Predmet: "Učinite vaš fitness sajt jedinstvenim"
- Sadržaj: Prilagodite boje, dodajte fotografije trenera, napišite priču o studiju
- Link ka primerima odličnih fitness sajtova na platformi

### E-pošta 4: U javnost (Dan 7) {#email-4-go-live-day-7}

- Predmet: "Spremni da podelite svoj FitSite sa svetom?"
- Sadržaj: Lista stvari koje treba proveriti pre deljenja, kako povezati custom domen (ako je na Growth/Pro), saveti za deljenje na društvenim mrežama

:::tip Automatska e-pošta
Koristite [Webhooks](/user-guide/integrations/webhooks) ili [Zapier](/user-guide/integrations/zapier) da pokrenete ove e-pošte putem vaše platforme za e-marketing. Ovo vam daje više kontrole nad vremenom i omogućava vam praćenje angažovanja.
:::

## Resursi za pomoć {#help-resources}

Napravite sadržaj za pomoć specifičan za nišu koji odgovara na pitanja koja vlasnici fitness studija zaista postavljaju:

### Članci u bazi znanja {#knowledge-base-articles}

- "Kako ažurirati raspored časova"
- "Dodavanje i uređivanje profila trenera"
- "Promena logotipa i boja studija"
- "Povezivanje sopstvenog domena" (za Growth/Pro klijente)
- "Dodavanje widgeta za rezervacije na sajt"

Pišite ovo za korisnike koji nisu tehnički stručnjaci. Koristite snimke ekrana. Izbegavajte WordPress žargon.

### Video objašnjenja {#video-walkthroughs}

Kratki (2-3 minuta) snimci ekrana koji pokazuju:

- Prvo prijavljivanje i orijentaciju
- Uređivanje početne stranice
- Ažuriranje rasporeda časova
- Dodavanje novog trenera

Ovo ne mora biti profesionalna produkcija. Važno je da je jasno, korisno i specifično za nišu.

## Stranica naloga {#the-account-page}

Ultimate Multisite uključuje [Account Page](/user-guide/client-management/account-page) za klijente gde upravljaju svojom pretplatom. Prilagodite ga da:

- Prikaže njihov trenutni FitSite plan
- Prikazuje opcije nadogradnje sa fitness specifičnim beneficijama
- Pruža istoriju plaćanja i preuzimanje računa
- Linkuje ka resursima za pomoć

## Merenje uspeha onboardinga {#measuring-onboarding-success}

Pratite ove indikatore da znate da li vam onboarding funkcioniše:

- **Stopa aktivacije**: Koji procenat registracija zapravo prilagodi svoj sajt u roku od prve nedelje?
- **Prijava u prvoj nedelji**: Koliko puta se novi klijent prijavi tokom prve nedelje?
- **Tiketi za podršku od novih klijenata**: Veliki volumen znači da vaš onboarding ima praznine
- **Konverzija iz probnog u plaćeni**: Ako nudite probne verzije, koji procenat konvertuje?

## FitSite Mreža do sada {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding
│   ├── Quick Start dashboard widget
│   ├── Simplified dashboard for fitness site management
│   ├── 4-email welcome sequence
│   ├── Niche-specific knowledge base
│   ├── Video walkthroughs
│   └── Customized account page
└── Ready for pricing strategy (next lesson)
```

## Šta smo izgradili u ovoj lekciji {#what-we-built-this-lesson}

- **Vođeno iskustvo prvog prijavljivanja** sa Quick Start widgetom
- **Pojednostavljen dashboard** fokusiran na zadatke upravljanja fitness sajtovima
- **Sekvenca e-pošte dobrodošlice** koja vodi klijente kroz prvu nedelju
- **Resursi za pomoć specifični za nišu** napisani za vlasnike fitness studija koji nisu tehnički stručnjaci
- **Metrike onboardinga** za praćenje i poboljšanje iskustva

---

**Dalje:** [Lekcija 9: Cena za profit](lesson-9-pricing) — usavršavamo strategiju određivanja cena kako bismo maksimizirali prihode i minimizirali odlazak klijenta.
