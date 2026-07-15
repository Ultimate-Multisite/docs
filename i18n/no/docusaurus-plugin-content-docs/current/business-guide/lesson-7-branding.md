---
title: 'Leksjon 7: Gjør det ditt eget'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Leksjon 7: Gjør det til ditt eget

Kundene dine skal aldri føle at de bruker «et hvilket som helst WordPress plugin». De skal føle at de bruker FitSite – en plattform bygget for deres bransje. I denne leksjonen dekker vi merkevarebygging, white-labeling og hvordan du får plattformen til å føles ut som et eget produkt.

## Hvor vi slapp {#where-we-left-off}

FitSite har en fungerende betalingsflyt som tar treningsstudioeiere fra planvalg til et live nettsted. Nå får vi hele opplevelsen til å føles som et sammenhengende, merkevarebygget produkt.

## Ditt plattformdomene {#your-platform-domain}

Fundamentet for merkevaren din er domenet ditt. For FitSite:

- **Hoveddomene**: `fitsite.com` (din markedsføringsside og nettverksrot)
- **Kundesider**: `studienavn.fitsite.com` (underdomener)
- **Tilpassede domener**: Kunder på Growth- og Pro-planer kan koble til sitt eget domene

### Oppsett av domene {#setting-up-your-domain}

1. Registrer plattformdomenet ditt
2. Pek det til din vertleverandør
3. Konfigurer wildcard DNS (`*.fitsite.com`) for kundens underdomener
4. Forsikre deg om at wildcard SSL er aktivt

Se [Hvordan du konfigurerer domenemapping](/user-guide/domain-mapping/how-to-configure-domain-mapping) for detaljerte instruksjoner.

## White-labeling av administrasjonsopplevelsen {#white-labeling-the-admin-experience}

Når en treningsstudioeier logger inn på sitt dashbord, skal de se ditt merke, ikke WordPress eller Ultimate Multisite-merkevarebygging.

### Tilpasset innloggingsside {#custom-login-page}

Tilpass WordPress-innloggingssiden til å vise:

- Ditt FitSite-logo
- Bakgrunnsbilder som passer til fitness
- Dine merkevarefarger

### Merkevarebygging i dashbordet {#dashboard-branding}

Bruk [Admin Page Creator](/addons/admin-page-creator) addon eller tilpass CSS for å:

- Erstatte WordPress-logoen med ditt FitSite-logo
- Tilpasse fargeskjemaet i admin-panelet for å matche merkevaren din
- Legge til et tilpasset dashbord-widget med fitness-spesifikke snarveier og hjelkeressurser

### Tilpassede admin-sider {#custom-admin-pages}

Vurder å opprette tilpassede admin-sider som fremhever de mest relevante handlingene for treningsstudioeiere:

- "Rediger timeplanen din"
- "Oppdater trenerprofiler"
- "Se nettstedet ditt"

Dette reduserer læringskurven ved å plassere nisje-relevante handlinger i sentrum, i stedet for å begrave dem i standard WordPress-menyen.

## Merkevarebygging av kommunikasjonen din {#branding-your-communications}

Hver e-post, faktura og varsling skal forsterke merkevaren din.

### System-e-poster {#system-emails}

Gå til **Ultimate Multisite > Settings > Emails** og tilpass alle system-e-postene:

- **Fra navn**: FitSite
- **Fra e-post**: hello@fitsite.com
- **E-postmaler**: Bruk merkevarefargene og logoen din
- **Språk**: Fitness-spesifikt gjennomgående

Viktige e-poster å tilpasse:

| E-post | Generisk versjon | FitSite-versjon |
|-------|----------------|-----------------|
| Velkomst | "Ditt nye nettsted er klart" | "Ditt treningsstudio-nettsted er live" |
| Betalingskvittering | "Betaling mottatt" | "FitSite-abonnement betalt og bekreftet" |
| Prøveperiode utløper | "Prøveperioden din utløper snart" | "Din FitSite-prøveperiode utløper om 3 dager – hold treningsstudio-nettstedet ditt live" |

### Fakturaer {#invoices}

Tilpass faktura-maler med:

- Ditt FitSite-logo og merkevarefarger
- Dine forretningsdetaljer
- Fitness-spesifikke produktnavn (ikke generiske plan-ID-er)

## Kundens synlige nettsted {#the-customer-facing-site}

Ditt hoveddomene (`fitsite.com`) trenger en markedsføringsside som selger plattformen. Dette er separat fra Ultimate Multisite-nettverksadmin – det er det offentlige ansiktet til virksomheten din.

Nøkkel-sider:

- **Hjemmeside**: Tydelig verdiforslag for fitnessvirksomheter
- **Funksjoner**: Hva FitSite gjør, i fitness-terminologi
- **Priser**: Dine tre planer med nisjespesifikke funksjonssammenligninger
- **Eksempler**: Vis frem nettsteder bygget på plattformen
- **Registrer deg**: Lenker til betalingsskjemaet ditt

:::tip Din markedsføringsside kan være en nettstedsdel av nettverket
Opprett markedsføringssiden din som et nettsted i ditt eget nettverk. Dette lar deg administrere den fra samme dashbord og demonstrerer plattformens egne evner.
:::

## Tilpasset domene for kunder {#custom-domain-for-customers}

For kunder på planer som inkluderer tilpassede domener, dokumenter prosessen tydelig:

1. Kunden registrerer eller overfører domenet sitt til et registreringsselskap
2. Kunden oppdaterer DNS for å peke til plattformen din (oppgi nøyaktige poster)
3. Ultimate Multisite håndterer domenemappingen og SSL

Opprett en hjelkeartikkel eller en kunnskapsbase-oppføring spesifikt for denne prosessen, skrevet for ikke-tekniske treningsstudioeiere.

## FitSite-nettverket så langt {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (konfigurert + merkevarebygget)
├── Plattformdomene (fitsite.com + wildcard SSL)
├── Mal-nettsteder (Studio Essential, Gym Pro, Fitness Chain)
├── Produkter (Starter, Growth, Pro + Order Bumps)
├── Betalingsflyt (nisjespesifikk, testet)
├── Merkevarebygging
│   ├── Tilpasset innloggingsside
│   ├── Merkevarebygget admin-dashboard
│   ├── Nisjespesifikke system-e-poster
│   ├── Merkevarebyggede fakturaer
│   └── Markedsføringsside på fitsite.com
└── Klar for onboarding-flyt (neste leksjon)
```

## Hva vi bygde i denne leksjonen {#what-we-built-this-lesson}

- **Plattformdomene og DNS** konfigurert for en merkevarebygget opplevelse
- **White-labeled admin** med FitSite-merkevarebygging gjennomgående
- **Tilpasset kommunikasjon** – e-poster, fakturaer og varsler er alle merkevarebygget
- **En markedsføringsside** som selger FitSite til treningsstudioeiere
- **Dokumentasjon for tilpassede domener** for kunder som ønsker sitt eget domene

---

**Neste:** [Leksjon 8: Kundeonboarding](lesson-8-onboarding) -- vi designer opplevelsen som forvandler en ny registrering til en aktiv, fornøyd kunde.
