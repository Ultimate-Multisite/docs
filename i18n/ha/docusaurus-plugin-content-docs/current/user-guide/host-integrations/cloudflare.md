---
title: Shigarwar Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# همگرایی با Cloudflare (Cloudflare Integration)

## مروری کلی (Overview)
Cloudflare یک شبکه تحویل محتوا (CDN) و ارائه‌دهنده امنیت پیشرو است که به محافظت از وب‌سایت‌ها کمک کرده و سرعت آن‌ها را بالا می‌برد. این همگرایی امکان مدیریت خودکار دامنه بین Ultimate Multisite و Cloudflare، به ویژه برای نصب‌های چنددامنه زیردامنه‌ای (subdomain multisite)، را فراهم می‌کند.

## ویژگی‌ها (Features)
- ایجاد خودکار زیردامنه‌ها در Cloudflare
- پشتیبانی از زیردامنه‌های پروکسی شده (Proxied subdomain support)
- مدیریت رکوردها در DNS
- نمایش بهتر رکوردهای DNS در پنل مدیریت Ultimate Multisite

## پیش‌نیازها (Requirements)
باید کارهای زیر را در فایل `wp-config.php` خود تعریف کنید:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## دستورالعمل‌های راه‌اندازی (Setup Instructions)

### ۱. دریافت کلید API Cloudflare خود

۱. وارد داشبورد Cloudflare خود شوید.
۲. به بخش "My Profile" (روی ایمیل خود در گوشه بالا سمت راست کلیک کنید) بروید.
۳. از منوی باز شده، گزینه "API Tokens" را انتخاب کنید.
۴. یک توکن API جدید با مجوزهای زیر ایجاد کنید:
   - Zone.Zone: Read (خواندن منطقه)
   - Zone.DNS: Edit (ویرایش DNS)
۵. توکن API خود را کپی کنید.

### ۲. دریافت شناسه منطقه (Zone ID) خود

۱. در داشبورد Cloudflare، دامنه‌ای که می‌خواهید از آن استفاده کنید را انتخاب کنید.
۲. شناسه منطقه (Zone ID) در تب "Overview"، در نوار کناری سمت راست زیر بخش "API" قابل مشاهده است.
۳. شناسه منطقه را کپی کنید.

### ۳. اضافه کردن ثابت‌ها به wp-config.php

ثابت‌های زیر را به فایل `wp-config.php` خود اضافه کنید:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### ۴. فعال کردن همگرایی (Enable the Integration)

۱. در پنل مدیریت وردپرس خود، به Ultimate Multisite > Settings بروید.
۲. به تب "Domain Mapping" (نقشه‌برداری دامنه) بروید.
۳. به پایین اسکرول کنید تا به بخش "Host Integrations" برسید.
۴. همگرایی Cloudflare را فعال کنید.
۵. روی "Save Changes" کلیک کنید.

## نحوه کارکرد (How It Works)

### مدیریت زیردامنه‌ها (Subdomain Management)

وقتی یک سایت جدید در نصب چنددامنه زیردامنه‌ای ایجاد می‌شود:

1. Shigarwa tanafe wajabarka ga API na Cloudflare don ƙara rekodin CNAME ga subdomain ɗin.
2. Subdomain an shirya shi don a shiga ta Cloudflare a matsayin asali (wannan zai iya canzawa da amfani da filters).
3. Lokacin da aka shafa wuri, wannan integration zai cire subdomain ɗin daga Cloudflare.

### Nuna Rekodin DNS

Wannan integration ya ƙara nuna rekodin DNS a cikin Ultimate Multisite admin ta hanyar:

1. Cikar rekododun DNS kai tsaye daga Cloudflare
2. Nuna ko rekododun an shiga (proxied) ko ba
3. Nuna bayanai na ƙarin game da rekododun DNS

## Cloudflare Custom Hostnames

**Cloudflare Custom Hostnames** (wanda a baya ake kira "Cloudflare for SaaS") wani ƙwarewar Cloudflare ne wanda ke ba masu amfani su su yi amfani da domain ɗin su da SSL a kan yanayin multisite ɗinku. Wannan hanyar da aka fi ba shi don install multisite da aka haɗa da domain (domain-mapped) da ke amfani da Cloudflare, saboda Cloudflare tana sarrafa samarwa da sake gyara sertifika na SSL ga kowane domain na musamman a zahiri.

### Yadda yake bambanta da integration na asali

| | Integration na asali | Cloudflare Custom Hostnames |
|---|---|---|
| **Maida** | Tana ƙirƙirar rekododun DNS don subdomain ɗin ta kansa | Tana ba damar amfani da domain na musamman (mapped) tare da SSL da Cloudflare tana sarrafa shi |
| **Mafi kyau ga** | Multisite na subdomain | Multisite da aka haɗa da domain |
| **SSL** | An gina shi ta waje | Tana sarrafa shi ne ta Cloudflare a zahiri |

### Shirya Cloudflare Custom Hostnames

1. A cikin dashboard na Cloudflare, buɗa zone (idada domen) na domain ɗin ku mai muhimmanci.
2. Zuwa **SSL/TLS > Custom Hostnames** (Adadin Shafi na SSL/TLS > Sunaye Na Addini).
3. Ka ƙara wani "fallback origin" (babban wurin shiga da aka yi amfani da shi idan akwai matsala) wanda ke nuna IP ɗin ko sunan server ɗinka.
4. Don kowane domain na abokin ciniki da aka haɗa a Ultimate Multisite, ka ƙara wani "Custom Hostname" (Sunan Shafi na Musamman) a Cloudflare. Za ka iya yin wannan mataki ta amfani da Cloudflare API don samar da shi.
5. Cloudflare tana samar da kuma sake gyara sertifika na TLS ga kowane custom hostname ne ko ya yi sake, wanda ke faruwa ne nan take lokacin da DNS na abokin ciniki ya shiga hanyar server ɗinka.

Don cikakken manhajar API, ka duba [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Gyara Ma'anoni
A matsayin Ultimate Multisite v2.6.1, wannan ƙwarewa tana ake kira **Cloudflare Custom Hostnames** a duk ayyukan manhajar da aka yi (plugin settings) da kuma lambobi (labels). Versiyon da suka wuce sun amfani da sunan "Cloudflare for SaaS", wanda shi ne sunan albarkatu na Cloudflare.
:::

## Muhimman Abubuwa

A matsayin sabbin gyaran Cloudflare, ana iya samun wildcard proxying ga dukkan abokan ciniki yanzu. Wannan yana nufin cewa amfani da haɗin DNS na Cloudflare don installation na subdomain multisite ba shi da muhimmanci kamar yau ba, domin za ka iya ƙirƙirar wani "wildcard DNS record" a Cloudflare kawai.

## Gyara Matala (Troubleshooting)

### Matsalolin Haɗin API
- Ka tabbata cewa token ɗinka na API yana daidai kuma yana da iyakoki da suka dace.
- Bincika ko Zone ID ɗinka ya daidai.
- Ka tabbatar cewa asusun Cloudflare ɗinka yana da iyakoki da suka dace.

### Ba a ƙara Subdomain (Subdomain Not Added)
- Bincika logs na Ultimate Multisite don wata saƙon matala (error messages).
- Ka tabbatar cewa subdomain ba ta shiga Cloudflare ba a yanzu.
- Ka tabbatar cewa tsarin Cloudflare ɗinka yana dacewa da adadin DNS records da kake ƙirƙira.

### Matsalolin Proxying

- Idan ba ka so a yi proxy ga subdomains, za ka iya amfani da filter ɗin `wu_cloudflare_should_proxy`.
- Wasu ƙarin ƙwarewa ba za su yi aiki daidai idan aka yi proxy (misali, wasu ayyukan admin na WordPress).
- Ka yi la'akari amfani da Page Rules na Cloudflare don tsayawa cache ga hanyoyin admin.
