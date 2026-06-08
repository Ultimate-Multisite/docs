---
title: 'Leksjon 4: Bygge nisjetemater'
sidebar_position: 5
_i18n_hash: 3ade990de5fd404a7f09a9d42d7535ee
---
# Leksjon 4: Bygge nisjetemplates

Malene er kjernen i din spesialiserte verdi. En eier av et treningsstudio som registrerer seg og ser en nettside som allerede ser ut som en treningsnettside – med timeplaner, trenertilbud og riktig bildemateriale – er langt mer sannsynlig å bli værende enn en som ser et tomt lerret.

## Hvor vi slapp

Vi har nå et fungerende FitSite-nettverk med Ultimate Multisite installert og konfigurert. Nå skal vi bygge malene som får FitSite til å føles som om det er bygget spesifikt for treningsvirksomheter.

## Hvorfor nisjetemplates betyr noe

Generiske maler tvinger kundene dine til å gjøre det vanskelige arbeidet: å finne ut hvilke sider de trenger, hvilken innholdsstruktur som fungerer, og hvordan de skal få det til å se riktig ut for bransjen sin. Nisjetemplates eliminerer denne friksjonen.

En eier av et treningsstudio som registrerer seg på FitSite, bør se:

- En forsiden som ser ut som en treningsstudio-nettside
- Sider for klasser, timeplaner, trenere og priser som allerede er opprettet
- Bildemateriale og plassholderinnhold som matcher bransjen deres
- Et design som føles profesjonelt og merkevarebyggende for fitness

De fyller inn sine detaljer. De starter ikke fra bunnen av.

## Planlegging av malene dine

Før du bygger, bestem deg for hvilke maler du skal tilby. For FitSite skal vi lage tre:

### Mal 1: Studio Essential

For små studioer og personlige trenere.

- **Hjemmeside** med herobilde, klassestek og call to action
- **Om oss**-side med studiohistorie og misjon
- **Klasser**-side med timeplanlayout
- **Trenere**-side med profilkort
- **Kontakt**-side med kart og skjema
- **Rent, moderne design** med en fargepalett som passer til fitness

### Mal 2: Gym Pro

For etablerte treningsstudioer med flere tjenester.

- Alt i Studio Essential, pluss:
- **Medlemskap**-side med prissettingstabell
- **Galleri**-side for bilder av fasilitetene
- **Blogg**-seksjon for fitness-tips og nyheter
- **Vitnesbyrd**-seksjon på forsiden
- **Mer fremtredende merkevare**-alternativer

### Mal 3: Fitness Chain

For virksomheter med flere lokasjoner.

- Alt i Gym Pro, pluss:
- **Lokasjoner**-side med flere fasilitetslister
- **Franchise/lokasjon**-under-side mal
- **Sentralisert merkevarebygging** med lokasjonsspesifikke detaljer
- **Stabdirektorium** på tvers av lokasjoner

## Bygge en mal-side

I Ultimate Multisite er en mal rett og slett en WordPress-side som er konfigurert slik du ønsker at nye kundesider skal se ut. Slik oppretter du en:

### Trinn 1: Opprett mal-siden

1. Naviger til **Sites > Add New** i nettverksadministrasjonen din
2. Opprett en side kalt `template-studio-essential`
3. Denne siden blir ditt arbeidsområde

### Trinn 2: Installer og konfigurer temaet

Bytt til mal-sidens dashboard og:

1. Aktiver et tema som passer for fitnessvirksomheter
2. Konfigurer temainnstillingene, fargene og typografien
3. Sett opp topp- og bunnteksten med fitness-passende navigasjon

:::tip Theme Selection
Velg et tema som er fleksibelt nok til å se bra ut for fitness, men ikke så komplisert at kundene dine ikke klarer å administrere det. Temaer som Astra, GeneratePress eller Kadence fungerer bra fordi de er lette, tilpassbare og godt støttet.
:::

### Trinn 3: Opprett sidene

Bygg ut hver side med:

- **Plassholderinnhold** som leses naturlig for fitness ("Velkommen til [Studio Name]" og ikke "Lorem ipsum")
- **Plassholderbilder** fra gratis bildedatabaser som viser fitnessaktiviteter
- **Funksjonelle layouter** ved hjelp av sidebyggeren eller blokkredigereren

Gjør plassholderinnholdet instruktivt der det er mulig. I stedet for generisk fylltekst, skriv innhold som: "Erstatt dette med en kort beskrivelse av studioet ditt og hva som gjør det spesielt. Nevn treningsfilosofien din, års erfaring, eller hva kundene kan forvente."

### Trinn 4: Konfigurere plugins

Installer og aktiver plugins som treningsstudioer trenger:

- Et booking- eller timeplanleggingsplugin (hvis det er relevant for din plan-nivå)
- Et kontaktskjema-plugin
- Et SEO-plugin (forhåndskonfigurert med fitness-relevante standardinnstillinger)

### Trinn 5: Merke som mal

1. Naviger til **Ultimate Multisite > Sites**
2. Rediger mal-siden
3. Aktiver bryteren **Site Template**

Gjenta denne prosessen for hver mal du ønsker å tilby.

## Sjekkliste for malkvalitet

Før du gjør en mal tilgjengelig, verifiser:

- [ ] Alle sider laster riktig og ser profesjonelle ut
- [ ] Plassholderinnholdet er nyttig og nisjespesifikt
- [ ] Bildene er passende og har riktig lisensiering
- [ ] Mobilresponsiviteten fungerer på alle sider
- [ ] Navigasjonen er logisk og komplett
- [ ] Kontaktskjemaene fungerer
- [ ] Ingen ødelagte lenker eller manglende ressurser
- [ ] Sidens lastetid er akseptabel

## FitSite-nettverket så langt

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Site Templates
│   ├── Studio Essential (small studios, trainers)
│   ├── Gym Pro (established gyms)
│   └── Fitness Chain (multi-location)
└── Ready for plan configuration (next lesson)
```

## Hva vi bygde i denne leksjonen

- **Tre nisjespesifikke maler** designet for ulike størrelser av fitnessvirksomheter
- **Fitness-passende innhold og bildemateriale** som får plattformen til å føles spesielt bygget
- **Instruktivt plassholderinnhold** som veileder kundene gjennom tilpasningen
- **En kvalitetskontroll** for å sikre at malene er klare for produksjon

---

**Neste:** [Leksjon 5: Designe planene dine](lesson-5-plans) -- her lager vi produktnivåer som matcher hvordan fitnessvirksomheter faktisk opererer.
