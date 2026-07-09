---
title: Cloudflare 통합
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# همکارۍ د Cloudflare سره {#cloudflare-integration}

## پرمختنه {#overview}
Cloudflare یو لوی محتوا رسولو شبکه (CDN) او امنیتي وړاندې ده چې ویب پاڼې ساتنه او تیاو ورکването کې مرسته کوي. دا همکارۍ Ultimate Multisite او Cloudflare ترمنځ د دیمین مدیریت اتوماتیکوي، په ځانګړې حال کې چې تاسو د subdomain multisite نصب کړی یاست.

## خوندونه (Features) {#features}
- په Cloudflare کې د subdomain اتوماتیک جوړول
- Proxied subdomain پاملرنه (Support)
- DNS record مدیریت
- Ultimate Multisite admin کې د DNS record ښودنې زیات شوی کیفیت

## اړتیاوې (Requirements) {#requirements}
د록 следونه باید په `wp-config.php` فایل کې تعریف شي:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## تنظیم کولو لارښوونې (Setup Instructions) {#setup-instructions}

### ۱. خپل Cloudflare API Key ترلاسه کړئ {#1-get-your-cloudflare-api-key}

۱. خپل Cloudflare dashboard ته لاگ شئ
۲. "My Profile" ته ورسئ (د پورته ښيریست څخه خپل ایمیل باندې کلیک وکړئ)
۳. د منوټو کې "API Tokens" غوره کړئ
۴. یو نوی API token جوړ کړئ چې له درجاله زیرونه وي:
   - Zone.Zone: Read (پېژندنه)
   - Zone.DNS: Edit (تغییر ورکول)
۵. خپل API token کپی کړئ

### ۲. خپل Zone ID ترلاسه کړئ {#2-get-your-zone-id}

۱. په خپل Cloudflare dashboard کې، هغه domain غوره کړئ چې تاسو یې کار غواړئ
۲. Zone ID د "Overview" ټاب کې ښکاره ده، په ښيریست سیاهه کې تحت "API"
۳. Zone ID کپی کړئ

### ۳. Constants ته `wp-config.php` کې اضافه کړئ {#3-add-constants-to-wp-configphp}

د록 следونه په خپل `wp-config.php` فایل کې اضافه کړئ:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### ۴. همکارۍ فعال کړئ (Enable the Integration) {#4-enable-the-integration}

۱. په خپل WordPress admin کې، لاړ شئ Ultimate Multisite > Settings ته
۲. به "Domain Mapping" ټاب ته ورسئ
۳. तलतिर "Host Integrations" ته رسئ
۴. Cloudflare integration فعال کړئ
۵. "Save Changes" باندې کلیک وکړئ

## دا څنګه کار کوي (How It Works) {#how-it-works}

### Subdomain Management {#subdomain-management}

کله چې د subdomain multisite نصب کې یو نوی سایت جوړی کیږي:

۱. این یکپارچه‌سازی درخواست به API دات کلاودفلر (Cloudflare) برای اضافه کردن یک رکورد CNAME برای زیردامنه می‌فرستد.
۲. زیردامنه به طور پیش‌فرض برای عبور از طریق Cloudflare پیکربندی شده است (این مورد با فیلترها قابل تغییر است).
۳. وقتی یک سایت حذف می‌شود، اینپارچه‌سازی آن زیردامنه را از Cloudflare پاک می‌کند.

### نمایش رکورد DNS {#dns-record-display}

اینپارچه‌سازی نمایش رکورد DNS در پنل مدیریت Ultimate Multisite را با موارد زیر بهبود می‌بخشد:

۱. دریافت مستقیم رکوردهای DNS از Cloudflare
۲. نمایش اینکه آیا رکوردها پروکسی (proxied) هستند یا خیر
۳. نمایش اطلاعات اضافی در مورد رکوردهای DNS

## نام‌های میزبان سفارشی Cloudflare (Cloudflare Custom Hostnames) {#cloudflare-custom-hostnames}

**نام‌های میزبان سفارشی Cloudflare** (که قبلاً به آن "Cloudflare for SaaS" می‌گفتند) یک ویژگی Cloudflare است که به مشتریان شما اجازه می‌دهد با استفاده از دامنه‌های خود و SSL روی شبکه چندسایتی (multisite) شما کار کنند. این رویکرد برای نصب‌های چندسایتی متصل به دامنه که از Cloudflare استفاده می‌کنند، توصیه می‌شود، زیرا Cloudflare خودش صدور و تمدید گواهی SSL را برای هر دامنه سفارشی به صورت خودکار مدیریت می‌کند.

### تفاوت آن با یکپارچه‌سازی استاندارد Cloudflare {#how-it-differs-from-the-standard-cloudflare-integration}

| | یکپارچه‌سازی استاندارد | نام‌های میزبان سفارشی Cloudflare (Cloudflare Custom Hostnames) |
|---|---|---|
| **هدف** | ایجاد خودکار رکوردهای DNS برای زیردامنه‌ها | فعال کردن دامنه‌های سفارشی (مستقل/mapped) با SSL مدیریت شده توسط Cloudflare |
| **بهترین کاربرد** | چندسایتی مبتنی بر زیردامنه | چندسایتی متصل به دامنه |
| **SSL** | جداگانه مدیریت می‌شود | به صورت خودکار توسط Cloudflare مدیریت می‌شود |

### راه‌اندازی نام‌های میزبان سفارشی Cloudflare {#setting-up-cloudflare-custom-hostnames}

۱. خپل Cloudflare داشبورد ته ورځئ او د خپل اصلي ډومین لپاره زون (zone) खोږدئ.
۲. بلرئ **SSL/TLS > Custom Hostnames**.
۳. یو fallback origin اضافه کړئ چې د سرور IP یا hostname ته اشاره وکړي.
۴. د Ultimate Multisite کې هر مشتری ډومین لپاره، په Cloudflare کې یوه Custom Hostname entry اضافه کړئ. تاسو کولی شئ دا مرحله له لارې اتوماتیک کړئ چې Cloudflare API کارولای.
۵. کله چې د مشتری DNS ورته خپل شبکه ته اشاره ورکړل کیږي، نو Cloudflare د هر custom hostname لپاره TLS certificates اتوماتیکي اخیست او بیا تولیدوي.

د پوره API مرجع لپاره، وګورئ [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note د اصطلاحات تازه کولو معلومات
له Ultimate Multisite v2.6.1 څخه تر وروسته، دا کار په ټول پلاګین تنظیمات او لیبلونو کې **Cloudflare Custom Hostnames** په نوم یادې کیږي. پخوانیو برخو کې، هغه نام "Cloudflare for SaaS" و ته използされていたه، چې دا د Cloudflare اصلي محصولको نام دی.
:::

## مهم ټکي {#important-notes}

له Cloudflare وروستیو تازه کولو له لارې، wildcard proxying اوس د ټول کارانو لپاره موجود دی. دا دا معنی لري چې د subdomain multisite نصبولو لپاره پر سنور Cloudflare DNS integration به لږ اړینه وي لکه پخوانیو وختونه وه، ځکه تاسو ببليو کې یوه wildcard DNS record په سادۍ سره تنظیم کولی شئ.

## مشکلو حل (Troubleshooting) {#troubleshooting}

### API Connection Issues {#api-connection-issues}
- وګورئ چې ستاسو API token صحیح دی او اړین اجازهونه لري.
- چک کړئ چې ستاسو Zone ID صحیح دی.
- ډاغه کوئ چې ستاسو Cloudflare account ته اړین اجازهونه موجود دي.

### Subdomain Not Added {#subdomain-not-added}
- د کومي غلط پیغامونو لپاره Ultimate Multisite logs وګورئ.
- چک کړئ چې آیا subdomain پہلے هم په Cloudflare کې اضافه شوی دی او نه.
- ډاغه کوئ چې ستاسو Cloudflare plan هغه شمېر DNS records سپورٹ کړي چې تاسو یې جوړوي.

### بروکسي کولو کې مشکلونه {#proxying-issues}

- که تاسو غواړئ چې د ساب‌دامینونه (subdomains) بروکسي نه شي، تاسو کولی شئ `wu_cloudflare_should_proxy` filter څخه کار واخلئ.
- کله چې پروکسی کیږي، ځینې امکانات په سمه توګه کار نه کیدای دا وي (لکه ځانګړتیاوې د وورډ پرېډشن ادمني (WordPress admin) د کار کولو لپاره).
- فکر وکړئ چې د ادمنۍ صفحات لپاره کافلاير (Cloudflare) د Page Rules څخه کار واخلئ ترڅو کاش کیش (cache) له دې صفحات پرېښودل شي.
