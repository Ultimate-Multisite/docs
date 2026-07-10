---
title: የጣቢያ ገንቢ ሁነታ ማስወገጃ ማስታወቂያ
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# የጣቢያ ገንቢ ሁነታ ማስጠንቀቂያ {#site-builder-mode-removal-notice}

**የጣቢያ ገንቢ ሁነታ (Site Builder mode) በSuperdav AI Agent v1.12.0 ላይ ተሰርዟል።** የጣቢያ ገንቢ ሁነታን እየተጠቀሙ ከሆነ፣ ለንድፍ እና ለጣቢያ ዝግጅት (site setup) ወደ **Setup Assistant agent** መሸጋገር አለብዎት።

## ምን ተፈጠረ? {#what-happened}

### የጣቢያ ገንቢ ሁነታ (Site Builder Mode) (የቀድሞው) {#site-builder-mode-legacy}

የጣቢያ ገንቢ ሁነታ የሚከተሉትን ለማድረግ በደረጃ የሚመራ መመሪያ (wizard-based interface) ነበር፦

- ከቴምሌትስ (templates) ጣቢያዎችን መፍጠር
- መሰረታዊ ቅንብሮችን ማዋቀር
- ንድፍ (theme) መምረጥ
- የመጀመሪያ ይዘትን ማዘጋጀት

### ምን ተተካው? {#what-replaced-it}

**Setup Assistant agent** አሁን ሁሉንም የጣቢያ ገንቢ ተግባራት የሚይዘው በሚከተሉት አማካይነት ነው፦

- ይበልጥ ተጣጣፊ፣ በኤጀንት የሚመራ ዝግጅት
- የተሻሉ የንድፍ ማበጀት አማራጮች
- ከTheme Builder አሰልጣኝነት (onboarding) ጋር መዋሃድ
- ለወደፊት ክፍለ ጊዜዎች ቋሚ የsite_brief ትውስታ

## የጣቢያ ገንቢ ሁነታን እየተጠቀሙ ከሆነ {#if-you-were-using-site-builder-mode}

### ጣቢያዎቻችሁ ደህንነታቸው የተጠበቀ ነው {#your-sites-are-safe}

- በየጣቢያ ገንቢ ሁነታ የተሰሩ ነባር ጣቢያዎች መስራታቸውን ይቀጥላሉ
- ምንም የመረጃ መጥፋት ወይም የጣቢያ መስተጓጎል የለም
- ጣቢያዎቻችሁን በተለመደው መንገድ ማስተዳደር ትችላላችሁ

### ወደ Setup Assistant Agent መሸጋገር {#migrate-to-setup-assistant-agent}

ለአዲስ የጣቢያ ዝግጅት ወይም ለንድፍ ለውጥ፣ Setup Assistant agentን ይጠቀሙ፦

```
"Help me set up a new site"
```

ወይም

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent በተመሳሳይ ተግባር ይበልጥ ተጣጣፊነትን ይሰጣል።

## ንጽጽር፡ የጣቢያ ገንቢ vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| ባህሪ | የጣቢያ ገንቢ (የተሰረዘ) | Setup Assistant (አዲሱ) |
|---------|----------------------|----------------------|
| የዝግጅት ዘዴ | በደረጃ የሚመራ ቅጽ (Wizard form) | በኤጀንት ውይይት (Agent conversation) |
| የንድፍ ምርጫ | ቀድሞ በተቀመሩ ቴምሌትስ | በብጁ የተፈጠረ (Custom generation) |
| ማበጀት | ውስን አማራጮች | ሙሉ የንድፍ ሥርዓት (Full design system) |
| የጣቢያ ማጠቃለያ | አልተከማቸም | ቋሚ ትውስታ (Persistent memory) |
| የወደፊት ክፍለ ጊዜዎች | ዝግጅቱን መደጋገም | የተከማቸ site_briefን መጠቀም |
| ተጣጣፊነት | የተወሰነ የስራ ፍሰት (Fixed workflow) | ተላላፊ ውይይት (Adaptive conversation) |

## ወደ Setup Assistant Agent መሸጋገር {#migrating-to-setup-assistant-agent}

### ለአዳዲስ ጣቢያዎች {#for-new-sites}

የጣቢያ ገንቢ ሁነታን ከመጠቀም ይልቅ፦

1. ጥያቄ ያቅርቡ፦ "Help me set up a new site"
2. Setup Assistant agent የሚከተሉትን በማድረግ ይመራዎታል፦
   - የጣቢያ ዓላማ እና ግቦች
   - የታለመ ተመልካች (Target audience)
   - የብራንድ ማንነት (Brand identity)
   - የንድፍ መፍጠር (Theme generation)
   - የመጀመሪያ ቅንብር

### ለነባር ጣቢያዎች {#for-existing-sites}

ከየጣቢያ ገንቢ ሁነታ የተሰረቀ ነባር ጣቢያ ካለዎት፦

1. እንደነበረው መጠቀም መቀጠል ይችላሉ
2. ንድፉን ለማዘመን፣ ጥያቄ ያቅርቡ፦ "Redesign my site"
3. Setup Assistant agent አዲስ ንድፍ እንዲፈጥሩ ይረዳዎታል
4. የጣቢያዎ መረጃ ሳይቀየር ይቀራል።

### ለንድፍ ለውጦች {#for-theme-changes}

የጣቢያ ገንቢ ሁነታን የንድፍ ምርጫ ከመጠቀም ይልቅ፦

1. ጥያቄ ያቅርቡ፦ "Change my theme"
2. Setup Assistant agent የሚከተሉትን ያደርጋል፦
   - ስለ የንድፍ ምርጫዎችዎ ይጠይቃል
   - ብጁ ንድፍ ይፈጥራል
   - በጣቢያዎ ላይ ያነቃቃዋል (Activate)

## ቁልፍ ልዩነቶች {#key-differences}

### የጣቢያ ገንቢ ሁነታ (Site Builder Mode) {#site-builder-mode}

```
1. ቴምሌት ይምረጡ
2. ንድፍ ይምረጡ
3. መሰረታዊ ቅንብሮችን ያዋቅሩ
4. ተከናውኗል
```

### Setup Assistant Agent {#setup-assistant-agent}

```
1. የጣቢያዎ ዓላማን ይግለጹ
2. የታለመ ተመልካችዎን ይግለጹ
3. የንድፍ ምርጫዎችን ይምረጡ
4. ኤጀንቱ ብጁ ንድፍ ይፈጥራል
5. ኤጀንቱ ንድፉን ያነቃቃዋል
6. ለወደፊት ክፍለ ጊዜዎች የጣቢያ ማጠቃለያ (site_brief) ይከማቻል
```

## የSetup Assistant Agent ጥቅሞች {#benefits-of-setup-assistant-agent}

### ይበልጥ ተጣጣፊ {#more-flexible}

- ጣቢያዎን በተፈጥሯዊ ቋንቋ ይግለጹ
- ብጁ ምክሮችን ያግኙ
- ለልዩ ፍላጎቶችዎ ይላመዳል

### የተሻለ ማበጀት {#better-customization}

- ብጁ የንድፍ መፍጠር
- የንድፍ ሥርዓት ውሳኔዎች
- ቋሚ የንድፍ ምልክቶች (Persistent design tokens)

### ቋሚ ትውስታ (Persistent Memory) {#persistent-memory}

- የsite_briefዎ ይከማቻል
- የወደፊት ኤጀንቶች ጣቢያዎን ይረዳሉ
- የዝግጅት መረጃን መደጋገም አያስፈልግም

### የተዋሃደ የስራ ፍሰት (Integrated Workflow) {#integrated-workflow}

- Theme Builder onboarding
- Design System Aesthetics skill
- Ability Visibility controls
- ሁሉም በአንድነት ይሰራሉ

## ችግር ፈቺነት (Troubleshooting) {#troubleshooting}

### የጣቢያ ገንቢ ሁነታን ማግኘት አልችልም {#i-cant-find-site-builder-mode}

የጣቢያ ገንቢ ሁነታ ተሰርዟል። በምትኩ Setup Assistant agentን ይጠቀሙ፦

```
"Help me set up a new site"
```

### ከየጣቢያ ገንቢ የተሰራ ጣቢያ መልሶ መፍጠር እፈልጋለሁ {#i-want-to-recreate-a-site-from-site-builder}

በSetup Assistant agent አማካይነት መልሶ መፍጠር ይችላሉ፦

1. ጥያቄ ያቅርቡ፦ "Help me set up a new site"
2. የነባር ጣቢያዎ ዓላማ እና ንድፍ ይግለጹ
3. ኤጀንቱ ተመሳሳይ ንድፍ ይፈጥራል
4. የsite_briefዎ ለወደፊት ማጣቀሻ ይከማቻል

### ነባር የጣቢያ ገንቢ ጣቢያዬ አይሰራም {#my-existing-site-builder-site-isnt-working}

በየጣቢያ ገንቢ ሁነታ የተሰሩ ነባር ጣቢያዎች መስራታቸውን ይቀጥላሉ። ችግር እያጋጠመዎት ከሆነ፦

1. ንድፍዎ ገና ንቁ መሆኑን ያረጋግጡ
2. የፕልጋኖችዎ (plugins) እንደተበራከው ያረጋግጡ
3. የWordPress ስህተት መዝገቦችን (error logs) ይፈትሹ
4. ችግሮች ቢቀጥሉም ድጋፍን ያነጋግሩ

### የድሮ የጣቢያ ገንቢ ቴምሌትስን ልጠቀም እችላለሁ? {#can-i-still-use-my-old-site-builder-templates}

የጣቢያ ገንቢ ቴምሌትስ አልተገኙም። ሆኖም፦

- ነባር ጣቢያዎችዎ መስራታቸውን ይቀጥላሉ
- ተመሳሳይ ጣቢያዎችን በSetup Assistant agent አማካይነት መልሶ መፍጠር ይችላሉ
- Setup Assistant agent ይበልጥ የቅንብሮች አማራጮችን ይሰጣል

## ቀጣይ እርምጃዎች {#next-steps}

1. **ለአዳዲስ ጣቢያዎች**: Setup Assistant agentን ይጠቀሙ
2. **ለነባር ጣቢያዎች**: እንደነበሩት መጠቀም ይቀጥሉ
3. **ለንድፍ ለውጦች**: ከSetup Assistant agent እርዳታ ይጠይቁ
4. **ለንድፍ ማሻሻል**: Design System Aesthetics skillን ይጠቀሙ

## ተዛማጅ ርዕሰ ጉዳዮች {#related-topics}

- **Theme Builder Onboarding**: ለብጁ ንድፎች የሚደረግ መመሪያ ዝግጅት
- **Setup Assistant Agent**: በኤጀንት የሚመራ የጣቢያ ዝግጅት
- **Site Specification Skill**: የጣቢያዎን ግቦች እና ተመልካች መግለጽ
- **Design System Aesthetics Skill**: የጣቢያዎን የእይታ ማንነት ማሻሻል
