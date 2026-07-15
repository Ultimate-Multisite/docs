---
title: 'Leksjon 3: Oppsett av nettverket ditt'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Leksjon 3: Oppsett av nettverket ditt

Nå er det tid for å bygge. I denne leksjonen skal du installere Ultimate Multisite og konfigurere grunnlaget for FitSite-nettverket. Hver avgjørelse her er tatt med treningsbransjen i tankene.

## Hvor vi slapp {#where-we-left-off}

Vi valgte treningsstudioer som vår nisje og har validert muligheten. Nå skal vi forvandle denne ideen til en fungerende plattform.

## Valg av hosting {#choosing-your-hosting}

Valget av hosting er viktigere for en nisjeplattform enn for en enkelt nettside. Du skal ikke hoste én side – du skal hoste et nettverk som vil vokse til titalls eller hundrevis av sider.

### Hva du bør se etter {#what-to-look-for}

- **WordPress Multisite-støtte**: Ikke alle hoster håndterer multisite godt
- **Wildcard SSL**: Essensielt for nettverk basert på underdomener
- **Skalerbare ressurser**: Du trenger rom til å vokse uten å måtte migrere
- **Ultimate Multisite-integrasjon**: Automatisk domene-mapping og SSL sparer betydelig driftsarbeid

### Anbefalt tilnærming {#recommended-approach}

Velg en host fra listen over [Kompatible leverandører](/user-guide/host-integrations/closte). Disse er testet med Ultimate Multisite og gir integrasjonene du trenger for domene-mapping og SSL-automatisering.

For FitSite vil vi bruke en underdomene-konfigurasjon. Dette betyr at kundesidene i utgangspunktet vil vises som `studienavn.fitsite.com` før de eventuelt mapper sitt eget domene.

## Installasjon av WordPress Multisite {#installing-wordpress-multisite}

Hvis du ikke allerede har en WordPress Multisite-installasjon:

1. Installer WordPress hos din hosting-leverandør
2. Følg guiden [Hvordan installere WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Velg **underdomene**-konfigurasjon når du blir spurt

:::tip Hvorfor underdomener?
Underdomener gir hver kundeside sin egen unike adresse (`studio.fitsite.com`) i stedet for en sti (`fitsite.com/studio`). Dette er mer profesjonelt for kundene dine og unngår konflikter i permalinkene. Se [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) for en detaljert sammenligning.
:::

## Installasjon av Ultimate Multisite {#installing-ultimate-multisite}

Følg guiden [Installasjon av Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) for å:

1. Laste opp og aktivere pluginet på nettverksnivå
2. Kjøre [Oppsett-assistenten](/user-guide/getting-started/multisite-setup-wizard)

Under oppsett-assistenten, husk at vi jobber med nisjen for treningsstudioer:

- **Valuta**: Sett til valutaen kundene dine i treningsstudioene bruker
- **Firmanavn**: "FitSite" (eller ditt valgte merkenavn)
- **Firmanavn/logo**: Last opp merkevarelogoen din – dette vises på fakturaer og e-poster

## Konfigurering for treningsnisjen {#configuring-for-the-fitness-niche}

Når Ultimate Multisite er installert, gjør følgende nisjespesifikke konfigurasjonsvalg:

### Generelle innstillinger {#general-settings}

Gå til **Ultimate Multisite > Settings** og konfigurer:

- **Nettstedsnavn**: FitSite
- **Standardrolle**: Administrator – eierne av treningsstudioer trenger full kontroll over innholdet på sin side
- **Registrering**: Aktiver brukerregistrering slik at studioeierne kan registrere seg selv

### E-postkonfigurasjon {#email-configuration}

Systeme-e-postene dine må snakke språket til nisjen din. Gå til **Ultimate Multisite > Settings > Emails** og tilpass:

- Bytt ut generelt språk som "din nye side" med meldingstekster spesifikke for treningsbransjen
- Eksempel på velkomstemne: "Nettsiden til treningsstudioet ditt er klar"
- Eksempel på velkomsttekst: Referer til deres studio, klasser og hvordan de starter med sin treningsside

Vi vil forfine disse ytterligere i Leksjon 8 (Kundebord), men å sette tonen nå sikrer at selv tidlige testregistreringer føles nisjespesifikke.

### Domene-konfigurasjon {#domain-configuration}

Hvis du bruker en kompatibel hosting-leverandør, konfigurer domene-mapping nå:

1. Gå til **Ultimate Multisite > Settings > Domain Mapping**
2. Følg integrasjonsguiden for din spesifikke host
3. Test at nye subsites får SSL automatisk

Dette sikrer at når vi begynner å lage maler og teststeder i neste leksjon, fungerer alt fra start til slutt.

## FitSite-nettverket så langt {#the-fitsite-network-so-far}

Ved slutten av denne leksjonen har du:

```
FitSite Network
├── WordPress Multisite (underdomene-modus)
├── Ultimate Multisite (installert og konfigurert)
├── Hosting med wildcard SSL
├── Konfigurert domene-mapping
├── Nisjespesifikke e-postmaler (initial)
└── Klar for side-maler (neste leksjon)
```

## Hva vi bygde i denne leksjonen {#what-we-built-this-lesson}

- **En fungerende WordPress Multisite**-installasjon i underdomene-modus
- **Ultimate Multisite installert** og konfigurert med FitSite-merkevarebygging
- **Hosting og SSL** satt opp for et voksende nettverk
- **Domene-mapping** konfigurert for din hosting-leverandør
- **Nisjespesifikk e-posttone** etablert fra dag én

---

**Neste:** [Leksjon 4: Bygge nisje-maler](lesson-4-templates) -- her lager vi side-maler som eierne av treningsstudioer faktisk vil bruke.
