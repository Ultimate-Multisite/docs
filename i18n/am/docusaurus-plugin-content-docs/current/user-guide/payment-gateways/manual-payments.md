---
title: የእጅ ክፍያዎችን ማዋቀር
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# በእጅ የሚደረጉ ክፍያዎችን ማዋቀር (v2)

_**አስፈላጊ ማስታወሻ፦ ይህ ጽሑፍ Ultimate Multisite ስሪት 2.xን ይመለከታል።**_

**Stripe** ወይም **PayPal** ለተጠቃሚዎችዎ የማይገኝ ከሆነ፣ በእጅ የሚደረጉ ክፍያዎች ሌሎች የክፍያ ዘዴዎችን ለማቅረብ የሚያስችሉዎት መንገድ ናቸው። የገንዘብ ወይም የባንክ ማስተላለፍ፣ ወይም በአካባቢያቸው ለተጠቃሚዎችዎ የሚገኝ ማንኛውም ሌላ የክፍያ ዘዴ ሊሆን ይችላል።

## በእጅ የሚደረጉ ክፍያዎችን እንዴት ማንቃት እንደሚቻል {#how-to-enable-manual-payments}

በእጅ የሚደረግ ክፍያን ማዋቀር በጣም ቀላል ነው። በክፍያ መግቢያዎች ስር ማንቃት እና ተጠቃሚው ክፍያውን እንዴት መላክ እንዳለበት ዝርዝር መመሪያዎችን ማስገባት ብቻ ያስፈልግዎታል።

መጀመሪያ፣ ወደ **Ultimate Multisite > Settings > Payments** ይሂዱ። ከ **Payment Gateways** በታች፣ **Manual**ን ያብሩ። ለእርስዎ **Payment Instructions** ሳጥን እንደሚታይ ያያሉ።

ደንበኛዎ ክፍያውን ለመፈጸም የሚያስፈልገውን መረጃ ወደዚህ ሳጥን ያክሉ። ለምሳሌ፣ ደንበኛው የክፍያ ማረጋገጫውን እንዲልክልዎ የባንክ መለያ ዝርዝሮችዎን እና ኢሜይልዎን ሊሆን ይችላል።

![Payment Instructions የጽሑፍ ቦታ ያለው በእጅ የክፍያ መግቢያ ማብሪያ](/img/config/manual-gateway-expanded.png)

የበእጅ መግቢያ ቅንብሮች በይነገጽ ይህ ነው፦

![በእጅ መግቢያ ቅንብሮች](/img/config/manual-gateway-settings.png)

ካዋቀሩት በኋላ፣ በቀላሉ **Save Settings** ላይ ጠቅ ያድርጉ እና ይጠናቀቃል። ተጠቃሚዎች ወደ ኔትወርክዎ ሲመዘገቡ፣ ግዢውን ለማጠናቀቅ መመሪያዎችዎን እንደሚቀበሉ የሚነግራቸውን መልዕክት ያያሉ።

![ተጠቃሚው የክፍያ መመሪያዎችን እንደሚቀበል የሚነግር የምዝገባ ማረጋገጫ መልዕክት](/img/frontend/registration-manual-notice.png)

እንዲሁም በ **Thank You** ገጽዎ ላይ ከክፍያ መመሪያዎችዎ ጋር መልዕክት ይቀበላሉ።

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## በእጅ የሚደረጉ ክፍያዎችን ማረጋገጥ {#confirming-manual-payments}

በእጅ የሚደረግ ክፍያን ለማረጋገጥ፣ በግራ አሞሌ ላይ ወዳለው **Payments** ምናሌ ይሂዱ። እዚያ በኔትወርክዎ ላይ ያሉ ሁሉንም ክፍያዎች እና ዝርዝሮቻቸውን፣ **status**ንም ጨምሮ፣ ማየት ይችላሉ። በእጅ የሚደረግ ክፍያ እርስዎ በእጅ እስኪቀይሩት ድረስ ሁልጊዜ **Pending** ሁኔታ ይኖረዋል።

![በመጠባበቅ ላይ ያለ በእጅ ክፍያን የሚያሳይ የክፍያዎች ዝርዝር](/img/admin/payments-list.png)

**reference code**ን ጠቅ በማድረግ ወደ ክፍያው ገጽ ይግቡ። በዚህ ገጽ ላይ እንደ ማጣቀሻ ID፣ ምርቶች፣ የጊዜ ማህተሞች እና ሌሎችም ያሉ የበመጠባበቅ ላይ ያለው ክፍያ ሁሉም ዝርዝሮች አሉዎት።

![የማጣቀሻ ኮድ፣ ምርቶች እና ድምሮችን የሚያሳይ የክፍያ ዝርዝሮች ገጽ](/img/admin/payment-edit.png)

በቀኝ አምድ ላይ፣ የክፍያውን ሁኔታ መቀየር ይችላሉ። ወደ **Completed** መቀየር እና **Activate Membership** አማራጭን ማብራት የደንበኛዎን ጣቢያ ያነቃል እና አባልነታቸው ንቁ ይሆናል።

![Status ወደ Completed የተቀናበረበት እና Activate Membership ማብሪያ ያለው የክፍያ ማስተካከያ ገጽ](/img/admin/payment-activate-membership.png)
