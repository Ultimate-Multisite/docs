---
title: Hjemmeside-specifikation færdighed
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Site Specification færdighed

**Site Specification færdigheden** er en struktureret måde at indfange dine websides mål, målgruppe og brandidentitet på. Denne information gemmes i din **site\_brief** hukommelse, som agenter refererer til på tværs af sessioner for at give konsistent, kontekstbevidst hjælp.

## Hvad er Site Specification? {#what-is-site-specification}

Site Specification er processen med at dokumentere:

- **Sidens formål**: Hvad din side gør og hvorfor den eksisterer
- **Målgruppe**: Hvem der besøger din side og hvad de har brug for
- **Brandidentitet**: Dine farver, tone og visuelle stil
- **Forretningsmål**: Hvordan succes ser ud for din side
- **Indholdsstruktur**: Hvordan din side er organiseret

Denne specifikation bliver din **site\_brief**, et vedvarende hukommelseslag, som agenter bruger til at forstå konteksten på din side.

## Hvorfor bruge Site Specification? {#why-use-site-specification}

### Konsistens på tværs af sessioner {#consistency-across-sessions}

Uden site\_brief skulle du forklare sidens formål igen hver gang du starter en ny session. Med den forstår agenter øjeblikkeligt:

- Dine sides mål og målgruppe
- Dine brandfarver og tone
- Din indholdsstruktur
- Dine forretningsmål

### Bedre anbefalinger {#better-recommendations}

Agenter bruger din site\_brief til at:

- Foreslå funktioner, der stemmer overens med sidens formål
- Anbefale indholdsstrukturer, der matcher dine mål
- Foreslå designs, der er konsistente med dit brand
- Undgå at foreslå uforenelige funktioner

### Hurtigere onboarding {#faster-onboarding}

Nye agenter (eller agenter i nye sessioner) kan hurtigt komme op i gang ved at læse din site\_brief i stedet for at stille afklarende spørgsmål.

## Start af Site Specification {#initiating-site-specification}

### Under Theme Builder Onboarding {#during-theme-builder-onboarding}

Site Specification færdigheden starter automatisk under **Theme Builder onboarding flow**. Setup Assistant agent stiller spørgsmål og bygger din site\_brief op.

### Manuel start {#manual-initiation}

Du kan starte Site Specification når som helst:

```
"Lad os definere min sitespecifikation"
```

eller

```
"Hjælp mig med at lave et siteskema"
```

## Processen for Sitespecifikation {#the-site-specification-process}

### Trin 1: Websitets formål {#step-1-site-purpose}

Agenten spørger:

```
Hvad er dit websitets primære formål?
- E-handelsbutik
- Blog eller indholdssite
- Portfolio eller fremvisning
- SaaS-applikation
- Community eller forum
- Andet: [beskriv]
```

Du kan vælge en kategori eller beskrive dit eget formål.

### Trin 2: Målgruppe {#step-2-target-audience}

```
Hvem er din primære målgruppe?
- Forbrugere / almindelige mennesker
- Virksomhedsprofessionelle
- Udviklere / tekniske brugere
- Studerende / undervisere
- Andet: [beskriv]

Hvad er deres hovedbehov?
```

### Trin 3: Brandidentitet {#step-3-brand-identity}

```
Hvilke farver har dit brand?
- Primærfarve: [farvevælger eller hex kode]
- Sekundærfarve: [farvevælger eller hex kode]
- Accentfarve: [valgfrit]

Hvordan vil du beskrive din brands tone?
- Professionel / korporativ
- Kreativ / kunstnerisk
- Legende / afslappet
- Minimal / moderne
- Varm / venlig
```

### Trin 4: Forretningsmål {#step-4-business-goals}

```
Hvordan ser succes ud for dit site?
- Generer leads
- Sælg produkter
- Opbyg fællesskab
- Del viden
- Etabler autoritet
- Andet: [beskriv]

Hvad er din primære metrik?
- Indtægter
- Brugerengagement
- Indholdsrækkevidde
- Konverteringer
- Andet
```

### Trin 5: Indholdsstruktur {#step-5-content-structure}

```
Hvordan er dit indhold organiseret?
- Flad (alt indhold på samme niveau)
- Hierarkisk (kategorier og underkategorier)
- Kronologisk (blog-stil)
- Produktbaseret (katalog)
- Andet: [beskriv]

Hvilke indholdstyper bruger du?
- Blogindlæg
- Produktsider
- Case studies
- Dokumentation
- Videoer
- Andet
```

## Din site_brief hukommelse {#your-sitebrief-memory}

Efter at have gennemført Sitespecifikation, gemmes dine oplysninger som **site_brief** i din agents hukommelse. Dette er en struktureret registrering, der indeholder:

## Sej og opdatering af din site_brief {#viewing-and-updating-your-sitebrief}

### Se din site_brief {#view-your-sitebrief}

Spør agenten:

```
"Vis mig min site brief"
```

eller

```
"Hvad ved du om min side?"
```

Agenten vil vise din gemte specifikation.

### Opdater din site_brief {#update-your-sitebrief}

Hvis din side udvikler sig, kan du opdatere den:

```
"Opdater min site brief: vi målretter nu B2B-kunder"
```

eller

```
"Opfrisk min sitespecifikation"
```

Dette vil genkøre Site Specification skill'en med dine eksisterende oplysninger som udgangspunkt.

## Hvordan agenter bruger site_brief {#how-agents-use-sitebrief}

### Designanbefalinger {#design-recommendations}

Når du beder om designændringer, henviser agenter til din site_brief:

```
Du: "Redesign min forside"
Agent: "Baseret på din site brief målretter du kvinder i alderen 25-45 med en varm, håndværksmæssig tone. Jeg vil skabe et design, der fremhæver dit håndlavede smykker og dine bæredygtige værdier."
```

### Funktionsforslag {#feature-suggestions}

Agenter foreslår funktioner i overensstemmelse med dine mål:

```
Du: "Hvilke funktioner skal jeg tilføje?"
Agent: "For en e-handelsbutik fokuseret på kundeloyalitet vil jeg anbefale: et loyalitetsprogram, kundeanmeldelser, et e-mailnyhedsbrev og produktanbefalinger."
```

### Indholdsstruktur {#content-structure}

Agenter foreslår indholdsorganisering baseret på din struktur:

Du: "Hvordan skal jeg organisere min blog?"
Agent: "Da du bruger en produktkatalog med blog, vil jeg foreslå at organisere indlæggene efter produktkategori og oprette 'styling guides', der viser flere produkter sammen."

## Bedste praksis {#best-practices}

### Vær specifik {#be-specific}

I stedet for "generel målgruppe", beskriv din faktiske målgruppe:

- ✓ "Kvinder i alderen 25-45, interesserede i bæredygtig mode"
- ✗ "Alle"

### Opdater regelmæssigt {#update-regularly}

Efterhånden som dit site udvikler sig, opdater din `site_brief`:

- Når du skifter målgruppe
- Når du tilføjer nye produktlinjer
- Når dit brandidentitet ændrer sig
- Når dine forretningsmål skifter

### Brug konsistent terminologi {#use-consistent-terminology}

Brug de samme termer i alle sessioner:

- ✓ Sig altid "bæredygtige smykker" (ikke "miljøvenlige smykker" og "grønne produkter")
- ✓ Henvis til din målgruppe konsekvent på samme måde

### Inkludér kontekst {#include-context}

Giv baggrundsinformation, der hjælper agenter med at forstå dine beslutninger:

- "Vi retter os mod professionelle, der værdsætter kvalitet over pris"
- "Vores målgruppe er teknisk kyndige og forventer moderne design"
- "Vi er en bootstrapped startup, så vi har brug for omkostningseffektive løsninger"

## Forholdet til Theme Builder onboarding {#relationship-to-theme-builder-onboarding}

Site Specification færdigheden er integreret i **Theme Builder onboarding flow**. Når du gennemfører onboarding, oprettes din `site_brief` automatisk med de oplysninger, du har givet.

Du kan også køre Site Specification uafhængigt, hvis du ønsker at:

- Finjustere din specifikation efter den indledende opsætning
- Opdatere din site brief, efter dit site udvikler sig
- Oprette en detaljeret specifikation, før du starter Theme Builder

## Fejlfinding {#troubleshooting}

**Min site_brief bliver ikke brugt**
- Bekræft, at agenten har adgang til hukommelsen (memory)
- Bed agenten om at "genkalde min site brief"
- Tjek, at hukommelse er aktiveret i dine indstillinger

**Jeg vil starte forfra med en ny site\_brief**
- Bed agenten: "Clear my site brief and start fresh" (Ryd min site brief og start forfra)
- Kør Site Specification igen

**Agenten giver anbefalinger, der ikke matcher min site\_brief**
- Bed agenten om at "review my site brief" (gennemgå min site brief)
- Opdater din site\_brief, hvis den er udløbet
- Giv yderligere kontekst i dine anmodninger

## Næste skridt {#next-steps}

Efter du har defineret din site specification:

1. **Brug Theme Builder**: Opret et custom tema baseret på din site\_brief
2. **Forfin designet**: Brug Design System Aesthetics skill til detaljeret designarbejde
3. **Plan indholdet**: Bed agenter om anbefalinger til indholdsstruktur
4. **Byg funktionerne**: Anmod om funktioner, der er i tråd med dine forretningsmål
