---
title: سرورپایلوټ همغږي
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot Integration {#serverpilot-integration}

## مروری (Overview) {#overview}
ServerPilot دا سټورینګ لپاره یو cloud service دی چې WordPress او نورو PHP ویب سائټहरू د DigitalOcean، Amazon، Google یا هر بل سرور پر سرورونه کې ځای ورکوي. دا همغږي کار تاسو ته Ultimate Multisite او ServerPilot ترمنځ خودکار د دامین syncing او SSL certificate management اجازه ورکوي.

## خوندګې (Features) {#features}
- خودکار د ډامین syncing
- Let's Encrypt له لارې SSL certificate management
- خودکار SSL renewal

## اړتیاوې (Requirements) {#requirements}
مخلوک زیرلý constants باید په `wp-config.php` فایل کې تعریف شي:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## تنظیم کولو لارښوونې (Setup Instructions) {#setup-instructions}

### ۱. خپل ServerPilot API Credentials ترلاسه کړئ {#1-get-your-serverpilot-api-credentials}

۱. خپل ServerPilot dashboard मा لاگ او ورسېږئ.
۲. "Account" > "API" ته जानुहोस्.
۳. که تاسو پہلے له کوم API key نه لرئ، نو یو نوی API key جوړ کړئ.
۴. خپل Client ID او API Key کپی کړئ.

### ۲. خپل App ID ترلاسه کړئ {#2-get-your-app-id}

۱. په خپل ServerPilot dashboard کې، "Apps" ته जानुहोस्.
۲. هغه اپ (app) غوره کړئ چې ستاسو WordPress multisite یې ځای دی.
۳. App ID د URL کې ښکاره کیږي: `https://manage.serverpilot.io/apps/{APP_ID}`

### ۳. Constants په wp-config.php کې اضافه کړئ {#3-add-constants-to-wp-configphp}

زما `wp-config.php` فایل کې زیرلý constants اضافه کړئ:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### ۴. همغږي فعال کړئ (Enable the Integration) {#4-enable-the-integration}

۱. په خپل WordPress admin کې، Ultimate Multisite > Settings ته जानुहोस्.
۲. "Domain Mapping" tab ته ورسئنه وکړئ.
۳. तलतिर "Host Integrations" ته وګورئ.
۴. ServerPilot integration فعال کړئ.
۵. "Save Changes" باندې کلیک وکړئ.

## کار څنګه کوي (How It Works) {#how-it-works}

### د ډامین syncing (Domain Syncing) {#domain-syncing}

کله چې یو domain Ultimate Multisite کې map کیږي:

۱. دمج (integration) سرورپایلوټ له اوسني لیستونه څخه ترلاسه کوي.
۲. دا د نوي د ډومین سره په لیست کې اضافه کوي (او که مناسب وي، هم www نسخه).
۳. دا تازه شوی لیست له لارې چې API ته دی، ServerPilot ته پېژندل کیږي.
۴. ServerPilot د আপোনা د اپلیکیشن لپاره د ډومین لیست تازه کوي.

### SSL Certificate Management (د SSL سندات مدیریت) {#ssl-certificate-management}

د ډومینونو همغږي کولو وروسته:

۱. دا د আপোনা د اپلیکیشن لپاره AutoSSL بشپړوي.
۲. ServerPilot له لارې Let's Encrypt څخه SSL سندات ورکولو او نصبولو کارونه انجاموي.
۳. ServerPilot د SSL سنداتو خودکار بیا تولید (renewal) هم اداره کوي.

## SSL Certificate Verification (د SSL سنداتو تایید) {#ssl-certificate-verification}

دا د integration په ServerPilot لپاره د SSL سنداتو تایید کوششونو شمېر زیات کولو طいう تنظیم شوی دی، ځکه چې ServerPilot ته SSL سندات ورکولو او نصبولو یو څه وخت کیدلی شي. په پیشټ کې، دا تر معمول له 5 ځله کار کوي، خو دا کار د فیلټرونو (filters) له لارې بدلول کیدای شي.

## Troubleshooting (مشکلاتي حل) {#troubleshooting}

### API Connection Issues (د API اړیکو مشکلات) {#api-connection-issues}
- وګورئ چې ستاسو Client ID او API Key صحیح دي.
- چک کړئ چې ستاسو App ID صحیح دی.
- ډاغه کوئ چې ستاسو ServerPilot حساب ته لازم اجازه (permissions) موجوده وي.

### SSL Certificate Issues (د SSL سنداتو مشکلات) {#ssl-certificate-issues}
- ServerPilot له دې وړاندې kräې چې د SSL سنداتو ورکولو څخه مخکې، ډومینونه باید په خپل سرور ته اشاره کولو لپاره صالح DNS سجلات (DNS records) ولري.
- که SSL سندات ورکول نه کیږي، چک کړئ چې ستاسو ډومینونه په صحیح ډول ستاسو سرورको IP address ته اشاره کوي.
- د SSL سنداتو ورکولو او نصبولو لپاره وخت کیدلی شي (معمولاً 5-15 مينې).

### Domain Not Added (ډومین اضافه نه شوی) {#domain-not-added}
- د Ultimate Multisite لاگونو کې کومه خطا پیغام وګورئ.
- چک کړئ چې ډومین پہلے هم ServerPilot ته اضافه نه شوی وي.
- ډاغه کوئ چې ستاسو ServerPilot پلان هغه شمېر ډومینونه سپورټ کړي چې تاسو یې اضافه کوئ.

### د دامین حذف (Domain Removal) {#domain-removal}
- اوس مهال، ServerPilot API ته هیڅ راهي چې انفرادي دامینونه حذف کولو وسیله ورکړي.
- کله چې Ultimate Multisite کې د دامین همپلاسي (domain mapping) حذف کیږي، دا ګډون (integration) د ServerPilot په دامینونو لیست کې د حذف شوي دامین اخیستل لپاره تازه کوي.
