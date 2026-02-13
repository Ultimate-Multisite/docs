---
title: E-mails verzenden en uitzendingen
sidebar_position: 11
_i18n_hash: 2c58b558fa68e4dd6e81bec971d52536
---
# Verzenden van e-mails en broadcasts (v2)

_**BELANGRIJK OPMERKING: Dit artikel verwijst naar Ultimate Multisite versie 2.x.**_

Ultimate Multisite heeft een functie waarmee je kunt communiceren met je klanten door een e-mail te sturen naar een gerichte gebruiker of een groep gebruikers, evenals meldingen op hun beheerdersdashboard te sturen om aankondigingen te verspreiden.

## Voeg beheermeldingen toe aan het dashboard van je klanten met Broadcasts

Met de broadcast-functie van Ultimate Multisite kun je **beheermeldingen** toevoegen aan het beheerdersdashboard van de subsite van je gebruiker.

Dit is uiterst handig als je een aankondiging wilt doen, zoals systeemonderhoud of het aanbieden van nieuwe producten of diensten aan je bestaande gebruikers. Zo ziet de beheermelding eruit op het dashboard van je gebruiker.

![Admin notice broadcast shown on customer dashboard](/img/admin/broadcasts-list.png)

Om een beheermelding te starten, ga je naar je netwerkbeheerdersdashboard en onder het **Ultimate Multisite** menu vind je de optie **Broadcasts**.

![Broadcasts menu in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Van deze pagina klik je op de knop **Add Broadcast** bovenaan.

Dit brengt het modalvenster Add broadcast tevoorschijn, waar je kunt kiezen welk type broadcast je wilt verzenden.

Ga verder en selecteer **Message** en klik vervolgens op de knop **Next Step**.

![Add broadcast modal with Message type selected](/img/admin/broadcasts-list.png)

Het volgende venster vraagt je om het **Target customer** of **Target product**. Merk op dat je meer dan één gebruiker of meer dan één product kunt selecteren.

Om te zoeken naar een gebruikersaccount of product, moet je het trefwoord in het veld typen.

Onder het veld **Message type** kun je de kleur van de melding kiezen. Dit benadrukt de urgentie van je bericht.

Je kunt vervolgens op **Next Step** klikken.

![Target customer and product selection for broadcast](/img/admin/broadcasts-list.png)

Het volgende venster is waar je kunt beginnen met het opstellen van je bericht door het onderwerp en de inhoud/bericht in te voeren die je naar de gebruikers wilt verspreiden.

![Broadcast message subject and content editor](/img/admin/broadcasts-list.png)

Na het maken van je bericht kun je vervolgens op de knop **Send** klikken.

En dat is het. De beheermelding zou onmiddellijk op het dashboard van je gebruiker moeten verschijnen.

## Stuur e-mails naar je klanten

Met de broadcast-functie van Ultimate Multisite kun je een e-mail naar je gebruikers sturen. Je hebt de mogelijkheid om de e-mail alleen naar specifieke gebruikers te sturen of een specifieke gebruikersgroep te targeten op basis van het product of het abonnement waar ze onder zijn ingeschreven.

Om een e-mailbroadcast te starten, ga je naar je netwerkbeheerdersdashboard en onder het Ultimate Multisite menu vind je de optie Broadcast.

![Broadcasts page in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Van deze pagina klik je op de knop **Add broadcast** bovenaan.

Dit brengt het modalvenster Add broadcast tevoorschijn, waar je kunt kiezen welk type broadcast je wilt verzenden. Ga verder en selecteer **Email** en klik vervolgens op de knop **Next Step**.

![Add broadcast modal with Email type selected](/img/admin/broadcasts-list.png)

Het volgende venster vraagt je om het **Target customer** of **Target product**. Merk op dat je meer dan één gebruiker of meer dan één product kunt selecteren.

Om te zoeken naar een gebruikersaccount of product, moet je het trefwoord in het veld typen.

Zodra je doelgroep is geselecteerd, kun je op **Next Step** klikken.

![Target customer and product selection for email broadcast](/img/admin/broadcasts-list.png)

Het volgende venster is waar je kunt beginnen met het opstellen van je e-mail door het onderwerp en de inhoud/bericht in te voeren die je naar de gebruikers wilt sturen.

![Email broadcast subject and content editor](/img/admin/broadcasts-list.png)

Na het maken van je bericht kun je op de knop **Send** klikken.

En dat is hoe gemakkelijk het is om een e-mail naar je eindgebruikers te sturen met behulp van de broadcast-functie.

## Systeem e-mails

Systeem e-mails in Ultimate Multisite zijn die **automatische meldingen** die door het systeem worden verzonden na bepaalde acties zoals registratie, betaling, domeinmapping, enz. Deze e-mails kunnen worden bewerkt of gewijzigd via de instellingen van Ultimate Multisite. Het bevat ook een functie waarmee je bestaande instellingen kunt resetten en importeren vanuit een andere Ultimate Multisite-installatie.

### Resetten & Importeren

Nieuwe Ultimate Multisite-versies, evenals add-ons, kunnen en zullen van tijd tot tijd nieuwe e-mails registreren.

Om conflicten en andere problemen te voorkomen, **voeg je de nieuwe e-mailsjablonen niet automatisch toe als Systeem e-mails op je installatie**, tenzij ze cruciaal zijn voor het correcte functioneren van een bepaalde functie.

Echter, superadmins en agents kunnen deze nieuw geregistreerde e-mails importeren via de importtool. Dat proces maakt een nieuwe systeem e-mail aan met de inhoud en configuratie van het nieuwe e-mailsjabloon, waardoor de superadmin eventuele gewenste wijzigingen kan aanbrengen of ze zo laten staan.

#### Hoe systeem e-mails importeren

Ga naar je Ultimate Multisite Settings-pagina en ga naar het tabblad **Emails**.

![Emails tab in Ultimate Multisite settings](/img/config/settings-emails.png)

Vervolgens klik je in de zijbalk op de knop **Customize System Emails**.

![Customize System Emails button on sidebar](/img/config/settings-emails.png)

Op de pagina Systeem e-mails zie je de knop **Reset & Import** bovenaan. Door op die knop te klikken, zou het import- en resetmodalvenster moeten openen.

![Reset and Import action button on System Emails page](/img/config/settings-emails.png)

Vervolgens kun je de optie Import Emails in- of uitschakelen om te zien welke systeem e-mails beschikbaar zijn om te importeren.

![Import Emails options showing available system emails](/img/config/settings-emails.png)

#### Resetten van Systeem e-mails

Andere keren realiseer je je dat de wijzigingen die je hebt aangebracht aan een bepaald e-mailsjabloon niet meer werken en je het wilt resetten naar de **standaardstatus**.

In dergelijke gevallen heb je twee opties: je kunt de systeem e-mail eenvoudig verwijderen en opnieuw importeren (met behulp van de bovenstaande instructies) - wat verzendstatistieken en andere zaken zal wissen, waardoor deze methode het minst voorkeursoptie is.

Of je kunt de **Reset & Import tool** gebruiken om dat e-mailsjabloon te resetten.

Om een e-mailsjabloon te resetten, kun je de bovenstaande stappen volgen tot je bij de Reset & Import tool komt, en vervolgens de optie **Reset** in- of uitschakelen en de e-mails selecteren die je wilt terugzetten naar hun standaardinhoud.

![Reset option to restore email templates to defaults](/img/config/settings-emails.png)
