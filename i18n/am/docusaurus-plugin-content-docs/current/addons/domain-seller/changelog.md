---
title: የዶሜን ሻጭ የለውጥ ማስታወሻ
sidebar_position: 99
_i18n_hash: bc3ab4e3f0076e80e8c38ed313f4430d
---
# የዶሜን ሻጮች የለውጥ መዝገብ

Version 1.1.0 - በ2026-05-08 የወጣ
- አዲስ፡ ለResellerClub፣ Enom፣ እና OpenSRS ሪጅስትራሮች የDNS record መፍጠር (add_dns_record) ተግባራዊ ሆኗል
- ስህተት ተስተካከለ፡ የDefault DNS Records parser አሁን {DOMAIN} እና {SITE_URL} tokensን ይቋቋማል
- ስህተት ተስተካከለ፡ የDomain selection checkout field slugs ስም ተሰጥቷል (namespaced) ይህም ከsite_url ጋር የሚፈጠረውን ግጭት ለመከላከል ነው

Version 1.0.8 - በ2026-05-07 የወጣ
- ስህተት ተስተካከለ፡ የResellerClub የዶሜን ዋጋ አሁን ትክክለኛውን API endpoint በመጠቀም የቀጥታ ወጪ ዋጋዎችን ይስባል።

Version 1.0.7 - በ2026-05-06 የወጣ
* ስህተት ተስተካከለ፡ የResellerClub test_connection አስፈላጊ የሆነውን tlds parameter (#224) ይልካል።

Version 1.0.6 - በ2026-05-05 የወጣ
* ስህተት ተስተካከለ፡ የResellerClub የዶሜን ምዝገባ አሁን የተሻሻለ የAPI ምላሽ አያያዝ እና በሪጅስትሪ የሚመራ የቅናရှင် አቅራቢ (provider) መስመር በመጠቀም በትክክል ይሰራል።
* ስህተት ተስተካከለ፡ የRegister Domain የአስተዳሚ ገጽ (admin page) የተጠቃሚ ተሞክሮ (UX) ተሻሽሏል።
* ተወግዷል፡ የCyberPanel ሪጅስትራር ውህደት።

Version 1.0.5 - በ2026-04-02 የወጣ
* አዲስ፡ ለዶሜን ምዝገባ እና አያያዝ የGoDaddy ሪጅስትራር ውህደት።
* አዲስ፡ NameSilo ሪጅስትራር ውህደት።
* አዲስ፡ ResellerClub ሪጅስትራር ውህደት።
* አዲስ፡ በዶሜን ሲገዛ እና ሲመዘገብ SES የሚልከውን ዶሜን በራስ-ሰር ማረጋገጥ እና መመደብ (mapping)።
* ስህተት ተስተካከለ፡ የGuard plugin constants በtest environment ውስጥ እንደገና መገለጽን ለመከላከል።
* ስህተት ተስተካከለ፡ የMySQL flags word-split በinstall-wp-tests.sh ውስጥ በትክክል ይሰራል።

Version 1.0.4 - በ2026-03-14 የወጣ
* **ስህተት ተስተካከለ፡** አንዳንድ የcss assets አልተገኙም።
* **ስህተት ተስተካከለ፡** ስለማይገኙ tlds የተፈጠረ ስህተት።

Version 1.0.3 - በ2026-03-09 የወጣ
* **ስህተት ተስተካከለ፡** አሮጌውን የsignup template ሲጠቀሙ እና የcheckout shortcode ሲጠቀሙ የVue reactive property ስህተቶች (domain_option, selected_domain, domain_provider)።
* **ስህተት ተስተካከለ፡** በዶሜን selection checkout field ውስጥ የsubdomain input field መዛመድ አለመሆኑ እና ትልቅ ጽሑፍ መታየት።
* **ስህተት ተስተካከለ፡** የዶሜን selection field ሲኖር "Your URL will be" የሚል ቅድመ-እይታ (preview) ብሎክ መደበቅ።

Version 1.0.2 - በ2026-03-01 የወጣ
* **ተሻሽሏል፡** ከsettings page ላይ የglobal markup settings ተወግዷል — ዋጋ አሁን በየምርት ደረጃ ብቻ ነው።
* **ተሻሽሏል፡** ለፈጣን አቅጣጫ የሚያሳይ "Manage Domain Products" ሊንክ በsettings page ላይ ተጨምሯል።
* **ተሻሽሏል፡** ለዶሜን ምርት ቅንብሮች (catch-all vs TLD-specific, markup types, introductory pricing) ግልጽ የሆኑ የfield መግለጫዎች እና tooltips።
* **ተሻሽሏል፡** በsettings page ላይ ባሉ ቦታዎች ሁሉ የተሻለ መግለጫ (search TLDs, renewals, DNS, notifications)።

Version 1.0.1 - በ2026-02-27 የወጣ

* **አዲስ፡** ለጅምላ የዋጋ አያያዝ የTLD import tool።
* **አዲስ፡** ለዶሜን ምርቶች የመግቢያ ዋጋ (Introductory pricing) ድጋፍ።
* **አዲስ፡** በCypress የተሰራ End-to-End (E2E) የሙከራ ስብስብ (test suite)።
* **አዲስ፡** ለዶሜን የህይወት ዑደት ማሳወቂያዎች የኢሜይል templates።
* **አዲስ፡** በአስተዳሚ የዶሜን ምዝገባ ሞዳል ውስጥ የRegistrant address fields፣ ከsettings የተሞሉበት።
* **አዲስ፡** የደንበኛ DNS አያያዝ በinterface፣ record ለመጨመር፣ ለማርትዕ እና ለማጥፋት ድጋፍ ያለው።
* **አዲስ፡** በዶሜን ሲገዛ በራስ-ሰር የዶሜን መመደብ (automatic domain mapping) ያለው "Bring your own domain" checkout አማራጭ።
* **አዲስ፡** በcheckout ወቅት ከዶሜን ስም የsite URL በራስ-ሰር መፈጠር።
* **አዲስ፡** በsettings ውስጥ የdefault nameserver እና DNS record configuration።
* **አዲስ፡** በcore domain edit page ላይ የዶሜን ምዝገባ ዝርዝሮች እና DNS አያያዝ።
* **አዲስ፡** የSetup wizard በsensible defaults ባለው default domain product በራስ-ሰር ይፈጥራል።
* **አዲስ፡** በሁሉም የተዋቀሩ አቅራቢዎች (providers) በየቀኑ የTLD ሲንክ (sync) በcron በራስ-ሰር።
* **አዲስ፡** በየምርት ደረጃ (per-product) ቅንብር ያለው የWHOIS privacy protection (ሁልጊዜ በርቷል፣ የደንበኛ ምርጫ፣ ወይም የተሰበሩ)።
* **አዲስ፡** የWHOIS privacy checkout checkbox በዋጋ አ显示 እና dark mode ድጋፍ።
* **አዲስ፡** ለበይበል የዶሜን ምዝገባ የአስተዳሚ ገጽ (admin page)።
* **አዲስ፡** በUltimate Multisite update server በኩል የplugin ዝመና በራስ-ሰር።
* **አዲስ፡** በproduct list table ውስጥ የDomain product type filter tab ከpurple badge styling ጋር።
* **አዲስ፡** በዶሜን checkout form ላይ የRegistrant contact fields (name, address, city, state, postal code, country, phone)።
* **አዲስ፡** የregistrar API ጥሪ ከመደረጉ በፊት የRegistrant field validation እና ግልጽ የሆኑ የስህተት መልዕክቶች።
* **አዲስ፡** ለዶሜን ምዝገባ ክስተቶች አቅራቢ-ተኮር የlog channels (ለምሳሌ domain-seller-namecheap.log)።
* **አዲስ፡** በዋናው የsignup/የምዝገባ checkout form ላይ የRegistrant contact fields (ዶሜን ሲመዘገብ ይታያል)።
* **ተሻሽሏል፡** የDomain Search checkout field በsubdomain, register, እና existing domain tabs የሚደግፍ ወደ አንድ የDomain Selection field ተተክቷል።
* **ተሻሽሏል፡** የDomain product settings በproduct edit page ላይ በcore widget system በinline ይሳልናል።
* **ተሻሽሏል፡** የደንበኛ የዶሜን መረጃ ወደ core domain mapping widget ተሳጥሯል እንጂ እንደነጠላ metabox አይደለም።
* **ተሻሽሏል፡** የTLD import wizard ወደ ሁሉም አቅራቢዎች አንድ-በ-ጫን ሲንክ (one-click sync) ተቀላቅሏል።
* **ተሻሽሏል፡** የNamecheap የዶሜን ተገኝነት (availability) ፈጣን ፍለጋ ለማድረግ የbatch API ጥሪን ይጠቀማል።
* **ተሻሽሏል፡** የNamecheap የዋጋ API ትክክለኛዎቹን parameters እና የresponse parsing ይጠቀማል።
* **ተሻሽሏል፡** የTLD ማከማቻ ወደ አንድ የnetwork option ተሰባስቧል።
* **ተሻሽሏል፡** ለDNS ለውጦች፣ ለሽባበቶች (transfers) እና ለconfig አተገባበር የDomain activity logging።
* **ተሻሽሏል፡** ለOpenSRS ሙሉ የTLD ሲንክ (sync) IANA master listን እና በbatch validation ይጠቀማል።
* **ተሻሽሏል፡** ለNamecheap ሙሉ የTLD ሲንክ (sync) በpaginated API ጥያቄዎች።
* **ተሻሽሏል፡** አሮጌዎቹን የprovider classes በIntegration Registry pattern ተተክቷል።
* **ተሻሽሏል፡** የDNS እና የtransfer configuration ያለው የsettings panel።
* **ተሻሽሏል፡** የስልክ ቁጥሮች በራስ-ሰር ወደ +CC.NNN ሪጅስትራር ቅርጸት ይቀርጻሉ።
* **ተሻሽሏል፡** የስልክ field validation ከመላክ በፊት የformatting characters ያጠፋል።
* **ተሻሽሏል፡** የVersion requirement ወደ Ultimate Multisite 2.4.12 ተጨምሯል እና ግልጽ ማሳሰቢያ ተሰጥቷል።
* **ተሻሽሏል፡** የCI workflow ለaddon እና core plugin ሁለቱም ትክክለኛ checkoutን ይጠቀማል።
* **ተሻሽሏል፡** prepare_registrant_info() ከcheckout-saved user meta ይነባበራል እና የbilling address fallback አለው።
* **ተስተካከለ፡** በcheckout ወቅት ለlogged-out ተጠቃሚዎች የDomain search AJAX መሳሳት።
* **ተስተካከለ፡** በcheckout ወቅት ለlogged-out ተጠቃሚዎች የDomain pricing AJAX መሳሳት።
* **ተስተካከለ፡** WP-CLI ትዕዛዞችን በሚሰሩበት ጊዜ Spyc class redeclaration fatal error።
* **ተስተካከለ፡** የNamecheap sandbox API timeout በጣም አጭር ነበር።
* **ተስተካከለ፡** የDomain search Select button ጽሑፍ በসবুজ ዳራ ላይ አይታይም ነበር።
* **ተስተካከለ፡** የዶሜን ምዝገባ "RegistrantFirstName is Missing" ስህተት በመኖሩ ምክንያት መሳሳት።
* **ተስተካከለ፡** site በcheckout ጊዜ ባልነበረበት ጊዜ ዶሜን record በblog_id=0 ተፈጥሯል።
* **ተስተካከለ፡** የDefault TLDs setting እንደ የተበተነ array ሳይሆን እንደ string መመለስ።
* **ተወግዷል፡** የStandalone Domain Management admin page — አሁን በcore domain pages በኩል ይያዛል።

Version 1.0.0 - በ2025-09-28 የወጣ

**ለUltimate Multisite v2 ዋና የጽሑፍ ለውጥ (Major Rewrite)**

* **አዲስ፡** በዘመናዊ PHP 7.4+ አርክቴክቸር ሙሉ በሙሉ እንደገና ተጽፏል።
* **አዲስ፡** ከUltimate Multisite v2 checkout system ጋር ያለች እንከን የለሽ ውህደት።
* **አዲስ፡** በflexible pricing options የዶሜን ምርት አያያዝ።
* **አዲስ፡** ብዙ የዶሜን አቅራቢዎችን የሚደግፍ አርክቴክቸር።
* **አዲስ፡** የራስ-ሰር እድሳት (Auto-renewal) እና የደንበኝነት ምዝገባ ውህደት።
* **አዲስ፡** የደንበኛ የዶሜን አያያዝ በinterface።
* **አዲስ፡** የአስተዳሚ የዶሜን ክትትል እና የlog።
* **አዲስ፡** ለዶሜን ምርቶች የCoupon ድጋፍ።
* **አዲስ፡** አጠቃላይ የsettings አያያዝ።
* **አዲስ፡** ለdeveloper ተስማሚ የሆነ ሊሰፋ የሚችል የcodebase።
* **ተሻሽሏል፡** የOpenSRS አቅራቢ ሙሉ የባህሪ ድጋፍ ጋር ተዘምኗል።
* **ተሻሽሏል፡** ከUltimate Multisite v2 ጋር የሚጣጣም ዘመናዊ UI።
* **ተስተካከለ፡** ሁሉም ጊዜ ያለፈባቸው v1 ኮዶች ወደ v2 ደረጃዎች ተዘምረዋል።
* **ተወግዷል፡** አሮጌው v1 ተኳሃኝነት (የሚሰብር ለውጥ)።

### ቀደምት ስሪቶች (v1 Legacy)

### Version 0.0.3 - 20/08/2019

* ተስተካከለ፡ ከGroundhogg CRM ጋር አለመጣጣም።
* ማሳሰቢያ፡ ይህ የመጨረሻው v1 ተኳሃኝ ስሪት ነበር።

### Version 0.0.2 - 07/12/2018

* ተስተካከለ፡ የLicense Key field ተወግዷል።
* ተስተካከለ፡ የfeature plugin ሲንቀሳቀስ የPlan tabs አልተገኙም።
* ተሻሽሏል፡ በregistration field ላይ የskip button ተጨምሯል።

### Version 0.0.1 - የመጀመሪያ ስሪት

* ለWP Ultimo v1 መሰረታዊ የOpenSRS ውህደት።
* ቀላል የዶሜን ፍለጋ እና ምዝገባ።
* በPlan ላይ የተመሰረተ የዶሜን ፈቃድ።
