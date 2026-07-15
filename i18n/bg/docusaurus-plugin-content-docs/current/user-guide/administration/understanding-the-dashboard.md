---
title: Разбиране на Панела
sidebar_position: 7
_i18n_hash: 4869a2f03eb529c49c821a22eb6b9647
---
# Разбиране на Dashboard-а на Ultimate Multisite

Преди да се потопим в по-напреднали настройки и оперативни аспекти на Ultimate Multisite, нека първо погледнем на dashboard-а.

Подобно на много WordPress плагини, Ultimate Multisite създава меню на ниво мрежа (network-level) с заглавие **Ultimate Multisite** и няколко подменюта под него.

## Виджета на Dashboard-а на Мрежата {#network-dashboard-widgets}

Ultimate Multisite добавя няколко полезни виджета към dashboard-а на мрежата. Този dashboard се намира, като отидете на **My Sites → Network Admin → Dashboard**. Виджетата са създадени, за да осигурят лесен достъп до информацията и често срещаните операции за администратора на мрежата.

![Network Dashboard with Ultimate Multisite widgets](/img/admin/network-dashboard-full.png)

### Първи стъпки {#first-steps}

![First Steps widget](/img/admin/network-dashboard-first-steps.png)

Този виджет се появява при първоначална инсталация на Ultimate Multisite и напомня на администратора на мрежата да завърши допълнителни задачи, като например конфигуриране на метод за плащане и създаване на тестова заявка.

### Обобщение {#summary}

![Summary widget](/img/admin/network-dashboard-summary.png)

Виджетът „Обобщение“ докладва за броя на регистрациите и приходите им за деня. MRR (Monthly Recurring Revenue) показва прогнозна обща сума от клиенти с членски карти, генериращи приходи.

### Поток на дейностите {#activity-stream}

![Activity Stream widget](/img/admin/network-dashboard-activity-stream.png)

Този виджет докладва за събитията в рамките на Ultimate Multisite. Събитията включват регистрации, отказвания, създаване и изтриване на сайтове и други дейности.

Моля, вижте секцията „Събития“ в документацията за по-подробно описание.

### В момента {#right-now}

![Right Now widget](/img/admin/network-dashboard-right-now.png)

Този полезен виджет показва кратко резюме на потребителите и сайтовете в мрежата. Удобните препратки в горната част позволяват достъп с едно кликване за създаване на нови сайтове или потребители.

### Новини и дискусии {#news-and-discussions}

![News and Discussions widget](/img/admin/network-dashboard-news.png)

Този виджет изтегля и показва най-новите новини от Ultimate Multisite. Следете този виджет за информация относно актуализации, критични бъгове и корекции на сигурността.

## Dashboard на Ultimate Multisite {#ultimate-multisite-dashboard}

Докато dashboard-ът на ниво мрежа представя цялостна информация за мрежата, dashboard-ът на Ultimate Multisite (разположен на най-високо ниво в менюто Ultimate Multisite) представя информация за самия услуга.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

### Растеж на Месечния Постоянен Приход (MRR) {#monthly-recurring-revenue-growth}

Графиката за MRR (Monthly Recurring Revenue) показва месечно разбиване на приходите за 12-месечен календарен период.

![MRR Growth chart](/img/admin/um-dashboard-mrr.png)

Новите приходи са отбелязани с синьо, докато отказванията са показани с червено.

### Поддръжка на диапазон от дати {#date-range-support}

В зависимост от броя на клиентите и дейностите, статистиката може да стане претоварваща. Поддръжката на диапазон от дати, вградена в dashboard-а, позволява на администратора на мрежата да се фокусира само върху необходимата информация и времеви период.

![Date range selector and stats](/img/admin/um-dashboard-date-range.png)

Диапазонът от дати управлява периода на информацията, показана от виджетите директно под него, включително приходи, нови членски карти, регистрации по държави, регистрации по формуляр и най-посещавани сайтове.

![Dashboard statistics widgets](/img/admin/um-dashboard-stats.png)

:::tip
За да работи виджетът „Най-посещавани сайтове“, активирайте броенето на посещенията в **Ultimate Multisite → Settings → Sites → Enable Visits Limitation and Counting**.
:::
