---
title: WordPress Multisite कसे इन्स्टॉल करावे
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# WordPress Multisite कसे इन्स्टॉल करावे?

WordPress Multisite च्या मदतीने तुम्ही एकाच installation मध्ये अनेक साइट्सचे नेटवर्क तयार करू शकता. हे एक built-in फीचर आहे, पण ते default म्हणून active नसते.

:::tip
Ultimate Multisite मध्ये **[built-in Multisite Setup Wizard](./multisite-setup-wizard)** समाविष्ट आहे जो ही संपूर्ण प्रक्रिया स्वयंचलित करतो. तुमच्याकडे Ultimate Multisite इन्स्टॉल असल्यास, खालील manual steps फॉलो करण्याऐवजी wizard वापरण्याची आम्ही शिफारस करतो.
:::

Ultimate Multisite हे network-only plugin असल्याने, या tutorial मध्ये तुम्ही WordPress Multisite मॅन्युअली कसे इन्स्टॉल आणि सेटअप करायचे ते शिकणार आहात. हा मजकूर WPBeginner च्या [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) वर आधारित आहे.

**तुमचे multisite network तयार करण्यापूर्वी लक्षात ठेवण्याच्या गोष्टी:**

  * चांगली WordPress hosting घ्या! नेटवर्कवरील websites समान server resources शेअर करतात.

  * जर तुमच्याकडे कमी traffic असलेल्या फक्त काही साइट्स असतील, तर shared hosting तुमच्यासाठी पुरेशी असेल.

  * बहुतेक **Managed WordPress hosting providers** Multisite out-of-the-box ऑफर करतात (ते तुमच्यासाठी WordPress Multisite आधीच activate आणि configure करून इन्स्टॉल करतात). WP Engine, Closte, Cloudways इत्यादींच्या बाबतीत असेच आहे. तुमच्या host provider च्या बाबतीत हे लागू होते का याची खात्री नसल्यास, या tutorial पुढे जाण्यापूर्वी त्यांच्या support शी संपर्क साधा.

  * FTP वापरून WordPress इन्स्टॉल करणे आणि files edit करणे याबद्दल माहिती असणे देखील चांगले आहे.

_**महत्त्वाचे**_ **:** जर तुम्ही existing WordPress website वर multisite network सेटअप करत असाल तर हे विसरू नका:

  * तुमच्या WordPress site चा संपूर्ण backup घ्या

  * तुमच्या plugins page वर जाऊन, bulk actions मधून _Deactivate_ निवडून आणि नंतर _Apply_ वर क्लिक करून तुमच्या site वरील सर्व plugins deactivate करा

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Multisite enable करण्यासाठी, प्रथम FTP client किंवा cPanel file manager वापरून तुमच्या site शी connect करा आणि तुमची wp-config.php file editing साठी उघडा.

_*That's all, stop editing! Happy blogging.*_ या line च्या आधी, खालील code snippet जोडा:

define('WP_ALLOW_MULTISITE', true);

तुमची wp-config.php file save करा आणि server वर परत upload करा.

तुमच्या site वर multisite feature enable झाल्यावर, आता तुमचे network setup करण्याची वेळ आहे.

**Tools » Network Setup** वर जा

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

आता तुम्हाला WordPress ला सांगणे आवश्यक आहे की तुमच्या network मधील sites साठी तुम्ही कोणती domain structure वापरणार आहात: subdomains की subdirectories.

तुम्ही subdomains निवडल्यास, domain mapping साठी तुम्हाला तुमची DNS settings बदलावी लागतील आणि तुमच्या multisite network साठी _**wildcard subdomains**_ setup केले आहेत याची खात्री करा.

Network Setup वर परत या, तुमच्या network ला एक title द्या आणि Network admin email मधील email address बरोबर आहे याची खात्री करा. पुढे जाण्यासाठी _Install_ वर क्लिक करा.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

WordPress ने दिलेला हा code तुमच्या _**wp-config.php**_ मध्ये जोडा:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

आणि हा code, जो WordPress ने दिलेला आहे, तुमच्या _**.htaccess**_ file मध्ये जोडा:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# /wp-admin ला trailing slash जोडा

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

या दोन files मध्ये code copy आणि paste करण्यासाठी FTP client किंवा file manager (जर तुम्ही cPanel सारखे काही वापरत असाल) वापरा.

शेवटी, तुमच्या multisite network मध्ये access करण्यासाठी तुमच्या WordPress site वर पुन्हा login करा.

**Ultimate Multisite इन्स्टॉल करण्यापूर्वी तुम्ही तुमच्या WordPress Multisite installation वर subsite तयार करू शकता याची चाचणी घेणे आणि खात्री करणे महत्त्वाचे आहे.**

subsite तयार करण्यासाठी:

  1. तुमच्या website चे wp-admin उघडा

  2. My Sites > Sites (/wp-admin/network/sites.php) वर navigate करा

  3. वरती Add New वर क्लिक करा

  4. सर्व fields भरा:

  * Site Address — कधीही "www" वापरू नका

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — site चे title, नंतर बदलता येते

  * Admin Email — subsite साठी initial admin user म्हणून सेट करा

![WordPress Multisite मध्ये नवीन site जोडण्याचा form](/img/admin/sites-list.png)

fields भरल्यानंतर, "Add site" बटणावर क्लिक करा. नवीन subsite तयार झाल्यावर, subsite functional आहे याची खात्री करण्यासाठी ती access करा.

## सामान्य समस्या:

### 1\. मी नवीन sites तयार करू शकतो पण त्या accessible नाहीत.

तुम्ही subdomains निवडल्यास, तुम्हाला तुमच्या multisite network साठी wildcard subdomains देखील setup करणे आवश्यक आहे.

हे करण्यासाठी, तुमच्या Website च्या hosting account च्या control panel dashboard वर जा (उदा. cPanel/Plesk/Direct Admin तुमच्या hosting provider वर अवलंबून).

"Domains" किंवा "Subdomains" साठी option शोधा. काही control panels मध्ये हे "Domain administration" म्हणून label केलेले असते.

subdomain field मध्ये, asterisk (*) टाका. त्यानंतर, ते तुम्हाला subdomain कोणत्या domain name अंतर्गत जोडायचे ते निवडण्यास सांगेल.

निवडलेल्या domain name साठी document root आपोआप detect होईल. तुमचा wildcard subdomain जोडण्यासाठी _Create_ किंवा _Save_ बटणावर क्लिक करा. entry "*.[mydomain.com](http://mydomain.com)" अशी दिसली पाहिजे
