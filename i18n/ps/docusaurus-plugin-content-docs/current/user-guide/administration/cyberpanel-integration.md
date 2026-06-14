---
title: سایبرپینل همغږي
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integration

دا راهنما توضیح ورکړم چې څنګه Ultimate Multisite CyberPanel integration تنظیم کړئ ترڅو د شبکې ته په موندل شوي دومینहरू (mapped domains) په CyberPanel کې د مجازی میزبانونو (virtual hosts) په توګه د خودکار اضافه کولو او اخیستنې لپاره تنظیم شي، او اختیاريweise له Let's Encrypt له لارې خودکار SSL ورکولو هم ممکن دی.

## دا څه کوي؟

- کله چې یو دومین Ultimate Multisite کې موندل کیږي، دا integration CyberPanel API ته راغلی ترڅو د هغه دومین لپاره یو مجازی میزبان جوړ کړي.
- کله چې دومین موندل کیږي، دا integration API ته راغلی ترڅو د ځانګړي مجازی میزبان پاک کړي.
- کله چې خودکار SSL فعال وي، دا integration په دې صورت کې چې مجازی میزبان جوړ شوی وي، Let's Encrypt ډیگه (certificate) ورکولو عمل तुरुन्त شروعوي.
- اختیاريweise، له مخکې د Domain Mapping تنظیماتو کې د "Auto-create www subdomain" تنظیم کولو سره `www.` کاپیل (alias) اضافه یا اخستل کیږي.

## پیشینې شرایطو ته اړتیا دي (Prerequisites)

- یو فعال CyberPanel instance (v2.3 او تر او لوړ توصیه کیږي) چې له WordPress سرور څخه رامنځته کېدای شي.
- یوه موجوده ویب پاڼه په CyberPanel کې چې که قبلاً د ستاسو WordPress شبکې اصلي جذر (root) خدمت کوي. دا integration نوی مجازی میزبانونه به دې سرور ته اضافه کړي.
- CyberPanel API ورته رامنځته کیږي. احراز هویت ستاسو د CyberPanel مدیر کاربری او 비밀번호 له لارې کار کوي.
- تر SSL خودکار ورکولو وړاندې، ستاسو د موندل شوي دومینहरूको DNS رکوردونه باید قبلاً ستاسو سرورको IP ته اشاره کړي.

## اړتیاوې (Requirements)

د록ي چې په ستاسو `wp-config.php` فایل کې د زیرکارناوې (constants) تعریف شي:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

اختیاريweise، تاسو کولی شئ دا هم تعریف کړئ:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — دامنې جوړښت وروسته Let's Encrypt SSL ورکړئ
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // د SSL سند لپاره کارول کیږي
```

## تنظیم کولو لارښوونې (Setup Instructions)

### ۱. CyberPanel API فعال کړئ

۱. به عنوانadministrator като CyberPanel dashboard کې لاگ وکړئ.
۲. راده **Security** > **SSL** ته ورشي او ډاډ ترلاسه کړئ چې SSL په CyberPanel چارچوب ذاتي کې فعال دی (د API لپاره اړینه ده ترڅو secure API calls کار کړي).
۳. CyberPanel API په پیشټه `https://your-server-ip:8090/api/` کې موجود دی. यसलाई فعال کولوको लागि कुनै اضافي ګام کی ضرورت छैन — مدیر प्रयोगकर्ताहरूको लागि यो डिफोल्ट रूपमा فعال हुन्छ.

### ۲. Constants اضافه کړئ به wp-config.php

د `/* That's all, stop editing! */` लाइन څخه अगाडि داسې constants ورس ورکړئ:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

د auto-SSL فعال کولو لپاره (توصیه):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### ۳. Integration فعال کړئ

۱. په خپل WordPress network admin کې، به عنوان **Ultimate Multisite** > **Settings** ته ورشي.
۲. **Domain Mapping** ټب ته ورشي.
۳. तल **Host Integrations** ته وګړئ.
۴. **CyberPanel** integration فعال کړئ.
۵. **Save Changes** باندې کلیک وکړئ.

### ۴. اتصال کی تایید (Verify Connectivity)

Settings wizard کې内置 गरिएको connection test प्रयोग کړئ:

۱. به **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel** ورخیز وکړئ.
۲. روی **Test Connection** کلیک وکړئ.
۳. یو ساکسس پیغام ډاډ ورکوي چې پلاگین می‌تواند CyberPanel API ته رسېد شي او په سمه توګه تصدیق (authenticate) وکړي.

## کار څنګه کوي؟

### Domain Mapping (دامنه مَپینګ)

کله چې د Ultimate Multisite کې یو دامنه مَپ کیږي:

۱. همغږي (integration) د خپل CyberPanel میزبان پر `/api/createWebsite` ته یو `POST` درخواست پېژندلوي.
۲. CyberPanel د تنظیم شوي پېکيج अन्तर्गत د دامنې لپاره یو نوی مجازی میزبان (virtual host) جوړوي.
۳. د داکیومنت رুট (document root) ته د خپل WordPress شبکه ریشه دایرکتوري ته اشاره ورکول کیږي.
۴. کله چې دامنه مَپ کول منځ ته راشي، همغږي `/api/deleteWebsite` رافرهنګوي ترڅو مجازی میزبان پاک کړی شي.

### Auto-SSL (د خودکار SSL)

کله چې `WU_CYBERPANEL_AUTO_SSL` `true` وي:

۱. کله چې مجازی میزبان جوړ شي، همغږي د دامنې لپاره `/api/issueSSL` رافرهنګوي.
۲. CyberPanel له ACME HTTP-01 چیلنج (challenge) په کارولو سره Let's Encrypt سرتیفیکات ترلاسه کوي.
۳. CyberPanel سرتیفیکات ختمېدو څخه مخکې خودکار रूपमा بیا تولیدوي.

> **مهم:** DNS باید د Let's Encrypt له خوا دامنه کیتایلو لپاره د خپل سرور IP ته پوره پراخ (fully propagated) شي. که SSL ورکول مَپ کولو وروسته तुरुन्तै ناکام وي، نو DNS پراختیا انتظار وکړئ او د **SSL** > **Manage SSL** अन्तर्गत CyberPanel ډش‌بورد له لارې بیا SSL رافرهنګ کړئ.

### www Subdomain (www زیرمجموعه)

که د Domain Mapping تنظیماتو کې **Auto-create www subdomain** فعال وي، نو هم همغږي د `www.<domain>` لپاره یو مجازی میزبان کاپیټل (alias) جوړوي او کله چې Auto-SSL فعال وي، نو هغه سرتیفیکات چې Apex او www بدلونه کوربه کوي، رافرهنګوي.

### Email Forwarders (ای میل پرېښودونکي)

کله چې [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon فعال وي، نو CyberPanel هم کولی شي کارندونکو د ای میل فورواردونکي (customer email forwarders) وړاندې کړي. فورواردونکي پیغامونه یو د دامنه عمي (domain address) څخه بل ځای ته رانده وي، پرته له دې چې یو پوره میله (mailbox) جوړه کړو، کوم چې د بدلونونو لپاره ګټور دی لکه `info@customer-domain.test` یا `support@customer-domain.test`.

د کارندونکو لپاره فورواردونکي فعال کولو څخه مخکې:

۱. پیلونو او پریکړو (constants) چې माथि دي، وګورئ چې تنظیم شوي دي او اتصال کیچولو پریکړه (connection test) بریالۍ ده.
۲. په Emails addon تنظیماتو کې CyberPanel ای میل پليټ فارم (provider) فعال کړئ.
۳. د فورواردونکي جوړولو څخه مخکې ډاغه چمتو کړئ چې کارندونکي دامنه CyberPanel کې شته وي.
۴. یو آزمویني فورواردونکی جوړ کړئ او له هغه سره پیغام فرستاو پاتې کیږئ، تر دې وړاندې چې دا خ onto production plans باندې وړاندې کړئ.

که د فورواردونکي جوړول ناکامه وي، په пърوونو Ultimate Multisite activity logs وګورئ، بیا CyberPanel کې چمتو کړئ چې سرچيني دامنه شته ده او چې API کاربری ته ای میل مدیریت (email-management) کیتنی حقوق دي.

## تنظیم کولو مرجع (Configuration Reference)

| Constant | اړینه؟ | پیشټه (Default) | شرح |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | هو | — | د خپل CyberPanel نمونه لپاره پوره URL، لکه: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | هو | — | CyberPanel مدیر کاربری نوم |
| `WU_CYBERPANEL_PASSWORD` | هو | — | CyberPanel مدیر پاسورډ |
| `WU_CYBERPANEL_PACKAGE` | هو | `Default` | هغه CyberPanel میټینګ پليټ چې د نوي مجازی میزبانونو لپاره ورکړل کیږي |
| `WU_CYBERPANEL_AUTO_SSL` | نه | `true` | دامنه جوړولو وروسته Let's Encrypt SSL سرتیفیکات ورکول |
| `WU_CYBERPANEL_PHP_VERSION` | نه | `PHP 8.2` | د نوي مجازی میزبانونو لپاره PHP نسخه (باید په CyberPanel کې تثبیت شوي نسخه سره مطابقت ولري) |
| `WU_CYBERPANEL_EMAIL` | نه | — | SSL سرتیفیکات ثبت کولو لپاره اړیکه ای میل |

## مهم ټکي

CyberPanel د ګډون لپاره د سیشن پر بنسټ ټوکن (session-based token) احرازوي اوتکاریت کار کوي. دا همغږي (integration) په هر API کال کې ټوکن ترلاسه کولو ته خودکار عمل کوي.
د دې لپاره چې تاسو کولی شئ، باید د CyberPanel مدیر حساب باندې د ویب پاڼو جوړولو او منځته وړلو اجازه وي.
CyberPanel په پیشټه پورْت `8090` मा کار کوي. که ستاسو سرور څخه فایروال (firewall) کار کوي، نو ډاغه ډاګه چې دا پورْت له WordPress اپلیکیشن сървър څخه رامنځته کیږي.
دا همغږي د DNS رکود مدیریت نه کوي. تاسو باید د دامین د DNS ته خپل سرورको IP ठेوضنه وکړئ تر دې وړاندې چې په Ultimate Multisite کې د دامین نقشہ (mapping) جوړوئ.
که تاسو OpenLiteSpeed (OLS) کار کوئ، نو د ورټچوال هاست (virtual host) بدلونونو وروسته خودکار ګرانه (graceful restart) کیږي. هیڅ manuāl مداخلې نه دي اړین.

## مشکلي حل (Troubleshooting)

### API Connection Refused (د API اتصال رد شوې)

- وګورئ چې په سرور فایروال کې پورْت `8090` खुڵه ده او نه.
- ډاغه کیدای شي چې `WU_CYBERPANEL_HOST` ارزښت باید صحیح پروتوکول (`https://`) او پورْت شامل وي.
- وګورئ چې ستاسو CyberPanel SSL سرتیفیکټ صالح دی؛ ځینې خود-تولید شوي (self-signed) سرتیفیکټ TLS کیتکارۍ کې ناکامۍ لامل شي. یوازې په اعتمادمنو پرایवट نټ ورکونو کې `WU_CYBERPANEL_VERIFY_SSL` ته `false` تنظیم کړئ.

### Authentication Errors (احرازويي غلطۍ)

- د CyberPanel سره مستقیم لاگین गरेर وګورئ چې ستاسو `WU_CYBERPANEL_USERNAME` او `WU_CYBERPANEL_PASSWORD` صحیح دي.
- که تکرار شوي ناکام لاگین کوششونه وشي، نو CyberPanel حسابونو ته قفل کوي. که قفلونه کیږي، نو په CyberPanel کې **Security** > **Brute Force Monitor** وګورئ.

### Domain Not Created (د دامین جوړ نه کیدي)

- د API غلط پیغامونو لپاره Ultimate Multisite فعالیت لاگ (**Ultimate Multisite** > **Activity Logs**) وګورئ.
- ډاغه کیدای شي چې په `WU_CYBERPANEL_PACKAGE` کې تعریف شوی پېکاج CyberPanel کې شته وي ( **Packages** > **List Packages**).
- ډاغه ډاګه چې د دامین په CyberPanel کې د ویب پاڼه په توګه پہلے ثبت شوای – دوپل ویب پاڼو جوړول غلطي ورکوي.

### SSL Certificate Not Issued (SSL سرتیفیکټ ورکړل نه شوی)

DNS پوره ٿي چڪو آهي ته: `dig +short your-domain.com` توهان جي سرور جي IP ڏيکاريو.
Let's Encrypt رفتار جي حد (rate limits) لاڳو ڪري ٿو. جيڪڏهن توهان نے تازو ڪجهه سرٽيفڪيٽ هڪ ئي ڊومين لاءِ जारी ڪيا آهن، ته دوبار ڪوش ڪرڻ کان اڳ انتظار ڪريو.
سرٽيفڪيٽ ڏناءن جي غلطين جي تفصيل لاءِ **Logs** > **Error Logs** تحت CyberPanel ۾ SSL لاگز (logs) کي چكهو.
ٻئي حل طور تي، توهان CyberPanel کان SSL مانيو ڪري سگهو ٿا: **SSL** > **Manage SSL** > ڊومين چونڊيو > **Issue SSL**.

## حوالا

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
