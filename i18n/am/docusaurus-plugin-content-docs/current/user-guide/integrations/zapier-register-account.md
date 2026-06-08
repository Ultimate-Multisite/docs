---
title: በZapier አማካይነት አካውንት መመዝገብ
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# ክስተት (Event): በZapier አማካኝነት አካውንት መመዝገብ

በ[Integrating Ultimate Multisite with Zapier](zapier.md) المقالة ውስጥ، Zapierን በመጠቀም በUltimate Multisite ውስጥ የተለያዩ ድርጊቶችን (actions) እንዴት ማከናወን እንደሚችሉ፣ በተለይም በtriggers እና events ላይ ተወያይተናል። በዚህ المقالة ውስጥ ደግሞ የሶስተኛ ወገን applications (third party applications) እንዴት ማዋቀር እንደሚችሉ እናሳያለን። የዳታ ምንጭ (source of data) አድርገን Google Sheetsን እንጠቀማለን፣ ከዚያም መረጃውን ወደ Ultimate Multisite በመላክ አካውንት መመዝገብ እንችላለን።

በመጀመሪያ፣ በGoogle Driveዎ ውስጥ **Google Sheet** መፍጠር ያስፈልግዎታል። በኋላ ላይ መረጃውን በቀላሉ እንዲያዛምዱ (map) እያንዳንዱን ዓምድ (column) በትክክል መግለጽዎን ያረጋግጡ።

![Google Sheet with columns for customer data](/img/admin/webhooks-list.png)የGoogle Sheetን ከፈጠሩ በኋላ፣ ወደ Zapier አካውንትዎ መግባት እና Zap መፍጠር መጀመር ይችላሉ።

![Zapier dashboard to start creating a zap](/img/admin/webhooks-list.png)በ**"App event"** የፍለጋ መስክ ውስጥ **"Google Sheets"** ይምረጡ።

![Selecting Google Sheets as the app event](/img/admin/webhooks-list.png)

ከዚያም በ"**Event** " መስክ ውስጥ "**New spreadsheet row** " ይምረጡ እና "**Continue** " የሚለውን ይጫኑ።

![Selecting New spreadsheet row event in Zapier](/img/admin/webhooks-list.png)ቀጣዩ እርምጃ የ**Google Sheet** የት እንደተቀመጠበት የ**Google Account** እንዲመርጡ ይጠይቃል። ስለዚህ ትክክለኛው የGoogle Account መምረጥዎን ብቻ ያረጋግጡ።

![Selecting Google Account for the Google Sheet](/img/admin/webhooks-list.png)

በ**"Set up trigger** " ስር፣ መረጃው የሚመጣበትን የgoogle spreadsheet እና የworksheet መምረጥ እና መግለጽ ያስፈልግዎታል። እነዚህን ቦታዎች በመሙላት እና "**Continue** " በማለት ይቀጥሉ።

![Set up trigger with spreadsheet and worksheet selection](/img/admin/webhooks-list.png)ቀጣዩ ደግሞ የgoogle sheetዎ በትክክል ተገናኝቷል ወይስ ለማረጋገጥ "**test your trigger** " ማድረግ ነው።

![Test your trigger step in Zapier](/img/admin/webhooks-list.png)የሙከራዎ ስኬታማ ከሆነ፣ ከspreadsheetዎ የተወሰኑ እሴቶችን የሚያሳየዎትን ውጤት ማየት አለብዎት። ለመቀጠል "**Continue** " የሚለውን ይጫኑ።

![Successful trigger test showing spreadsheet values](/img/admin/webhooks-list.png)ቀጣዩ እርምጃ አካውንት ለመፍጠር ወይም ለመመዝገብ የሚያስችል ሁለተኛ ድርጊት (action) ማዘጋጀት ነው። በፍለጋ መስክ ውስጥ "**Ultimate Multisite(2.0.2)** " ይምረጡ።

![Selecting Ultimate Multisite as the action app](/img/admin/webhooks-list.png)

በ"**Event** " መስክ ስር፣ "**Register an Account in Ultimate Multisite** " ይምረጡ ከዚያም "**Continue** " የሚለውን ቁልፍ ይጫኑ።

![Register an Account in Ultimate Multisite action event](/img/admin/webhooks-list.png)በ"**Set up an action** " ስር፣ ለደንበኛ መረጃ፣ ለአባላ መመዝገቢያዎች (memberships)፣ ለምርቶች (products) ወዘተ የተለያዩ መስኮች ያያሉ። በGoogle Sheetዎ ውስጥ ያሉትን እሴቶች መዛመድ (map) እና በስዕሉ ላይ እንደታየው መረጃው መሞላት ያለበት ትክክለኛ መስክ ላይ ማስቀመጥ ይችላሉ።

![Mapping Google Sheet values to Ultimate Multisite fields](/img/admin/webhooks-list.png)

እሴቶቹን ካዛመዱ በኋላ፣ ድርጊቱን (action) መፈተሽ ይችላሉ።

![Testing the register account Zapier action](/img/admin/webhooks-list.png)
