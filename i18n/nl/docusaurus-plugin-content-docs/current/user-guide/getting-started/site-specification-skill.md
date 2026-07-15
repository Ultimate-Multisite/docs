---
title: Site Specificatie Vaardigheid
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Site Specificatie Vaardigheid

De **Site Specificatie vaardigheid** is een gestructureerde aanpak om de doelen, de doelgroep en de merkidentiteit van je site vast te leggen. Deze informatie wordt opgeslagen in je **site_brief** geheugen, dat agenten gebruiken tijdens verschillende sessies om consistente, contextgerichte hulp te bieden.

## Wat is Site Specificatie? {#what-is-site-specification}

Site Specificatie is het proces van het documenteren van:

- **Doel van de site**: Wat je site doet en waarom deze bestaat
- **Doelgroep**: Wie je site bezoekt en wat zij nodig hebben
- **Merkidentiteit**: Je kleuren, toon en visuele stijl
- **Bedrijfsdoelstellingen**: Waar succes voor je site uitgaat
- **Contentstructuur**: Hoe je site is georganiseerd

Deze specificatie wordt je **site_brief**, een blijvend geheugen dat agenten gebruiken om de context van je site te begrijpen.

## Waarom Site Specificatie gebruiken? {#why-use-site-specification}

### Consistentie over Sessies heen {#consistency-across-sessions}

Zonder site_brief zou je bij elke nieuwe sessie je site-doelstellingen opnieuw hoeven uit te leggen. Met deze brief begrijpen agenten onmiddellijk:

- De doelen en de doelgroep van je site
- Je merk-kleuren en toon
- Je contentstructuur
- Je bedrijfsdoelstellingen

### Betere Aanbevelingen {#better-recommendations}

Agenten gebruiken je site_brief om:

- Functionaliteiten voor te stellen die aansluiten bij het doel van je site
- Contentstructuren aan te bevelen die bij je doelen passen
- Ontwerpen voor te stellen die consistent zijn met je merk
- Te voorkomen dat er incompatibele functionaliteiten worden voorgesteld

### Snellere Opstarttijd {#faster-onboarding}

Nieuwe agenten (of agenten in nieuwe sessies) kunnen snel op de hoogte zijn door je site_brief te lezen, in plaats van dat er verduidelijkende vragen gesteld moeten worden.

## Site Specificatie starten {#initiating-site-specification}

### Tijdens Theme Builder Onboarding {#during-theme-builder-onboarding}

De Site Specificatie vaardigheid wordt automatisch gestart tijdens de **Theme Builder onboarding flow**. De Setup Assistant agent stelt vragen en bouwt je site_brief.

### Handmatig starten {#manual-initiation}

Je kunt Site Specificatie op elk moment starten:

```
"Laten we de specificatie van mijn site definiëren"
```

of

```
"Help me een site brief te creëren"
```

## Het Site Specificatie Proces {#the-site-specification-process}

### Stap 1: Doel van de site {#step-1-site-purpose}

De agent vraagt:

```
Wat is het primaire doel van je site?
- E-commerce winkel
- Blog of content site
- Portfolio of showcase
- SaaS applicatie
- Community of forum
- Anders: [beschrijf]
```

Je kunt een categorie selecteren of je eigen doel beschrijven.

### Stap 2: Doelgroep {#step-2-target-audience}

```
Wie is je primaire doelgroep?
- Consumenten / algemeen publiek
- Zakelijke professionals
- Ontwikkelaars / technische gebruikers
- Studenten / docenten
- Anders: [beschrijf]

Wat zijn hun belangrijkste behoeften?
```

### Stap 3: Merkidentiteit {#step-3-brand-identity}

```
Wat zijn je merk-kleuren?
- Primaire kleur: [kleurkiezer of hex-code]
- Secundaire kleur: [kleurkiezer of hex-code]
- Accentkleur: [optioneel]

Hoe zou je je merktoon omschrijven?
- Professioneel / zakelijk
- Creatief / artistiek
- Speels / informeel
- Minimalistisch / modern
- Warm / vriendelijk
```

### Stap 4: Bedrijfsdoelstellingen {#step-4-business-goals}

```
Hoe ziet succes eruit voor je site?
- Leads genereren
- Producten verkopen
- Community opbouwen
- Kennis delen
- Autoriteit vestigen
- Anders: [beschrijf]

Wat is je primaire meetwaarde?
- Omzet
- Betrokkenheid van gebruikers
- Bereik van content
- Conversies
- Anders
```

### Stap 5: Contentstructuur {#step-5-content-structure}

```
Hoe is je content georganiseerd?
- Vlak (alle content op hetzelfde niveau)
- Hiërarchisch (categorieën en subcategorieën)
- Chronologisch (blog-stijl)
- Productgebaseerd (catalogus)
- Anders: [beschrijf]

Welke contenttypen gebruik je?
- Blogberichten
- Productpagina's
- Casestudies
- Documentatie
- Video's
- Anders
```

## Je site_brief Geheugen {#your-sitebrief-memory}

Nadat je de Site Specificatie hebt voltooid, wordt je informatie opgeslagen als **site_brief** in het geheugen van je agent. Dit is een gestructureerd record met:

```json
{
  "site_purpose": "E-commerce winkel voor handgemaakt sieraden",
  "target_audience": "Vrouwen van 25-45 jaar, geïnteresseerd in duurzame mode",
  "brand_colors": {
    "primary": "#8B4513",
    "secondary": "#D2B48C",
    "accent": "#2F4F4F"
  },
  "brand_tone": "Warm, ambachtelijk, duurzaam",
  "business_goals": ["Verkoop genereren", "Merkloyaliteit opbouwen"],
  "primary_metric": "Omzet",
  "content_structure": "Productcatalogus met blog",
  "content_types": ["Productpagina's", "Blogberichten", "Klantverhalen"]
}
```

## Je site_brief bekijken en bijwerken {#viewing-and-updating-your-sitebrief}

### Je site_brief bekijken {#view-your-sitebrief}

Vraag de agent:

```
"Toon me mijn site brief"
```

of

```
"Wat weet je over mijn site?"
```

De agent toont je opgespecificeerde informatie.

### Je site_brief bijwerken {#update-your-sitebrief}

Als je site verandert, kun je deze bijwerken:

```
"Update mijn site brief: we richten ons nu op B2B-klanten"
```

of

```
"Ververs mijn site specificatie"
```

Dit voert de Site Specificatie vaardigheid opnieuw uit, waarbij je bestaande informatie als startpunt wordt gebruikt.

## Hoe Agenten site_brief gebruiken {#how-agents-use-sitebrief}

### Ontwerpaanbevelingen {#design-recommendations}

Wanneer je om ontwerpwijzigingen vraagt, verwijst de agent naar je site_brief:

```
Jij: "Herontwerp mijn homepage"
Agent: "Op basis van je site brief richt je je op vrouwen van 25-45 jaar
met een warm, ambachtelijk gevoel. Ik ga een ontwerp creëren dat
jouw handgemaakte sieraden en duurzame waarden benadrukt."
```

### Functionaliteit Suggesties {#feature-suggestions}

Agenten stellen functionaliteiten voor die aansluiten bij je doelen:

```
Jij: "Welke functionaliteiten moet ik toevoegen?"
Agent: "Voor een e-commerce winkel die gericht is op klantloyaliteit,
raad ik aan: een loyaliteitsprogramma, klantrecensies, een e-mailnieuwsbrief
en productaanbevelingen."
```

### Contentstructuur {#content-structure}

Agenten stellen contentorganisatie voor op basis van je structuur:

```
Jij: "Hoe moet ik mijn blog organiseren?"
Agent: "Aangezien je een productcatalogus met blog gebruikt, stel ik voor
om berichten te organiseren per productcategorie en 'stylinggidsen' te maken
die meerdere producten samen tonen."
```

## Beste Praktijken {#best-practices}

### Wees Specifiek {#be-specific}

In plaats van "algemeen publiek," beschrijf je je werkelijke doelgroep:

- ✓ "Vrouwen van 25-45 jaar, geïnteresseerd in duurzame mode"
- ✗ "Iedereen"

### Regelmatig Bijwerken {#update-regularly}

Naarmate je site evolueert, update je je site_brief:

- Wanneer je van focus verandert naar een nieuwe doelgroep
- Wanneer je nieuwe productlijnen toevoegt
- Wanneer je merkidentiteit verandert
- Wanneer je bedrijfsdoelstellingen verschuiven

### Gebruik Consistente Terminologie {#use-consistent-terminology}

Gebruik dezelfde termen in verschillende sessies:

- ✓ Zeg altijd "duurzaam sieraad" (niet "milieuvriendelijk sieraad" en "groene producten")
- ✓ Verwijs consequent naar je doelgroep op dezelfde manier

### Voeg Context Toe {#include-context}

Geef achtergrondinformatie die agenten helpt bij het begrijpen van je beslissingen:

- "We richten ons op professionals die kwaliteit boven prijs waarderen"
- "Onze doelgroep is technisch onderlegd en verwacht modern design"
- "We zijn een start-up met beperkt budget, dus we hebben kosteneffectieve oplossingen nodig"

## Relatie tot Theme Builder Onboarding {#relationship-to-theme-builder-onboarding}

De Site Specificatie vaardigheid is geïntegreerd in de **Theme Builder onboarding flow**. Wanneer je de onboarding voltooit, wordt je site_brief automatisch aangemaakt met de informatie die je hebt verstrekt.

Je kunt Site Specificatie ook onafhankelijk uitvoeren als je dat wilt:

- Je specificatie verfijnen na de initiële setup
- Je site brief bijwerken naarmate je site evolueert
- Een gedetailleerde specificatie creëren voordat je met Theme Builder begint

## Probleemoplossing {#troubleshooting}

**Mijn site_brief wordt niet gebruikt**
- Bevestig of de agent toegang heeft tot het geheugen
- Vraag de agent om "mijn site brief te herinneren"
- Controleer of het geheugen ingeschakeld is in je instellingen

**Ik wil opnieuw beginnen met een nieuwe site_brief**
- Vraag de agent: "Wis mijn site brief en begin opnieuw"
- Voer daarna de Site Specificatie opnieuw uit

**De agent geeft aanbevelingen die niet overeenkomen met mijn site_brief**
- Vraag de agent om "mijn site brief te herzien"
- Update je site_brief als deze verouderd is
- Geef aanvullende context in je verzoeken

## Volgende Stappen {#next-steps}

Nadat je je site specificatie hebt gedefinieerd:

1. **Gebruik Theme Builder**: Creëer een custom theme op basis van je site_brief
2. **Ontwerp Verfijnen**: Gebruik de Design System Aesthetics vaardigheid voor gedetailleerd ontwerpwerk
3. **Content Plannen**: Vraag agenten om aanbevelingen voor de contentstructuur
4. **Functionaliteiten Bouwen**: Vraag om functionaliteiten die aansluiten bij je bedrijfsdoelstellingen
