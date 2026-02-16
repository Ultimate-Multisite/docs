---
title: Automatisk sök och ersätt i webbplatsmallar
sidebar_position: 8
_i18n_hash: ae72baba9155f43f2ca762880ece1e5c
---
# Automatisk sök och ersätt i webbplatsmallar (v2)

_**Denna handledning kräver WP UItimo version 2.x.**_

En av de mest kraftfulla funktionerna i Ultimate Multisite är möjligheten att lägga till egna text-, färg- och urvalsfält i registreringsformuläret. När vi har samlat in den informationen kan vi använda den för att förifylla innehåll i vissa delar av den valda webbplatsmallen. När den nya webbplatsen sedan publiceras ersätter Ultimate Multisite platshållarna med den faktiska informationen som angavs vid registreringen.

Du kan till exempel skapa dina mallwebbplatser med platshållare. Platshållare ska omges av dubbla klammerparenteser - {{placeholder_name}}.

Sedan lägger du helt enkelt till ett matchande registreringsfält för att samla in den informationen.

Din kund kan sedan fylla i det fältet under registreringen.

Ultimate Multisite ersätter därefter automatiskt platshållarna med den information som kunden angett.

## **Att lösa problemet med "mallar fulla av platshållare"**

Allt detta är utmärkt, men vi stöter på ett fult problem: nu är våra webbplatsmallar – som kan besökas av våra kunder – fulla av otydliga platshållare som inte säger så mycket.

För att lösa detta erbjuder vi möjligheten att ange tillfälliga värden för platshållarna. Vi använder sedan dessa värden för att söka och ersätta innehållet på mallwebbplatserna medan dina kunder besöker dem.

Du kommer åt redigeraren för mallplatshållare genom att gå till **Ultimate Multisite > Inställningar > Webbplatser** och sedan klicka på länken Redigera platshållare i sidofältet.

![Länken Redigera platshållare i sidofältet för webbplatsinställningar](/img/config/settings-sites.png)

Det tar dig till innehållsredigeraren för platshållare, där du kan lägga till platshållare och deras respektive innehåll.

![Innehållsredigerare för platshållare med platshållarnamn och värden](/img/config/settings-sites.png)
