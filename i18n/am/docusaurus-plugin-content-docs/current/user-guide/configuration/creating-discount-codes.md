---
title: የቅናሽ ኮዶችን መፍጠር
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# የቅናሽ ኮዶችን መፍጠር (v2)

_**ጠቃሚ ማስታወሻ፡ ይህ ጽሑፍ የሚያመለክተው Ultimate Multisite version 2.xን ነው።**_

በUltimate Multisite አማካኝነት ለደንበኞችዎ የደንበኝነት ምዝገባ ላይ ቅናሽ ለመስጠት የቅናሽ ኮዶችን መፍጠር ይችላሉ። እናም መፍጠር በጣም ቀላል ነው!

## የቅናሽ ኮዶችን መፍጠር እና ማርትዕ {#creating-and-editing-discount-codes}

የቅናሽ ኮድ ለመፍጠር ወይም ለማርትዕ፣ ወደ **Ultimate Multisite > Discount Codes** ይሂዱ።

![Discount codes list — empty state before any codes exist](/img/config/discount-codes-empty.png)

እዚያም ቀድሞ የፈጠሯቸውን የቅናሽ ኮዶች ዝርዝር ያያሉ።

አዲስ ኩፖን ለመፍጠር በ**Add Discount Code** ላይ ጠቅ በማድረግ ይችላሉ፣ ወይም በላዩ ላይ በማንቀሳቀስ እና **Edit** በማንጠቅቅ ያሉዎትን ማርትዕ ይችላሉ።

![Discount codes list with hover actions showing Edit and Delete links](/img/config/discount-codes-list-hover.png)

![Add Discount Code button in the page header](/img/config/discount-codes-add-button.png)

የኩፖን ኮድዎን ለመፍጠር ወይም ለማርትዕ ወደ ገጹ ይመራሉ። በዚህ ምሳሌ አዲስ እንፈቅዳለን።

![Discount code edit page with all sections visible](/img/config/discount-code-edit.png)

እዚህ ያሉትን ቅንብሮች እንመልከት፦

**Enter Discount Code:** ይህ የቅናሽ ኮድ ስም ብቻ ነው። ይህ ደንበኞች በቼክአውት ፎርም ላይ የሚያስፈልጋቸው ኮድ አይደለም።

**Description:** እዚህ ላይ ይህ ኩፖን ምን እንደሆነ በአጭሩ መግለጽ ይችላሉ።

![Discount code name and description fields at the top of the edit page](/img/config/discount-code-description.png)

የቅናሽ ኮዱን እንደ ንቁ (active) ወይም እንቅስቃሴ-አልባ (inactive) ሁኔታም ማየት ይችላሉ፦

![Discount code active status](/img/config/discount-code-active.png)

**Coupon code:** እዚህ ላይ ደንበኞች በቼክአውት ጊዜ ማስገባት የሚያስፈልጋቸው ኮድ ይወስናሉ።

![Coupon code field where customers enter the code at checkout](/img/config/discount-code-coupon-field.png)

**Discount:** እዚህ ላይ ለቅናሽ ኮድዎ **መቶኛ** ወይም **ቋሚ የገንዘብ መጠን** ማስቀመጥ ይችላሉ።

![Discount amount setting with percentage or fixed-amount dropdown](/img/config/discount-code-amount.png)

**Apply to renewals:** ይህ አማራጭ ተበልጥ ካልሆነ፣ ይህ የቅናሽ ኮድ ለ**የመጀመሪያ ክፍያ** ብቻ ይተገበራል። የተቀሩ ክፍያዎች ምንም ቅናሽ አይኖራቸውም። ይህ አማራጭ ተበልጥ ከሆነ ደግሞ፣ የቅናሽ ኮዱ ለሁሉም የወደፊት ክፍያዎች ትክክለኛ ይሆናል።

**Setup fee discount:** ይህ አማራጭ ተበልጥ ካልሆነ፣ ኩፖን ኮዱ ለትዕዛዙ **የመቅረጽ ክፍያ (setup fee)** ምንም ቅናሽ አይሰጥም። ይህ አማራጭ ተበልጥ ከሆነ፣ ይህ ኩፖን ኮድ ለፕላንዎ የመቅረጽ ክፍያ ምን ያህል ቅናሽ (መቶኛ ወይም ቋሚ መጠን) እንደሚሰጥ መወሰን ይችላሉ።

![Apply to renewals and setup fee discount toggle options](/img/config/discount-code-renewals.png)

**Active:** ይህ የኩፖን ኮድ በሰዋሰዋዊ መንገድ (manually) ማብራት ወይም ማጥፋት።

![Active toggle to manually enable or disable the discount code](/img/config/discount-code-active.png)

በ**Advanced Options** ስር፣ የሚከተሉትን ቅንብሮች አግኝተናል፦

![Discount code advanced options](/img/config/discount-code-advanced.png)

**Limit uses:**

  * **Uses:** እዚህ የቅናሽ ኮዱ ስንት ጊዜ ጥቅም ላይ እንደዋለ እየት ማየት ይችላሉ።

  * **Max uses:** ይህ ተጠቃሚዎች የቅናሽ ኮዱን ሊጠቀሙ የሚችሉበትን ጊዜ ይገድባል። ለምሳሌ፣ እዚህ 10 ብታስቀምጡ፣ ኩፖኑ 10 ጊዜ ብቻ ሊውል ይችላል። ከዚህ ገደብ በኋላ፣ የኩፖን ኮዱ আর ሊውል አይችልም።

![Limit uses setting with current uses count and max uses field](/img/config/discount-code-limit-uses.png)

**Start & expiration dates:** እዚህ ላይ ለኩፖንዎ የመጀመርያ ቀን እና/ወይም የማብቂያ ቀን የመጨመር አማራጭ ይኖርዎታል።

![Start and expiration date fields for scheduling the discount code](/img/config/discount-code-dates.png)

**Limit products:** የ**Select products** የሚለውን አማራጭ ካበሩ፣ ሁሉም ምርቶችዎ ይታያሉ። ይህ ኩፖን ኮድ ሊቀበለው የሚችል ምርት የትኛው እንደሆነ በእጅ (በማበሪያ ወይም በማጥፋት) የመምረጥ አማራጭ ይኖርዎታል። እዚህ የተዘጋሉ ምርቶች ደንበኞች ይህን ኩፖን ኮድ ቢጠቀሙ ምንም ለውጥ አይታዩም።

![Limit products section with per-product toggle switches](/img/config/discount-code-limit-products.png)

እነዚህን አማራጮች ሁሉ ከሰየሙ በኋላ፣ ኩፖኑን ለማስቀመጥ በ**Save Discount Code** ላይ ይጫኑ እና ተከናውኗል!

![Save Discount Code button at the bottom of the edit page](/img/config/discount-code-save.png)

ኩፖኑ አሁን በዝርዝርዎ ላይ አለ እና ከዚያ፣ ሊ**ያርትዑት ወይም ሊሰርዙት** ይችላሉ።

![Discount code row in the list with Edit and Delete hover actions](/img/config/discount-codes-list-hover.png)

###

### URL Parametersን መጠቀም: {#using-url-parameters}

የዋጋ ሰንጠረዡዎን ማበጀት ወይም ለድረ-ገጽዎ የሚያምር የኩፖን ኮድ ገጽ መገንባት ከፈለጉ እና የቅናሽ ኮድዎን በቼክአውት ፎርም ላይ በራስ-ሰር ተግባራዊ ማድረግ ከፈለጉ፣ ይህንን በURL parameters አማካኝነት ማድረግ ይችላሉ።

በመጀመሪያ፣ ለፕላኑዎ ሊጋራ የሚችል ሊንክ (shareable link) ማግኘት አለብዎት። ይህን ለማድረግ፣ ወደ **Ultimate Multisite > Products** ይሂዱ እና አንድ ፕላን ይምረጡ።

በ**Click to Copy Shareable Link** ላይ ይጫኑ። ይህ ለዚህ የተወሰነ ፕላን ሊጋራ የሚችል ሊንክ ይሰጥዎታል። በጉዳያችን፣ የተሰጠው ሊጋራ የሚችል ሊንክ [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_።

![Product page with shareable link button](/img/config/products-list.png)

የቅናሽ ኮድዎን ወደዚህ የተወሰነ ፕላን ተግባራዊ ለማድረግ፣ ወደ URL ላይ **?discount_code=XXX** የሚለውን parameter ብቻ ይጨምሩ። እዚህ ላይ **XXX** የኩፖን ኮድ ነው።

በጉዳያችን፣ የኩፖን ኮድ **50OFF** ለዚህ የተወሰነ ምርት እንደምንተገብረው እንመልከት።

ይህ የተወሰነ ፕላን እና 50OFF የቅናሽ ኮድ ከተተገበረበት URL የሚከተለው ይሆናል፦ [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_።

###
