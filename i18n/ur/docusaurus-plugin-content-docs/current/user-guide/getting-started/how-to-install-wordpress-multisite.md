---
title: WordPress Multisite کیسے انسٹال کریں
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# میں WordPress Multisite کیسے انسٹال کروں؟

WordPress Multisite آپ کو ایک ہی انسٹالیشن پر سائٹس کا نیٹ ورک بنانے کی سہولت دیتا ہے۔ یہ ایک بلٹ ان فیچر ہے، لیکن یہ بطور ڈیفالٹ ایکٹیو نہیں ہوتا۔

:::tip
Ultimate Multisite میں ایک **[بلٹ ان Multisite Setup Wizard](./multisite-setup-wizard)** شامل ہے جو اس پورے عمل کو خودکار بنا دیتا ہے۔ اگر آپ کے پاس Ultimate Multisite انسٹال ہے تو ہم تجویز کرتے ہیں کہ نیچے دیے گئے دستی مراحل کی بجائے wizard استعمال کریں۔
:::

چونکہ Ultimate Multisite صرف نیٹ ورک کے لیے بنایا گیا plugin ہے، اس ٹیوٹوریل میں آپ سیکھیں گے کہ WordPress Multisite کو دستی طریقے سے کیسے انسٹال اور سیٹ اپ کیا جائے۔ یہ مضمون WPBeginner کی [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) پر مبنی ہے۔

**اپنا multisite نیٹ ورک بنانے سے پہلے ان باتوں کا خیال رکھیں:**

  * اچھی WordPress hosting لیں! نیٹ ورک پر موجود ویب سائٹس ایک ہی سرور کے وسائل استعمال کرتی ہیں۔

  * اگر آپ کے پاس صرف چند سائٹس ہیں جن پر ٹریفک کم ہے، تو shared hosting آپ کے لیے کافی ہوگی۔

  * زیادہ تر **Managed WordPress hosting فراہم کنندگان** Multisite کی سہولت پہلے سے دیتے ہیں (وہ WordPress کو Multisite پہلے سے ایکٹیویٹ اور کنفیگر کر کے انسٹال کرتے ہیں)۔ WP Engine، Closte، Cloudways وغیرہ اس کی مثالیں ہیں۔ اگر آپ کو یقین نہیں کہ آپ کا hosting فراہم کنندہ یہ سہولت دیتا ہے یا نہیں، تو اس ٹیوٹوریل پر آگے بڑھنے سے پہلے ان کی سپورٹ سے رابطہ کریں۔

  * WordPress انسٹال کرنے اور FTP کے ذریعے فائلوں میں ترمیم کرنے سے واقفیت بھی ضروری ہے۔

_**اہم**_ **:** اگر آپ کسی موجودہ WordPress ویب سائٹ پر multisite نیٹ ورک سیٹ اپ کر رہے ہیں تو یہ مت بھولیں:

  * اپنی WordPress سائٹ کا مکمل بیک اپ بنائیں

  * اپنی سائٹ پر تمام plugins غیر فعال کریں — plugins کے صفحے پر جائیں، bulk actions سے _Deactivate_ منتخب کریں اور پھر _Apply_ پر کلک کریں

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Multisite کو فعال کرنے کے لیے، پہلے FTP client یا cPanel file manager کے ذریعے اپنی سائٹ سے جڑیں، اور اپنی wp-config.php فائل کھولیں۔

_*That's all, stop editing! Happy blogging.*_ لائن سے پہلے، یہ کوڈ شامل کریں:

define('WP_ALLOW_MULTISITE', true);

اپنی wp-config.php فائل محفوظ کریں اور واپس سرور پر اپ لوڈ کریں۔

آپ کی سائٹ پر multisite فیچر فعال ہونے کے بعد، اب اپنا نیٹ ورک سیٹ اپ کرنے کا وقت ہے۔

**Tools » Network Setup** پر جائیں

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

اب آپ کو WordPress کو بتانا ہوگا کہ آپ اپنے نیٹ ورک میں سائٹس کے لیے کس قسم کا domain ڈھانچہ استعمال کریں گے: subdomains یا subdirectories۔

اگر آپ subdomains منتخب کرتے ہیں، تو آپ کو domain mapping کے لیے اپنی DNS سیٹنگز تبدیل کرنی ہوں گی اور اپنے multisite نیٹ ورک کے لیے _**wildcard subdomains**_ سیٹ اپ کرنا یقینی بنائیں۔

Network Setup پر واپس آئیں، اپنے نیٹ ورک کو ایک نام دیں اور یقینی بنائیں کہ Network admin email میں درج ای میل ایڈریس درست ہے۔ جاری رکھنے کے لیے _Install_ پر کلک کریں۔

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

WordPress کی طرف سے فراہم کردہ یہ کوڈ اپنی _**wp-config.php**_ میں شامل کریں:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

اور WordPress کی طرف سے فراہم کردہ یہ کوڈ اپنی _**.htaccess**_ فائل میں شامل کریں:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

FTP client یا file manager استعمال کریں (اگر آپ cPanel جیسی کوئی چیز استعمال کر رہے ہیں) تاکہ اس کوڈ کو ان دونوں فائلوں میں کاپی اور پیسٹ کر سکیں۔

آخر میں، اپنے multisite نیٹ ورک تک رسائی کے لیے اپنی WordPress سائٹ میں دوبارہ لاگ ان کریں۔

**Ultimate Multisite انسٹال کرنے سے پہلے یہ جانچنا ضروری ہے کہ آپ اپنی WordPress Multisite انسٹالیشن پر subsite بنا سکتے ہیں۔**

subsite بنانے کے لیے:

  1. اپنی ویب سائٹ کا wp-admin کھولیں

  2. My Sites > Sites (/wp-admin/network/sites.php) پر جائیں

  3. اوپر Add New پر کلک کریں

  4. تمام فیلڈز پُر کریں:

  * Site Address — کبھی بھی "www" استعمال نہ کریں

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — سائٹ کا عنوان، بعد میں تبدیل کیا جا سکتا ہے

  * Admin Email — subsite کے لیے ابتدائی admin صارف کے طور پر سیٹ کریں

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

فیلڈز پُر کرنے کے بعد، "Add site" بٹن پر کلک کریں۔ نئی subsite بننے کے بعد، اس تک رسائی حاصل کریں تاکہ یقینی بنا سکیں کہ subsite کام کر رہی ہے۔

## عام مسائل:

### 1\. میں نئی سائٹس بنا سکتا ہوں لیکن وہ قابل رسائی نہیں ہیں۔

اگر آپ نے subdomains منتخب کیے ہیں، تو آپ کو اپنے multisite نیٹ ورک کے لیے wildcard subdomains بھی سیٹ اپ کرنے ہوں گے۔

ایسا کرنے کے لیے، اپنی ویب سائٹ کے hosting اکاؤنٹ کے control panel dashboard پر جائیں (مثلاً cPanel/Plesk/Direct Admin آپ کے hosting فراہم کنندہ کے مطابق)۔

"Domains" یا "Subdomains" کا آپشن تلاش کریں۔ کچھ control panels میں اسے "Domain administration" کا نام دیا گیا ہوتا ہے۔

subdomain فیلڈ میں، ایک asterisk (*) درج کریں۔ پھر، آپ سے پوچھا جائے گا کہ آپ کس domain name کے تحت subdomain شامل کرنا چاہتے ہیں۔

منتخب domain name کے لیے document root خود بخود ڈیٹیکٹ ہو جائے گی۔ اپنا wildcard subdomain شامل کرنے کے لیے _Create_ یا _Save_ بٹن پر کلک کریں۔ اندراج کچھ یوں نظر آنا چاہیے "*.[mydomain.com](http://mydomain.com)"
