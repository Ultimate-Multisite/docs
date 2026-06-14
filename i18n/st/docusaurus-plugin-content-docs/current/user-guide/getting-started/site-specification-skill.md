---
title: Tšepo ea tšepetso ea seboha
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Fikiso ea Tlhaloso ea Site (Site Specification Skill)

**Fikiso ea Tlhaloso ea Site (Site Specification skill)** ke setso se fetang se fanaang ho faka tsela e fetang ho faka tlhahlobo ea site ea hau, baetsoah, le lilikong la brand. Lefa la hau le tla fanaang ka **site_brief** memory ea hau, seo agents ba tlameha ho sebelisa ho fana ka thuso e fetang le ho tseba se se fetang sa tsela (context).

## Ke eng ke Fikiso ea Tlhaloso ea Site?

Fikiso ea Tlhaloso ea Site ke tsela e fetang ea ho dula:

- **Mokhoa oa site**: Se se etsoeng le kaofino se etsoeng.
- **Baetsoah ba tsoalo (Target audience)**: Baong ba tla tla faka site ea hau le se etsoeng sa bona.
- **Lilikong la brand (Brand identity)**: Lilikong la hau, tono, le litse tsa haholo ho hlokomela.
- **Mokhoa oa luso (Business goals)**: Se se fetang sa ho ba le bohlokoa ho site ea hau.
- **Mokhoa oa lilikong (Content structure)**: Site ea hau e ntse e tsamaisang kae.

Fikiso ena e tla ba **site_brief** ea hau, memory e fetang e agents ba sebelisa ho tseba se etsoeng sa site ea hau.

## Ke eng ke Sebetsana le Fikiso ea Tlhaloso ea Site?

### Ho Ba le Bohlokoa ka Sesano Sa Fetang (Consistency Across Sessions)

Ha u na le site_brief, o tla hloka ho reka molaetsa oa se etsoeng sa site ea hau ka nako hloekoe e fetang. Ha u na le seo, agents ba tla tseba kaofino ka tsela:

- Mokhoa oa site le baetsoah ba bona
- Lilikong la brand le tono ea hau
- Mokhoa oa lilikong le mokhoa oa ho ba le bohlokoa
- Mokhoa oa luso oa hau

### Ho Ba le Litso e Tlhalang (Better Recommendations)

Agents ba sebelisa site_brief ea hau ho:

- Reka litse tse fapaneng tse di fetang ka mokhoa oa site ea hau
- Re kae litse tsa lilikong tse di tsamaisang le mohlomong oa hau
- Re kae litse tsa design tse di tsamaisang le brand ea hau
- Ho hlalosa ho reka litse tse nngwe tse nngwe

### Ho Ba le Boitshwaro e Tlhalang (Faster Onboarding)

Agents ba tsoalo (or agents ba sesano sa fetang) ba ka ba le boikanyetso ka nako e fetang ka ho fonya site_brief ea hau haholo, hawalase ho hlalosa molaetsa o fapaneng.

## Ho Qala Fikiso ea Tlhaloso ea Site (Initiating Site Specification)

### Ha U Ba le Onboarding ea Theme Builder

Fikiso ea Tlhaloso ea Site e tla qala ka tsela fetang ha u ba le **Theme Builder onboarding flow**. Agent ea Setup Assistant o tla hlalosa molaetsa o fapaneng le a dula site_brief ea hau.

### Ho Qala Ka Mananya (Manual Initiation)

O ka u ka seka le fa'aopoopo o le site:

```
"Let's define my site specification"
```

pe a

```
"Help me create a site brief"
```

## Le Fa'aopoopo o le Site (The Site Specification Process)

### Step 1: Le Fa'aopoopo o le Site (Site Purpose)

O le agent e fa'aalia:

```
What is your site's primary purpose?
- E-commerce store
- Blog or content site
- Portfolio or showcase
- SaaS application
- Community or forum
- Other: [describe]
```

O le a mafai ona fesoasoani i se kategori pe fa'aalia o se fa'aopoopo.

### Step 2: Le Fa'aopoopo o le Ta'ita'i (Target Audience)

```
Who is your primary audience?
- Consumers / general public
- Business professionals
- Developers / technical users
- Students / educators
- Other: [describe]

What are their main needs?
```

O le a mafai ona fa'aalia o se mea e talaga ai i latou.

### Step 3: Le Fa'aopoopo o le Fa'aalo (Brand Identity)

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

O le a mafai ona fa'aalia o se fa'aalo.

### Step 4: Le Fa'aopoopo o le Tasi (Business Goals)

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

O le a mafai ona fa'aalia o se mea e talaga ai i le fa'aopoopo.

### Step 5: Le Fa'aopoopo o le Fa'aopoopo (Content Structure)

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

O le a mafai ona fa'aalia o se fa'aopoopo o le fa'aopoopo.

## Le Memory o le site_brief (Your site_brief Memory)

A fa'atatau i le Fa'aopoopo o le Site, o le fa'aalia o oe e fa'aopoopo ai o se **site_brief** i le memory o lo agent. O se fa'aalia fa'aopoopo e fesoasoani i:

## Site-brief-a hoho (Site Brief) a tlhahlobo le go fetola

### Leela le site-brief ya gago (View Your site_brief)

Tšoa le agent:

```
"Show me my site brief"
```

pho ka

```
"What do you know about my site?"
```

Agent o tla ntlha tsela e ntshwago.

### Fetola le site-brief ya gago (Update Your site_brief)

Ha se a fetola, u ka fetola:

```
"Update my site brief: we're now targeting B2B customers"
```

pho ka

```
"Refresh my site specification"
```

Tsela e tla fana ka tsela e ntshwago ya Site Specification le mofuta o o tsamaisang le mofuta o o tsamaisang joalo.

## Ke eng Agents ba u sebelisa site_brief

### Boitshwaro ba design (Design Recommendations)

Ha u hloka fetola tsa design, agents ba ntlha le site_brief ya gago:

```
U: "Redesign my homepage"
Agent: "Based on your site brief, you're targeting women aged 25-45
with a warm, artisanal tone. I'll create a design that emphasizes
your handmade jewelry and sustainable values."
```

### Boitshwaro ba features (Feature Suggestions)

Agents ba ntlha le features tse di tsamaisang le mofuta o o tsamaisang:

```
U: "What features should I add?"
Agent: "For an e-commerce store focused on customer loyalty,
I'd recommend: loyalty program, customer reviews, email newsletter,
and product recommendations."
```

### Boitshwaro ba content (Content Structure)

Agents ba tšoa boikanyetso ba content ka go tsamaisa le mofuta o o tsamaisang:

O: "Ke a re ka fana ka blog ea ka?"
Agent: "Ka u sebelisa product catalog le blog, ke ke bolela hore u baqale posts ho baqale category ea produk le u seke 'styling guides' tse di bontšang products tse dintsi hobane."

## Ho Baetsi Baetsi (Best Practices)

### Le Letsope

Ho feta "bahlopha ba tsohle," baithoa u baitholela baahlopha ba hau:

- ✓ "Morali ba 25-45, ba tšepo ea fashle e tsamaea"
- ✗ "Ba tsohle"

### Ho Baetsi Ha Ho Hloboha

Ha seka le site ea hau e fetoha, u hloboha site_brief ea hau:

- Ha u shubisa baahlopha ba ntlha
- Ha u nthela liti tse ntlha tsa produk
- Ha lefa le tšepo ea hau ea brand e fetoha
- Ha tšepo ea hau ea kgosi e fetoha

### Ho Baetsi Litsope Tse Tšoanang

Sebetsa litsope tse tšoanang ka mofuta oona:

- ✓ Hlahla hlahla "sustainable jewelry" (e ne e seke "eco-friendly jewelry" le "green products")
- ✓ Seba ka mofuta oona baahlopha ba hau

### Ho Baetsi Le Letsatsi

Hlahla le tšepo ea ho baithoa hore agents ba fihla diketso tsa hau:

- "Re re baitholela ba bangata ba ba tšepo ea kalimanyetso"
- "Baahlopha ba rona ba ba tsamaea le design e modern"
- "Re re startup e fetang, ka thusa ho ba le litšomo tse fanaeng"

## Ho Baetsi Le Ho Baithoa Theme Builder

Skill ea Site Specification e fetang ka **Theme Builder onboarding flow**. Ha ufeletse onboarding, site_brief ea hau e tla ba seke ka mofuta oona o re.

U ka ba le ho baithoa Site Specification ka tsela e fetang ha u batla:

- Ho baqale specification ea hau haholo-holo
- Ho hloboha site brief ea hau ha u site e fetoha
- Ho baqale specification e le fetang ha u qala Theme Builder

## Ho Baetsi Le Ho Hloboha (Troubleshooting)

**Site_brief ea ka e seba ho sebelisoa**
- Re ke re tseba hore agent e na le access ea memory?
- Hlahla agent ho "recall my site brief"
- Hlahla hore memory e fetang ka setso sa hau

**Ke batla ka ho ba ntlha le site\_brief ya ntlha:**
- Ntshoa le agent: "Ntshoa site brief ya me le ntsha"
- Le sengwe, ntshoa Site Specification fela.

**Le agent a tlhoka boithuti tse di ne di fetoga le le ntse le le site\_brief ya me:**
- Ntshoa le agent: "Ntshoa site brief ya me"
- Ntshoa site\_brief ha e fetoga, ha e ntse le.
- Ntshoa boithuti ba ntlha mo tseleng tsa o batlang (context) mo boithakeng jwa o buang.

## Le fa go na le setshwantsho sa Site Specification:

1. **Ntshoa Theme Builder**: Fetola theme e ntsha e e fetoga le site\_brief ya gago
2. **Ntshoa Design**: Ntshoa kakaretso ea Skill ea Design System Aesthetics ho le mongolo oa ho ba le litsela tse di fapaneng tsa design
3. **Ntshoa Content**: Ntshoa boithuti ba ntlha mo tseleng tsa ho ba le setshwantsho sa content (content structure recommendations)
4. **Ntshoa Features**: Ntshoa features tse di fetoga le lipuo tsa gago tsa business
