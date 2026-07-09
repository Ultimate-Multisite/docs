---
title: Verktøy og konfigurasjon
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Verktøy og konfigurasjon

Theme Builder bruker et sett med verktøy for å analysere, designe og bygge WordPress-nettstedet ditt. I versjon 1.16.0 er **sd-ai-agent/site-scrape nå et Tier 1-verktøy**, noe som gjør det tilgjengelig som standard i Theme Builder. Superdav AI Agent v1.18.0 introduserer også en separat distribuert Advanced-følgepakke for betrodde utviklerarbeidsflyter; disse verktøyene er ikke en del av WordPress.org-kjernepakken og må installeres og autoriseres separat.

## Tilgjengelige verktøy

### Tier 1-verktøy (alltid tilgjengelige)

Tier 1-verktøy er tilgjengelige som standard i Theme Builder uten ekstra konfigurasjon.

#### sd-ai-agent/site-scrape

**Formål:** Analysere eksisterende nettsteder for å hente ut designinspirasjon, innholdsstruktur og funksjonalitet.

**Funksjoner:**

- **Nettstedsanalyse** — skrap og analyser konkurrent- eller inspirasjonsnettsteder
- **Designuttrekk** — identifiser farger, skrifttyper og layoutmønstre
- **Innholdsstruktur** — forstå sideorganisering og hierarki
- **Funksjonsdeteksjon** — identifiser plugins og funksjonalitet
- **Ytelsesanalyse** — sjekk sidehastighet og optimalisering
- **SEO-analyse** — gjennomgå metatagger og strukturerte data

**Bruk:**

```
Analyser designet på example.com og bruk det som inspirasjon for nettstedet mitt.
```

**Hva det henter ut:**

- Fargepalett og fargebruk
- Typografi (skrifttyper og størrelser)
- Layoutstruktur og avstand
- Navigasjonsmønstre
- Innholdsorganisering
- Bruk av bilder og medier
- Interaktive elementer
- Mobiltilpasning

**Begrensninger:**

- Kan ikke skrape passordbeskyttede nettsteder
- Respekterer robots.txt og retningslinjer for nettstedet
- Fanger kanskje ikke opp dynamisk innhold
- JavaScript-tunge nettsteder kan ha begrenset analyse
- Store nettsteder kan ta lengre tid å analysere

### Tier 2-verktøy (valgfritt)

Tier 2-verktøy er tilgjengelige når de er eksplisitt aktivert i Theme Builder-innstillingene.

#### Avansert analyse

Gir detaljerte ytelsesmålinger:

- Sideinnlastingstider
- Core Web Vitals
- SEO-poengsum
- Tilgjengelighetspoengsum
- Poengsum for beste praksis

#### Innholdsoptimaliserer

Analyserer og foreslår forbedringer for:

- Lesbarhet
- SEO-optimalisering
- Nøkkelordbruk
- Innholdsstruktur
- Plassering av handlingsoppfordring

### Tier 3-verktøy (Premium)

Tier 3-verktøy krever ekstra konfigurasjon eller premiumfunksjoner.

#### AI-innholdsgenerator

Genererer innhold for:

- Produktbeskrivelser
- Tjenestesider
- Blogginnlegg
- Metabeskrivelser
- Tekst til handlingsoppfordringer

#### Avanserte designverktøy

Gir avanserte designmuligheter:

- Generering av egendefinert CSS
- Oppretting av animasjoner
- Design av interaktive elementer
- Avansert fargeteori
- Typografioptimalisering

### Advanced-følgeverktøy (separat pakke)

Advanced-følgepakken distribueres separat fra kjerneutgivelsen av Superdav AI Agent. Den er ment for betrodde utvikler- og nettstedseiermiljøer der administratorer eksplisitt tillater at agenten bruker verktøy med høy påvirkning.

Advanced-følgefunksjoner kan omfatte:

- **Filsystemverktøy** — inspiser og endre godkjente filer i betrodde miljøer
- **Databaseverktøy** — spørre etter eller oppdatere nettstedsdata når det er eksplisitt autorisert
- **WP-CLI-verktøy** — kjør WordPress-vedlikeholds- og inspeksjonskommandoer
- **REST-dispatcher-verktøy** — kall registrerte REST-endepunkter gjennom kontrollerte dispatch-arbeidsflyter
- **Plugin-byggerverktøy** — stillasbygg og iterer på plugin-kode
- **Git snapshot-verktøy** — opprett snapshots før risikable utvikleroperasjoner
- **Brukeradministrasjonsverktøy** — hjelp til å gjennomgå eller justere brukeroppføringer der det er tillatt
- **Benchmark-verktøy** — kjør ytelses- eller kapabilitetsbenchmarker for utviklingsgjennomgang

Ikke dokumenter disse som generelt tilgjengelige Theme Builder-verktøy for hver installasjon. De er bare tilgjengelige når Advanced-følgepakken er installert, aktivert og begrenset til betrodde administratorer.

## Verktøykonfigurasjon

### Aktivere verktøy

Slik aktiverer du ekstra verktøy i Theme Builder:

1. Gå til **Gratis AI Agent → Settings**
2. Gå til **Theme Builder → Tools**
3. Slå verktøy av/på etter behov
4. Lagre innstillingene

### Verktøytillatelser

Noen verktøy krever tillatelser:

- **Nettstedsskraping** — krever internettilgang
- **Analyse** — krever Google Analytics-integrasjon
- **Innholdsgenerering** — krever API-nøkler
- **Avanserte funksjoner** — kan kreve premiumabonnement
- **Advanced-følgeverktøy** — krever den separat distribuerte Advanced-pakken og eksplisitt administratortillit

### API-nøkler og legitimasjon

Konfigurer API-nøkler for verktøy som krever dem:

1. Gå til **Gratis AI Agent → Settings → API Keys**
2. Angi legitimasjon for hvert verktøy
3. Test tilkoblingen
4. Lagre sikkert

### Installere Advanced-følgepakken

Advanced-følgepakken utgis separat fra WordPress.org-kjerne-ZIP-en. Installer den bare fra prosjektets offisielle distribusjonskanal for utgivelsen, og begrens deretter tilgang til betrodde administratorer. Gjennomgå porter for menneskelig godkjenning og git snapshot-atferd før du aktiverer filsystem-, database-, WP-CLI-, REST-dispatcher-, plugin-bygger-, brukeradministrasjons- eller benchmark-verktøy på et produksjonsnettsted.

## Bruke sd-ai-agent/site-scrape

### Grunnleggende bruk

Be Theme Builder om å analysere et nettsted:

```
Analyser designet på konkurrentens nettsted på competitor.com
og foreslå designforbedringer for nettstedet mitt.
```

### Spesifikk analyse

Be om spesifikke analysetyper:

```
Hent ut fargepaletten fra example.com og bruk den som inspirasjon.
```

```
Analyser navigasjonsstrukturen på example.com og bruk lignende
organisering på nettstedet mitt.
```

```
Sjekk mobiltilpasningen på example.com og sørg for at nettstedet mitt
er like responsivt.
```

### Sammenligningsanalyse

Sammenlign flere nettsteder:

```
Sammenlign designene på site1.com og site2.com og lag et design
som kombinerer de beste elementene fra begge.
```

## Verktøybegrensninger og hensyn

### Hastighetsbegrensning

- Scraping er hastighetsbegrenset for å forhindre overbelastning av serveren
- Flere forespørsler til samme nettsted kan bli strupet
- Store nettsteder kan ta lengre tid å analysere

### Innholdsnøyaktighet

- Dynamisk innhold blir kanskje ikke fanget opp fullstendig
- JavaScript-rendered innhold kan være ufullstendig
- Sanntidsdata blir kanskje ikke gjenspeilet
- Noe innhold kan være bak betalingsmurer

### Juridiske og etiske hensyn

- Respekter robots.txt og nettstedets retningslinjer
- Ikke scrape opphavsrettsbeskyttet innhold for reproduksjon
- Bruk analyse som inspirasjon, ikke til kopiering
- Bekreft at du har rettigheter til å bruke uttrukket innhold
- Følg tjenestevilkårene for analyserte nettsteder

### Ytelsespåvirkning

- Scraping av store nettsteder kan ta tid
- Flere samtidige scrapes kan være tregere
- Nettverkstilkobling påvirker hastigheten
- Store datasett kan kreve mer behandling

## Beste praksis

### Bruke nettstedanalyse

1. **Analyser flere nettsteder** — samle inspirasjon fra flere kilder
2. **Fokuser på struktur** — lær oppsett- og organisasjonsmønstre
3. **Trekk ut farger** — bruk fargepaletter som utgangspunkt
4. **Studer typografi** — identifiser skriftkombinasjoner du liker
5. **Gjennomgå navigasjon** — forstå menyorganisering

### Etisk scraping

1. **Respekter robots.txt** — følg nettstedets retningslinjer
2. **Ikke kopier innhold** — bruk analyse kun som inspirasjon
3. **Bekreft rettigheter** — sørg for at du kan bruke uttrukket innhold
4. **Oppgi kilder** — krediter inspirasjonskilder
5. **Følg vilkår** — overhold nettstedets tjenestevilkår

### Maksimere verktøyets effektivitet

1. **Vær spesifikk** — be om spesifikke typer analyse
2. **Gi kontekst** — forklar nettstedets formål
3. **Sett forventninger** — beskriv designmålene dine
4. **Iterer** — forbedre basert på resultater
5. **Kombiner verktøy** — bruk flere verktøy for omfattende analyse

## Feilsøking

### Nettstedet kan ikke scrapes

- Sjekk om nettstedet er offentlig tilgjengelig
- Bekreft at robots.txt tillater scraping
- Prøv et annet nettsted
- Sjekk internettforbindelsen
- Kontakt support hvis problemet vedvarer

### Ufullstendig analyse

- Nettstedet kan ha dynamisk innhold
- JavaScript blir kanskje ikke fullstendig rendret
- Store nettsteder kan få tidsavbrudd
- Prøv å analysere spesifikke sider i stedet
- Be om spesifikke analysetyper

### Treg ytelse

- Store nettsteder tar lengre tid å analysere
- Flere samtidige scrapes er tregere
- Nettverkstilkobling påvirker hastigheten
- Prøv utenom rushtid
- Analyser mindre seksjoner først

## Relatert dokumentasjon

- [Discovery Interview](./discovery-interview.md) — samle designinformasjon
- [Design Direction](./design-direction.md) — finjuster designet ditt
- [Hospitality Menus](./hospitality-menus.md) — opprett menysider
