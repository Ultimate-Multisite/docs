---
title: Поставување на константната Sunrise на Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Поставување на константите Sunrise на `wp-config.php` во Closte

Некои хост провајдери блокираат `wp-config.php` поради сигурност. Ова значи дека Ultimate Multisite не може автоматски да го уреди овој датотека за вклучување на потребните константи за мапирање на домените и други функции да работат. Closte е еден таков хост.

Меѓутоа, Closte нуди начин да додадете константи во `wp-config.php` на сигурен начин. Само треба да следите следниве чекори:

## На Closte дашбордот {#on-the-closte-dashboard}

Прво, [најавете се во вашата Closte сметка](https://app.closte.com/), кликнете на менито Sites (Ситovi), а потоа кликнете на линкот Dashboard (Дашборд) на локацијата што ја работите:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Ќе ви се прикажат неколку нови елементи во менюто на левата страна на екранот. Навистина дојдете на страницата **Settings** (Поставки) користејќи тоа меню:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Потоа, во **Settings**, најдете табот WP-Config и потоа полето "Additional wp-config.php content" (Дополнителен содржина за wp-config.php) на тој таб:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Во контекст на инсталирање на Ultimate Multisite, ќе треба да додадете ја констаната `sunrise` во тоа поле. Само додадете нов ред и залепете го следен ред. Потоа, кликнете на копчето **Save All** (Зачувај сите).

define('SUNRISE', true);

Тоа е сè што треба да направите. Вратете се во wizards за инсталирање на Ultimate Multisite и обновите ја страницата за да продолжи со процесот.
