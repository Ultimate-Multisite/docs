---
title: Zrozumenie panela
sidebar_position: 7
_i18n_hash: 4869a2f03eb529c49c821a22eb6b9647
---
# Zrozumenie dashboardu Ultimate Multisite

Pred tým, aby sme sa ponočili do pokročilejších možností konfigurácie a operačných aspektov Ultimate Multisite, pozrime sa na dashboard.

Ako mnoho iných pluginov WordPress vytvára Ultimate Multisite menu položku na úrovni siete s názvom **Ultimate Multisite** s niekoľkými podmenu položkami pod ňou.

## Widgety sieťového dashboardu (Network Dashboard Widgets) {#network-dashboard-widgets}

Ultimate Multisite pridáva niekoľko užitočných widgetov do sieťového dashboardu. Tento dashboard nájdete, keď sa navinete na **My Sites → Network Admin → Dashboard**. Widgety sú navrhnuté poskytnúť jednoduchý prístup k informáciám a bežným operáciám pre administrátora siete.

![Network Dashboard with Ultimate Multisite widgets](/img/admin/network-dashboard-full.png)

### Prvky kroku (First Steps) {#first-steps}

![First Steps widget](/img/admin/network-dashboard-first-steps.png)

Tento widget sa zobrazí pri novom inštalácii Ultimate Multisite a upozorní administrátora siete na dokončenie ďalších úloh, ako je konfigurácia platobného metódy a vytvorenie testového účtu.

### Zhrnutie (Summary) {#summary}

![Summary widget](/img/admin/network-dashboard-summary.png)

Widget Zhrnutie uvádza počet registrácií a ich príjmy za deň. MRR (Monthly Recurring Revenue – mesačný opakujúci sa príjem) ukazuje predpovedaný celkový príjem pre zákazníkov s príjmovými členstvami.

### Stretka aktivity (Activity Stream) {#activity-stream}

![Activity Stream widget](/img/admin/network-dashboard-activity-stream.png)

Tento widget uvádza udalosti v rámci Ultimate Multisite. Udalosti zahŕňajú registráции, zrušenia, vytváranie sítí, odstránenie a iné aktivity.

Pre podrobnejšie popisy si prosím pozrite sekciu Súvisi (Events) v dokumentácii.

### Teraz (Right Now) {#right-now}

![Right Now widget](/img/admin/network-dashboard-right-now.png)

Tento utility widget zobrazuje krátke zhrnutie používateľov a sítí v sieti. U spodnej časti sú pomocné skratky na vrchu, ktoré umožňujú prístup k vytvoreniu nových sítí alebo používateľov kliknutím.

### Novinky a diskusie {#news-and-discussions}

![Widget Novinky a diskusie](/img/admin/network-dashboard-news.png)

Tento widget načítava a zobrazuje najnovšie novinky z Ultimate Multisite. Občas si na tento widget pozrite, aby ste získali informácie o aktualizáciách, kritických chybách a bezpečnostných opravách.

## Dashboard Ultimate Multisite {#ultimate-multisite-dashboard}

Ak je dashboard úrovne siete prezentovaný v celkovom zhrnutí siete, dashboard Ultimate Multisite (ktorý sa nachádza na hornom úrovni menu Ultimate Multisite) prezentuje informácie o službe.

![Dashboard Ultimate Multisite](/img/admin/um-dashboard-top.png)

### Rast mesačného opakujúce sa príjmu (MRR) {#monthly-recurring-revenue-growth}

Graf MRR zobrazuje mesačnú rozdelivku príjmov počas 12mesačného kalendárneho obdobia.

![Graf rastu MRR](/img/admin/um-dashboard-mrr.png)

Nové príjmy sú sledované v modrej farbe, zrušenia sa odrážajú v červenej.

### Podpora rozsahu dátumu {#date-range-support}

V závislosti od počtu zákazníkov a aktivity môžu štatistiky stať preťaženými. Podpora rozsahu dátumu integrovana do dashboardu umožňuje administrátorovi siete sústrediť sa len na informácie a časový period, ktoré sú potrebné.

![Vyberateľ rozsahu dátumu a štatistiky](/img/admin/um-dashboard-date-range.png)

Rozsah dátumu ovplyvňuje obdobie informácií zobrazených widgetmi pod ním, vrátane príjmov, nových členstiev, registráci podľa krajín, registráci podľa formulára a najviac navštívených sítí.

![Štatistikové widgety dashboardu](/img/admin/um-dashboard-stats.png)

:::tip
Aby bol widget **Najviacnavští súkoly** funkčný, vклюčte počítanie návštev na **Ultimate Multisite → Settings → Sites → Enable Visits Limitation and Counting**.
:::
