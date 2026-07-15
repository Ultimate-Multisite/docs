---
title: Competențe de Specificare a Site-urilor
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Abilitatea de specificații ale site-ului

**Abilitatea de specificații ale site-ului** este o abordare structurată pentru capturarea obiectivelor site-ului, publicului țintă și identității mărcii. Aceste informații sunt stocate în memoria ta **site_brief**, pe care agenții o consultă pe parcursul sesiunilor pentru a oferi asistență consistentă și context-aware.

## Ce sunt specificațiile ale site-ului? {#what-is-site-specification}

Specificațiile ale site-ului reprezintă procesul de documentare a următoarelor:

- **Scopul site-ului**: Ce face site-ul și de ce există
- **Publicul țintă**: Cine vizitează site-ul și ce are nevoie
- **Identitatea mărcii**: Culorile, tonul și stilul vizual
- **Obiectivele de business**: Cum ar arăta succesul pentru site-ul tău
- **Structura conținutului**: Cum este organizat site-ul tău

Această specificație devine **site_brief**, o memorie persistentă pe care agenții o folosesc pentru a înțelege contextul site-ului tău.

## De ce să folosești specificațiile ale site-ului? {#why-use-site-specification}

### Consistență între sesiuni {#consistency-across-sessions}

Fără site_brief, ar trebui să repeți scopul site-ului de fiecare dată când începeți o sesiune nouă. Cu el, agenții înțeleg imediat:

- Obiectivele și publicul site-ului tău
- Culorile și tonul mărcii tale
- Structura conținutului tău
- Obiectivele de business

### Recomandări mai bune {#better-recommendations}

Agenții folosesc site_brief pentru a:

- Sugera funcționalități aliniate scopului site-ului tău
- Recomanda structuri de conținut care se potrivesc obiectivelor tale
- Propune designuri în armonie cu marca ta
- Să evite sugerarea de funcționalități incompatibile

### Onboarding mai rapid {#faster-onboarding}

Agenții noi (sau agenții în sesiuni noi) pot ajunge rapid la subiect citind site_brief-ul tău, în loc să trebuiască să pună întrebări de clarificare.

## Inițierea specificațiilor ale site-ului {#initiating-site-specification}

### În timpul onboarding-ului Theme Builder {#during-theme-builder-onboarding}

Abilitatea de specificații ale site-ului este inițiată automat în timpul fluxului de **onboarding pentru Theme Builder**. Agentul Setup Assistant pune întrebări și construiește site_brief-ul tău.

### Inițiere manuală {#manual-initiation}

Poți începe specificațiile ale site-ului în orice moment:

```
"Let's define my site specification"
```

sau

```
"Help me create a site brief"
```

## Procesul de specificații ale site-ului {#the-site-specification-process}

### Pasul 1: Scopul site-ului {#step-1-site-purpose}

Agentul întreabă:

```
What is your site's primary purpose?
- E-commerce store
- Blog or content site
- Portfolio or showcase
- SaaS application
- Community or forum
- Other: [describe]
```

Poți selecta o categorie sau să descrii scopul propriu.

### Pasul 2: Publicul țintă {#step-2-target-audience}

```
Who is your primary audience?
- Consumers / general public
- Business professionals
- Developers / technical users
- Students / educators
- Other: [describe]

What are their main needs?
```

### Pasul 3: Identitatea mărcii {#step-3-brand-identity}

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

### Pasul 4: Obiectivele de business {#step-4-business-goals}

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

### Pasul 5: Structura conținutului {#step-5-content-structure}

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

## Memoria ta site_brief {#your-sitebrief-memory}

După finalizarea specificațiilor ale site-ului, informațiile tale sunt stocate ca **site_brief** în memoria agentului. Acesta este un registru structurat care conține:

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

## Vizualizarea și actualizarea site_brief-ului tău {#viewing-and-updating-your-sitebrief}

### Vizualizează site_brief-ul tău {#view-your-sitebrief}

Roagă agentul:

```
"Show me my site brief"
```

sau

```
"What do you know about my site?"
```

Agentul îți va afișa specificațiile stocate.

### Actualizează site_brief-ul tău {#update-your-sitebrief}

Dacă site-ul tău evoluează, îl poți actualiza:

```
"Update my site brief: we're now targeting B2B customers"
```

sau

```
"Refresh my site specification"
```

Acest lucru va rula din nou abilitatea de specificații ale site-ului, folosind informațiile existente ca punct de plecare.

## Cum folosesc agenții site_brief-ul {#how-agents-use-sitebrief}

### Recomandări de design {#design-recommendations}

Când ceri modificări de design, agenții consultă site_brief-ul tău:

```
You: "Redesign my homepage"
Agent: "Based on your site brief, you're targeting women aged 25-45
with a warm, artisanal tone. I'll create a design that emphasizes
your handmade jewelry and sustainable values."
```

### Sugestii de funcționalități {#feature-suggestions}

Agenții sugerează funcționalități aliniate obiectivelor tale:

```
You: "What features should I add?"
Agent: "For an e-commerce store focused on customer loyalty,
I'd recommend: loyalty program, customer reviews, email newsletter,
and product recommendations."
```

### Structura conținutului {#content-structure}

Agenții propun o organizare a conținutului bazată pe structura ta:

```
You: "How should I organize my blog?"
Agent: "Since you use a product catalog with blog, I'd suggest
organizing posts by product category and creating 'styling guides'
that showcase multiple products together."
```

## Cele mai bune practici {#best-practices}

### Fii specific {#be-specific}

În loc de "public general," descrie publicul tău real:

- ✓ "Women aged 25-45, interested in sustainable fashion"
- ✗ "Everyone"

### Actualizează regulat {#update-regularly}

Pe măsură ce site-ul tău evoluează, actualizează site_brief-ul:

- Când faci o schimbare de public țintă
- Când adaugi noi linii de produse
- Când se schimbă identitatea mărcii tale
- Când își schimbă obiectivele de business

### Folosește terminologie consistentă {#use-consistent-terminology}

Folosește aceleași termeni pe parcursul sesiunilor:

- ✓ Spune întotdeauna "sustainable jewelry" (nu "eco-friendly jewelry" și "green products")
- ✓ Referă-te consistent publicului tău în același mod

### Include context {#include-context}

Oferă un fundal care să ajute agenții să înțeleagă deciziile tale:

- "We're targeting professionals who value quality over price"
- "Our audience is tech-savvy and expects modern design"
- "We're a bootstrapped startup, so we need cost-effective solutions"

## Relația cu onboarding-ul Theme Builder {#relationship-to-theme-builder-onboarding}

Abilitatea de specificații ale site-ului este integrată în **fluxul de onboarding pentru Theme Builder**. Când finalizezi onboarding-ul, site_brief-ul tău este creat automat cu informațiile pe care le-ai furnizat.

De asemenea, poți rula specificațiile ale site-ului independent dacă dorești:

- Să îți rafine specificațiile după inițializare
- Să actualizezi site_brief-ul pe măsură ce site-ul tău evoluează
- Să creezi o specificație detaliată înainte de a începe Theme Builder

## Depanșare {#troubleshooting}

**site_brief-ul meu nu este folosit**
- Confirmă că agentul are acces la memorie
- Roagă agentul să "recall my site brief"
- Verifică că memoria este activată în setările tale

**Vreau să încep de la zero cu un site_brief nou**
- Roagă agentul: "Clear my site brief and start fresh"
- Apoi rulează din nou specificațiile ale site-ului

**Agentul face recomandări care nu se potrivesc site_brief-ului meu**
- Roagă agentul să "review my site brief"
- Actualizează site_brief-ul dacă este învechit
- Oferă context suplimentar în cererile tale

## Pași următori {#next-steps}

După ce ai definit specificațiile ale site-ului:

1. **Folosește Theme Builder**: Creează un tema personalizat pe baza site_brief-ului tău
2. **Rafină Designul**: Folosește abilitatea Design System Aesthetics pentru lucrări de design detaliate
3. **Planifică Conținutul**: Roagă agenții pentru recomandări de structură a conținutului
4. **Construiește Funcționalități**: Solicită funcționalități aliniate obiectivelor de business
