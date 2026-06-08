---
title: Установяване на константата Sunrise в Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Задаване на константата Sunrise на true в Closte

Някои хостинг доставчици заключват файла `wp-config.php` по причини от сигурност. Това означава, че Ultimate Multisite не може автоматично да редактира файла, за да добави необходимите константи за работа на мапирането на домейни и други функции. Closte е такъв хостинг.

Въпреки това, Closte предлага начин за добавяне на константи към `wp-config.php` по безопасен начин. Просто трябва да следвате стъпките по-долу:

## В панела (dashboard) на Closte

Първо, [log into your Closte account](https://app.closte.com/), кликнете върху менюто Sites, след което кликнете върху връзката Dashboard на сайта, с който работите:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Ще видите набор от нови елементи в менюто от лявата страна на екрана. Навигирайте до страницата **Settings**, използвайки това меню:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

След това, в **Settings**, намерете таба WP-Config, а след това полето „Additional wp-config.php content“ в този таб:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

В контекста на инсталирането на Ultimate Multisite, трябва да добавите константата sunrise в това поле. Просто добавете нов ред и поставете следния ред. След това натиснете бутона **Save All**.

define('SUNRISE', true);

Това е всичко, сте готови. Върнете се към инсталационния асистент (wizard) на Ultimate Multisite и презаредете страницата, за да продължите процеса.
