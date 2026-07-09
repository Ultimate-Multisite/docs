---
title: ኤክስፖርት እና ኢምፖርት
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# ኤክስፖርት እና ማስገባት (Export & Import) {#export--import}

Ultimate Multisite 2.9.0 በ **Tools > Export & Import** ስር አንድ የሳይት **ኤክስፖርት እና ማስገባት** መሳሪያ ይጨምራል። አንድ የWordPress siteን እንደ ZIP ፋይል ማዘጋጀት፣ ያንን ZIP መልሶ ማስቀመጥ፣ ወይም አንድ site በተጣጣሙ Ultimate Multisite እና single-site WordPress installation መካከል ማንቀሳቀስ በሚፈልጉበት ጊዜ ይጠቀሙበታል።

## የሚያስፈልጉ መብቶች (Required permissions) {#required-permissions}

የሚሰሩበት site ላይ የWordPress **Tools** ሜኑን መድረስ የሚችል አስተዳዳሪ (administrator) መሆን አለብዎት። በmultisite network ላይ፣ ከnetwork-level Ultimate Multisite tools የsubsiteዎችን ሲያወጡ ወይም ሲያስገቡ የnetwork administrator አካውንት ይጠቀሙ።

የኤክስፖርት ZIP ፋይሎች በauthenticated download endpoint በኩል ስለሚሰጡ፣ እስኪወርድ ድረስ የአስተዳዳሪ ክፍለ ጊዜውን (admin session) ክፍት ያቆዩ እና የተፈጠሩትን download URLs በይፋ አያጋሩ።

## siteን ወደ ZIP ማስቀመጥ (Exporting a site to a ZIP) {#exporting-a-site-to-a-zip}

1. ሊገለብጡት የሚፈልጉት site በWordPress admin ውስጥ፣ ወደ **Tools > Export & Import** ይሂዱ።
2. የኤክስፖርት ቦታውን ይክፈቱ እና ማዘጋጀት የሚፈልጉትን site ይምረጡ።
3. አማራጭ የሆኑ ይዘቶችን (optional content) መካተት ይችላሉ፣ ለምሳሌ uploads፣ plugins፣ እና themes፣ እነዚህ አማራጮች ሲገኙ።
4. ኤክስፖርቱን ይጀምሩ እና ሂደት እስኪጠናቀቅ ይጠብቁ። ትልልቅ sites የZIP ፋይሉ እስኪዘጋጅ ድረስ በበስተጀርባ ሊጠናቀቅ ሊያስፈልጋቸው ይችላል።
5. የተጠናቀቀውን ZIP ከexports ዝርዝር ውስጥ ያውርዱ።

ZIP ፋይሉን በአስተማማኝ ቦታ ያቆዩ። የsite ይዘት፣ ቅንብሮች (settings)፣ ሚዲያ ፋይሎች እና የተመረጡ የኮድ ንብረቶች ሊይዝ ይችላል።

## ኤክስፖርቱ የሚያካትታቸው ነገሮች (What the export includes) {#what-the-export-includes}

የኤክስፖርት ZIP ፋይል የሚከተሉትን ሊይዝ ይችላል፦

- የተመረጠው የsite የዳታቤዝ ይዘት እና ቅንብር።
- uploads ሲካተት የሆኑ ሚዲያ ፋይሎች።
- አማራጮቹ ሲመረጡ plugins እና themes።
- በኤክስፖርት እና ማስገባት (Export & Import) መሳሪያ በtarget installation ላይ siteውን እንደገና ለመገንባት የሚያገለግል import metadata።

ትክክለኛው የZIP መጠን የሚወሰነው በሚዲያ መጠን፣ በተመረጡ plugins እና themes፣ እና በsite የዳታቤዝ ሰንጠረዦች (database tables) መጠን ነው።

## siteን ከZIP ማስገባት (Importing a site from a ZIP) {#importing-a-site-from-a-zip}

1. ወደ መድረሻ (destination) WordPress site ላይ **Tools > Export & Import** ይሂዱ።
2. የimport ቦታውን ይክፈቱ እና በExport & Import tool የተፈጠረውን ZIP ያሰልጉ።
3. siteው አዲስ አድራሻ (address) እንዲጠቀም ከፈለጉ የመተካት URL ያስገቡ፣ ወይም የመጀመሪያውን URL ለመጠበቅ መስኩን ባዶ ይተው።
4. ማስገባቱ ከተጠናቀቀ በኋላ የተሰቀለውን ZIP ማስወገድ የሚፈልጉ መምረጥ ይችላሉ።
5. **Begin Import** የሚለውን ይጫኑ።
6. እስከሚጠናቀቅ ድረስ የሚጠብቀውን import ይከታተሉ። ሂደቱን ከመጠናቀቁ በፊት ማቆም ካለብዎ ብቻ **Cancel Import** ይጠቀሙ።
7. መደበኛ ትራፊክ ወይም የደንበኛ መዳረሻ ከመስጠትዎ በፊት የተገቡበትን site ይገምግሙ።

በsingle-site WordPress installation ላይ ZIP ማስገባት፣ የአሁኑን site በየተገቡበት site ይተካዋል። ከመጀመርዎ በፊት የዒላማውን site ሙሉ ምትኬ (full backup) ይውሰዱ፣ እና በተመሳሳይ ጊዜ ለተመሳሳይ site ብዙ imports ከመጀመር መቆጠብ።

## ገደቦች እና ተኳሃኝነት ማስታወሻዎች (Limitations and compatibility notes) {#limitations-and-compatibility-notes}

- በጣም ትልልቅ uploads directories ወይም media libraries ትልቅ የZIP ፋይሎችን ሊፈጥሩ ይችላሉ። ትልልቅ sites ሲያወጡ ወይም ሲያስገቡ የPHP upload limits፣ execution limits፣ disk space፣ memory፣ እና server timeout settings መሆኑን ያረጋግጡ።
- በጣም ትልልቅ ሚዲያ libraries በዝቅተኛ ትራፊክ ባለው የጥገና ጊዜ (maintenance window) መዛወር ሊያስፈልጋቸው ይችላል።
- የዒላማው WordPress installation ተኳሃኝ የሆኑ WordPress፣ PHP፣ Ultimate Multisite፣ plugin፣ እና theme version ሊኖረው ይገባል።
- single-site import የዒላማውን site ይተካዋል። የပေါင်းስንድስ (merge) መሳሪያ አይደለም።
- Multisite-to-single-site እና single-site-to-multisite ዝውውሮች የሚደገፉት የዒላማው አካባቢ (target environment) የኤክስፖርት የተደረገውን site plugins፣ themes፣ URLs፣ እና የሚያስፈልጉትን Ultimate Multisite components መጫን ከቻለ ብቻ ነው።
- ZIP ፋይሉን የግል ያድርጉ። የዳታቤዝ ይዘት፣ የተሰቀሉ ፋይሎች፣ እና የቅንብር ዝርዝሮች ሊይዝ ይችላል።

ለየድሮ network-level export workflows፣ [Site Export](/user-guide/administration/site-export) ይመልከቱ።
