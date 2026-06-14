---
title: چۆنی چۆنی WordPress Multisite دامەزرێنیت
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# چۆن WordPress Multisite دامەسازم؟

WordPress Multisite به شما اجازه دەدات یەک جۆر لە سایتەکان لەسەر جێبەجێکردنی تاکێک هەبێت. ئەمە تایبەتمەندییەکی ناوخۆییە، بەڵام بە شێوەی پیش‌تەکی چالاک نییە.

:::tip
Ultimate Multisite یەکێک لە **[دۆزدارچوونی دامەساز Multisite](https://your-documentation-link/multisite-setup-wizard)** دەگرێت کە ئەم پڕۆسەی تەواوە بە شێوەیەکی ئۆتۆماتیک دەکات. ئەگەر Ultimate Multisite دامەزرێنراوە، پێویستە لە چاوەڕوانی ئەو دۆزدارچوونە بکەیت لە چاودێریا هەنگاوە دەستپێکەکاندا بەدوای پڕۆسەی دەستکرد بگەڕێیت.
:::

لەبەر ئەوەی Ultimate Multisite یەکێکە لە پلگینەکان کە تەنها بۆ تۆڕ (network) کار دەکات، لەم ڕێنماییەدا، دەبێت فێری چۆنیەتی دامەزراندن و سیستەمکردنی WordPress Multisite بە شێوەیەکی دەستکرد بیت. ئەم دەقە پشت بە [چۆنیەتی دامەزراندن و سیستەمکردنی تۆڕی WordPress Multisite](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) لە WPBeginner داتوویت.

**شایەنان کە پێویستە لەبەر ئەوەی پڕۆژەی تۆڕی Multisite دروست بکەیت:**

  * هاستکردنی باش بۆ WordPress هەڵبژێرن! ئەو سایتانەی لەسەر تۆڕ کار دەکەن، سەرچاوەکان و ڕێگەپێدانی یەک خزمەتگوزاری (server) بەش یەک دەبن.

  * ئەگەر تەنها چەند سایتێکی کەم هەبێت کە ترافیکی زۆر نییە، هاستکردنی هاوبەش (shared hosting) لەوانەیە بۆت کار بکات.

  * زۆربەی **پایبەخمارە هاستکردنی WordPress** بە شێوەیەکی پیش‌تەکی Multisite دەدەنەوە (ئەویش WordPress و Multisite پێشوەخت سیستەم کراوە و ڕێکخراوە). ئەمە بۆ WP Engine، Closte، Cloudways و هتد. ئەگەر ناتێبینی دەکەیت کە ئایا ئەمە بۆ هاستکردنی خۆت دەبێت، پێش بەردەوامبوون لەم ڕێنماییە پەیوەندی بکە بە پشتیوانیان.

  * فێربوونی دامەزراندنی WordPress و دەستکاری فایلەکان بە FTP باشە.

_**گرنگە**_ **:** ئەگەر تۆ دەتەوێت تۆڕی Multisite لەسەر سایتێکی WordPress هەیە دروست بکەیت، یارمەتی خۆت نەکەیت:

  * کۆپی تەواوی (backup) بۆ سایتەکەت دروست بکە.

  * هەموو پلگینەکان لەسەر سایتەکەت بە کاتی گەڕان بۆ لاپەڕەی پلگینەکان و هەڵبژاردنی **Deactivate** لە کارکردن بە کۆمەڵ، پاشان **Apply** (بەکارھێنانی) بکە.

برای فعال کردن Multisite، اول باید با استفاده از یک کلاینت FTP یا مدیر فایل cPanel به سایت خود متصل شوید و فایل `wp-config.php` را برای ویرایش باز کنید.

قبل از خطی که می‌گوید _*تمام شد، دیگه ویرایش نکنید! خوش نوشتن.*، کد زیر را اضافه کنید:

```php
define('WP_ALLOW_MULTISITE', true);
```

فایل `wp-config.php` خود را ذخیره کرده و دوباره روی سرور آپلود کنید.

حالا که قابلیت Multisite در سایت شما فعال است، وقت تنظیم شبکه است.

به **Tools » Network Setup** بروید.

حالا باید به وردپرس بگویید که برای سایت‌های شبکه خود از چه ساختار دامنی استفاده خواهید کرد: زیردامنه (subdomains) یا زیردایرکتوری (subdirectories).

اگر زیردامنه را انتخاب می‌کنید، باید تنظیمات DNS خود را برای نگاشت دامنه تغییر دهید و مطمئن شوید که _**زیردامن‌های گلوله‌ای (wildcard subdomains)**_ را برای شبکه Multisite خود تنظیم کرده‌اید.

به Network Setup برگردید، یک عنوان برای شبکه خود قرار دهید و مطمئن شوید آدرس ایمیل در ایمیل مدیریت شبکه درست است. روی _Install_ کلیک کنید تا ادامه دهید.

این کد که توسط وردپرس ارائه شده است را به فایل _**wp-config.php**_ خود اضافه کنید:

```php
define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);
```

و این کد که توسط وردپرس ارائه شده است را به فایل _**.htaccess**_ خود اضافه کنید:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# برای مسیر wp-admin یک اسلش پایانی اضافه می‌کنیم
RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
```

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

بۆ ئەم کۆدە، یەک FTP client یان file manager بەکاربهێنن بۆ کپی و چسپاندنی ئەم کۆدانە لەو دوو فایلەی پێویستە.

لە کۆتاییدا، داتای WordPress خۆتەوە دوبارہ Login بکە بۆ ئەوەی دەتوانیت دەوروبەری تۆڕی Multisite یەکەت بەکاربهێنیت.

**زۆر گرنگە پێش دانانی Ultimate Multisite، تاقیکردنەوەی کارکردنی دروستکردنی subsite لەنێو دامەزراندنی WordPress Multisite یەکەت ئەنجام بدات.**

ئەو شێوەیە بۆ دروستکردنی subsite:

  1. بە ئامادەکردنی وێب سایتەکانت (wp-admin) دەربکە.
  2. بگواشبە My Sites > Sites (/wp-admin/network/sites.php).
  3. لە سەرەوە، پستی Add New بگرە.
  4. هەموو فیلدەکانی پڕ بکەرەوە:

* Site Address — هەرگیز "www" بەکارنەهێنە.

* Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

* Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

* Site Title — ناوی سایت، دەتوانیت لە داهاتوودا بگۆڕیت.

* Admin Email — وەک یوان ئامادەبوو بۆ بەکارهێنەرێکی سەرەتایی (initial admin user) بۆ subsite بکە.

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

پاش پڕکردنەوەی فیلدەکان، बटونی "Add site" (زیادکردنی سایت) بگرە. دوای دروستکردنی subsite نوێ، بگواشبە و بەکاربهێنە بۆ ئەوەی دڵنیا بیت کە subsite کار دەکات.

## کێشەکانی باو وەک ئەمە هەیە:

### 1. دەتوانم سایتە نوێ دروست بکەم بەڵام دەتوانیت بەکاریان بهێنیت (access نەکات).

ئەگەر subdomain هەڵبژاردووە، پێویستە wildcard subdomains بۆ تۆڕی Multisite یەکەت ویستەپێکە.

بۆ ئەوەی ئەم کار بکەیت، بگواشبە سەر داش보ارنی کۆنترۆڵی هاستکردنی وێب سایتەکەت (وەک cPanel/Plesk/Direct Admin بەپێی پڕۆفایڵەکەت).

ئامۆژەیەکی بۆ "Domains" یان "Subdomains" بدۆزەرەوە. لە هەندێک کۆنترۆڵ، بەو شێوەیە ناونیشان دەدەنە: “Domain administration”.

لە فیلد دامنەی زیرەکی (subdomain)دا، ئاستێکی ئەستێرە (\*) بنووسە. پاشان، دەبێت پرسیار بکاتت کە ناوی دامەنیکی دیاری بکەیت بۆ ئەوەی ئەو زیرەکییە لەسەر کوێ زیاد بکرێت.

ڕووی سەرەکی (document root) بۆ ناو دامنەی هەڵبژراو بە شێوەیەکی خۆکار دەدۆزرێتەوە. لەسەر دغدغه یان دغدغهی _Create_ یان _Save_ کلیک بکە بۆ زیادکردنی زیرەکی وایەکی (wildcard subdomain) یەکەت. نووسینەکە دەبێت بەم شێوەیە بێت: “*.[mydomain.com](http://mydomain.com)”
