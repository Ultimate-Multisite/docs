---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# ስለ Webhooks (v2) የመጀመሪያ እይታ {#a-first-look-on-webhooks-v2}

_**ትኩረት፦ ይህ ባህሪ ወይም ጽሑፍ ለላቀ ተጠቃሚዎች መሆኑን ያስታውሱ።**_

**webhook** ማለት እንደ Ultimate Multisite ያለ app ወይም software ለሌሎች መተግበሪያዎች በእውነተኛ ጊዜ መረጃ የሚያቀርብበት መንገድ ነው። webhook መረጃ ወይም payloads እንደተከሰተ ለሌሎች መተግበሪያዎች ያደርሳል፣ ይህም **መረጃ ወዲያውኑ ያገኛሉ** ማለት ነው።

Ultimate Multisite ውስጥ ክስተት በተነሳ ቁጥር የተወሰነ መረጃ ወደ ሌላ CRM ወይም ስርዓት ማዋሃድ ወይም ማስተላለፍ ካስፈለገዎት ይህ ይጠቅማል። ለምሳሌ፣ አዲስ የተጠቃሚ Account በተፈጠረ ቁጥር የተጠቃሚውን ስም እና የኢሜይል አድራሻ ወደ የመልዕክት ዝርዝር መላክ ያስፈልግዎታል።

## webhook እንዴት መፍጠር እንደሚቻል {#how-to-create-a-webhook}

webhook ለመፍጠር፣ ወደ የኔትወርክ አስተዳዳሪ Dashboard ይሂዱ። **Ultimate Multisite > Webhooks > Add New Webhook** ላይ ጠቅ ያድርጉ።

![Add New Webhook ቁልፍ ያለው ባዶ Webhooks ዝርዝር ገጽ](/img/admin/webhooks-list-empty.png)

ከዚያ የwebhook ውቅሩን ማርትዕ ይችላሉ፦

![Name፣ Event እና URL መስኮች ያሉት Add New Webhook ቅጽ](/img/admin/webhook-add-modal.png)

አዲስ webhook ሲፈጥሩ **Name, URL,** እና **Event** ያሉ መረጃዎች ይጠየቃሉ። ለwebhookዎ የፈለጉትን ማንኛውንም ስም መጠቀም ይችላሉ። በጣም አስፈላጊዎቹ መስኮች URL እና Event ናቸው።

![URL መስክን እና payload ቅድመ እይታን የሚያሳይ Webhook ማርትያ በይነገጽ](/img/admin/webhook-url-field.png)

URL Ultimate Multisite **payload ወይም መረጃ** የሚልክበት **endpoint ወይም መድረሻ** ነው። ይህ መረጃውን የሚቀበለው መተግበሪያ ነው።

Zapier ተጠቃሚው ከ3ኛ ወገን መተግበሪያ ጋር ውህደትን ቀላል ለማድረግ የሚጠቀምበት በጣም የተለመደ መፍትሄ ነው። እንደ Zapier ያለ መድረክ ከሌለ፣ መረጃውን የሚይዝ እና የሚያስኬድ ብጁ function በእጅ መፍጠር ያስፈልግዎታል። **Ultimate Multisite webhook ከZapier ጋር እንዴት መጠቀም እንደሚቻል** ላይ ያለውን ይህን ጽሑፍ ይመልከቱ።

በዚህ ጽሑፍ፣ webhook እንዴት እንደሚሰራ እና በUltimate Multisite ውስጥ ያሉትን ክስተቶች መሰረታዊ ጽንሰ-ሀሳብ እንመለከታለን። [requestbin.com](https://requestbin.com/) የተባለ የ3ኛ ወገን ጣቢያ እንጠቀማለን። ይህ ጣቢያ ምንም ኮድ ሳንጽፍ endpoint እንድንፈጥር እና payload እንድንይዝ ያስችለናል። _**ማስተባበያ፦ የሚያደርገው ሁሉ መረጃው መቀበሉን ማሳየት ብቻ ነው።**_ በpayload ላይ ምንም ሂደት ወይም ምንም ዓይነት እርምጃ አይደረግም።

ወደ [requestbin.com](https://requestbin.com/) ይሂዱ እና Create Request Bin ላይ ጠቅ ያድርጉ።

ያንን ቁልፍ ከጠቁ በኋላ፣ Account ካለዎት እንዲገቡ ወይም እንዲመዘገቡ ይጠይቃል። Account ካለዎት በቀጥታ ወደ የእነሱ Dashboard ይመራዎታል። በDashboardአቸው ላይ፣ Ultimate Multisite webhookዎን በመፍጠር ላይ ሊጠቀሙበት የሚችሉትን endpoint ወይም URL ወዲያውኑ ያያሉ።

ይቀጥሉና URL ይቅዱ እና ወደ Ultimate Multisite ይመለሱ። endpointን በURL መስክ ላይ ያስገቡ እና ከdropdown ክስተት ይምረጡ። በዚህ ምሳሌ፣ **Payment Received** እንመርጣለን።

ይህ ክስተት ተጠቃሚ ክፍያ በሚፈጽም ጊዜ ሁሉ ይነሳል። የሚገኙት ሁሉም ክስተቶች፣ መግለጫቸው፣ እና payloads በገጹ ታች ተዘርዝረዋል። webhookን ለማስቀመጥ **Add New Webhook** ቁልፍን ጠቅ ያድርጉ።

![Payment Received ተመርጦ ያለው Webhook ክስተት dropdown](/img/admin/webhook-event-picker.png)

አሁን የፈጠርነው webhook እየሰራ መሆኑን ለማየት ወደ endpoint የሙከራ ክስተት መላክ እንችላለን። ይህን የፈጠርነው webhook ስር **Send Test Event** ላይ በመጠቅ ማድረግ እንችላለን።

![አንድ የተዋቀረ webhook እና Send Test እርምጃ የሚያሳይ Webhooks ዝርዝር](/img/admin/webhooks-list-populated.png)

ይህ ሙከራው እንደተሳካ የሚናገር የማረጋገጫ መስኮት ያሳያል።

![የሙከራ payload ከተላከ በኋላ የWebhook የሙከራ ክስተት ውጤት](/img/admin/webhook-test-result.png)

አሁን ወደ _Requestbin_ ጣቢያ ብንመለስ፣ payload አንዳንድ የሙከራ መረጃ ይዞ መቀበሉን እናያለን።

ይህ webhook እና endpoints እንዴት እንደሚሰሩ መሰረታዊ መርህ ነው። ብጁ endpoint ለመፍጠር ከፈለጉ፣ ከUltimate Multisite የሚቀበሉትን መረጃ ለማስኬድ ብጁ function መፍጠር ያስፈልግዎታል።
