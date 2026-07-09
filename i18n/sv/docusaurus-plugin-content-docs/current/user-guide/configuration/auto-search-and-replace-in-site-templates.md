---
title: Automatisk sökning och ersättning i webbplatsmallar
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Automatisk sökning och ersättning i webbplatsmallar (v2)

_**Den här handledningen kräver WP UItimo version 2.x.**_

En av de mest kraftfulla funktionerna i Ultimate Multisite är möjligheten att lägga till godtyckliga text-, färg- och valfält i registreringsformuläret. När vi har fångat in dessa data kan vi använda dem för att förifylla innehållet i vissa delar av den valda webbplatsmallen. När den nya webbplatsen sedan publiceras kommer Ultimate Multisite att ersätta platshållarna med den faktiska information som angavs under registreringen.

Till exempel kan du skapa dina mallwebbplatser med platshållare. Platshållare ska läggas till omgivna av dubbla klammerparenteser - {{placeholder_name}}.

Sedan kan du helt enkelt lägga till ett matchande registreringsfält för att fånga in dessa data

Din kund kommer sedan att kunna fylla i det fältet under registreringen.

Ultimate Multisite kommer sedan automatiskt att ersätta platshållarna med de data som kunden har angett.

## **Lösa problemet med "mall full av platshållare"**

Allt detta är bra, men vi stöter på ett fult problem: nu är våra webbplatsmallar - som kan besökas av våra kunder - fulla av fula platshållare som inte säger särskilt mycket.

För att lösa det erbjuder vi möjligheten att ange låtsasvärden för platshållarna, och vi använder dessa värden för att söka och ersätta deras innehåll på mallwebbplatserna medan dina kunder besöker dem.

Du kan komma åt redigeraren för mallplatshållare genom att gå till **Ultimate Multisite > Settings > Sites**, bläddra till området Site Template Options och sedan klicka på länken **Edit Placeholders**.

![Området Site Template Options på inställningssidan Sites](/img/config/settings-sites-templates-section.png)

Det tar dig till platshållarnas innehållsredigerare, där du kan lägga till platshållare och deras respektive innehåll.

![Ingångspunkt för redigeraren för mallplatshållare](/img/config/settings-sites-templates-section.png)
