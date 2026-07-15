---
title: ಸೈಟ್ ಸ್ಪೆಸಿಫಿಕೇಶನ್ ಕೌಶಲ್ಯ
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Site Specification Skill

**Site Specification skill** ಎನ್ನುವುದು ನಿಮ್ಮ ಸೈಟ್‌ನ ಗುರಿಗಳು, ಪ್ರೇಕ್ಷಕರು ಮತ್ತು ಬ್ರ್ಯಾಂಡ್ ಗುರುತನ್ನು ದಾಖಲಿಸಲು ಇರುವ ಒಂದು ರಚನಾತ್ಮಕ ವಿಧಾನ. ಈ ಮಾಹಿತಿಯನ್ನು ನಿಮ್ಮ **site_brief** ನೆನಪಿನಲ್ಲಿ (memory) ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ. ಏಜೆಂಟ್‌ಗಳು ಈ site_brief ಅನ್ನು ವಿವಿಧ ಸೆಷನ್‌ಗಳಲ್ಲಿ ಉಲ್ಲೇಖಿಸುತ್ತವೆ, ಇದರಿಂದ ಸ್ಥಿರವಾದ ಮತ್ತು ಸಂದರ್ಭಕ್ಕೆ ತಕ್ಕ ಸಹಾಯ ಸಿಗುತ್ತದೆ.

## Site Specification ಎಂದರೇನು? {#what-is-site-specification}

Site Specification ಎಂದರೆ ಈ ಕೆಳಗಿನ ಅಂಶಗಳನ್ನು ದಾಖಲಿಸುವ ಪ್ರಕ್ರಿಯೆ:

- **ಸೈಟ್ ಉದ್ದೇಶ (Site purpose)**: ನಿಮ್ಮ ಸೈಟ್ ಏನು ಮಾಡುತ್ತದೆ ಮತ್ತು ಅದು ಏಕೆ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ.
- **ಗುರಿ ಪ್ರೇಕ್ಷಕರು (Target audience)**: ಯಾರು ನಿಮ್ಮ ಸೈಟ್‌ಗೆ ಭೇಟಿ ನೀಡುತ್ತಾರೆ ಮತ್ತು ಅವರಿಗೆ ಏನು ಬೇಕು.
- **ಬ್ರ್ಯಾಂಡ್ ಗುರುತು (Brand identity)**: ನಿಮ್ಮ ಬಣ್ಣಗಳು, ಧ್ವನಿ (tone) ಮತ್ತು ದೃಶ್ಯ ಶೈಲಿ.
- **ವ್ಯಾಪಾರ ಗುರಿಗಳು (Business goals)**: ನಿಮ್ಮ ಸೈಟ್‌ಗೆ ಯಶಸ್ಸು ಎಂದರೆ ಏನು.
- **ಕಂಟೆಂಟ್ ರಚನೆ (Content structure)**: ನಿಮ್ಮ ಸೈಟ್ ಹೇಗೆ ಸಂಘಟಿತವಾಗಿದೆ.

ಈ ವಿವರಣೆಯು ನಿಮ್ಮ **site_brief** ಆಗುತ್ತದೆ. ಇದು ಒಂದು ಶಾಶ್ವತ ನೆನಪು (persistent memory) ಆಗಿದ್ದು, ನಿಮ್ಮ ಸೈಟ್‌ನ ಸಂದರ್ಭವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಏಜೆಂಟ್‌ಗಳು ಬಳಸುತ್ತವೆ.

## Site Specification ಅನ್ನು ಏಕೆ ಬಳಸಬೇಕು? {#why-use-site-specification}

### ಸೆಷನ್‌ಗಳಾದ್ಯಂತ ಸ್ಥಿರತೆ (Consistency Across Sessions) {#consistency-across-sessions}

site_brief ಇಲ್ಲದಿದ್ದರೆ, ನೀವು ಪ್ರತಿ ಹೊಸ ಸೆಷನ್ ಪ್ರಾರಂಭಿಸಿದಾಗಲೂ ನಿಮ್ಮ ಸೈಟ್‌ನ ಉದ್ದೇಶವನ್ನು ಮರು-ವಿವರಿಸಬೇಕಾಗುತ್ತದೆ. site_brief ಇದ್ದರೆ, ಏಜೆಂಟ್‌ಗಳು ತಕ್ಷಣವೇ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುತ್ತವೆ:

- ನಿಮ್ಮ ಸೈಟ್‌ನ ಗುರಿಗಳು ಮತ್ತು ಪ್ರೇಕ್ಷಕರು
- ನಿಮ್ಮ ಬ್ರ್ಯಾಂಡ್ ಬಣ್ಣಗಳು ಮತ್ತು ಧ್ವನಿ
- ನಿಮ್ಮ ಕಂಟೆಂಟ್ ರಚನೆ
- ನಿಮ್ಮ ವ್ಯಾಪಾರ ಉದ್ದೇಶಗಳು

### ಉತ್ತಮ ಶಿಫಾರಸುಗಳು (Better Recommendations) {#better-recommendations}

ಏಜೆಂಟ್‌ಗಳು ನಿಮ್ಮ site_brief ಅನ್ನು ಬಳಸಿಕೊಂಡು:

- ನಿಮ್ಮ ಸೈಟ್ ಉದ್ದೇಶಕ್ಕೆ ಹೊಂದಿಕೆಯಾಗುವ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು (features) ಸೂಚಿಸುತ್ತವೆ.
- ನಿಮ್ಮ ಗುರಿಗಳಿಗೆ ಹೊಂದಿಕೆಯಾಗುವ ಕಂಟೆಂಟ್ ರಚನೆಗಳನ್ನು ಶಿಫಾರಸು ಮಾಡುತ್ತವೆ.
- ನಿಮ್ಮ ಬ್ರ್ಯಾಂಡ್‌ಗೆ ಅನುಗುಣವಾದ ವಿನ್ಯಾಸಗಳನ್ನು ಪ್ರಸ್ತಾಪಿಸುತ್ತವೆ.
- ಹೊಂದಿಕೆಯಾಗದ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ಸೂಚಿಸುವುದನ್ನು ತಪ್ಪಿಸುತ್ತವೆ.

### ವೇಗದ ಆನ್‌ಬೋರ್ಡಿಂಗ್ (Faster Onboarding) {#faster-onboarding}

ಹೊಸ ಏಜೆಂಟ್‌ಗಳು (ಅಥವಾ ಹೊಸ ಸೆಷನ್‌ಗಳಲ್ಲಿರುವ ಏಜೆಂಟ್‌ಗಳು) ಸ್ಪಷ್ಟೀಕರಣ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳುವ ಬದಲು ನಿಮ್ಮ site_brief ಅನ್ನು ಓದಿ ಬೇಗನೆ ಕೆಲಸ ಮಾಡಲು ಕಲಿಯಬಹುದು.

## Site Specification ಅನ್ನು ಪ್ರಾರಂಭಿಸುವುದು {#initiating-site-specification}

### Theme Builder ಆನ್‌ಬೋರ್ಡಿಂಗ್ ಸಮಯದಲ್ಲಿ {#during-theme-builder-onboarding}

Site Specification skill ಅನ್ನು **Theme Builder onboarding flow** ಸಮಯದಲ್ಲಿ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಪ್ರಾರಂಭಿಸಲಾಗುತ್ತದೆ. Setup Assistant ಏಜೆಂಟ್ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ ನಿಮ್ಮ site_brief ಅನ್ನು ನಿರ್ಮಿಸುತ್ತದೆ.

### ಕೈಯಾರೆ ಪ್ರಾರಂಭಿಸುವುದು (Manual Initiation) {#manual-initiation}

ನೀವು ಯಾವುದೇ ಸಮಯದಲ್ಲಿ Site Specification ಅನ್ನು ಪ್ರಾರಂಭಿಸಬಹುದು:

```
"Let's define my site specification"
```

ಅಥವಾ

```
"Help me create a site brief"
```

## Site Specification ಪ್ರಕ್ರಿಯೆ {#the-site-specification-process}

### ಹಂತ 1: ಸೈಟ್ ಉದ್ದೇಶ (Site Purpose) {#step-1-site-purpose}

ಏಜೆಂಟ್ ಕೇಳುತ್ತದೆ:

```
What is your site's primary purpose?
- E-commerce store
- Blog or content site
- Portfolio or showcase
- SaaS application
- Community or forum
- Other: [describe]
```

ನೀವು ಒಂದು ವರ್ಗವನ್ನು ಆಯ್ಕೆ ಮಾಡಬಹುದು ಅಥವಾ ನಿಮ್ಮದೇ ಆದ ಉದ್ದೇಶವನ್ನು ವಿವರಿಸಬಹುದು.

### ಹಂತ 2: ಗುರಿ ಪ್ರೇಕ್ಷಕರು (Target Audience) {#step-2-target-audience}

```
Who is your primary audience?
- Consumers / general public
- Business professionals
- Developers / technical users
- Students / educators
- Other: [describe]

What are their main needs?
```

### ಹಂತ 3: ಬ್ರ್ಯಾಂಡ್ ಗುರುತು (Brand Identity) {#step-3-brand-identity}

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

### ಹಂತ 4: ವ್ಯಾಪಾರ ಗುರಿಗಳು (Business Goals) {#step-4-business-goals}

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

### ಹಂತ 5: ಕಂಟೆಂಟ್ ರಚನೆ (Content Structure) {#step-5-content-structure}

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

## ನಿಮ್ಮ site_brief ನೆನಪು (Your site_brief Memory) {#your-sitebrief-memory}

Site Specification ಅನ್ನು ಪೂರ್ಣಗೊಳಿಸಿದ ನಂತರ, ನಿಮ್ಮ ಮಾಹಿತಿಯನ್ನು ನಿಮ್ಮ ಏಜೆಂಟ್ ನೆನಪಿನಲ್ಲಿ **site_brief** ಆಗಿ ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ. ಇದು ಈ ಕೆಳಗಿನ ರಚನಾತ್ಮಕ ದಾಖಲೆಯನ್ನು ಒಳಗೊಂಡಿದೆ:

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

## ನಿಮ್ಮ site_brief ಅನ್ನು ನೋಡುವುದು ಮತ್ತು ಅಪ್ಡೇಟ್ ಮಾಡುವುದು {#viewing-and-updating-your-sitebrief}

### ನಿಮ್ಮ site_brief ಅನ್ನು ನೋಡುವುದು {#view-your-sitebrief}

ಏಜೆಂಟ್‌ಗೆ ಕೇಳಿ:

```
"Show me my site brief"
```

ಅಥವಾ

```
"What do you know about my site?"
```

ಏಜೆಂಟ್ ನಿಮ್ಮ ಸಂಗ್ರಹಿಸಿದ ಸ್ಪೆಸಿಫಿಕೇಶನ್ ಅನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತದೆ.

### ನಿಮ್ಮ site_brief ಅನ್ನು ಅಪ್ಡೇಟ್ ಮಾಡುವುದು {#update-your-sitebrief}

ನಿಮ್ಮ ಸೈಟ್ ಬದಲಾದಾಗ, ನೀವು ಅದನ್ನು ಅಪ್ಡೇಟ್ ಮಾಡಬಹುದು:

```
"Update my site brief: we're now targeting B2B customers"
```

ಅಥವಾ

```
"Refresh my site specification"
```

ಇದು ನಿಮ್ಮ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಮಾಹಿತಿಯನ್ನು ಆರಂಭಿಕ ಬಿಂದುವಾಗಿ ಬಳಸಿಕೊಂಡು Site Specification skill ಅನ್ನು ಮರು-ಚಲಾಯಿಸುತ್ತದೆ.

## ಏಜೆಂಟ್‌ಗಳು site_brief ಅನ್ನು ಹೇಗೆ ಬಳಸುತ್ತವೆ {#how-agents-use-sitebrief}

### ವಿನ್ಯಾಸ ಶಿಫಾರಸುಗಳು (Design Recommendations) {#design-recommendations}

ನೀವು ವಿನ್ಯಾಸ ಬದಲಾವಣೆಗಳನ್ನು ಕೇಳಿದಾಗ, ಏಜೆಂಟ್‌ಗಳು ನಿಮ್ಮ site_brief ಅನ್ನು ಉಲ್ಲೇಖಿಸುತ್ತವೆ:

```
You: "Redesign my homepage"
Agent: "Based on your site brief, you're targeting women aged 25-45
with a warm, artisanal tone. I'll create a design that emphasizes
your handmade jewelry and sustainable values."
```

### ವೈಶಿಷ್ಟ್ಯಗಳ ಸಲಹೆಗಳು (Feature Suggestions) {#feature-suggestions}

ಏಜೆಂಟ್‌ಗಳು ನಿಮ್ಮ ಗುರಿಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ಸೂಚಿಸುತ್ತವೆ:

```
You: "What features should I add?"
Agent: "For an e-commerce store focused on customer loyalty,
I'd recommend: loyalty program, customer reviews, email newsletter,
and product recommendations."
```

### ಕಂಟೆಂಟ್ ರಚನೆ (Content Structure) {#content-structure}

ಏಜೆಂಟ್‌ಗಳು ನಿಮ್ಮ ರಚನೆಯ ಆಧಾರದ ಮೇಲೆ ಕಂಟೆಂಟ್ ಸಂಘಟನೆಗಳನ್ನು ಪ್ರಸ್ತಾಪಿಸುತ್ತವೆ:

```
You: "How should I organize my blog?"
Agent: "Since you use a product catalog with blog, I'd suggest
organizing posts by product category and creating 'styling guides'
that showcase multiple products together."
```

## ಉತ್ತಮ ಅಭ್ಯಾಸಗಳು (Best Practices) {#best-practices}

### ನಿರ್ದಿಷ್ಟವಾಗಿರಿ (Be Specific) {#be-specific}

"ಸಾಮಾನ್ಯ ಪ್ರೇಕ್ಷಕರು" ಬದಲಿಗೆ, ನಿಮ್ಮ ನಿಜವಾದ ಪ್ರೇಕ್ಷಕರನ್ನು ವಿವರಿಸಿ:

- ✓ "Women aged 25-45, interested in sustainable fashion"
- ✗ "Everyone"

### ನಿಯಮಿತವಾಗಿ ಅಪ್ಡೇಟ್ ಮಾಡಿ (Update Regularly) {#update-regularly}

ನಿಮ್ಮ ಸೈಟ್ ವಿಕಸನಗೊಳ್ಳುತ್ತಿದ್ದಂತೆ, ನಿಮ್ಮ site_brief ಅನ್ನು ಅಪ್ಡೇಟ್ ಮಾಡಿ:

- ನೀವು ಹೊಸ ಪ್ರೇಕ್ಷಕ ವರ್ಗಕ್ಕೆ ಬದಲಾದಾಗ
- ನೀವು ಹೊಸ ಉತ್ಪನ್ನ ಲೈನ್‌ಗಳನ್ನು ಸೇರಿಸಿದಾಗ
- ನಿಮ್ಮ ಬ್ರ್ಯಾಂಡ್ ಗುರುತು ಬದಲಾದಾಗ
- ನಿಮ್ಮ ವ್ಯಾಪಾರ ಗುರಿಗಳು ಬದಲಾದಾಗ

### ಸ್ಥಿರವಾದ ಪದಜಾಲವನ್ನು ಬಳಸಿ (Use Consistent Terminology) {#use-consistent-terminology}

ಸೆಷನ್‌ಗಳಾದ್ಯಂತ ಒಂದೇ ಪದಗಳನ್ನು ಬಳಸಿ:

- ✓ ಯಾವಾಗಲೂ "sustainable jewelry" (ಅಥವಾ "eco-friendly jewelry" ಮತ್ತು "green products" ಎಂದು ಹೇಳಬೇಡಿ)
- ✓ ನಿಮ್ಮ ಪ್ರೇಕ್ಷಕರನ್ನು ಸ್ಥಿರವಾಗಿ ಅದೇ ರೀತಿಯಲ್ಲಿ ಉಲ್ಲೇಖಿಸಿ

### ಸಂದರ್ಭವನ್ನು ಸೇರಿಸಿ (Include Context) {#include-context}

ಏಜೆಂಟ್‌ಗಳು ನಿಮ್ಮ ನಿರ್ಧಾರಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುವ ಹಿನ್ನೆಲೆಯನ್ನು ನೀಡಿ:

- "ನಾವು ಬೆಲೆಗಿಂತ ಗುಣಮಟ್ಟಕ್ಕೆ ಮೌಲ್ಯ ನೀಡುವ ವೃತ್ತಿಪರರನ್ನು ಗುರಿಯಾಗಿಸಿಕೊಂಡಿದ್ದೇವೆ"
- "ನಮ್ಮ ಪ್ರೇಕ್ಷಕರು ತಂತ್ರಜ್ಞರ ಬಗ್ಗೆ ಜ್ಞಾನ ಹೊಂದಿದ್ದಾರೆ ಮತ್ತು ಆಧುನಿಕ ವಿನ್ಯಾಸವನ್ನು ನಿರೀಕ್ಷಿಸುತ್ತಾರೆ"
- "ನಾವು bootstrapped startup ಆಗಿದ್ದೇವೆ, ಆದ್ದರಿಂದ ನಮಗೆ ಕಡಿಮೆ ವೆಚ್ಚದ ಪರಿಹಾರಗಳು ಬೇಕು"

## Theme Builder Onboarding ಗೆ ಸಂಬಂಧ {#relationship-to-theme-builder-onboarding}

Site Specification skill ಅನ್ನು **Theme Builder onboarding flow** ನಲ್ಲಿ ಅಳವಡಿಸಲಾಗಿದೆ. ನೀವು ಆನ್‌ಬೋರ್ಡಿಂಗ್ ಪೂರ್ಣಗೊಳಿಸಿದಾಗ, ನೀವು ಒದಗಿಸಿದ ಮಾಹಿತಿಯೊಂದಿಗೆ ನಿಮ್ಮ site_brief ಸ್ವಯಂಚಾಲಿತವಾಗಿ ರಚನೆಯಾಗುತ್ತದೆ.

ನೀವು ಬಯಸಿದರೆ, ನೀವು Site Specification ಅನ್ನು ಸ್ವತಂತ್ರವಾಗಿ ಚಲಾಯಿಸಬಹುದು:

- ಆರಂಭಿಕ ಸೆಟಪ್ ನಂತರ ನಿಮ್ಮ ಸ್ಪೆಸಿಫಿಕೇಶನ್ ಅನ್ನು ಪರಿಷ್ಕರಿಸಲು
- ನಿಮ್ಮ ಸೈಟ್ ವಿಕಸನಗೊಳ್ಳುತ್ತಿದ್ದಂತೆ ನಿಮ್ಮ site brief ಅನ್ನು ಅಪ್ಡೇಟ್ ಮಾಡಲು
- Theme Builder ಪ್ರಾರಂಭಿಸುವ ಮೊದಲು ವಿವರವಾದ ಸ್ಪೆಸಿಫಿಕೇಶನ್ ರಚಿಸಲು

## ಸಮಸ್ಯೆ ಪರಿಹಾರ (Troubleshooting) {#troubleshooting}

**ನನ್ನ site_brief ಬಳಸುತ್ತಿಲ್ಲ**
- ಏಜೆಂಟ್‌ಗೆ ನೆನಪಿನ ಪ್ರವೇಶ ಇದೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ
- ಏಜೆಂಟ್‌ಗೆ "recall my site brief" ಎಂದು ಕೇಳಿ
- ನಿಮ್ಮ ಸೆಟ್ಟಿಂಗ್‌ಗಳಲ್ಲಿ ನೆನಪು (memory) ಸಕ್ರಿಯಗೊಂಡಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ

**ನಾನು ಹೊಸ site_brief ನೊಂದಿಗೆ ಪ್ರಾರಂಭಿಸಲು ಬಯಸುತ್ತೇನೆ**
- ಏಜೆಂಟ್‌ಗೆ ಕೇಳಿ: "Clear my site brief and start fresh"
- ನಂತರ Site Specification ಅನ್ನು ಮತ್ತೆ ಚಲಾಯಿಸಿ

**ಏಜೆಂಟ್ ನನ್ನ site_brief ಗೆ ಹೊಂದಿಕೆಯಾಗದ ಶಿಫಾರಸುಗಳನ್ನು ಮಾಡುತ್ತಿದೆ**
- ಏಜೆಂಟ್‌ಗೆ "review my site brief" ಎಂದು ಕೇಳಿ
- ಇದು ಹಳೆಯದಾಗಿದ್ದರೆ ನಿಮ್ಮ site_brief ಅನ್ನು ಅಪ್ಡೇಟ್ ಮಾಡಿ
- ನಿಮ್ಮ ವಿನಂತಿಗಳಲ್ಲಿ ಹೆಚ್ಚುವರಿ ಸಂದರ್ಭವನ್ನು ನೀಡಿ

## ಮುಂದಿನ ಹಂತಗಳು (Next Steps) {#next-steps}

ನಿಮ್ಮ ಸೈಟ್ ಸ್ಪೆಸಿಫಿಕೇಶನ್ ಅನ್ನು ವ್ಯಾಖ್ಯಾನಿಸಿದ ನಂತರ:

1. **Theme Builder ಬಳಸಿ**: ನಿಮ್ಮ site_brief ಆಧಾರದ ಮೇಲೆ ಕಸ್ಟಮ್ ಥೀಮ್ ಅನ್ನು ರಚಿಸಿ
2. **ವಿನ್ಯಾಸವನ್ನು ಪರಿಷ್ಕರಿಸಿ**: ವಿವರವಾದ ವಿನ್ಯಾಸ ಕೆಲಸಕ್ಕಾಗಿ Design System Aesthetics skill ಬಳಸಿ
3. **ಕಂಟೆಂಟ್ ಯೋಜನೆ ಮಾಡಿ**: ಕಂಟೆಂಟ್ ರಚನೆ ಶಿಫಾರಸುಗಳಿಗಾಗಿ ಏಜೆಂಟ್‌ಗಳನ್ನು ಕೇಳಿ
4. **ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ನಿರ್ಮಿಸಿ**: ನಿಮ್ಮ ವ್ಯಾಪಾರ ಗುರಿಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ವಿನಂತಿಸಿ
