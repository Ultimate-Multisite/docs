---
title: د کنټرول پینل همغږي ښه کړئ
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# دایرکتوري پینل همکارۍ کي وڌاري {#enhance-control-panel-integration}

## مروری {#overview}
Enhance یو عصري کنټرول پینل دی چې قوي هاستنگ خودکارسازی او مدیریت توانې ورکوي. دا همکارۍ Ultimate Multisite او Enhance Control Panel ترمنځ د د ډومینونو د خودکار سنکرونیز کولو او SSL سرتیفیکټ مدیریت لپاره اجازه ورکوي.

**مرتبط بحث:** د ټولنیز نصیحتونو او اضافي معلوماتको लागि [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) وګورئ.

## خوندګې {#features}
- کله چې Ultimate Multisite کې ډومینونه مَپ کیږي، د ډومینونو خودکار سنکرونیز کیږي.
- کله چې DNS حل وي، نو LetsEncrypt له لارې خودکار SSL سرتیفیکټ ورکول کیږي.
- د شبکې لپاره زیرمجموعه دومین (subdomain) پ suport دی چې په subdomain mode کې کار کوي.
- کله چې مَپونه حذف شي، نو ډومین هم حذف کیږي.
- API credentials کی تایید لپاره اړیکې پریکړې (connection testing) کیږي.

## اړتیاوې {#requirements}

### سیسټم اړتیاوې {#system-requirements}
- Enhance Control Panel نصب او ورته رسيمن وي.
- WordPress Multisite چې په Enhance سرور کې یا ورسند دی، هغه هم 설치 شوی وي.
- Apache web server (Enhance اوس د Apache تنظیمات پ suport دی؛ LiteSpeed Enterprise کم قیمت کې موجود دی).

### API رامنځته کول {#api-access}
تاسو باید API tokens جوړول لپاره Enhance Control Panel ته مدیري رسېمنه (administrator access) لرئ.

## خپل API credentials ترلاسه کړئ {#getting-your-api-credentials}

### ۱. API Token جوړ کړئ {#1-create-an-api-token}

۱. د Enhance Control Panel په مدیري رسېمنه като لاگ او لاگ وکړئ.
۲. د ناویګیشن منو کې **Settings** باندې کلیک وکړئ.
۳. ته **Access Tokens** ته ورسئ.
۴. **Create Token** باندې کلیک وکړئ.
۵. خپل token یو توصیفی نوم ورکړئ (مثال: "Ultimate Multisite Integration").
۶. **System Administrator** رول ورکړئ.
۷. د منقضی کیدو تاریخ لپاره:
   - که تاسو غواړئ چې token هیڅکله منقضی نه وي، نو یې خالی لرئ.
   - یا امنیتي اړتیاوو لپاره یو ځانګړی منقضی کیدو تاریخ تنظیم کړئ.
۸. **Create** باندې کلیک وکړئ

بعد ساخت، **Access Token** و **Organization ID** شما نمایش داده خواهد شد. لطفاً این‌ها را فوراً ذخیره کنید زیرا توکن فقط یک بار نمایش داده می‌شود.

### ۲. دریافت Organization ID (شناسه سازمان) {#2-get-your-organization-id}

Organization ID در صفحه Access Tokens در یک جعبه اطلاعاتی آبی با عنوان "Org ID: {your_id}" نمایش داده می‌شود.

Organization ID به شکل UUID زیر است: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

شما می‌توانید Organization ID یک مشتری را با این روش نیز پیدا کنید:
۱. به صفحه **Customers** بروید
۲. روی **Manage customer** برای مشتری مربوطه کلیک کنید
۳. به URL نگاه کنید - Organization ID حروف الفبایی بعد از `/customers/` است.

### ۳. دریافت Server ID (شناسه سرور) {#3-get-your-server-id}

برای پیدا کردن Server ID خود (که برای عملیات دامنه لازم است):

۱. در Enhance Control Panel، به **Servers** بروید
۲. روی سروری که نصب وردپرس شما روی آن اجرا می‌شود کلیک کنید
۳. Server ID (در قالب UUID) در URL یا جزئیات سرور قابل مشاهده خواهد بود
۴. به طور جایگزین، می‌توانید از API برای لیست کردن سرورها استفاده کنید:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID از قالب UUID زیر پیروی می‌کند: `00000000-0000-0000-0000-000000000000`

### ۴. دریافت API URL (آدرس رابط برنامه‌نویسی) {#4-get-your-api-url}

API URL شما آدرس Enhance Control Panel با اضافه کردن `/api/` است:

```
https://your-enhance-panel.com/api/
```

**مهم:** مسیر `/api/` الزامی است. اشتباهات رایج شامل موارد زیر است:
- استفاده فقط از دامنه بدون `/api/`
- استفاده از HTTP به جای HTTPS (برای امنیت نیاز به HTTPS دارید)

## پیکربندی {#configuration}

### ثابت‌های مورد نیاز {#required-constants}

ثابت‌های زیر را در فایل `wp-config.php` خود اضافه کنید:

# همکارۍ د کنټرول پینل سره ښه کول (Enhance Control Panel Integration) {#setup-via-integration-wizard}

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### له طریقې د همکارۍ کارول (Setup via Integration Wizard) {#additional-wordpress-configuration}

۱. په خپل WordPress admin کې، ورسره راده وکړئ: **Ultimate Multisite** > **Settings**
۲. ته **Integrations** ټب ته لاړ شئ.
۳. **Enhance Control Panel Integration** وموندئ او د **Configuration** باندې کلیک وکړئ.
۴. سټېپونه تاسو سره په تنظیم کې مرسته کوي:
   - **Step 1:** تعارف او خوندیتو پر ګمرا (Introduction and feature overview)
   - **Step 2:** خپل API معلومات ورسره کړئ (Token، API URL، Server ID)
   - **Step 3:** اړیکه کیدای شي (Test the connection)
   - **Step 4:** بیاکتنه وکړئ او فعال کړئ (Review and activate)

تاسو کولی شئ غوره کړئ چې:
- سټېپونه د ثابتو (constants) په `wp-config.php` فایل کې خودکار ورسره کړي (inject)
- ثابتو تعریفونه کاپی کړئ او manuallly اضافه کړئ

## اضافي WordPress تنظیمات (Additional WordPress Configuration) {#htaccess-configuration}

د ټولنیز راګرځیدونکو نظرونو له اساس ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265))، ممکن تاسو اړتیا لرئ چې د دې اضافي تنظیمات هم جوړ کړئ:

### .htaccess تنظیم ( .htaccess Configuration) {#cookie-constants}

که تاسو په د ډومین مېپینګ کې مشکل تجربه کوئ:
۱. اصلي Enhance `.htaccess` فایل پاک کړئ.
۲. هغه یې معیاري WordPress Multisite `.htaccess` فایل له ځانه پورې بدل کړئ.

### Cookie ثابتې (Cookie Constants) {#how-it-works}

د دې ثابتو را ورسره `wp-config.php` کې اضافه کړئ ترڅو د مېپ شوي ډومینونو په ګډه صحیح کوکی مدیریت هم وي:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## کار څنګه کوي (How It Works) {#when-a-domain-is-mapped}

### کله چې یو ډومین مېپ کیږي (When a Domain is Mapped) {#when-a-domain-is-removed}

۱. کاربر Ultimate Multisite (یا সাবডোমেইন মোডে একটি নতুন সাইট তৈরি করা হলে) এ কাস্টম ডোমেইন ম্যাপ করেন।
২. ইন্টিগ্রেশন Enhance-এর API তে একটি POST রিকোয়েস্ট পাঠায়: `/servers/{server_id}/domains`
৩. Enhance আপনার সার্ভার কনফিগারেশনে ডোমেইনটি যোগ করে।
৪. যখন DNS আপনার সার্ভারে রেজোলিউট হয়, তখন Enhance স্বয়ংক্রিয়ভাবে Let'sEncrypt এর মাধ্যমে একটি SSL সার্টিফিকেট প্রদান করে।
৫. HTTPS সহ ডোমেইনটি সক্রিয় হয়ে যায়।

### যখন একটি ডোমেইন সরানো হয় {#dns-and-ssl-checking}

১. Ultimate Multisite-এ ডোমেইন ম্যাপিং মুছে ফেলা হয়।
২. ইন্টিগ্রেশন ডোমেইনের আইডি খুঁজে বের করার জন্য Enhance-কে কোয়েরি করে।
৩. নিম্নলিখিত ঠিকানায় একটি DELETE রিকোয়েস্ট পাঠানো হয়: `/servers/{server_id}/domains/{domain_id}`
৪. Enhance আপনার সার্ভার কনফিগারেশন থেকে ডোমেইনটি সরিয়ে দেয়।

### DNS এবং SSL পরীক্ষা করা {#verifying-setup}

Ultimate Multisite-এ বিল্ট-ইন DNS এবং SSL চেকিং রয়েছে:
- আপনি **Domain Mapping Settings** এ চেক ইন্টারভাল সেট করতে পারেন (ডিফল্ট: ৩০০ সেকেন্ড/৫ মিনিট)।
- একটি ডোমেইন সক্রিয় করার আগে সিস্টেমটি DNS প্রোপাগেশন যাচাই করবে।
- SSL সার্টিফিকেটের বৈধতা স্বয়ংক্রিয়ভাবে পরীক্ষা করা হয়।
- Enhance স্বয়ংক্রিয়ভাবে SSL প্রদান পরিচালনা করে, তাই ম্যানুয়াল SSL কনফিগারেশনের প্রয়োজন নেই।

## সেটআপ যাচাই করা {#test-the-connection}

### সংযোগ পরীক্ষা করুন {#after-mapping-a-domain}

১. ইন্টিগ্রেশন উইজার্ডে, **Test Connection** ধাপটি ব্যবহার করুন।
২. প্লাগইন আপনার সার্ভারে ডোমেইন তালিকাভুক্ত করার চেষ্টা করবে।
৩. একটি সফল বার্তা নিশ্চিত করে যে:
   - API ক্রেডেনশিয়াল সঠিক আছে
   - API URL অ্যাক্সেসযোগ্য
   - সার্ভার আইডি বৈধ
   - অনুমতিগুলি সঠিকভাবে সেট করা আছে

### ডোমেইন ম্যাপ করার পরে {#troubleshooting}

১. Ultimate Multisite-এ একটি টেস্ট ডোমেইন ম্যাপ করুন।
২. Ultimate Multisite লগগুলি পরীক্ষা করুন (**Ultimate Multisite** > **Logs** > **integration-enhance**)।
৩. Enhance কন্ট্রোল প্যানেলে যাচাই করুন যে ডোমেইনটি যোগ করা হয়েছে:
   - **Servers** > **Your Server** > **Domains** এ যান।
   - নতুন ডোমেইনটি তালিকায় প্রদর্শিত হবে।
৪. একবার DNS প্রোপাগেট হলে, স্বয়ংক্রিয়ভাবে SSL প্রদান করা হয়েছে তা যাচাই করুন।

## مشکلات حل (Troubleshooting) {#api-connection-issues}

### رابطي API-র সমস্যা (API Connection Issues) {#domain-not-added}

**ত্রুটি: "Enhance API-তে সংযোগ করতে ব্যর্থ" ("Failed to connect to Enhance API")**
- নিশ্চিত করুন যে `WU_ENHANCE_API_URL`-এ শেষে `/api/` আছে।
- নিশ্চিত করুন যে আপনি HTTPS ব্যবহার করছেন, HTTP নয়।
- পরীক্ষা করুন যে আপনার ওয়ার্ডপ্রেস সার্ভার থেকে এনহ্যান্স প্যানেল অ্যাক্সেস করা যাচ্ছে কিনা।
- যাচাই করুন যে কোনো ফায়ারওয়াল নিয়ম সংযোগ ব্লক করছে না।

**ত্রুটি: "Enhance API টোকেন পাওয়া যায়নি" ("Enhance API Token not found")**
- নিশ্চিত করুন যে `wp-config.php`-এ `WU_ENHANCE_API_TOKEN` সংজ্ঞায়িত করা আছে।
- যাচাই করুন যে এনহ্যান্স প্যানেলে টোকেনটি মুছে ফেলা বা মেয়াদ শেষ হয়নি।
- টোকেনের মানের বানান ভুল আছে কিনা তা পরীক্ষা করুন।

**ত্রুটি: "সার্ভার আইডি কনফিগার করা নেই" ("Server ID is not configured")**
- নিশ্চিত করুন যে `wp-config.php`-এ `WU_ENHANCE_SERVER_ID` সংজ্ঞায়িত করা আছে।
- নিশ্চিত করুন যে সার্ভার আইডি একটি বৈধ UUID ফরম্যাটে আছে।
- আপনার এনহ্যান্স প্যানেলে সার্ভারটি বিদ্যমান কিনা তা নিশ্চিত করুন।

### ডোমেইন যোগ না হওয়া (Domain Not Added) {#ssl-certificate-issues}

**লগগুলো পরীক্ষা করুন:**
১. **Ultimate Multisite** > **Logs** এ যান।
২. **integration-enhance** দিয়ে ফিল্টার করুন।
৩. সমস্যা নির্দেশকারী কোনো ত্রুটি বার্তা খুঁজুন।

**সাধারণ কারণসমূহ:**
- অবৈধ ডোমেইন নামের ফরম্যাট।
- ডোমেইনটি ইতিমধ্যেই এনহ্যান্স-এ বিদ্যমান।
- API অনুমতির অভাব (নিশ্চিত করুন যে টোকেনটিতে সিস্টেম অ্যাডমিনিস্ট্রেটর ভূমিকা আছে)।
- সার্ভার আইডি এনহ্যান্স-এর আসল সার্ভারের সাথে মিলছে না।

### SSL সার্টিফিকেট সংক্রান্ত সমস্যা (SSL Certificate Issues) {#dns-check-interval}

**SSL প্রোভিশনিং হচ্ছে না:**
- যাচাই করুন যে DNS আপনার সার্ভারের আইপি ঠিকানায় নির্দেশ করছে।
- পরীক্ষা করুন যে ডোমেইনটি সঠিকভাবে রেজোলভ হচ্ছে কিনা: `nslookup yourdomain.com`
- এনহ্যান্স SSL প্রোভিশন করার আগে DNS রেজোলভ করতে চায়।
- DNS প্রোপাগেশন শেষ হওয়ার পর সাধারণত ৫-১০ মিনিট সময় লাগে SSL প্রোভিশনিং এর জন্য।
- SSL-এর নির্দিষ্ট ত্রুটিগুলো দেখতে এনহ্যান্স কন্ট্রোল প্যানেলের লগগুলো পরীক্ষা করুন।

**এনহ্যান্সে ম্যানুয়াল SSL ট্রাবলশুটিং:**
১. **Servers** > **Your Server** > **Domains** এ যান।
২. আপনার ডোমেইনটি খুঁজে বের করুন এবং এর SSL স্ট্যাটাস পরীক্ষা করুন।
৩. প্রয়োজন হলে আপনি ম্যানুয়ালি SSL প্রোভিশনিং শুরু করতে পারেন।

### DNS চেক ইন্টারভাল (DNS Check Interval) {#authentication-errors}

هغه د دامین یا SSL प्रमाणपत्रو ډیر وخت کیږي چې فعال شي:
۱. ر去ر **Ultimate Multisite** > **Settings** > **Domain Mapping**
۲. **DNS Check Interval** تنظیم ته وګورئ
۳. له پر معمول ۳۰۰ ثانیې (seconds) به کم تر یو کوچنی مقدار (کمینه: ۱۰ ساطع) بدل کړئ
۴. **توجه:** د کمو وختونو لامل ګرځي چې ډیر کثرتیک چکونه کیږي، خو سرور ته فشار راکړل هم زیات کیږي

### د احراز性の غلطۍ (Authentication Errors) {#log-analysis}

**HTTP 401/403 غلطۍ:**
- په Enhance کې خپل API token بیا تولید کړئ (Regenerate your API token in Enhance)
- وګورئ چې هغه token **System Administrator** رول لري
- ډاډ ترلاسه کړئ چې token منقضی نه شوی وي
- ډاډ ترلاسه کړئ چې تاسو له صحیح Organization ID کار کوئ (که څه هم په URL کې معمولاً اړتیا نه ده)

### د لاگ تحلیل (Log Analysis) {#api-reference}

د تفصیلی لاګونه فعال کړئ:
```php
// د زیات Debugging لپاره wp-config.php ته اضافه کړئ
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

بیا لاګونه په درجledujو ځایونو کې وګورئ:
- Ultimate Multisite لاګونه: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Enhance panel logs: د Enhance مدیر رابطې (admin interface) کې موجود دي

## API Reference {#authentication}

### احراز (Authentication) {#common-endpoints-used}
ټول API درخواستونه له Bearer token احراز کولو سره کار کوي:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### معمول ډول کارل شوي Endpoints {#full-api-documentation}

**د سرورونو لیست کول:**
```
GET /servers
```

**په یو سرور کې د دامینونو لیست کول:**
```
GET /servers/{server_id}/domains
```

**دامین کارول:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**د دامین حذف کول:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### پوره API مستندات (Full API Documentation) {#best-practices}
پوره API مستندات: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## غوره عملونه (Best Practices) {#security}

### امنیت (Security) {#performance}
- **کبھی هميشه API tokens را نسخه کنترول (version control) में कमिट न करें**
- टोकन को `wp-config.php` में स्टोर करें जिसे Git से बाहर रखा जाना चाहिए
- उचित परमिशन वाले टोकन का उपयोग करें (पूरे इंटीग्रेशन के लिए सिस्टम एडमिनिस्ट्रेटर)
- प्रोडक्शन एनवायरनमेंट के लिए टोकन की समाप्ति तिथियां सेट करें
- समय-समय पर टोकन को बदलें (Rotate tokens periodically)

### प्रदर्शन (Performance) {#monitoring}
- बहुत ज़्यादा API कॉल से बचने के लिए डिफ़ॉल्ट DNS चेक अंतराल (300 सेकंड) का उपयोग करें
- बड़े पैमाने पर डोमेन ऑपरेशंस चलाते समय Enhance सर्वर संसाधनों की निगरानी करें
- अगर एक साथ कई डोमेन मैप कर रहे हैं तो डोमेन जोड़ने में थोड़ा अंतराल (staggering domain additions) करने पर विचार करें

### मॉनिटरिंग (Monitoring) {#additional-resources}
- इंटीग्रेशन एरर के लिए Ultimate Multisite लॉग्स को नियमित रूप से जांचें
- विफल डोमेन जोड़ (failed domain additions) के लिए मॉनिटरिंग सेट करें
- सत्यापित करें कि SSL सर्टिफिकेट सही तरीके से प्रोविजन हो रहे हैं
- Enhance सर्वर की क्षमता और डोमेन सीमाओं पर नज़र रखें

## अतिरिक्त संसाधन (Additional Resources) {#support}

- **Enhance आधिकारिक दस्तावेज़:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API दस्तावेज़ीकरण:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance कम्युनिटी फोरम:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub चर्चा:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite डोमेन मैपिंग गाइड:** विकी पेज "How to Configure Domain Mapping v2" देखें

## پشتیبانی (Support) {#notes}

अगर आपको कोई समस्या आती है:
1. ऊपर दिए गए ट्रबलशूटिंग सेक्शन की जाँच करें
2. Ultimate Multisite लॉग्स की समीक्षा करें
3. [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions) से सलाह लें
4. पैनल-विशिष्ट समस्याओं के लिए Enhance सपोर्ट से संपर्क करें
5. कम्युनिटी सहायता के लिए विस्तृत एरर लॉग के साथ एक नई चर्चा (discussion) बनाएं

## नोट्स (Notes)

- دا هميثاق فقط ডোমেইন aliases (alias নামসমূহ) له لارښوونه سره کار کوي؛ Enhance په خودکار ډول SSL وظيفه هم مدیریتوي.
- دا هميثاق както custom domain mappings (خصوصي د دامین های مېپینګ) او subdomain-based sites (د ساب‌دومین پر بنسټ جوړ شوي سایتونه) ته هم پام کوي.
- د Domain Mapping تنظیماتو کې د automatic www subdomain جوړول را کولی شي تنظیم کړئ.
- Enhance اوسمهال Apache configurations (LiteSpeed Enterprise موجود دی) و کار کوي.
- کله چې له Ultimate Multisite څخه د domain removal (د دامین حذف) وکړئ، دا د domain له Enhance څخه منځه کیږي خو ممکن د اړوند SSL certificates په چټکۍ سره حذف نه شي.
