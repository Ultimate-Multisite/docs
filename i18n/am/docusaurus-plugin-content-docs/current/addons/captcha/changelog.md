---
title: Captcha የለውጥ መዝገብ
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# የCaptcha የለውጥ መዝገብ {#captcha-changelog}

Version: 1.5.0 - በ2026-05-22 የወጣ
* አዲስ: ጠንካራ የፍጥነት ገደብ አጥጋቢ (Hard-stop rate limiter) — በcaptcha የተጠበቁ ገጾች (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) ላይ የሚደረጉ እያንዳንዱ GET እና POST ጥያቄዎችን ይቆጥራል፤ HTTP 429፣ `Retry-After` header እና በዘፈቀደ የሚቀየረ የትራፒት እንቅልፍ (1–5 ሰከንዶች፣ ቢበልጥም 15 ሰከንዶች) በመልስ መልስ ይሰጣል።
* አዲስ: የትራፒት ጊዜን (tarpit window) ለማስተካከል `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` ቅንብሮች።
* አዲስ: እምነት የሚጣልባቸው የ IP ክልል ስብስቦችን (trusted IP ranges) ለማስቀረት `wu_cap_rate_limit_whitelist_ip` filter።
* አዲስ: ጠንካራ የፍጥነት ገደብ ምላሽ ከመላኩ በፊት ወዲያውኑ የሚሰራ `wu_cap_rate_limit_will_block` action።
* አዲስ: ስፖፍን መቋቋም የሚችል የclient-IP መለየት። `Captcha_Core::get_client_ip()` (የrate-limit bucket ቁልፎች፣ captcha siteverify `remoteip` እና ስታትስቲክስ IP hashes ምንጭ) አሁን ጥብቅ የትምህርት ሞዴልን ያስገድዳል፦ `REMOTE_ADDR` መሠረቱ ነው፣ `CF-Connecting-IP` የሚከበረው ወዲያውኑ ባልደረባ በወቅታዊ Cloudflare IP ክልል ውስጥ ሲሆን፣ እና `X-Forwarded-For` የሚከበበው ወዲያውኑ ባልደረባ በአስተዳሚው በተዘጋጀው እምነት የሚጣልበት-proxy ዝርዝር ውስጥ ሲሆን፣ ይህም እምነት የሚጣልባቸው/CF ሆፖችን ትቶ ወደ ተጎብኙ IP እስኪደርስ ድረስ ቀኝ ወደ ግራ በሚሄድ መንገድ ይሰራል።
* አዲስ: `cap_trust_cloudflare_headers` ቅንብር (በመነሻው OFF) — Cloudflare ከኋላ ሲሆኑ `CF-Connecting-IP` እምነትን ለማንቃት አማራጭ ያደርጋል። ፕለግኢኑ የተሰበሰበ Cloudflare CIDR ስንጥቅ (snapshot) ይይዛል እና የwp-cron በሳምንት አንድ ጊዜ በማደስ፣ ማደስ ካልተሳካ በfallback አማራጭ ይሰራል።
* አዲስ: `cap_trusted_proxies` ቅንብር — የራስዎን የፊት መስመር ፕሮክሲዎች / load-balancers የሚያዘረብ CIDRs ወይም ባዶ IPዎች (እያንዳንዱ በአንድ መስመር፣ `#` አስተያየቶች ይፈቀዳሉ) የያዘ የጽሑፍ ሳጥን (textarea)። ይህ ባይኖርም፣ rate limiter ቢበራ እንኳን `X-Forwarded-For` ችላ ይባላል።
* አዲስ: ሊከሰት የሚችል Cloudflare / proxy ሁኔታን በቅጽበት የሚያገኝ የመጀመሪያ ደረጃ አውቶ-ማወቅ (auto-detection) እና በአንድ ጠቅታ "Apply detected settings" የሚል የአስተዳሚ ማሳሰቢያ። ፕለግኢኑ የተቀመጡትን እሴቶች በፍጹም አይተካም። ተከታይ ትራፊክ የእርስዎ ውቅር ከእውነታው ጋር አለመመሳሰሉን የሚያመለክት ከሆነ (ለምሳሌ Cloudflare CIDR ክልል ሲቀይር እና የፕሮክሲ CIDRዎ አሁን ያለፈ ከሆነ)፣ ሊቀበል የማይችል ልዩነት ማሳሰቢያ የሚመጣውን ዝመና ይጠቁማል።
* ተስተካክሏል: የማይታይ ሁነታ (Invisible mode) ከእንግዲህ `cap_security_level`ን በዝምታ ወደ FAST አያወርድም — የአስተዳሚው የተቀመጠው ደረጃ ይከበራል። ለተለያዩ የሥራ ማስኬጃዎች (sites) የራሳቸውን አመክንዮ (bespoke logic) የሚፈልጉበት አዲስ `wu_cap_server_security_level` filter ይገኛል።
* ተስተካክሏል: ስታትስቲክስ `rate_limits_triggered` 카운ተር አሁን በየመዘጋት ጊዜ ይጨምራል፣ አልፎ አልፎ ከስኬት በኋላ በሚሚገኝ የኋላ መከላከያ መንገድ ላይ ብቻ አይደለም።
* ተስተካክሏል: `Captcha_Core::get_client_ip()` አሁን በrate limiter፣ በcaptcha አቅራቢዎች (reCAPTCHA + hCaptcha `siteverify`) እና ስታትስቲክስ ላይ ተጎብኙን IP ለመለየት ብቸኛው እውነት ምንጭ ሆኗል — ቀጥተኛ የኦሪጅን-ሰርቨር ጥያቄዎች የተጭበረበረ `CF-Connecting-IP` header ይዘው ቢመጡም፣ በስፖፍ IP ላይ ሳይሆን በእውነተኛ ባልደረባ ላይ እንዲመዘገቡ በማድረግ የማጭበርበር አቅጣጫን ዘጋ።
* ተስተካክሏል: የWooCommerce classic checkout rate-limit gate አሁን ከ`woocommerce_before_checkout_form` ይልቅ በ`template_redirect` (priority 1) ላይ ይሰራል። የform-level hook ባዶ ጋሪ ሲኖር በፍጹም አይሰራም፣ ስለዚህ ምርት የማይጨምር የጎርፍ ትራፊክ አጥጋቢውን ሙሉ በሙሉ አልፎ ነበር።
* ተስተካክሏል: የWooCommerce pay-for-order rate-limit gate አሁን ከ`woocommerce_before_pay_action` ይልቅ በ`template_redirect` ላይ ይሰራል። ሁለተኛው ደግሞ `wp_verify_nonce('woocommerce-pay')` ስኬታማ ከሆነ በኋላ ብቻ ስለሚሰራ፣ ያልተፈቀደ ተጠቃሚዎች (የእውነተኛ ስጋት ሞዴል) አጥጋቢውን ፈጽሞ አልነኩም።
* ተስተካክሏል: የWooCommerce Store API (blocks) checkout rate-limit gate አሁን ከ`woocommerce_store_api_checkout_update_order_from_request` ይልቅ በ`rest_pre_dispatch` ላይ ይሰራል። ሁለተኛው ደግሞ Store API ጋሪውን እና የሂሳብ ክፍያ መስኮቶችን ካረጋገጠ በኋላ ብቻ ስለሚሰራ፣ ያልተፈቀደ ቦቶች ከvalidator 400 ተቀብለው አጥጋቢውን ፈጽመው አልሄዱም።
* ተስተካክሏል: የUltimate Multisite inline-login rate-limit gate አሁን ከ`wu_before_inline_login` ይልቅ በ`wu_ajax_nopriv_wu_inline_login` priority 1 (እና በተመዝጋቢው መስተጋብር) ላይ ይሰራል። ሁለተኛው ደግሞ `check_ajax_referer('wu_checkout')` ስኬታማ ከሆነ በኋላ ብቻ ስለሚሰራ፣ ትክክለኛ wu_checkout nonce የሌላቸው ያልተፈቀደ ቦቶች 403 ተቀብለው አጥጋቢውን ፈጽመው አልሄዱም።
* ተስተካክሏል: `Rate_Limiter::enforce()` አሁን በ`surface|ip` ቁልፍ የሚሰራ አንድ ጊዜ በየጥያቄው መከላከያ (guard) ይተገብራል፣ ስለዚህ ከሁለት ጊዜ በየrender የሚሰሩ የupstream hooks (በተለይ Ultimate Multisite ውስጥ ያለው `wu_setup_checkout`) የብቃት የrate-limit ገደብን በግማሽ አያደርጉም።
* ተስተካክሏል: የrate-limit surface gates ከእንግዲህ `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter) ጋር አይመከሩም። ያ filter "captcha በሌላ surface ቀድሞ ተይዟል" ማለት ሲሆን ከጎርፍ መከላከል ጋር የተያያዘ አይደለም — የWooCommerce ውህደቱ በWoo nonce ሲኖር የWordPress login captchaን ለማለፍ አገናኝ አድርጎ ነበር፣ ይህም በrate counting ውስጥ ዘልቆ አልፎ Woo POSTs አጥጋቢውን እንዲያልፉ አድርጓል። አሁን ብቸኛው የሚያልፍ የrate-limit-specific `wu_cap_rate_limit_whitelist_ip` filter ብቻ ነው።

Version: 1.3.2 - በ2026-01-27 የወጣ
* ተስተካክሏል: Elementor ወይም ሌላ የገጽ አሰሪ (page builders) በሚጠቀሙበት ጊዜ በcheckout forms ላይ Cap widget አይታይም።
* ተስተካክሏል: cap-widget custom element በwp_kses() sanitization ይወገዳል።
* ተሻሽሏል: የcheckout captcha field የHTML ማጣሪያን ለማለፍ callable content ጥቅም ላይ ውሏል።
* ተሻሽሏል: ለድንበሮች (edge cases) የfallback ያለው JavaScript ቀለል ተደርጓል።

Version: 1.3.1 - በ2026-01-26 የወጣ
* ተስተካክሏል: Cap Captcha የማይታይ ሁነታ (invisible mode) በdynamic Ultimate Multisite checkout forms ላይ በራስ-ሰር አይፈታም።
* ተሻሽሏል: Cap checkout script አሁን በMutationObserver ተጠቅሞ በdynamic ሁኔታ በሚጫኑ widgets ይለያል።
* ተሻሽሏል: ከመላክ በፊት token ለመጠበቅ የcheckout ቁልፍ መቆጣጠሪያ (button interception) ተጨምሯል።

Version: 1.3.0 - በ2026-01-27 የወጣ
* አዲስ: የWooCommerce Blocks checkout integration በStore API fetch interception ተጨምሯል።
* አዲስ: ለWooCommerce checkout የማይታይ captcha ድጋፍ (hCaptcha invisible, reCAPTCHA v2 invisible, v3)።
* አዲስ: Ultimate Multisite ሳይጠቀሙ ለመጠቀም የራሱ ቅንብሮች ገጽ (standalone settings page)።
* አዲስ: የጥቅም ጥገኝነት ግጭት ለመከላከል Jetpack Autoloader።
* ተስተካክሏል: hCaptcha በdynamic Ultimate Multisite checkout (AJAX-loaded content) ላይ አይታይም።
* ተስተካክሏል: የform validation ስህተቶች ሲከሰቱ Captcha አያድስም/አይቀይርም።
* ተስተካክሏል: hCaptcha በWooCommerce checkout ገጽ ላይ አይታይም።
* ተስተካክሏል: reCAPTCHA class not found error (google/recaptcha PHP library ተጨምሯል)።
* ተሻሽሏል: በWordPress hooks፣ MutationObserver እና AJAX interception በኩል የስህተት መለየት።
* ተሻሽሏል: የቅንብሮች መግለጫዎች አሁን የAPI ቁልፎች የዳሽቦርድ URLዎችን ይይዛሉ።

Version: 1.2.2 - በ2026-01-24 የወጣ
* ተስተካክሏል: Captcha በUltimate Multisite Login Form Element ላይ አይታይም (form filter name mismatch)።
* ተስተካክሏል: Cap widget HTML በwp_kses() sanitization ይወገዳል።
* ተስተካክሏል: JavaScript selectors በelement IDs ውስጥ ስlashes (/) ባሉ form ላይ አይሰሩም።
* ተጨምሯል: የclassaddons ለሚፈቅዱ የHTML ታግስ ለማስፋት `wu_kses_allowed_html` filter hook።
* ተወግዷል: የሞተ ኮድ JavaScript ፋይሎች በአቅራቢ-ተኮር ስክሪፕቶች ተተክተዋል።

Version: 1.2.1 - በ2026-01-23 የወጣ

* ተስተካክሏል: Cap Captcha token validation በmultisite environments ውስጥ መውደቅ (አሁን በnetwork-wide transients ይጠቀማል)።
* ተስተካክሏል: Captcha በlogin ሁኔታ ምንም ይሁን ምን ለሁሉም ተጠቃሚዎች ወጥ የሆነ አቀራረብ ይሰጣል።
* ተስተካክሏል: በcheckout ውድቀቶች ምክንያት የcaptcha አቀራረብ እና የvalidation መዛባት።

Version: 1.2.0 - በ2026-01-21 የወጣ

* አዲስ: Cap Captcha - በራስ-የተስተናገደ proof-of-work captcha፣ በactivation ጊዜ በነባሪነት ይበራል።
* አዲስ: ያለ-ቅንብር ጥበቃ (Zero-configuration protection) - add-on ን በማንቃት ወዲያውኑ ይጠበቃል።
* አዲስ: ለቀላል ማስፋፊያ (extensibility) የpolymorphic captcha አቅራቢ አርክቴክቸር።
* አዲስ: የWooCommerce Store API checkout በካርድ ሙከራ ጥቃቶች ላይ ጥበቃ።
* አዲስ: ፈተናዎችን፣ ማረጋገጫዎችን እና የተዘጋ ጥቃቶችን የሚያሳየ የስታቲስቲክስ መከታተያ ዳሽቦርድ።
* አዲስ: ለCap Captcha የደረጃ ቅንብሮች (Fast, Medium, Max)።
* አዲስ: ለreCAPTCHA እና hCaptcha አቅራቢዎች የባዶ መሠረተ ክፍሎች (Abstract base classes)።
* ተሻሽሏል: የኮድ መሠረተ ልማት (codebase) ወደ ሞዱላር አቅራቢ ክፍሎች ተደራጅቷል።
* ተሻሽሏል: በየተሰጠው አስተዳዳሪ ክፍል (dedicated manager class) ስጋት መለያየት የተሻሻለ።
* ተስተካክሏል: ለ`$_SERVER` variable sanitization የደህንነት ማሻሻያዎች።
* ተስተካክሏል: ለWordPress naming conventions የPHPUnit test configuration።

Version: 1.0.1 - በ2025-09-28 የወጣ

* ቅድመ-ጽሑፍን ultimate-multisite አድርጎ መጥራት፤ የጽሑፍ ስፋት (text domain) ማዘመን፤ ስሪት መጨመር።
