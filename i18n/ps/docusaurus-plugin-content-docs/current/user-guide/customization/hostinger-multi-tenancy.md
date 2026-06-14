---
title: هوستينګر ډیټا مېنټینسي
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 دایره‌ی چند مالکیت (Multi-Tenancy) دیسکشن اضافه کرده چې په دې توګه، د Hostinger د دامینونو سره هم می‌تواند په خپلواک د تَنټینت (tenant) تنظیم کولو Alongside د اوسني Hostinger د دامین مېپینګ (domain-mapping) هم ګډون وکړي.

د دې قابلیت کار وکړئ کله چې تاسو د تَنټینت د دامینونه او ایزوله تَنټینت انفراست structure په Hostinger hPanel کې مدیریت کوئ.

## تنظیم کولو یادا出来ي (Setup notes)

۱. د اصلي Hostinger integration د **Ultimate Multisite > Settings > Host Integrations** تحت تنظیم کړئ.
۲. ډاغه کیدای شي چې Hostinger API token هغه د هدف دامین یا ساب‌دامین مدیریت کړي.
۳. Multi-Tenancy addon فعال کړئ.
۴. تَنټینت راشیندي کولو (publishing) څخه مخکې، تَنټینت ایزوله کولو استراتيجي ته تنظیم وکړئ.
۵. د تولیدي ترافیک په تَنټینت پېژندلولو مخکې، مېګریشن کیدو (migration verification workflow) کار وکړئ.

د Hostinger قابلیت د میزبان طرفي عملیاتو لپاره شریک Hostinger connection کار کوي. DNS باید لاهم دایره ته اشاره کړي چې صحیح Hostinger حساب وي، او hPanel د حساب محدودیت هم applies شي.

## په خاص قابلیتونو کې بدلونونه (Capability-specific changes)

- Sovereign تَنټینتونه کولی شي د میزبان پوهی دامین عملیاتو سره جوړ شي.
- د ډاډ کیدو (grant verification) مخکې، د یوه ماشین د پایټو (database host strings) نرمالیز کیږي.
- Hostinger-managed تَنټینتونه باید هغه د پایټو میزبان ارزښت کار کړي چې په hPanel کې ښودل شو، له دې پرته چې WordPress runtime لوکال پرېښودلو ته اړتیا ولري.
- SSO (Single Sign-On) لیدنې د تَنټینت دامین د Hostinger-managed تَنټینت سره د حلول کیدو باندې reliant دي.

## د Hostinger تَنټینتونو په حل کېدو کې ستونمو حل (Troubleshooting Hostinger tenants)

- که تَنټینت نصب کول ناکام وي، تأیید کړئ چې دامین پیل دی د Hostinger حساب سره تړلی.
- که د پایټو کیدایي کار ناکامه وي، تَنټینت د DB username، DB name او host binding له hPanel سره پرتله وکړئ.
- که **Visit (SSO)** ناکام وي، تأیید کړئ چې DNS او SSL د تَنټینت دامین لپاره فعال دي.
- که teardown د میزبانو منابع پاتې کړي، د بیکآپونو کیدو وروسته له hPanel څخه هر ډول باقی پایټو، کارونواني (users) یا فولډرونه منوچ کړئ.
