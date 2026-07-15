---
title: தீம் பில்டர் ஆரம்பப் பயிற்சி செயல்முறை
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# தீம் பில்டர் ஆன்போர்டிங் செயல்முறை

Superdav AI Agent v1.12.0 ஆனது, நீங்கள் ஆரம்ப அமைப்பை உருவாக்கும்போது ஒரு வழிகாட்டப்பட்ட **தீம் பில்டர் ஆன்போர்டிங் செயல்முறையை** அறிமுகப்படுத்துகிறது. இது பழைய Site Builder முறையை விட, மிகவும் நெகிழ்வான, ஏஜென்ட் உதவியுடன் கூடிய அணுகுமுறையாக மாற்றுகிறது.

## தீம் பில்டர் ஆன்போர்டிங் செயல்முறை என்றால் என்ன? {#what-is-the-theme-builder-onboarding-flow}

தீம் பில்டர் ஆன்போர்டிங் செயல்முறை என்பது ஒரு ஊடாடும் அமைப்பு வழிகாட்டியாகும். இது பின்வருவனவற்றைச் செய்யும்:

- வடிவமைப்பு முடிவுகள் (நிறங்கள், எழுத்து நடை, அமைப்பு) மூலம் உங்களுக்கு வழிகாட்டுகிறது
- உங்கள் தளத்தின் காட்சி அடையாள விருப்பங்களைச் சேகரிக்கிறது
- உங்கள் தேவைக்கேற்ப ஒரு தனிப்பயன் block தீமை உருவாக்குகிறது
- செயல்முறை முடிந்ததும் தீமை தானாகவே செயல்படுத்துகிறது

இந்த செயல்முறை **Setup Assistant agent** மூலம் இயக்கப்படுகிறது. இது தெளிவுபடுத்தும் கேள்விகளைக் கேட்டு, உங்கள் தீமை படிப்படியாக உருவாக்குகிறது.

## தீம் பில்டர் ஆன்போர்டிங்கைத் தொடங்குதல் {#starting-the-theme-builder-onboarding}

### முதல் முறை அமைப்பு (First-Run Setup) {#first-run-setup}

நீங்கள் Superdav AI Agent-ஐ ஒரு புதிய WordPress நிறுவலில் முதன்முறையாகத் தொடங்கும்போது, நீங்கள் இதைப் பார்ப்பீர்கள்:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

தீம் பில்டர் ஆன்போர்டிங் செயல்முறைக்குள் நுழைய **"Build a custom theme"** என்பதைத் தேர்ந்தெடுக்கவும்.

### கையேடு மூலம் செயல்படுத்துதல் (Manual Activation) {#manual-activation}

நீங்கள் எப்போது வேண்டுமானாலும் இதைச் செய்ய முடியும். இதைக் கோருவதன் மூலம்:

```
"Start the Theme Builder onboarding"
```

அல்லது

```
"Help me create a custom theme"
```

## ஆன்போர்டிங் படிகள் {#the-onboarding-steps}

### படி 1: முறை தேர்வு (Mode Selection) {#step-1-mode-selection}

Setup Assistant agent உங்கள் விருப்பத்தைப் பற்றி கேட்கிறது:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

பெரும்பாலான பயனர்களுக்கு **Guided mode** பரிந்துரைக்கப்படுகிறது; உங்கள் தொழில் மற்றும் இலக்குகளின் அடிப்படையில் ஏஜென்ட் வடிவமைப்பு பரிந்துரைகளைச் செய்யும்.

### படி 2: தளம் விவரக்குறிப்பு (Site Specification) {#step-2-site-specification}

உங்கள் தளம் பற்றி உங்களிடம் கேட்கப்படும்:

- **Site purpose**: E-commerce, blog, portfolio, SaaS, போன்றவை.
- **Target audience**: உங்கள் பார்வையாளர்கள் யார்?
- **Brand colors**: முதன்மை மற்றும் இரண்டாம் நிலை வண்ணங்கள் (அல்லது "எனக்குத் தெரியவில்லை")
- **Tone**: தொழில்முறை, ஆக்கப்பூர்வமான, விளையாட்டுத்தனமான, குறைந்தபட்சம் (minimal), போன்றவை.

இந்தத் தகவல் உங்கள் **site_brief** நினைவகத்தில் சேமிக்கப்படுகிறது. எதிர்கால அமர்வுகளில் ஏஜென்ட்கள் இதைச் குறிப்பிடுவார்கள்.

### படி 3: வடிவமைப்பு அமைப்பு முடிவுகள் (Design System Decisions) {#step-3-design-system-decisions}

வடிவமைப்பு டோக்கன்களைத் தேர்ந்தெடுப்பதில் ஏஜென்ட் உங்களுக்கு வழிகாட்டுகிறது:

- **Typography**: எழுத்து குடும்பம் (serif, sans-serif, monospace) மற்றும் அளவு அளவீடு (size scale)
- **Color palette**: முதன்மை, இரண்டாம் நிலை, акцент மற்றும் நடுநிலை வண்ணங்கள்
- **Spacing**: kompakt, normal அல்லது spacious அமைப்புகள்
- **Motion**: அனிமேஷன்கள் மற்றும் மாற்றங்கள் (தேவைப்பட்டால்)

### படி 4: தீம் உருவாக்கம் (Theme Generation) {#step-4-theme-generation}

Setup Assistant agent பின்வருவனவற்றைக் கொண்டு உங்கள் தனிப்பயன் block தீமை கட்டமைக்கிறது:

- உங்கள் அனைத்து வடிவமைப்பு டோக்கன்களையும் கொண்ட `theme.json`
- பொதுவான அமைப்புகளுக்கான block டெம்ப்ளேட்டுகள் (homepage, blog, contact)
- உங்கள் வடிவமைப்பு அமைப்புக்கு பொருந்தும் தனிப்பயன் block ஸ்டைல்கள்
- தீம் மெட்டாடேட்டா மற்றும் WordPress ஆதரவு அறிவிப்புகள்

### படி 5: செயல்படுத்துதல் மற்றும் சரிபார்ப்பு (Activation and Verification) {#step-5-activation-and-verification}

தீம் தானாகவே செயல்படுத்தப்படும், மேலும் நீங்கள் இதைப் பார்ப்பீர்கள்:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

பின்னர், தீம் சரியாகக் காட்டப்படுகிறதா என்பதைச் சரிபார்க்க உங்கள் தளத்திற்குச் செல்லலாம்.

## Site Specification மற்றும் site_brief நினைவகம் {#site-specification-and-sitebrief-memory}

ஆன்போர்டிங்கின் போது, ஏஜென்ட் உங்கள் தளத்தின் விவரக்குறிப்பை ஒரு **site_brief** நினைவக வகையறையில் சேகரிக்கிறது. இதில் அடங்குவன:

- தளத்தின் நோக்கம் மற்றும் இலக்குகள்
- இலக்கு பார்வையாளர்கள்
- பிராண்ட் வண்ணங்கள் மற்றும் தொனி
- வடிவமைப்பு விருப்பத்தேர்வுகள்
- உள்ளடக்க அமைப்பு

### site_brief ஏன் முக்கியம் {#why-sitebrief-matters}

எதிர்கால அமர்வுகளில், ஏஜென்ட்கள் உங்கள் site_brief-ஐப் பயன்படுத்தி:

- மாற்றங்கள் முழுவதும் வடிவமைப்பு நிலைத்தன்மையை பராமரிக்க
- உங்கள் தளத்தின் நோக்கத்துடன் ஒத்துப்போகும் அம்சங்களை பரிந்துரைக்க
- சூழல் சார்ந்த பரிந்துரைகளை வழங்க
- அமைப்பு கேள்விகளை மீண்டும் செய்வதைத் தவிர்க்க

### உங்கள் site_brief-ஐப் பார்ப்பது {#viewing-your-sitebrief}

நீங்கள் ஏஜென்ட்டிடம் கேட்கலாம்:

```
"Show me my site brief"
```

அல்லது

```
"What do you know about my site?"
```

ஏஜென்ட் நீங்கள் சேமித்த தள விவரக்குறிப்பைக் காண்பிக்கும்.

## ஆன்போர்டிங்கிற்குப் பிறகு தனிப்பயனாக்குதல் {#customizing-after-onboarding}

தீம் பில்டர் ஆன்போர்டிங் முடிந்த பிறகு, நீங்கள்:

### Design System Aesthetics Skill-ஐப் பயன்படுத்துதல் {#use-the-design-system-aesthetics-skill}

வடிவமைப்பு மேம்பாடுகளைக் கோருங்கள்:

```
"Refine the typography to be more modern"
```

அல்லது

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** இலக்கு வைக்கப்பட்ட வடிவமைப்பு புதுப்பித்தல்கள் மூலம் உங்களுக்கு வழிகாட்டுகிறது.

### theme.json-ஐ நேரடியாகதிருத்துதல் {#edit-themejson-directly}

மேம்பட்ட பயனர்களுக்காக, பின்வரும்வற்றைச் சரிசெய்ய `/wp-content/themes/[theme-name]/theme.json`-ஐ திருத்தவும்:

- Color tokens
- Typography scales
- Spacing values
- Border and shadow definitions

### தனிப்பயன் Block டெம்ப்ளேட்டுகளை உருவாக்குதல் {#create-custom-block-templates}

பின்வருவனவற்றிற்கான தனிப்பயன் டெம்ப்ளேட்டுகளை உருவாக்க WordPress block editor-ஐப் பயன்படுத்தவும்:

- Homepage layouts
- Blog post pages
- Product pages
- Contact forms

## ஒப்பீடு: பழைய vs. புதிய ஆன்போர்டிங் {#comparison-old-vs-new-onboarding}

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## சிக்கல் தீர்த்தல் (Troubleshooting) {#troubleshooting}

**ஆன்போர்டிங் செயல்முறை முடிக்கவில்லை**
- செயல்முறையை மீண்டும் தொடங்கவும்: "Start the Theme Builder onboarding"
- உங்கள் WordPress நிறுவல் புதுப்பித்த நிலையில் உள்ளதா எனச் சரிபார்க்கவும்
- Setup Assistant agent இயக்கப்பட்டிருக்கிறதா என்பதை உறுதிப்படுத்தவும்

**எனது site_brief பயன்படுத்தப்படவில்லை**
- ஏஜென்ட்க்கு நினைவக அணுகல் உள்ளதா என்பதை உறுதிப்படுத்தவும்
- ஏஜென்ட்டிடம் "recall my site brief" என்று கேட்கவும்
- உங்கள் அமைப்புகளில் நினைவகம் இயக்கப்பட்டிருக்கிறதா எனச் சரிபார்க்கவும்

**உருவாக்கப்பட்ட தீம் எனது விருப்பங்களுடன் பொருந்தவில்லை**
- அதைச் செம்மைப்படுத்த Design System Aesthetics skill-ஐப் பயன்படுத்தவும்
- ஏஜென்ட்டிடம் "regenerate the theme with [specific changes]" என்று கேட்கவும்
- துல்லியமான கட்டுப்பாட்டிற்கு theme.json-ஐ நேரடியாகதிருத்தவும்

## அடுத்த படிகள் (Next Steps) {#next-steps}

தீம் பில்டர் ஆன்போர்டிங்கை முடித்த பிறகு:

1. **உங்கள் தளத்தைச் சரிபார்க்கவும்**: புதிய தீமையைப் பார்க்க உங்கள் தளத்திற்குச் செல்லவும்
2. **வடிவமைப்பைச் செம்மைப்படுத்தவும்**: மாற்றங்களுக்காக Design System Aesthetics skill-ஐப் பயன்படுத்தவும்
3. **உள்ளடக்கத்தைச் சேர்க்கவும்**: உங்கள் தளத்தின் உள்ளடக்கத்தை உருவாக்கத் தொடங்கவும்
4. **क्षमताओंவற்றை ஆராயவும்**: scaffold-block-theme மற்றும் activate-theme போன்ற பிற ஏஜென்ட் திறன்களைப் பற்றி அறியவும்
