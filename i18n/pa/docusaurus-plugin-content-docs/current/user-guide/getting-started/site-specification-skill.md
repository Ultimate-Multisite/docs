---
title: ਸਾਈਟ ਸਪੈਸੀਫਿਕੇਸ਼ਨ ਹੁਨਰ
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Site Specification Skill {#site-specification-skill}

**Site Specification skill** ek vyavasthit tareeka hai jisse aap apni site ke maqsad, audience, aur brand ki pehchaan (identity) ko capture karte hain. Yeh jaankari aapki **site_brief** memory mein store ki jaati hai, jisko agents alag-alag sessions mein istemaal karte hain taaki hamesha ek jaisi, sandarbh (context) samajh kar madad de saken.

## Site Specification kya hai? {#what-is-site-specification}

Site Specification woh prakriya hai jismein in cheezon ko document kiya jaata hai:

- **Site purpose**: Aapki site kya karti hai aur kyun maujood hai
- **Target audience**: Aapki site par kaun aata hai aur unhe kya zaroorat hai
- **Brand identity**: Aapke rang, andaaz (tone), aur visual style
- **Business goals**: Aapki site ke liye safalta kaisi dikhti hai
- **Content structure**: Aapki site kis tarah se organized hai

Yeh specification aapki **site_brief** ban jaati hai, ek hamesha rehne wali memory jisko agents aapki site ka context samajhne ke liye istemaal karte hain.

## Site Specification kyun istemaal karein? {#why-use-site-specification}

### Sessions mein consistency {#consistency-across-sessions}

site_brief ke bina, aapko har baar jab aap naya session shuru karenge, toh apni site ka maqsad dobara samjhana padega. site_brief ke saath, agents turant samajh jaate hain:

- Aapki site ke maqsad aur audience
- Aapke brand ke rang aur andaaz
- Aapki content structure
- Aapke business objectives

### Behtar recommendations {#better-recommendations}

Agents aapki site_brief ka istemaal karke:

- Aapki site ke maqsad se mel khaate features suggest karte hain
- Aise content structures recommend karte hain jo aapke goals se match karte hain
- Aapke brand ke hisaab se design propose karte hain
- Aise features suggest karne se bachate hain jo compatible na hon

### Tez onboarding {#faster-onboarding}

Naye agents (ya naye sessions mein agents) saaf karne waale sawal poochne ke bajaye, aapki site_brief padh kar jaldi se kaam karna seekh jaate hain.

## Site Specification shuru karna {#initiating-site-specification}

### Theme Builder Onboarding ke dauran {#during-theme-builder-onboarding}

Site Specification skill **Theme Builder onboarding flow** ke dauran automatically shuru ho jaati hai. Setup Assistant agent sawal poochta hai aur aapki site_brief banata hai.

### Manual Initiation {#manual-initiation}

Aap kisi bhi samay Site Specification shuru kar sakte hain:

```
"Let's define my site specification"
```

ya

```
"Help me create a site brief"
```

## The Site Specification Process {#the-site-specification-process}

### Step 1: Site Purpose {#step-1-site-purpose}

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

Aap ek category select kar sakte hain ya apna maqsad bata sakte hain.

### Step 2: Target Audience {#step-2-target-audience}

```
Who is your primary audience?
- Consumers / general public
- Business professionals
- Developers / technical users
- Students / educators
- Other: [describe]

What are their main needs?
```

### Step 3: Brand Identity {#step-3-brand-identity}

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

### Step 4: Business Goals {#step-4-business-goals}

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

### Step 5: Content Structure {#step-5-content-structure}

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

Site Specification poora karne ke baad, aapki jaankari **site_brief** ke roop mein aapki agent memory mein store ho jaati hai. Yeh ek structured record hai jismein yeh cheezein hain:

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

Agent aapki store specification dikhayega.

### Apni site_brief update karna {#update-your-sitebrief}

Agar aapki site badalti hai, toh aap ise update kar sakte hain:

```
"Update my site brief: we're now targeting B2B customers"
```

ya

```
"Refresh my site specification"
```

Yeh aapki maujooda jaankari ko starting point maan kar Site Specification skill ko dobara chalayega.

## Agents site_brief ka istemaal kaise karte hain {#how-agents-use-sitebrief}

### Design Recommendations {#design-recommendations}

Jab aap design mein badlav ke liye poochte hain, toh agents aapki site_brief ka reference lete hain:

```
You: "Redesign my homepage"
Agent: "Based on your site brief, you're targeting women aged 25-45
with a warm, artisanal tone. I'll create a design that emphasizes
your handmade jewelry and sustainable values."
```

### Feature Suggestions {#feature-suggestions}

Agents aapke goals ke hisaab se features suggest karte hain:

```
You: "What features should I add?"
Agent: "For an e-commerce store focused on customer loyalty,
I'd recommend: loyalty program, customer reviews, email newsletter,
and product recommendations."
```

### Content Structure {#content-structure}

Agents aapki structure ke aadhar par content organization propose karte hain:

```
You: "How should I organize my blog?"
Agent: "Since you use a product catalog with blog, I'd suggest
organizing posts by product category and creating 'styling guides'
that showcase multiple products together."
```

## Best Practices {#best-practices}

### Specific rahein {#be-specific}

"general audience" ke bajaye, apne asli audience ka varnan karein:

- ✓ "Women aged 25-45, interested in sustainable fashion"
- ✗ "Everyone"

### Niyamit roop se update karein {#update-regularly}

Jaise-jaise aapki site badalti hai, apni site_brief update karte rahein:

- Jab aap naye audience ki taraf badalte hain
- Jab aap nayi product lines add karte hain
- Jab aapki brand identity badalti hai
- Jab aapke business goals badalte hain

### Consistent terminology istemaal karein {#use-consistent-terminology}

Sessions mein same terms ka istemaal karein:

- ✓ Hamesha "sustainable jewelry" kahein (na ki "eco-friendly jewelry" aur "green products")
- ✓ Apne audience ko hamesha ek hi tarah se refer karein

### Context shamil karein {#include-context}

Aisi background jaankari dein jo agents ko aapke decisions samajhne mein madad kare:

- "We're targeting professionals who value quality over price"
- "Our audience is tech-savvy and expects modern design"
- "We're a bootstrapped startup, so we need cost-effective solutions"

## Theme Builder Onboarding se sambandh {#relationship-to-theme-builder-onboarding}

Site Specification skill **Theme Builder onboarding flow** mein integrate hai. Jab aap onboarding poora karte hain, toh aapki di gayi jaankari se aapki site_brief automatically ban jaati hai.

Agar aap chahte hain toh aap Site Specification ko alag se bhi chala sakte hain:

- Initial setup ke baad apni specification ko refine karne ke liye
- Jaise-jaise aapki site badalti hai, apni site brief update karne ke liye
- Theme Builder shuru karne se pehle ek detailed specification banane ke liye

## Troubleshooting {#troubleshooting}

**Mera site_brief istemaal nahi ho raha**
- Confirm karein ki agent ke paas memory access hai
- Agent se poochiye "recall my site brief"
- Check karein ki memory aapki settings mein enabled hai

**Mujhe naye site_brief se shuru karna hai**
- Agent se poochiye: "Clear my site brief and start fresh"
- Phir Site Specification dobara chalaein

**Agent aise recommendations de raha hai jo mere site_brief se match nahi karte**
- Agent se poochiye "review my site brief"
- Agar yeh purana hai toh apni site_brief update karein
- Apne requests mein additional context dein

## Next Steps {#next-steps}

Apni site specification define karne ke baad:

1. **Use Theme Builder**: Apni site_brief ke aadhar par ek custom theme banayein
2. **Refine Design**: Detailed design work ke liye Design System Aesthetics skill ka istemaal karein
3. **Plan Content**: Content structure recommendations ke liye agents se poochiye
4. **Build Features**: Apne business goals se mel khaate features ki maang karein
