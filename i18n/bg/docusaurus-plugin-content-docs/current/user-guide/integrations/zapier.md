---
title: Интеграция с Zapier
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# Интегриране на Ultimate Multisite с Zapier

В една от статиите обсъдихме [Webhooks](webhooks.md) и как те могат да бъдат използвани за интеграция с външни (3rd party) приложения.

Използването на webhooks е малко по-сложно, тъй като изисква напреднали познания по програмиране и обработка на payloads. Използването на **Zapier** е начин да заобиколите това.

Zapier има интеграция с над 5000+ приложения, което улеснява комуникацията между различни системи.

Можете да създадете **Triggers** (тригери), които се активират, когато възникнат събития в мрежата ви (например се създава потребителски профил и се активира събитието `account_create`), или да генерирате **Actions** (действия) в мрежата си, които реагират на външни събития (например създаване на ново членство в мрежата ви Ultimate Multisite).

Това е възможно, защото **Ultimate Multisite Zapier's triggers** и actions работят с [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Как да започнете

Първо потърсете Ultimate Multisite в списъка с приложения на Zapier. Алтернативно, можете да кликнете върху [това линк](https://zapier.com/apps/wp-ultimo/integrations).

Отидете в своя dashboard и натиснете бутона **+ Create Zap** в лявата странична лента, за да настроите нов Zap.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Ще бъдете пренасочени към страницата за създаване на Zap.

В полето за търсене въведете "wp ultimo". Кликнете, за да изберете опцията **Beta**.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

След като изберете нашето приложение, изберете наличното събитие: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Сега трябва да дадете достъп на Zapier до **вашата мрежа**. Кликването върху **Sign in** ще отвори ново прозорец, изискващо **API credentials**.

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

Отидете в панела за управление на мрежата си и навигирайте до **Ultimate Multisite > Settings** > **API & Webhooks**, след което потърсете секцията API Settings.

Изберете опцията **Enable API**, тъй като тя е необходима за работа на тази връзка.

![API Settings with Enable API option in Ultimate Multisite](/img/admin/webhooks-list.png)

Използвайте иконата **Copy to Clipboard** в полетата API Key и API Secret и поставете тези стойности на екрана за интеграцията.

В полето URL поставете пълния URL на мрежата си, включително протокола (HTTP или HTTPS).

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

Кликнете върху бутона **Yes, Continue**, за да преминете към следващата стъпка. Ако всичко работи, трябва да бъдете посрещнати от вашия нов свързан акаунт! Кликнете върху **Continue**, за да създадете нов тригер.

## Как да създадете нов Trigger

Сега щом вашият акаунт е свързан, можете да видите наличните събития. За този урок нека изберем събитието **payment_received**.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

След като събитието е избрано и кликнете върху **continue**, ще се появи **test step** (тестова стъпка).

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

На тази стъпка Zapier ще тества дали вашият Zap може да **извлече специфичния payload за това събитие**. В бъдещи събития от същия тип ще бъде изпратена информация със същата структура.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

В нашия урок тестът беше **completed successfully** и върна примерна информация на payload. Тази примерна информация ще ни помогне при създаването на действия. Вашият тригер вече е създаден и готов за свързване с други приложения.

## Как да създадете Actions

Actions използват информация от други тригери, за да създават нови записи в вашата мрежа.

При **creating an action step** ще изберете **Beta** на Ultimate Multisite и опцията **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

В следващата стъпка или ще създадете вашата автентификация, както направихме в **How to start**, или ще изберете вече създадена автентификация. В този урок ще изберем същата автентификация, създадена по-рано.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Настройване на Action

Това е **главната стъпка на действието** и тук нещата са малко различни. Първата информация, която ще изберете, е **Item**. Item е **моделът на информация** на вашата мрежа, като **Customers, Payments, Sites, Emails** и други.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Когато избирате item, формата ще **се пренареди, за да покаже необходимите и необязателните полета** за избрания item.

Например, когато изберете item **Customer**, полетата на формата ще покажат всичко, което е необходимо за попълване, за да се създаде нов Customer в мрежата.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

След като попълните всички полета, означени като **required**, и кликнете върху continue, последният екран ще покаже попълнените полета и полетата, които са останали празни.

![Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

Веднага щом тестът приключи и бъде успешен, вашето действие е конфигурирано. Също важно е да проверите в мрежата си дали item-ът е създаден с теста на вашето действие.
