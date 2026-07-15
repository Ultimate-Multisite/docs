---
title: Een abonnement downgraden
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Een plan downgraden (v2)

_**BELANGRIJKE OPMERKING: Dit artikel verwijst naar Ultimate Multisite versie 2.x.**_

Het downgraden van een plan of subscription is een veelvoorkomende actie die je clients kunnen uitvoeren als ze een beperkt budget hebben of hebben besloten dat ze niet veel resources nodig hebben om hun subsite te draaien.

## Een plan downgraden {#how-to-downgrade-a-plan}

Je clients kunnen hun plan op elk moment downgraden door in te loggen op het admin dashboard van hun subsite en op **Wijzigen** te klikken onder hun Account-pagina.

![Customer account-pagina met Your Membership-kaart en knop Wijzigen](/img/account-page/membership-change-button.png)

Na het klikken op de knop **Wijzigen** wordt de gebruiker/client doorgestuurd naar de checkout-pagina waar ze het plan kunnen selecteren waarnaar ze hun subscription willen wijzigen.

![Pagina met downgrade-planopties aan de klantzijde](/img/account-page/downgrade-picker.png)

In dit voorbeeld downgraden we het plan van **Premium** naar **Free**.

Om door te gaan hoeft de gebruiker alleen op de knop **Complete Checkout** te klikken. Daarna worden ze teruggebracht naar de Account-pagina met een bericht over de pending wijziging voor de membership. De wijzigingen worden van kracht in de **volgende billing cycle** van de klant.

![Account-pagina met banner voor pending membership-wijziging](/img/account-page/pending-change.png)

### Wat gebeurt er wanneer een gebruiker hun plan downgrade {#what-happens-when-a-user-downgrades-their-plan}

Het is belangrijk om te weten dat het downgraden van het plan de bestaande configuratie in de subsite van de gebruiker niet wijzigt.

Het verandert niet automatisch de site template, omdat het wijzigen van de site template de subsite volledig zal wissen en resetten. Dit is om onnodig gegevensverlies te voorkomen. Dus disk space, themes, plugins enz. blijven intact, behalve de posts.

We begrijpen dat je grootste zorg de limits en quotas zijn die je onder elk plan instelt, maar we moeten rekening houden met de schade die het zou veroorzaken aan de subsite van de gebruiker als we configuraties ervan zouden verwijderen of wijzigen.

Voor de posts die de limit overschrijden die op het plan is ingesteld, heb je 3 verschillende opties: **Keep the posts as it** *,* **Move the posts to trash** *,* of **Move the posts to draft** *.* Je kunt dit configureren onder de instellingen van Ultimate Multisite.

![Network Admin Settings Sites-pagina met opties voor gedrag bij overschreden postlimiet](/img/account-page/settings-sites-post-limit.png)

### Wat gebeurt er met de betaling {#what-happens-to-the-payment}

In versie 2.0 vereist dit geen aanpassingen meer aan de betaling op het gebied van proration.

Dit komt doordat het systeem wacht tot de bestaande membership **de billing cycle heeft voltooid voordat** het nieuwe plan/de nieuwe membership van kracht wordt. Het nieuwe factuurbedrag voor de nieuwe membership wordt automatisch toegepast en in rekening gebracht in de volgende billing cycle.
