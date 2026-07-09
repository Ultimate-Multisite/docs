---
title: WordPress Multisite ڪيئن نصب ڪجي؟
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# WordPress Multisite कसरी इन्स्टल गर्ने? {#how-do-i-install-wordpress-multisite}

WordPress Multisite ले तपाईंलाई एउटै इन्स्टलेसनमा धेरै साइटहरूको नेटवर्क बनाउन अनुमति दिन्छ। यो एउटा बिल्ट-इन फिचर हो, तर डिफल्ट रूपमा यसको सक्रियता हुँदैन।

:::tip
Ultimate Multisite मा एक **[built-in Multisite Setup Wizard](./multisite-setup-wizard)** समावेश छ जसले यो सम्पूर्ण प्रक्रियालाई स्वचालित गर्छ। यदि तपाईंसँग Ultimate Multisite इन्स्टल गरिएको छ भने, हामी तल दिइएका म्यानुअल चरणहरू पछ्याउनुको सट्टा विजार्ड प्रयोग गर्न सिफारिस गर्छौं।
:::

चूंकि Ultimate Multisite एउटा नेटवर्क-ओन्ली प्लगइन हो, यस ट्युटोरियलमा, तपाईंले WordPress Multisite कसरी म्यानुअल रूपमा इन्स्टल र सेट गर्ने भनेर सिक्नुहुनेछ। यो पाठ WPBeginner बाट [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) मा आधारित छ।

**तपाईंको मल्टीसाइट नेटवर्क बनाउनुअघि ध्यान दिनुपर्ने कुराहरू:**

  * राम्रो WordPress होस्टिङ लिनुहोस्! नेटवर्कमा रहेका वेबसाइटहरू एउटै सर्भर स्रोतहरू साझा गर्छन्।

  * यदि तपाईंसँग कम ट्राफिक भएका केही साइटहरू छन् भने, साझा होस्टिङले काम गर्न सक्छ।

  * धेरै **Managed WordPress hosting providers** ले Multisite पहिले नै (out-of-the-box) प्रदान गर्छन् (उनीहरूले तपाईंको लागि WordPress लाई Multisite सक्रिय र कन्फिगर गरिएको साथमा इन्स्टल गर्छन्)। यो WP Engine, Closte, Cloudways आदि को लागि हो। यदि तपाईं निश्चित हुनुहुन्न कि त्यो तपाईंका होस्ट प्रदायकका लागि होइन भने, यो ट्युटोरियल जारी राख्नुअघि उनीहरूको सपोर्टसँग सम्पर्क गर्नुहोस्।

  * FTP प्रयोग गरेर WordPress इन्स्टल गर्ने र फाइलहरू सम्पादन गर्ने कुरामा पनि परिचित हुनु राम्रो हुन्छ।

_**महत्वपूर्ण**_ **:** यदि तपाईं कुनै मौजूदा WordPress वेबसाइटमा मल्टीसाइट नेटवर्क सेट गर्दै हुनुहुन्छ भने निम्न कुराहरू गर्न नबिर्सनुहोस्:

  * आफ्नो WordPress साइटको पूर्ण ब्याकअप बनाउनुहोस्।

  * आफ्नो प्लगइन पेजमा गएर बल्क एक्शनबाट _Deactivate_ चयन गरेर सबै प्लगइनहरू निष्क्रिय गर्नुहोस् र त्यसपछि _Apply_ मा क्लिक गर्नुहोस्।

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Multisite অন কৰিবলৈ, প্ৰথমে আপোনাৰ সাইটটো FTP ক্লায়েন্ট বা cPanel file manager ব্যৱহাৰ কৰি সংযোগ কৰক আৰু আপোনাৰ wp-config.php ফাইলটো এডিট কৰিবলৈ খুলি দিয়ক।

_-_এইটো সকলো, এডিট বন্ধ কৰক! আনন্দৰে ব্লগ লিখক._-_ এই লাইনৰ আগত তলৰ কোড অংশটো যোগ কৰক:

define('WP_ALLOW_MULTISITE', true);

আপোনাৰ wp-config.php ফাইলটো সেভ কৰি server ত পুনৰ আপলোড কৰক।

আপোনাৰ সাইটত মাল্টিসাইট ফিচার অন হোৱাৰ পিছত, এতিয়া আপোনাৰ নেটৱৰ্কটো সেটআপ কৰাৰ সময় আহিছে।

**Tools » Network Setup** লৈ যাওক।

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

এতিয়া আপুনি WordPress-ক ক'ব লাগিব যে আপুনি আপোনাৰ নেটৱৰ্কৰ সাইটবোৰৰ বাবে কি ধৰণৰ ডোমেইন গঠন ব্যৱহাৰ কৰিব (subdomains নে subdirectories)।

যদি আপুনি subdomains চوي, তেন্তে আপুনি ডোমেইন মেপিংৰ বাবে আপোনাৰ DNS setting-বোৰ সলনি কৰিব লাগিব আৰু আপোনাৰ মাল্টিসাইট নেটৱৰ্কৰ বাবে _**wildcard subdomains**_ সেটআপ কৰাটো নিশ্চিত কৰক।

Network Setup-ত উভতি আহি, আপোনাৰ নেটৱৰ্কটোৰ এটা টাইটেল দি দিয়ক আৰু Network admin email-ত থকা ইমেইল ঠিক আছে বুলি নিশ্চিত কৰক। আগলৈ যোৱাৰ বাবে _Install_ ক্লিক কৰক।

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

WordPress-ৰ দ্বাৰা প্ৰদান কৰা এই কোডটো আপোনাৰ _**wp-config.php**_ ফাইলত যোগ কৰক:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

আৰু WordPress-ৰ দ্বাৰা প্ৰদান কৰা এই কোডটো আপোনাৰ _**.htaccess**_ ফাইলত যোগ কৰক:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# /wp-admin ৰ বাবে এটা শেষ স্ল্যাশ যোগ কৰক {#add-a-trailing-slash-to-wp-admin}

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

FTP client يا ته ملف مینیجر (جیسے cPanel استعمال ڪريو) جو ڪود کي انهن ٻئي ٻنهي فائلن ۾ کاپی ڪري پيو ۽ پیسٽ ڪري سگهو ٿا.

آخر ۾، پنهنجي WordPress سائيٽ تي دوبارہ لاگ ان ڪريو ته جيئن توهان پنهنجي ملٹی سائيٽ نڪرٽس (multisite network) تک رسائي سگهو.

**هڪ ايمائجي (image) لڳائڻ کان اڳ، اهو ضروري آهي ته توهان Ultimate Multisite نصب ڪرڻ کان اڳ پنهنجي WordPress Multisite installation تي هڪ سبيسائٽ (subsite) کڻڻ جو تجربو ڪريو ۽ يقينا ڪريو ته هو ڪم ڪري رهي آهي.**

**هڪ سبيسائٽ کڻڻ لاءِ:**

1. پنهنجي وڏين سائيٽن جي wp-admin کي اوپن ڪريو.
2. My Sites > Sites (/wp-admin/network/sites.php) تي ويندوهان (Navigate).
3. اوپر "Add New" تي ڪلڪ ڪريو.
4. سڀني فیلڊن ۾ معلومات پورو ڪريو:

* Site Address — ڪڏهن به “www” استعمال نه ڪريو.

* Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

* Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

* Site Title — سائيٽ جو عنوان، جنهن کي بعد ۾ بدلو سگهجي ٿو.

* Admin Email — سبيسائٽ لاءِ شروعاتي ادمين صارف (initial admin user) جي طور تي مقرر ڪريو.

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

فیلڊن ۾ معلومات پورو ڪرڻ کان پوء، "Add site" بٽڻ کي ڪلڪ ڪريو. هڪ نئين سبيسائٽ جوٺ ٿيڻ کان پوء، هو ان تک رسائي لاءِ وڃو ته جيئن يقينا ڪري سگهو ته سبيسائٽ ڪم ڪري رهي آهي.

## عام مسئلا (Common Problems): {#common-problems}

### 1. مان نيون سائيٽون کڻي سگهان ٿو پر انهن تک رسائي نه ٿيندي. {#1-i-can-create-new-sites-but-they-are-not-accessible}

جيڪڏهن توهان subdomain استعمال ڪيو آهي، ته توهان کي پنهنجي ملٹی سائيٽ نڪرٽ لاءِ وائلڊ ڪائڊ (wildcard) سبيسائڊمن کي به set ڪرڻو پوندو.

هي ڪرڻ لاءِ، پنهنجي ويب سائيٽ جي هاستينگ اڪاؤنٽ جي ڪنٽرول پینلแดش بورڊ تي ويندوهان (مثلاً cPanel/Plesk/Direct Admin توهان جي هاستينگ فراهم ڪندڙ جي لحاظ کان).

"Domains" يا "Subdomains" جو هڪ خيار ڏسو. ڪجهه ڪنٽرول پينل ۾ ان کي "Domain administration" طور لکيو ويندو آهي.

subdomain جي فیل ۾ هڪ ستارہ (\*) داخل ڪريو. پوءِ، اهو توهان کان پرچي ٿو ته توهان ڪهڙي ڊومين نام کي چئو ته توهان ان subdomain کي ڪٿي شامل ڪرڻ چاهيو.

توهان جيڪو ڊومين نام چونڊيو هوندو هو، ان جو root فائيل خود بخود ملي ويندي آهي. پنهنجو wildcard subdomain شامل ڪرڻ لاءِ _Create_ يا _Save_ بٽڻ تي ڪلڪ ڪريو. ان جو اندراج " *.[mydomain.com](http://mydomain.com)" جي صورت ۾ ڏسيل هوسو.
