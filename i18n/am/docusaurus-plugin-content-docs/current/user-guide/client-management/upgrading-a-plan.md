---
title: የፕላን ማሻሻል
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# የPlan ማሻሻያ (v2)

_**ጠቃሚ ማሳሰቢያ፡ ይህ ጽሑፍ የሚያመለክተው Ultimate Multisite version 2.xን ነው።**_

ደንበኞችዎ በማንኛውም ጊዜ የPlan ስምምነታቸውን ማሻሻል ይችላሉ። ወደ ሌላ Plan ማሻሻል ወይም በኔትዎርክዎ ላይ የሚሰጡትን ማንኛውንም ተጨማሪ አገልግሎት ወይም ፓኬጅ መግዛት ይችላሉ።

በዚህ መመሪያ ውስጥ፣ ደንበኞችዎ እንዴት Plan ሊያሻሽሉ እንደሚችሉ እና ከማሻሻያ ሂደት በኋላ ምን እንደሚሆን እናብራራለን።

Plan ሊያሻሽሉ፣ ደንበኞችዎ ወደ **Dashboard** ገጻቸው በመግባት ወደ **Account** ገጽ መሄድ አለባቸው።

![Customer subsite dashboard with Account menu link visible](/img/account-page/account-menu.png)

በAccount ገጹ ላይ፣ አሁን ያለውን የአባልነት ስምምነት (membership) እና ከእሱ ጋር የተያያዘውን Plan ያያሉ። ወደ ሌላ Plan ለማሻሻል፣ በ**Your Membership** ክፍል በላይኛው ቀኝ ጥግ ላይ ባለው **Change** ላይ መጫን አለባቸው።

![Account page Your Membership card with Change button](/img/account-page/membership-change-button.png)

በሁሉም የሚገኙ Planዎች የሚታዩበት የቼክአውት (checkout) ቅጽ ወደ እነርሱ ይመራቸዋል።

በተጨማሪም፣ Plan ሳይሻሻሉ፣ ለምሳሌ ያልተገደበ ጉብኝት ወይም የዲስክ ቦታ (በዚህ ምሳሌያችን) የመሳሰሉ የተወሰነ አገልግሎት ወይም ፓኬጅ ብቻ መግዛት ከፈለጉ፣ **በአሁኑ Planዎ ላይ የሚገኙ አገልግሎቶች እና ፓኬጆች** ማየት ይችላሉ።

![Upgrade picker showing available plans and packages on the customer side](/img/account-page/upgrade-picker.png)

የመግዛት ምርቱን ከመረጡ በኋላ፣ ያለ ምንም ቀሪ ክሬዲት ምን ያህል መክፈል እንዳለባቸው እና በሚቀጥለው የክፍያ ቀን ምን ያህል እንደሚከፈላቸው ያያሉ።

በአጠቃላይ፣ ምርቱ ሌላ Plan ከሆነ እና ክፍያው የአባልነት ክፍያ አካል ከሆነ፣ በየመጀመሪያው Plan ላይ ለተከፈለው መጠን ክሬዲት ይቀበላሉ።

![Upgrade payment summary showing credit applied and next billing amount](/img/account-page/upgrade-summary.png)

የአሁኑን ምዝገባ ምንም ነገር የማይቀይር Plan ወይም ፓኬጅ ከመረጡ፣ ይህንንም የሚያብራራ መልዕክት ያያሉ።

![Notice when the selected plan does not change the subscription](/img/account-page/upgrade-no-change.png)

ከቼክአውት በኋላ፣ አዲሱ ምርት(ዎች) በደንበኞችዎ አካውንት ውስጥ ይጨመራሉ እና አዲሱ ምርት(ዎች) ሁሉ ገደቦች ወይም ባህሪያት ወዲያውኑ ይጨመራሉ። ለምሳሌ፡ ጉብኝቶች፣ የዲስክ ቦታ፣ ፖስቶች ወዘተ...

##

##

## የPlan ማሻሻያ እና መቀነስ መንገዶች (Upgrade and Downgrade Paths) {#upgrade-and-downgrade-paths}

በእያንዳንዱ ምርትዎ ላይ **Up & Downgrades** የሚል ታብ ይኖራል። በዚያ ታብ ላይ ያለው የመጀመሪያ አማራጭ **Plan Group** የሚባል መስክ ነው።

**Plan groups** የሚለው ደግሞ Ultimate Multisite ምን ማወቅ እንዳለበት የሚያስችለው ነው፤ ማለትም የተወሰኑ Planዎች በአንድ "ቤተሰብ" ውስጥ መሆናቸውን እና ስለዚህ የማሻሻያ/የመቀነስ መንገዶችን ለመገንባት ጥቅም ላይ መዋል እንዳለባቸው የሚያስችለው ነው።

![Product edit Up and Downgrades tab with Plan Group field](/img/config/product-upgrades-plan-group.png)

ለምሳሌ፣ **Free Plan**፣ **Basic Plan** እና **Premium Plan** የሚባሉ Planዎች አሉ። ተጠቃሚዎች በ**Free Plan** የተመዘገቡ የPremium Plan ብቻ እንዲያሻሽሉ ይፈልጋሉ እና "Basic Plan"ን እንደ ማሻሻያ አማራጭ እንዲያዩ አይፈልጉም። የሚያስፈልግዎ ነገር ቢኖር፣ በስክሪንሾት በታች እንደተ দেখানোት፣ ለFree እና Premium Plan ሁለቱም አንድ አይነት Plan group ስም መስጠት ብቻ ነው።

![Free Plan product page with High End plan group assigned](/img/config/product-upgrades-free.png)

![Premium Plan product page with High End plan group assigned](/img/config/product-upgrades-premium.png)

ይህ ምን የሚያደርገው? Ultimate Multisite በኔትዎርክ ውስጥ **High End** የሚባል "የPlan ቤተሰብ" እንዳለ እና የPlan ማሻሻያ ወይም መቀነስ አማራጮችን ሲሰጥ፣ ከዚሁ ቤተሰብ የመጡ Planዎች ብቻ ለተጠቃሚው አማራጭ ሆኖ እንዲቀርቡ ያደርጋል።
