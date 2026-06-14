---
title: Shigarwar Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Shigarwarin Cloudways

## Bincike (Overview)
Cloudways wani wuri ne wuri shirya wajen da ke ba ka damar saka wuraren WordPress a kan masu gudanar da su kamar DigitalOcean, AWS, Google Cloud, da sauransu. Wannan haɗin yana ba ka damar yin shigar da domain-wacce ta sama da kuma sarrafa SSL certificate tsakanin Ultimate Multisite da Cloudways cikin sauƙi.

## Siffofi (Features)
- Shirya wajen saka domain-wacce
- Sarrafa SSL certificate
- Daba domain-waje na ƙwarai
- Bawo DNS don SSL certificates

## Buƙatun (Requirements)
Wannan ƙa'idodin dole ne su bayyana a cikin fayil ɗin `wp-config.php` ɗinka:

```php
define('WU_CLOUDWAYS_EMAIL', 'email_ka_cloudways_ka');
define('WU_CLOUDWAYS_API_KEY', 'api_key_ka');
define('WU_CLOUDWAYS_SERVER_ID', 'server_id_ka');
define('WU_CLOUDWAYS_APP_ID', 'app_id_ka');
```

A matsayin zaɓi, za ka iya bayyana:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1,domain2,comma_separated_list_of_domains');
```

## Shawara Kan Shirye-shiryen (Setup Instructions)

### 1. Samu Bayan Aiki na Cloudways API

1. Shiga cikin dashboard na Cloudways ɗinka
2. Ka je zuwa "Account" > "API Keys"
3. Ka samar da API key idan ba ka samu ba
4. Ka dubi imel ɗinka da API key-ka

### 2. Samu ID na Server da Application

1. A dashboard na Cloudways, ka je zuwa "Servers"
2. Zaɓi server ɗin inda kake samar da WordPress multisite ɗinka
3. Server ID yana bayyana a cikin URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Ka je zuwa "Applications" kuma zaɓi application na WordPress ɗinka
5. App ID yana bayyana a cikin URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Tambaya ƙa'idodin (Constants) zuwa wp-config.php

Ka ƙara waɗannan ƙa'idodin zuwa fayil ɗin `wp-config.php` ɗinka:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Idan kuna domenomin **wanda ke baƙin gida** (wanda ba a cikin shaqwarka ta multisite ba) da kake so a duba shi a cikin jerin Cloudways aliases:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Kada ka saka wildcard na gida ka
**Kada ka ƙara** `*.your-network.com` (ko wata tsarin subdomain na gidan ka) zuwa `WU_CLOUDWAYS_EXTRA_DOMAINS`. Ka duba [Muhimmin — matsalar SSL na wildcard](#important--wildcard-ssl-pitfall) a ƙasa don yadda hakan ke hana samar da sertifika na SSL ta kowane wuri (per-tenant).
:::

### 4. Shigar Wajen Haɗin Kai (Enable the Integration)

1. A cikin admin site ɗinka na WordPress, ka je Ultimate Multisite > Settings.
2. Ka tura zuwa tab ɗin "Domain Mapping".
3. Ka sauka wajen "Host Integrations" (Haɗin Wurin Gida).
4. Ka samar da haɗin Cloudways (Enable the Cloudways integration).
5. Ka danna "Save Changes" (Ajiye Canjin).

## Yadda Hakan Ke Aiki

### Sanya Domen (Domain Syncing)

Idan aka saka domen a Ultimate Multisite:

1. Haɗin kai yana riƙewa duk domenomin da ake saka a yanzu.
2. Yana ƙara sabon domen zuwa cikin jerin (kuma wani sashi kamar www idan ya dace).
3. Yana aiko cikakken jerin zuwa Cloudways ta hanyar API.
4. Cloudways tana gyara aliases na domenomin ka ga manhajar ku.

Gargaɗi: API na Cloudways yana buƙatar a aiko cikakken jerin domenita kowace lokaci, ba kawai ƙara ko cire domen guda ɗaya ba.

### Gudanar da Sertifika na SSL (SSL Certificate Management)

Bayan an saka domen:

1. Haɗin kai yana bincika wanne domenomin suna da bayanan DNS masu inganci wa server ɗinka.
2. Yana aiko buƙatar Cloudways don samar da sertifikancin Let's Encrypt na SSL ga waɗannan domenomin.
3. Cloudways tana gudanar da samar da sertifika na SSL da kuma saka shi.

هنگامی که یکپارچه‌سازی درخواست گواهی‌های **استاندارد** (غیر وایلدکارت) Let's Encrypt را از Cloudways می‌کند. اگر الگوی وایلدکارت در `WU_CLOUDWAYS_EXTRA_DOMAINS` ارائه شود، قبل از درخواست SSL، علامت `*.` ابتدایی حذف می‌شود — خود وایلدکارت هرگز توسط این یکپارچه‌سازی نصب نمی‌شود. برای استفاده از گواهی وایلدکارت روی Cloudways باید آن را به صورت دستی نصب کنید، اما انجام این کار باعث مسدود شدن صدور Let's Encrypt برای دامنه‌های سفارشی نگاشت شده (به نکته زیر مراجعه کنید) می‌شود.

## دامنه‌های اضافی (Extra Domains)

ثابت `WU_CLOUDWAYS_EXTRA_DOMAINS` به شما اجازه می‌دهد دامنه‌های **خارجی** دیگری را مشخص کنید که همیشه باید در لیست آدرس‌های مستعار (aliases list) برنامه Cloudways باقی بمانند. از آن برای موارد زیر استفاده کنید:

- دامنه‌های خارجی که توسط Ultimate Multisite مدیریت نمی‌شوند (مثلاً یک سایت بازاری جداگانه که از همان برنامه Cloudways استفاده می‌کند).
- دامنه‌های پارک شده یا استیجینگ که می‌خواهید در لیست آدرس‌های مستعار برنامه باقی بمانند.

از این ثابت برای وایلدکارت زیردامنه شبکه خود **استفاده نکنید** (مثلاً `*.your-network.com`). به نکته مربوط به مشکل SSL وایلدکارت زیر مراجعه کنید.

## مهم — مشکل SSL وایلدکارت

یک اشتباه رایج هنگام دنبال کردن تنظیمات پیش‌فرض Cloudways، اضافه کردن یک وایلدکارت مانند `*.your-network.com` به `WU_CLOUDWAYS_EXTRA_DOMAINS` یا نصب دستی یک گواهی SSL وایلدکارت Cloudways برای آن وایلدکارت است.

**اگر این کار را انجام دهید، Cloudways از صدور گواهی‌های Let's Encrypt برای دامنه‌های سفارشی هر مستأجر که Ultimate Multisite آن‌ها را نگاشت می‌کند، خودداری خواهد کرد.** Cloudways هر بار گواهی SSL فعال روی برنامه را جایگزین می‌کند و یک گواهی وایلدکارت از قبل موجود روی برنامه مانع صدور Let's Encrypt برای دامنه‌های هر بخش می‌شود که این یکپارچه‌سازی به آن وابسته است.

### تنظیمات پیشنهادی Cloudways SSL برای شبکه Ultimate Multisite

1. A cikin tab ɗin **SSL Certificate** na manhajar Cloudways, shigar wani **standard Let's Encrypt certificate** wanda ya shafi kawai `your-network.com` da `www.your-network.com` — ba wildcard (wanda ya fara da `*`) ba.
2. Kada ka saka `*.your-network.com` (ko kowane tsarin subdomain na gida ɗinka) a cikin `WU_CLOUDWAYS_EXTRA_DOMAINS`. Ka riƙe wannan constant don **domains masu waje** kawai.
3. Ka ƙirƙira wildcard subdomain na kowane mutum a matsayin **DNS** kawai (wato `A` record ga `*.your-network.com` wanda ke nuna IP ɗin server ɗinka na Cloudways) don subsites su yi gyara. SSL don domain-dinka na musamman da aka haɗa an ba shi ne zai bayarwa ne ta asali (Let's Encrypt) ta hanyar integration.

Idan domain-dinka na mutanen ka suna tsayawa ba tare da SSL ba, ka bincika tab ɗin Cloudways SSL. Idan wani wildcard certificate yana aiki a wurin, ka cire shi, ka sake bayarwa wani standard Let's Encrypt certificate ga domain na gida na asali kawai, kuma ka cire duk wani ƙarin wildcard daga `WU_CLOUDWAYS_EXTRA_DOMAINS`. Sannan ka sake gudanar da haɗin domain (domain mapping) (ko ka jira wanda ya biyo) kuma integration za ta fara bayarwa na certificates na kowane domain.

## Magance Matala (Troubleshooting)

### Matsalolin Haɗin API
- Ka tabbata cewa imel ɗinka da API key ɗinka suna daidai.
- Bincika cewa ID na server ɗinka da manhajar (application IDs) sun daidai.
- Ka tabbatar cewa asusunka na Cloudways yana da iyakoki da suka dace.

### Masailin Sertifikat SSL (SSL Certificate Issues)
- Cloudways yana da ake buƙatar cewa za a sami rekodododai na DNS masu inganci wa server ɗinku kafin a ba ku sertifikat SSL.
- Wannan haɗin yana bincika rekodododai na DNS kafin ya nemi sertifikilin SSL.
- Idan ba a ba da sertifikilin SSL, ka tabbata cewa domain ɗinka suna nuna sahihi ga IP ɗin server ɗinka.
- **Domain ɗin kustom mai tsanani (Per-tenant custom domains) wanda bai samu SSL ba?** Ka bincika tabin Sertifikat SSL na Cloudways. Idan sertifikat wildcard (wanda aka install shi ne da hannu, ko yana gona `*.your-network.com`) yana aiki, Cloudways ba za ta ba da sertifikilin Let's Encrypt ga domain ɗin kustom da aka haska shi wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen wajen w
