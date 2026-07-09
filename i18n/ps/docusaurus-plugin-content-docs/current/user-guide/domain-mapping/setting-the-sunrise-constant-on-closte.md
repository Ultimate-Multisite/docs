---
title: د کلستৰ ওপৰত سنيز کنستان্ট ayarl কৰা
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Closte-ا د Sunrise constant ته true کول喺 Closte کې {#setting-the-sunrise-constant-to-true-on-closte}

کله چې یو څه هاست میزبانहरू (host providers) امنیتي دلته `wp-config.php` کي قفلوي، دا معنی دی چې Ultimate Multisite نمونې خود بخود او د دامنه مپینګ (domain mapping) او نورو خوندونو کار کولو لپاره اړین constantونه اضافه کول نشي. Closte هم einي यस्तो هاست میزبان دی.

خو Closte ته یو لارښوونەوە لري چې په امنیتي ډول `wp-config.php` کې constantونه اضافه کړئ. تاسو باید زیرو ګامونه ورسېږئ:

## د Closte داشبورد کې {#on-the-closte-dashboard}

پله، [د خپل Closte حساب څخه لاگ شئ](https://app.closte.com/)، върху Sites منوټ (menu item) کلیک وکړئ، بیا په هغه سایت باندې د Dashboard لینک ته کلیک وکړئ چې تاسو کار پرې کوئ:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

تاسو به په سکرین چپ اړخ کې د وروستیو منوټونو ډېر جديد آیتمونه وګورئ. له دې منوټه کار، **Settings** (تنظیمات) صفحه ته ورسئ:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

بیا، په **Settings** کې، WP-Config ټاب ته ومئ، او بیا په هغه ټاب کې د "Additional wp-config.php content" (اضافي wp-config.php محتوا) فیلد ته وګورئ:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

کله چې تاسو Ultimate Multisite نصب کوئ، تاسو باید sunrise constant د هغه فیلد کې اضافه کړئ. ساده دی، یو نووي سطر اضافه کړئ او زیر سطر ته paste کړئ. وروسته له دې کار، **Save All** (ټول محفوظ کړئ) د ګ boton باندې کلیک وکړئ.

define('SUNRISE', true);

دا هم راته پوره شو. به خپل Ultimate Multisite نصب کولو wizard ته بیرته وګرځئ او صفحه تازه کړئ ترڅو پروسه ادامه ورکړئ.
