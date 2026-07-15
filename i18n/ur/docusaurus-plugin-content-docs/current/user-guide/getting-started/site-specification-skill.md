---
title: سائٹ کی تفصیلات کا ہنر
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Site Specification Skill

**Site Specification skill** ek qaim aur mukammal tareeqa hai jiske zariye aap apni website ke maqsad (goals), audience, aur brand ki pehchaan (identity) ko qaid karte hain. Yeh maloomat aapki **site_brief** memory mein store ki jaati hain, jisko agents sessions ke dauran istemal karte hain taa-ke woh hamesha ek jaisa aur context-aware (mauzu par mabni) muawza de saken.

## Site Specification kya hai? {#what-is-site-specification}

Site Specification woh amal hai jismein in cheezon ko document kiya jata hai:

- **Site purpose**: Aapki site kya karti hai aur kyun maujood hai
- **Target audience**: Aapki site par kaun aata hai aur usay kya zaroorat hai
- **Brand identity**: Aapke rang, lehja (tone), aur visual style
- **Business goals**: Aapki site ke liye kamyabi kaisi dikhti hai
- **Content structure**: Aapki site ka tanzeem (organization) kaisa hai

Yeh specification aapki **site_brief** ban jaati hai, ek mustaqil memory jisko agents aapki site ke context ko samajhne ke liye istemal karte hain.

## Site Specification kyun istemal karein? {#why-use-site-specification}

### Sessions mein consistency (Musawwaton ka qayam rehna) {#consistency-across-sessions}

Site_brief ke baghair, aapko har naye session mein apni site ka maqsad dobara samjhana padega. Iske saath, agents foran samajh jaate hain:

- Aapki site ke maqsad aur audience
- Aapke brand ke rang aur lehje
- Aapki content structure
- Aapke business objectives

### Behtar recommendations {#better-recommendations}

Agents aapki site_brief ka istemal karte hain:

- Aise features suggest karne ke liye jo aapki site ke maqsad se milte hon
- Aise content structures recommend karne ke liye jo aapke goals se match karte hon
- Aise designs pesh karne ke liye jo aapke brand ke mutabiq hon
- Aise features suggest karne se bachne ke liye jo milnay ke qabil na hon

### Tez onboarding {#faster-onboarding}

Naye agents (ya naye sessions mein agents) sawalat poochne ke bajaye aapki site_brief ko padh kar jald hi kaam ke ho jaate hain.

## Site Specification shuru karna {#initiating-site-specification}

### Theme Builder Onboarding ke dauran {#during-theme-builder-onboarding}

Site Specification skill **Theme Builder onboarding flow** ke dauran khud-ba-khud shuru ho jaati hai. Setup Assistant agent sawalat poochta hai aur aapki site_brief banata hai.

### Manual Initiation (Haath se shuru karna) {#manual-initiation}

Aap kisi bhi waqt Site Specification shuru kar sakte hain:

```
"Let's define my site specification"
```

ya

```
"Help me create a site brief"
```

## The Site Specification Process {#the-site-specification-process}

### Step 1: Site Purpose (Site ka maqsad) {#step-1-site-purpose}

Agent poochta hai:

```
What is your site's primary purpose?
- E-commerce store
- Blog or content site
- Portfolio or showcase
- SaaS application
- Community or forum
- Other: [describe]
```

Aap koi category select kar sakte hain ya apna maqsad bayan kar sakte hain.

### Step 2: Target Audience (Nishana audience) {#step-2-target-audience}

```
Who is your primary audience?
- Consumers / general public
- Business professionals
- Developers / technical users
- Students / educators
- Other: [describe]

What are their main needs?
```

### Step 3: Brand Identity (Brand ki pehchaan) {#step-3-brand-identity}

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

### Step 4: Business Goals (Business ke maqsad) {#step-4-business-goals}

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

### Step 5: Content Structure (Content ka tanzeem) {#step-5-content-structure}

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

## Aapki site_brief Memory {#your-sitebrief-memory}

Site Specification mukammal karne ke baad, aapki maloomat **site_brief** ke taur par aapki agent memory mein store ho jaati hain. Yeh ek structured record hai jismein yeh cheezein shamil hain:

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

## site_brief dekhna aur update karna {#viewing-and-updating-your-sitebrief}

### Apni site_brief dekhna {#view-your-sitebrief}

Agent se poochiye:

```
"Show me my site brief"
```

ya

```
"What do you know about my site?"
```

Agent aapki store specification dikha dega.

### Apni site_brief update karna {#update-your-sitebrief}

Agar aapki site mein koi tabdeeli aati hai, toh aap ise update kar sakte hain:

```
"Update my site brief: we're now targeting B2B customers"
```

ya

```
"Refresh my site specification"
```

Yeh aapki maujooda maloomat ko shuruati point bana kar Site Specification skill ko dobara run karega.

## Agents site_brief ka istemal kaise karte hain {#how-agents-use-sitebrief}

### Design Recommendations (Design ke liye mashware) {#design-recommendations}

Jab aap design mein tabdeeli ke liye kehte hain, toh agents aapki site_brief ko dekhte hain:

```
You: "Redesign my homepage"
Agent: "Based on your site brief, you're targeting women aged 25-45
with a warm, artisanal tone. I'll create a design that emphasizes
your handmade jewelry and sustainable values."
```

### Feature Suggestions (Features ke liye mashware) {#feature-suggestions}

Agents aapke goals ke mutabiq features suggest karte hain:

```
You: "What features should I add?"
Agent: "For an e-commerce store focused on customer loyalty,
I'd recommend: loyalty program, customer reviews, email newsletter,
and product recommendations."
```

### Content Structure (Content ka tanzeem) {#content-structure}

Agents aapki structure ki bunyad par content ki arrangement ka mashwara dete hain:

```
You: "How should I organize my blog?"
Agent: "Since you use a product catalog with blog, I'd suggest
organizing posts by product category and creating 'styling guides'
that showcase multiple products together."
```

## Best Practices (Behtareen tareeqe) {#best-practices}

### Khaas hon (Specific) {#be-specific}

"General audience" ke bajaye, apni asal audience bayan karein:

- ✓ "Women aged 25-45, interested in sustainable fashion"
- ✗ "Everyone"

### Waqt-waqay update karein (Update Regularly) {#update-regularly}

Jaisa ki aapki site badalti hai, waise hi apni site_brief ko update karein:

- Jab aap kisi naye audience ki taraf jaate hain
- Jab aap nayi product lines add karte hain
- Jab aapki brand identity badalti hai
- Jab aapke business goals badalte hain

### Consistent terminology istemal karein {#use-consistent-terminology}

Sessions mein same terms ka istemal karein:

- ✓ Hamesha "sustainable jewelry" kahte rahein (na ke "eco-friendly jewelry" aur "green products")
- ✓ Apni audience ko hamesha ek hi tareeqe se refer karein

### Context shamil karein {#include-context}

Aisi background maloomat dein jo agents ko aapke faislon ko samajhne mein madad kare:

- "We're targeting professionals who value quality over price"
- "Our audience is tech-savvy and expects modern design"
- "We're a bootstrapped startup, so we need cost-effective solutions"

## Theme Builder Onboarding se talluq {#relationship-to-theme-builder-onboarding}

Site Specification skill **Theme Builder onboarding flow** mein shamil hai. Jab aap onboarding mukammal karte hain, toh aapki di gayi maloomat se aapki site_brief khud-ba-khud ban jaati hai.

Agar aap chahein toh aap Site Specification ko akele bhi run kar sakte hain:

- Apni specification ko initial setup ke baad behtar banana
- Jaise jaise aapki site badalti hai, site brief ko update karna
- Theme Builder shuru karne se pehle ek detailed specification banana

## Troubleshooting (Masail ka hal) {#troubleshooting}

**Mera site_brief istemal nahi ho raha**
- Confirm karein ke agent ko memory tak rasai (access) hai
- Agent se poochiye ke "recall my site brief"
- Check karein ke memory aapki settings mein enable hai

**Mujhe naye site_brief se shuru karna hai**
- Agent se poochiye: "Clear my site brief and start fresh"
- Phir Site Specification dobara run karein

**Agent aise recommendations de raha hai jo mere site_brief se match nahi karte**
- Agent se poochiye ke "review my site brief"
- Agar yeh purana ho toh apni site_brief update karein
- Apni requests mein mazeed context dein

## Next Steps (Agle qadmat) {#next-steps}

Apni site specification define karne ke baad:

1. **Use Theme Builder**: Apni site_brief ki bunyad par ek custom theme banayein
2. **Refine Design**: Detailed design work ke liye Design System Aesthetics skill ka istemal karein
3. **Plan Content**: Content structure ke mashware ke liye agents se poochiye
4. **Build Features**: Apne business goals se milte hue features ki darkhwast karein
