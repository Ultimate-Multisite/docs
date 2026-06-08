---
title: 'Lekcija 9: Cjenovanje za profit'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Lekcija 9: Cjenovna politika za profit

U Lekciji 5 postavili smo početne cjenovne razrede za FitSite planove. Sada ćemo usavršiti cjenovnu strategiju tehnikama koje povećavaju prihod, potiču nadogradnje i smanjuju otpadak članova.

## Gdje smo stali

FitSite ima planove, šablone, checkout, branding i onboarding na mjestu. Početna cjenovna postavljanja bila je $49/$99/$199 mjesečno. Sada ćemo učiniti da ta cjenovna postavljanja rade još više.

## Principi cjenovanja za platforme u niši

### Cijena na vrijednosti, ne na trošku

Vaši troškovi hostinga možda iznose $5-$15 po klijentskom sajtu. To ne znači da vaša cijena mora biti $20. Vi ne prodajete hosting. Vi prodajete:

- Profesionalni fitness sajt koji bi bio skupiti $2.000-$5.000 za ručno izradu
- Kontinuirano održavanje, ažuriranje i sigurnost o kojima ne moraju razmišljati
- Specifične funkcije za nišu koje generički builderi ne nude
- Kreditnost platforme napravljene za njihovu industriju

Cjenujte na temelju vrijednosti koju pružate, a ne na temelju troška pružanja te vrijednosti.

### Osnovati na alternativama

Kada vlasnik fitness studija procjenjuje FitSite, uspoređuje ga s:

- **Upozivanjem web developera**: $2.000-$5.000 unaprijed + $50-$100/mjesečno održavanje
- **Wix/Squarespace**: $16-$45/mjesečno, ali bez specifičnih funkcija za fitness, moraju ga sami napraviti
- **Nečim**: Gubitak članova koji vas ne mogu pronaći online

S $49-$199/mjesečno, FitSite je jeftiniji od developera, sposobniji od generičkih buildera i beskonačno bolji od nepostojećeg sajta.

## Implementacija varijacija cijena

Godišnje cjenovanje potiče posvećenost i smanjuje otpadak. Idite na karticu **Price Variations** svakog plana i dodajte godišnje opcije:

| Plan | Monthly | Annual (per month) | Annual Total | Savings |
|------|---------|-------------------|--------------|---------|
| Starter | $49/mo | $39/mo | $468/year | 20% off |
| Growth | $99/mo | $79/mo | $948/year | 20% off |
| Pro | $199/mo | $159/mo | $1,908/year | 20% off |

Dodajte polje **Period Selection** na vašu formu za naplatu kako bi kupci mogli prebacivati između mjesečnog i godišnjeg naplata. Pogledajte [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### Zašto godišnje cjenovanje funkcionira

- **Za vas**: Gotov novac, manji otpadak (kupci koji plaćaju godišnje manje je vjerojatno da će otkazati sredinom perioda)
- **Za njih**: Stvarni ušteda, predvidivost budžeta

## Naknade za postavljanje

Razmislite o jednokratnoj naknadi za postavljanje za planove koji uključuju ručno konfiguriranje:

- **Starter**: Nema naknade za postavljanje (uklanja barijere za ulazak)
- **Growth**: Naknada za postavljanje od $99 (pokriva konfiguraciju prilagođenog domena i početnu konsultaciju)
- **Pro**: Naknada za postavljanje od $299 (pokriva postavljanje više lokacija i poziv za onboarding)

Konfigurirajte naknade za postavljanje na cjenovni dio svakog plana. Pogledajte [Creating Your First Subscription Product](/user-guide/configuration/creating-your-first-subscription-product) za detalje.

## Periodi probnog korišćenja

Nuditi probni period smanjuje frikciju pri registraciji, ali uvodi rizik od nekonverzije. Za FitSite:

- **7-dnevni probni period** samo za Starter plan
- Nema probnog perioda za Growth i Pro (ovi kupci su posvećeniji i očekuju da će platiti)

Konfigurirajte probni period na cjenovnom dijelu Starter plana aktiviranjem prekidača **Offer Trial** i postavljanjem trajanja na 7 dana.

### Kako učiniti da probni period konvertuje

Probni period radi samo ako kupac doživi vrijednost tokom tog perioda. Vaša sekvenca onboardinga (Lekcija 8) je kritična ovdje — e-mailovi dobrodošlice treba vremenski rasporediti kako bi pokrenuli angažman unutar 7 dana.

## Kod popusta

Kreirajte strateške kodove popusta za specifične svrhe:

- **FITLAUNCH** — 30% popusta na prvih 3 mjeseca (za promotivni lanč)
- **ANNUAL20** — 20% popusta na godišnje planove (ako već nisu popraćeni popustom)
- **REFERRAL** — 1 mjesec besplatno (za preporuke kupaca)

Idite na **Ultimate Multisite > Discount Codes** da biste ih kreirali. Pogledajte [Creating Discount Codes](/user-guide/configuration/creating-discount-codes) za kompletan vodič.

:::tip Ne popustujte po defaultu
Popusti bi trebali biti strateški alati, a ne trajni elementi. Ako svi dobiju popust, to nije popust — to je vaša stvarna cijena. Koristite ih za specifične kampanje, preporuke i promocije ograničene vremenom.
:::

## Obrada poreza

Ako poslujete u jurisdikciji koja zahtijeva naplatu poreza:

1. Konfigurirajte stope poreza u **Ultimate Multisite > Settings > Taxes**
2. Primijenite kategorije poreza na svoje planove
3. Osigurajte da računi pravilno prikazuju porez

Pogledajte [Tax Handling](/user-guide/payment-gateways/tax-handling) za detaljnu konfiguraciju. Ako služite klijente međunarodno, razmislite o [VAT addon](/addons/vat) za usklađenost s EU.

## Pregled vaših cijena

Nakon lansiranja, ponovo pregledajte cjenovnu politiku kvartalno. Pogledajte:

- **Stotak konverzije po planu**: Ako Starter dobro konvertuje, ali Growth ne, razmak između njih možda je prevelik
- **Stotak nadogradnje**: Ako mali broj kupaca nadograđuje sa Starter na Growth, Growth plan možda ne nudi dovoljno dodatne vrijednosti
- **Otpadak po planu**: Ako godišnji kupci imaju manji otpadak, agresivnije prodajte godišnje cjenovanje
- **Cjenovna postavljanja konkurencije**: Što naplaćuju alternative? Je li pozicioniranje ispravno?

## FitSite Mreža do sada

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo or $468/yr) + 7-day trial
│   ├── FitSite Growth ($99/mo or $948/yr) + $99 setup fee
│   ├── FitSite Pro ($199/mo or $1,908/yr) + $299 setup fee
│   └── Order Bumps + Discount Codes
├── Checkout Flow (with period selection toggle)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding (Quick Start, emails, help resources)
├── Pricing Strategy
│   ├── Annual discounts (20% off)
│   ├── Strategic setup fees
│   ├── 7-day trial on Starter
│   ├── Discount codes for campaigns and referrals
│   └── Tax configuration
└── Ready for launch (next lesson)
```

## Što smo izgradili u ovoj lekciji

- **Godišnje cjenovanje** sa 20% popustom kako bi se potaknula posvećenost
- **Naknade za postavljanje** na višim nivoima kako bi se pokrio trud onboardinga
- **Probni period** na planu za početnike kako bi se smanjila frikcija pri registraciji
- **Strateški kodovi popusta** za lansiranje, preporuke i kampanje
- **Konfiguracija poreza** za usklađeno naplaćivanje
- **Okvir za pregled cijena** za kontinuiranu optimizaciju

---

**Sljedeće:** [Lekcija 10: Dan lansiranja](lesson-10-launch) — lista provjera prije lansiranja i aktivacija.
