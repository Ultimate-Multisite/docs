---
title: የግብር አያያዝ
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# የግብር አያያዝ

Ultimate Multisite በዋና plugin ውስጥ የተገነባ የግብር መሰብሰቢያ ሞጁል አለው፣ ስለዚህ በዕቅዶች፣ ጥቅሎች እና አገልግሎቶችዎ ላይ የሽያጭ ግብሮችን መሰብሰብ ካስፈለገዎት፣ ማንኛውንም ተጨማሪ ሞጁል መጫን ሳያስፈልግዎት በቀላሉ ማድረግ ይችላሉ።

በአውሮፓ ለሚገኙ ኩባንያዎች፣ የVAT ተገዢነትን በተሻለ ለመደገፍ መሣሪያዎችን እና ባህሪያትን የሚጨምር **ተጨማሪ ሞጁል** እናቀርባለን።

Ultimate Multisite በእርስዎ ስም ለመንግሥት ግብሮችን አያስገባም ወይም አይከፍልም፤ እኛ በግብይቱ ጊዜ ተገቢውን ግብር እንዲሰበስቡ ብቻ እንረዳዎታለን። **አሁንም ግብሮችን በራስዎ መክፈል ያስፈልግዎታል።**

## የግብር መሰብሰብን ማንቃት {#enabling-tax-collection}

የግብር መሰብሰብ በነባሪነት አልተነቃም። ለማንቃት፣ ወደ **Ultimate Multisite > ቅንብሮች > ግብሮች** መሄድ እና Enable Taxes ቅንብርን ለማንቃት መቀያየር ያስፈልግዎታል።

![በግብር ቅንብሮች ገጽ ከላይ ያለው Enable Taxes መቀያየሪያ](/img/config/settings-taxes-enable.png)

የግብር ቅንብሮች ገጽ ሙሉ እይታ ይህ ነው፦

![የግብር ቅንብሮች ሙሉ ገጽ](/img/config/settings-taxes-full.png)

ለግለሰብ ምርቶች የግብር ቅንብሮችንም ማየት ይችላሉ፦

![ለምርቶች የግብር ቅንብሮች](/img/config/settings-taxes.png)

### ግብር ያልተካተተበት ከ ግብር የተካተተበት {#tax-excluded-vs-tax-included}

በነባሪነት፣ የሁሉም ምርቶችዎ ዋጋዎች ግብር ያልተካተተባቸው ናቸው፣ ማለትም ግብሮች በምርቱ ዋጋ ውስጥ **አልተካተቱም**። ደንበኛ በተወሰነ ግዢ ላይ ግብር መክፈል እንዳለበት ከወሰንን፣ ግብሮቹን በንዑስ ድምሩ **ላይ ተጨማሪ** እንጨምራለን።

ግብሮች በምርትዎ ዋጋ ውስጥ እንዲካተቱ ከመረጡ፣ **Inclusive Tax** ቅንብርን በማንቃት ማድረግ ይችላሉ።

![ከEnable Taxes ቅንብር በታች ያለው Inclusive Tax መቀያየሪያ ረድፍ](/img/config/settings-taxes-inclusive.png)

ያደረጉትን ለውጦች **ማስቀመጥ** አይርሱ።

###

## የግብር ተመኖችን መፍጠር {#creating-tax-rates}

የግብር መሰብሰብን ካነቁ በኋላ፣ የግብር ተመኖች አርታዒያችንን በመጠቀም ለተወሰኑ አካባቢዎች የግብር ተመኖችን መፍጠር ያስፈልግዎታል።

በግብር ቅንብሮች ገጽ የጎን አሞሌ ላይ ያለውን **የግብር ተመኖችን አስተዳድር** አዝራር በመጫን አርታዒውን መድረስ ይችላሉ።

![በቅንብሮች ገጽ ላይ በግብር ተመኖች ፓነል ውስጥ ያለው የግብር ተመኖችን አስተዳድር አገናኝ](/img/config/settings-taxes-manage-rates.png)

በግብር ተመኖች አርታዒ ገጽ ላይ፣ **አዲስ ረድፍ ጨምር** አዝራርን በመጫን አዲስ የግብር ተመኖችን ማከል ይችላሉ።

![ከላይ የአዲስ ረድፍ ጨምር አዝራር ያለው የግብር ተመኖች አርታዒ ሰንጠረዥ](/img/config/tax-rates-editor.png)

ለእያንዳንዱ የግብር ተመን **ርዕስ** (በኢንቮይሶች ላይ የሚጠቀም) መስጠት ያስፈልግዎታል። ከዚያ ይህ ግብር የሚከፈልበትን **አገር** (አስፈላጊ)፣ **ክልል፣** እና **ከተማ** (ሁለቱም አማራጭ) መምረጥ ይችላሉ። በመጨረሻ፣ **የግብር ተመን በመቶኛ** ያክሉ።

### የግብር ምድቦች {#tax-categories}

ለተለያዩ የምርቶች አይነቶች የተለያዩ የግብር ተመኖችን ለመጨመር፣ በርካታ የግብር ምድቦችንም መፍጠር ይችላሉ።

**አዲስ የግብር ምድብ ጨምር** ለማድረግ ይጫኑ፣ ከዚያ የምድብዎን ስም ይጻፉ እና **ፍጠር** ይጫኑ።

![በግብር ተመኖች አርታዒ ከላይ ያለው አዲስ የግብር ምድብ ጨምር አዝራር](/img/config/tax-categories-add.png)

![በምድብ መፍጠሪያ modal ውስጥ ያለው የግብር ምድብ ስም ግቤት መስክ](/img/config/tax-categories-create-modal.png)

በምድቦች መካከል ለመመልከት፣ **ቀይር** ይጫኑ እና አዲስ ግብሮችን ማከል የሚፈልጉበትን ምድብ ይምረጡ።

![በግብር ምድቦች መካከል ለመቀየር የቀይር dropdown አዝራር](/img/config/tax-categories-switch.png)

![ያሉትን ምድቦች የሚያሳይ የግብር ምድብ መምረጫ dropdown](/img/config/tax-categories-select.png)

ወደ **የምርት አርትዖት ገጽ** እና ከዚያ ወደ ግብሮች ትር በመሄድ ለተወሰነ ምርት የግብር ምድቡን ማቀናበር ይችላሉ።

![የምርት ግብሮች ትር ከግብር ምድብ እና taxable መቀያየሪያ ጋር](/img/config/product-taxes.png)

በዚያው ማያ ገጽ ላይ፣ Ultimate Multisite በዚያ ተወሰነ ምርት ላይ ግብሮችን መሰብሰብ እንደሌለበት እንዲያውቅ **Is Taxable?** መቀያየሪያውን ማጥፋት ይችላሉ።

## የአውሮፓ VAT ድጋፍ {#european-vat-support}

ቀደም ሲል እንደተጠቀሰው፣ በአውሮፓ VAT ደንቦች ምክንያት ተጨማሪ መስፈርቶች ላሏቸው በEU ውስጥ ላሉ ደንበኞች የሚገኝ ተጨማሪ ሞጁል አለን።

የVAT መሣሪያዎቻችን በጥቂት አስፈላጊ ነገሮች ይረዳሉ፦

  * የEU VAT ተመኖችን በቀላሉ መጫን፤

  * የVAT ቁጥር መሰብሰብ እና ማረጋገጥ - እና ከVAT ነፃ ለሆኑ አካላት (ለምሳሌ ትክክለኛ የVAT ቁጥር ያላቸው ኩባንያዎች) በተቃራኒ ማስከፈል፤

ያንን ተጨማሪ ሞጁል ለመጫን፣ ወደ **Ultimate Multisite > ቅንብሮች** ይሂዱ እና ከዚያ የጎን አሞሌውን **ተጨማሪ ሞጁሎቻችንን ይመልከቱ** አገናኝ ይጫኑ።

![የቅንብሮች ገጽ የጎን አሞሌ ከተጨማሪ ሞጁሎቻችንን ይመልከቱ አገናኝ ጋር](/img/config/settings-taxes-addons-link.png)

ወደ ተጨማሪ ሞጁሎቻችን ገጽ ይዛወራሉ። በዚያ፣ **Ultimate Multisite VAT ተጨማሪ ሞጁል** መፈለግ እና መጫን ይችላሉ።

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

ከዚያ፣ ወደ **የኔትወርክ አስተዳዳሪ > ተሰኪዎች** ይሂዱ እና ያንን ተጨማሪ ሞጁል በመላው ኔትወርክ ያንቁ።

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

ወደ **የግብር ቅንብሮች ትር** ተመልሰው ከሄዱ፣ አዲስ አማራጮች እንደሚገኙ ያያሉ። አዲሶቹን የVAT መሣሪያዎች ለማንቃት **Enable VAT Support** አማራጭን ይቀያይሩ። ቅንብሮችዎን **ማስቀመጥ** አይርሱ!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### የVAT ግብር ተመኖችን መሳብ {#pulling-on-vat-tax-rates}

ውህደታችን ከሚጨምራቸው መሣሪያዎች አንዱ ለEU አባል አገራት የግብር ተመኖችን የመጫን ችሎታ ነው። ይህ የEU VAT ድጋፍን ካነቁ በኋላ የግብር ተመኖች አርታዒ ገጽን በመጎብኘት ሊደረግ ይችላል።

በገጹ ታችኛው ክፍል፣ የVAT መሳቢያ አማራጮችን ያያሉ። የተመን አይነት መምረጥ እና **የEU VAT ተመኖችን አዘምን** አዝራርን መጫን ለእያንዳንዱ የEU አባል አገር የግብር ተመኖችን ይስባል እና ሰንጠረዡን በራስ-ሰር ይሞላል። ከዚያ፣ ማስቀመጥ ብቻ ያስፈልግዎታል።

![በግብር ተመኖች አርታዒ ታችኛው ክፍል ያለው የEU VAT ተመኖችን አዘምን አዝራር](/img/config/tax-rates-vat-pull.png)

ከሳቧቸው በኋላ እሴቶቹንም ማርትዕ ይችላሉ። ለማድረግ፣ በቀላሉ የሚያስፈልግዎትን የሰንጠረዥ መስመር ያርትዑ እና አዲሶቹን እሴቶች ለማስቀመጥ ይጫኑ።

### የVAT ማረጋገጥ {#vat-validation}

የVAT ድጋፍ ሲነቃ፣ Ultimate Multisite በcheckout ቅጽ ላይ፣ ከክፍያ አድራሻ መስክ በታች፣ ተጨማሪ መስክ ያክላል። መስኩ በEU ውስጥ ለሚገኙ ደንበኞች ብቻ ይታያል።

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite ከዚያ VAT Numberን ያረጋግጣል፣ እና ትክክለኛ መሆኑ ከተመለሰ፣ የreverse charge ስርዓቱ ይተገበራል እና በዚያ ትዕዛዝ ላይ የታክስ መጠን ወደ 0% ይቀናበራል።
