---
title: የመሰረታዊ ፅንሰ ሀሳቦች
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# መሰረታዊ ፅንሰ-ሀሳቦች

ለአዲስ WordPress Multisite ተጠቃሚ እና Ultimate Multisiteን መጠቀም የጀመሩ ሰው፣ መጀመሪያ ላይ ብዙ አዳዲስ ቃላት እና ሀረጎች ሊያጋጥሙ ይችላሉ። እነዚህን መማር አስፈላጊ ነው ምክንያቱም መድረኩን እና በአጠቃላይ እንዴት እንደሚሰራ መረዳት ያስፈልግዎታል።

በዚህ ጽሑፍ ውስጥ፣ በWordPress ውስጥ ያሉ አንዳንድ ቁልፍ ፅንሰ-ሀሳቦችን ለመግለጽ እና ለማብራራት እንሞክራለን። ከእነዚህ ውስጥ አንዳንዶቹ ለተጠቃሚዎች፣ አንዳንዶቹ ለገንቢዎች፣ እና አንዳንዶቹ ደግሞ ለሁለቱም ሊሆኑ ይችላሉ።

## WordPress Multisite

WordPress **Multisite** ማለት አንድ የWordPress ዳሽቦርድ (dashboard) በመጠቀም በርካታ ድረ-ገጾችን ኔትወርክ (network) መፍጠር እና ማስተዳደር የሚፈቅድ የWordPress ተከላ (installation) ዓይነት ነው። የሳይት ብዛት፣ ባህሪያት፣ ቴሞች (themes) እና የተጠቃሚ ሚናዎችን ጨምሮ ሁሉንም ነገር ማስተዳደር ይችላሉ። በመቶዎች እና በሺዎች የሚቆጠሩ ድረ-ገጾችን ማስተዳደር ይቻላል።

## Network

በWordPress አገላለጽ፣ የmultisite network ማለት በርካታ **subsites** ከአንድ ዳሽቦርድ መስተዳደር የሚችሉበት ቦታ ነው። ምንም እንኳን የmultisite network መፍጠር በሆስቲንግ ሰጪዎች (hosting providers) መካከል ቢለያይም፣ የመጨረሻው ውጤት WordPress በዚህ የተወሰነ ሁነታ እየሰራ መሆኑን እንዲያውቅ የሚያስቀምጡ ጥቂት ተጨማሪ መመሪያዎች በ**wp-config.php** ፋይል ውስጥ ይሆናሉ።

በmultisite network እና በነጠላ (stand-alone) WordPress ተከላ መካከል ጥቂት ልዩነቶች አሉ፣ እና እነዚህን በአጭሩ እንወያያለን።

## Database

ዳታቤዝ (database) ማለት መዋቅራዊ፣ የተደራጀ የዳታ ስብስብ ነው። በኮምፒውተር ቃላት አጠቃቀም፣ ዳታቤዝ ማለት ዳታ ለማከማቸት እና ለማደራጀት የሚያገለግል ሶፍትዌርን ያመለክታል። እንደ ፋይል ካቢኔ ያስቡት፣ እዚያም በሠንጠረዦች (tables) በተባሉ የተለያዩ ክፍሎች ውስጥ ዳታ ያከማቻሉ።

WordPress Multisite አንድ ዳታቤዝን ይጠቀማል፣ እያንዳንዱ subsite ደግሞ በprefix ውስጥ የብሎግ አይዲ (blog id) ባለው የራሱ ሠንጠረዥ (tables) አለው። ስለዚህ፣ የኔትወርክ ተከላውን ከጫኑ እና subsite ፈጠሩ፣ እነዚህን ሠንጠረዦች ሊኖሩዎት ይገባል፡

_wp_1_options_ \- ለየመጀመሪያው subsite የoptions ሠንጠረዥ

_wp_2_options_ \- ለሁለተኛው subsite የoptions ሠንጠረዥ

## Hosting provider

የሆስቲንግ ሰጪ (hosting provider) ማለት ንግዶችን እና ግለሰቦችን ድረ-ገጾቻቸውን በዓለም አቀፍ ድር ጣቢያ (World Wide Web) እንዲያቀርቡ የሚያስችላቸው ኩባንያ ነው። የዌብ ሆስቲንግ ሰጪዎች የሚያቀርቡት አገልግሎቶች ይለያያሉ፣ ነገር ግን በአጠቃላይ የድረ-ገጽ ዲዛይን፣ በሆስት ላይ የማከማቻ ቦታ እና ከኢንተርኔት ጋር ያለው ግንኙነትን ያካትታሉ።

## Domain

የዶሜን ስም (domain name) ሰዎች ድረ-ገጽዎን ለመጎብኘት የሚያገለግል አድራሻ ነው። የዌብ ብራውዘርዎ የት እንደሚፈልግ ይነግረዋል። ልክ እንደ የመንገድ አድራሻ፣ ዶሜን ስም ሰዎች ድረ-ገጽዎን በመስመር ላይ የሚያገኙበት መንገድ ነው። እናም፣ እንደ መደብርዎ ፊት ለፊት ባለው ምልክት መሆን ነው። የእኛን ድረ-ገጽ መጎብኘት ከፈለጉ፣ በብራውዘርዎ አድራሻ ላይ የእኛን የዌብ አድራሻ መተየብ ይኖርብዎታል ይህም [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) ነው፣ እዚያም [**ultimatemultisite.com**](http://ultimatemultisite.com) የዶሜን ስም ነው።

## Subdomain

Subdomain ማለት ከዋናው ዶሜን ስር ያለ የድረ-ገጽ ተዋረር (hierarchy) ዓይነት ነው፣ ነገር ግን ይዘትን በድረ-ገጽ ላይ ለማደራጀት አቃፊዎችን (folders) ከመጠቀም ይልቅ፣ የራሱ ድረ-ገጽ አለው። [**https://site1.domain.com/**](https://site1.domain.com/) በሚለው መልኩ ቀርቧል፣ እዚያም _site1_ የsubdomain ስም ሲሆን [_domain.com_](http://domain.com) ደግሞ ዋናው ዶሜን ነው።

## Subdirectory

Subdirectory ማለት ከዋና ዶሜን ስር ያለ የድረ-ገጽ ተዋረር (hierarchy) ዓይነት ሲሆን ይዘትን በድረ-ገጽ ላይ ለማደራጀት አቃፊዎችን (folders) ይጠቀማል። Subdirectory ከsubfolder ጋር ተመሳሳይ ነው እና ስሞቹ በተቀያየሩ መልኩ ሊጠቀሙባቸው ይችላሉ። [**https://domain.com/site1**](https://domain.com/site1) በሚለው መልኩ ቀርቧል፣ እዚያም _site1_ የsubdirectory ስም ሲሆን [_domain.com_](http://domain.com) ደግሞ ዋናው ዶሜን ነው።

## Subsite

Subsite ማለት በMultisite network ላይ የሚፈጥሩት የልጅ ድረ-ገጽ (child site) ነው። WordPress Multisite ተከላዎ እንዴት እንደተዘጋጀ ላይ በመመስረት **subdomain** ሊሆን ይችላል ወይም **subdirectory** ሊሆን ይችላል።

## Super Admin

የWordPress Super Admin ማለት በMultisite network ላይ ያሉትን ሁሉንም subsites ለማስተዳደር ሙሉ አቅም ያለው የተጠቃሚ ሚና (user role) ነው። ለMultisite ተጠቃሚዎች፣ ለWordPress ተከላዎ ሊሰጡት የሚችሉት **ከፍተኛ ደረጃ መዳረሻ** ነው።

## Plugin

በአጠቃላይ፣ plugin ማለት ለWordPress ድረ-ገጽዎ ተጨማሪ ተግባር የሚጨምር የኮድ ስብስብ ነው። ይህ የሎጊን አርማን መቀየር ያህል ቀላል ሊሆን ይችላል ወይም የኢ-ኮሜርስ ተግባርን መጨመር ያህል ውስብስብ ሊሆን ይችላል። _Woocommerce እና Contact Form_ የplugin ምሳሌዎች ናቸው።

በWordPress Multisite ላይ፣ plugins የሚጫኑት ከnetwork admin dashboard በSuper Admin ብቻ ነው። Subsite Admins ደግሞ plugins በየsubsite ስራቸው ውስጥ ብቻ መפעል እና ማጥፋት ይችላሉ።

## Themes

የWordPress theme ማለት የድረ-ገጹን አጠቃላይ መልክ የሚወስን የፋይሎች ስብስብ (_ግራፊክስ፣ style sheets፣ እና ኮድ_) ነው። እንደ የቅርጸ-ቁምፊ ስታይል፣ የገጽ አቀማመጥ፣ ቀለሞች ወዘተ ያሉ የፊት-መጨረሻ (front-end) ስታይሊንግ ሁሉንም ያቀርባል።

Plugins ልክ እንደሱ፣ በWordPress Multisite ላይ themes የሚጫኑት በSuper Admin ብቻ ሲሆን፣ በsubsite ደረጃ ደግሞ በsubsite admins ሊበራ ይችላል።

## Site Template

**Site Template** ማለት በኔትወርክዎ ውስጥ አዳዲስ ድረ-ገጾችን ሲፈጥሩ እንደ መሰረት (base) ሊያገለግል የሚችል የቅድመ-ዝግጅት ድረ-ገጽ (boilerplate site) ነው።

ይህ ማለት መሰረታዊ ድረ-ገጽ መፍጠር፣ የተለያዩ plugins ማብራት፣ ንቁ theme መቅረጽ እና በፈለጉት መንገድ ማበጀት ይችላሉ። ከዚያም፣ ደንበኛዎ አዲስ አካውንት ሲፈጥር፣ በውስጡ ትርጉም ያለው ይዘት የሌለው መደበኛ የWordPress ድረ-ገጽ ከመቀበል ይልቅ፣ ሁሉንም ማበበጅ እና ይዘት ቀድሞ ባሉበት የመሰረታዊ ድረ-ገጽ ቅጂ ይቀበላል።

## Domain Mapping

በWordPress ውስጥ **Domain mapping** ማለት የአንድ ድረ-ገጽ አድራሻን በመጠቀም ተጠቃሚዎችን ወደ ትክክለኛው 호ስት (host) መላክበት መንገድ ነው። በWordPress Multisite ውስጥ፣ subsites በsubdirectory ወይም subdomain ተጠቅመው ይፈጠራሉ። የdomain mapping የሚያደርገው subsite ተጠቃሚዎች የራሳቸውን የሳይት አድራሻ ይበልጥ ሙያዊ እንዲመስል [**joesbikeshop.com**](http://joesbikeshop.com) የመሳሰሉ የከፍተኛ ደረጃ ዶሜን (top-level domain) እንዲጠቀሙ ያስችላል።

## SSL

SSL ማለት **Secure Sockets Layer** ማለት ነው። የዌብ ድረ-ገጽን ማንነት የሚያረጋግጥ እና የተመሰጠረ ግንኙነት (encrypted connection) የሚያስችል ዲጂታል ሰርተፍኬት ነው። ዛሬ በኢንተርኔት ግንኙነትን ደህንነት ለመጠበቅ እና በሁለት ሲስተሞች መካከል በሚላክ ማንኛውም ስሜታዊ ዳታ ለመጠበቅ የሚያገለግል መደበኛ ቴክኖሎጂ ነው። ወንጀለኞች ሊተላለፍ ባለው ማንኛውም መረጃ፣ ሊሆኑ ከሚችሉ የግል ዝርዝሮች ጨምሮ፣ ማንበብ እና ማሻሻል እንዳይችሉ ይከላከላል። ዘመናዊ ብራውዘሮች SSL ስለሚጠይቁ፣ ድረ-ገጽ ለመፍጠር እና ለማስኬድ አስፈላጊ ያደርገዋል።

## Media

Media ማለት ድረ-ገጽን የሚያስገኙ ምስሎች፣ ኦዲዮ፣ ቪዲዮ እና ሌሎች ፋይሎች ናቸው።

በWordPress Multisite ውስጥ የኔትወርክ ድረ-ገጾች አንድ የዳታቤዝን ይጋራሉ፣ ነገር ግን ለሚዲያ ፋይሎች በተለያዩ የፋይል ሲስተም (filesystem) መንገዶች (paths) ይይዛሉ።

መደበኛው የWordPress ቦታ (wp-content/uploads) ይቀራል፤ ሆኖም፣ አድራሻው የኔትወርክ ድረ-ገጹን ልዩ አይዲ (ID) የሚያንፀባርቅ ሆኖ ይቀየራል። በዚህም ምክንያት የኔትወርክ ድረ-ገጽ የሚዲያ ፋይሎች እንደ wp-contents/uploads/site/[id] ይታያሉ።

## Permalinks

Permalinks ማለት በሳይትዎ ውስጥ ባለው የእያንዳንዱ የብሎግ ልጥፍ ወይም ገጽ ውስጥ ያሉ ዘላቂ URLዎች (permanent URLs) ናቸው። Permalinks በተጨማሪም **pretty links** ተብለው ይጠራሉ። በነባሪነት፣ የWordPress URLዎች የquery string ቅርጸት (query string format) ይጠቀማሉ ይህም የሚከተለውን ይመስላል፡

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite ለWordPress Multisite ተከላዎች የተሰራ የWordPress plugin ሲሆን፣ የWordPress ተከላዎን ወደ ተራ የሳይት ኔትወርክ—እንደ [WordPress.com](https://WordPress.com)—ይለውጠዋል፣ ይህም ደንበኞች በወርሃዊ፣ በሩብ ዓመት ወይም በዓመታዊ ክፍያ (ነጻ ዕቅዶችንም መፍጠር ይችላሉ) ሳይት እንዲፈጥሩ ያስችላል።

## Checkout Form

Checkout Form ማለት የsubsite፣ የአባልነት (membership) እና የተጠቃሚ አካውንቶችን በUltimate Multisite ምዝገባ አማካኝነት የሚያካትት አንድ ወይም ብዙ ደረጃ ያለው የትዕዛዝ ቅጽ (order form) ነው። ተጠቃሚው በምዝገባ ሂደት ውስጥ ማስገባት ያለባቸው የተለያዩ መስኮች እና የክፍያ ቅጾችን ያካትታል።

## Webhook

Webhook (በweb callback ወይም HTTP push API ተብሎም ይጠራል) አንድ መተግበሪያ (app) ለሌሎች መተግበሪያዎች በቅጽበታዊ እውቀት (real-time information) የሚያቀርብበት መንገድ ነው። Webhook ዳታ ሲከሰት ለሌሎች መተግበሪያዎች መረጃ ያደርሳል፣ ይህም ማለት መረጃውን ወዲያውኑ ያገኛሉ።

**Ultimate Multisite webhooks** ማለቂያ የሌላቸው እድሎችን ይከፍታሉ፣ የኔትወርክ አስተዳሚዎች ሁሉንም ዓይነት አስደናቂ ግን ጠቃሚ ውህደቶችን (integrations) እንዲያደርጉ ያስችላሉ፣ በተለይም ከ_Zapier እና IFTTT_ ባሉ አገልግሎቶች ጋር ሲጣመሩ።

## Events

Event ማለት ተጠቃሚው ወይም ሌላ ምንጭ የሚያደርገው እርምጃ ውጤት ሆኖ የሚከሰት ድርጊት ነው፣ ለምሳሌ እንደ አይጥ መጫን (mouse click)። Ultimate Multisite በጠቅላላው ኔትወርክዎ ውስጥ እየተከሰቱ ያሉ ሁሉንም ክስተቶች እና መዝገቦች (logs) ይይዛል። እንደ ዕቅድ ለውጥ ያሉ በmultisiteዎ ውስጥ የሚከሰቱ የተለያዩ እንቅስቃሴዎችን ይከታተላል።
