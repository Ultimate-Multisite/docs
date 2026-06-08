---
title: Zapier Integration
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# Ultimate Multisiteን ከZapier ጋር ማዋሃድ

በአንድ ጽሑፋችን ውስጥ ስለ [Webhooks](webhooks.md) ተወያይተናል እና እነዚህ እንዴት ከሶስተኛ ወገን መተግበሪያዎች ጋር ለመዋሃድ ጥቅም ላይ ሊውሉ እንደሚችሉ ተናግረናል።

Webhooks መጠቀም ትንሽ ውስብስብ ነው ምክንያቱም ለኮዲንግ የላቀ እውቀት እና የሚላኩትን መረጃ (payloads) መያዝ ይጠይቃል። **Zapier**ን መጠቀም ግን ይህንን ችግር ለመፍታት የሚያስችል መንገድ ነው።

Zapier ከ5000 በላይ መተግበሪያዎች ጋር መዋሃድ ስላለው፣ በተለያዩ መተግበሪያዎች መካከል ያለውን ግንኙነት ቀላል ያደርገዋል።

በኔትዎ ላይ ክስተቶች ሲከሰቱ የሚነሳባቸውን **Triggers** መፍጠር ይችላሉ (ለምሳሌ አካውንት መፈጠር እና account_create ክስተትን ማስነሳት) ወይም ከውጪ ክስተቶች ጋር በመገናኘት በኔትዎ ላይ **Actions** መፍጠር ይችላሉ (ለምሳሌ በአልቲሜት መልቲሳይት ኔትዎ ውስጥ አዲስ የአባልነት አካውንት መፍጠር)።

ይህም የሚቻለው **Ultimate Multisite Zapier** ትሪገሮች እና አክሽኖች በ [REST API](https://developer.ultimatemultisite.com/api/docs/) ስለሚንቀሳቀሱ ነው።

## እንዴት መጀመር እንደሚቻል

በመጀመሪያ፣ በZapier መተግበሪያ ዝርዝር ውስጥ Ultimate Multisiteን ይፈልጉ። አማራጭ ደግሞ [ይህንን ሊንክ](https://zapier.com/apps/wp-ultimo/integrations) መጫን ይችላሉ።

ወደ ዳሽቦርዱ በመሄድ በግራ በኩል ባለው ሳባ ላይ ያለውን **+** **Create Zap** ቁልፍ በመጫን አዲስ Zap ለመስራት ይዘጋጁ።

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

ወደ Zap creation ገጽ ይተላለፋሉ።

በፍለጋ ሳጥኑ "wp ultimo" ብለው ይተይቡ። **Beta** ስሪት አማራጭን መምረጥ ይችላሉ።

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

መተግበሪያችንን ከመረጡ በኋላ፣ የሚገኘውን ክስተት ይምረጡ፦ **New Ultimate Multisite Event**።

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

አሁን **የእርስዎን ኔትዎ** ለZapier መዳረሻ መስጠት አለብን። በ **Sign in** ላይ መጫን የሚያስፈልገው **API credentials** ያለበት አዲስ መስኮት ይከፍታል።

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

ወደ የኔትዎ የአስተዳዳሪ ፓነል በመሄድ ወደ **Ultimate Multisite > Settings** > **API & Webhooks** ይሂዱ እና በ API Settings ክፍል ውስጥ ይፈልጉ።

ይህ ግንኙነት እንዲሰራ **Enable API** አማራጩን ይምረጡ።

![API Settings with Enable API option in Ultimate Multisite](/img/admin/webhooks-list.png)

በ API Key እና API Secret መስኮቶች ላይ ያለውን **Copy to Clipboard** አዶ ይጠቀሙ እና እነዚህን እሴቶች በintegration ስክሪን ላይ ይለጥፉ።

በ URL መስክ ላይ የኔትዎ ሙሉ URL፣ ፕሮቶኮሉን (HTTP ወይም HTTPS) ጨምሮ ያስቀምጡ።

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

ወደ ቀጣዩ ደረጃ ለመሄድ **Yes, Continue** ቁልፍ ይጫኑ። ሁሉም ነገር ከተሳካ፣ በአዲስ የተገናኘ አካውንት ይቀበላሉ! አዲስ ትሪገር ለመፍጠር **Continue** ላይ ይጫኑ።

## አዲስ Trigger እንዴት መፍጠር እንደሚቻል

አሁን አካውንትዎ ተገናኝቷል፣ የሚገኙ ክስተቶችን ማየት ይችላሉ። ለዚህ ትምህርት **payment_received** ክስተትን እንመርጥ።

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

ክስተቱ ከተመረጠ እና **continue** ላይ ከጫኑ፣ **test step** ይታያል።

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

በዚህ ደረጃ፣ Zapier የእርስዎ Zap ወደ **ለዚያ ክስተት የተወሰነ መረጃ (payload) ማውረድ** ይችላል ወይ ብሎ ይፈትሻል። በቀጣይ ተመሳሳይ ዓይነት ክስተቶች ሲከሰቱ፣ መረጃው በዚህ ተመሳሳይ አወቃቀር ይላካል።

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

በትምህርታችን ውስጥ ፈተናው **በስኬት ተጠናቅቋል** እና የpayload ምሳሌ መረጃን ተልኳል። ይህ ምሳሌ መረጃ አክሽኖችን ስንፈጥር መመሪያ ለመስጠት ጠቃሚ ይሆናል። ትሪገርዎ አሁን ተፈጥሯል እና ከሌሎች መተግበሪያዎች ጋር ለመገናኘት ዝግጁ ነው።

## Actions እንዴት መፍጠር እንደሚቻል

Actions አዳዲስ መረጃዎችን በኔትዎ ውስጥ ለመፍጠር ከሌሎች ትሪገሮች የሚመጣውን መረጃ ይጠቀማሉ።

**አንድ የአክሽን ደረጃ እየፈጠሩበት**፣ Ultimate Multisite **Beta** እና **Create Items on Ultimate Multisite** አማራጭን ይመርጣሉ።

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

በቀጣዩ ደረጃ፣ እንደ **እንዴት መጀመር እንደሚቻል** ስሰራነው ሁሉ፣ የማረጋገጫ (authentication) መፍጠር ወይም ቀድሞ የተፈጠረ ማረጋገጫ መምረጥ ይችላሉ። በዚህ ትምህርት ውስጥ ቀደም ብዬ የተፈጠረውን ማረጋገጫ እንመርጣለን።

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### የአክሽን ዝግጅት

ይህ **የአክሽኑ ዋና ደረጃ** ሲሆን እዚህ ነገሮች ትንሽ የተለያየ ናቸው። ለመጀመሪያ መረጃ የሚመርጡት **Item** ነው። Item ማለት **የመረጃ ሞዴል** ሲሆን እንደ **Customers, Payments, Sites, Emails** እና ሌሎችም የኔትዎ መረጃ አወቃቀር ነው።

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

አንድ Item ሲመርጡ፣ ቅጹ ለተመረጠው Item የሚያስፈልጉ እና አማራጭ የሆኑ መስኮቶችን ለማምጣት **ይደራጃል**።

ለምሳሌ፣ **Customer** የሚለውን Item ሲመርጡ፣ ቅጹ በኔትዎ ውስጥ አዲስ ደንበኛ ለመፍጠር የሚያስፈልጉ ሁሉንም ነገሮች ያመጣል።

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

በሁሉም እንደ **required** ምልክት የተደረጉ መስኮቶችን ከሞሉ በኋላ እና continue ላይ ከጫኑ፣ የመጨረሻ ስክሪን የተሞሉትን መስኮቶች እና ባዶ የሆኑ መስኮቶችን ያሳያል።

![Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

ፈተናዎ እንደተጠናቀቀ እና ስኬታማ ከሆነ የአክሽኑ ዝግጅት ተጠናቅቋል። በተጨማሪም፣ የአክሽኑን ፈተና በኔትዎ ላይ በማስፈን Item መፈጠሩን መፈተሽ አስፈላጊ ነው።
