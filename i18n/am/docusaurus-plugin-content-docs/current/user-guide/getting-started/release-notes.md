---
title: የልቀት ማስታወሻዎች
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# የልቀት ማስታወሻዎች

## ስሪት 2.13.0 — የተለቀቀው በ2026-06-05 {#version-2130--released-on-2026-06-05}

- አዲስ: የተከራይ ኔትወርኮች ደንበኞችን ለሚተዳደሩ እርምጃዎች ወደ ዋናው ጣቢያ መመለስ እንዲችሉ፣ ለደንበኛ Account፣ checkout፣ ክፍያ መጠየቂያ፣ ጣቢያ፣ ደረሰኝ፣ የቅጽ መቀየር፣ እና የዶሜን ማመሳሰል ፍሰቶች የሉዓላዊ-ተከራይ ድጋፍ ታክሏል።
- አዲስ: የተቀመጠ የክፍያ ስምምነት፣ ምዝገባ፣ ወይም የvault token ሲጎድል gateways ራስ-ሰር እድሳትን ማሰናከል እንዲችሉ፣ ለተደጋጋሚ አባልነቶች የእድሳት-ምስክርነት ፍተሻዎች ታክለዋል።
- አዲስ: የኋላ ስራዎች በሚዘገዩባቸው hosts ላይ ከcheckout ወደ ጣቢያ ማቅረብን ይበልጥ አስተማማኝ ለማድረግ፣ ለተጠባባቂ ጣቢያ ፈጠራ HMAC-የተረጋገጠ loopback publishing ታክሏል።
- አዲስ: ለSSO URLs፣ ለcheckout-form መሠረታዊ ዶሜኖች፣ እና ለራስ-ሰር የዶሜን-መዝገብ ፈጠራ የdeveloper ማስፋፊያ ነጥቦች ታክለዋል።
- ማስተካከያ: SSO በተመሳሰሉ ዶሜኖች፣ ስም-አልባ broker ጉብኝቶች፣ logout፣ እና በplugin-መካከል የጥገኝነት ግጭቶች ላይ ይበልጥ አስተማማኝ ሆኗል።
- ማስተካከያ: ተጠባባቂ ጣቢያ ፈጠራ አሁን ከደረቁ publish flags ይመለሳል፣ እና ደንበኞች በጣቢያ-ፈጠራ ማያ ገጽ ላይ ተቆልፈው እንዳይቀሩ ያስወግዳል።
- ማስተካከያ: የዶሜን መዝገቦች ከእንግዲህ ለተጋሩ checkout-form መሠረታዊ ዶሜኖች አይፈጠሩም፣ እና ምንም ውህደት ንቁ ካልሆነ ያልተጠቀሙ የhost-provider የኋላ ስራዎች ይዘለላሉ።
- ማስተካከያ: Checkout፣ የክፍያ መጠየቂያ አድራሻ፣ የይለፍ ቃል ዳግም ማቀናበር፣ የኢሜይል ማረጋገጫ፣ የቅጽ መቀየር፣ ጉብኝቶች፣ እና የደንበኛ Dashboard ዳር-ጉዳዮች ከእንግዲህ መደበኛ የደንበኛ ፍሰቶችን አያግዱም።
- ማስተካከያ: የbroadcast ኢሜይሎች አሁን የተቀባዮች ዝርዝሮች ወይም የመልዕክት ማጓጓዣዎች ሲወድቁ SMTP/plugin አስከፊ ስህተቶችን እያስወገዱ፣ ተቀባዮችን ግላዊ ያደርጋሉ።
- ማስተካከያ: የአባልነት እድሳቶች፣ የማብቂያ ማሳያ፣ እና የክፍያ መሰብሰብ ዳር-ጉዳዮች አሁን ወዲያውኑ ማብቃትን፣ crashes፣ ወይም ያመለጡ አስፈላጊ ክፍያዎችን ያስወግዳሉ።
- ተሻሽሏል: የWordPress ተኳኋኝነት እስከ 7.0 ድረስ ተፈትኗል፣ የproduction Vue assets ከnpm sources እንደገና ተገንብተዋል፣ እና የCypress ከመጀመሪያ-እስከ-መጨረሻ ሽፋን አሁን ተጨማሪ checkout፣ setup፣ SSO፣ እና gateway ፍሰቶችን ይፈትናል።

## ስሪት 2.12.0 — የተለቀቀው በ2026-05-15 {#version-2120--released-on-2026-05-15}

- አዲስ: Hostinger (hPanel) እንደ የሚደገፍ host provider ከዶሜን ማመሳሰል ውህደት ጋር ታክሏል
- አዲስ: Site Exporter አሁን ለተቀላጠፈ በኔትወርክ-ሙሉ የጣቢያ መመለስ የኔትወርክ ማስመጣት ጥቅሎችን ይይዛል
- ማስተካከያ: BCC broadcast ኢሜይሎች አሁን የተቀባይ አድራሻዎችን እንዳያጋልጡ ያልተገለጹ-ተቀባዮች header ይጠቀማሉ
- ማስተካከያ: የአባልነት ማብቂያ ቀን ቀን ያልሆነ እሴት ጋር ሲቀመጥ ከእንግዲህ አይበላሽም
- ማስተካከያ: Stripe የአባልነት ዝማኔዎች አሁን deprecated deleteDiscount API ሳይጠሩ ቅናሾችን በትክክል ያጸዳሉ
- ማስተካከያ: በዶሜን-የተመሳሰሉ ጣቢያዎች ላይ SSO redirects አሁን የማያልቁ redirect loops ለመከላከል ተገድበዋል
- ማስተካከያ: Setup wizard የምስል መራጭ ምርጫ አሁን የመሠረቱን የውሂብ ሞዴል በትክክል ያዘምናል
- ማስተካከያ: Site Exporter CLI አሁን ትክክለኛውን ነባሪ የኔትወርክ ጣቢያ ምርጫ ያስጠብቃል
- ተሻሽሏል: የተጠቀለለ wp-cli ከplugin ጥቅል ተወግዷል፣ የplugin መጠንን ቀንሷል

## ስሪት 2.11.0 — የተለቀቀው በ2026-05-11 {#version-2110--released-on-2026-05-11}

- አዲስ: የጣቢያ exports አሁን ራሱን የሚነሳ `index.php` ይጠቀልላሉ፣ ስለዚህ ZIP ያለ ተለየ plugin መጫን በአዲስ host ላይ ሊጫን ይችላል።
- አዲስ: የኔትወርክ export አስተዳዳሪዎች ሁሉንም subsites ከSite Export የአስተዳዳሪ ገጽ በአንድ archive ውስጥ እንዲያወጡ ያስችላቸዋል።
- አዲስ: Allow Site Templates የእቅድ toggle አሁን በfallback chain በኩል ይተገበራል፣ ለእቅድ ገደቦች የቅጽ ተገኝነትን በትክክል ይገድባል።
- አዲስ: የCheckout form አርታዒ አንድ product ያስፈልገው field ሳይዋቀር ሲታከል ያስጠነቅቃል።
- አዲስ: የImport/Export ቅንብሮች tab አሁን ወሰኑን በግልጽ ይገልጻል እና በቀጥታ ወደ Site Export መሣሪያ ያገናኛል።

## ስሪት 2.10.0 — የተለቀቀው በ2026-05-05 {#version-2100--released-on-2026-05-05}

- አዲስ: ለቀላል gateway ውቅር በOAuth flag gate ጋር ለእጅ credential ግቤት የPayPal የተመራ setup wizard።
- አዲስ: የቅጽ መቀየር የደንበኛ panel ከየአሁኑ-ቅጽ card፣ ቋሚ grid፣ እና **የአሁኑን ቅጽ ዳግም አስጀምር** አዝራር ጋር እንደገና ተነድፏል።
- ማስተካከያ: የቅጽ መቀየር በAJAX ውድቀት ላይ ከእንግዲህ UIን አያንጠለጥልም።
- ማስተካከያ: የቅጽ መቀየር ፈቃድ ሁኔታዎች ከያልተፈቀደ መዳረሻ ተጠብቀዋል።
- ማስተካከያ: የጣቢያ override ግቤቶች ከመቀመጣቸው በፊት ተረጋግጠዋል።
- ማስተካከያ: የክፍያ መጠየቂያ አድራሻ ጥያቄ አሁን አድራሻው ባዶ ሲሆን ይታያል።
- ማስተካከያ: PHP 8.1 null-to-string deprecation notices ተፈትተዋል።
- ማስተካከያ: Currents የጊዜ ችግኞችን ለመከላከል ከinit hook በፊት lazy-loaded ተደርጓል።
- ማስተካከያ: የተጣራ SSO path በሁሉም የlogin ፍሰቶች ላይ ተከብሯል።
- ማስተካከያ: ባዶ የጣቢያ መታወቂያ አማራጮች በማስቀመጥ ላይ ተጠብቀዋል።

## ስሪት 2.9.0 — የተለቀቀው በ2026-04-30 {#version-290--released-on-2026-04-30}

- አዲስ: የነጠላ-ጣቢያ export እና import በ**መሣሪያዎች > አውጣ እና አስመጣ** ስር ታክለዋል።
- ማስተካከያ: Export ZIP ፋይሎች አሁን በተረጋገጠ download endpoint በኩል ይቀርባሉ።
- ማስተካከያ: በተጠባባቂ export/import queries ውስጥ የSQL injection አደጋ እና የquery ችግኞች ተስተካክለዋል።
- ማስተካከያ: አስተዳዳሪ የደንበኛ ኢሜይልን በእጅ ሲያረጋግጥ ተጠባባቂ ጣቢያ አይታተምም።
- ማስተካከያ: አባልነት ሲጎድል orphaned pending_site መዝገቦች ተጸድቀዋል።
- ማስተካከያ: የSettings nav padding እና የsearch anchor navigation ተስተካክለዋል።
- ማስተካከያ: ተጠባባቂ ጣቢያዎች አሁን በAll Sites እይታ ውስጥ መጀመሪያ ይታያሉ።
- ማስተካከያ: የScreenshot provider (mShots) User-Agent header 403 ስህተቶችን ለመከላከል ታክሏል።
- ማስተካከያ: የImport cron schedule ዙሪያዊ ጥገኝነት ተፈትቷል።
- ማስተካከያ: Tour IDs በuser settings keys ውስጥ ወደ underscores ተመደበኛ ተደርጓል።
- ተሻሽሏል: ለተሻለ ተኳኋኝነት ከAlchemy/Zippy ይልቅ ZipArchive አሁን ጥቅም ላይ ውሏል።

## ስሪት 2.8.0 — የተለቀቀው በ2026-04-29 {#version-280--released-on-2026-04-29}

- አዲስ፦ የJumper መቀያየሪያን በOther Options ቅንብሮች UI ውስጥ ማንቃት ታክሏል።
- አዲስ፦ የሁኔታ ዓምድ ወደ የcheckout ቅጾች ዝርዝር ሰንጠረዥ ታክሏል።
- አዲስ፦ የAddon sunrise ፋይል ጫኚ ለብጁ MU-plugin sunrise ቅጥያዎች።
- ተሻሽሏል፦ ከቅንብሮች ገጽ የerror-reporting መርጦ መግቢያ ቅንብር ተወግዷል።
- ማስተካከያ፦ የምስጋና ገጽ የsite ካርድ — ምስሉ አሁን ተገድቧል እና አገናኞች በትክክል ቅጥ ተሰጥተዋል።
- ማስተካከያ፦ Screenshot አቅራቢ ከthum.io ወደ WordPress.com mShots ተቀይሯል።
- ማስተካከያ፦ Enable Registration እና Default Role አሁን በአዲስ ጭነት ላይ ትክክለኛ ነባሪዎችን ያዘጋጃሉ።
- ማስተካከያ፦ `get_site_url()` ዶሜይን ፖርት ሲያካትት ከእንግዲህ ባዶ አይመልስም።
- ማስተካከያ፦ የmedia ፋይሎችን መቅዳት የ`copy_media` ቅንብር ባዶ ሲሆን አሁን በትክክል ተቀድቷል።
- ማስተካከያ፦ Object cache ከnetwork-activate sitemeta ጽሁፍ በኋላ በትክክል ተሰርዟል።
- ማስተካከያ፦ ብጁ ዶሜይን ለ3-ክፍል ዶሜይኖች በDNS ማረጋገጫ ላይ በራስ-ሰር ወደ primary ተሸጋግሯል።
- ማስተካከያ፦ የተጠባባቂ membership ጊዜው ያለፈ payment ሲጸዳ ተሰርዟል።
- ማስተካከያ፦ የpassword ጥንካሬ መፈተሻ የinline login ጥያቄ ከተዘጋ በኋላ እንደገና ተያይዟል።
- ማስተካከያ፦ ያልተገደበ የገጽ ዳግም መጫን በምስጋና ገጽ ላይ site ቀድሞ ሲፈጠር ቆሟል።
- ማስተካከያ፦ የWP core ምዝገባ አማራጭ በplugin ማንቃት እና ቅንብሮች ማስቀመጥ ላይ ተመሳስሏል።
- ማስተካከያ፦ ለPHP 8.4 ተኳሃኝነት በ`calculate_expiration` ውስጥ Null expiration ጠባቂ ታክሏል።
- ማስተካከያ፦ ደንበኛ አስቀድሞ ንቁ membership ሲኖረው የተደጋጋሚ signups ታግደዋል።
- ማስተካከያ፦ በcheckout ውስጥ ለ`date_expiration` Null ፍተሻ ታክሏል።
- ማስተካከያ፦ የsite አቅርቦት ተጠናክሯል — ገደቦች፣ membership ማመንጨት፣ የዶሜይን ማሳደግ።
- ማስተካከያ፦ የቅድመ-ጭነት ፍተሻ ሁኔታ መለያ ፍተሻው ሲወድቅ ወደ NOT Activated ተስተካክሏል።
- ማስተካከያ፦ የCheckout ዶሜይን ለኢሜይል ማረጋገጫ URLs ጥቅም ላይ ውሏል።
- ማስተካከያ፦ የpassword መስክ ባልተገኘ ጊዜ ከcheckout በኋላ auto-login።
- ማስተካከያ፦ ነፃ memberships ከእንግዲህ ጊዜያቸው አያልፍም — እንደ lifetime ይቆጠራሉ።
- ማስተካከያ፦ የኢሜይል ማረጋገጫ መግቢያ ደንበኛ ኢሜይሉን እስኪያረጋግጥ ድረስ የsite ማተምን ይይዛል።
- ማስተካከያ፦ የSES v2 API endpoint መሠረታዊ መንገድ እና identity መስመር ተስተካክለዋል።
- ማስተካከያ፦ `wu_inline_login_error` hook በቅድመ-submit catch ብሎክ ውስጥ ተለቋል።
