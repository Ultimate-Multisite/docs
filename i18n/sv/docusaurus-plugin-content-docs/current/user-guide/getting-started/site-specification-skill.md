---
title: Webbplats-/sitetekniska kunskaper
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Site Specification-förmågan

**Site Specification-förmågan** är ett strukturerat sätt att fånga din webbplats mål, målgrupp och varumärkesidentitet. Denna information sparas i ditt **site_brief**-minne, som agenter refererar till under olika sessioner för att ge konsekvent och kontextmedveten hjälp.

## Vad är Site Specification? {#what-is-site-specification}

Site Specification är processen att dokumentera:

- **Webbplatsens syfte**: Vad din webbplats gör och varför den existerar
- **Målgrupp**: Vem som besöker din webbplats och vad de behöver
- **Varumärkesidentitet**: Dina färger, ton och visuella stil
- **Affärsmål**: Vad framgång innebär för din webbplats
- **Innehållsstruktur**: Hur din webbplats är organiserad

Denna specifikation blir ditt **site_brief**, ett bestående minne som agenter använder för att förstå din webbplats kontext.

## Varför använda Site Specification? {#why-use-site-specification}

### Konsistens över sessioner {#consistency-across-sessions}

Utan site_brief skulle du behöva förklara webbplatsens syfte varje gång du startar en ny session. Med det förstår agenterna omedelbart:

- Dina webbplats mål och målgrupp
- Dina varumärkesfärger och ton
- Din innehållsstruktur
- Dina affärsmål

### Bättre rekommendationer {#better-recommendations}

Agenterna använder ditt site_brief för att:

- Föreslå funktioner som stämmer överens med webbplatsens syfte
- Rekommendera innehållsstrukturer som matchar dina mål
- Föreslå designer som är konsekventa med ditt varumärke
- Undvika att föreslå inkompatibla funktioner

### Snabbare uppstart {#faster-onboarding}

Nya agenter (eller agenter i nya sessioner) kan snabbt komma igång genom att läsa ditt site_brief istället för att ställa förtydligande frågor.

## Initiera Site Specification {#initiating-site-specification}

### Under Theme Builder Onboarding {#during-theme-builder-onboarding}

Site Specification-förmågan initieras automatiskt under **Theme Builder onboarding flow**. Setup Assistant-agenten ställer frågor och bygger ditt site_brief.

### Manuell initiering {#manual-initiation}

Du kan starta Site Specification när som helst:

```
"Let's define my site specification"
```

eller

```
"Help me create a site brief"
```

## Site Specification-processen {#the-site-specification-process}

### Steg 1: Webbplatsens syfte {#step-1-site-purpose}

Agenten frågar:

```
What is your site's primary purpose?
- E-commerce store
- Blog or content site
- Portfolio or showcase
- SaaS application
- Community or forum
- Other: [describe]
```

Du kan välja en kategori eller beskriva ditt eget syfte.

### Steg 2: Målgrupp {#step-2-target-audience}

```
Who is your primary audience?
- Consumers / general public
- Business professionals
- Developers / technical users
- Students / educators
- Other: [describe]

What are their main needs?
```

### Steg 3: Varumärkesidentitet {#step-3-brand-identity}

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

### Steg 4: Affärsmål {#step-4-business-goals}

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

### Steg 5: Innehållsstruktur {#step-5-content-structure}

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

## Ditt site_brief-minne {#your-sitebrief-memory}

Efter att du har slutfört Site Specification sparas din information som **site_brief** i din agentminne. Detta är ett strukturerat register som innehåller:

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

## Visa och uppdatera ditt site_brief {#viewing-and-updating-your-sitebrief}

### Visa ditt site_brief {#view-your-sitebrief}

Fråga agenten:

```
"Show me my site brief"
```

eller

```
"What do you know about my site?"
```

Agenten kommer att visa din sparade specifikation.

### Uppdatera ditt site_brief {#update-your-sitebrief}

Om din webbplats utvecklas kan du uppdatera den:

```
"Update my site brief: we're now targeting B2B customers"
```

eller

```
"Refresh my site specification"
```

Detta kör om Site Specification-förmågan med din befintliga information som utgångspunkt.

## Hur agenter använder site_brief {#how-agents-use-sitebrief}

### Designrekommendationer {#design-recommendations}

När du ber om designändringar refererar agenterna till ditt site_brief:

```
Du: "Redesign my homepage"
Agent: "Based on your site brief, you're targeting women aged 25-45
with a warm, artisanal tone. I'll create a design that emphasizes
your handmade jewelry and sustainable values."
```

### Funktionsförslag {#feature-suggestions}

Agenterna föreslår funktioner som stämmer överens med dina mål:

```
Du: "What features should I add?"
Agent: "For an e-commerce store focused on customer loyalty,
I'd recommend: loyalty program, customer reviews, email newsletter,
and product recommendations."
```

### Innehållsstruktur {#content-structure}

Agenterna föreslår innehållsorganisering baserat på din struktur:

```
Du: "How should I organize my blog?"
Agent: "Since you use a product catalog with blog, I'd suggest
organizing posts by product category and creating 'styling guides'
that showcase multiple products together."
```

## Bästa praxis {#best-practices}

### Var specifik {#be-specific}

Istället för "general audience," beskriv din faktiska målgrupp:

- ✓ "Women aged 25-45, interested in sustainable fashion"
- ✗ "Everyone"

### Uppdatera regelbundet {#update-regularly}

När din webbplats utvecklas, uppdatera ditt site_brief:

- När du byter fokus till en ny målgrupp
- När du lägger till nya produktlinjer
- När din varumärkesidentitet ändras
- När dina affärsmål skiftar

### Använd konsekvent terminologi {#use-consistent-terminology}

Använd samma termer över sessioner:

- ✓ Säg alltid "sustainable jewelry" (inte "eco-friendly jewelry" och "green products")
- ✓ Hänvisa konsekvent till din målgrupp på samma sätt

### Inkludera kontext {#include-context}

Ge bakgrundsinformation som hjälper agenterna att förstå dina beslut:

- "We're targeting professionals who value quality over price"
- "Our audience is tech-savvy and expects modern design"
- "We're a bootstrapped startup, so we need cost-effective solutions"

## Förhållande till Theme Builder Onboarding {#relationship-to-theme-builder-onboarding}

Site Specification-förmågan är integrerad i **Theme Builder onboarding flow**. När du slutför onboarding skapas ditt site_brief automatiskt med den information du tillhandahållit.

Du kan också köra Site Specification oberoende om du vill:

- Förfina din specifikation efter initial uppsättning
- Uppdatera ditt site_brief när din webbplats utvecklas
- Skapa en detaljerad specifikation innan du startar Theme Builder

## Felsökning {#troubleshooting}

**Mitt site_brief används inte**
- Bekräfta att agenten har tillgång till minnet
- Be agenten att "recall my site brief"
- Kontrollera att minnet är aktiverat i dina inställningar

**Jag vill börja om med ett nytt site_brief**
- Fråga agenten: "Clear my site brief and start fresh"
- Kör sedan Site Specification igen

**Agenten gör rekommendationer som inte matchar mitt site_brief**
- Be agenten att "review my site brief"
- Uppdatera ditt site_brief om det är föråldrat
- Ge ytterligare kontext i dina förfrågningar

## Nästa steg {#next-steps}

Efter att du har definierat din site specification:

1. **Använd Theme Builder**: Skapa ett anpassat tema baserat på ditt site_brief
2. **Förfina design**: Använd Design System Aesthetics-förmågan för detaljerat designarbete
3. **Planera innehåll**: Be agenterna om rekommendationer för innehållsstruktur
4. **Bygga funktioner**: Begär funktioner som stämmer överens med dina affärsmål
