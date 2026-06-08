---
title: Integració Zapier
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# Integració d'Ultimate Multisite amb Zapier

En un dels articles, vam parlar de [Webhooks](webhooks.md) i com es poden utilitzar per integrar amb aplicacions de tercers.

Utilitzar webhooks és una mica complicat perquè requereix coneixements avançats en codi i capturar payloads. Utilitzar **Zapier** és una manera d'evitar això.

Zapier té integració amb més de 5000+ apps, cosa que facilita la comunicació entre diferents aplicacions.

Podràs crear **Triggers** que es activaran quan es produeixin esdevenços en la teva xarxa (per exemple, una compte es crea i activa l'esdevenç `account_create`) o generar **Actions** en la teva xarxa reaccions a esdevenços externals (per exemple, crear una nova membresía de compte en la teva xarxa Ultimate Multisite).

 Això és possible perquè els **triggers i actions de Zapier d'Ultimate Multisite** estan impulsats per l' [API REST](https://developer.ultimatemultisite.com/api/docs/).

## Com començar

Primer, cerca Ultimate Multisite a la llista d'apps de Zapier. Alternativament, pots fer clic en [aquest enlace](https://zapier.com/apps/wp-ultimo/integrations).

Vés al teu dashboard i fes clic al botó **+** **Create Zap** a la barra lateral esquerra per configurar un nou Zap.

![Dashboard de Zapier amb el botó Create Zap](/img/admin/webhooks-list.png)

Serà redirigit a la pàgina de creació del Zap.

En la caixa de cerca, escriu "wp ultimo". Fes clic per triar l'opció **Beta**.

![Cercant WP Ultimo en la llista d'apps de Zapier](/img/admin/webhooks-list.png)

Després de seleccionar la nostra app, trieu l'event disponible: **New Ultimate Multisite Event**.

![Seleccionar New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Ara cal que donem a Zapier accés a **la teva xarxa**. Clicant en **Sign in** s'obrirà una finestra nova que requerirà les **credencials API**.

![Prompt de signin de Zapier per a credencials API](/img/admin/webhooks-list.png)

Vés al teu panel d'administració de la xarxa i navega a **Ultimate Multisite > Settings** > **API & Webhooks** i busca la secció API Settings.

Selecciona l'opció **Enable API**, ja que és obligatori perquè aquesta connexió funcione.

![API Settings amb l'opció Enable API en Ultimate Multisite](/img/admin/webhooks-list.png)

Utilitza l'iconet **Copy to Clipboard** als camps API Key i API Secret i pega aquestes valors a la pantalla d'integració.

Al camp URL, introduceu la URL completa de la teva xarxa, incloent el protocol (HTTP o HTTPS).

![Pantalla d'integració de Zapier amb els camps API Key, Secret i URL](/img/admin/webhooks-list.png)

Clica al botó **Yes, Continue** per passar al següent pas. Si tot funciona correctament, et esperaran la teva nova compte connectada! Clica en **Continue** per crear un nou trigger.

## Com crear un nou Trigger

Ara que el teu compte està connectat, pots veure els events disponibles. Per aquest tutorial, triem l'event **payment_received**.

![Seleccionar payment_received event en Zapier trigger](/img/admin/webhooks-list.png)

Una vegada hores seleccionat l'esdeveniment i cliques en **continuar**, apareixerà un **pas de prova**.

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

En aquesta fase, Zapier farà una prova per veure si el teu Zap pot **obté tenir la data específica (payload) d'aquest esdeveniment**. Per esdeveniments futurs del mateix tipus, es enviarà informació amb aquesta mateixa estructura.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

En el nostre tutorial, la prova va **completar-se amb èxit** i va retornar l'exemple d'informació del payload. Aquesta informació és útil per guiament mentre creem les accions. El teu trigger ja està creat i està preparat per connectar-se amb altres aplicacions.

## Com crear Accions (Actions)

Les Accions utilitzen la informació de triggers anteriors per crear noves entrades en la teva xarxa.

En el **crear un pas d'acció**, triaràs l'Ultimate Multisite **Beta** i l'opció **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Al següent pas, o crearàs la teva autenticació, tal com ho vam fer en **Com començar**, o seleccionarà una autenticació ja creada. En aquest tutorial, triarem la mateixa autenticació que hem creat anteriorment.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Configurar l'Acció

Este és el **pas principal de l'acció** i aquí les coses són un poc diferents. La primera informació que triaràs és l'**Article** (Item). L'Article és el **model d'informació** de la teva xarxa, com per exemple **Customers**, **Payments**, **Sites**, **Emails** i altres.

![Elecció del tip d'article per a l'acció Zapier](/img/admin/webhooks-list.png)

Quan seleccions un article, el formulari es **reorganitzarà per portar els camps obligatòries i opcionals** de l'article seleccionat.

Per exemple, quan seleccions l'article **Customer**, els camps del formulari portaran tot el que és necessari per crear un nou Customer a la xarxa.

![Camps de l'article Customer en la configuració de l'acció Zapier](/img/admin/webhooks-list.png)

Després de remplir tots els camps marcats com **obligatoris** i fer clic a continuar, una última pantalla et mostrarà els camps relleguts i els camps que es van deixar buits.

![Test de l'acció Zapier mostrant camps relleguts i buits](/img/admin/webhooks-list.png)

Tan mateix que el teu test es completi amb èxit, la teva acció estarà configurada. També és important verificar a la teva xarxa si l'article es va crear amb el test de la teva acció.
