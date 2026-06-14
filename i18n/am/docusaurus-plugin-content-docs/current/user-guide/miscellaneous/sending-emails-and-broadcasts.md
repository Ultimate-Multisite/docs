---
title: የኢሜይሎችን እና ስርጭቶችን መላክ
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# ኢሜይሎችን እና ማሰራጫዎችን መላክ (v2)

_**አስፈላጊ ማሳሰቢያ፡ ይህ ጽሑፍ የሚያመለክተው Ultimate Multisite version 2.xን ነው።**_

Ultimate Multisite በደንበኞችዎ ላይ ኢሜይል በመላክ ወይም በዳሽቦርድ ማስታወቂያዎችን በማሰራጨት እንዲገናኙ የሚያስችል ባህሪ አለው።

## በBroadcasts አማካኝነት የአስተዳዳሪ ማስታወቂያዎችን ለደንበኞችዎ ዳሽቦርድ ይጨምሩ

በUltimate Multisite broadcast ባህሪ በመጠቀም፣ ለተጠቃሚዎ የሱብሳይት አስተዳዳሪ ዳሽቦርድ ላይ **የአስተዳዳሪ ማስታወቂያዎችን** ማከል ይችላሉ።

ይህ ለምሳሌ እንደ ሲስተም ጥገና ማስታወቂያ ወይም ለነባር ተጠቃሚዎች አዳዲስ ምርቶችን ወይም አገልግሎቶችን ለመስጠት የሚያስፈልግዎ ከሆነ እጅግ በጣም ጠቃሚ ነው። የአስተዳዳሪው ማስታወቂያ በየተጠቃሚው ዳሽቦርድ ላይ የሚታየው በዚህ መልኩ ነው።

<!-- Screenshot unavailable: Admin notice broadcast shown on a customer's subsite dashboard -->

የአስተዳዳሪ ማስታወቂያ ለመጀመር፣ ወደ የኔትወርክ አስተዳዳሪ ዳሽቦርድ በመሄድ በ**Ultimate Multisite** ሜኑ ስር **Broadcasts** አማራጩን ያገኛሉ።

![Broadcasts list page in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

በነባር ማሰራጫዎች ላይም ማርትዕ ይችላሉ፦

![Broadcast edit interface](/img/admin/broadcast-edit.png)

ከዚህ ገጽ፣ በላይ ባለው **Add Broadcast** ቁልፍ ላይ ይጫኑ።

ይህ የAdd broadcast ሞዳል መስኮት ይከፍታል፣ እዚያም ምን ዓይነት ማሰራጫ እንደሚልኩ መምረጥ ይችላሉ።

**Message** ይምረጡና ከዚያ **Next Step** ቁልፍ ላይ ይጫኑ።

![Add broadcast modal with the Message option selected](/img/admin/broadcast-add-message.png)

የሚቀጥለው መስኮት ደግሞ **Target customer** ወይም **Target product** እንዲመርጡ ይጠይቃል። አንድን ተጠቃሚ ወይም ከአንድ በላይ ምርት መምረጥ እንደሚችሉ ልብ ይበሉ።

የተጠቃሚ አካውንትም ሆነ ምርት ለመፈለግ፣ በቦታው ውስጥ ቁልፉን መተየብ ይጀምራሉ።

በ**Message type** መስክ ስር፣ የማስታወቂያውን ቀለም መምረጥ ይችላሉ። ይህ የመልእክቱ አስቸኳይነትን ያጎላል።

ከዚያም **Next Step** ላይ መጫን ይችላሉ።

![Target customers, target product and message type fields for a Message broadcast](/img/admin/broadcast-message-targets.png)

የሚቀጥለው መስኮት ደግሞ ርዕሱን እና ለተጠቃሚዎች ሊያሰራጩት የሚፈልጉትን ይዘት/መልእክት በማስገባት መልእክትዎን መቅረጽበት ነው።

![Broadcast message subject and content editor on the compose step](/img/admin/broadcast-edit.png)

መልእክትዎን ከፈጠሩ በኋላ፣ **Send** ቁልፉን መጫን ይችላሉ።

እናም ያ ብቻ ነው። የአስተዳዳሪ ማስታወቂያው ወዲያውኑ በየተጠቃሚው ዳሽቦርድ ላይ ይታያል።

## ለደንበኞችዎ ኢሜይሎችን ይላኩ

በUltimate Multisite broadcast ባህሪ በመጠቀም፣ ለተጠቃሚዎችዎ ኢሜይል መላክ ይችላሉ። ኢሜይሉን ለተወሰኑ ተጠቃሚዎች ብቻ ለመላክ ወይም በምርቱ ወይም በፕላኑ መሰረት የተወሰነ የደንበኛ ቡድን ላይ ለመድረስ አማራጭ አለዎት።

የኢሜይል ማሰራጫ ለመጀመር፣ ወደ የኔትወርክ አስተዳዳሪ ዳሽቦርድ በመሄድ በUltimate Multisite ሜኑ ስር **Broadcast** አማራጩን ያገኛሉ።

![Broadcasts list page used as the starting point for an email broadcast](/img/admin/broadcasts-list.png)

ከዚህ ገጽ፣ በላይ ባለው **Add broadcast** ቁልፍ ላይ ይጫኑ።

ይህ የAdd broadcast ሞዳል መስኮት ይከፍታል፣ እዚያም ምን ዓይነት ማሰራጫ እንደሚልኩ መምረጥ ይችላሉ። **Email** ይምረጡና ከዚያ **Next Step** ቁልፍ ላይ ይጫኑ።

![Add broadcast modal with the Email option selected](/img/admin/broadcast-add-email.png)

የሚቀጥለው መስኮት ደግሞ **Target customer** ወይም **Target product** እንዲመርጡ ይጠይቃል። አንድን ተጠቃሚ ወይም ከአንድ በላይ ምርት መምረጥ እንደሚችሉ ልብ ይበሉ።

የተጠቃሚ አካውንትም ሆነ ምርት ለመፈለግ፣ በቦታው ውስጥ ቁልፉን መተየብ ይጀምራሉ።

የዒላማ ተመልካቾችዎ ከተመረጡ በኋላ፣ **Next Step** ላይ መጫን ይችላሉ።

![Target customers and target product selection for an Email broadcast](/img/admin/broadcast-email-targets.png)

የሚቀጥለው መስኮት ደግሞ ርዕሱን እና ለተጠቃሚዎች ሊልኩት የሚፈልጉትን ይዘት/መልእክት በማስገባት ኢሜይልዎን መቅረጽበት ነው።

<!-- Screenshot unavailable: Email broadcast subject and content editor on the compose step -->

መልእክትዎን ከፈጠሩ በኋላ፣ **Send** ቁልፉን መጫን ይችላሉ።

በbroadcast ባህሪ በመጠቀም ለተጠቃሚዎችዎ ኢሜይል መላክ ምን ያህል ቀላል እንደሆነ የሚያሳይ ነው።

## የስርዓት ኢሜይሎች

በUltimate Multisite ውስጥ ያሉ የስርዓት ኢሜይሎች (System emails) እንደ ምዝገባ፣ ክፍያ፣ የዶሜን ካርታ አሰጣጥ (domain mapping) ወዘተ ባሉ የተወሰኑ ድርጊቶች በኋላ በስርዓቱ የሚላኩ **ራስ-ሰር ማሳወቂያዎች** ናቸው። እነዚህ ኢሜይሎች ከUltimate Multisite ቅንብሮች ውስጥ ሊስተካከሉ ወይም ሊቀየሩ ይችላሉ። በተጨማሪም፣ ከሌላ Ultimate Multisite ተከላ (installation) ያሉ ቅንብሮችን ዳግም ማስጀመር እና ማስገባት የሚችል ባህሪ አለው።

### ማስቀመጥ እና ማስገባት (Resetting & Importing)

አዳዲስ የUltimate Multisite ስሪቶች፣ እንዲሁም ተጨማሪዎች (add-ons) ከጊዜ ወደ ጊዜ አዳዲስ ኢሜይል ቴምፕሌቶችን መመዝገብ ይችላሉ።

ግጭቶችን እና ሌሎች ችግሮችን ለመከላከል፣ **አንድ የተሰጠ ባህሪ በትክክል እንዲሰራ ወሳኝ ካልሆነ በስተቀር አዳዲስ የኢሜይል ቴምፕሌቶችን በራስ-ሰር እንደ የስርዓት ኢሜይሎች አንጨምርም**።

ሆኖም፣ super admins እና agents እነዚህን አዲስ የተመዘገቡ ኢሜይሎች በimporter tool አማካኝነት ማስገባት ይችላሉ። ያ ሂደት አዲሱን የኢሜይል ቴምፕሌት ይዘት እና ውቅር ያለው አዲስ የስርዓት ኢሜይል ይፈጥራል፣ ይህም super admin የሚፈልጉትን ማሻሻያ እንዲያደርጉ ወይም እንደነበሩ እንዲይዟቸው ያስችላል።

#### የስርዓት ኢሜይሎችን እንዴት ማስገባት እንደሚቻል

ወደ Ultimate Multisite Settings ገጽ በመሄድ ወደ **Emails** ታብ ይሂዱ።

![Emails tab in Ultimate Multisite settings showing the System Emails section](/img/config/settings-emails-tab.png)

ከዚያም፣ በጎን አሞሌው ላይ፣ **Customize System Emails** ቁልፍ ላይ ይጫኑ።

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

በSystem Emails ገጽ ላይ፣ በላይ ባለው **Reset & Import** የአction ቁልፍ ይታያል። ይህን ቁልፍ መጫን የimport እና reset ሞዳል መስኮት ይከፍታል።

![Reset or Import action button on the System Emails admin page](/img/admin/system-emails-reset-import.png)

ከዚያም፣ የትኞቹ የስርዓት ኢሜይሎች ሊሰበሰቡ እንደሚችሉ ለማየት የImport Emails አማራጮችን መጫን ይችላሉ።

<!-- Screenshot unavailable: Reset and Import modal with the Import Emails options expanded -->

#### የስርዓት ኢሜይሎችን ዳግም ማስጀመር (Resetting System Emails)

ሌላ ጊዜ፣ ለተሰጠው የኢሜይል ቴምፕሌት ያደረጉት ለውጥ ከእንግዲህ አይሰራም እና ወደ **መነሻ ሁኔታው** (default state) መልሰው እንዲቀየሩ ይፈልጋሉ ይሆናል።

በእንደዚህ ባሉ ሁኔታዎች፣ ሁለት አማራጮች አሉዎት፡ በቀላሉ የስርዓት ኢሜይሉን መሰረዝ እና እንደገና ማስገባት ይችላሉ (ከላይ ባሉት መመሪያዎች በመጠቀም) - ይህም የመላኪያ መለኪያዎችን እና ሌሎች ነገሮችን ስለሚያጠፋ ይህ ዘዴ ብዙም ተመራጭ አይደለም።

ወይም የኢሜይል ቴምፕሌቱን ዳግም ለማስጀመር **Reset & Import tool** መጠቀም ይችላሉ።

የኢሜይል ቴምፕሌት ዳግም ለማስጀመር፣ ከላይ ያሉትን እርምጃዎች ተከትለው እስከ Reset & Import tool ድረስ ይሂዱ፣ ከዚያም **Reset** አማራጩን አብረው እና ወደ መነሻ ይዘት እንዲመለሱ የሚፈልጓቸውን ኢሜይሎች ይምረጡ።

<!-- Screenshot unavailable: Reset and Import modal with the Reset Emails options expanded -->
