---
title: ንድፍ ገንቢ አቅሞች
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# የንድፍ አቅራቢ ችሎታዎች፡ ብሎክ ንድፎችን መቅረጽ እና ማንቃት {#theme-builder-abilities-scaffold-and-activate-block-themes}

Superdav AI Agent v1.12.0 ሁለት ኃይለኛ ችሎታዎችን በማቅረብ፣ ከቻት በይነገጽ በቀጥታ የራሳቸውን ብሎክ ንድፎች (block themes) እንዲፈጥሩ እና እንዲሰማሩ ያስችላል።

## አጠቃላይ እይታ (Overview) {#overview}

የ**scaffold-block-theme** እና **activate-theme** ችሎታዎች ኤጀንቶች የሚከተሉትን እንዲያደርጉ ያስችላሉ፦
- በርስዎ መግለጫዎች ላይ ተመስርተው ሙሉ፣ ለበይይት ዝግጁ የሆኑ ብሎክ ንድፎችን መፍጠር
- ንድፎችን በእጅ ሳይረዱ በራስ-ሰር በጣቢያዎ ላይ ማንቃት
- በጋሪ የንድፍ ውሳኔዎች አማካኝነት ወጥ የሆነ የእይታ ማንነት መፍጠር

## ብሎክ ንድፍ መቅረጽ (Scaffold Block Theme) {#scaffold-block-theme}

የ**scaffold-block-theme** ችሎታ አዲስ የWordPress ብሎክ ንድፍ ሙሉ የንድፍ አወቃቀርን ይፈጥራል፣ ይህም የሚከተሉትን ያካትታል፦

- የንድፍ ምልክቶች (design tokens) ባለው `theme.json` ውቅር
- ለተለመዱ አቀማመጦች የብሎክ አብነት ፋይሎች
- የቅንብረቶች እና ልዩነቶች የብሎክ ስልቶች
- የንድፍ መረጃ (metadata) እና ድጋፍ መግለጫዎች

### እንዴት መጠቀም ይቻላል (How to Invoke) {#how-to-invoke}

በSuperdav AI Agent ቻት ውስጥ፣ የንድፍ ንድፍ ለመፍጠር መጠየቅ ይችላሉ፦

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

ኤጀንቱ የሚከተሉትን ያደርጋል፦
1. የንድፍ ምርጫዎችዎን በውይይት መሰብሰብ
2. ሙሉውን የንድፍ አወቃቀር መፍጠር
3. የሚያስፈልጉትን ሁሉንም የንድፍ ፋይሎች መፍጠር
4. ንድፉን ለማንቃት ማዘጋጀት

### የሚጠበቀው ውጤት (Expected Output) {#expected-output}

ችሎታው በተሳካ ሁኔታ ሲሰራ፣ የሚከተሉትን ያያሉ፦

- ንድፉ እንደተቅረጸ ማረጋገጫ
- የንድፉ ስም እና ቦታ
- የተተገበሩ የንድፍ ምልክቶች ማጠቃለያ (ቀለም፣ ፊደል አጻጻፍ፣ ክፍተት)
- ለመንቃት ዝግጁ መሆኑ

የውጤት ምሳሌ፦
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## ንድፍ ማንቃት (Activate Theme) {#activate-theme}

የ**activate-theme** ችሎታ ጣቢያዎን ወደ አዲስ የተቅረጸ ወይም ቀድሞ የነበረ ብሎክ ንድፍ ይቀይረዋል።

### እንዴት መጠቀም ይቻላል (How to Invoke) {#how-to-invoke-1}

ንድፍ ከፈጠሩ በኋላ፣ ወዲያውኑ ማንቃት ይችላሉ፦

```
"Activate the Modern Agency theme"
```

ወይም ማንኛውንም ቀድሞ የነበረ ንድፍ ማንቃት ይችላሉ፦

```
"Switch to the Twentytwentyfour theme"
```

### የሚጠበቀው ውጤት (Expected Output) {#expected-output-1}

ማንቃት ስኬታማ ሲሆን፦

- የንቁ ንድፍ ማረጋገጫ
- የቀደመው የንድፍ ስም (ለማጣቀሻ)
- ንድፉ አሁን የት ላይ በስራ ላይ መሆኑ የጣቢያው URL
- ማንኛውም የንድፍ ዝግጅት ማስታወሻዎች

የውጤት ምሳሌ፦
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## የስራ ሂደት፡ መቅረጽ እና ማንቃት (Workflow: Scaffold and Activate) {#workflow-scaffold-and-activate}

የተለመደው የስራ ሂደት ሁለቱንም ችሎታዎች ያጣምራል፦

1. **የንድፍ ንድፍ ጥያቄ**: "ለSaaS የመድረሻ ገጽ ብሎክ ንድፍ ፍጠርልኝ"
2. **ኤጀንቱ ንድፉን ይቅረጽልዎታል**: ፋይሎችን እና የንድፍ ምልክቶችን ይፈጥራል
3. **መገምገምና ማሻሻል**: አስፈላጊ ከሆነ የንድፍ ለውጦችን ይወያዩበት
4. **ማንቃት**: "አሁን ንድፉን አንቃ"
5. **ማረጋገጥ**: አዲሱ ንድፍ በስራ ላይ መሆኑን ለማረጋገጥ ወደ ጣቢያዎ ይሂዱ

## የንድፍ ምልክቶች እና ማበጀት (Design Tokens and Customization) {#design-tokens-and-customization}

የተቅረጹ ንድፎች የWordPress የንድፍ ምልክቶችን (በ`theme.json` በኩል) የሚጠቀሙት ለሚከተሉት ነው፦

- **ቀለሞች (Colors)**: ዋና (Primary)፣ ሁለተኛ (Secondary)፣ አጽንዖት (Accent)፣ ገለልተኛ (Neutral) ፓሌት
- **ፊደል አጻጻፍ (Typography)**: የፊደል ቤተሰቦች፣ መጠኖች፣ ክብደቶች፣ የመስመር ርቀቶች
- **ክፍተት (Spacing)**: ፓዲንግ (Padding)፣ ማርጂን (Margin)፣ የክፍተት ደረጃዎች (gap scales)
- **ድንበሮች (Borders)**: ራዲየስ እና ስፋት ምልክቶች
- **ጥላዎች (Shadows)**: የከፍታ ደረጃዎች (Elevation levels)

እነዚህ ምልክቶች በ`theme.json` ውስጥ ተደራጅተው ስለሚገኙ፣ መላውን የንድፍ ስርዓትዎ ከአንድ ፋይል ነው ማስተካከል የሚቻለው።

## ገደቦች እና ማስታወሻዎች (Limitations and Notes) {#limitations-and-notes}

- ንድፎች በ`/wp-content/themes/` ውስጥ ይቅረጹና የWordPress ስያሜ ስምምዶችን መከተል አለባቸው።
- ማንቃት የሚቻለው በWordPress ጣቢያዎ ላይ ተገቢ ስልጣን ካለዎት ብቻ ነው።
- በንድፎች ውስጥ የሚቀመጠው የቅንብረቶች (PHP) ኮድ አነስተኛ ነው፤ ውስብስብ ተግባር የሚያስፈልግ ከሆነ 플ugin ይጠቀሙ።
- ብሎክ ንድፎች ከWordPress 5.9 እና ከዚያ በኋላ ባለው ስሪት ላይ በተሻለ ሁኔታ ይሰራሉ።

## ችግር መፍታት (Troubleshooting) {#troubleshooting}

**ከመቅረጽ በኋላ ንድፉ አይታይም**
- የንድፍ አቅጣጫ (directory) መኖሩን እና ትክክለኛ ስልጣን እንዳለው ያረጋግጡ።
- `theme.json` ትክክለኛ JSON መሆኑን ያረጋግጡ።
- የንድፍ ስሙ ከሌሎች ንድፎች ጋር አለመጋጨቱን ያረጋግጡ።

**ማንቃት አልተሳካም**
- የአስተዳዳሪ (administrator) ስልጣን እንዳለዎት ያረጋግጡ።
- የንድፍ አቅጣጫው በWordPress ሊነበብ የሚችል መሆኑን ያረጋግጡ።
- ዝርዝር መረጃ ለማግኘት የWordPress ስህተት መዝገቦችን (error logs) ይገምግሙ።

**የንድፍ ምልክቶች አይሰሩም**
- `theme.json` ሰዋስው (syntax) ትክክል መሆኑን ያረጋግጡ።
- ማንኛውንም የካሽ ማስፋፊያ (caching plugins) ያጽዱ።
- የWordPress ስሪትዎ እየተጠቀሙባቸው ያሉትን ምልክቶች እንደሚደግፍ ያረጋግጡ።

## ቀጣይ እርምጃዎች (Next Steps) {#next-steps}

ንድፍዎን ካነቃቁ በኋላ፣ የሚከተሉትን ማድረግ ይችላሉ፦
- የፊደል አጻጻፍን፣ ቀለሞችን እና ክፍተቶችን ለማሻሻል **Design System Aesthetics skill**ን ይጠቀሙ።
- 개별 የብሎክ ስልቶችን በWordPress block editor ውስጥ ያበጁ።
- በንድፉ `style.css` ፋይል ውስጥ የራሳቸውን CSS ይጨምሩ።
- ለተወሰኑ የገጽ አይነቶች የራሳቸውን የብሎክ አብነቶች ይፍጠሩ።
