---
title: Closte-тагы Күн чыгуучу константаны коюу
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Closte-да маалым (Sunrise) константасын аныктоо

Кээ бир хост провайдерлери `wp-config.php` файлын коопсуздук үчүн бөгөттөй алышат. Бул анын мааниси, Ultimate Multisite'тын домен картасы жана башка функциялар иштөө үчүн зарыл константаларды кошуу үчүн файлды автоматтык түрдө редакциялоого мүмкүн болбошына турат. Closte мындай хосттардын бири.

Бирок, Closte `wp-config.php` файлына константаларды кошуунун коопсуз жолун сунуштайт. Сиз жөн гана төмөнкү кадамдарды аткарышыңыз керек:

## Closte дашбордунда {#on-the-closte-dashboard}

Биринчиден, [Closte эсебиңизге кириңиз](https://app.closte.com/), андан соң Sites менюсуна басыңыз, анан учурда иштеп жаткан сайттагы Dashboard шилтемесине басыңыз:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Эскертүү экрандын сол жагында жаңы меню элементтери менен көрүнөт. Ошол меню аркылуу **Settings** (Жаңылаштыруулар) баракчасына өтүңүз:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Андан кийин, **Settings**-те WP-Config тагын, андан соң ошол вкладкадагы "Additional wp-config.php content" (Кошумча wp-config.php мазмуну) талаасын табыңыз:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite'ты орнотуу контекстинде, сизге ошол талаага `sunrise` константасын кошуу керек. Жөн гана жаңы сап кошуп, төмөнкү сапты чаптаңыз:

define('SUNRISE', true);

Ошол болгону, сиз даярсыз. Ultimate Multisite орнотуучу wizards'ына кайрылып, процессти улантуу үчүн баракчаны жаңылаңыз.
