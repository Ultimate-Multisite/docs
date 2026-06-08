---
title: ከV1 ወደ መሸጋገር
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# ከV1 ወደ ማሻገር

## Ultimate Multisite ከቀድሞው 1.x የሪልስ ስብስብ ወደ 2.x የሪልስ ስብስብ ተቀይሯል።

Ultimate Multisite version 2.0 እና ከዚያ በላይ የኮድ መሰረቱ ሙሉ በሙሉ ተለውጧል (complete rewrite of the codebase)። ይህ ማለት በድሮው ስሪት እና በአዲሱ ስሪት መካከል ብዙ የተጋራ ነገር የለም ማለት ነው። በዚህ ምክንያት፣ ከ1.x ወደ 2.x ሲያድጉ፣ መረጃዎ አዲሱ ስሪት ሊረዳው በሚችል ቅርጸት እንዲዛወር (migrate) ማድረግ ያስፈልጋል።

በዕድልም፣ Ultimate Multisite 2.0+ **በውስጡ የmigrator** አለው። ይህ migrator የድሮውን ስሪት መረጃ መለየት እና ወደ አዲሱ ቅርጸት የመቀየር አቅም አለው። ይህ ማሻገር የሚከናወነው በversion 2.0+ **Setup Wizard** ወቅት ነው።

ይህ ትምህርት የmigrator እንዴት እንደሚሰራ፣ ስህተት በሚፈጠርበት ጊዜ ምን ማድረግ እንዳለብዎ፣ እና በዚህ ሂደት ውስጥ ሊፈጠሩ የሚችሉ ችግሮችን እንዴት መፍታት እንደሚቻል ይዳስሳል።

_**ጠቃሚ ማሳሰቢያ፡ ከversion 1.x ወደ version 2.0 ማሻገር ከመጀመርዎ በፊት እባክዎ የsite databaseዎን ምትኬ (backup) መፍጠርዎን ያረጋግጡ።**_

## የመጀመሪያ እርምጃዎች

የመጀመሪያው እርምጃ የplugin .zip ፋይልን ማውረድ እና version 2.0ን በnetwork admin dashboardዎ ላይ መጫን ነው።

[version 2.0ን ከጫኑ እና ከከፈቱ በኋላ](../getting-started/installing-ultimate-multisite.md)፣ ሲስተሙ Multisiteዎ በድሮው ስሪት ላይ እየሰራ መሆኑን በራስ-ሰር ይለያል፣ እና ይህን መልዕክት በplugin ገጽ ላይኛው ክፍል ላይ ያያሉ።

_**ማስታወሻ፡ በMultisiteዎ ላይ Ultimate Multisite 1.x ካስጫኑ፣ የpluginን በራስዎ የሰረዙበት ስሪት የመተካት አማራጽ ይኖርዎታል። እባክዎ፣ ወደ **Replace current with uploaded** ላይ ጠቅ ያድርጉ።_

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

ቀጣዩ ገጽ ከversion 1.x ጋር ምን አይነት የድሮ add-ons እንዳስጫኑ ያሳየዎታል። እርስዎ እየተጠቀሙበት ያለው ስሪት ከversion 2.0 ጋር ተኳሃኝ መሆኑን ወይም ማሻሻያ ስሪት መጫን እንደሚያስፈልግዎ መመሪያዎችን ይይዛል።

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

ለመቀጠል ዝግጁ ሲሆኑ፣ **Visit the Installer to finish the upgrade** የሚል አዝራር ላይ መጫን ይችላሉ።

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

ከዚያም ወደ ሰላምታ መልዕክቶች ጋር ወደ installation wizard page ይወስድዎታል። ወደ ቀጣዩ ገጽ ለመሄድ **Get Started** ብለው መጫን ብቻ ያስፈልግዎታል።

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

**Get Started** ላይ ከጫኑ በኋላ፣ ወደ Pre-install Checks_._ ይመራዎታል። ይህ የSystem Informationዎን እና የWordPress installationዎን ያሳየዎታል እና **Ultimate Multisite's requirements** የሚያሟላ መሆኑን ይነግረዎታል።

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

ቀጣዩ እርምጃ የUltimate Multisite license keyዎን ማስገባት እና pluginን ማንቃት ነው። ይህ ሁሉንም ባህሪያት፣ add-onsን ጨምሮ፣ በsiteዎ ላይ መገኘቱን ያረጋግጣል።

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

ቁልፉን ከሰቀሉ በኋላ፣ **Agree & Activate** ላይ ይጫኑ።

ከlicense activation በኋላ፣ በቀጣዩ ገጽ ላይ **Install** ብለው በመጫን ትክክለኛውን installation መጀመር ይችላሉ። ይህ version 2.0 እንዲሰራ የሚያስፈልጉትን አስፈላጊ ፋይሎች እና database በራስ-ሰር ይፈጥራል።

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## አሁን፣ ማሻገሩ (Migration)

የmigrator በውስጡ የደህንነት ባህሪ አለው። ይህ ባህሪ ሁሉንም Ultimate Multisite መረጃዎ ምንም ችግር ሳይገጥመው መዛወር (migrate) እንደሚችል ለማረጋገጥ ሁሉንም multisiteዎን ይፈትሻል። ሂደቱን ለመጀመር **Run Check** የሚለውን አዝራር ይጫኑ።

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

ፈተናውን ካስኬዱ በኋላ፣ ሁለት ዕድሎች አሉዎት፡ ውጤቱ **በስህተት (with)** ሊሆን ይችላል ወይም **በስህተት ሳይሆን (without error)** ሊሆን ይችላል።

### ስህተት ካለ (With Error)

የስህተት መልዕክት ከተቀበሉ፣ ስህተቱን እንዲያስተካክሉ የድጋፍ ቡድናችንን (support team) ማነጋገር ያስፈልግዎታል። 티ኬት (ticket) ሲፈጥሩ **የስህተት መዝገቡን (error log)** ማቅረብዎን ያረጋግጡ። መዝገቡን ማውረድ ይችላሉ ወይም "contact our support team" የሚለውን ሊንክ መጫን ይችላሉ። ይህ በገጽዎ በቀኝ በኩል ባለው help widget ላይ ይከፍታል፣ እና መግለጫው ስር የስህተት መዝገቦች (error logs) የያዙ የቅድመ መሙላት መስኮቶች ይኖሩዎታል።

_**ሲስተሙ ስህተት አግኝቷል፣ ወደ version 2.0 ለማሻገር መሄድ አይችሉም። ስህተቱ እስኪስተካከል ድረስ የnetworkዎን ስራ ለመቀጠል ወደ version 1.x መመለስ (roll back) ይችላሉ።**_

### ስህተት ባይኖርም (Without Error)

ሲስተሙ ምንም ስህተት ካልገኘ፣ የስኬት መልዕክት እና ከታች **Migrate** የሚል አዝራር ያያሉ፣ ይህም ከማሻገሩ ጋር ለመቀጠል ያስችሎታል። በዚህ ገጽ ላይ፣ ወደፊት ከመሄድዎ በፊት የdatabaseዎን ምትኬ (backup) እንድትፈጥሩ ያስታውሱዎታል፣ ይህም በጠንካራ ሁኔታ እንመክራለን። ምትኬ ካሎት **Migrate** ላይ ይጫኑ።

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

እና ይሄ ሁሉ ብቻ ነው!

የnetworkዎን አርማ እና ሌሎች ነገሮችን ለማዘመን Wizard setupን መቀጠል ይችላሉ፣ ወይም Ultimate Multisite version 2.0 ሜኑ እና አዲሱን interface መዳሰስ መጀመር ይችላሉ። ይዝናኑ።
