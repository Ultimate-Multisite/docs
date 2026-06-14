---
title: ገንዘብ ማግኘት
sidebar_position: 15
_i18n_hash: 4d43609c920fa8085a3cea69343ad2fa
---
# ክፍያ መቀበል (Getting Paid) (v2)

_**አስፈላጊ ማሳሰቢያ፡ ይህ ጽሑፍ የሚያመለክተው Ultimate Multisite version 2.xን ነው።**_

Ultimate Multisite በራሱ የ membership እና የክፍያ ሥርዓት አለው። የክፍያ ሥርዓታችን እንዲሰራ፣ በኢ-ኮሜርስ ውስጥ በብዛት ጥቅም ላይ የዋሉ የክፍያ መግቢያዎችን (payment gateways) አካተናል። በUltimate Multisite ውስጥ ያሉ መደበኛ የክፍያ መግቢያዎች _Stripe_፣ _PayPal_ እና በእጅ የሚደረግ ክፍያ (Manual Payment) ናቸው። በተጨማሪም፣ የየራሳቸውን add-ons በመጫን ክፍያ ለመቀበል _WooCommerce_፣ _GoCardless_ እና _Payfast_ መጠቀም ይችላሉ።

## መሰረታዊ ቅንብሮች (Basic Settings)

የማንኛውንም የክፍያ መግቢያ (payment gateway) ቅንብሮችን በUltimate Multisite payment settings ውስጥ ማዋቀር ይችላሉ። ወደ **Ultimate Multisite menu > Settings > Payments** በመሄድ ማግኘት ይችላሉ።

![Payments settings page in Ultimate Multisite showing the Payments panel](/img/config/payments-settings-page.png)

የክፍያ መግቢያዎን ከመቅረጽዎ በፊት፣ ማዋቀር የሚችሉትን መሰረታዊ የክፍያ ቅንብሮች ላይ እባክዎ አይተው ይወቁ፦

**Force auto-renew:** ይህ የሚያረጋግጠው ተጠቃሚው የመረጠውን የክፍያ ጊዜ (billing frequency) መሠረት በማድረግ ክፍያው በየክፍያ ጊዜው በራስ-ሰር እንደሚደገም ነው።

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

**Allow trials without payment method:** ይህ አማራጭ ሲበራ፣ ተጠቃሚዎ በምዝገባ ሂደት ውስጥ ምንም የፋይናንስ መረጃ ማስገባት አይጠበቅበትም። ይህ የሚያስፈልገው የሙከራ ጊዜው ካለቀቀ በኋላ ብቻ ነው።

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Send invoice on payment confirmation:** ይህ ክፍያ ከተረጋገጠ በኋላ ደረሰኝ (invoice) መላክ አለመላክ የሚል አማራጭ ይሰጥዎታል። ተጠቃሚዎች የክፍያ ታሪካቸውን በየsubsite dashboard שלהם ማግኘት እንደሚችሉ ልብ ይበሉ። ይህ አማራጭ ለ Manual Gateway አይሠራም።

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Invoice numbering scheme:** እዚህ፣ የክፍያ ማጣቀሻ ኮድ (payment reference code) ወይስ ተከታታይ ቁጥር ሥርዓት (sequential number scheme) መምረጥ ይችላሉ። ለደረሰኞችዎ የክፍያ ማጣቀሻ ኮድ ለመጠቀም ከመረጡ፣ ምንም ነገር ማዋቀር አያስፈልግዎትም። ተከታታይ ቁጥር ሥርዓት ለመጠቀም ከመረጡ፣ **የሚቀጥለው የደረሰኝ ቁጥር (next invoice number)** (ይህ ቁጥር በሚቀጥለው በስርዓቱ በሚፈጠረው ደረሰኝ ላይ እንደ ደረሰኝ ቁጥር ጥቅም ላይ ይውላል። አዲስ ደረሰኝ በሚፈጠርበት ጊዜ አንድ ይጨምራል። ወደ አንድ የተወሰነ ዋጋ ለመቀየር እና የደረሰኝ ተከታታይ ቁጥርን ለመቀየር ሊለውጡት እና ማስቀመጥ ይችላሉ) እና **የደረሰኝ ቁጥር ቅድመ-ጽሑፍ (invoice number prefix)** ያስፈልግዎታል።

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## የ Gateway ቦታ:

የክፍያ መግቢያዎችን በአንድ ገጽ ላይ ( **Ultimate Multisite > Settings > Payments** ) ማዋቀር ይችላሉ። ከ **active payment gateways** በታች፣ የሚከተሉትን ማየት ይችላሉ፦ _Stripe_፣ _Stripe_ _Checkout_፣ _PayPal_ እና _Manual_።

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

እያንዳንዱ የክፍያ መግቢያ (payment gateway) እንዴት ማዋቀር እንደሚቻል የሚያሳይ ልዩ ጽሑፍ አለን፣ ይህም ከታች ባሉት ሊንኮች ላይ ማግኘት ይችላሉ።

የክፍያ ዝርዝሮችን መመልከት እና ማርትዕ ይችላሉ፦

![Payment edit interface](/img/admin/payment-edit.png)

የክፍያ ማርትዕ ገጽ ሙሉ እይታ ይኸው፦

![Payment edit full interface](/img/admin/payment-edit-full.png)

የክፍያ መግቢያዎች ቅንብሮች ሙሉ እይታም ይኸው፦

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**የStripe gatewayን ማዋቀር**

**የPayPal gatewayን ማዋቀር**

**በእጅ የሚደረግ ክፍያ ማዋቀር**

አሁን፣ _WooCommerce_፣ _GoCardless_ ወይም _Payfast_ን እንደ የክፍያ መግቢያዎ (payment gateway) መጠቀም ከፈለጉ፣ የየራሳቸውን **add-ons መጫን እና ማዋቀር** ያስፈልግዎታል።

### የWooCommerce add-onን ስለመጫን:

_Stripe_ እና _PayPal_ በአንዳንድ አገሮች የማይገኙ መሆናቸውን እና ይህ ደግሞ የUltimate Multisite ተጠቃሚዎችን የፕልጊኑን ውጤታማ አጠቃቀም የሚገድብ ወይም የሚያደናቅፍ መሆኑን እናውቃለን። ስለዚህ፣ በጣም ታዋቂ የኢ-ኮሜርስ ፕልጊን የሆነውን _WooCommerce_ ለማካተት add-on ፈጥረናል (add-on)። በዓለም ዙሪያ ያሉ ገንቢዎች የተለያዩ የክፍያ መግቢያዎችን ለማካተት add-ons ፈጥረዋል። ይህንን በመጠቀም፣ ከUltimate Multisite የክፍያ ሥርዓት ጋር ሊጠቀሙባቸው የሚችሉ የክፍያ መግቢያዎችን ለማስፋት ተጠቅመናል።

_**አስፈላጊ፡ Ultimate Multisite: WooCommerce Integration የሚለው Add-on በዋናው ድረ-ገጽዎ ላይ ቢያንስ WooCommerce መ활성화 መሆኑን ይጠይቃል።**_

በመጀመሪያ፣ እባክዎ ወደ add-ons ገጹ ይሂዱ። ወደ **Ultimate Multisite > Settings** በመሄድ ማግኘት ይችላሉ። **Add-ons** የሚል ሠንጠረዥ (table) ማየት አለብዎት። በ **Check our Add-ons** ላይ ይጫኑ።

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

በ **Check our Add-ons** ላይ ከጫኑ በኋላ፣ ወደ add-ons ገጹ ይመራሉ። እዚህ ላይ ሁሉንም የUltimate Multisite add-ons ማግኘት ይችላሉ። በ **Ultimate Multisite: WooCommerce Integration** add-on ላይ ይጫኑ።

![Add-ons page listing Ultimate Multisite add-ons including WooCommerce Integration](/img/addons/addons-page.png)

የadd-on ዝርዝሮች ባለው መስኮት ይከፈታል። በ **Install Now** ላይ ይጫኑ።

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Integration add-on details dialog with Install Now button -->

ከመጫኑ በኋላ፣ ወደ plugins ገጹ ይመራሉ። እዚህ ላይ በ **Network Activate** ላይ በመጫን የWooCommerce add-on በኔትዎርክዎ ላይ ይንቀሳቀሳል።

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the WooCommerce Integration add-on -->

ከማንቃት በኋላ፣ በድረ-ገጽዎ ላይ የWooCommerce ፕልጊን ካልተጫነ እና ካልተንቀሳቀሰ፣ የማስታወሻ መልዕክት ይቀበላሉ።

<!-- Screenshot unavailable: Admin notice reminding the administrator to install and activate the WooCommerce plugin -->

ስለ WooCommerce Integration add-on ተጨማሪ ለማንበብ፣ **እዚህ ይጫኑ**።

### የGoCardless add-onን ስለመጫን:

የ_GoCardless_ add-onን የመጫን ደረጃዎች ከ_WooCommerce_ add-on ጋር በጣም ተመሳሳይ ናቸው። እባክዎ ወደ add-ons ገጹ በመሄድ **Ultimate Multisite: GoCardless Gateway** add-on ይምረጡ።

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

የadd-on መስኮት ይከፈታል። በ **Install Now** ላይ ይጫኑ።

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

ከመጫኑ በኋላ፣ ወደ plugins ገጹ ይመራሉ። እዚህ ላይ በ **Network Activate** ላይ በመጫን የ_GoCardless_ add-on በኔትዎርክዎ ላይ ይንቀሳቀሳል።

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

ስለ _GoCardless_ gateway እንዴት መጀመር እንደሚችሉ ለማወቅ፣ **ይህንን ጽሑፍ ያንብቡ**።

### የPayfast add-onን ስለመጫን:

ወደ add-ons ገጹ በመሄድ **Ultimate Multisite: Payfast Gateway** add-on ይምረጡ።

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

የadd-on መስኮት ይከፈታል። በ **Install Now.** ላይ ይጫኑ።

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

ከመጫኑ በኋላ፣ ወደ plugins ገጹ ይመራሉ። እዚህ ላይ በ **Network Activate** ላይ በመጫን የ_Payfast_ add-on በኔትዎርክዎ ላይ ይንቀሳቀሳል።

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->
