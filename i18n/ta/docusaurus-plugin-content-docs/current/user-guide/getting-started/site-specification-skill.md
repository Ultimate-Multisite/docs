---
title: வலைத்தள விவரக்குறிப்புத் திறன்
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Site Specification Skill

**Site Specification skill** என்பது உங்கள் தளத்தின் இலக்குகள், பார்வையாளர்கள் மற்றும் பிராண்ட் அடையாளத்தை (brand identity) பதிவு செய்வதற்கான ஒரு கட்டமைக்கப்பட்ட அணுகுமுறை (structured approach). இந்தத் தகவல் உங்கள் **site_brief** நினைவகத்தில் (memory) சேமிக்கப்படுகிறது. இந்த `site_brief`-ஐ ஏஜென்ட்கள் (agents) வெவ்வேறு அமர்வுகளில் (sessions) பயன்படுத்துவதன் மூலம், சீரான, சூழல் சார்ந்த உதவியை வழங்க முடியும்.

## Site Specification என்றால் என்ன?

Site Specification என்பது பின்வரும் விஷயங்களை ஆவணப்படுத்தும் செயல்முறையாகும்:

- **தளத்தின் நோக்கம் (Site purpose)**: உங்கள் தளம் என்ன செய்கிறது மற்றும் அது ஏன் இருக்கிறது.
- **இலக்கு பார்வையாளர்கள் (Target audience)**: உங்கள் தளத்திற்கு யார் வருகிறார்கள் மற்றும் அவர்களுக்கு என்ன தேவை.
- **பிராண்ட் அடையாளம் (Brand identity)**: உங்கள் வண்ணங்கள், தொனி (tone), மற்றும் காட்சி நடை (visual style).
- **வணிக இலக்குகள் (Business goals)**: உங்கள் தளத்திற்கு வெற்றி என்றால் என்னவாக இருக்கும்.
- **உள்ளடக்க அமைப்பு (Content structure)**: உங்கள் தளம் எப்படி ஒழுங்கமைக்கப்பட்டுள்ளது.

இந்த விவரங்கள் உங்கள் **site_brief** ஆக மாறுகிறது. இது ஒரு நிரந்தர நினைவகம் (persistent memory) ஆகும். உங்கள் தளத்தின் சூழலைப் புரிந்துகொள்ள ஏஜென்ட்கள் இதைப் பயன்படுத்துகின்றன.

## Site Specification-ஐ ஏன் பயன்படுத்த வேண்டும்?

### அமர்வுகளுக்கு இடையேயான நிலைத்தன்மை (Consistency Across Sessions)

`site_brief` இல்லாவிட்டால், நீங்கள் ஒவ்வொரு புதிய அமர்வைத் தொடங்கும்போதும் உங்கள் தளத்தின் நோக்கத்தை மீண்டும் விளக்க வேண்டியிருக்கும். இது இருந்தால், ஏஜென்ட்கள் உடனடியாகப் புரிந்துகொள்வார்கள்:

- உங்கள் தளத்தின் இலக்குகள் மற்றும் பார்வையாளர்கள்
- உங்கள் பிராண்ட் வண்ணங்கள் மற்றும் தொனி
- உங்கள் உள்ளடக்க அமைப்பு
- உங்கள் வணிக நோக்கங்கள்

### சிறந்த பரிந்துரைகள் (Better Recommendations)

ஏஜென்ட்கள் உங்கள் `site_brief`-ஐப் பயன்படுத்தி:

- உங்கள் தளத்தின் நோக்கத்துடன் ஒத்துப்போகும் அம்சங்களை (features) பரிந்துரைக்கின்றன.
- உங்கள் இலக்குகளுடன் பொருந்தக்கூடிய உள்ளடக்க அமைப்புகளைப் பரிந்துரைக்கின்றன.
- உங்கள் பிராண்டிற்கு ஏற்ற வடிவமைப்புகளை முன்வைக்கின்றன.
- பொருந்தாத அம்சங்களை பரிந்துரைப்பதைத் தவிர்க்கின்றன.

### விரைவான கற்றல் (Faster Onboarding)

புதிய ஏஜென்ட்கள் (அல்லது புதிய அமர்வுகளில் உள்ள ஏஜென்ட்கள்) தெளிவுபடுத்தும் கேள்விகளைக் கேட்பதற்குப் பதிலாக, உங்கள் `site_brief`-ஐப் படிப்பதன் மூலம் விரைவாகத் தயாராக முடியும்.

## Site Specification-ஐத் தொடங்குதல்

### Theme Builder Onboarding-லின் போது

Site Specification skill என்பது **Theme Builder onboarding flow**-லின் போது தானாகவே தொடங்குகிறது. Setup Assistant ஏஜென்ட் கேள்விகளைக் கேட்டு உங்கள் `site_brief`-ஐ உருவாக்கும்.

### கைகளால் தொடங்குதல் (Manual Initiation)

நீங்கள் எப்போது வேண்டுமானாலும் Site Specification-ஐத் தொடங்கலாம்:

```
"Let's define my site specification"
```

அல்லது

```
"Help me create a site brief"
```

## Site Specification செயல்முறை

### படி 1: தளத்தின் நோக்கம் (Site Purpose)

ஏஜென்ட் கேட்கும்:

```
What is your site's primary purpose?
- E-commerce store
- Blog or content site
- Portfolio or showcase
- SaaS application
- Community or forum
- Other: [describe]
```

நீங்கள் ஒரு வகையைத் தேர்ந்தெடுக்கலாம் அல்லது உங்கள் சொந்த நோக்கத்தை விவரிக்கலாம்.

### படி 2: இலக்கு பார்வையாளர்கள் (Target Audience)

```
Who is your primary audience?
- Consumers / general public
- Business professionals
- Developers / technical users
- Students / educators
- Other: [describe]

What are their main needs?
```

### படி 3: பிராண்ட் அடையாளம் (Brand Identity)

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

### படி 4: வணிக இலக்குகள் (Business Goals)

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

### படி 5: உள்ளடக்க அமைப்பு (Content Structure)

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

## உங்கள் site_brief நினைவகம்

Site Specification-ஐ முடித்த பிறகு, உங்கள் தகவல் உங்கள் ஏஜென்ட் நினைவகத்தில் **site_brief** ஆக சேமிக்கப்படுகிறது. இது பின்வருவனவற்றை உள்ளடக்கிய ஒரு கட்டமைக்கப்பட்ட பதிவாகும்:

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

## உங்கள் site_brief-ஐப் பார்ப்பதும் புதுப்பிப்பதும்

### உங்கள் site_brief-ஐப் பார்க்க

ஏஜென்ட்களிடம் கேளுங்கள்:

```
"Show me my site brief"
```

அல்லது

```
"What do you know about my site?"
```

ஏஜென்ட் நீங்கள் சேமித்த விவரத்தைக் காண்பிக்கும்.

### உங்கள் site_brief-ஐப் புதுப்பித்தல்

உங்கள் தளம் மாறினால், நீங்கள் அதை புதுப்பிக்கலாம்:

```
"Update my site brief: we're now targeting B2B customers"
```

அல்லது

```
"Refresh my site specification"
```

இது உங்கள் இருக்கும் தகவலை ஆரம்பப் புள்ளியாகப் பயன்படுத்தி Site Specification skill-ஐ மீண்டும் இயக்கும்.

## ஏஜென்ட்கள் site_brief-ஐ எப்படிப் பயன்படுத்துகின்றன

### வடிவமைப்பு பரிந்துரைகள் (Design Recommendations)

நீங்கள் வடிவமைப்பு மாற்றங்களைக் கேட்கும்போது, ஏஜென்ட்கள் உங்கள் `site_brief`-ஐப் பயன்படுத்துகின்றன:

```
You: "Redesign my homepage"
Agent: "Based on your site brief, you're targeting women aged 25-45
with a warm, artisanal tone. I'll create a design that emphasizes
your handmade jewelry and sustainable values."
```

### அம்சப் பரிந்துரைகள் (Feature Suggestions)

ஏஜென்ட்கள் உங்கள் இலக்குகளுடன் ஒத்துப்போகும் அம்சங்களைப் பரிந்துரைக்கின்றன:

```
You: "What features should I add?"
Agent: "For an e-commerce store focused on customer loyalty,
I'd recommend: loyalty program, customer reviews, email newsletter,
and product recommendations."
```

### உள்ளடக்க அமைப்பு (Content Structure)

ஏஜென்ட்கள் உங்கள் அமைப்பின் அடிப்படையில் உள்ளடக்க ஒழுங்கமைப்பை முன்வைக்கின்றன:

```
You: "How should I organize my blog?"
Agent: "Since you use a product catalog with blog, I'd suggest
organizing posts by product category and creating 'styling guides'
that showcase multiple products together."
```

## சிறந்த நடைமுறைகள் (Best Practices)

### குறிப்பிட்டதாக இருங்கள் (Be Specific)

"பொதுவான பார்வையாளர்கள்" என்பதற்குப் பதிலாக, உங்கள் உண்மையான பார்வையாளர்களை விவரிக்கவும்:

- ✓ "Women aged 25-45, interested in sustainable fashion"
- ✗ "Everyone"

### தவறாமல் புதுப்பிக்கவும் (Update Regularly)

உங்கள் தளம் வளர வளர, உங்கள் `site_brief`-ஐப் புதுப்பிக்கவும்:

- நீங்கள் புதிய பார்வையாளர்களை நோக்கி மாறும்போது (pivot)
- நீங்கள் புதிய தயாரிப்பு வரிகளைச் சேர்க்கும்போது
- உங்கள் பிராண்ட் அடையாளம் மாறும்போது
- உங்கள் வணிக இலக்குகள் மாறும்போது

### நிலையான சொற்களைப் பயன்படுத்துங்கள் (Use Consistent Terminology)

அமர்வு முழுவதும் ஒரே சொற்களைப் பயன்படுத்துங்கள்:

- ✓ எப்போதும் "sustainable jewelry" என்று சொல்லுங்கள் ( "eco-friendly jewelry" மற்றும் "green products" என்று சொல்ல வேண்டாம்)
- ✓ உங்கள் பார்வையாளர்களை எப்போதும் ஒரே விதமாக குறிப்பிடுங்கள்

### சூழலைச் சேர்க்கவும் (Include Context)

ஏஜென்ட்கள் உங்கள் முடிவுகளைப் புரிந்துகொள்ள உதவும் பின்னணி தகவலை வழங்குங்கள்:

- "விலையை விட தரத்தை மதிக்கும் தொழில் வல்லுநர்களை நாங்கள் இலக்கு வைக்கிறோம்"
- "எங்கள் பார்வையாளர்கள் தொழில்நுட்பத்தில் ஆர்வமாக உள்ளவர்கள் மற்றும் நவீன வடிவமைப்பை எதிர்பார்க்கிறார்கள்"
- "நாங்கள் ஆரம்ப மூலதனத்துடன் இயங்கும் ஸ்டார்ட்அப் என்பதால், எங்களுக்கு குறைந்த செலவிலான தீர்வுகள் தேவை"

## Theme Builder Onboarding உடன் உள்ள தொடர்பு

Site Specification skill என்பது **Theme Builder onboarding flow** உடன் ஒருங்கிணைக்கப்பட்டுள்ளது. நீங்கள் Onboarding-ஐ முடிக்கும்போது, நீங்கள் வழங்கிய தகவல்களுடன் உங்கள் `site_brief` தானாகவே உருவாக்கப்படுகிறது.

நீங்கள் விரும்பினால், Site Specification-ஐ தனித்து இயக்கவும் முடியும்:

- ஆரம்ப அமைப்பிற்குப் பிறகு உங்கள் விவரக்குறிப்பைச் செம்மைப்படுத்த
- உங்கள் தளம் வளர வளர உங்கள் `site_brief`-ஐப் புதுப்பிக்க
- Theme Builder-ஐத் தொடங்குவதற்கு முன் விரிவான விவரக்குறிப்பை உருவாக்க

## சிக்கல் தீர்க்கும் வழிகாட்டி (Troubleshooting)

**எனது site_brief பயன்படுத்தப்படவில்லை**
- ஏஜென்ட்க்கு நினைவகம் அணுகல் உள்ளதா என்பதை உறுதிப்படுத்தவும்
- ஏஜென்ட்களிடம் "recall my site brief" என்று கேட்கவும்
- உங்கள் அமைப்புகளில் நினைவகம் (memory) இயக்கப்பட்டுள்ளதா என்று சரிபார்க்கவும்

**புதிய site_brief உடன் ஆரம்பிக்க விரும்புகிறேன்**
- ஏஜென்ட்களிடம் கேளுங்கள்: "Clear my site brief and start fresh"
- பிறகு Site Specification-ஐ மீண்டும் இயக்கவும்

**ஏஜென்ட் எனது site_brief உடன் பொருந்தாத பரிந்துரைகளை வழங்குகிறது**
- ஏஜென்ட்களிடம் "review my site brief" என்று கேட்கவும்
- உங்கள் `site_brief` காலாவதியாகி இருந்தால் அதை புதுப்பிக்கவும்
- உங்கள் கோரிக்கைகளில் கூடுதல் சூழலை வழங்கவும்

## அடுத்த படிகள் (Next Steps)

உங்கள் Site Specification-ஐ வரையறுத்த பிறகு:

1. **Theme Builder-ஐப் பயன்படுத்துங்கள்**: உங்கள் `site_brief`-ஐ அடிப்படையாகக் கொண்டு ஒரு தனிப்பயன் தீமை (custom theme) உருவாக்கவும்
2. **வடிவமைப்பைச் செம்மைப்படுத்துங்கள்**: விரிவான வடிவமைப்பு வேலைகளுக்கு Design System Aesthetics skill-ஐப் பயன்படுத்தவும்
3. **உள்ளடக்கத்தைத் திட்டமிடுங்கள்**: உள்ளடக்க அமைப்பு பரிந்துரைகளுக்காக ஏஜென்ட்களிடம் கேட்கவும்
4. **அம்சங்களை உருவாக்குங்கள்**: உங்கள் வணிக இலக்குகளுடன் ஒத்துப்போகும் அம்சங்களைக் கோரவும்
