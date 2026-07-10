---
title: Разбирање на табдајлот
sidebar_position: 7
_i18n_hash: 4869a2f03eb529c49c821a22eb6b9647
---
# Разбирање на Ultimate Multisite Dashboard-а {#understanding-the-ultimate-multisite-dashboard}

Прежде што се потрошиме во покомплексни опции за конфигурација и оперативни аспекти на Ultimate Multisite, хајде да погледнеме како изгледа dashboard-от.

Како многу WordPress plugin-и, Ultimate Multisite создава влез во меню на ниво на мрежа со наслов **Ultimate Multisite** со неколку подменю влезници подолу.

## Виџети за Мрежен Dashboard {#network-dashboard-widgets}

Ultimate Multisite вметнува неколку корисни виџети во мрежен dashboard. Овој dashboard се наоѓа пребарувајќи: **My Sites → Network Admin → Dashboard**. Виџетите соодветни за да овозможат лесен пристап до информации и чести операции за администраторот на мрежата.

![Network Dashboard with Ultimate Multisite widgets](/img/admin/network-dashboard-full.png)

### Први Чекори {#first-steps}

![First Steps widget](/img/admin/network-dashboard-first-steps.png)

Овој виџет се појавува при свеж инсталација на Ultimate Multisite и потсетува администраторот на мрежата да заврши дополните задачи како конфигурација на метод за плаќање и создавање тестови акаунт.

### Резиме {#summary}

![Summary widget](/img/admin/network-dashboard-summary.png)

Виџето Резиме ја пријавува бројот на регистрациите и нивата приходи за денот. MRR (Monthly Recurring Revenue) покажува прогнозиран оброк кај клиентите со членства кои генерираат приходи.

### Поток на Активности {#activity-stream}

![Activity Stream widget](/img/admin/network-dashboard-activity-stream.png)

Овој виџет ја пријавува активностите во Ultimate Multisite. Активностите вклучуваат регистрации, откази, креирање и бришење на сайтови и други активности.

За подетално описание, ве молам се викајте во секцијата за Евенти (Events) во документацијата.

### Секогаш {#right-now}

![Right Now widget](/img/admin/network-dashboard-right-now.png)

Ова утилетна виџет прикажува краток резиме на корисниците и сајтовите во мрежата. Брзи шпринцови на врвот овозможуваат едноклик пристап за создавање нови сајтови или корисници.

### Невости и Дискусии {#news-and-discussions}

![News and Discussions widget](/img/admin/network-dashboard-news.png)

Ова виџет презема и прикажува најнови вести од Ultimate Multisite. Следете го овој виџет за информации за ажурирања, критични буги и сигурност поправки.

## Ultimate Multisite Dashboard {#ultimate-multisite-dashboard}

Каде како мрежаски дашборд нуди целосна информации за цела мрежата, Ultimate Multisite дашбордот (локализиран на врвот на менюто на Ultimate Multisite) нуди информации за услугата.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

### Растој на месечни редовни приходи (Monthly Recurring Revenue Growth) {#monthly-recurring-revenue-growth}

Графикот за MRR (Месечни редовни приходи) прикажува месечен поделник на приходите за 12-месечен календарски период.

![MRR Growth chart](/img/admin/um-dashboard-mrr.png)

Нови приходи се пратеат во сино, додека откази се одразу претставуваат во црвено.

### Поддршка за опсег на датуми {#date-range-support}

Во зависност од број клиентите и активностите, статистики можат да станат премногу. Поддршката за опсег на датуми вградена во дашбордот овозможува администраторот на мрежата да се фокусира само на информациите и временскиот период што му е потребен.

![Date range selector and stats](/img/admin/um-dashboard-date-range.png)

Опсегот на датуми регулира периодот на информациите што ги прикажува виџетите подолу, вклучувајќи приходи, нови членства, регистрации по земји, регистрации по форми и најпосетени сајтови.

![Dashboard statistics widgets](/img/admin/um-dashboard-stats.png)

:::tip
За да работи виџето **Најпосетени Сајтови**, овозможете пребројување на посети во **Ultimate Multisite → Settings → Sites → Enable Visits Limitation and Counting**.
:::
