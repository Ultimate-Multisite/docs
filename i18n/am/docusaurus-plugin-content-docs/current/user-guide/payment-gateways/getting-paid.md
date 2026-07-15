---
title: ክፍያ መቀበል
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# ክፍያ መቀበል (v2)

_**አስፈላጊ ማስታወሻ፦ ይህ ጽሑፍ የUltimate Multisite ስሪት 2.xን ይመለከታል።**_

Ultimate Multisite አብሮ የተገነባ የአባልነት እና የክፍያ አሰባሰብ ስርዓት አለው። የእኛ የክፍያ አሰባሰብ ስርዓት እንዲሠራ፣ በኢ-ኮሜርስ ውስጥ በብዛት የሚጠቀሙባቸውን የክፍያ መግቢያዎች አዋህደናል። በUltimate Multisite ውስጥ ያሉ ነባሪ የክፍያ መግቢያዎች _Stripe_ , _PayPal_ , እና Manual Payment ናቸው። እንዲሁም _WooCommerce_ , _GoCardless_ እና _Payfast_ ተዛማጅ add-ons በመጫን ክፍያዎችን ለመቀበል መጠቀም ይችላሉ።

## መሠረታዊ ቅንብሮች {#basic-settings}

ከእነዚህ የክፍያ መግቢያዎች ማንኛውንም በUltimate Multisite የክፍያ ቅንብሮች ስር ማዋቀር ይችላሉ። ወደ **Ultimate Multisite ምናሌ > Settings > Payments** በመሄድ ማግኘት ይችላሉ።

![በUltimate Multisite ውስጥ የPayments ፓነልን የሚያሳይ የክፍያዎች ቅንብሮች ገጽ](/img/config/payments-settings-page.png)

የክፍያ መግቢያዎን ከማዘጋጀትዎ በፊት፣ ሊያዋቅሯቸው የሚችሉትን መሠረታዊ የክፍያ ቅንብሮች እባክዎ ይመልከቱ፦

**ራስ-ሰር እንዲታደስ አስገድድ** **፦** ይህ ተጠቃሚው በመረጠው የክፍያ ድግግሞሽ መሠረት በእያንዳንዱ የክፍያ ዑደት መጨረሻ ክፍያው በራስ-ሰር እንዲደገም ያረጋግጣል።

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 ራስ-ሰር መታደስ የነቃበትን ተደጋጋሚ አባልነት ከማስቀመጡ በፊት ንቁው መግቢያ እንደገና ለማደስ የሚጠቅም ተጠቃሚ ማረጋገጫ እንዳለው ይፈትሻል። የእድሳት ማረጋገጫ የመግቢያ ምዝገባ፣ የክፍያ ስምምነት፣ የተቀመጠ vault token፣ ወይም ተመጣጣኝ እንደገና ሊጠቀሙበት የሚችሉ የክፍያ ዘዴ ሊሆን ይችላል። መግቢያው ሊጠቀሙበት የሚችሉ ማረጋገጫ እንደሌለ ካሳወቀ፣ Ultimate Multisite አባልነቱን ያስቀምጣል ነገር ግን ራስ-ሰር መታደስን ያጠፋል እና አስተዳዳሪ ወይም የድጋፍ ፍሰት ከእድሳት ቀን በፊት ደንበኛውን ክፍያውን እንደገና እንዲፈቅድ መጠየቅ እንዲችል የጎደለውን ማረጋገጫ ሁኔታ ይመዘግባል።

ይህ መግቢያው አንድ-ጊዜ ክፍያዎችን ብቻ ማሰባሰብ ሲችል አባልነት ራስ-ሰር እንደሚታደስ እንዳይታይ ይከላከላል። የመግቢያ add-ons ተደጋጋሚ checkouts እንደገና ሊጠቀሙበት የሚችሉ ማረጋገጫ እንደሚያስቀምጡ ማረጋገጥ አለባቸው፣ በተለይም መግቢያው ሁለቱንም አንድ-ጊዜ መያዝ እና vaulted/subscription የክፍያ ሁነቶችን ሲደግፍ።

**የክፍያ ዘዴ ያለ ሙከራዎችን ፍቀድ** **፦** ይህ አማራጭ ሲነቃ ደንበኛዎ በምዝገባ ሂደት ወቅት ምንም የፋይናንስ መረጃ መጨመር አይኖርበትም። ይህ የሚያስፈልገው የሙከራ ጊዜው ካለቀ በኋላ ብቻ ነው።

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**ክፍያ ከተረጋገጠ በኋላ ደረሰኝ ላክ፦** ይህ ከክፍያ በኋላ ደረሰኝ መላክ ወይም አለመላክ የሚመርጡበትን አማራጭ ይሰጥዎታል። ተጠቃሚዎች በsubsite dashboard ስር የክፍያ ታሪካቸውን ማግኘት እንደሚችሉ ያስታውሱ። ይህ አማራጭ ለManual Gateway አይተገበርም።

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**የደረሰኝ ቁጥር አሰጣጥ እቅድ፦** እዚህ፣ የክፍያ ማጣቀሻ ኮድ ወይም ተከታታይ የቁጥር እቅድ መምረጥ ይችላሉ። ለደረሰኞችዎ የክፍያ ማጣቀሻ ኮድ መጠቀም ከመረጡ፣ ምንም ማዋቀር አያስፈልግዎትም። ተከታታይ የቁጥር እቅድ መጠቀም ከመረጡ፣ **ቀጣይ የደረሰኝ ቁጥር** (ይህ ቁጥር በስርዓቱ ላይ ለሚፈጠረው ቀጣይ ደረሰኝ እንደ ደረሰኝ ቁጥር ይጠቀማል። አዲስ ደረሰኝ በተፈጠረ ቁጥር በአንድ ይጨምራል። የደረሰኝ ተከታታይ ቁጥርን ወደ ተወሰነ እሴት ለመጀመር መቀየር እና ማስቀመጥ ይችላሉ) እና **የደረሰኝ ቁጥር ቅድመ-ቅጥያ** ማዋቀር ያስፈልግዎታል።

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## መግቢያዎቹን የት ማግኘት እንደሚቻል፦ {#where-to-find-the-gateways}

የክፍያ መግቢያዎቹን በተመሳሳይ ገጽ ( **Ultimate Multisite > Settings > Payments**) ላይ ማዘጋጀት ይችላሉ። በቀጥታ ከ**ንቁ የክፍያ መግቢያዎች** በታች፣ ይህን ማየት ይችላሉ፦ _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ እና _Manual_።

![Stripe፣ Stripe Checkout፣ PayPal እና Manualን የሚዘረዝር ንቁ የክፍያ መግቢያዎች ክፍል](/img/config/payments-active-gateways.png)

እያንዳንዱን የክፍያ መግቢያ ለማዘጋጀት የሚመራዎትን ደረጃዎች የሚያሳይ የተለየ ጽሑፍ አለን፣ እሱንም ከታች ባሉት አገናኞች ማግኘት ይችላሉ።

የክፍያ ዝርዝሮችን ማየት እና ማርትዕ ይችላሉ፦

![የክፍያ ማርትያ በይነገጽ](/img/admin/payment-edit.png)

የክፍያ ማርትያ ገጹ ሙሉ እይታ ይኸውና፦

![የክፍያ ማርትያ ሙሉ በይነገጽ](/img/admin/payment-edit-full.png)

እንዲሁም የክፍያ መግቢያዎች ቅንብሮች ሙሉ እይታ ይኸውና፦

![የክፍያ መግቢያዎች ቅንብሮች ሙሉ ገጽ](/img/config/settings-payments-gateways-full.png)

**የStripe መግቢያን ማዘጋጀት**

**የPayPal መግቢያን ማዘጋጀት**** **

**በእጅ የሚደረጉ ክፍያዎችን ማዘጋጀት**

አሁን፣ _WooCommerce_ , _GoCardless_ ወይም _Payfast_ እንደ የክፍያ መግቢያዎ መጠቀም ከፈለጉ፣ **add-ons መጫን እና ማዋቀር** ያስፈልግዎታል።

### የWooCommerce add-onን እንዴት መጫን እንደሚቻል፦ {#how-to-install-the-woocommerce-add-on}

_Stripe_ እና _PayPal_ በአንዳንድ አገሮች የማይገኙ መሆናቸውን እንረዳለን፣ ይህም የUltimate Multisite ተጠቃሚዎች የእኛን plugin በውጤታማነት እንዳይጠቀሙ ይገድባል ወይም ያደናቅፋል። ስለዚህ _WooCommerce,_ ከሚባለው በጣም ታዋቂ የኢ-ኮሜርስ plugin ጋር ለማዋሃድ add-on ፈጠርን። በዓለም ዙሪያ ያሉ አበልጻጊዎች የተለያዩ የክፍያ መግቢያዎችን ከእሱ ጋር ለማዋሃድ add-ons ፈጥረዋል። ከUltimate Multisite የክፍያ አሰባሰብ ስርዓት ጋር ሊጠቀሙባቸው የሚችሉትን የክፍያ መግቢያዎች ለማስፋት ይህንን ተጠቅመናል።

_**አስፈላጊ፦** Ultimate Multisite: WooCommerce Integration WooCommerce ቢያንስ በዋና ጣቢያዎ ላይ እንዲነቃ ይፈልጋል።_

በመጀመሪያ፣ እባክዎ ወደ add-ons ገጽ ይሂዱ። ወደ **Ultimate Multisite > Settings** በመሄድ ማግኘት ይችላሉ። የ**Add-ons** ሰንጠረዥ ማየት አለብዎት። **Check our Add-ons** ላይ ጠቅ ያድርጉ።

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

**Check our Add-ons** ላይ ከጠቅ ካደረጉ በኋላ፣ ወደ add-ons ገጽ ይዛወራሉ። እዚህ ሁሉንም የUltimate Multisite add-ons ማግኘት ይችላሉ። በ**Ultimate Multisite: WooCommerce Integration** add-on ላይ ጠቅ ያድርጉ።

![WooCommerce Integrationን ጨምሮ የUltimate Multisite add-onsን የሚዘረዝር የAdd-ons ገጽ](/img/addons/addons-page.png)

መስኮት ከተጨማሪው ዝርዝሮች ጋር ይታያል። በቀላሉ **አሁን ጫን** ላይ ጠቅ ያድርጉ።

<!-- የማያ ገጽ ምስል አይገኝም፦ Ultimate Multisite WooCommerce Integration ተጨማሪ ዝርዝሮች መገናኛ ከአሁን ጫን አዝራር ጋር -->

መጫኑ ከተጠናቀቀ በኋላ፣ ወደ plugins ገጽ ይመራሉ። እዚህ፣ በቀላሉ **በአውታረ መረብ ደረጃ አግብር** ላይ ጠቅ ያድርጉ፣ እና WooCommerce ተጨማሪው በአውታረ መረብዎ ላይ ይነቃል።

<!-- የማያ ገጽ ምስል አይገኝም፦ Plugins ገጽ ከWooCommerce Integration ተጨማሪ የበአውታረ መረብ ደረጃ አግብር አገናኝ ጋር -->

ካነቃቁት በኋላ፣ አሁንም WooCommerce plugin በድር ጣቢያዎ ላይ ካልተጫነ እና ካልነቃ፣ ማስታወሻ ይደርስዎታል።

<!-- የማያ ገጽ ምስል አይገኝም፦ አስተዳዳሪው WooCommerce pluginን እንዲጭን እና እንዲያነቃ የሚያስታውስ የአስተዳደር ማሳወቂያ -->

ስለ WooCommerce Integration ተጨማሪ ተጨማሪ ለማንበብ፣ **እዚህ ጠቅ ያድርጉ**።

### የGoCardless ተጨማሪን እንዴት መጫን እንደሚቻል፦ {#how-to-install-the-gocardless-add-on}

_GoCardless_ ተጨማሪን ለመጫን ያሉት ደረጃዎች ከ_WooCommerce_ ተጨማሪ ጋር በጣም ተመሳሳይ ናቸው። እባክዎ ወደ ተጨማሪዎች ገጽ ይሂዱ እና **Ultimate Multisite: GoCardless Gateway** ተጨማሪን ይምረጡ።

<!-- የማያ ገጽ ምስል አይገኝም፦ የተጨማሪዎች ገጽ ከተጎላው Ultimate Multisite GoCardless Gateway ተጨማሪ ጋር -->

የተጨማሪው መስኮት ይታያል። **አሁን ጫን** ላይ ጠቅ ያድርጉ።

<!-- የማያ ገጽ ምስል አይገኝም፦ Ultimate Multisite GoCardless Gateway ተጨማሪ ዝርዝሮች መገናኛ ከአሁን ጫን አዝራር ጋር -->

መጫኑ ከተጠናቀቀ በኋላ፣ ወደ plugins ገጽ ይመራሉ። እዚህ፣ በቀላሉ **በአውታረ መረብ ደረጃ አግብር** ላይ ጠቅ ያድርጉ፣ እና _GoCardless_ ተጨማሪው በአውታረ መረብዎ ላይ ይነቃል።

<!-- የማያ ገጽ ምስል አይገኝም፦ Plugins ገጽ ከGoCardless Gateway ተጨማሪ የበአውታረ መረብ ደረጃ አግብር አገናኝ ጋር -->

በ_GoCardless_ gateway እንዴት መጀመር እንደሚቻል ለመማር፣ **ይህን ጽሑፍ ያንብቡ**።

### የPayfast ተጨማሪን እንዴት መጫን እንደሚቻል፦ {#how-to-install-the-payfast-add-on}

ወደ ተጨማሪዎች ገጽ ይሂዱ እና **Ultimate Multisite: Payfast Gateway** ተጨማሪን ይምረጡ።

<!-- የማያ ገጽ ምስል አይገኝም፦ የተጨማሪዎች ገጽ ከተጎላው Ultimate Multisite Payfast Gateway ተጨማሪ ጋር -->

የተጨማሪው መስኮት ይታያል። **አሁን ጫን።** ላይ ጠቅ ያድርጉ።

<!-- የማያ ገጽ ምስል አይገኝም፦ Ultimate Multisite Payfast Gateway ተጨማሪ ዝርዝሮች መገናኛ ከአሁን ጫን አዝራር ጋር -->

መጫኑ ከተጠናቀቀ በኋላ፣ ወደ plugins ገጽ ይመራሉ። እዚህ፣ በቀላሉ **በአውታረ መረብ ደረጃ አግብር** ላይ ጠቅ ያድርጉ፣ እና _Payfast_ ተጨማሪው በአውታረ መረብዎ ላይ ይነቃል።

<!-- የማያ ገጽ ምስል አይገኝም፦ Plugins ገጽ ከPayfast Gateway ተጨማሪ የበአውታረ መረብ ደረጃ አግብር አገናኝ ጋር -->
