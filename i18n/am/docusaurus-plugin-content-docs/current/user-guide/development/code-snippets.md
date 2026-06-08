---
title: የኮድ ቁርጥራጮች
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# ለv2 የኮድ ስኒፕበቶች

በመሰረቱ፣ ለ**WordPress** የኮድ ስኒፕበቶች (code snippets) በሌላ መንገድ የተለየ ትንሽ plugin የሚያስፈልጋቸውን አንዳንድ ድርጊቶችን ለማከናወን ያገለግላሉ። እንዲህ ያሉ የኮድ ስኒፕበቶች በWordPress ዋና ፋይሎች ወይም በtheme ፋይሎች (በአጠቃላይ የthemeዎ functions.php ፋይል) ውስጥ ሊቀመጡ ይችላሉ፣ ወይም እንደ MU plugin ሊጠቀሙባቸው ይችላሉ።

በዚህ ጽሑፍ ውስጥ በ**Ultimate Multisite v2** ሊጠቀሙባቸው የሚችሉ ሶስት የኮድ ስኒፕበቶችን እናሳያለን።

* [**የAccount ሜኑ አቀማመጥን መቀየር**](#changing-the-position-of-the-account-menu-item)

* [**ተጠቃሚው በተሰጠ ዕቅድ ውስጥ መሆኑን እና/ወይም ንቁ የደንበኝነት ምዝገባ (active subscription) እንዳለው እንዴት ማረጋገጥ እንደሚቻል**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

* [**በmapped domains ውስጥ የFont-Icons የCORS ችግሮችን መፍታት**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## የAccount ሜኑ አቀማመጥን መቀየር

በደንበኛዎ Dashboard ላይ ያለውን Account ሜኑ አቀማመጥ ለመቀየር፣ የሚከተለውን የኮድ ስኒፕበት ወደ ዋናው የጣቢያዎ (main site) active theme functions.php ውስጥ ይጨምሩ። ስኒፕበቱን በአንዱ mu-plugins ወይም በcustom plugins ውስጥ ማስቀመጥ ይችላሉ።

add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.

## ተጠቃሚው በተሰጠ ዕቅድ ውስጥ መሆኑን እና/ወይም ንቁ የደንበኝነት ምዝገባ (active subscription) እንዳለው እንዴት ማረጋገጥ እንደሚቻል

እንደ network admin፣ የደንበኝነት ምዝገባ (subscription) ሁኔታ እና የተመዘገቡበት ዕቅድ (plan) ላይ በመመስረት መሰረታዊ ድርጊቶችን የሚያከናውኑ ወይም አገልግሎት/ఫీచర్ን በተመረጠ የደንበኞች ወይም የመጨረሻ ተጠቃሚዎች ቡድን ላይ የሚያቀርቡ የራሳቸውን (custom) ተግባራት መፍጠር ሊኖርብዎ ይችላል።

እነዚህ የUltimate Multisite native functions እርስዎ እንዲያደርጉት ይረዳዎታል።

ተጠቃሚው በተሰጠ ዕቅድ ውስጥ መሆኑን ለማረጋገጥ፣ የሚከተለውን ተግባር (function) መጠቀም ይችላሉ፦

wu_has_plan($user_id, $plan_id)

የደንበኝነት ምዝገባው ንቁ (active) መሆኑን ለማረጋገጥ፣ የሚከተለውን ተግባር መጠቀም ይችላሉ፦

wu_is_active_subscriber($user_id)

ከዚህ በታች ያለው ምሳሌ ስኒፕበት አሁን ያለው ተጠቃሚ የተወሰነ ዕቅድ (_Plan ID 50_) ውስጥ መሆኑን እና የተጠቃሚው የደንበኝነት ምዝገባ ንቁ መሆኑን ያረጋግጣል።

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER IS MEMBER OF PLAN AND HIS SUBSCRIPTION IS ACTIVE, DO STUFF} else { // USER IS NOT A MEMBER OF PLAN -- OR -- HIS SUBSCRIPTION IS NOT ACTIVE, DO OTHER STUFF} // end if;

እባክዎ ልብ ይበሉ፡ _**wu_has_plan**_ እንዲሰራ "Plan ID" ያስፈልገዋል።

የዕቅድ (plan) አይዲ ለማግኘት ወደ **Ultimate Multisite > Products** መሄድ ይችላሉ። ለእያንዳንዱ ምርት (product) አይዲ በሠንጠረዡ ቀኝ በኩል ይታያል።

ተጠቃሚዎች Package ወይም Service ላይ ሳይሆን **Plan** ላይ ብቻ መመዝገብ እንደሚችሉ ልብ ይበሉ፣ ምክንያቱም እነዚህ ለ**Plan** ብቻ ተጨማሪዎች (add-ons) ናቸው።

![Products list showing plan IDs](/img/admin/products-list.png)

## በmapped domains ውስጥ የFont-Icons የCORS ችግሮችን መፍታት
## በmapped domains ውስጥ የFont-Icons የCORS ችግሮችን መፍታት

ዶሜን ወደ sub-site ካስቀመጡ በኋላ፣ ጣቢያው የcustom fontsዎችን መጫን ላይ ችግር እንዳለበት ሊያገኙ ይችላሉ። ይህ ደግሞ በserver settingsዎ ላይ ባለው cross-origin block ምክንያት ነው።

የfont ፋይሎች ሁልጊዜም በቀጥታ ከCSS ስለሚጫኑ፣ የdomain mapping plugin ያለበት የurls አድራሻን ከመጀመሪያው ዶሜን (original one) ወደ ተቀመጠው ዶሜን (mapped domain) ለመቀየር አይችልም። ስለዚህ ችግሩን ለመፍታት የserver configuration ፋይሎችዎን ማሻሻል ያስፈልግዎታል።

ከዚህ በታች ለApache እና ለNGINX ችግሩን ለመፍታት የኮድ ስኒፕበቶች ቀርበዋል። እነዚህ ለውጦች የserver configuration ፋይሎች (.htaccess ፋይሎች እና NGINX config ፋይሎች) የላቀ እውቀት ይጠይቃሉ። እነዚህን ለውጦች በራስዎ ማድረግ ካልቻሉ፣ እርዳታ ሲፈልጉ ይህን ገጽ ለhosting provider support agentsዎ ይላኩ።

### Apache

በ.htaccess ፋይልዎ ላይ ይጨምሩ፦

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX

በserver config ፋይልዎ ላይ (ቦታው ከserver ወደ server ይለያያል) ይጨምሩ፦

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
