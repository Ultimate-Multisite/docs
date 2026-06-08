---
title: በየጣቢያ አብነቶች ውስጥ ራስ-ሰር ፍለጋ እና መተካት
sidebar_position: 8
_i18n_hash: ae72baba9155f43f2ca762880ece1e5c
---
# በየጣቢያው ቴምፕሌት ውስጥ በራስ-ሰር መፈለግ እና መተካት (v2)

_**ይህ ትምህርት WP UItimo version 2.x ያስፈልጋል**_

Ultimate Multisite በጣም ኃይለኛ ባህሪ አለው። ይህም በንቃት (registration form) ላይ የፈለጉትን ጽሑፍ፣ ቀለም እና የመምረጥ መስኮቶችን (select fields) መጨመር ያስችላል። ይህን መረጃ ስንሰበስብ፣ በየጣቢያው ቴምፕሌት በተመረጡ ክፍሎች ውስጥ ይዘትን በቅድሚያ መሙላት እንችላለን። ከዚያም አዲሱ ጣቢያ ሲወጣ፣ Ultimate Multisite በንቃት ወቅት በተመዘገበው መረጃ ቦታዎችን (placeholders) ይተካዋል።

ለምሳሌ፣ በቴምፕሌት ጣቢያዎ ላይ በቦታ መሙላት (placeholders) ሊያደርጉ ይችላሉ። ቦታ መሙላቶቹ በሁለት ስኩዌር ኩርሊ ብሬሶች (double curly braces) - `{{placeholder_name}}` - ውስጥ ተከቦ መቅረብ አለባቸው።

ከዚያም፣ ያንን መረጃ ለመሰብሰብ የሚዛመድ የንቃት መስክ (registration field) በቀላሉ መጨመር ይችላሉ።

ደንበኛዎ በንቃት ጊዜ ያንን መስክ መሙላት ይችላል።

Ultimate Multisite ደግሞ በደንበኛው የቀረበው መረጃ ቦታዎቹን በራስ-ሰር ይተካዋል።

## **"በቦታ መሙላት የተሞላ ቴምፕሌት" ችግርን መፍታት**

እነዚህ ሁሉ ነገሮች በጣም ጥሩ ናቸው፣ ነገር ግን የሚያጋጥመን የሚያምራቸው ችግር አለ። ደንበኞቻችን ሊጎበኙት የሚችሉት የጣቢያ ቴምፕሌት በብዙ ቦታ መሙላት (placeholders) የተሞል ብልሽት ይፈጥራል።

ይህንን ለመፍታት፣ ለቦታ መሙላቶቹ (placeholders) የውሸት ዋጋዎችን (fake values) የማዘጋጀት አማራጭ አለን። ደንበኞች ሲጎበኙ፣ በእነዚህ ዋጋዎች በመጠቀም የቴምፕሌት ጣቢያዎቹን ይዘት መፈለግ እና መተካት እንችላለን።

የቦታ መሙላት አርታኢ (placeholders' content editor) ለማግኘት ወደ **Ultimate Multisite > Settings > Sites** በመሄድ፣ በጎን አሞሌው (sidebar) ላይ ባለው Edit Placeholders ሊንክ መጫን ይችላሉ።

![Edit Placeholders link in the Sites settings sidebar](/img/config/settings-sites.png)

ይህ ወደ ቦታ መሙላት ይዘት አርታኢ (placeholders' content editor) ይወስድዎታል፣ እዚያም ቦታ መሙላቶቹን እና ተዛማጅ ይዘታቸውን መጨመር ይችላሉ።

![Placeholders content editor with placeholder names and values](/img/config/settings-sites.png)
