---
title: Downgraden van een Plan
sidebar_position: 7
_i18n_hash: 6513875b161bca42a0dc0612f40b0ce5
---
# Downgraden van een plan (v2)

_**BELANGRIJK OPMERKING: Dit artikel verwijst naar Ultimate Multisite versie 2.x.**_

Een plan of abonnement downgraden is een veelvoorkomende actie die uw klanten kunnen uitvoeren als ze een beperkt budget hebben of als ze hebben besloten dat ze niet veel middelen nodig hebben om hun subsite te laten draaien.

## Hoe een plan downgraden

Uw klanten kunnen hun plan op elk moment downgraden door in te loggen op het beheerdersdashboard van hun subsite en op **Change** te klikken onder hun accountpagina.

![Account page with Change button under membership](/img/admin/memberships-list.png)

Na het klikken op de **Change** knop wordt de gebruiker/klant doorgestuurd naar de afrekenpagina waar ze het plan kunnen selecteren waar ze hun abonnement naartoe willen wijzigen.

![Checkout page showing plan options for downgrade](/img/admin/memberships-list.png)

In dit voorbeeld downgraden we het plan van **Premium** naar **Free**.

Om door te gaan hoeft de gebruiker alleen maar op de **Complete Checkout** knop te klikken. Vervolgens worden ze teruggebracht naar de accountpagina met een bericht over de lopende wijziging voor het lidmaatschap. De wijzigingen komen in werking bij de **volgende factureringscyclus** van de klant.

![Account page showing pending membership change message](/img/admin/memberships-list.png)

### Wat gebeurt er wanneer een gebruiker zijn plan downgraden

Het is belangrijk op te merken dat het downgraden van het plan de bestaande configuratie in de subsite van de gebruiker niet wijzigt.

Het verandert de site template niet automatisch, omdat het wijzigen van de site template de subsite volledig zou wissen en resetten. Dit is om onnodig gegevensverlies te voorkomen. Dus schijfruimte, thema's, plugins enz. blijven intact, behalve de berichten.

We begrijpen dat uw belangrijkste zorg de limieten en quota's zijn die u onder elk plan instelt, maar we moeten rekening houden met de schade die het zou toebrengen aan de subsite van de gebruiker als we iets van de configuraties zouden verwijderen of wijzigen.

Voor de berichten die de limiet van het plan overschrijden, heeft u 3 verschillende opties: **Keep the posts as it** *,* **Move the posts to trash** *,* of **Move the posts to draft** *.* U kunt dit configureren onder Ultimate Multisite instellingen.

![Post limit exceeded options in Ultimate Multisite settings](/img/config/settings-sites.png)

### Wat gebeurt er met de betaling

In versie 2.0 is het niet langer nodig om aanpassingen te doen aan de betaling met betrekking tot pro rata.

Dit komt omdat het systeem wacht tot het bestaande lidmaatschap **zijn factureringscyclus heeft voltooid voordat** het nieuwe plan/lidmaatschap van kracht wordt. Het nieuwe factuurbedrag voor het nieuwe lidmaatschap wordt automatisch toegepast en in rekening gebracht bij de volgende factureringscyclus.
