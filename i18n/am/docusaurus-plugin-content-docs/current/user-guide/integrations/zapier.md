---
title: Zapier ውህደት
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ultimate Multisiteን ከZapier ጋር ማዋሃድ

በአንዱ ጽሑፎች ውስጥ [Webhooks](webhooks.md) እና ከ3ኛ ወገን መተግበሪያዎች ጋር ለመዋሃድ እንዴት መጠቀም እንደሚቻል ተወያይተናል።

webhooks መጠቀም ትንሽ ውስብስብ ነው፣ ምክንያቱም በኮድ መጻፍ እና payloads መቀበል ላይ የላቀ እውቀት ይፈልጋል። **Zapier** መጠቀም ይህን ለመሻገር የሚያስችልዎ መንገድ ነው።

Zapier ከ5000+ በላይ መተግበሪያዎች ጋር ውህደት አለው፣ ይህም በተለያዩ መተግበሪያዎች መካከል ግንኙነትን ቀላል ያደርጋል።

በአውታረ መረብዎ ላይ ክስተቶች ሲከሰቱ የሚነሱ **Triggers** መፍጠር ይችላሉ (ለምሳሌ አካውንት ሲፈጠር እና account_create ክስተትን ሲነሳ) ወይም በውጫዊ ክስተቶች ምላሽ በአውታረ መረብዎ ላይ **Actions** ማመንጨት ይችላሉ (ለምሳሌ በUltimate Multisite አውታረ መረብዎ ውስጥ አዲስ የአካውንት አባልነት መፍጠር)።

ይህ የሚቻለው **Ultimate Multisite Zapier's triggers** እና actions በ[REST API](https://developer.ultimatemultisite.com/api/docs/) ስለሚሰሩ ነው።

## እንዴት መጀመር

መጀመሪያ፣ በZapier መተግበሪያ ዝርዝር ውስጥ Ultimate Multisiteን ይፈልጉ። በአማራጭ፣ [ይህን አገናኝ](https://zapier.com/apps/wp-ultimo/integrations) መጫን ይችላሉ።

ወደ dashboardዎ ይሂዱ እና አዲስ Zap ለማዋቀር በግራ የጎን አሞሌ ላይ ያለውን **+** **Create Zap** አዝራር ይጫኑ።

![Zapier dashboard ከCreate Zap አዝራር ጋር](/img/admin/webhooks-list.png)

ወደ Zap መፍጠሪያ ገጽ ይመራሉ።

በፍለጋ ሳጥኑ ውስጥ "wp ultimo" ይተይቡ። የ**Beta** ስሪት አማራጭን ለመምረጥ ይጫኑ።

![በZapier መተግበሪያ ዝርዝር ውስጥ WP Ultimoን መፈለግ](/img/admin/webhooks-list.png)

መተግበሪያችንን ከመረጡ በኋላ፣ ያለውን ክስተት ይምረጡ፦ **New Ultimate Multisite Event**።

![New Ultimate Multisite Event trigger መምረጥ](/img/admin/webhooks-list.png)

አሁን Zapier ወደ **አውታረ መረብዎ** መዳረሻ መስጠት አለብን። **Sign in** መጫን የ**API credentials** የሚጠይቅ አዲስ መስኮት ይከፍታል።

![Zapier Sign in ለAPI credentials ጥያቄ](/img/admin/webhooks-list.png)

ወደ አውታረ መረብዎ አስተዳዳሪ ፓነል ይሂዱ እና ወደ **Ultimate Multisite > Settings** > **API & Webhooks** ይሂዱ፣ ከዚያም የAPI Settings ክፍልን ይፈልጉ።

ይህ ግንኙነት እንዲሰራ ስለሚያስፈልግ የ**Enable API** አማራጭን ይምረጡ።

![API እና Webhooks settings ከAPI Settings እና Enable API አማራጮች ጋር](/img/admin/settings-api-webhooks.png)

በAPI Key እና API Secret መስኮች ላይ ያለውን **Copy to Clipboard** አዶ ይጠቀሙ እና እነዚያን እሴቶች በውህደት ማያ ገጽ ላይ ይለጥፉ።

በURL መስክ ውስጥ ፕሮቶኮሉን (HTTP ወይም HTTPS) ጨምሮ የአውታረ መረብዎን ሙሉ URL ያስገቡ።

![Zapier ውህደት ማያ ገጽ ከAPI Key፣ Secret፣ እና URL መስኮች ጋር](/img/admin/webhooks-list.png)

ወደ ቀጣዩ ደረጃ ለመቀጠል **Yes, Continue** አዝራርን ይጫኑ። ሁሉም ነገር ከሰራ፣ በአዲሱ የተገናኘ አካውንትዎ ይቀበላሉ! አዲስ trigger ለመፍጠር **Continue** ይጫኑ።

## አዲስ Trigger እንዴት መፍጠር

አሁን አካውንትዎ ተገናኝቶ ስለሆነ ያሉትን ክስተቶች ማየት ይችላሉ። ለዚህ መማሪያ የ**payment_received** ክስተትን እንምረጥ።

![በZapier trigger ውስጥ payment_received ክስተትን መምረጥ](/img/admin/webhooks-list.png)

ክስተቱ ከተመረጠ እና **continue** ለመቀጠል ከጫኑ በኋላ፣ **test step** ይታያል።

![Zapier test step ለtrigger](/img/admin/webhooks-list.png)

በዚህ ደረጃ፣ Zapier የእርስዎ Zap **ለዚያ ክስተት የተወሰነውን payload ማምጣት** እንደሚችል ይፈትሻል። በፊት የዚሁ አይነት ክስተቶች ውስጥ፣ በዚህ ተመሳሳይ መዋቅር ያለ መረጃ ይላካል።

![Zapier trigger test በተሳካ ሁኔታ ተጠናቀቀ ከpayload ጋር](/img/admin/webhooks-list.png)

በመማሪያችን ውስጥ ፈተናው **በተሳካ ሁኔታ ተጠናቀቀ** እና የpayload ምሳሌ መረጃን መለሰ። ይህ የምሳሌ መረጃ እርምጃዎችን ስንፈጥር ለመመራት ጠቃሚ ይሆናል። የእርስዎ trigger አሁን ተፈጥሯል እና ከሌሎች መተግበሪያዎች ጋር ለመገናኘት ዝግጁ ነው።

## Actions እንዴት መፍጠር

Actions በአውታረ መረብዎ ውስጥ አዲስ መዝገቦችን ለመፍጠር ከሌሎች triggers የሚመጣ መረጃ ይጠቀማሉ።

በ**እርምጃ መፍጠሪያ ደረጃ** ውስጥ Ultimate Multisite **Beta** እና የ**Create Items on Ultimate Multisite** አማራጭን ይመርጣሉ።

![Create Items on Ultimate Multisite በመጠቀም እርምጃ መፍጠር](/img/admin/webhooks-list.png)

በቀጣዩ ደረጃ፣ በ**እንዴት መጀመር** ውስጥ እንዳደረግነው ማረጋገጫዎን ይፈጥራሉ፣ ወይም የተፈጠረ ማረጋገጫን ይምረጣሉ። በዚህ መማሪያ ቀድሞ የተፈጠረውን ተመሳሳይ ማረጋገጫ እንመርጣለን።

![ለZapier action ማረጋገጫ መምረጥ](/img/admin/webhooks-list.png)

### Actionን ማዋቀር

ይህ የ**action ዋና ደረጃ** ነው እና እዚህ ነገሮች ትንሽ ይለያያሉ። መጀመሪያ የሚመርጡት መረጃ **Item** ነው። Item የአውታረ መረብዎ **የመረጃ ሞዴል** ነው፣ እንደ **Customers, Payments, Sites, Emails** እና ሌሎች።

![ለZapier action የItem አይነት መምረጥ](/img/admin/webhooks-list.png)

item ሲመርጡ፣ ቅጹ ለተመረጠው item **የሚያስፈልጉ እና አማራጭ መስኮችን ለማምጣት እንደገና ይደራጃል**።

ለምሳሌ፣ **Customer** የሚባለውን item ሲመርጡ፣ ቅጽ መስኮቹ በአውታረ መረቡ ውስጥ አዲስ Customer ለመፍጠር ለመሙላት የሚያስፈልገውን ሁሉ ያመጣሉ።

![በZapier action ማዋቀር ውስጥ የCustomer item መስኮች](/img/admin/webhooks-list.png)

**required** ተብለው የተለዩ መስኮችን ሁሉ ከሞሉ እና continue ከጫኑ በኋላ፣ የመጨረሻ ማያ ገጽ የተሞሉትን መስኮች እና ያልተሞሉ የተተዉትን መስኮች ያሳያል።

![Zapier action test የተሞሉ እና ያልተሞሉ መስኮችን ማሳየት](/img/admin/webhooks-list.png)

ፈተናዎ እንደተጠናቀቀ እና እንደተሳካ፣ actionዎ ተዋቅሯል። በactionዎ ፈተና አማካኝነት item ተፈጥሯል ወይም አልተፈጠረም በአውታረ መረብዎ ላይ መፈተሽም አስፈላጊ ነው።
