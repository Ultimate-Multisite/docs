---
title: Een plan upgraden
sidebar_position: 11
_i18n_hash: b0c02a1c1b12946cb507e8486e0d74e3
---
# Een Plan Upgraden (v2)

_**BELANGRIJK: Deze artikel verwijst naar Ultimate Multisite versie 2.x.**_

Uw klanten kunnen hun plannen op elk moment upgraden. Ze kunnen ofwel upgraden naar een ander plan of extra diensten of pakketten kopen die u op uw netwerk aanbiedt.

In deze tutorial behandelen we hoe ze hun plan kunnen upgraden en wat er gebeurt na het upgradeproces.

Om hun plan te upgraden, moeten uw klanten hun dashboard openen en naar de **Account** pagina gaan.

![Customer dashboard with Account page link](/img/admin/memberships-list.png)

Op de Account pagina wordt hun huidige lidmaatschap en het bijbehorende plan getoond. Om naar een ander plan te upgraden, moeten ze op **Change** klikken in de rechterbovenhoek van de sectie **Your Membership**.

![Your Membership section with Change button](/img/admin/memberships-list.png)

Ze worden doorgestuurd naar een afrekenformulier waarop alle beschikbare plannen worden weergegeven.

Ze kunnen ook de **services and packages available for their current plan** zien, voor het geval ze alleen een specifieke dienst of pakket willen kopen (zoals onbeperkte bezoeken of schijfruimte in ons voorbeeld hier), en het plan niet willen upgraden.

![Checkout form showing available plans and packages](/img/admin/memberships-list.png)

Nadat ze het product hebben gekozen dat ze willen kopen, zien ze hoeveel ze nu moeten betalen - exclusief eventuele bestaande credit - en hoeveel ze op de volgende factuurdatum zullen worden gefactureerd.

Meestal, als het product een ander plan is en de betaling tussen een lidmaatschapskosten plaatsvindt, ontvangen ze een credit voor het bedrag dat op het eerste plan is betaald.

![Upgrade payment summary with credit and next billing amount](/img/admin/memberships-list.png)

Als ze een plan of pakket selecteren dat niets verandert aan het huidige abonnement, zien ze een bericht dat dit uitlegt.

![Message when selected plan does not change the subscription](/img/admin/memberships-list.png)

Nadat de afrekening is voltooid, worden de nieuwe product(en) toegevoegd aan het account van uw klanten en worden alle limieten of functies van het nieuwe product(en) meteen toegevoegd: bezoeken, schijfruimte, berichten, enz...

## 

## 

## Upgrade- en Downgradepaden

Op elk van uw producten heeft u een **Up & Downgrades** tab. De eerste optie op die tab is een veld genaamd **Plan Group**.

**Plan groups** is wat u Ultimate Multisite laat weten dat bepaalde plannen tot dezelfde "familie" behoren, en daarom moeten worden gebruikt om upgrade/downgradepaden te construeren.

![Up and Downgrades tab with Plan Group field](/img/config/product-upgrades.png)

Bijvoorbeeld, u heeft een **Free plan**, een **Basic Plan** en een **Premium Plan** beschikbaar. U wilt dat gebruikers die zich hebben geabonneerd op het **Free Plan** alleen kunnen upgraden naar het **Premium Plan** en dat ze het "Basic Plan" niet als upgrade-optie zien. Alles wat u hoeft te doen, is dezelfde plan group naam toewijzen aan zowel het **Free** als het **Premium** plan zoals getoond in de onderstaande screenshots.

![Free Plan with High End plan group assigned](/img/config/product-upgrades.png)

![Premium Plan with High End plan group assigned](/img/config/product-upgrades.png)

Wat dit moet doen, is **Ultimate Multisite** laten weten dat er een "familie" van plannen in het netwerk is genaamd **High End**. Bij het aanbieden …
