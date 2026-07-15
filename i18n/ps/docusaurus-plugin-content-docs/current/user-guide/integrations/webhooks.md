---
title: وب‌هوک‌ها
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Webhooks-رېښته (v2)

_**تنبيه: یاد کړئ چې دا خصه یا مقاله د تخصص کارکوونکو لپاره ده.**_

**Webhook** هغه وسیله ده چې یو اپلیکیشن یا نرم‌افزار لکه Ultimate Multisite نورو اپلیکیشنونو ته ریل-ټاین معلومات ورکول لپاره کار کوي. webhook په هر وخت کې داده یا payload نورو اپلیکیشنونو ته پخسوي، دا د معنی دی چې تاسو **دทันدې داده ترلاسه کوئ.**

دا هغه صورتحال ګټور دی که تاسو باید Ultimate Multisite څخه ځینې داده نورو CRM یا سیسټمونه ته منتقل کړئ چې هر وخت有个نۍ پیښه (event) ترڅنګ. د مثال په توګه، که تاسو هر وخت چې یو نوی کارونکي حساب جوړوي، باید کارونکي نوم او ایمیل همد یو لیست ته پخسئ.

## webhook څنګه جوړ کړئ {#how-to-create-a-webhook}

که تاسو غواړئ webhook جوړ کړئ، خپل network admin dashboard ته لاړ شئ. **Ultimate Multisite > Webhooks > Add New Webhook** باندې کلیک وکړئ.

![Empty Webhooks list page with Add New Webhook button](/img/admin/webhooks-list-empty.png)

د بیا، تاسو کولی شئ webhook تنظیمات راوړئ:

![Add New Webhook form with Name, Event, and URL fields](/img/admin/webhook-add-modal.png)

کله چې تاسو یو نوی webhook جوړ کوئ، ستاسو څخه معلومات لکه **Name (نوم)، URL،** او **Event (پیښه)** غوښتنه کیږي. تاسو کولی شئ د خپل webhook لپاره هر نوم کارولو. تر ټولو مهم لاړل URL او Event دي.

![Webhook edit interface showing the URL field and payload preview](/img/admin/webhook-url-field.png)

URL هغه **endpoint یا مقصد** ده چې Ultimate Multisite له لارې **payload یا داده** پخسوي. دا هغه اپلیکیشن دی چې داده ترلاسه کړي.

Zapier هغه ډیر عام حل دی چې کارونکي د 3rd party اپلیکیشنونو سره همکارۍ (integration) په آساني کولو لپاره کار کوي. بدون یو پلتفارم لکه Zapier، تاسو باید manuall custom function جوړ کړئ چې داده وټاکه او پردازش کړي. د **Ultimate Multisite webhook څنګه له لارې Zapier کارول** په اړه دا مقاله وګورئ.

په دې مقاله کې، موږ به د webhook کار کولو بنسټ مفهوم او په Ultimate Multisite کې موجود اغواしておくو (events) وګورو. موږ به یو درېمه پته سایت چې [requestbin.com](https://requestbin.com/) و کار کړو. دا سایت زموږ اجازه ورکوي چې یو endpoint جوړ کړو او payload ترلاسه کړو پرته له کوم 코딩 کولو. _**مننه: دا یوازې ښیي چې داده ترلاسه شوې ده.**_ هیڅ ډول پردازش یا په payload باندې کوم ډول عمل نه کیږي.

د [requestbin.com](https://requestbin.com/) ته لاړ شئ او Create Request Bin کلیک وکړئ.

د دې د ګډ按钮 کلیک کولو وروسته، دا تاسو ته پوښتنه وکړي چې که تاسو پہلے څخه اکاونټ لرئ نو لاگ in کړئ او ورسره ثبت Einst. که تاسو پہلے څخه اکاونټ لرئ، دا تاسو مستقیم تر د دوی داشبورد ته لارښوونه کوي. په دویको داشبورد کې، تاسو به په چټکۍ سره هغه endpoint یا URL وګورئ چې تاسو یې خپل Ultimate Multisite webhook جوړولو لپاره کار کولی شئ.

URL kopي کړئ او بیرته Ultimate Multisite ته لاړ شئ. Endpoint د URL خان کې ځای پر ځای کړئ او له dropdown څخه یو event غوره کړئ. په دې مثال کې، موږ به **Payment Received** انتخاب کړو.

دا event هر وخت trigger کیږي کله چې یوه کاربری پیسې ورکوي. ټول موجود events، دویको توضیحات او payloads د صفحې په منځ کې ښکاره دي. webhook ساتلو لپاره **Add New Webhook** کلیک وکړئ.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

مو کار کولی شو چې یو test event به تر endpoint ته پېژندل کړو ترڅو وګورئ چې که آیا موږ جوړ شوی webhook کار کوي او نه. موږ دا په هغه webhook د زیرو کې **Send Test Event** کلیک کولو وسیله لري.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

دا یو Confirmation window ښیي چې test موفقیت آمیز و.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

له د _Requestbin_ سایت ته ورسېږو، به وګورئ چې payload ترلاسه شوی دی او په کې یو څه آزمویني данни شامل دي.

دا اساس اصول ده چې webhook او endpoints څنګه کار کوي. که تاسو غواړئ چې یو ځانګړی endpoint جوړ کړئ، نو تاسو باید یو ځانګړی function جوړ کړئ ترڅو د Ultimate Multisite څخه ترلاسه شوي دادهونه پردازش کړي.
