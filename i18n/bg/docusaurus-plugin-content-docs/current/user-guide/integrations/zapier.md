---
title: Интеграция със Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Интегриране на Ultimate Multisite със Zapier {#integrating-ultimate-multisite-with-zapier}

В една от статиите обсъдихме [Webhooks](webhooks.md) и как могат да се използват за интеграция с приложения на трети страни.

Използването на webhooks е малко сложно, тъй като изисква напреднали познания по програмиране и улавяне на payloads. Използването на **Zapier** е начин да заобиколите това.

Zapier има интеграция с над 5000+ приложения, което улеснява комуникацията между различни приложения.

Можете да създавате **Triggers**, които ще се задействат, когато се случат събития във вашата мрежа (напр. създава се account и се задейства събитието account_create), или да генерирате **Actions** във вашата мрежа в реакция на външни събития (напр. създаване на ново account membership във вашата Ultimate Multisite мрежа).

Това е възможно, защото **triggers на Ultimate Multisite Zapier** и actions се задвижват от [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Как да започнете {#how-to-start}

Първо потърсете Ultimate Multisite в списъка с приложения на Zapier. Като алтернатива можете да кликнете върху [тази връзка](https://zapier.com/apps/wp-ultimo/integrations).

Отидете в своя dashboard и натиснете бутона **+** **Създаване на Zap** в лявата странична лента, за да настроите нов Zap.

![Dashboard на Zapier с бутон Създаване на Zap](/img/admin/webhooks-list.png)

Ще бъдете пренасочени към страницата за създаване на Zap.

В полето за търсене въведете "wp ultimo". Кликнете, за да изберете опцията за версия **Beta**.

![Търсене на WP Ultimo в списъка с приложения на Zapier](/img/admin/webhooks-list.png)

След като изберете нашето приложение, изберете наличното събитие: **Ново Ultimate Multisite събитие**.

![Избиране на trigger New Ultimate Multisite Event](/img/admin/webhooks-list.png)

Сега трябва да дадем на Zapier достъп до **вашата мрежа**. Кликването върху **Sign in** ще отвори нов прозорец, който изисква **API credentials**.

![Подкана на Zapier Sign in за API credentials](/img/admin/webhooks-list.png)

Отидете в административния панел на вашата мрежа и навигирайте до **Ultimate Multisite > Settings** > **API & Webhooks** и потърсете секцията API Settings.

Изберете опцията **Enable API**, тъй като е необходима, за да работи тази връзка.

![Настройки API and Webhooks с опции API Settings и Enable API](/img/admin/settings-api-webhooks.png)

Използвайте иконата **Copy to Clipboard** в полетата API Key и API Secret и поставете тези стойности на екрана за интеграция.

В полето URL поставете пълния URL на вашата мрежа, включително протокола (HTTP или HTTPS).

![Екран за интеграция на Zapier с полета API Key, Secret и URL](/img/admin/webhooks-list.png)

Кликнете върху бутона **Yes, Continue**, за да преминете към следващата стъпка. Ако всичко работи, трябва да бъдете посрещнати от вашия нов свързан account! Кликнете върху **Continue**, за да създадете нов trigger.

## Как да създадете нов Trigger {#how-to-create-a-new-trigger}

Сега, когато вашият account е свързан, можете да видите наличните събития. Нека изберем събитието **payment_received** за този урок.

![Избиране на събитие payment_received в trigger на Zapier](/img/admin/webhooks-list.png)

След като събитието бъде избрано и кликнете върху **continue**, ще се появи **тестова стъпка**.

![Тестова стъпка на Zapier за trigger](/img/admin/webhooks-list.png)

На този етап Zapier ще тества дали вашият Zap може да **извлече конкретния payload за това събитие**. При бъдещи събития от същия тип ще бъде изпращана информация със същата структура.

![Тестът на trigger в Zapier е завършен успешно с payload](/img/admin/webhooks-list.png)

В нашия урок тестът беше **завършен успешно** и върна примерната информация от payload. Тази примерна информация ще бъде полезна, за да ни насочва при създаването на actions. Вашият trigger вече е създаден и готов да бъде свързан с други приложения.

## Как да създавате Actions {#how-to-create-actions}

Actions използват информация от други triggers, за да създават нови записи във вашата мрежа.

В **стъпката за създаване на action** ще изберете Ultimate Multisite **Beta** и опцията **Create Items on Ultimate Multisite**.

![Създаване на action с Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

В следващата стъпка или ще създадете своето удостоверяване, точно както направихме в **Как да започнете**, или ще изберете създадено удостоверяване. В този урок ще изберем същото удостоверяване, създадено по-рано.

![Избиране на удостоверяване за action в Zapier](/img/admin/webhooks-list.png)

### Настройване на Action {#setting-up-the-action}

Това е **основната стъпка на action** и тук нещата са малко по-различни. Първата информация, която ще изберете, е **Item**. Item е **информационният модел** на вашата мрежа, като **Customers, Payments, Sites, Emails** и други.

![Избиране на тип Item за action в Zapier](/img/admin/webhooks-list.png)

Когато изберете item, формулярът ще **се пренареди, за да покаже задължителните и незадължителните полета** за избрания item.

Например, когато изберете item **Customer**, полетата на формуляра ще покажат всичко необходимо за попълване, за да се създаде нов Customer в мрежата.

![Полета на item Customer в настройката на action в Zapier](/img/admin/webhooks-list.png)

След като попълните всички полета, маркирани като **задължителни**, и кликнете върху continue, последният екран ще ви покаже попълнените полета и полетата, които са оставени непопълнени.

![Тест на action в Zapier, показващ попълнени и непопълнени полета](/img/admin/webhooks-list.png)

Веднага щом тестът ви завърши успешно, вашият action е конфигуриран. Също така е важно да проверите във вашата мрежа дали item е създаден с теста на вашия action.
