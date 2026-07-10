---
title: Падрабязнае разуменне Панелі кіравання
sidebar_position: 7
_i18n_hash: 4869a2f03eb529c49c821a22eb6b9647
---
# Зразумеласць панэлі Ultimate Multisite {#understanding-the-ultimate-multisite-dashboard}

Перш чым занурынне ў больш прасунутыя канфігурацыйныя магчымасці і аперацыйныя аспекты Ultimate Multisite, прайдзімся па панэлі.

Як і многія плагіны для WordPress, Ultimate Multisite стварае ўменю на ўзроўні сеткі з назвай **Ultimate Multisite**, пад якім знаходзіцца некалькі пад-папукцый.

## Widgets панэлі сеткі {#network-dashboard-widgets}

Ultimate Multisite дадае некалькі карысных widgets на панэль сеткі. Гэтую панэль можна знайсці, навігуючы па шляху **My Sites → Network Admin → Dashboard**. Widgets прызначаны для таго, каб забяспечыць лёгкі доступ да інфармацыі і агульных аперацый для адміністратара сеткі.

![Network Dashboard with Ultimate Multisite widgets](/img/admin/network-dashboard-full.png)

### Першыя крокі {#first-steps}

![First Steps widget](/img/admin/network-dashboard-first-steps.png)

Гэты widget з'яўляецца на свежа ўсталяваным Ultimate Multisite і нагадвае адміністратара сеткі пра выкананне дадатковых задач, такіх як канфігурацыя спосабу аплаты і стварэнне тэставай канты.

### Агляд {#summary}

![Summary widget](/img/admin/network-dashboard-summary.png)

Widget "Агляд" паказвае колькасць рэгістрацыі і іх даход на дзень. MRR (Monthly Recurring Revenue) паказвае прагнаваны загальны даход па ўсіх кліентах, якія маюць падпіску, генератуюшую даход.

### Паточная актыўнасць {#activity-stream}

![Activity Stream widget](/img/admin/network-dashboard-activity-stream.png)

Гэты widget паказвае падбытыя па ўсім Ultimate Multisite. Падбыты ўключаюць рэгістрацыі, адмены, стварэнне і выдаленне сайтаў, а таксама іншую актыўнасць.

Калі ласка, накіравацца ў раздзел "Events" дакументацыі для больш дэталўнага апісання.

### Зараз {#right-now}

![Right Now widget](/img/admin/network-dashboard-right-now.png)

Гэты ўніверсальны widget паказвае кароткі агляд карыстальнікаў і сайтаў у сетцы. У зручных ярлыках у верхняй частцы магчыма адкрыць новыя сайты або карыстальнікаў адным клікам.

### Навіны і абмеркаванні {#news-and-discussions}

![News and Discussions widget](/img/admin/network-dashboard-news.png)

Гэты widget забірае і паказвае найлепшыя навіны Ultimate Multisite. Слідкіце за гэтым widget-ым, каб мець інфармацыю пра абнаўленні, крытычныя памылкі і выпраўленні бяспекі.

## Панэль Ultimate Multisite {#ultimate-multisite-dashboard}

Калі панэль сеткі прадастаўляе загальны агляд інфармацыі пра сетку, панэль Ultimate Multisite (ад знаходжаецца на верхнім узроўні ўменю Ultimate Multisite) прадастаўляе інфармацыю пра саму паслугу.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

### Паростанне росту MRR {#monthly-recurring-revenue-growth}

Дяграма MRR (Monthly Recurring Revenue) паказвае штомесячны разбік даходу за 12-месячны кандыцыйны перыяд.

![MRR Growth chart](/img/admin/um-dashboard-mrr.png)

Новы даход адследуецца ў блакітным колеры, а адмены — у чырвоным.

### Падтрымка дыяпазону дат {#date-range-support}

Залежна ад колькасці кліентаў і актыўнасці, статыстыка можа стаць пераважнай. Падтрымка дыяпазону дат, забітая ў панэль, дазваляе адміністратар🧶 сеткі сканцэнтравацца толькі на той інфармацыі і часовым перыядзе, якія неабходныя.

![Date range selector and stats](/img/admin/um-dashboard-date-range.png)

Дыяпазон дат вызначае перыяд інфармацыі, якая паказваецца widgets, якія знаходзяцца непасрэдна ніжэй, у тым ліку даход, новыя падпіскі, рэгістрацыі па краінах, рэгістрацыі па фарма і найбольш наведваныя сайты.

![Dashboard statistics widgets](/img/admin/um-dashboard-stats.png)

:::tip
Каб widget **Most Visited Sites** працаваў, актывуйце лічэнне наведванняў у **Ultimate Multisite → Settings → Sites → Enable Visits Limitation and Counting**.
:::
