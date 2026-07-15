---
title: ቴም-ተኮር ክህሎቶች
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# በንድፍ ገጽታ ላይ የተመሰረቱ ችሎታዎች (Theme-Aware Skills)

Superdav AI Agent v1.10.0 አራት አዳዲስ በንድፍ ገጽታ ላይ የተመሰረቱ (theme-aware) አብሮ የተሰራ ችሎታዎችን ይልካል። እነዚህ ችሎታዎች በንቁ የWordPress ንድፍ ገጽታዎ (theme) ላይ በራስ-ሰር ይላመዳሉ (adapt)። እነዚህ ችሎታዎች ለንድፍ ገጽታዎ አርክቴክቸር እና ባህሪያት ተስማሚ የሆኑ ልዩ መመሪያዎችን እና አቅሞችን ይሰጣሉ።

## በንድፍ ገጽታ ላይ የተመሰረቱ ችሎታዎች ምን ናቸው? {#what-are-theme-aware-skills}

Theme-aware skills ማለት AI ረዳትዎ በድረ-ገጽዎ ላይ ባለው ንቁ WordPress ንድፍ ገጽታ ላይ በመመስረት በራስ-ሰር የሚመርጣቸው ቀድሞ የተዘጋጁ የእውቀት መሠረተ ልማቶች (knowledge bases) እና የመሳሪያ ስብስቦች (tool sets) ናቸው። ንድፍ ገጽታዎችን ሲቀይሩ፣ የሚገኙት ችሎታዎች በራስ-ሰር ይዘመናሉ — ምንም የእጅ ቅንብር አያስፈልግም።

እያንዳንዱ ችሎታ የሚከተሉትን ያካትታል፦

- **በንድፍ ገጽታው የተወሰነ ሰነድ (Theme-specific documentation)** — ንድፍ ገጽታውን ስለመጠቀም እና ስለማበጀት መመሪያ
- **የብሎክ እና የንድፍ ቅጦች ማጣቀሻዎች (Block and pattern references)** — የሚገኙ ብሎኮች፣ ቅጦች (patterns) እና የንድፍ አማራጮች
- **የማበጀት ምሳሌዎች (Customization examples)** — ለተለመዱ ስራዎች የኮድ ቁርጥራጮች እና የቅንብር ቅጦች
- **ምርጥ አሠራሮች (Best practices)** — ለንድፍ ገጽታው አርክቴክቸር እና የስራ ፍሰት ምክሮች

## የሚገኙ በንድፍ ገጽታ ላይ የተመሰረቱ ችሎታዎች {#available-theme-aware-skills}

### የብሎክ ንድፍ ገጽታዎች (Block Themes) {#block-themes}

**ለማን ይሠራል:** የWordPress ብሎክ-ተኮር (Full Site Editing) አርክቴክቸርን የሚጠቀሙ ንድፍ ገጽታዎች።

የBlock Themes ችሎታ የሚከተሉትን መመሪያ ይሰጣል፦

- በብሎክ አርታኢ (block editor) በመጠቀም ቴምፕሌቶችን መፍጠር እና ማርትዕ
- ከብሎክ ቅጦች (block patterns) እና እንደገና ጥቅም ላይ ሊውሉ የሚችሉ ብሎኮች ጋር መስራት
- ዓለም አቀፍ ስልቶችን (global styles) እና theme.json ቅንብሮችን ማበጀት
- የንድፍ ገጽታ ብሎኮችን (theme blocks) እና ልዩነቶችን መጠቀም
- ለድረ-ገጽዎ የራሱ ብሎክ ቅጦችን መገንባት

**በራስ-ሰር የሚንቀሳቀስበት ጊዜ:** ንቁ ንድፍ ገጽታዎ ብሎክ ንድፍ ገጽታ ከሆነ (የ`block-templates` ባህሪን የሚደግፍ)።

### ክላሲክ ንድፍ ገጽታዎች (Classic Themes) {#classic-themes}

**ለማን ይሠራል:** የPHP ቴምፕሌት እና የክላሲክ አርታኢን የሚጠቀሙ ባህላዊ WordPress ንድፍ ገጽታዎች።

የClassic Themes ችሎታ የሚከተሉትን መመሪያ ይሰጣል፦

- ከPHP ቴምፕሌት ፋይሎች እና hooks ጋር መስራት
- በCustomizer አማካይነት የንድፍ ገጽታውን መልክ ማበጀት
- 위젯 ቦታዎችን (widget areas) እና የጎን አሞሌዎችን (sidebars) መጠቀም
- CSSን እና የልጅ ንድፍ ገጽታ ልማትን (child theme development) ማሻሻል
- የንድፍ ገጽታ ተዋረትን (theme hierarchy) እና የቴምፕሌት ታጎችን (template tags) መረዳት

**በራስ-ሰር የሚንቀሳቀስበት ጊዜ:** ንቁ ንድፍ ገጽታዎ ክላሲክ (non-block) ንድፍ ገጽታ ከሆነ።

### Kadence Blocks {#kadence-blocks}

**ለማን ይሠራል:** ለላቀ ብሎክ-ተኮር ንድፍ (advanced block-based design) የKadence Blocks pluginን የሚጠቀሙ ድረ-ገጾች።

የKadence Blocks ችሎታ የሚከተሉትን መመሪያ ይሰጣል፦

- የKadenceን የላቀ ብሎክ ቤተ-መጽሐፍት (Hero, Testimonials, Pricing, ወዘተ) መጠቀም
- የKadence ብሎክ ቅንብሮችን እና ተላላፊ አማራጮችን (responsive options) ማዋቀር
- የKadenceን grid እና container ብሎኮች በመጠቀም የራሱ አቀማመጥ መገንባት
- የKadence ብሎኮችን ከንድፍ ገጽታዎ ጋር ማዋሃድ
- የKadenceን የንድፍ ሥርዓት (design system) እና ቅድመ-ቅንብሮችን መጠቀም

**በራስ-ሰር የሚንቀሳቀስበት ጊዜ:** የKadence Blocks plugin በድረ-ገጽዎ ላይ ንቁ ከሆነ።

### Kadence Theme {#kadence-theme}

**ለማን ይሠራል:** ለብሎክ-ተኮር ንድፍ እና ማበጀት የKadence ንድፍ ገጽታን የሚጠቀሙ ድረ-ገጾች።

የKadence Theme ችሎታ የሚከተሉትን መመሪያ ይሰጣል፦

- የKadence ንድፍ ገጽታውን በglobal styles እና theme.json ማበጀት
- የKadenceን አብሮ የተሰራ የብሎክ ቅጦች እና ቴምፕሌቶችን መጠቀም
- የKadence ንድፍ ገጽታ ቅንብሮችን እና አማራጮችን ማዋቀር
- የKadenceን የንድፍ ሥርዓት በመጠቀም የራሱ ንድፍ መገንባት
- የKadenceን ከታዋቂ plugin እና መሳሪያዎች ጋር ማዋሃድ

**በራስ-ሰር የሚንቀሳቀስበት ጊዜ:** የKadence ንድፍ ገጽታዎ ንቁ ንድፍ ገጽታ ከሆነ።

## ችሎታዎች እንዴት ይመረጣሉ? {#how-skills-are-selected}

ረዳቱ በየመልዕክቱ የእርስዎን ንቁ ንድፍ ገጽታ እና የተጫኑ pluginዎችን በራስ-ሰር ይለያል። የሚዛመጥ theme-aware skill ካለ፣ በራስ-ሰር ወደ ረዳቱ አውድ (context) ውስጥ ይጫናል (load)። ችሎታዎችን በእጅ ማንቃት ወይም መቀየር አያስፈልግዎትም።

### ብዙ ችሎታዎች (Multiple Skills) {#multiple-skills}

በድረ-ገጽዎ ላይ ብዙ ችሎታዎች የሚተገበሩ ከሆነ (ለምሳሌ፣ Kadence Blocks እና Kadence Theme ሁለቱንም ንቁ ካደረጉ)፣ ረዳቱ ሁሉንም ተፈጻሚ የሆኑ ችሎታዎችን ተደራሽ ያደርጋል እና ከእያንዳንዳቸው መመሪያዎችን ሊጠቅስ ይችላል።

### ንድፍ ገጽታዎችን መቀየር (Switching Themes) {#switching-themes}

ንቁ ንድፍ ገጽታዎን ሲቀይሩ፣ የሚገኙት የረዳቱ ችሎታዎች በሚቀጥለው መልዕክት በራስ-ሰር ይዘመናሉ። ለምሳሌ፦

1. **Block Themes** ችሎታ ንቁ በሆነበት ብሎክ ንድፍ ገጽታ እየተጠቀሙ ነው።
2. ወደ ክላሲክ ንድፍ ገጽታ ይቀየራሉ።
3. በሚቀጥለው መልዕክትዎ፣ **Classic Themes** ችሎታ በራስ-ሰር ይጫናል፣ እና **Block Themes** ችሎታ አይገኝም።

## በንድፍ ገጽታ ላይ የተመሰረቱ ችሎታዎችን መጠቀም {#using-theme-aware-skills}

የtheme-aware skillን ለመጠቀም፣ በቻት በይነገጽ ውስጥ ምን ማድረግ እንደሚፈልጉ ብቻ ይግለጹ። ረዳቱ ተገቢውን የችሎታ መመሪያ በራስ-ሰር ይጠቅሳል።

### ምሳሌ ጥያቄዎች (Example Prompts) {#example-prompts}

**ለBlock Themes:**
> "በብሎክ ቅጦች በመጠቀም የጀርባ ምስል እና በመሃል ላይ ጽሑፍ ያለው የጀግና ክፍል (hero section) መፍጠር።"

**ለClassic Themes:**
> "በልጅ ንድፍ ገጽታ (child theme) በመጠቀም በጎን አሞሌ ላይ የራሱ 위젯 ቦታ (widget area) መጨመር።"

**ለKadence Blocks:**
> "የKadence Testimonials ብሎክን በመጠቀም የደንበኛ ምስክርነት ክፍል (testimonials section) መገንባት።"

**ለKadence Theme:**
> "የራስጌ (header) አቀማመጥ እና የአሰሳ ምናሌ (navigation menu) ስታይል ማበጀት።"

ረዳቱ ለንቁ ንድፍ ገጽታዎ እና pluginዎችዎ ተስማሚ የሆኑ የንድፍ ገጽታ-ተኮር መመሪያዎችን እና የኮድ ምሳሌዎችን ይሰጣል።

:::note
Theme-aware skills በSuperdav AI Agent v1.10.0 እና ከዚያ በኋላ በራስ-ሰር ይገኛሉ። ተጨማሪ ዝግጅት ወይም ቅንብር አያስፈልግም።
:::
