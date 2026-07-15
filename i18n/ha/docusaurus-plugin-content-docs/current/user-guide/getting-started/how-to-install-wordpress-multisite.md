---
title: Yadda ake Shigar da WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# منشات ووردپرس مالتی‌سایت را چگونه نصب کنم؟

ووردپرس مالتی‌سایت به شما اجازه می‌دهد یک شبکه از سایت‌ها را روی یک نصب واحد داشته باشید. این یک قابلیت داخلی است، اما به صورت پیش‌فرض فعال نیست.

:::tip
Ultimate Multisite شامل یک **[راهنمای تنظیمات مالتی‌سایت داخلی](./multisite-setup-wizard)** است که کل این فرآیند را خودکار می‌کند. اگر Ultimate Multisite نصب کرده‌اید، توصیه می‌کنیم به جای دنبال کردن مراحل دستی زیر از این راهنما استفاده کنید.
:::

از آنجایی که Ultimate Multisite یک پلاگین فقط برای شبکه است، در این آموزش، یاد خواهید گرفت که چگونه ووردپرس مالتی‌سایت را به صورت دستی نصب و تنظیم کنید. این متن بر اساس [نحوه نصب و تنظیم شبکه ووردپرس مالتی‌سایت](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) از WPBeginner است.

**قبل از ایجاد شبکه مالتی‌سایت خود به این نکات توجه کنید:**

  * هاستینگ ووردپرس خوب تهیه کنید! وب‌سایت‌های روی یک شبکه از منابع سرور یکسان استفاده می‌کنند.

  * اگر فقط چند سایت با ترافیک کم دارید، هاست اشتراکی احتمالاً برای شما مناسب خواهد بود.

  * اکثر **ارائه‌دهندگان هاست ووردپرس مدیریت شده** مالتی‌سایت را به صورت آماده (out-of-the-box) ارائه می‌دهند (آنها ووردپرس را با مالتی‌سایت فعال و پیکربندی شده نصب می‌کنند). این مورد برای WP Engine، Closte، Cloudways و غیره صادق است. اگر مطمئن نیستید که آیا این موضوع برای ارائه‌دهنده هاست شما صدق می‌کند یا خیر، قبل از ادامه این آموزش با پشتیبانی آنها تماس بگیرید.

  * همچنین آشنا بودن با نصب و ویرایش فایل‌ها با استفاده از FTP هم خوب است.

_**مهم**_ **:** اگر در حال تنظیم یک شبکه مالتی‌سایت روی یک وب‌سایت ووردپرس موجود هستید، فراموش نکنید که موارد زیر را انجام دهید:

  * یک نسخه پشتیبان کامل از سایت ووردپرس خود تهیه کنید.

  * تمام پلاگین‌های سایت خود را با رفتن به صفحه پلاگین‌ها و انتخاب _غیرفعال کردن_ از اقدامات دسته‌جمعی (bulk actions) و سپس کلیک روی _اعمال_ غیرفعال کنید.

برای فعال کردن Multisite، ابتدا با استفاده از یک کلاینت FTP یا مدیر فایل cPanel به سایت خود متصل شوید و فایل `wp-config.php` را برای ویرایش باز کنید.

قبل از خط _*تمام شد، دیگه ویرایش نکنید! خوش نوشتن.*، کد زیر را اضافه کنید:

```php
define('WP_ALLOW_MULTISITE', true);
```

فایل `wp-config.php` خود را ذخیره کرده و دوباره روی سرور آپلود کنید.

با فعال شدن قابلیت Multisite در سایت شما، حالا وقت تنظیم شبکه است.

به **Tools » Network Setup** بروید.

حالا باید به وردپرس بگویید که برای سایت‌های شبکه خود از چه ساختار دامنه‌ای استفاده خواهید کرد: زیردامنه (subdomains) یا زیردایرکتوری (subdirectories).

اگر زیردامنه را انتخاب می‌کنید، باید تنظیمات DNS خود را برای نگاشت دامنه تغییر دهید و مطمئن شوید که _**زیردامن‌های گلوله‌ای (wildcard subdomains)**_ را برای شبکه Multisite خود تنظیم کرده‌اید.

دوباره به Network Setup برگردید، یک عنوان برای شبکه خود قرار دهید و مطمئن شوید آدرس ایمیل در ایمیل مدیریت شبکه درست است. روی _Install_ کلیک کنید تا ادامه دهید.

این کد که توسط وردپرس ارائه شده است را به فایل _**wp-config.php**_ خود اضافه کنید:

```php
define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);
```

و این کد که توسط وردپرس ارائه شده است را به فایل _**.htaccess**_ خود اضافه کنید:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# برای مسیر /wp-admin یک اسلش پایانی اضافه می‌کند
RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
```

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Don FTP client ko ko fayil ɗauko ko file manager (idatta kana amfani da wani kamar cPanel, misali) don kopa da dabba a cikin waɗannan fayilshuka biyu.

Karshe, sake shiga shafin WordPress ɗinka don samun damar shiga yanayin multisite ɗinka.

**Muhimmin abu shi ne ka gwada kuma ka tabbata cewa kana iya ƙirƙirar subsite a cikin install Ultimate Multisite ɗinka kafin ka yi install.**

Don ƙirƙirar subsite:

  1. Baka buɗe wp-admin na shafuka kaɗai.

  2. Ka tafiya zuwa My Sites > Sites (/wp-admin/network/sites.php).

  3. Ka danna Add New a mafi sama.

  4. Ka cika duk makamakin:

  * Site Address — Kada ka yi amfani da “www”.

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — Jigon shafin, za a iya canza shi daga baya.

  * Admin Email — Ka sanya shi a matsayin mai amfani na farko don subsite ɗin.

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Bayan ka cika duk makamakin, danna babban babban "Add site" button. B bayan an ƙirƙira subsite ɗinka na sabo, ka tafiya zuwa shi don tabbatar da cewa subsite ɗin yana aiki.

## Matakan da suka fi faruwa: {#add-a-trailing-slash-to-wp-admin}

### 1\. Ina iya ƙirƙirar sabon shafuka amma ba za a samu damar shiga su ba. {#common-problems}

Idan ka zaɓi subdomain, dole ne ka shirya wildcard subdomains don yanayin multisite ɗinka.

Don yin hakan, tafiya zuwa dashboard na asusun gudanar da yanar gizo (hosting account) na shafin ka (misali cPanel/Plesk/Direct Admin dangane da wanda ya ba ka hosting).

Ka nemo zaɓi don “Domains” ko “Subdomains”. A wasu dashboards suna bayyana shi a matsayin “Domain administration”.

Idan zaɓin awan (subdomain) filin, shiga star (*). Kifi za ka ji ko zai tambaye ka zaɓi wani sunan domain da kake so a ƙara wannan subdomain a ƙawun.

Huta gudu (document root) na wancin sunan domain da aka zaɓa za mu gano ba tare da wata wuta ba. Ka tuntuɓi babban abin hannu (button) na _Create_ ko _Save_ don ƙara subdomain ɗinka mai girma (wildcard). Bayan an shigar shi, zai yi maka matsayinsa kamar " *.[mydomain.com](http://mydomain.com)".
