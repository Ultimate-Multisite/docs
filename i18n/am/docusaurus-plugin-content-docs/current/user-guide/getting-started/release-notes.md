---
title: የለቀቁ ማስታወሻዎች
sidebar_position: 9
_i18n_hash: e9f9d20e55608b81945ab7dfcf495fcb
---
# የለቀቀበት ማስታወሻዎች

## Version 2.12.0 — በ2026-05-15 ላይ ተለቋል

- አዲስ: የዶሜን ካርታ አያያዝ (domain mapping) ተीकरणితో Hostinger (hPanel)ን እንደ የሚደገፍ የሆስት አቅራቢ ጨምረናል
- አዲስ: የጣቢያ ኤክስፖርተር (Site Exporter) አሁን ለተደራጀ የኔትወርክ-ስፋት የጣቢያ መልሶ ማቋቋም (site restoration) የኔትወርክ ማስመጫ ስብስቦችን (network import bundles) ይይዛል
- ማስተካከያ: የBCC ስርጭት ኢሜይሎች አሁን የጎላ ተቀባይዎችን አድራሻ እንዳይጋልጡ የሚያስችል `undisclosed-recipients` header ይጠቀማሉ
- ማስተካከያ: የየአባልነት ጊዜ የሚያበቃበት ቀን (Membership expiration date) በየቀን ቁጥር ያልሆነ ዋጋ ሲቀመጥ መበላሸት አቆሟል
- ማስተካከያ: የStripe የአባልነት ዝመናዎች አሁን ጊዜ ያለፈበት የdeleteDiscount APIን መጥራት ሳይሆን ቅናሾችን በትክክል ያጽዳሉ
- ማስተካከያ: በዶሜን ካርታ የተመደቡ ጣቢያዎች ላይ የሚደረጉ SSO መላላኪዎች (redirects) አሁን ማለቂያ የሌላቸውን መላላኪዎች ዑደት (infinite redirect loops) ለመከላከል ይገደባሉ
- ማስተካከያ: የማዋቀር አስማሚ (Setup wizard) የምስል መምረጥ አሁን መሰረታዊ የውሂብ ሞዴሉን በትክክል ያዘምናል
- ማስተካከያ: የSite Exporter CLI አሁን ትክክለኛውን መነሻ የኔትወርክ የጣቢያ ምርጫ ይጠብቃል
- የተሻሻለ: የplugin ስብስቡን ከwp-cli አወጣን፣ ይህም የplugin መጠኑን ቀንሷል

## Version 2.11.0 — በ2026-05-11 ላይ ተለቋል

- አዲስ: የጣቢያ ኤክስፖርቶች (Site exports) አሁን በራሱ የሚሰራ `index.php` ስብስብ አያይዘዋል፣ ይህም ተጠቃሚው ያለ ተጨማሪ plugin መጫን በንጹህ ሆስት ላይ እንዲጫን ያስችላል።
- አዲስ: የኔትወርክ ኤክስፖርት (Network export) አስተዳዳሪዎች ሁሉንም ንዑስ ጣቢያዎች (subsites) በአንድ አርካይቭ (archive) ከSite Export admin page ሊያወጡ ይችላሉ።
- አዲስ: የSite Templates ዕቅድ መቀየሪያ (plan toggle) አሁን በFallback Chain አማካይነት ተግባራዊ ሆኗል፣ ይህም ለዕቅድ ገደቦች የtemplate ተገኝነትን በትክክል ይገድባል።
- አዲስ: የCheckout form አርታኢ (editor) አንድ አስፈላጊ መስክ (required field) ሳይዘጋጅ ምርት ሲጨመር ማስጠንቀቂያ ይሰጣል።
- አዲስ: የImport/Export ቅንብሮች ትር (tab) አሁን ወሰኑን በግልጽ ይገልጻል እና በቀጥታ ወደ Site Export መሣሪያ ይገናኛል።

## Version 2.10.0 — በ2026-05-05 ላይ ተለቋል

- አዲስ: የPayPal መመሪያ የተሰጠው የማዋቀር አስማሚ (guided setup wizard) በእጅ የክሬዲንሺያል ማስገቢያ እና ለቀላል የgateway ማዋቀር የOAuth flag gate አለው።
- አዲስ: የTemplate መቀየሪያ የደንበኛ ፓነል (customer panel) በወቅታዊ template ካርድ፣ በቋሚ grid እና በ**Reset current template** ቁልፍ ተዘጋጅቷል።
- ማስተካከያ: የtemplate መቀየሪያው አሁን በAJAX ስህተት ሲፈጠር የUI መቆም አያደርግም።
- ማስተካከያ: የtemplate መቀየሪያ ፈቃድ ሁኔታዎች (permission states) ከঅননুমোদিত መዳረሻ ተጠብቀዋል።
- ማስተካከያ: የጣቢያ መተካት ግብዓቶች (Site override inputs) ከመቀመጣቸው በፊት ተረጋግጠዋል።
- ማስተካከያ: የሂሳብ አድራሻ መጠየቅ (Billing address prompt) አድራሻ ባዶ ሲሆን አሁን ይታያል።
- ማስተካከያ: የPHP 8.1 null-to-string ጊዜ ያለፈበት ማሳሰቢያዎች ተፈይተዋል።
- ማስተካከያ: የCurrents lazy-loaded before init hook አሁን የጊዜ ልዩነት ችግሮችን ለመከላከል ይደረጋል።
- ማስተካከያ: የተጣራ የSSO መንገድ (Filtered SSO path) በሁሉም የመግቢያ ፍሰቶች (login flows) ውስጥ ተከብሯል።
- ማስተካከያ: ባዶ የጣቢያ ማንነት አማራጮች (Blank site identity options) ሲቀመጡ ይጠበቃሉ።

## Version 2.9.0 — በ2026-04-30 ላይ ተለቋል

- አዲስ: በ**Tools > Export & Import** ስር የአንድ-ጣቢያ ኤክስፖርት እና ማስመጫ ተጨምሯል።
- ማስተካከያ: የExport ZIP ፋይሎች አሁን በየተረጋገጠ የማውረድ endpoint በኩል ይቀርባሉ።
- ማስተካከያ: በየሚጠብቁ የኤክስፖርት/ማስመጫ ጥያቄዎች ውስጥ የSQL injection ስጋት እና የጥያቄ ችግሮች ተስተካክለዋል።
- ማስተካከያ: አስተዳዳሪው የደንበኛ ኢሜይልን በእጅ ሲያረጋግጥ የየሚጠብቅ ጣቢያ (Pending site) አልተለቀቀም።
- ማስተካከያ: የአባልነት ስህተት ሲኖር የጠፉ የpending_site መዝገቦች ተጽዳናሉ።
- ማስተካከያ: የቅንብሮች አሰሳ (Settings nav) padding እና የፍለጋ አንከር አሰሳ ተስተካክለዋል።
- ማስተካከያ: የየሚጠብቁ ጣቢያዎች (Pending sites) አሁን በሁሉም ጣቢያዎች (All Sites) እይታ ውስጥ በመጀመሪያ ይታያሉ።
- ማስተካከያ: የስክሪንሾት አቅራቢ (mShots) User-Agent header ተጨምሯል ይህም 403 ስህተቶችን ይከላከላል።
- ማስተካከያ: የImport cron መርሃግብር የዑደት ጥገኝነት (circular dependency) ተፈይቷል።
- ማስተካከያ: የጉብኝት (Tour) IDዎች በየተጠቃሚ ቅንብሮች ቁልፎች ውስጥ ወደ ስር ስር (underscores) ተመጣጣኝ አድርገዋል።
- የተሻሻለ: ለተሻለ ተኳሃኝነት (compatibility) Alchemy/Zippy ምትክ ZipArchive ጥቅም ላይ ውሏል።

## Version 2.8.0 — በ2026-04-29 ላይ ተለቋል

- አዲስ: የJumper መቀየሪያ (toggle) ወደ Other Options ቅንብሮች UI ተጨምሯል።
- አዲስ: በcheckout forms ዝርዝር ሰንጠረዥ (list table) ውስጥ የሁኔታ ዓምድ (Status column) ተጨምሯል።
- አዲስ: ለበይበል የMU-plugin sunrise extensions የaddon sunrise ፋይል 로ደር።
- የተሻሻለ: የቅንብሮች ገጽ ላይ የerror-reporting opt-in ቅንብሩ ተወግዷል።
- ማስተካከያ: የThank-you page የጣቢያ ካርድ (site card) — ምስሉ አሁን ተገብሯል እና ሊንኮቹ በትክክል ተstil አድርገዋል።
- ማስተካከያ: የስክሪንሾት አቅራቢ ከthum.io ወደ WordPress.com mShots ተቀይሯል።
- ማስተካከያ: የEnable Registration እና Default Role አሁን በንጹህ መጫን ላይ ትክክለኛ መነሻ ዋጋዎችን ያዘጋጃሉ።
- ማስተካከያ: `get_site_url()` የዶሜኑ ወደብ (port) ሲያካትት ባዶ ዋጋ አይመልስም።
- ማስተካከያ: የmedia ፋይሎችን መቅዳት (Clone media files) `copy_media` ቅንብሩ ባዶ ሲሆን አሁን በትክክል ይገለባበጣል።
- ማስተካከያ: የobject cache በnetwork-activate sitemeta write ከተደረገ በኋላ በትክክል ተሰረዟል።
- ማስተካከያ: የCustom domain ለ3-part domains በDNS ማረጋገጫ ጊዜ ወደ ዋናው ተሸጋግሯል።
- ማስተካከያ: የክፍያ ጊዜ ያለፈበት ሲጸዳ የየሚጠብቅ የአባልነት መቋረጥ (Pending membership cancelled)።
- ማስተካከያ: የይለፍ ቃል ጥንካሬ መፈተሽ (Password strength checker) በinline login prompt ከተዘጋ በኋላ ተገናኝቷል።
- ማስተካከያ: ጣቢያው ቀድሞ ከተፈጠረ በThank-you page ላይ የገጽ መጫን ማለቂያ የሌለው መቆም አቆሟል።
- ማስተካከያ: የWP core ምዝገባ አማራጭ (registration option) በplugin activation እና ቅንብሮች ሲቀመጥ ተመሳስሏል።
- ማስተካከያ: የPHP 8.4 ተኳሃኝነትን 위해 `calculate_expiration` ውስጥ null expiration guard ተጨምሯል።
- ማስተካከያ: ደንበኛው ቀድሞ ንቁ የአባልነት ስም የሌለው ከሆነ የድብል ምዝገባዎች ተከልክለዋል።
- ማስተካከያ: በcheckout ውስጥ ለ`date_expiration` null ፍተሻ ተጨምሯል።
- ማስተካከያ: የጣቢያ አቅርቦት (Site provisioning) ጥብቅ ሆኗል — ገደቦች፣ የአባልነት መገመት፣ የዶሜን ማስተዋወም።
- ማስተካከያ: የቅድመ-መጫን ፍተሻ ሁኔታ መለያ (Pre-install check status label) ፍተሻው ሲሳሳት ወደ NOT Activated ተስተካክሏል።
- ማስተካከያ: የcheckout ዶሜን ለኢሜይል ማረጋገጫ URL ተጠቅሟል።
- ማስተካከያ: ምንም የይለፍ ቃል መስክ ባይኖርም ከcheckout በኋላ በራስ-መግባት (Auto-login)።
- ማስተካከያ: ነጻ የአባልነት ጊዜዎች (Free memberships) አልበቃም — እንደ የዕድሜ ልክ ተይዘዋል።
- ማስተካከያ: የኢሜይል ማረጋገጫ بوابة (gate) ደንበኛው ኢሜይሉን እስኪያረጋግጥ የጣቢያውን ህትመት ይይዛል።
- ማስተካከያ: የSES v2 API endpoint base path እና identity route ተስተካክለዋል።
- ማስተካከያ: `wu_inline_login_error` hook በpre-submit catch block ውስጥ ተለቋል።
