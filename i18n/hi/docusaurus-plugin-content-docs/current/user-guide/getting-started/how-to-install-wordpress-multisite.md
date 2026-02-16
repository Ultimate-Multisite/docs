---
title: WordPress Multisite कैसे इंस्टॉल करें
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# मैं WordPress Multisite कैसे Install करूं?

WordPress Multisite आपको एक ही installation पर कई साइटों का नेटवर्क बनाने की सुविधा देता है। यह एक built-in फीचर है, लेकिन डिफ़ॉल्ट रूप से सक्रिय नहीं होता।

:::tip
Ultimate Multisite में एक **[built-in Multisite Setup Wizard](./multisite-setup-wizard)** शामिल है जो इस पूरी प्रक्रिया को स्वचालित कर देता है। अगर आपके पास Ultimate Multisite installed है, तो हम नीचे दिए गए मैन्युअल स्टेप्स की बजाय wizard का उपयोग करने की सलाह देते हैं।
:::

चूंकि Ultimate Multisite एक network-only plugin है, इस ट्यूटोरियल में आप सीखेंगे कि WordPress Multisite को मैन्युअली कैसे install और setup करें। यह टेक्स्ट WPBeginner के [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) पर आधारित है।

**अपना multisite नेटवर्क बनाने से पहले इन बातों का ध्यान रखें:**

  * अच्छी WordPress hosting लें! नेटवर्क की सभी वेबसाइटें एक ही सर्वर के resources साझा करती हैं।

  * अगर आपके पास कम traffic वाली सिर्फ कुछ साइटें हैं, तो shared hosting शायद आपके काम आ जाएगी।

  * ज्यादातर **Managed WordPress hosting providers** Multisite out-of-the-box प्रदान करते हैं (वे WordPress को Multisite पहले से activated और configured करके install करते हैं)। WP Engine, Closte, Cloudways आदि इसी श्रेणी में आते हैं। अगर आप सुनिश्चित नहीं हैं कि आपके host provider के साथ ऐसा है या नहीं, तो इस ट्यूटोरियल को आगे बढ़ाने से पहले उनकी support टीम से संपर्क करें।

  * WordPress install करने और FTP का उपयोग करके फाइलों को edit करने से परिचित होना भी अच्छा रहेगा।

_**महत्वपूर्ण**_ **:** अगर आप किसी मौजूदा WordPress वेबसाइट पर multisite नेटवर्क सेटअप कर रहे हैं तो यह न भूलें:

  * अपनी WordPress साइट का पूरा backup बनाएं

  * अपनी साइट के सभी plugins को deactivate करें - plugins पेज पर जाएं, bulk actions से _Deactivate_ चुनें और फिर _Apply_ पर क्लिक करें

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Multisite को enable करने के लिए, पहले FTP client या cPanel file manager का उपयोग करके अपनी साइट से कनेक्ट करें, और अपनी wp-config.php फाइल को editing के लिए खोलें।

_*That's all, stop editing! Happy blogging.*_ लाइन से पहले, यह code snippet जोड़ें:

define('WP_ALLOW_MULTISITE', true);

अपनी wp-config.php फाइल को save करें और सर्वर पर वापस upload करें।

आपकी साइट पर multisite फीचर enable होने के बाद, अब अपना नेटवर्क setup करने का समय है।

**Tools » Network Setup** पर जाएं

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

अब आपको WordPress को बताना होगा कि आप अपने नेटवर्क की साइटों के लिए किस प्रकार की domain structure का उपयोग करेंगे: subdomains या subdirectories।

अगर आप subdomains चुनते हैं, तो आपको domain mapping के लिए अपनी DNS settings बदलनी होंगी और अपने multisite नेटवर्क के लिए _**wildcard subdomains**_ setup करना सुनिश्चित करें।

Network Setup पर वापस आकर, अपने नेटवर्क को एक title दें और सुनिश्चित करें कि Network admin email में दिया गया email address सही है। जारी रखने के लिए _Install_ पर क्लिक करें।

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

WordPress द्वारा प्रदान किया गया यह code अपनी _**wp-config.php**_ में जोड़ें:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

और यह code, जो WordPress द्वारा भी प्रदान किया गया है, अपनी _**.htaccess**_ फाइल में जोड़ें:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# /wp-admin में trailing slash जोड़ें

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

इन दोनों फाइलों में code को copy और paste करने के लिए FTP client या file manager (अगर आप cPanel जैसा कुछ उपयोग कर रहे हैं) का उपयोग करें।

अंत में, अपने multisite नेटवर्क तक पहुंचने के लिए अपनी WordPress साइट पर फिर से login करें।

**Ultimate Multisite install करने से पहले यह test करना और सुनिश्चित करना महत्वपूर्ण है कि आप अपने WordPress Multisite installation पर एक subsite बना सकते हैं।**

subsite बनाने के लिए:

  1. अपनी वेबसाइट का wp-admin खोलें

  2. My Sites > Sites (/wp-admin/network/sites.php) पर जाएं

  3. ऊपर Add New पर क्लिक करें

  4. सभी fields भरें:

  * Site Address — कभी भी "www" का उपयोग न करें

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — साइट का शीर्षक, बाद में बदला जा सकता है

  * Admin Email — subsite के लिए initial admin user के रूप में सेट करें

![WordPress Multisite में नई साइट जोड़ने का फॉर्म](/img/admin/sites-list.png)

fields भरने के बाद, "Add site" बटन पर क्लिक करें। नई subsite बन जाने के बाद, उसे access करके सुनिश्चित करें कि subsite ठीक से काम कर रही है।

## आम समस्याएं:

### 1\. मैं नई साइटें बना सकता/सकती हूं लेकिन वे accessible नहीं हैं।

अगर आपने subdomains चुना है, तो आपको अपने multisite नेटवर्क के लिए wildcard subdomains भी setup करने होंगे।

ऐसा करने के लिए, अपनी वेबसाइट के hosting account के control panel dashboard पर जाएं (जैसे cPanel/Plesk/Direct Admin, आपके hosting provider के अनुसार)।

"Domains" या "Subdomains" का विकल्प खोजें। कुछ control panels में इसे "Domain administration" के रूप में लेबल किया जाता है।

subdomain field में, एक asterisk (*) दर्ज करें। फिर, यह आपसे पूछेगा कि subdomain को किस domain name के अंतर्गत जोड़ना है।

चुने गए domain name के लिए document root स्वचालित रूप से detect हो जाएगा। अपना wildcard subdomain जोड़ने के लिए _Create_ या _Save_ बटन पर क्लिक करें। entry "*.[mydomain.com](http://mydomain.com)" जैसी दिखनी चाहिए
