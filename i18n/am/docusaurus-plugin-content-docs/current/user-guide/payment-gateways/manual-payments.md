---
title: የበይበጅ ክፍያዎችን ማዘጋጀት
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# በእጅ የሚደረጉ ክፍያዎችን ማዘጋጀት (v2)

_**ጠቃሚ ማሳሰቢያ፡ ይህ ጽሑፍ የሚያመለክተው Ultimate Multisite version 2.xን ነው።**_

የእጅ ክፍያዎች (Manual payments) ማለት ተጠቃሚዎችዎ የ **Stripe** ወይም **PayPal** አገልግሎት ባይጠቀሙበት ጊዜ፣ ሌላ የክፍያ ዘዴ ሊያቀርቡበት የሚረዳ መንገድ ነው። ይህ የባንክ ዝውውር (wire transfer)፣ የባንክ ክፍያ ወይም ተጠቃሚዎችዎ በአካባቢያቸው ሊጠቀሙበት የሚችሉ ሌላ ማንኛውም የክፍያ ዘዴ ሊሆን ይችላል።

## በእጅ ክፍያዎችን እንዴት ማብራት ይቻላል

የእጅ ክፍያዎችን ማዘጋጀት በጣም ቀላል ነው። በክፍያ መግቢያዎች (payment gateways) ውስጥ በመግባት 'Manual' የሚለውን አማራጭ በማብራት እና ተጠቃሚው ክፍያውን እንዴት መላክ እንዳለበት ዝርዝር መመሪያዎችን በመስጠት ብቻ ነው።

በመጀመሪያ፣ ወደ **Ultimate Multisite > Settings > Payments** ይሂዱ። ከ **Payment Gateways** ስር፣ **Manual** የሚለውን አማራጭ ያብሩ (toggle on)። ከዚያም **Payment Instructions** የሚል ሳጥን ይታያል።

በዚህ ሳጥን ውስጥ ደንበኛው ክፍያውን እንዲፈጽም የሚያስፈልገውን መረጃ ይጨምሩ። ለምሳሌ፣ የባንክ አካውንት ዝርዝሮችዎ እና ደንበኛው የክፍያ ማረጋገጫ እንዲልኩልዎት የኢሜል አድራሻዎ ሊሆን ይችላል።

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

ይህ የክፍያ መግቢያዎች (manual gateway) ቅንብሮች ገጽ ነው፦

![Manual gateway settings](/img/config/manual-gateway-settings.png)

ከማዘጋጀ በኋላ፣ በ **Save Settings** ላይ በመጫን ተከናውኗል። ተጠቃሚዎች ወደ ኔትወርክዎ ሲመዘገቡ፣ ግዢውን ለማጠናቀቅ መመሪያዎችን እንደሚቀበሉ የሚያሳውቃቸው መልዕክት ያያሉ።

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

እንዲሁም፣ በ **Thank You** ገጽዎ ላይ የክፍያ መመሪያዎችዎ የሚታዩበት መልዕክት ይቀበላሉ።

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## በእጅ ክፍያዎችን ማረጋገጥ

የእጅ ክፍያዎችን ለማረጋገጥ፣ በግራ በኩል ባለው **Payments** ሜኑ ላይ ይሂዱ። እዚያ በኔትወርክዎ ላይ ያሉትን ሁሉንም ክፍያዎች እና ዝርዝራቸውን፣ የ**ሁኔታ (status)** ምንነትን ጨምሮ፣ ማየት ይችላሉ። በእጅ የሚደረግ ክፍያ እርስዎ በበይይት ባይቀይሩት ሁልጊዜ **Pending** (በመጠባበቅ ላይ) ሁኔታ ይኖረዋል።

![Payments list showing pending manual payment](/img/admin/payments-list.png)

በ**reference code** ላይ በመጫን ወደ ክፍያው ዝርዝር ገጽ ይግቡ። በዚህ ገጽ ላይ እንደ ማጣቀሻ መለያ (reference ID)፣ ምርቶች (products)፣ የጊዜ ምልክቶች (timestamps) እና ሌላ ተጨማሪ ዝርዝሮች ሁሉ ይገኛሉ።

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

በቀኝ ዓምድ፣ የክፍያውን ሁኔታ መቀየር ይችላሉ። ሁኔታውን ወደ **Completed** በማቀየር እና **Activate Membership** አማራጩን በማብራት፣ የደንበኛዎ ድረ-ገጽ ይከፈታል እና የአባልነታቸው ሁኔታም ይንቀሳቀሳል።

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
