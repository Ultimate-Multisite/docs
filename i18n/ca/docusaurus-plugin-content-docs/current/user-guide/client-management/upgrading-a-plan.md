---
title: Actualització de pla
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Actualitzar un pla (v2)

_**NOTA IMPORTANT: Aquest article es refereix a la versió 2.x d'Ultimate Multisite.**_

Els vostres clients poden actualitzar els seus plans en qualsevol moment. Poden actualitzar a un altre pla o comprar qualsevol servei o paquet addicional que ofereu a la vostra xarxa.

En aquest tutorial, cobreixerem com poden actualitzar el seu pla i què passa després del procés d'actualització.

Per actualitzar el seu pla, els vostres clients han de accedir al seu *dashboard* i anar a la pàgina de **Account**.

![Customer subsite dashboard with Account menu link visible](/img/account-page/account-menu.png)

A la pàgina de Account, es mostrarà la seva membresia actual i el pla associat. Per actualitzar a un altre pla, han de fer clic a **Change** a l'esquina superior dreta de la secció **Your Membership**.

![Account page Your Membership card with Change button](/img/account-page/membership-change-button.png)

Seran rediriguts a un formulari de pagament (checkout) on es mostraran tots els plans disponibles.

També podran veure els **serveis i paquets disponibles per al seu pla actual**, en el cas que només desitjin comprar un servei o paquet específic (com visites il·limitades o espai en disc, en el nostre exemple aquí), i no actualitzar el pla.

![Upgrade picker showing available plans and packages on the customer side](/img/account-page/upgrade-picker.png)

Després de triar el producte que volen comprar, veuràn quant haurà de pagar ara mateix –excloent qualsevol crèdit existent– i quantitat que s'haurà de cobrar la pròxima data de facturació.

Normalment, si el producte és un altre pla i el pagament es farà entre un càrrec de membresia, rebran un crèdit pel quantitat pagada pel primer pla.

![Upgrade payment summary showing credit applied and next billing amount](/img/account-page/upgrade-summary.png)

Si seleccionen un pla o paquet que no canviarà res de la subscripció actual, veuràn un missatge que ho explica.

![Notice when the selected plan does not change the subscription](/img/account-page/upgrade-no-change.png)

Després de completar el pagament (checkout), el/els nou/s producte(s) es trigarà/n a la compte de vels vostres clients i tots els límits o funcionalitats dels nous productes es trigaran instantàni: visites, espai en disc, articles, etc...

##

##

## Rutes d'Actualització i Desactualització

En cada un dels vostres productes, tindreu una pestanya d'**Up & Downgrades**. La primera opció d'aquesta pestanya és un camp anomenat **Plan Group**.

**Plan groups** és el que us permet informar a Ultimate Multisite que certs plans pertanyen a la mateixa "família" i, per tant, que s'han de trigar per construir les opcions de ruta d'actualització/desactualització.

![Product edit Up and Downgrades tab with Plan Group field](/img/config/product-upgrades-plan-group.png)

Per exemple, teniu disponible un **Free plan**, un **Basic Plan** i un **Premium Plan**. Desitgeu que els usuaris subscrivits al **Free Plan** puguin actualitzar només al **Premium Plan** i no voleu que vegin el "Basic Plan" com a opció d'actualització. Tot el que ha de fer és assignar el mateix nom de grup de plans tant al Free com al Premium, com es mostra a les captures d'pantalla de més avall.

![Free Plan product page with High End plan group assigned](/img/config/product-upgrades-free.png)

![Premium Plan product page with High End plan group assigned](/img/config/product-upgrades-premium.png)

El que això hauria de fer és informar a Ultimate Multisite que hi ha una "família" de plans a la xarxa anomenada **High End**. Quan ofereixin actualitzacions o desactualitzacions, només els plans de la mateixa família es presentaran com a opció per a l'usuari.
