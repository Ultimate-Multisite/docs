---
title: API Endpoint Register
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# دغlere Ultimate Multisite Register API endpoint

په دې درس کې، تاسو زده کړئ چې څنګه Ultimate Multisite /register API endpoint کارولو لپاره هم لروپي (onboarding) پر یو نوی کلاینټ په خپل شبکه کې جوړ کړئ او څنګه دا کار له لارې د Zapier سره پیل کړئ.

دا endpoint POST مېتود استعمالوي او د URL _**https://yoursite.com/wp-json/wu/v2/register**_ لروپيږي. په دې پوښتنه کې، په ستاسو شبکه کې ۴ پروسې اجرا کیږي:

  * یو نوی WordPress کاربر یا د کارونکي ID له لارې هغه تعامل (identification) جوړی کیږي.

  * Ultimate Multisite کې یو نوی کلاینټ یا د کلاینټ ID له لارې هغه تعامل جوړی کیږي.

  * په WordPress شبکه کې یو نوی سایت جوړی کیږي.

  * په پایله کې، Ultimate Multisite کې یو نوی सदस्यता (Membership) جوړی کیږي.

د دې پروسې لپاره، تاسو باید خپل API credentials ته اړتیا لرئ. د دوی ترلاسه کولو لپاره، خپل شبکه مدیر پینل ته لاړ شئ، ورته **Ultimate Multisite > Settings** > **API & Webhooks** ته ځئ، او API Settings bölümه وګورئ.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

دلته د API تنظیمات صفحې پوره توضیحات دي:

![API settings full page](/img/config/settings-api-full.png)

**Enable API** غوره کړئ او خپل API credentials ترلاسه کړئ.

خاور، اوس اترای له endpoint سره탐کن و کارول او بیا په Zapier کې د ثبت کولو عمل (registration action) جوړ کړئ.

## Endpoint body parameters

لکه چې موږ باید ورته لروپي ته ترې څه معلومات پامل ګرځو، دا یو پرورش دی. په دې مقاله پای کې، تاسو پوره پوښتنه پیدا کوئ.

### Customer

دا هغه معلومات دي چې کارونکي (User) او Ultimate Multisite کلاینټ جوړولو پروسې لپاره اړین دي:

"customer_id" : integer

ایا تاسو کولی شئ د خپل شبکه کې جوړ شوی کلاینټ ID را پې消ئ؟ که دا ونه وړاندې کړای، زیرلý معلومات د یو نوی کلاینټ او یو نوي WordPress کاربری جوړولو لپاره کارول کیږي. کاربری ID هم په عیني ډول د کلاینټ ID په عیني ډول پې消ئلی کیدای شي.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership** (عضویت)

موږ ته د دې شی کې یوازې Membership Status (عضویت کی وضعیت) معلومات دي.

"membership" { "status" : "string", // یو له "pending" (پېژندل)، "active" (فعال)، "trialing" (د آزموینه)، "expired" (منقضی)، "on-hold" (په توګه منځ ته)، "canceled" (منغله) څخه یو },

### **Products** (مجموعې مصنوعات)

مصنوعاتانو ته د ستاسو شبکه څخه ۱ یا ډېر محصول IDहरूको آر得ی (array) ورکول کیږي. احتیاط وکړئ، دا endpoint مصنوعات نیسي نه جوړوي. د مصنوعات جوړولو endpoint په ښه پوهې کولو لپاره Ultimate Multisite-ৰ dokumentasjonen وګورئ.

**"products" : [1,2],**

### Payment (پایله)

همانګه د Membership په څېر، موږ یوازې وضعیت ته اړتیا لرئ.

**"payment" { "status" : "string", // یو له "pending" (پېژندل)، "completed" (تام پوره)، "refunded" (د بیا ورکړل شوی)، "partially-refunded" (په جزوي ډول بیا ورکړل شوی)، "partially-paid" (په جزوي ډول پیسې ورکړل شوي)، "failed" (مخلوف شو)، "canceled" (منغله) څخه یو },**

### Site (مکان)

او د بدن پای ته ورسولو لپاره موږ باید د سایت URL او Title هم په Site object کې ونه کړو.

**"site" : { "site_url" : "string", "site_title" : "string" }**

د register endpoint خوندل (return) یو آر得ی (array) به وي چې نوی جوړ شوی membership معلومات یې پکې وي.

## Creating an action in Zapier (په Zapier کې عمل جوړول)

د دې نوي او قوي حساب جوړولو endpoint په رادللو سره، تاسو د Zapier کې یو نوی عمل هم ترلاسه کوئ.

ایا تاسو پوهیدئ چې څنګه د Zapierको نوي نسخه وړاندې کولو ټول امکانات کار کړئ او له لاسه ورکړئ؟ زیات معلومات ترلاسه کړئ دلته. (لینک؟)

### Creating an action (عمل جوړول)

د دې ښودل چې څنګه د registration endpoint له لارې له Zapier څخه کارولو سره، موږ یو integration (اتصال) په Google Forms جوړوي. هر وخت چې دا form پوره کیږي او معلومات په form کې د ځوابsheet کې محفوظ شي، نو Ultimate Multisite network کې یو نوی membership (عضویت) جوړیږي.

په Google Forms کې، یو form جوړ کړئ چې د network کې نوي membership جوړولو لپاره اړین کمترین felډونه (fields) لري.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

خاورېدلته په Zapier کې، یو نوی Zap جوړ کړئ او هغه form چې په spreadsheet کې معلومات محفوظ کیږي، له لارې د Google سره وصل کړئ.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

پوره شو! Google Forms form له Zapier سره تړلی دی او network سره integration کولو لپاره چمتو دی. اوس اترای ته ورته ځواب ورکول چې له هغه Trigger څخه نتیجه کیږي چې هر وخت چې پوره کیږي، Google Forms ترڅنګ trigger کوي.

نوی Ultimate Multisite app وموندئ او غوره کړئ. د دې ډول Zap لپاره Register (ثبت) خيار غوره کړئ.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

د دې пърوې ګام وروسته، هغه account (حساب) غوره کړئ چې له دې Zap سره تړلی دی.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

دا تر ټولو حساس برخه ده د ټول پروسې لپاره. موږ باید هغه felډونه چې له Google Forms څخه راغلي دي، د register endpoint لپاره اړین کمترین felډونو سره ورسندو (match)، لکه څنګه چې په دې artikلم د پخوانی برخې کې ښودل شو.

په دې مثال کې، موږ یوازې username (کاربري اسم)، email (ای میل)، password (کود)، name (اسم) او website URL (د ویب사이트 یو آر ایل) تنظیم کولو ته اړتیا لرو. بقیه یې پیش از تعيين شوی دی ترڅو د دې Google Forms له لارې جوړ شوي ټول memberships په عین ذات ډول product او status نمونې অনুসراند کار کړي.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

که معلومات هم تنظیم شو، آخری آزمون ته وکړئ. په وروستۍ سکرین کې تاسو کولی شئ ټول هغه فیلدا وګورئ چې ورسره به към endpoint پېښه کړي، د دوی اړوند معلومات او هغه فیلدا چې خالی به پېښه کړي.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

د خپل نوی Zap آزموینه وکړئ او باید په بریالیت سره پای ته ورسیږي. که کوم خطا پیښیږي، ټول فیلدا وګورئ او وګورئ چې آیا دوی په سمه توګه پېښه کیږي. ځکه معلومات ډېر دي، ځینې شیان ښای شي چې ولګول نشي.

### ټول endpoint پارامټرو

دلته ټول کال او هغه فیلدونه چې پېښه کیری کولی شي.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // یوه یې "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // یوه یې "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
