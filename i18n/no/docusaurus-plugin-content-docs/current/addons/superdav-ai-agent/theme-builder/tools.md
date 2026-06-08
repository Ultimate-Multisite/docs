---
title: Verktøy og konfigurasjon
sidebar_position: 4
_i18n_hash: f27cdab7be320668b6c1d53db1190775
---
# Verktøy og konfigurasjon

Theme Builder bruker et sett med verktøy for å analysere, designe og bygge WordPress-nettstedet ditt. I versjon 1.16.0 er **sd-ai-agent/site-scrape nå et Nivå 1-verktøy**, noe som betyr at det er tilgjengelig som standard i Theme Builder.

## Tilgjengelige verktøy

### Nivå 1-verktøy (Alltid tilgjengelig)

Nivå 1-verktøy er tilgjengelige som standard i Theme Builder uten ekstra konfigurasjon.

#### sd-ai-agent/site-scrape

**Formål:** Analysere eksisterende nettsteder for å trekke ut designinspirasjon, innholdsstruktur og funksjonalitet.

**Hva det kan:**

- **Nettstedsanalyse** — skrape og analysere konkurrenter eller inspirasjonsnettsteder
- **Designutvinning** — identifisere farger, fonter og layoutmønstre
- **Innholdsstruktur** — forstå sideorganisering og hierarki
- **Funksjonsdeteksjon** — identifisere plugins og funksjonalitet
- **Ytelsesanalyse** — sjekke sidehastighet og optimalisering
- **SEO-analyse** — gjennomgå meta-tags og strukturert data

**Bruk:**

```
Analyze the design of example.com and use it as inspiration for my site.
```

**Hva det trekker ut:**

- Fargepalett og fargebruk
- Typografi (fonter og størrelser)
- Layoutstruktur og avstand
- Navigasjonsmønstre
- Innholdsorganisering
- Bilder og mediebruk
- Interaktive elementer
- Mobilresponsivitet

**Begrensninger:**

- Kan ikke skrape nettsteder som er beskyttet av passord
- Respekterer robots.txt og nettstedets retningslinjer
- Fanger kanskje ikke opp dynamisk innhold
- Nettsteder med mye JavaScript kan ha begrenset analyse
- Store nettsteder kan ta lengre tid å analysere

### Nivå 2-verktøy (Valgfritt)

Nivå 2-verktøy er tilgjengelige når de er eksplisitt aktivert i Theme Builder-innstillingene.

#### Advanced Analytics

Gir detaljerte ytelsesmålinger:

- Sideloadelser
- Core Web Vitals
- SEO-score
- Tilgjengelighetsscore
- Beste praksis-score

#### Content Optimizer

Analyser og foreslår forbedringer for:

- Lesbarhet
- SEO-optimalisering
- Nøkkelordbruk
- Innholdsstruktur
- Plassering av handlingsoppfordringer

### Nivå 3-verktøy (Premium)

Nivå 3-verktøy krever ekstra konfigurasjon eller premium-funksjoner.

#### AI Content Generator

Genererer innhold for:

- Produktbeskrivelser
- Servicesider
- Blogginnlegg
- Meta-beskrivelser
- Handlingsoppfordringstekster

#### Advanced Design Tools

Gir avanserte designkapasiteter:

- Generering av tilpasset CSS
- Opprettelse av animasjoner
- Design av interaktive elementer
- Avansert fargeteori
- Typografioptimalisering

## Verktøykonfigurasjon

### Aktivere verktøy

For å aktivere ytterligere verktøy i Theme Builder:

1. Naviger til **Gratis AI Agent → Settings**
2. Gå til **Theme Builder → Tools**
3. Slå verktøyene på/av etter behov
4. Lagre innstillingene

### Verktøyrettigheter

Noen verktøy krever tillatelser:

- **Site scraping** — krever internettilgang
- **Analytics** — krever Google Analytics-integrasjon
- **Content generation** — krever API-nøkler
- **Advanced features** — kan kreve et premium-abonnement

### API-nøkler og legitimasjon

Konfigurer API-nøkler for verktøy som krever det:

1. Gå til **Gratis AI Agent → Settings → API Keys**
2. Skriv inn legitimasjon for hvert verktøy
3. Test tilkoblingen
4. Lagre sikkert

## Bruk av sd-ai-agent/site-scrape

### Grunnleggende bruk

Be Theme Builder om å analysere et nettsted:

```
Analyze the design of my competitor's site at competitor.com
and suggest design improvements for my site.
```

### Spesifikk analyse

Be om spesifikke typer analyse:

```
Extract the color palette from example.com and use it as inspiration.
```

```
Analyze the navigation structure of example.com and apply similar
organization to my site.
```

```
Check the mobile responsiveness of example.com and ensure my site
is equally responsive.
```

### Sammenligningsanalyse

Sammenlign flere nettsteder:

```
Compare the designs of site1.com and site2.com and create a design
that combines the best elements of both.
```

## Verktøybegrensninger og hensyn

### Rate Limiting

- Skraping er begrenset for å forhindre overbelastning av serveren
- Flere forespørsler til samme nettsted kan bli begrenset (throttled)
- Store nettsteder kan ta lengre tid å analysere

### Innholdsnøyaktighet

- Dynamisk innhold kan ikke fanges opp fullstendig
- Innhold rendret med JavaScript kan være ufullstendig
- Sanntidsdata kan ikke reflekteres
- Noe innhold kan være bak betalingsvegger

### Juridiske og etiske hensyn

- Respekter robots.txt og nettstedets retningslinjer
- Ikke skrap opphavsrettsbeskyttet innhold for reproduksjon
- Bruk analysen for inspirasjon, ikke for kopiering
- Verifiser at du har rettigheter til å bruke det utvunnede innholdet
- Følg tjenestevilkårene til de analyserte nettstedene

### Ytelsespåvirkning

- Å skrape store nettsteder kan ta tid
- Flere samtidige skrapinger kan være tregere
- Nettverkstilkobling påvirker hastigheten
- Store datasett kan kreve mer prosessering

## Beste praksiser

### Ved bruk av nettstedsanalyse

1. **Analyser flere nettsteder** — samle inspirasjon fra flere kilder
2. **Fokuser på strukturen** — lær deg layout- og organiseringsmønstre
3. **Trekk ut farger** — bruk fargepaletter som utgangspunkt
4. **Studer typografien** — identifiser fargekombinasjoner du liker
5. **Gjennomgå navigasjonen** — forstå menyorganisering

### Etisk skraping

1. **Respekter robots.txt** — følg nettstedets retningslinjer
2. **Ikke kopier innhold** — bruk analysen kun for inspirasjon
3. **Verifiser rettigheter** — sørg for at du kan bruke det utvunnede innholdet
4. **Kreditér kilder** — gi ære til inspirasjonskildene
5. **Følg vilkår** — overhold nettstedets tjenestevilkår

### Maksimere verktøyeffektiviteten

1. **Vær spesifikk** — be om spesifikke typer analyse
2. **Gi kontekst** — forklar formålet med nettstedet ditt
3. **Sett forventninger** — beskriv dine designmål
4. **Iterer** — forbedre basert på resultatene
5. **Kombiner verktøy** — bruk flere verktøy for en omfattende analyse

## Feilsøking

### Nettstedet vil ikke skrapes

- Sjekk om nettstedet er offentlig tilgjengelig
- Verifiser at robots.txt tillater skraping
- Prøv et annet nettsted
- Sjekk internettforbindelsen
- Kontakt support hvis problemet vedvarer

### Ufullstendig analyse

- Nettstedet kan ha dynamisk innhold
- JavaScript kan ikke være fullstendig rendret
- Store nettsteder kan time ut
- Prøv å analysere spesifikke sider i stedet
- Be om spesifikke analyse-typer

### Treg ytelse

- Store nettsteder tar lengre tid å analysere
- Flere samtidige skrapinger er tregere
- Nettverkstilkobling påvirker hastigheten
- Prøv i perioder med lav trafikk
- Analyser mindre seksjoner først

## Relatert dokumentasjon

- [Discovery Interview](./discovery-interview.md) — samle inn designinformasjon
- [Design Direction](./design-direction.md) — forfine designet ditt
- [Hospitality Menus](./hospitality-menus.md) — opprette meny-sider
