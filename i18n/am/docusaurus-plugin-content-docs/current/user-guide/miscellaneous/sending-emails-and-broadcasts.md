---
title: ኢሜይሎችን እና ብሮድካስቶችን መላክ
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# ኢሜይሎችን እና Broadcasts መላክ (v2)

_**አስፈላጊ ማስታወሻ፦ ይህ ጽሑፍ Ultimate Multisite ስሪት 2.xን ይመለከታል።**_

Ultimate Multisite ለተወሰነ ተጠቃሚ ወይም ለተጠቃሚዎች ቡድን ኢሜይል በመላክ፣ እንዲሁም ማስታወቂያዎችን ለማሰራጨት በአስተዳዳሪ Dashboard ላይ ማሳወቂያዎችን በመላክ ከደንበኞችዎ ጋር እንዲገናኙ የሚያስችል ባህሪ አለው

## Broadcasts በመጠቀም የአስተዳዳሪ ማሳወቂያዎችን ወደ ደንበኞችዎ Dashboard ያክሉ {#add-admin-notices-to-your-customers-dashboard-with-broadcasts}

የUltimate Multisite broadcast ባህሪን በመጠቀም፣ **የአስተዳዳሪ ማሳወቂያዎችን** ወደ ተጠቃሚዎ subsite አስተዳዳሪ Dashboard ማከል ይችላሉ።

እንደ የስርዓት ጥገና ወይም ለነባር ተጠቃሚዎችዎ አዳዲስ ምርቶችን ወይም አገልግሎቶችን ማቅረብ ያሉ ማስታወቂያዎችን ማድረግ ካስፈለገዎ ይህ እጅግ ጠቃሚ ነው። የአስተዳዳሪ ማሳወቂያው በተጠቃሚዎ Dashboard ላይ የሚታየው እንዲህ ነው።

<!-- የማያ ገጽ ምስል አይገኝም፦ በደንበኛ ንዑስ ጣቢያ Dashboard ላይ የታየ የአስተዳዳሪ ማሳወቂያ broadcast -->

የአስተዳዳሪ ማሳወቂያ ለመጀመር፣ ወደ ኔትወርክ አስተዳዳሪ Dashboard ይሂዱ፣ እና በ**Ultimate Multisite** ምናሌ ስር **Broadcasts** አማራጭን ያገኛሉ።

![በUltimate Multisite አስተዳዳሪ ውስጥ የBroadcasts ዝርዝር ገጽ](/img/admin/broadcasts-list.png)

ነባር broadcastsንም ማርትዕ ይችላሉ፦

![የBroadcast ማርትያ በይነገጽ](/img/admin/broadcast-edit.png)

ከዚህ ገጽ፣ ከላይ ያለውን **Broadcast አክል** አዝራር ጠቅ ያድርጉ።

ይህ ምን ዓይነት broadcast መላክ እንደሚፈልጉ መምረጥ የሚችሉበትን Add broadcast modal መስኮት ያመጣል።

ቀጥለው **መልዕክት** ይምረጡ ከዚያም **Next Step** አዝራርን ጠቅ ያድርጉ።

![የMessage አማራጭ ተመርጦ የሚያሳይ Add broadcast modal](/img/admin/broadcast-add-message.png)

ቀጣዩ መስኮት **ዒላማ ደንበኛ** ወይም **ዒላማ ምርት** ይጠይቃል። ከአንድ በላይ ተጠቃሚ ወይም ከአንድ በላይ ምርት መምረጥ እንደሚችሉ ያስተውሉ።

የተጠቃሚ Account ወይም ምርትን ለመፈለግ፣ በመስኩ ውስጥ ቁልፍ ቃሉን መተየብ መጀመር ያስፈልግዎታል።

በ**የመልዕክት ዓይነት** መስክ ስር፣ የማሳወቂያውን ቀለም መምረጥ ይችላሉ። ይህ የመልዕክትዎን አስቸኳይነት ያጎላል።

ከዚያ **Next Step** ጠቅ ማድረግ ይችላሉ።

![ለMessage broadcast የዒላማ ደንበኞች፣ የዒላማ ምርት እና የመልዕክት ዓይነት መስኮች](/img/admin/broadcast-message-targets.png)

ቀጣዩ መስኮት ለተጠቃሚዎች ማሰራጨት የሚፈልጉትን ርዕስ እና ይዘት/መልዕክት በማስገባት መልዕክትዎን መጻፍ የሚጀምሩበት ነው።

![በcompose ደረጃ ላይ የBroadcast መልዕክት ርዕስ እና ይዘት አርታዒ](/img/admin/broadcast-edit.png)

መልዕክትዎን ከፈጠሩ በኋላ፣ ከዚያ **Send** አዝራርን መጫን ይችላሉ።

እና ይሄ ነው። የአስተዳዳሪ ማሳወቂያው በተጠቃሚዎ Dashboard ላይ ወዲያውኑ መታየት አለበት።

## ለደንበኞችዎ ኢሜይሎችን ይላኩ {#send-emails-to-your-customers}

የUltimate Multisite broadcast ባህሪን በመጠቀም፣ ለተጠቃሚዎችዎ ኢሜይል መላክ ይችላሉ። ኢሜይሉን ለተወሰኑ ተጠቃሚዎች ብቻ ለመላክ ወይም በተመዘገቡበት ምርት ወይም ፕላን መሠረት የተወሰነ የተጠቃሚ ቡድንን ዒላማ ለማድረግ አማራጭ አለዎት።

የኢሜይል broadcast ለመጀመር፣ ወደ ኔትወርክ አስተዳዳሪ Dashboard ይሂዱ፣ እና በUltimate Multisite ምናሌ ስር Broadcast አማራጭን ያገኛሉ።

![ለኢሜይል broadcast መነሻ ነጥብ ሆኖ የሚጠቀም የBroadcasts ዝርዝር ገጽ](/img/admin/broadcasts-list.png)

ከዚህ ገጽ፣ ከላይ ያለውን **broadcast አክል** አዝራር ጠቅ ያድርጉ።

ይህ ምን ዓይነት broadcast መላክ እንደሚፈልጉ መምረጥ የሚችሉበትን Add broadcast modal መስኮት ያመጣል። ቀጥለው **ኢሜይል** ይምረጡ ከዚያም **Next Step** አዝራርን ጠቅ ያድርጉ።

![የEmail አማራጭ ተመርጦ የሚያሳይ Add broadcast modal](/img/admin/broadcast-add-email.png)

ቀጣዩ መስኮት **ዒላማ ደንበኛ** ወይም **ዒላማ ምር**ት ይጠይቃል። ከአንድ በላይ ተጠቃሚ ወይም ከአንድ በላይ ምርት መምረጥ እንደሚችሉ ያስተውሉ።

የተጠቃሚ Account ወይም ምርትን ለመፈለግ፣ በመስኩ ውስጥ ቁልፍ ቃሉን መተየብ መጀመር ያስፈልግዎታል።

ዒላማ ታዳሚዎ ከተመረጠ በኋላ፣ **Next Step** ጠቅ ማድረግ ይችላሉ።

![ለEmail broadcast የዒላማ ደንበኞች እና የዒላማ ምርት ምርጫ](/img/admin/broadcast-email-targets.png)

ቀጣዩ መስኮት ለተጠቃሚዎች መላክ የሚፈልጉትን ርዕስ እና ይዘት/መልዕክት በማስገባት ኢሜይልዎን መጻፍ የሚጀምሩበት ነው።

<!-- የማያ ገጽ ምስል አይገኝም፦ በcompose ደረጃ ላይ የEmail broadcast ርዕስ እና ይዘት አርታዒ -->

መልዕክትዎን ከፈጠሩ በኋላ፣ **Send** አዝራርን መጫን ይችላሉ።

እና የbroadcast ባህሪን በመጠቀም ለመጨረሻ ተጠቃሚዎችዎ ኢሜይል መላክ እንዲህ ቀላል ነው።

## የስርዓት ኢሜይሎች {#system-emails}

በUltimate Multisite ውስጥ የስርዓት ኢሜይሎች እንደ ምዝገባ፣ ክፍያ፣ የዶሜይን ማዛመድ፣ ወዘተ ካሉ የተወሰኑ እርምጃዎች በኋላ በስርዓቱ የሚላኩ **ራስ-ሰር ማሳወቂያዎች** ናቸው። እነዚህ ኢሜይሎች ከUltimate Multisite settings ማርትዕ ወይም ማሻሻል ይችላሉ። ከሌላ የUltimate Multisite መጫኛ ነባር settingsን ዳግም ለማስጀመር እና ለማስመጣት የሚያስችል ባህሪም አለው።

### ዳግም ማስጀመር እና ማስመጣት {#resetting--importing}

አዲስ የUltimate Multisite ስሪቶች፣ እንዲሁም add-ons፣ ከጊዜ ወደ ጊዜ አዲስ ኢሜይሎችን ሊመዘግቡ ይችላሉ እና ይመዘግባሉ።

ግጭቶችን እና ሌሎች ችግኝቶችን ለመከላከል፣ ለአንድ ባህሪ ትክክለኛ አሠራር አስፈላጊ ካልሆኑ በስተቀር፣ **አዲሶቹን የኢሜይል አብነቶች በመጫኛዎ ላይ እንደ System Emails በራስ-ሰር አንጨምርም**።

ሆኖም፣ super admins እና agents እነዚህን አዲስ የተመዘገቡ ኢሜይሎች በimporter መሣሪያ ማስመጣት ይችላሉ። ያ ሂደት የአዲሱ የኢሜይል አብነት ይዘት እና ውቅር ያለው አዲስ የስርዓት ኢሜይል ይፈጥራል፣ ይህም super admin የፈለጉትን ማንኛውንም ማሻሻያ እንዲያደርጉ ወይም እንዳለ እንዲያስቀምጡት ያስችላል።

#### የስርዓት ኢሜይሎችን እንዴት ማስመጣት እንደሚቻል {#how-to-import-system-emails}

ወደ Ultimate Multisite Settings ገጽዎ ይሂዱ እና ወደ **Emails** ትር ይሂዱ።

![በUltimate Multisite settings ውስጥ System Emails ክፍልን የሚያሳይ Emails ትር](/img/config/settings-emails-tab.png)

ከዚያ፣ በጎን አሞሌው ላይ፣ **Customize System Emails** አዝራርን ጠቅ ያድርጉ።

<!-- የማያ ገጽ ምስል አይገኝም፦ በSystem Emails ጎን አሞሌ ፓነል ላይ የCustomize System Emails አዝራር -->

በSystem Emails ገጽ ላይ፣ ከላይ **Reset & Import** የእርምጃ አዝራር ያያሉ። ያንን አዝራር መጫን የማስመጣት እና ዳግም ማስጀመር modal መስኮትን መክፈት አለበት።

![በSystem Emails አስተዳዳሪ ገጽ ላይ የReset ወይም Import እርምጃ አዝራር](/img/admin/system-emails-reset-import.png)

ከዚያ፣ የትኞቹ የስርዓት ኢሜይሎች ለማስመጣት እንደሚገኙ ለማየት የImport Emails አማራጮችን መቀያየር ይችላሉ።

<!-- Screenshot unavailable: Reset and Import modal with the Import Emails options expanded -->

#### የስርዓት ኢሜይሎችን ዳግም ማስጀመር {#reseting-system-emails}

አንዳንድ ጊዜ፣ በተወሰነ የኢሜይል አብነት ላይ ያደረጉት ለውጦች ከእንግዲህ ለእርስዎ እንደማይሰሩ ይገነዘባሉ፣ እና ወደ **ነባሪ ሁኔታው** ዳግም ማስጀመር ይፈልጋሉ።

በእንዲህ ያሉ ሁኔታዎች፣ ሁለት አማራጮች አሉዎት፦ በቀላሉ የስርዓት ኢሜይሉን መሰረዝ እና እንደገና ማስመጣት ይችላሉ (ከላይ ያሉትን መመሪያዎች በመጠቀም) - ይህም የመላኪያ መለኪያዎችንና ሌሎች ነገሮችን ይሰርዛል፣ ስለዚህ ይህ ዘዴ በጣም የማይመረጥ ያደርገዋል።

ወይም ያንን የኢሜይል አብነት ዳግም ለማስጀመር **Reset & Import tool** መጠቀም ይችላሉ።

የኢሜይል አብነትን ዳግም ለማስጀመር፣ Reset & Import tool እስኪደርሱ ድረስ ከላይ ያሉትን ደረጃዎች መከተል ይችላሉ፣ ከዚያም **Reset** አማራጩን ያብሩ እና ወደ ነባሪ ይዘታቸው መመለስ የሚፈልጉትን ኢሜይሎች ይምረጡ።

<!-- Screenshot unavailable: Reset and Import modal with the Reset Emails options expanded -->
