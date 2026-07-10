---
title: የንድፍ ገንቢ የመግባቢያ ሂደት ፍሰት
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder Onboarding Flow {#theme-builder-onboarding-flow}

Superdav AI Agent v1.12.0 አዲስ መመሪያ ያለው **Theme Builder onboarding flow** በማቅረብ፣ በመጀመሪያ ሲሰሩ የራሳችሁን ብሎክ ቴም (block theme) መፍጠር ይረዳዎታል። ይህ አዲሱ አካሄድ ከቀድሞው የ Site Builder ሁነታ ይልቅ የበለጠ ተጣጣፊ እና በኤጀንት የሚመራ አቀራረብ ነው።

## Theme Builder Onboarding Flow ምንድነው? {#what-is-the-theme-builder-onboarding-flow}

የ Theme Builder onboarding flow የሚያደርጋቸው ነገሮች የሚከተሉት ናቸው፦

- የንድፍ ውሳኔዎችን (ቀለም፣ ፊደል ቅርጽ፣ አቀማመጥ) ይመራዎታል
- የድረ-ገጽዎን የእይታ ማንነት ምርጫዎችን ይይዛል
- ለፍላጎትዎ የተበጀ የብሎክ ቴም (block theme) ይፈጥራል
- ሲጠናቀቅ ቴሙን በራስ-ሰር ያነቃቃል

ይህ ሂደት የሚንቀሳቀሰው በ**Setup Assistant agent** ሲሆን፣ ጥያቄዎችን በመጠየቅ እና ቴሙን በከፋ分 (incrementally) በመገንባት ይረዳዎታል።

## Theme Builder Onboardingን መጀመር {#starting-the-theme-builder-onboarding}

### ለመጀመሪያ ጊዜ ሲሰሩ (First-Run Setup) {#first-run-setup}

Superdav AI Agentን በአዲስ WordPress installation ላይ ለመጀመሪያ ጊዜ ሲጀምሩ የሚከተለውን ያያሉ፦

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

ወደ Theme Builder onboarding flow ለመግባት **"Build a custom theme"** ይምረጡ።

### በእጅ መጀመር (Manual Activation) {#manual-activation}

በማንኛውም ጊዜ የሚከተሉትን በመጠየቅ የ Theme Builder onboardingን መጀመር ይችላሉ፦

```
"Start the Theme Builder onboarding"
```

ወይም

```
"Help me create a custom theme"
```

## የ Onboarding ደረጃዎች {#the-onboarding-steps}

### ደረጃ 1: ሁነታ መምረጥ (Mode Selection) {#step-1-mode-selection}

Setup Assistant agent ስለ ምርጫዎ ይጠይቃዎታል፦

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

**Guided mode** ለአብዛኛዎቹ ተጠቃሚዎች ይመከራል፤ ኤጀንቱ በኢንዱስትሪዎ እና በግብዎ ላይ በመመስረት የንድፍ ምክሮችን ይሰጣል።

### ደረጃ 2: የድረ-ገጽ ዝርዝር መግለጫ (Site Specification) {#step-2-site-specification}

ስለ ድረ-ገጽዎ ይጠየቃሉ፦

- **የድረ-ገጽ ዓላማ (Site purpose)**: የኢ-ኮሜርስ፣ ብሎግ፣ ፖርትፎሊዮ፣ SaaS ወዘተ።
- **የታለመ ተመልካች (Target audience)**: ጎብኚዎችዎ እነማን ናቸው?
- **የብራንድ ቀለሞች (Brand colors)**: ዋና እና ሁለተኛ ደረጃ ቀለሞች (ወይም "እርግጠኛ አይደለሁም")
- **ስሜት (Tone)**: ሙያዊ፣ ፈጠራ፣ ተጫዋትነት ያለው፣ አነስተኛ (minimal) ወዘተ።

ይህ መረጃ በ**site_brief** የማስታወሻ ክፍልዎ ውስጥ ይቀመጣል፣ ይህም ኤጀንቶች በቀጣይ ክፍለ ጊዜዎች ውስጥ የሚያ้างብሩት ነው።

### ደረጃ 3: የንድፍ ስርዓት ውሳኔዎች (Design System Decisions) {#step-3-design-system-decisions}

ኤጀንቱ በንድፍ ምልክት (design token) ምርጫዎች ውስጥ ይመራዎታል፦

- **ፊደል ቅርጽ (Typography)**: የፊደል ቤተሰብ (serif, sans-serif, monospace) እና የukuran ደረጃ
- **የቀለም ቤተ-መጽሐፍት (Color palette)**: ዋና፣ ሁለተኛ፣ አጽንዖት (accent) እና ገለልተኛ ቀለሞች
- **ቦታ ክፍተት (Spacing)**: አጥብቆ፣ መደበኛ ወይም ሰፊ አቀማመጥ
- **እንቅስቃሴ (Motion)**: አኒሜሽኖች እና ሽግግሮች (የሚፈለግ ከሆነ)

### ደረጃ 4: የቴም መፍጠር (Theme Generation) {#step-4-theme-generation}

Setup Assistant agent የራሳችሁን ብሎክ ቴም በሚከተሉት ነገሮች ይገነባል፦

- ሁሉንም የንድፍ ምልክቶች የያዘ `theme.json`
- ለተለመዱ አቀማመጦች ብሎክ ቴምፕሌቶች (የመጀመሪያ ገጽ፣ ብሎግ፣ የእውቂያ)
- የንድፍ ስርዓትዎን የሚጠይቁ የቅጥ ብሎኮች (Custom block styles)
- የቴም መረጃ እና የWordPress ድጋፍ መግለጫዎች

### ደረጃ 5: መነቃቃት እና ማረጋገጥ (Activation and Verification) {#step-5-activation-and-verification}

ቴሙ በራስ-ሰር ይነቃቃል፣ እና የሚከተለውን ያያሉ፦

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

ከዚያም ቴሙ በትክክል መታየቱን ለማረጋገጥ ወደ ድረ-ገጽዎ መሄድ ይችላሉ።

## Site Specification እና site_brief Memory {#site-specification-and-sitebrief-memory}

በonboarding ጊዜ፣ ኤጀንቱ የድረ-ገጽዎን ዝርዝር መግለጫ በ**site_brief** የማስታወሻ ምድብ ውስጥ ይይዛል። ይህ የሚከተሉትን ያካትታል፦

- የድረ-ገጽ ዓላማ እና ግቦች
- የታለመ ተመልካች
- የብራንድ ቀለሞች እና ስሜት
- የንድፍ ምርጫዎች
- የይዘት አወቃቀር

### site_brief ለምን አስፈላጊ ነው? {#why-sitebrief-matters}

በቀጣይ ክፍለ ጊዜዎች፣ ኤጀንቶች site_briefዎን የሚጠቀሙት፦

- ለውጦች ቢኖሩም የንድፍ ወጥነትን ለመጠበቅ
- ከየድረ-ገጹ ዓላማ ጋር የተጣጣሙ ባህሪያትን ለመጠቆም
- ሁኔታን የሚያገናዘቡ ምክሮችን ለመስጠት
- የቅንብር ጥያቄዎችን መደጋገም ለማስቀረት

### site_briefዎን መመልከት {#viewing-your-sitebrief}

ኤጀንቱን እንዲህ ብለው መጠየቅ ይችላሉ፦

```
"Show me my site brief"
```

ወይም

```
"What do you know about my site?"
```

ኤጀንቱ የተቀመጠውን የድረ-ገጽ ዝርዝር መግለጫ ያሳየዎታል።

## Onboarding ከተጠናቀቀ በኋላ ማበጀት (Customizing After Onboarding) {#customizing-after-onboarding}

የ Theme Builder onboarding ከተጠናቀቀ በኋላ የሚከተሉትን ማድረግ ይችላሉ፦

### Design System Aesthetics Skillን መጠቀም {#use-the-design-system-aesthetics-skill}

የንድፍ ማሻሻያዎችን ይጠይቁ፦

```
"Refine the typography to be more modern"
```

ወይም

```
"Adjust the color palette to be warmer"
```

የ**Design System Aesthetics skill** በታለመ የንድፍ ዝመናዎች ውስጥ ይመራዎታል።

### theme.jsonን በቀጥታ ማርትዕ (Edit theme.json Directly) {#edit-themejson-directly}

ለላቁ ተጠቃሚዎች፣ የሚከተሉትን ለማስተካከል `/wp-content/themes/[theme-name]/theme.json` ን ያርትዑ፦

- የቀለም ምልክቶች (Color tokens)
- የፊደል ቅርጽ ደረጃዎች (Typography scales)
- የቦታ ክፍተት እሴቶች (Spacing values)
- የድንበር እና ጥላ ትርጓሜዎች (Border and shadow definitions)

### የራሳቸውን ብሎክ ቴምፕሌቶች መፍጠር (Create Custom Block Templates) {#create-custom-block-templates}

የHomepage አቀማመጥ፣ የብሎግ ፖስት ገጾች፣ የምርት ገጾች እና የእውቂያ ቅጾች ቴምፕሌቶችን ለመፍጠር የWordPress block editorን ይጠቀሙ፦

## ንጽጽር፡ አሮጌ vs. አዲሱ Onboarding {#comparison-old-vs-new-onboarding}

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## ችግር መፍታት (Troubleshooting) {#troubleshooting}

**የonboarding flow አልተጠናቀቀም**
- ሂደቱን እንደገና ይጀምሩ፦ "Start the Theme Builder onboarding"
- የWordPress installationዎ ወቅታዊ መሆኑን ያረጋግጡ
- Setup Assistant agent በርቷል መሆኑን ያረጋግጡ

**site_brief አልተጠቀመም**
- ኤጀንቱ የማስታወሻ መዳረሻ እንዳለው ያረጋግጡ
- ኤጀንቱን "recall my site brief" ብለው ይጠይቁ
- በማዋቀርዎ ውስጥ ማስታወሻ (memory) በርቷል መሆኑን ያረጋግጡ

**የተፈጠረው ቴም የእኔ ምርጫዎችን አያሳይም**
- ለማሻሻል Design System Aesthetics skillን ይጠቀሙ
- ኤጀንቱን "regenerate the theme with [specific changes]" ብለው ይጠይቁ
- ትክክለኛ ቁጥጥር ለማግኘት theme.jsonን በቀጥታ ያርትዑ

## ቀጣይ እርምጃዎች (Next Steps) {#next-steps}

Theme Builder onboarding ከተጠናቀቀ በኋላ፦

1. **ድረ-ገጽዎን ያረጋግጡ**: አዲሱን ቴም ለማየት ወደ ድረ-ገጽዎ ይሂዱ
2. **ንድፍዎን ያሻሽሉ**: ለቅንጅቶች Design System Aesthetics skillን ይጠቀሙ
3. **ይዘት ይጨምሩ**: የድረ-ገጽዎን ይዘት መገንባቱን ይጀምሩ
4. **ችሎታዎችን ያስሱ**: scaffold-block-theme እና activate-theme ባሉ የኤጀንት ችሎታዎች ላይ ይማሩ
