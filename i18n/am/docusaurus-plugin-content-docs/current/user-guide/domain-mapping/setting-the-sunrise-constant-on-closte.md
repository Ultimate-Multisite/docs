---
title: በ Closte ላይ የፀሐይ መውጣት 상수 ማዘጋጀት
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# በCloste ላይ የSunrise constantን ወደ true ማዘጋጀት

አንዳንድ የሆስት አገልግሎት ሰጪዎች (host providers) የwp-config.php ፋይልን ለደህንነት ስጋት ምክንያት ይከለክላሉ። ይህ ማለት Ultimate Multisite የዶሜይን ካርታ (domain mapping) እና ሌሎች ባህሪያት እንዲሰሩ የሚያስፈልጉትን constantዎች በራስ-ሰር ፋይሉን መለወጥ አይችልም ማለት ነው። Closte አንዱ እንዲህ ያለ ሆስት ነው።

ሆኖም፣ Closte constantዎችን በwp-config.php ውስጥ በደህንነት መንገድ የሚያስቀምጡበት መንገድ አቅርቧል። የሚያስፈልግዎት ነገር ቢኖር ከዚህ በታች ያሉትን ደረጃዎች መከተል ብቻ ነው፦

## በCloste dashboard ላይ

በመጀመሪያ፣ [የCloste አካውንትዎን ይግቡ](https://app.closte.com/)፣ Sites የሚለውን ሜኑ አይጥ (menu item) ይጫኑ፣ ከዚያም በበየጊዜው እየሰሩበት ባለው ድረ-ገጽ ላይ ያለውን Dashboard ሊንክ ይጫኑ፦

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

በማያ ገጹ በግራ በኩል በርካታ አዳዲስ ሜኑ አይነቶች ይታያሉ። በዚያ ሜኑ በመጠቀም ወደ **Settings** ገጽ ይሂዱ፦

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

ከዚያም በ**Settings** ውስጥ፣ WP-Config ታብን (tab) ያግኙ፣ ከዚያም በዚያ ታብ ላይ ያለውን "Additional wp-config.php content" መስክ ይፈልጉ፦

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisiteን ሲጫኑ፣ የsunrise constantን ወደዚያ መስክ መጨመር ያስፈልግዎታል። አዲስ መስመር በመጨመር እና ከዚህ በታች ያለውን መስመር መለጠፍ ብቻ በቂ ነው። ከዚያም **Save All** የሚለውን ቁልፍ ይጫኑ።

define('SUNRISE', true);

በቃ፣ ተከናውኗል ማለት ነው። ወደ Ultimate Multisite install wizard ይመልሱ እና ሂደቱን ለመቀጠል ገጹን ያድሱ (refresh)።
