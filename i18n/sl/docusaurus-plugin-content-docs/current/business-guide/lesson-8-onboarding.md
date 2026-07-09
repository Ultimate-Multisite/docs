---
title: 'Lekcija 8: Uvajanje strank'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Lekcija 8: Uvajanje strank {#lesson-8-customer-onboarding}

Pridobiti stranko k registraciji je le polovica dela. Če se prijavi, se počuti preobremenjeno in se nikoli ne vrne, ste jo izgubili. Ta lekcija oblikuje izkušnjo, ki novo registracijo spremeni v aktivno, vključeno stranko.

## Kje smo ostali {#where-we-left-off}

FitSite je v celoti opremljen z blagovno znamko in ima delujoč checkout tok. Zdaj se osredotočamo na to, kaj se zgodi po tem, ko lastnik fitnes studia dokonča registracijo in prvič pristane na svojem novem spletnem mestu.

## Zakaj je uvajanje pomembno {#why-onboarding-matters}

Prvih 30 minut po registraciji določi, ali stranka ostane ali odide. Lastnik fitnes studia, ki:

- Se prijavi in vidi spletno mesto, ki že izgleda kot fitnes spletno mesto → ostane
- Točno ve, kaj mora narediti naslednje → ostane
- Se počuti izgubljenega v generičnem WordPress dashboardu → odide

Vaše nišne predloge (Lekcija 4) pokrivajo prvo točko. Ta lekcija pokriva drugo.

## Izkušnja prve prijave {#the-first-login-experience}

### Pozdravni Dashboard gradnik {#welcome-dashboard-widget}

Ustvarite prilagojen dashboard gradnik, ki pozdravi nove stranke in jih vodi skozi nastavitev. Ob prvi prijavi naj bo prikazan na vidnem mestu.

**FitSite Quick Start:**

1. **Dodajte ime in logotip svojega studia** -- Povezava do Customizerja ali nastavitev Site Identity
2. **Posodobite svoj urnik vadb** -- Povezava neposredno do urejevalnika strani Classes
3. **Dodajte svoje trenerje** -- Povezava do urejevalnika strani Trainers
4. **Nastavite svoje kontaktne podatke** -- Povezava do urejevalnika strani Contact
5. **Predoglejte si svoje spletno mesto** -- Povezava do frontenda

Vsak korak vodi neposredno do ustrezne strani ali nastavitve. Brez iskanja po menijih.

### Poenostavite Dashboard {#simplify-the-dashboard}

Nove stranke ne potrebujejo vseh elementov menija v WordPressu. Razmislite o:

- Skrivanje elementov menija, ki niso relevantni za upravljanje fitnes spletnega mesta (npr. Comments, če se ne uporablja)
- Prerazporeditvi menija, da so najpogosteje uporabljeni elementi prvi
- Dodajanju prilagojenih oznak menija, ki so smiselne za nišo ("Your Studio" namesto "Appearance")

Dodatek [Plugin & Theme Manager](/addons/plugin-and-theme-manager) lahko pomaga nadzorovati, kaj stranke vidijo.

## Zaporedje pozdravnih e-poštnih sporočil {#welcome-email-sequence}

Eno samo pozdravno e-poštno sporočilo ni dovolj. Nastavite zaporedje, ki stranke vodi skozi njihov prvi teden:

### E-pošta 1: Dobrodošli (takoj po registraciji) {#email-1-welcome-immediately-after-signup}

- Zadeva: "Dobrodošli v FitSite -- spletno mesto vašega studia je objavljeno"
- Vsebina: povezava za prijavo, koraki za hiter začetek, povezava do virov pomoči
- Ton: navdušen, spodbuden, specifičen za fitnes

### E-pošta 2: Hitri uspehi (1. dan) {#email-2-quick-wins-day-1}

- Zadeva: "3 stvari, ki jih najprej naredite na svojem FitSite"
- Vsebina: dodajte svoj logotip, posodobite glavno sliko na domači strani, dodajte svoj urnik vadb
- Vključite posnetke zaslona, ki natančno pokažejo, kam klikniti

### E-pošta 3: Naj bo vaše (3. dan) {#email-3-make-it-yours-day-3}

- Zadeva: "Naj vaše fitnes spletno mesto izstopa"
- Vsebina: prilagodite barve, dodajte fotografije trenerjev, napišite zgodbo svojega studia
- Povezava do primerov odličnih fitnes spletnih mest na platformi

### E-pošta 4: Objavite (7. dan) {#email-4-go-live-day-7}

- Zadeva: "Ste pripravljeni deliti svoj FitSite s svetom?"
- Vsebina: kontrolni seznam stvari za preverjanje pred deljenjem, kako povezati domeno po meri (če ste na Growth/Pro), nasveti za deljenje na družbenih omrežjih

:::tip Avtomatizacija e-pošte
Uporabite [Webhooks](/user-guide/integrations/webhooks) ali [Zapier](/user-guide/integrations/zapier), da sprožite ta e-poštna sporočila prek svoje platforme za e-poštni marketing. To vam daje več nadzora nad časovnim razporedom in omogoča spremljanje vključenosti.
:::

## Viri pomoči {#help-resources}

Ustvarite vsebino pomoči, specifično za nišo, ki odgovarja na vprašanja, ki jih lastniki fitnes studiev dejansko postavljajo:

### Članki v zbirki znanja {#knowledge-base-articles}

- "Kako posodobiti urnik vadb"
- "Dodajanje in urejanje profilov trenerjev"
- "Spreminjanje logotipa in barv vašega studia"
- "Povezovanje lastnega imena domene" (za stranke Growth/Pro)
- "Dodajanje gradnika za rezervacije na vaše spletno mesto"

Pišite jih za netehnične uporabnike. Uporabite posnetke zaslona. Izogibajte se WordPress žargonu.

### Video vodiči {#video-walkthroughs}

Kratki (2–3-minutni) posnetki zaslona, ki prikazujejo:

- Prvo prijavo in orientacijo
- Urejanje domače strani
- Posodabljanje urnika vadb
- Dodajanje novega trenerja

Ni treba, da so to dovršene produkcije. Pomembno je, da so jasne, koristne in specifične za nišo.

## Stran Account {#the-account-page}

Ultimate Multisite vključuje strankam namenjeno [stran Account](/user-guide/client-management/account-page), kjer stranke upravljajo svojo naročnino. Prilagodite jo tako, da:

- Prikaže njihov trenutni FitSite načrt
- Prikaže možnosti nadgradnje z ugodnostmi, specifičnimi za fitnes
- Zagotovi zgodovino obračunavanja in prenose računov
- Poveže do virov pomoči

## Merjenje uspešnosti uvajanja {#measuring-onboarding-success}

Spremljajte te kazalnike, da ugotovite, ali vaše uvajanje deluje:

- **Stopnja aktivacije**: Kolikšen odstotek registracij dejansko prilagodi svoje spletno mesto v prvem tednu?
- **Prijave v prvem tednu**: Kolikokrat se nova stranka prijavi v svojem prvem tednu?
- **Zahtevki za podporo novih strank**: Velik obseg pomeni, da ima vaše uvajanje vrzeli
- **Pretvorba iz preizkusa v plačljivo uporabo**: Če ponujate preizkuse, kolikšen odstotek se pretvori?

## Omrežje FitSite do zdaj {#the-fitsite-network-so-far}

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

## Kaj smo zgradili v tej lekciji {#what-we-built-this-lesson}

- **Vodeno izkušnjo prve prijave** z gradnikom Quick Start
- **Poenostavljen dashboard**, osredotočen na naloge upravljanja fitnes spletnega mesta
- **Zaporedje pozdravnih e-poštnih sporočil**, ki stranke vodi skozi njihov prvi teden
- **Vire pomoči, specifične za nišo**, napisane za netehnične lastnike fitnes studiev
- **Metrike uvajanja** za spremljanje in izboljšanje izkušnje

---

**Naprej:** [Lekcija 9: Oblikovanje cen za dobiček](lesson-9-pricing) -- izpopolnimo strategijo oblikovanja cen, da povečamo prihodke in zmanjšamo odliv.
