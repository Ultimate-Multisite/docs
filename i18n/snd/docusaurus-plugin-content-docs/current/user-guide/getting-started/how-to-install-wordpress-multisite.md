---
title: WordPress Multisite ڪيئن نصب ڪجي؟
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# मय वर्डप्रेस मल्टीसाइट कैसे इंस्टॉल करें? {#how-do-i-install-wordpress-multisite}

वर्डप्रेस मल्टीसाइट आपको एक ही इंस्टॉलेशन पर कई साइट्स का नेटवर्क बनाने की सुविधा देता है। یہ ایک بلٹ-इन فیچر ہے، لیکن ڈیفالٹ پر یہ فعال نہیں ہوتا۔

:::tip
Ultimate Multisite میں ایک **[built-in Multisite Setup Wizard](./multisite-setup-wizard)** شامل ہے جو اس پورے عمل کو خودکار بنا دیتا ہے۔ اگر آپ کے پاس Ultimate Multisite انسٹال ہے، تو ہم نیچے دیے گئے دستی اقدامات کی پیروی کرنے کے بجائے وِیزارد استعمال کرنے کا مشورہ دیتے ہیں۔
:::

چونکہ Ultimate Multisite ایک نیٹ ورک پر مبنی پگ ان (plugin) ہے، اس ٹیوٹوریل میں، آپ سیکھیں گے کہ WordPress Multisite کو دستی طور پر کیسے انسٹال اور سیٹ اپ کیا جاتا ہے۔ یہ ٹیکسٹ WPBeginner کے [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) سے لیا گیا ہے۔

**اپنا مัลٹی سائٹ نیٹ ورک بنانے سے پہلے ان چیزوں پر توجہ دیں:**

  * اچھی ورڈپریس ہوسٹنگ حاصل کریں! نیٹ ورک پر موجود ویب سائٹس ایک ہی سرور کے وسائل شیئر کرتی ہیں۔

  * اگر آپ کے پاس صرف چند کم ٹریفک والی سائٹس ہیں، تو شیئرڈ ہوسٹنگ آپ کے لیے کام کر سکتی ہے۔

  * زیادہ تر **Managed WordPress hosting providers** پہلے سے ہی Multisite فراہم کرتے ہیں (وہ ورڈپریس کو مัลٹی سائٹ کے ساتھ پہلے سے فعال اور آپ کے لیے ترتیب شدہ انسٹال کرتے ہیں)۔ یہ WP Engine، Closte، Cloudways وغیرہ کے لیے ایسا ہوتا ہے۔ اگر آپ کو یقین نہیں ہے کہ یہ آپ کے ہوسٹ فراہم کنندہ کے لیے ایسا ہے یا نہیں، تو اس ٹیوٹوریل پر آگے بڑھنے سے پہلے ان سے رابطہ کریں۔

  * FTP کا استعمال کرتے ہوئے ورڈپریس انسٹال کرنے اور فائلز ایڈٹ کرنے سے بھی واقف ہونا اچھا ہے۔

_**اہم بات**_ **:** اگر آپ کسی موجودہ ورڈپریس ویب سائٹ پر مัลٹی سائٹ نیٹ ورک سیٹ اپ کر رہے ہیں تو یہ نہ بھولیں کہ:

  * اپنی ورڈپریس سائٹ کا مکمل بیک اپ بنائیں

  * اپنے پگ انز (plugins) کو ڈی ایکٹیویٹ کریں، اپنے پگ انز پیج پر جائیں اور bulk actions سے _Deactivate_ منتخب کریں پھر _Apply_ پر کلک کریں۔

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Multisite অন কৰিবলৈ, প্ৰথমে FTP client বা cPanel file manager ব্যৱহাৰ কৰি আপোনাৰ সাইটটো সংযোগ কৰক আৰু আপোনাৰ wp-config.php ফাইলটো এডিট কৰিবলৈ খুলি দিয়ক।

_**That’s all, stop editing! Happy blogging.**_ এই লাইনৰ আগত তলৰ কোড অংশটো যোগ কৰক:

define('WP_ALLOW_MULTISITE', true);

আপোনাৰ wp-config.php ফাইলটো সেভ কৰি সার্ভাৰত পুনৰ আপলোড কৰক।

আপোনাৰ সাইটত মাল্টিসাইট ফিচাৰটো অন কৰাৰ পিছত, এতিয়া আপোনাৰ নেটৱৰ্কটো সেটআপ কৰাৰ সময় আহিছে।

**Tools » Network Setup** লৈ যাওক।

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

এতিয়া আপুনি WordPress-ক ক'ব লাগিব যে আপুনি আপোনাৰ নেটৱৰ্কৰ সাইটবোৰৰ বাবে কেনেকুৱা ডোমেইন গঠন ব্যৱহাৰ কৰিব (subdomains নে subdirectories)।

যদি আপুনি subdomains নিৰ্বাচন কৰে, তেন্তে ডোমেইন মেপিংৰ বাবে আপুনি আপোনাৰ DNS সেটিংছ সলনি কৰিব লাগিব আৰু আপোনাৰ মাল্টিসাইট নেটৱৰ্কৰ বাবে _**wildcard subdomains**_ সেটআপ কৰাটো নিশ্চিত কৰক।

Network Setup-এ উভতি যোৱাৰ পিছত, আপোনাৰ নেটৱৰ্কটোৰ এটা টাইটেল দিয়া আৰু Network admin email-ত থকা ইমেইল ঠিক আছে বুলি নিশ্চিত কৰক। আগলৈ যাবলৈ _Install_ ক্লিক কৰক।

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

WordPress-এ আপোনাৰ _**wp-config.php**_ ফাইলটোত এই কোডটো যোগ কৰিবলৈ দিছে:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

আৰু WordPress-এ আপোনাৰ _**.htaccess**_ ফাইলটোত এই কোডটো দিছে:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# /wp-admin ৰ বাবে এটা শেষ স্লাশ যোগ কৰক {#add-a-trailing-slash-to-wp-admin}

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

FTP client يا فائل مینیجر (جیسے cPanel استعمال ڪري رهيا هجي) جو مدد لاءِ، ان دو فائلن ۾ کوڈ کپی ڪري پيست ڪريو.

آخر ۾، اپنے WordPress سائيٽमा دوبارہ لاگ ان ڪريو ته جيئن توهان اپنے ملٹی سائيٽ نِيٽ ورڪس کي رسائی حاصل ڪري سگهو.

**هڪ ايمائليج تي تجربو ڪرڻ ۽ يقينا ڪرڻ مهم آهي ته توهان Ultimate Multisite نصب ڪرڻ کان اڳ پنهنجي WordPress Multisite انسٹالیشن تي هڪ سبيسائٽ (subsite) بنا سکديا.**

سبيسائٽ بنانے لاءِ:

  1. پنهنجي وڏين ویب سائيتن جي wp-admin کي खोलो.

  2. My Sites > Sites (/wp-admin/network/sites.php) تي وڃو.

  3. اوپري ۾ Add New تي ڪلڪ ڪريو.

  4. سڀ فیلڊ پورو ڪريو:

  * Site Address — ڪڏهن به "www" استعمال نه ڪريو.

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — سائيٽ جو عنوان، جنهن کي بعد ۾ بدلو سگهجي ٿو.

  * Admin Email — سبيسائٽ لاءِ شروعاتي ادمين يوزر طور مقرر ڪريو.

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

فیلڊ پورو ڪرڻ کان پوء، "Add site" بٽڻ تي ڪلڪ ڪريو. هڪ نئين سبيسائٽ جي بڻجي رهي آهي ته ان کي رسائي حاصل ڪرڻ لاءِ وڃو ۽ يقينا ڪريو ته سبيسائٽ ڪم ڪري رهيو آهي.

## عام مسئلا: {#common-problems}

### 1\. مان نيون سائٽون بنا سکيا پر انهن تي رسائي نه ٿي رهي. {#1-i-can-create-new-sites-but-they-are-not-accessible}

جيڪڏهن توهان subdomain استعمال ڪيو آهي، تنهنجي ملٹی سائيٽ نِيٽ ورڪ لاءِ وائلڊ اسبينڊومين (wildcard subdomains) کي به set ڪرڻ جي ضرورت آهي.

هي ڪرڻ لاءِ، پنهنجي ويب سائٽ جي هاستنگ حساب جي ڪنٽرول پینلแดش بورڊ (جنهن سائيٽ فراهم ڪندڙ تي depends ڪري cPanel/Plesk/Direct Admin هجي) تي وڃو.

"Domains" يا "Subdomains" جو هڪ خيار ڏسو. ڪجهه ڪنٽرول پینل ۾ ان کي "Domain administration" طور لکيو ويندو آهي.

subdomain جي فیل ۾، هڪ ستارہ (\*) داخل ڪريو. پوءِ، اهو توهان کان پرچي ڪندو ته توهان ڪهڙي ڊومين نام چون ٿا جتي توهان subdomain شامل ڪرڻ چاهيو.

توهان جيڪو ڊومين نام چوندا آهيو ان جو root فائيل (document root) خود بخود ملي ويندو. پنهنجو wildcard subdomain شامل ڪرڻ لاءِ _Create_ يا _Save_ بٽڻ تي ڪلڪ ڪريو. entryءَ کي " *.[mydomain.com](http://mydomain.com)" اهو ڏسندو.
