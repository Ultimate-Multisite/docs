---
title: የፕላን ደረጃን ዝቅ ማድረግ
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Planን መቀነስ (v2)

_**ጠቃሚ ማሳሰቢያ፡ ይህ ጽሑፍ የሚያመለክተው Ultimate Multisite version 2.xን ነው።**_

Planን ወይም የደንበኝነት ምዝገባን (subscription) መቀነስ ተጠቃሚዎች በጀት ውስን ከሆነ ወይም የሰርተን ሰብሳይት (subsite) ለማስኬድ ብዙ ሀብቶች እንደማይፈልጉ ወስደው ከሆነ ሊያደርጉት የሚችሉ የተለመደ እርምጃ ነው።

## Planን እንዴት መቀነስ ይቻላል {#how-to-downgrade-a-plan}

ተጠቃሚዎች በየጊዜው በsubsite admin dashboard ገብተው እና በአካባቢያቸው ባለው የሂሳብ ገጽ (account page) ላይ **Change** የሚለውን በመጫን Planን መቀነስ ይችላሉ።

![Customer account page with Your Membership card and Change button](/img/account-page/membership-change-button.png)

በ**Change** ቁልፍ ላይ ከጫኑ በኋላ፣ ተጠቃሚው/ደንበኛው ወደ checkout page ይላካሉ፤ እዚያም የደንበኝነት ምዝገባውን ወደ ምን Plan መቀየር እንደሚፈልጉ መምረጥ ይችላሉ።

![Downgrade plan options page on the customer side](/img/account-page/downgrade-picker.png)

በዚህ ምሳሌ፣ Planን ከ**Premium** ወደ **Free** እየቀነስን ነው።

ለመቀጠል ተጠቃሚው **Complete Checkout** የሚለውን ቁልፍ መጫን ብቻ ያስፈልገዋል። ከዚያም ወደ የሂሳብ ገጹ ይመለሳል፤ እዚያም ለተቋረጠው ለውጥ (pending change) የሚያሳይ መልዕክት ይታያል። ለውጡ የሚፀናው ለደንበኛው **በሚቀጥለው የክፍያ ዑደት (next billing cycle)** ነው።

![Account page showing pending membership change banner](/img/account-page/pending-change.png)

### ተጠቃሚ Planን ሲቀንስ ምን ይሆናል {#what-happens-when-a-user-downgrades-their-plan}

Planን መቀነስ ያለበት ነገር ቢኖር፣ በተጠቃሚው subsite ውስጥ ያለውን ነባር ቅንብር (existing configuration) አይቀይርም።

የsite templateን መቀየር አያስፈልግም፤ ምክንያቱም የsite templateን መቀየር የsubsiteን ሙሉ መረጃ ሙሉ በሙሉ በማጥፋት እና በማጽዳት ስለሚጀምር ነው። ይህ የተፈለገውን የዳታ መጥፋት ለመከላከል ነው። ስለዚህ የdisk space፣ themes፣ plugins ወዘተ ሳይቀየሩ፣ ፖስቶቹ (posts) ብቻ ሊቀየሩ ይችላሉ።

ዋናው ስጋትዎ በየPlan ስር ባዘጋጁት ገደቦች እና መጠኖች (limits and quotas) ላይ መሆኑን እንረዳለን፣ ነገር ግን ማንኛውንም ቅንብር ካጠፋን ወይም ከቀየርን በየተጠቃሚው subsite ላይ ሊያደርሰው የሚችለውን ጉዳት ግምት ውስጥ ማስገባት አለብን።

በPlan ላይ በተቀመጠው ገደብ ያለፉ ፖስቶች (posts) ሶስት የተለያዩ አማራጮች አሏቸው፡ **ፖስቶቹን እንደነበሩ እንዲቆዩ** *፣* **ፖስቶቹን ወደ trash እንዲሄዱ** *፣* ወይም **ፖስቶቹን ወደ draft እንዲሄዱ** *። ይህንን በUltimate Multisite settings ውስጥ ማዋቀር ይችላሉ።

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### ለክፍያው ምን ይሆናል {#what-happens-to-the-payment}

በversion 2.0 ላይ፣ የክፍያ ስሌት (proration) አንፃር ምንም ማስተካከያ አያስፈልግም።

ይህም የሆነበት ምክንያት ሲስተሙ አዲሱ Plan/membership ከመግባቱ በፊት ያለውን የደንበኝነት ምዝገባ **የክፍያ ዑደቱ እስኪጠናቀቅ ድረስ** ይጠብቃል። አዲሱ የክፍያ መጠን ለአዲሱ membership በሚቀጥለው የክፍያ ዑደት በራስ-ሰር ይተገበራል እና ይከፈላል።
