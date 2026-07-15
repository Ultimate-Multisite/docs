---
title: የPayPal ዝግጅት
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# የPayPal Gateway ማዋቀር (v2)

_**ጠቃሚ ማሳሰቢያ፡ ይህ ጽሑፍ የሚያመለክተው Ultimate Multisite version 2.xን ነው።**_

በየክፍያ ማዋቀሪያ ገጽ ላይ እስከ አራት የክፍያ ዘዴዎችን ማብራት ይችላሉ፡ Stripe፣ Stripe Checkout፣ PayPal እና Manual። በዚህ ጽሑፍ ውስጥ፣ ከ**PayPal** ጋር እንዴት መዋሃድ እንደሚቻል እንመለከታለን።

ልክ እንደ Stripe፣ PayPal ለኦንላይን ክፍያዎች በስፋት ጥቅም ላይ ይውላል፣ በተለይም በWordPress ድረ-ገጾች ላይ። ይህ ጽሑፍ በኔትዎርክዎ ላይ እንደ ክፍያ ዘዴ እንዴት PayPalን መጠቀም እንደሚችሉ ይመራዎታል።

ይህ ውህደትን ለማድረግ የሚያስፈልገውን የAPI መረጃ (credential) ለማግኘት **PayPal Business account** መኖርዎ እንዳለብዎ ልብ ይበሉ።

## በኔትዎርክዎ ላይ PayPalን ማብራት {#enabling-paypal-on-your-network}

በኔትዎርክዎ ላይ እንደ ተገኝ የክፍያ ዘዴ ለማብራት፣ ወደ **Ultimate Multisite > Settings > Payments** ትር ወዳር በመሄድ ከPayPal አጠገብ ባለው ሳጥን ላይ ምልክት ያድርጉ።

![Enabling PayPal in active payment gateways](/img/config/settings-payment-gateways.png)

## በመመሪያ የተሰጠውን የማዋቀር አስማሚ መጠቀም {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 በክፍያ መግቢያ ማዋቀሪያ ቅንብሮች ውስጥ መመሪያ የተሰጠ የPayPal የማዋቀር አስማሚ (setup wizard) አክሏል። PayPalን ከከፈቱ በኋላ፣ በ**Ultimate Multisite > Settings > Payments** ላይ ባለው አስማሚ ውስጥ በመጠቀም፣ መግቢያውን እንዴት ማገናኘት እንደሚፈልጉ መምረጥ እና ከመስቀሉ በፊት ምን ዓይነት መረጃዎች እንደሚያስፈልጉ ማረጋገጥ ይችላሉ።

አስማሚው ሁለት የማዋቀር መንገዶችን ይደግፋል፡

* **በእጅ መረጃ ማስገቢያ (Manual credential entry)**: ቀድሞውንም የPayPal API መረጃዎች ካሉዎት፣ የOAuth ማዋቀር ለखाታዎ ካልተገኘ፣ ወይም መረጃዎቹን በራስዎ ከPayPal መቅዳት ቢመርጡ ይህን መንገድ ይጠቀሙ። የAPI Username፣ የAPI Password፣ እና የAPI Signatureን በPayPal መስኮች ውስጥ ያስገቡ፣ ከዚያም የክፍያ ቅንብሮችን ያስቀምጡ።
* **የOAuth ግንኙነት በር (OAuth connection gate)**: ይህን መንገድ የሚጠቀሙት የOAuth አማራጩ ከተገኘ እና ለትዕዛዙ (install) ከተበራከ ብቻ ነው። አስማሚው የOAuth ፍሰት (flow) በఫీቸር ባግ (feature flag) ጀርባ ስለሚታይ፣ ባግ የሌላቸው ኔትዎርክስ በእጅ መረጃ ማስገቢያ መስኮችን መጠቀም ይቀጥላሉ።

በአስማሚው ውስጥ የOAuth አማራጭ ካላዩ፣ ከታች ያለውን የእጅ መረጃ ማስገቢያ ሂደት ይጨርሱ። ይህ መግቢያ ከቀደምት Ultimate Multisite 2.x ስሪቶች ጋር ተመሳሳይ የPayPal Business API መረጃዎችን ይጠቀማል።

## የPayPal API መረጃዎችን ማግኘት {#getting-the-paypal-api-credentials}

PayPal እንደ የክፍያ መግቢያ ከተበራከ በኋላ፣ ለPayPal API **Username**፣ ለPayPal API **Password** እና ለPayPal API **Signature** መስኮቶችን መሙላት ያስፈልግዎታል።

ይህንን ለማግኘት ወደ PayPal [Live](https://www.paypal.com/home) ወይም [Sandbox](https://www.sandbox.paypal.com/home) አካውንት በመግባት መጀመር ይችላሉ።

(ክፍያዎችን ለመፈተሽ እና መግቢያው በትክክል ተዋቅሯል ለማየት **sandbox mode** መጠቀም እንደሚችሉ ያስታውሱ። ተዛማጅ የሆነውን ክፍል ብቻ ያብሩት።)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

ለPayPal አካውንትዎ የAPI Signature ወይም የCertificate መረጃዎችን (credentials) ለማጠየቅ፡

  1. ወደ [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) ይሂዱ።

  2. በ**API access** ክፍል ውስጥ፣ **Update** የሚለውን ይጫኑ።
![PayPal Account Settings with API access section](/img/config/settings-payment-gateways.png)

  3. በ**NVP/SOAP API integration (Classic)** ስር፣ **Manage API credentials** የሚለውን ይጫኑ።
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * ቀድሞ የAPI Signature ወይም የCertificate መረጃ ከፈጠሩ፣ መረጃዎቹን ማግኘት የሚችሉበት ወደ አንድ ገጽ ይላካሉ።

     * _**ማሳሰቢያ:** የPayPal አካውንትዎን እንዲያረጋግጡ ከተጠየቁ፣ በስክሪኑ ላይ ያሉትን መመሪያዎች ይከተሉ።_

  4. ከሚከተሉት አማራጮች *አንዱን* ይምረጡ፣ ከዚያም **Agree and Submit** የሚለውን ይጫኑ።

     * **Request API Signature** – ለAPI Signature authentication ይምረጡ።

     * **Request API Certificate** – ለAPI Certificate authentication ይምረጡ።

  5. PayPal የAPI መረጃዎችን እንደሚከተለው ይፈጥራል፡
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** የAPI Username፣ የAPI Password እና Signatureን ያካትታሉ፣ ይህም ጊዜ የማይሽረው ነው። እነዚህ እሴቶች በደህንነት ለመጨመር በነባሪነት ተደብቀዋል። እነሱን ለማብራት እና ለማጥፋት **Show/Hide** የሚለውን ይጫኑ። ሲጨርሱ፣ **Done** የሚለውን ይጫኑ።

     * **API Certificate credentials** የAPI Username፣ የAPI Password እና Certificateን ያካትታሉ፣ ይህም ከሦስት ዓመት በኋላ በራስ-ሰር ጊዜው ያበቃል። የAPI Certificateን በዴስክቶፕዎ ላይ ለማስቀመጥ **Download Certificate** የሚለውን ይጫኑ።

ይህ ብቻ ነው፣ የPayPal ክፍያ ውህደትዎ ተጠናቅቋል!

ስለ PayPal ቅንብሮች ጥያቄዎች ካሉዎት፣ የPayPalን [Help Center](https://www.paypal.com/br/smarthelp/home) ማማከር ይችላሉ።
