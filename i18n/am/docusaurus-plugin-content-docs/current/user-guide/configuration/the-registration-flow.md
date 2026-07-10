---
title: የምዝገባ ሂደት
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# የምዝገባ ሂደት (v2) {#the-registration-flow-v2}

_**ጠቃሚ ማሳሰቢያ፡ ይህ ጽሑፍ የሚያመለክተው Ultimate Multisite ስሪት 2.xን ነው።**_

ተጠቃሚዎች ወደ ኔትወርክዎ በተለያዩ መንገዶች መመዝገብ ይችላሉ። የምዝገባ ፎርምዎን ወይም ወደ ቀድሞ በተመረጠ ዕቅድ ሊጋራ የሚችል ሊንክ ሊጠቀሙ ይችላሉ። እዚህ ላይ ደንበኞችዎ በምን ያሉ መንገዶች በኔትወርክዎ ላይ መመዝገብ እንደሚችሉ እና ከተመዘገቡ በኋላ ምን እንደሚሆን እናሳያለን።

## የምዝገባ ፎርምን መጠቀም፡ {#using-the-registration-form}

ይህ መደበኛው የምዝገባ ሂደት ነው። በ**የ చెክአውት ፎርም** የተገጠመ የምዝገባ ገጽ ይፈጥራሉ። ደንበኞችዎ በኔትወርክዎ ላይ ለመመዝገብ እና ዕቅድ ለመግዛት የሚሄዱበት ቦታ ይህ ይሆናል። ከፈለጉ ብዙ የምዝገባ ገጾችን ሊኖሩዎት ይችላሉ፤ እያንዳንዳቸውም የተለያየ የምዝገባ ፎርም ሊይዙ ይችላሉ።

ለምዝገባ መደበኛው ገጽ [_**yourdomain.com/register**_](http://yourdomain.com/register) ነው፣ ነገር ግን በ**Ultimate Multisite > Settings > Login & Registration > Default Registration Page** ላይ በማንኛውም ጊዜ ሊቀይሩት ይችላሉ።

ተጠቃሚው ወደ የምዝገባ ገጽዎ ሲደርስ (በተለምዶ **Sign in** ወይም **Buy now** የሚለውን ቁልፍ በመጫን)፣ የምዝገባ ፎርምዎን እዚያ ያያሉ።

![Registration form displayed on the registration page](/img/frontend/registration-form.png)

የ చెክአውት ፎርም በፈረንሳይ (frontend) ላይ እንዴት እንደሚታይ እነሆ ምሳሌ፡

![Frontend checkout registration form](/img/config/checkout-frontend-registration.png)

የሚሰሩት ነገር ቢኖር የግድ መሞላት ያለባቸውን መስኮች—ኢሜል፣ የተጠቃሚ ስም፣ የይለፍ ቃል ወዘተ—ሙሉ በሙሉ መሙላት እና ለዕቅዱ ክፍያ መፈጸም ወይም ነፃ ዕቅድ ወይም ክፍያ መረጃ ሳይሰበሰብ የሙከራ ጊዜ ያለው ክፍያ ዕቅድ እየመዘገቡ ከሆነ የኢሜል አድራሻቸውን ማረጋገጥ ነው።

በ"አመሰግናለሁ" (Thank you) ገጽ ላይ፣ የኢሜል አድራሻቸውን ማረጋገጥ እንደሚያስፈልጋቸው ወይም ድረ-ገጻቸው ቀድሞውኑ እንደተንቀሳቀሰ እና መጠቀም መጀመር እንደሚችሉ የሚያሳውቅ መልዕክት ያያሉ።

![Thank You page after registration](/img/frontend/registration-thank-you.png)

የኢሜል አድራሻ ማረጋገጫ የሚያስፈልግ ከሆነ፣ ወደ የኢሜል ሳጥናቸው በመሄድ የማረጋገጫ ሊንኩን መጫን ይኖርባቸዋል። የኢሜል አድራሻቸው ካልተረጋገጠ ድረ-ገጻቸው አይንቀሳቀስም።

በክፍያ ዕቅድ ከተመዘገቡ ወይም በኔትወርክዎ ላይ የኢሜል ማረጋገጫ የግድ ካልሆነ፣ የ చెክአውት ከተጠናቀቀ በኋላ ወዲያውኑ ድረ-ገጻቸው ይንቀሳቀሳል እና ወደ ዳሽቦርድ ለመግባት የሚያስችል ሊንክ ይታያል።

![Site activated with link to sign in to dashboard](/img/frontend/site-activated.png)

## ሊጋራ የሚችል ሊንክን መጠቀም፡ {#using-a-shareable-link}

በሊጋራ የሚችል ሊንክ በመጠቀም የመመዝገብ ሂደት በአጠቃላይ ከምዝገባ ፎርም ጋር ተመሳሳይ ነው፤ ብቸኛው ልዩነት ግን፣ ሊጋራ የሚችል ሊንክ ሲጠቀሙ፣ ደንበኞችዎ በ చెክአውት ፎርም ላይ ምርት ወይም የድረ-ገጽ አብነት ቀድሞ ተመርጦ ሊኖር ይችላል (በURL parameters አማካኝነት ምርቶችን እና አብነቶችን ቀድሞ መምረጥ የሚለው ክፍል ይመልከቱ) ወይም ምናልባትም የኩፖን ኮድ ሊጨመርበት ይችላል (በURL Parametersን መጠቀም የሚለው ክፍል ይመልከቱ)።

የምዝገባ ሂደቱ ተመሳሳይ ይሆናል፡ ስማቸውን፣ የተጠቃሚ ስም፣ የኢሜል አድራሻ፣ የድረ-ገጽ ስም እና ርዕስ ወዘተ መሙላት ይኖርባቸዋል... ነገር ግን ዕቅዱ ወይም የድረ-ገጽ አብነቱ ቀድሞ ተመርጦ ለእነሱ ይሆናል።

### በእጅ ክፍያዎችን በመጠቀም መመዝገብ፡ {#registering-using-manual-payments}

Ultimate Multisite ወይም አዳፕትዮን ኢንተግሬሽኖቹ የሚያቀርቡትን የPayPal፣ Stripe ወይም ሌላ ማንኛውንም የክፍያ গেትዌይ መጠቀም ባይፈልጉ፣ ለደንበኞችዎ በእጅ ክፍያዎችን መጠቀም ይችላሉ። በዚህ መንገድ፣ ደንበኞችዎ በኔትወርክዎ ላይ ከተመዘገቡ በኋላ በምትመርጡት የክፍያ አከፋፋይ ላይ እንዲከፍሉ የሚያስችል የክፍያ መጠየቂያ (invoice) መፍጠር ይችላሉ።

የምዝገባ ሂደቱ ከላይ ከተገለጸው ጋር በትክክል ተመሳሳይ ይሆናል፣ ነገር ግን በምዝገባ ገጽ ላይ ደንበኞችዎ ክፍያውን ለማጠናቀቅ ተጨማሪ መመሪያዎች በተሞላበት ኢሜል እንደሚቀበሉ የሚያሳይ መልዕክት ያያሉ።

![Manual payment message during registration](/img/frontend/registration-manual-notice.png)

እናም ምዝገባው ከተጠናቀቀ በኋላ፣ የሰጡትን የክፍያ መመሪያዎች ያያሉ (እና በኢሜል አድራሻቸው ላይ ይቀበላሉ)።

![Payment instructions shown after registration](/img/frontend/registration-payment-instructions.png)

የክፍያ መመሪያዎች የሚቀየሩት በ**Ultimate Multisite > Settings > Payments** ላይ **Manual** የክፍያ አማራጭ በማብራት ነው፡

![Manual payment toggle with payment instructions field](/img/config/manual-gateway-settings.png)

ደንበኞችዎ በእጅ ክፍያውን ከጨረሱ እና ማረጋገጫውን ከላኩ በኋላ፣ የደንበኛውን አባልነት እና ድረ-ገጽ ለማንቃት ክፍያውን **በእጅ ማረጋገጥ** አለብዎት።

ይህ ለማድረግ፣ ወደ **Ultimate Multisite > Payments** ይሂዱ እና የደንበኛውን ክፍያ ያግኙ። አሁንም **Pending** (በመጠባበቅ ላይ) ሁኔታ ሊያሳይ ይገባል።

![Payments list with pending manual payment](/img/admin/payments-list.png)

በክፍያ ቁጥሩ ላይ ይጫኑ እና ሁኔታውን ወደ **Completed** (ተጠናቅቋል) መቀየር ይችላሉ።

![Payment details page](/img/admin/payment-edit.png)

![Changing payment status to Completed](/img/admin/payment-status-completed.png)

ሁኔታውን ወደ **Completed** ከቀየሩ በኋላ፣ **Activate membership** (የአባልነት መብት ያንቀቃቃ) የሚል መልዕክት ማየት አለብዎት። የአባልነት መብት እና ከዚህ ደንበኛ ጋር የተያያዘውን ድረ-ገጽ ለማንቃት ይህንን አማራጭ **አብሩ**። ከዚያም፣ **Save Payment** (ክፍያውን አስቀምጥ) የሚለውን ይጫኑ።

![Activate membership toggle and Save Payment button](/img/admin/payment-activate-membership.png)

ደንበኛዎ አሁን ወደ ዳሽቦርድ እና የሰበሰበባቸውን ሁሉም ባህሪያት መድረስ መቻል አለበት።
