---
title: WordPress Multisiteን እንዴት መጫን ይቻላል?
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# የዎርድፕሬስ መልቲሳይት (Multisite) እንዴት እጫንዋለሁ?

WordPress Multisite በአንድ ተከላ (installation) ላይ የብዙ ድረ-ገጽ አውታረ መረብ (network of sites) እንዲኖር ያስችላል። ይህ በተ組み込まል ባህሪ (built-in feature) ቢሆንም፣ በቅድፋት (default) አይሰራም።

:::tip
Ultimate Multisite **[በተ組み込まል የመልቲሳይት መመሪያ (built-in Multisite Setup Wizard)](./multisite-setup-wizard)** አለው ይህም ይህን ሙሉ ሂደት በራስ-ሰር ያከናውናል። Ultimate Multisite ከጫኑት፣ ከዚህ በታች ያሉትን በእጅ የሚሰሩ ደረጃዎች ከመከተል ይልቅ አስማሚውን (wizard) መጠቀም እንመክራለን።
:::

Ultimate Multisite የአውታረ መረብ ብቻ 플ugin ስለሆነ፣ በዚህ ትምህርት ውስጥ WordPress Multisiteን በእጅ እንዴት መጫን እና ማዘጋጀት እንደሚችሉ ይማራሉ። ይህ ጽሑፍ የተመሰረተው ከWPBeginner ድረ-ገጽ ላይ ካለው [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) ላይ ነው።

**የመልቲሳይት አውታረ መረብዎን ከመፍጠርዎ በፊት ትኩረት ሊሰጧቸው የሚገባ ነገሮች:**

*   ጥሩ የWordPress ሆስቲንግ (hosting) ያግኙ! በአውታረ መረብ ላይ ያሉ ድረ-ገጾች ተመሳሳይ የሰርቨር ሀብቶችን ይጋራሉ።

*   በጣም ጥቂት ትራፊክ ያላቸው ጥቂት ድረ-ገጾች ብቻ ካሉዎት፣ የጋራ ሆስቲንግ (shared hosting) ምናልባት በቂ ሊሆን ይችላል።

*   አብዛኛዎቹ **የተተዳደሩ የWordPress ሆስቲንግ አገልግሎት ሰጪዎች (Managed WordPress hosting providers)** መልቲሳይትን ከጥቅም መጀመሪያ (out-of-the-box) ይሰጣሉ (እነሱ WordPressን መልቲሳይት ቀድሞ ተንቀሳቅሶና ተዋቅሮልዎታል)። ይህ ለ WP Engine, Closte, Cloudways ወዘተ ነው። የሆስቲንግ አገልግሎት ሰጪዎ ይህንኑ የሚያደርገው መሆኑ እርግጠኛ ካልሆኑ፣ በዚህ ትምህርት ከመቀጠልዎ በፊት የድጋፍ ሰጪውን (support) ክፍል ያነጋግሩ።

*   በተጨማሪም፣ WordPressን መጫን እና በFTP በመጠቀም ፋይሎችን ማርትዕ (editing) መተዋወቅ ጥሩ ነው።

_**ጠቃሚ ማሳሰቢያ**_ **:** በአሁኑ ጊዜ ባለው የWordPress ድረ-ገጽ ላይ መልቲሳይት አውታረ መረብ እየሰሩ ከሆነ የሚከተሉትን ማድረግን አይርሱ፦

*   የWordPress ድረ-ገጽዎን ሙሉ ምትኬ (complete backup) ይውሰዱ

*   በፕልugin ገጽ በመሄድ ሁሉንም ፕልuginዎች በማጥፋት (Deactivate) እና በቡድን እርምጃዎች (bulk actions) ውስጥ _Deactivate_ በመምረጥ ከዚያም _Apply_ በማድረግ ሁሉንም ፕልuginዎች ያጥፉ።

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

መልቲሳይትን ለማንቃት፣ በመጀመሪያ በFTP client ወይም በcPanel file manager በመጠቀም ወደ ድረ-ገጽዎ ይግቡ እና የwp-config.php ፋይልዎን ለማርትዕ ይክፈቱ።

ከ_*That’s all, stop editing! Happy blogging.*_ መስመር በፊት፣ የሚከተለውን የኮድ ክፍል (code snippet) ይጨምሩ፦

define('WP_ALLOW_MULTISITE', true);

የwp-config.php ፋይልዎን ያስቀምጡ (Save) እና ወደ ሰርቨሩ መልሰው ይጫኑ (upload)።

መልቲሳይት ባህሪ በድረ-ገጽዎ ላይ ከተንቀሳቀሰ በኋላ፣ አሁን አውታረ መረብዎን ለማዘጋጀት ጊዜው ደርሷል።

ወደ **Tools » Network Setup** ይሂዱ

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

አሁን በአውታረ መረብዎ ውስጥ ያሉ ድረ-ገጾች ምን ዓይነት የዶሜን መዋቅር (domain structure) እንደሚጠቀሙ (ንዑስ ዶሜን ወይም ንዑስ ዳይሬክቶሪ) ለWordPress መንገር አለብዎት።

ንዑስ ዶሜን (subdomains) ከመረጡ፣ ለዶሜን ካርታ (domain mapping) የDNS ቅንብሮችዎን መቀየር እና ለመልቲሳይት አውታረ መረብዎ _**wildcard subdomains**_ መዘርጋትዎን ያረጋግጡ።

ወደ Network Setup ተመልሰው፣ ለአውታረ መረብዎ ርዕስ ይስጡ እና በNetwork admin email ውስጥ ያለው ኢሜይል አድራሻ ትክክል መሆኑን ያረጋግጡ። ለመቀጠል _Install_ የሚለውን ይጫኑ።

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

ይህንን ኮድ፣ በWordPress የቀረበውን፣ ወደ _**wp-config.php**_ዎ ይጨምሩ፦

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

እና ይህንን ኮድ፣ በWordPress የቀረበውን፣ ወደ _**.htaccess**_ ፋይልዎ ይጨምሩ፦

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

ይህንን ኮድ በሁለቱ ፋይሎች ውስጥ ለመቅዳት እና ለመለጠፍ (copy and paste) የFTP client ወይም የፋይል አስተዳዳሪ (file manager) ይጠቀሙ (ለምሳሌ cPanel እየተጠቀሙ ከሆነ)።

በመጨረሻም፣ መልቲሳይት አውታረ መረብዎን ለመድረስ ወደ WordPress ድረ-ገጽዎ እንደገና ይግቡ።

**Ultimate Multisite ከመጫንዎ በፊት በWordPress Multisite ተከላዎ ላይ ንዑስ ድረ-ገጽ (subsite) መፍጠር እና መሞከር አስፈላጊ ነው።**

ንዑስ ድረ-ገጽ ለመፍጠር፦

  1. የድረ-ገጽዎ wp-admin ይክፈቱ

  2. ወደ My Sites > Sites (/wp-admin/network/sites.php) ይሂዱ

  3. ከላይ ባለው ቦታ ላይ Add New የሚለውን ይጫኑ

  4. ሁሉንም መስኮች ይሙሉ፦

  * Site Address — "www" በፍጹም አይጠቀሙ

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — የድረ-ገጹ ርዕስ ነው፣ በኋላ ሊቀየር ይችላል

  * Admin Email — ለንዑስ ድረ-ገጽ የመጀመሪያ አስተዳዳሪ ተጠቃሚ (admin user) አድርገው ያዘጋጁ

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

መስኮቶቹን ከሞሉ በኋላ፣ "Add site" የሚለውን ቁልፍ ይጫኑ። አዲሱ ንዑስ ድረ-ገጽ ከተፈጠረ በኋላ፣ ንዑስ ድረ-ገጹ በትክክል እየሰራ መሆኑን ለማረጋገጥ ይጎበኙት።

## የተለመዱ ችግሮች፦

### 1. አዳዲስ ድረ-ገጾችን መፍጠር እችላለሁ ግን መድረስ አልችልም።

ንዑስ ዶሜን (subdomains) ከመረጡ፣ ለመልቲሳይት አውታረ መረብዎ ዋይልድካርድ ንዑስ ዶሜን (wildcard subdomains) መዘርጋት አለብዎት።

ይህንን ለማድረግ፣ ወደ የድረ-ገጽዎ የሆስቲንግ አካውንት የቁጥጥር ፓነል ዳሽቦርድ (control panel dashboard) ይሂዱ (ለምሳሌ የሆስቲንግ አገልግሎት ሰጪዎ ላይ በመመስረት cPanel/Plesk/Direct Admin)።

“Domains” ወይም “Subdomains” የሚል አማራጭ ይፈልጉ። በአንዳንድ የቁጥጥር ፓነሎች “Domain administration” ተብሎ ተሰይሟል።

በንዑስ ዶሜን (subdomain) መስክ ውስጥ፣ አንድ ኮከብ ምልክት (*) ያስገቡ። ከዚያ፣ ንዑስ ዶሜኑ እንዲጨመርበት የትኛን የዶሜን ስም መምረጥ እንዳለበት ይጠይቅዎታል።

ለተመረጠው የዶሜን ስም የዶክመንት ሥር (document root) በራስ-ሰር ይለቀቃል። ዋይልድካርድ ንዑስ ዶሜንዎን ለመጨመር _Create_ ወይም _Save_ የሚለውን ቁልፍ ይጫኑ። መረጃው “*.[mydomain.com](http://mydomain.com)” መልክ ሊታይ ይገባል።
