---
title: Ujuzi wa Mahitaji ya Tovuti
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Ujuzi wa Kuainisha Tovuti (Site Specification Skill)

**Ujuzi wa Kuainisha Tovuti** ni mbinu iliyo mpangiliwa ya kukamata malengo ya tovuti yako, wateja wako, na utambulisho wa chapa yako. Taarifa hizi hihifadhiwa katika kumbukumbu yako ya **site_brief**, ambayo agents hutumia katika vipindi mbalimbali ili kutoa msaada unaoendana na muktadha na unaoendelea kuwa thabiti.

## Site Specification ni Nini? {#what-is-site-specification}

Site Specification ni mchakato wa kuandika kwa undani:

- **Lengo la tovuti**: Tovuti yako inafanya nini na kwa nini ipo
- **Wateja walengwa**: Nani anatembelea tovuti yako na wanahitaji nini
- **Utambulisho wa chapa**: Rangi zako, sauti (tone), na mtindo wako wa kuona
- **Malengo ya biashara**: Mafanikio yanamaonekana vipi kwa tovuti yako
- **Muundo wa maudhui**: Jinsi tovuti yako inavyopangwa

Uainishaji huu unakuwa **site_brief** yako, kumbukumbu ya kudumu ambayo agents hutumia kuelewa muktadha wa tovuti yako.

## Kwa Nini Kutumia Site Specification? {#why-use-site-specification}

### Uthabiti Katika Vipindi Mbalimbali {#consistency-across-sessions}

Bila site_brief, utahitaji kueleza upya lengo la tovuti yako kila unapofungua kipindi kipya. Nalo, agents wanaelewa mara moja:

- Malengo na wateja walengwa wa tovuti yako
- Rangi na sauti za chapa yako
- Muundo wa maudhui yako
- Malengo yako ya biashara

### Mapendekezo Bora {#better-recommendations}

Agents hutumia site_brief yako ili:

- Kupendekeza vipengele vinavyolingana na lengo la tovuti yako
- Kupendekeza miundo ya maudhui inayolingana na malengo yako
- Kupendekeza miundo inayolingana na chapa yako
- Kuepuka kupendekeza vipengele visivyolingana

### Kuanza Kazi Haraka {#faster-onboarding}

Agents wapya (au agents katika vipindi vipya) wanaweza kufahamu haraka kwa kusoma site_brief yako badala ya kuuliza maswali ya ufafanuzi.

## Kuanzisha Site Specification {#initiating-site-specification}

### Wakati wa Kuanzishwa kwa Theme Builder {#during-theme-builder-onboarding}

Ujuzi wa Site Specification unaanza kiotomatiki wakati wa **Theme Builder onboarding flow**. Agent anaitwa Setup Assistant anakuuliza maswali na kuunda site_brief yako.

### Kuanzisha Kwa Mikono {#manual-initiation}

Unaweza kuanza Site Specification wakati wowote:

```
"Let's define my site specification"
```

au

```
"Help me create a site brief"
```

## Mchakato wa Site Specification {#the-site-specification-process}

### Hatua ya 1: Lengo la Tovuti {#step-1-site-purpose}

Agent anakuuliza:

```
What is your site's primary purpose?
- E-commerce store
- Blog or content site
- Portfolio or showcase
- SaaS application
- Community or forum
- Other: [describe]
```

Unaweza kuchagua kategoria au kuelezea lengo lako mwenyewe.

### Hatua ya 2: Wateja Walengwa {#step-2-target-audience}

```
Who is your primary audience?
- Consumers / general public
- Business professionals
- Developers / technical users
- Students / educators
- Other: [describe]

What are their main needs?
```

### Hatua ya 3: Utambulisho wa Chapa {#step-3-brand-identity}

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

### Hatua ya 4: Malengo ya Biashara {#step-4-business-goals}

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

### Hatua ya 5: Muundo wa Maudhui {#step-5-content-structure}

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

## Kumbukumbu Yako ya site_brief {#your-sitebrief-memory}

Baada ya kukamilisha Site Specification, taarifa yako inahifadhiwa kama **site_brief** katika kumbukumbu ya agent yako. Hii ni rekodi iliyo mpangiliwa inayohifadhi:

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

## Kuangalia na Kusasisha site_brief Yako {#viewing-and-updating-your-sitebrief}

### Angalia site_brief Yako {#view-your-sitebrief}

Muombe agent:

```
"Show me my site brief"
```

au

```
"What do you know about my site?"
```

Agent atakuonyesha uainishaji wako ulihifadhiwa.

### Sasisha site_brief Yako {#update-your-sitebrief}

Ikiwa tovuti yako inabadilika, unaweza kuisasa:

```
"Update my site brief: we're now targeting B2B customers"
```

au

```
"Refresh my site specification"
```

Hii itarudia Site Specification skill kwa kutumia taarifa yako iliyopo kama sehemu ya kuanzia.

## Agents Hutumia site_brief Vipi {#how-agents-use-sitebrief}

### Mapendekezo ya Muundo {#design-recommendations}

Unapoomba mabadiliko ya muundo, agents hutumia site_brief yako:

```
You: "Redesign my homepage"
Agent: "Based on your site brief, you're targeting women aged 25-45
with a warm, artisanal tone. I'll create a design that emphasizes
your handmade jewelry and sustainable values."
```

### Mapendekezo ya Vipengele {#feature-suggestions}

Agents wanapendekeza vipengele vinavyolingana na malengo yako:

```
You: "What features should I add?"
Agent: "For an e-commerce store focused on customer loyalty,
I'd recommend: loyalty program, customer reviews, email newsletter,
and product recommendations."
```

### Muundo wa Maudhui {#content-structure}

Agents wanapendekeza kupangwa kwa maudhui kulingana na muundo wako:

```
You: "How should I organize my blog?"
Agent: "Since you use a product catalog with blog, I'd suggest
organizing posts by product category and creating 'styling guides'
that showcase multiple products together."
```

## Mazoea Bora {#best-practices}

### Kuwa Mahususi {#be-specific}

Badala ya "general audience" (wateja wa jumla), elezea wateja wako halisi:

- ✓ "Women aged 25-45, interested in sustainable fashion"
- ✗ "Everyone"

### Sasisha Mara kwa Mara {#update-regularly}

Kadri tovuti yako inavyobadilika, sasisha site_brief yako:

- Unapobadilisha lengo kwenda kwa wateja tofauti
- Unapoongeza mistari mipya ya bidhaa
- Unapobadilisha utambulisho wa chapa yako
- Unapobadilika malengo ya biashara yako

### Tumia Istilahi Thabiti {#use-consistent-terminology}

Tumia maneno yale yale katika vipindi vyote:

- ✓ Daima sema "sustainable jewelry" (sio "eco-friendly jewelry" na "green products")
- ✓ Rejelea wateja wako kwa njia ileile kila wakati

### Jumuisha Muktadha {#include-context}

Toa background ambayo inasaidia agents kuelewa maamuzi yako:

- "Tunalenga wataalamu ambao wanathamini ubora kuliko bei"
- "Wateja wetu ni wa teknolojia na wanatarajia muundo wa kisasa"
- "Tuko katika startup ambayo huanza na rasilimali chache, kwa hivyo tunahitaji suluhisho za gharama nafuu"

## Uhusiano na Theme Builder Onboarding {#relationship-to-theme-builder-onboarding}

Ujuzi wa Site Specification umeunganishwa katika **Theme Builder onboarding flow**. Unapokamilisha onboarding, site_brief yako huundwa kiotomatiki kwa taarifa uliyotoa.

Unaweza pia kuendesha Site Specification kwa uhuru ikiwa unataka:

- Kuboresha uainishaji wako baada ya kuanzishwa awali
- Kusasisha site brief yako kadri tovuti inavyoendelea
- Kuunda uainishaji wa kina kabla ya kuanza Theme Builder

## Kutatua Matatizo {#troubleshooting}

**site_brief yangu haitumiki**
- Thibitisha kwamba agent ana ufikiaji wa kumbukumbu (memory)
- Muombe agent "recall my site brief"
- Angalia kwamba kumbukumbu imewashwa katika mipangilio yako

**Nataka kuanza upya na site_brief mpya**
- Muombe agent: "Clear my site brief and start fresh"
- Kisha endesha Site Specification tena

**Agent anatoa mapendekezo ambayo hayalingani na site_brief yangu**
- Muombe agent "review my site brief"
- Sasisha site_brief yako ikiwa imepita muda
- Toa muktadha zaidi katika maombi yako

## Hatua Zijazo {#next-steps}

Baada ya kuainisha site specification yako:

1. **Tumia Theme Builder**: Unda theme maalum kulingana na site_brief yako
2. **Boresha Muundo**: Tumia Design System Aesthetics skill kwa kazi za kina za muundo
3. **Panga Maudhui**: Muombe agents mapendekezo ya muundo wa maudhui
4. **Jenga Vipengele**: Omba vipengele vinavyolingana na malengo yako ya biashara
