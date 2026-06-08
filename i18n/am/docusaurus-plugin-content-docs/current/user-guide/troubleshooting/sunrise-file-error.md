---
title: ሰንሪስ ፋይል ስህተት
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# የSunrise ፋይል መጫን ስህተት

የsunrise.php ፋይል ራሱ ራሱን ሲያነሳ (bootstraps) የሚያየው ልዩ ፋይል ነው። WordPress ይህንን ፋይል ሊለየው (detect) የሚችልበት፣ በ**wp-content folder** ውስጥ መገኘቱ አለበት።

Ultimate Multisite ሲያነሳው (activate) እና በስክሪንሾት ላይ እንዳለውን setup wizard ስትከተሉ፣ Ultimate Multisite የsunrise.php ፋይላችንን ወደ wp-content folder ለመቅዳት ይሞክራል።

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

አብዛኛውን ጊዜ ፋይሉን በተሳካ ሁኔታ መቅዳት እንችላለን እና ሁሉም ነገር ይሰራል። ሆኖም ግን፣ አንድ ነገር በትክክል ካልተዘጋጀ (ለምሳሌ፣ የfolder ፈቃዶች/permissions)፣ Ultimate Multisite ፋይሉን መቅዳት የማይችልበት ሁኔታ ሊገጥምዎ ይችላል።

Ultimate Multisite የሰጠዎትን ስህተት መልዕክት ካነበቡ፣ እዚህ ላይ በትክክል ምን እንደተፈጠረ ያያሉ፦ **Sunrise copy failed**።

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

ይህንን ለማስተካከል፣ የsunrise.php ፋይሉን ከwp-ultimo plugin folder ውስጥ በቀላሉ መቅዳት እና ወደ wp-content folder ውስጥ መለጠፍ ይችላሉ። ይህን ካደረጉ በኋላ፣ የwizard ገጹን እንደገና ይጫኑ (reload) እና ፍተሻዎቹ (checks) መሳል አለባቸው።

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> በማንኛውም ሁኔታ፣ ለወደፊት ችግሮችን ለማስቀረት የfolder ፈቃዶችን (folder permissions) በአጠቃላይ መፈተሽ ሊያስፈልግ ይችላል (ይህም Ultimate Multisite ላይ ብቻ ሳይሆን በሌሎች plugins እና themes ላይም ጭምር ነው።)

በWordPress ውስጥ አካል የሆነው **Health Check tool** (በዋናው የsite **admin panel > Tools > Health Check** አማካኝነት መድረስ ይችላሉ) የfolder ፈቃዶችዎ WordPress ላይ ችግር ሊፈጥሩ የሚችሉ እሴቶች ላይ ተቀምጠዋል ወይ ብሎ ሊነግርዎ ይችላል።

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
