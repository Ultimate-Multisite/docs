---
title: چې څنګه ووردپرس 멀티사이트 نصب کړئ
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# څنګه WordPress Multisite نصب کړم؟ {#how-do-i-install-wordpress-multisite}

WordPress Multisite به تاسو اجازه ورکوي چې په یوه نصب کې د ویب سائټونو یو شبکه جوړ کړئ. دا یو内置 (built-in) خصه کار دی، خو معمولاً فعال نه دی.

:::tip
Ultimate Multisite یو **[خصه Multisite تنظیمونکی](./multisite-setup-wizard)** لري چې ټول ایند پروسه خودکاروي. که تاسو Ultimate Multisite نصب کړی دی، موږ توصیه کوو چې د زیرلý مراحل اتباع नगर्नو، بلکې له دې تنظیمونکي کار وکړئ.
:::

ځکه چې Ultimate Multisite یو شبکه-تګ (network-only) plugin دی، په دې تعليمات کې، تاسو زده کوئ چې څنګه WordPress Multisite manuāli نصب او تنظیم کړئ. دا متن د [WordPress Multisite Network څنګه نصب او تنظیم गर्ने](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) څخه دی، چې له WPBeginner څخه راغلی دی.

**د خپل multisite شبکه جوړولو څخه مخکې باید په دې ټوټو 사항و توجه وکړئ:**

  * ښه WordPress hosting ترلاسه کړئ! د شبکه ویب سائټونه یوځای یوه سرور منابع شریکوي.

  * که تاسو به دوه یا دوه ویب سائټونه لرئ چې کم ترافیک لري، Shared hosting شاید ستاسو لپاره کار وکړي.

  * ډیره **Managed WordPress hosting providers** Multisite له پخوانیو (out-of-the-box) وړاندې کوي (د دوی یې WordPress د Multisite سره نصب کړی دی او تاسو لپاره یې تنظیم شوی دی). دا د WP Engine، Closte، Cloudways او نورونو لپاره applies ده. که تاسو نه ی নিশ্চিত یاست چې دا ستاسو host provider لپاره applies ده یا نه، خو بیا ته لاړ شئ تر دې پدې تعليمات پورې هم پیل وکړئ.

  * FTP له لارې WordPress نصب کولو او فایلونه ویرایش کولو سره هم آشنا اوسئ.

_**مهم دی**_ **:** که تاسو د یو پرانست شوي WordPress ویب سائٹ Multisite شبکه جوړوئ، نو منسول نه کړئ چې:

  * خپل WordPress سایتको مکمل backup ترلاسه کړئ

  * په خپل plugins page ته لاړ شئ او bulk actions څخه _Deactivate_ غوره کړئ او بیا _Apply_ باندې کلیک وکړئ ترڅو ستاسو ټول plugins غیر فعال شي

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Multisite یے فعال ڪرڻ واسطے، سبھ توں پہلے FTP client یا cPanel file manager استعمال کر کے اپنی سائٹ سے جڑیں، اور پھر اپنی wp-config.php فائل کھول کر ایڈیٹ کریں۔

_*بس، ایڈیٹنگ بند کریں! خوش blogging.*_ لائن سے پہلے، یہ کوڈ کا ٹکڑا شامل کریں:

define('WP_ALLOW_MULTISITE', true);

اپنی wp-config.php فائل کو محفوظ کریں اور اسے سرور پر واپس اپ لوڈ کریں۔

جب آپ کی سائٹ پر ملٹی سائٹ فیچر فعال ہو جائے تو اب نیٹ ورک سیٹ اپ کرنے کا وقت آ گیا ہے۔

**Tools » Network Setup** پر جائیں۔

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

اب آپ کو ورڈپریس کو بتانا ہوگا کہ آپ اپنے نیٹ ورک کے لیے سائٹس میں کس طرح کی ڈومین ڈھانچہ استعمال کریں گے: سب ڈومینز یا سب ڈائریکٹریز۔

اگر آپ سب ڈومینز کا انتخاب کرتے ہیں، تو آپ کو اپنی ڈومین 매핑 کے لیے DNS سیٹنگز تبدیل کرنی ہوں گی اور یقینی بنانا ہوگا کہ اپنے ملٹی سائٹ نیٹ ورک کے لیے _wildcard subdomains_ کی سیٹ اپ ہو۔

Network Setup پر واپس جائیں، اپنے نیٹ ورک کے لیے ایک عنوان دیں اور اس بات کو یقینی بنائیں کہ Network admin email میں ای میل ایڈریس درست ہے۔ جاری رکھنے کے لیے _Install_ پر کلک کریں۔

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

یہ کوڈ اپنی _**wp-config.php**_ فائل میں شامل کریں، جو ورڈپریس کی طرف سے فراہم کیا گیا ہے:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

اور یہ کوڈ، جو بھی ورڈپریس کی طرف سے فراہم کیا گیا ہے، اپنی _**.htaccess**_ فائل میں شامل کریں:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# wp-admin کے لیے آخری سلیش شامل کریں {#add-a-trailing-slash-to-wp-admin}

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

FTP client یوه یا فایل مینیجر (که تاسو د cPanel، د مثال په توګه، لرو巾دونکی شي प्रयोग کوئ)، کد ته کاپی او پیسټ کړئ.

په پای کې، خپل WordPress سایتमा بیا لاگ کړئ ترڅو خپل multisite شبکه ته ورسره شئ.

**دا ډیره مهم دی چې پریکTeste وکړئ او ډاډ ترلاسه کړئ چې تاسو کولی شئ د Ultimate Multisite هم پېژندل کوئ، خو پېژندل کولو وروسته په WordPress Multisite کې یو subsite جوړ کړئ.**

د subsite جوړولو لپاره:

  ۱. خپل ویبسایتৰ wp-admin खोल्नुहोस्

  ۲. My Sites > Sites (/wp-admin/network/sites.php) ته ورسره وکړئ

  ۳. اوپر Add New باندې کلیک وکړئ

  ۴. ټول فیلونه پوره کړئ:

  * Site Address — هیڅکله "www" استعمال नगئ

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — د سایتको عنوان، دا وروسته بدلون کېدای شي

  * Admin Email — د subsite لپاره پیل کاري admin کاربر په توګه تنظیم کړئ

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

فیلونه پوره کولو وروسته، "Add site" बटन باندې کلیک وکړئ. کله چې نوی subsite جوړ شي، ورسره لاگ شئ ترڅو ډاډ ترلاسه کړئ چې subsite کار کوي.

## عام مشکلات: {#common-problems}

### ۱. زه کولی شم نوي سایتونه جوړ کړم خو دوی ورسره نه دي. {#1-i-can-create-new-sites-but-they-are-not-accessible}

که تاسو subdomain غوره کړې وي، نو تاسو باید د خپل multisite شبکه لپاره wildcard subdomains هم تنظیم کړئ.

دا کار کولو لپاره، بلکې په خپل ویبسایتको هاستینګ حسابको کنټرول ډش‌بورد ته (مثلاً cPanel/Plesk/Direct Admin له ستاسو هاستینګ فراہم کنندلونو سره تړلی) لاغړئ.

"Domains" یا "Subdomains" د کوم کارپالټل کې وموندئ. په ځینو کنټرول پینل کې، دا "Domain administration" په نوم دیوبېږي.

په د سبدامین (subdomain) کې، یو ستاره (\*) ورسولئ. بیا باید از تاسو څخه پوښتنه وکړي چې کوم د دامنې نوم غوره کړئ چې تاسو غواړئ هغه د سبدامین تحت اضافه کړئ.

د غوره شوې دامنې نوم لپاره د پروژې اصلی مسیر (document root) په خودی ډول تشخیص کیږي. خپل وایلد سبدامین اضافه کولو لپاره "Create" یا "Save" د ګډو دکمه باندې کلیک وکړئ. ننوتل باید په لید کې داسې ښکاري: “*.[mydomain.com](http://mydomain.com)”
