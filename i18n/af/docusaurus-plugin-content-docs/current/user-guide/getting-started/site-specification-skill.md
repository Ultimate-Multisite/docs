---
title: Webwerf Spesifikasie Vaardigheid
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Webwerf-spesifikasie Vaardigheid {#site-specification-skill}

Die **Webwerf-spesifikasie vaardigheid** is 'n gestruktureerde benadering om jou webwerf se doelwitte, gehoor en handelsmerkbewustheid vas te vang. Hierdie inligting word in jou **site_brief** geheue gestoor, wat agents oor sessies verwys om konsekwente, konteksbewuste hulp te bied.

## Wat is Webwerf-spesifikasie? {#what-is-site-specification}

Webwerf-spesifikasie is die proses om te dokumenteer:

- **Webwerfdoel:** Wat jou webwerf doen en waarom dit bestaan
- **Teikengehoor:** Wie jou webwerf besoek en wat hulle benodig
- **Handelsmerkbewustheid:** Jou kleure, toon en visuele styl
- **Besigheidsdoelwitte:** Wat sukses vir jou webwerf beteken
- **Inhoudsstruktuur:** Hoe jou webwerf georganiseer is

Hierdie spesifikasie word jou **site_brief**, 'n permanente geheue wat agents gebruik om jou webwerf se konteks te verstaan.

## Hoekom Webwerf-spesifikasie Gebruik? {#why-use-site-specification}

### Konsistensie oor Sessies {#consistency-across-sessions}

Sonder 'n site_brief sou jy jou webwerf se doel elke keer moet herhaal wanneer jy 'n nuwe sessie begin. Met dit, verstaan agents onmiddellik:

- Jou webwerf se doelwitte en gehoor
- Jou handelsmerkkleure en toon
- Jou inhoudsstruktuur
- Jou besigheidsdoelwitte

### Beter Aanbevelings {#better-recommendations}

Agents gebruik jou site_brief om:

- Funksies voor te stel wat by jou webwerf se doel pas
- Inhoudsstrukture aan te beveel wat by jou doelwitte pas
- Designs voor te stel wat konsekwent is met jou handelsmerk
- Om te verhoed dat onverenigbare funksies voorgestel word

### Vinniger Aanpassing {#faster-onboarding}

Nuwe agents (of agents in nuwe sessies) kan vinnig op hoogte kom deur jou site_brief te lees in plaas daarvan om verduidelikende vrae te vra.

## Webwerf-spesifikasie Inisieer {#initiating-site-specification}

### Tydens Theme Builder Onboarding {#during-theme-builder-onboarding}

Die Site Specification skill word outomaties geïnisieer tydens die **Theme Builder onboarding flow**. Die Setup Assistant agent vra vrae en bou jou site_brief.

### Handmatige Inisieer {#manual-initiation}

Jy kan Webwerf-spesifikasie enige tyd begin:

```
"Let's define my site specification"
```

of

```
"Help me create a site brief"
```

## Die Webwerf-spesifikasie Proses {#the-site-specification-process}

### Stap 1: Webwerfdoel {#step-1-site-purpose}

Die agent vra:

```
What is your site's primary purpose?
- E-commerce store
- Blog or content site
- Portfolio or showcase
- SaaS application
- Community or forum
- Other: [describe]
```

Jy kan 'n kategorie kies of jou eie doel beskryf.

### Stap 2: Teikengehoor {#step-2-target-audience}

```
Who is your primary audience?
- Consumers / general public
- Business professionals
- Developers / technical users
- Students / educators
- Other: [describe]

What are their main needs?
```

### Stap 3: Handelsmerkbewustheid {#step-3-brand-identity}

```
What are your brand colors?
- Primary color: [color picker or hex code]
- Secondary color: [color picker or hex code]
- Accent color: [optional]

How would you describe your brand tone?
- Professional / corporate
- Creative / artistic
- Playful / casual
- Minimal / modern
- Warm / friendly
```

### Stap 4: Besigheidsdoelwitte {#step-4-business-goals}

```
What does success look like for your site?
- Generate leads
- Sell products
- Build community
- Share knowledge
- Establish authority
- Other: [describe]

What's your primary metric?
- Revenue
- User engagement
- Content reach
- Conversions
- Other
```

### Stap 5: Inhoudsstruktuur {#step-5-content-structure}

```
How is your content organized?
- Flat (all content at same level)
- Hierarchical (categories and subcategories)
- Chronological (blog-style)
- Product-based (catalog)
- Other: [describe]

What content types do you use?
- Blog posts
- Product pages
- Case studies
- Documentation
- Videos
- Other
```

## Jou site_brief Geheue {#your-sitebrief-memory}

Nadat jy Webwerf-spesifikasie voltooi het, word jou inligting as **site_brief** in jou agent geheue gestoor. Dit is 'n gestruktureerde rekord wat die volgende bevat:

```json
{
  "site_purpose": "E-commerce store for handmade jewelry",
  "target_audience": "Women aged 25-45, interested in sustainable fashion",
  "brand_colors": {
    "primary": "#8B4513",
    "secondary": "#D2B48C",
    "accent": "#2F4F4F"
  },
  "brand_tone": "Warm, artisanal, sustainable",
  "business_goals": ["Generate sales", "Build brand loyalty"],
  "primary_metric": "Revenue",
  "content_structure": "Product catalog with blog",
  "content_types": ["Product pages", "Blog posts", "Customer stories"]
}
```

## Bekyk en Opdateer Jou site_brief {#viewing-and-updating-your-sitebrief}

### Bekyk Jou site_brief {#view-your-sitebrief}

Vra die agent:

```
"Show me my site brief"
```

of

```
"What do you know about my site?"
```

Die agent sal jou gestoor spesifikasie vertoon.

### Opdateer Jou site_brief {#update-your-sitebrief}

As jou webwerf ontwikkel, kan jy dit opdateer:

```
"Update my site brief: we're now targeting B2B customers"
```

of

```
"Refresh my site specification"
```

Dit sal die Site Specification skill herloop met jou bestaande inligting as 'n beginpunt.

## Hoe Agents site_brief Gebruik {#how-agents-use-sitebrief}

### Design Aanbevelings {#design-recommendations}

Wanneer jy om ontwerpveranderinge vra, verwys agents na jou site_brief:

```
You: "Redesign my homepage"
Agent: "Based on your site brief, you're targeting women aged 25-45
with a warm, artisanal tone. I'll create a design that emphasizes
your handmade jewelry and sustainable values."
```

### Funksievoorstelle {#feature-suggestions}

Agents stel funksies voor wat by jou doelwitte pas:

```
You: "What features should I add?"
Agent: "For an e-commerce store focused on customer loyalty,
I'd recommend: loyalty program, customer reviews, email newsletter,
and product recommendations."
```

### Inhoudsstruktuur {#content-structure}

Agents stel inhoudsorganisasie voor gebaseer op jou struktuur:

```
You: "How should I organize my blog?"
Agent: "Since you use a product catalog with blog, I'd suggest
organizing posts by product category and creating 'styling guides'
that showcase multiple products together."
```

## Beste Praktyke {#best-practices}

### Wees Spesifiek {#be-specific}

In plaas van "algemene gehoor," beskryf jou werklike gehoor:

- ✓ "Women aged 25-45, interested in sustainable fashion"
- ✗ "Everyone"

### Regelmatig Opdateer {#update-regularly}

Soos jou webwerf ontwikkel, moet jy jou site_brief opdateer:

- Wanneer jy na 'n nuwe gehoor skuif
- Wanneer jy nuwe produklyne byvoeg
- Wanneer jou handelsmerkbewustheid verander
- Wanneer jou besigheidsdoelwitte verskuif

### Gebruik Konsistente Terminologie {#use-consistent-terminology}

Gebruik dieselfde terme oor sessies heen:

- ✓ Sê altyd "sustainable jewelry" (nie "eco-friendly jewelry" en "green products" nie)
- ✓ Verwys konsekwent na jou gehoor op dieselfde manier

### Sluit Konteks In {#include-context}

Verskaf agtergrond wat agents help om jou besluite te verstaan:

- "Ons mik op professionele mense wat kwaliteit bo prys waardeer"
- "Ons gehoor is tegnologie-bewus en verwag moderne ontwerp"
- "Ons is 'n bootstrapped startup, so ons het koste-effektiewe oplossings nodig"

## Verhouding tot Theme Builder Onboarding {#relationship-to-theme-builder-onboarding}

Die Site Specification skill is geïntegreer in die **Theme Builder onboarding flow**. Wanneer jy die onboarding voltooi, word jou site_brief outomaties geskep met die inligting wat jy verskaf het.

Jy kan ook Webwerf-spesifikasie onafhanklik uitvoer as jy wil:

- Jou spesifikasie verfyn na aanvanklike opstelling
- Jou site_brief opdateer soos jou webwerf ontwikkel
- 'n Gedetailleerde spesifikasie skep voordat jy met Theme Builder begin

## Probleemoplossing {#troubleshooting}

**My site_brief word nie gebruik nie**
- Bevestig dat die agent toegang het tot geheue
- Vra die agent om my site_brief te "herroep"
- Kontroleer of geheue in jou instellings ingskakel is

**Ek wil met 'n nuwe site_brief begin**
- Vra die agent: "Clear my site brief and start fresh"
- Voer dan Webwerf-spesifikasie weer uit

**Die agent maak aanbevelings wat nie by my site_brief pas nie**
- Vra die agent om my site_brief te "oorweeg"
- Update jou site_brief indien dit verouderd is
- Verskaf bykomende konteks in jou versoeke

## Volgende Stappe {#next-steps}

Nadat jy jou webwerf-spesifikasie gedefinieer het:

1. **Gebruik Theme Builder**: Skep 'n aangepaste tema gebaseer op jou site_brief
2. **Verfyn Ontwerp**: Gebruik Design System Aesthetics skill vir gedetailleerde ontwerpwerk
3. **Plan Inhoud**: Vra agents vir inhoudsstruktuur aanbevelings
4. **Bou Funksies**: Vra vir funksies wat by jou besigheidsdoelwitte pas
