---
title: Kakayahan sa Pagtukoy ng Site
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Site Specification Skill

Ang **Site Specification skill** ay isang structured approach para ma-capture ang mga layunin, target audience, at brand identity ng inyong site. Ang impormasyong ito ay naka-store sa inyong **site_brief** memory, na ginagamit ng mga agents sa iba't ibang session para makapagbigay ng consistent at context-aware na tulong.

## Ano ang Site Specification?

Ang Site Specification ay ang proseso ng pagdodokumento ng mga sumusunod:

- **Site purpose**: Ano ang ginagawa ng inyong site at bakit ito umiiral
- **Target audience**: Sino ang bumibisita sa inyong site at ano ang kanilang pangangailangan
- **Brand identity**: Ang inyong mga kulay, tono, at visual style
- **Business goals**: Ano ang ibig sabihin ng tagumpay para sa inyong site
- **Content structure**: Paano naka-organisa ang inyong site

Ang specification na ito ay nagiging **site_brief** ninyo, isang permanenteng memorya na ginagamit ng mga agents para maintindihan ang context ng inyong site.

## Bakit Gumamit ng Site Specification?

### Consistency Across Sessions

Kung wala ang site_brief, kailangan ninyong ulit-ulitin na ipaliwanag ang layunin ng inyong site sa tuwing magsisimula kayo ng bagong session. Dahil dito, agad na naiintindihan ng mga agents:

- Ang mga layunin at target audience ng inyong site
- Ang mga kulay at tono ng inyong brand
- Ang istraktura ng inyong content
- Ang mga business objectives ninyo

### Better Recommendations

Ginagamit ng mga agents ang site_brief ninyo para:

- Magmungkahi ng features na akma sa layunin ng inyong site
- Magrekomenda ng content structures na tumutugma sa inyong goals
- Mag-propose ng designs na consistent sa inyong brand
- Maiiwasan ang pagmumungkahi ng mga features na hindi tugma

### Faster Onboarding

Ang mga bagong agents (o mga agents sa bagong session) ay mabilis na makakabawi ng kaalaman sa pamamagitan ng pagbasa ng site_brief ninyo kaysa sa pagtatanong ng mga clarifying questions.

## Pag-uumpisa ng Site Specification

### During Theme Builder Onboarding

Ang Site Specification skill ay awtomatikong sinisimulan sa **Theme Builder onboarding flow**. Ang Setup Assistant agent ay magtatanong at bubuo ng inyong site_brief.

### Manual Initiation

Maaari ninyong simulan ang Site Specification anumang oras:

```
"Let's define my site specification"
```

o

```
"Help me create a site brief"
```

## Ang Proseso ng Site Specification

### Step 1: Site Purpose

Tatanungin ng agent:

```
What is your site's primary purpose?
- E-commerce store
- Blog or content site
- Portfolio or showcase
- SaaS application
- Community or forum
- Other: [describe]
```

Maaari kayong pumili ng kategorya o mag-describe ng sarili ninyong layunin.

### Step 2: Target Audience

```
Who is your primary audience?
- Consumers / general public
- Business professionals
- Developers / technical users
- Students / educators
- Other: [describe]

What are their main needs?
```

### Step 3: Brand Identity

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

### Step 4: Business Goals

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

### Step 5: Content Structure

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

## Ang Iyong site_brief Memory

Pagkatapos kumumpleto ng Site Specification, ang inyong impormasyon ay naka-store bilang **site_brief** sa memorya ng inyong agent. Ito ay isang structured record na naglalaman ng:

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

## Pagtingin at Pag-update ng Iyong site_brief

### Tingnan ang Iyong site_brief

Itanong sa agent:

```
"Show me my site brief"
```

o

```
"What do you know about my site?"
```

Ipapalabas ng agent ang inyong naka-store na specification.

### I-update ang Iyong site_brief

Kung nagbabago ang inyong site, maaari ninyo itong i-update:

```
"Update my site brief: we're now targeting B2B customers"
```

o

```
"Refresh my site specification"
```

Ito ay muling magpapatakbo sa Site Specification skill gamit ang inyong kasalukuyang impormasyon bilang panimula.

## Paano Gumagamit ang Agents ng site_brief

### Design Recommendations

Kapag humingi kayo ng design changes, ire-reference ng mga agents ang inyong site_brief:

```
You: "Redesign my homepage"
Agent: "Based on your site brief, you're targeting women aged 25-45
with a warm, artisanal tone. I'll create a design that emphasizes
your handmade jewelry and sustainable values."
```

### Feature Suggestions

Magmumungkahi ang mga agents ng features na naka-align sa inyong goals:

```
You: "What features should I add?"
Agent: "For an e-commerce store focused on customer loyalty,
I'd recommend: loyalty program, customer reviews, email newsletter,
and product recommendations."
```

### Content Structure

Magmumungkahi ang mga agents ng content organization batay sa inyong structure:

```
You: "How should I organize my blog?"
Agent: "Since you use a product catalog with blog, I'd suggest
organizing posts by product category and creating 'styling guides'
that showcase multiple products together."
```

## Best Practices

### Maging Specific

Sa halip na "general audience," ilarawan ang aktwal na audience ninyo:

- ✓ "Women aged 25-45, interested in sustainable fashion"
- ✗ "Everyone"

### Mag-update nang Regular

Habang nagbabago ang inyong site, i-update ang inyong site_brief:

- Kapag nag-pivot kayo sa bagong audience
- Kapag nagdagdag kayo ng bagong product lines
- Kapag nagbago ang inyong brand identity
- Kapag nagbago ang inyong business goals

### Gumamit ng Consistent Terminology

Gumamit ng parehong terms sa iba't ibang session:

- ✓ Laging sabihing "sustainable jewelry" (hindi "eco-friendly jewelry" at "green products")
- ✓ Palaging tukuyin ang inyong audience sa parehong paraan

### Isama ang Context

Magbigay ng background na makakatulong sa agents na maintindihan ang inyong mga desisyon:

- "Target namin ang mga professional na nagpapahalaga sa kalidad kaysa sa presyo"
- "Ang audience namin ay tech-savvy at umaasa sa modernong design"
- "Kami ay isang bootstrapped startup, kaya kailangan namin ng cost-effective solutions"

## Kaugnayan sa Theme Builder Onboarding

Ang Site Specification skill ay integrated sa **Theme Builder onboarding flow**. Kapag kumpleto na ang onboarding, awtomatikong ginagawa ang inyong site_brief gamit ang impormasyong ibinigay ninyo.

Maaari rin ninyong patakbuhin ang Site Specification nang hiwalay kung gusto ninyo:

- Linawin ang inyong specification pagkatapos ng initial setup
- I-update ang inyong site brief habang nagbabago ang inyong site
- Gumawa ng detalyadong specification bago simulan ang Theme Builder

## Troubleshooting

**Hindi ginagamit ang site_brief ko**
- Kumpirmahin na may access ang agent sa memory
- Hilingin sa agent na "recall my site brief"
- Tingnan na enabled ang memory sa inyong settings

**Gusto kong magsimula ulit sa bagong site_brief**
- Itanong sa agent: "Clear my site brief and start fresh"
- Pagkatapos ay patakbuhin muli ang Site Specification

**Ang mga rekomendasyon ng agent ay hindi tumutugma sa site_brief ko**
- Hilingin sa agent na "review my site brief"
- I-update ang inyong site_brief kung ito ay outdated
- Magbigay ng karagdagang context sa inyong mga requests

## Next Steps

Pagkatapos tukuyin ang inyong site specification:

1. **Use Theme Builder**: Gumawa ng custom theme batay sa inyong site_brief
2. **Refine Design**: Gumamit ng Design System Aesthetics skill para sa detalyadong design work
3. **Plan Content**: Magtanong sa agents para sa content structure recommendations
4. **Build Features**: Humiling ng features na naka-align sa inyong business goals
