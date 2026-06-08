---
title: ዌብሁክስ
sidebar_position: 15
_i18n_hash: 2246e3cc1ed172d701d898e04088bf29
---
# ስለ Webhooks የመጀመሪያ እይታ (v2)

_**ትኩረት፡ ይህ ባህሪ ወይም ጽሑፍ ለላቁ ተጠቃሚዎች ብቻ መሆኑን ልብ ይበሉ።**_

**Webhook** ማለት Ultimate Multisiteን የመሰለ መተግበሪያ ወይም ሶፍትዌር ለሌሎች መተግበሪያዎች በቅጽበት (real-time) መረጃ የመስጠት መንገድ ነው። Webhook መረጃን ወይም የውሂብ ጥቅሎችን (payloads) ክስተቱ በሚከሰትበት ጊዜ ወደ ሌሎች መተግበሪያዎች ይልካል። ይህ ማለት **መረጃውን ወዲያውኑ ያገኛሉ** ማለት ነው።

ይህንን፣ Ultimate Multisiteን የተላከውን ወይም የተወሰነ መረጃ ወደ ሌላ CRM ወይም ስርዓት ለማስተሳሰር ወይም ለማስተላለፍ በሚፈልጉበት ጊዜ በጣም ጠቃሚ ነው። ለምሳሌ፣ አዲስ የተጠቃሚ አካውንት በሚፈጠርበት ጊዜ የተጠቃሚውን ስም እና የኢሜል አድራሻ ወደ መረብ ዝርዝር (mailing list) መላክ ሊኖርብዎ ይችላል።

## Webhook እንዴት መፍጠር ይቻላል

Webhook ለመፍጠር፣ ወደ network admin dashboardዎ ይሂዱ። በ**Ultimate Multisite > Webhooks > Add New Webhook** ላይ ይጫኑ።

![Webhooks list page with Add New Webhook button](/img/admin/webhooks-list.png)

ከዚያም የwebhook ቅንብርን ማርትዕ ይችላሉ፦

![Webhook edit interface](/img/admin/webhook-edit.png)

አዲስ webhook ሲፈጥሩ **ስም (Name), URL,** እና **ክስተት (Event)** ባሉ መረጃዎች ይጠየቃሉ። ለwebhookዎ የፈለጉትን ስም መጠቀም ይችላሉ። በጣም አስፈላጊዎቹ መስኮች ደግሞ URL እና Event ናቸው።

![New webhook form with Name, URL, and Event fields](/img/admin/webhooks-list.png)

URL ማለት Ultimate Multisite የ**ውሂብ ጥቅልን (payload) ወይም መረጃን** ሊልከው የሚፈልገው **መድረሻ (endpoint) ወይም አድራሻ** ነው። ይህ መረጃን የሚቀበለው መተግበሪያ ነው።

Zapier ተጠቃሚዎች ከሶስተኛ ወገን መተግበሪያ ጋር ለመተሳሰር ቀላል የሚያደርግ በጣም የተለመደ መፍትሄ ነው። እንደ Zapier ባሉ መድረክ ባይኖርዎት፣ መረጃን ሊይዝ እና ሊያሰራበት የሚችል የራሳቸውን ብጁ ተግባር (custom function) በበይበቃሉ። ስለ **Ultimate Multisite webhook በZapier እንዴት መጠቀም እንደሚቻል** በዚህ ጽሑፍ ይመልከቱ።

በዚህ ጽሑፍ፣ webhook እንዴት እንደሚሰራ መሰረታዊ ጽንሰ-ሀሳብ እና በUltimate Multisite ውስጥ ያሉ ክስተቶችን እንመለከታለን። ምንም ኮድ ሳይጽፉ የendpoint ለመፍጠር እና የpayload ለመያዝ የሚያስችል [requestbin.com](https://requestbin.com/) የተባለ የሶስተኛ ወገን ድረ-ገጽ እንጠቀማለን። _**ማስጠንቀቂያ፡ የሚያደርገው ነገር ቢኖር መረጃው እንደተቀበለ ብቻ ማሳየት ነው።**_ ለpayload ምንም አይነት ሂደት ወይም እርምጃ አይደረግም።

ወደ [requestbin.com](https://requestbin.com/) ይሂዱ እና Create Request Bin የሚለውን ይጫኑ።

![RequestBin website Create Request Bin button](/img/admin/webhooks-list.png)

ከዚህ ቁልፍ በኋላ፣ ቀድሞ አካውንት ካሎት መግባት (log in) ወይም መመዝገብ (sign up) ይጠይቃል። ቀድሞ አካውንት ካሎት ወደ dashboardዎ ይወስደዎታል። በdashboardዎ ላይ፣ Ultimate Multisite webhookዎን ለመፍጠር ሊጠቀሙበት የሚችሉትን endpoint ወይም URL ወዲያውኑ ያያሉ።

![RequestBin dashboard showing the endpoint URL](/img/admin/webhooks-list.png)

URLን ይቅዱ እና ወደ Ultimate Multisite ይመለሱ። endpointን በURL መስክ ላይ ያስቀምጡ እና ከድራፕዳውን ውስጥ አንድ ክስተት ይምረጡ። በዚህ ምሳሌ፣ **Payment Received** እንመርጣለን።

ይህ ክስተት ተጠቃሚ ክፍያ በሚፈጽምበት ጊዜ ሁሉ ይከሰታል። ያሉባቸው ሁሉም ክስተቶች፣ መግለጫዎቻቸው እና የpayloads ስብስቦች በገጹ ግርጌ ተዘርዝረዋል። webhookን ለማስቀመጥ **Add New Webhook** የሚለውን ቁልፍ ይጫኑ።

![Webhook configured with Payment Received event](/img/admin/webhooks-list.png)

አሁን የፈጠርነውን webhook እየሰራ መሆኑን ለማየት ወደ endpoint የሙከራ ክስተት (test event) መላክ እንችላለን። ይህንን የምናደርገው በፈጠርነው webhook ስር ባለው **Send Test Event** ላይ በመጫን ነው።

![Send Test Event option under the webhook](/img/admin/webhooks-list.png)

ይህ ሙከራው ስኬታማ መሆኑን የሚያሳይ ማረጋገጫ መስኮት ያሳያል።

![Webhook test event successful confirmation](/img/admin/webhooks-list.png)

አሁን ወደ _Requestbin_ ድረ-ገጽ ከተመለስን፣ የሙከራ መረጃ የያዘ payload መቀበልን እናያለን።

![RequestBin showing received webhook payload data](/img/admin/webhooks-list.png)

ይህ webhook እና endpoints እንዴት እንደሚሰሩ መሰረታዊ መርህ ነው። የራሳችሁን ብጁ endpoint መፍጠር ካለባችሁ፣ ከUltimate Multisite የምታገኙትን መረጃ ለማስኬድ የራሳችሁን ብጁ ተግባር (custom function) መፍጠር ይኖርባችኋል።
