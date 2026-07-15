---
title: E-mails en broadcasts versturen
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# E-mails en uitzendingen verzenden (v2)

_**BELANGRIJKE OPMERKING: Dit artikel verwijst naar Ultimate Multisite versie 2.x.**_

Ultimate Multisite wordt geleverd met een functie waarmee je met je klanten kunt communiceren door een e-mail te sturen naar een gerichte gebruiker of een groep gebruikers, en door mededelingen op hun admin Dashboard te plaatsen om aankondigingen uit te zenden

## Voeg admin-mededelingen toe aan het Dashboard van je klanten met uitzendingen {#add-admin-notices-to-your-customers-dashboard-with-broadcasts}

Met de uitzendfunctie van Ultimate Multisite kun je **admin-mededelingen** toevoegen aan het admin Dashboard van de subsite van je gebruiker.

Dit is uiterst handig als je een aankondiging moet doen, zoals systeemonderhoud of het aanbieden van nieuwe producten of diensten aan je bestaande gebruikers. Zo ziet de admin-mededeling eruit op het Dashboard van je gebruiker.

<!-- Screenshot niet beschikbaar: Admin-mededeling uitgezonden weergegeven op het Dashboard van de subsite van een klant -->

Om een admin-mededeling te starten, ga je naar je netwerk-admin Dashboard en onder het menu **Ultimate Multisite** vind je de optie **Uitzendingen**.

![Lijstpagina voor uitzendingen in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Je kunt ook bestaande uitzendingen bewerken:

![Interface voor het bewerken van uitzendingen](/img/admin/broadcast-edit.png)

Klik op deze pagina bovenaan op de knop **Uitzending toevoegen**.

Dit opent het modale venster Uitzending toevoegen, waar je kunt kiezen welk type uitzending je wilt verzenden.

Ga verder en selecteer **Bericht** en klik daarna op de knop **Volgende stap**.

![Modaal venster Uitzending toevoegen met de optie Bericht geselecteerd](/img/admin/broadcast-add-message.png)

Het volgende venster vraagt je om de **Doelklant** of het **Doelproduct**. Let op dat je meer dan één gebruiker of meer dan één product kunt selecteren.

Om naar een gebruikersaccount of product te zoeken, moet je beginnen met het typen van het trefwoord in het veld.

Onder het veld **Berichttype** kun je de kleur van de mededeling selecteren. Dit benadrukt de urgentie van je bericht.

Je kunt daarna op **Volgende stap** klikken.

![Velden doelklanten, doelproduct en berichttype voor een berichtuitzending](/img/admin/broadcast-message-targets.png)

In het volgende venster kun je beginnen met het opstellen van je bericht door het onderwerp en de inhoud/het bericht in te voeren dat je naar de gebruikers wilt uitzenden.

![Onderwerp en inhoudseditor voor uitzendbericht in de opstelstap](/img/admin/broadcast-edit.png)

Nadat je je bericht hebt gemaakt, kun je op de knop **Verzenden** drukken.

En dat is alles. De admin-mededeling zou onmiddellijk op het Dashboard van je gebruiker moeten verschijnen.

## Stuur e-mails naar je klanten {#send-emails-to-your-customers}

Met de uitzendfunctie van Ultimate Multisite kun je een e-mail naar je gebruikers sturen. Je hebt de optie om de e-mail alleen naar specifieke gebruikers te sturen of een specifieke gebruikersgroep te targeten op basis van het product of plan waarop ze geabonneerd zijn.

Om een e-mailuitzending te starten, ga je naar je netwerk-admin Dashboard en onder het menu Ultimate Multisite vind je de optie Uitzending.

![Lijstpagina voor uitzendingen gebruikt als startpunt voor een e-mailuitzending](/img/admin/broadcasts-list.png)

Klik op deze pagina bovenaan op de knop **Uitzending toevoegen**.

Dit opent het modale venster Uitzending toevoegen, waar je kunt kiezen welk type uitzending je wilt verzenden. Ga verder en selecteer **E-mail** en klik daarna op de knop **Volgende stap**.

![Modaal venster Uitzending toevoegen met de optie E-mail geselecteerd](/img/admin/broadcast-add-email.png)

Het volgende venster vraagt je om de **Doelklant** of het **Doelproduc** t. Let op dat je meer dan één gebruiker of meer dan één product kunt selecteren.

Om naar een gebruikersaccount of product te zoeken, moet je beginnen met het typen van het trefwoord in het veld.

Zodra je doelgroep is geselecteerd, kun je op **Volgende stap** klikken.

![Selectie van doelklanten en doelproduct voor een e-mailuitzending](/img/admin/broadcast-email-targets.png)

In het volgende venster kun je beginnen met het opstellen van je e-mail door het onderwerp en de inhoud/het bericht in te voeren dat je naar de gebruikers wilt sturen.

<!-- Screenshot niet beschikbaar: Onderwerp en inhoudseditor voor e-mailuitzending in de opstelstap -->

Nadat je je bericht hebt gemaakt, kun je op de knop **Verzenden** drukken.

En zo eenvoudig is het om een e-mail naar je eindgebruikers te sturen met de uitzendfunctie.

## Systeeme-mails {#system-emails}

Systeeme-mails in Ultimate Multisite zijn die **automatische meldingen** die door het systeem worden verzonden na bepaalde acties zoals registratie, betaling, domeintoewijzing, enz. Deze e-mails kunnen worden bewerkt of aangepast vanuit de instellingen van Ultimate Multisite. Het wordt ook geleverd met een functie waarmee je bestaande instellingen uit een andere Ultimate Multisite-installatie kunt resetten en importeren.

### Resetten & importeren {#resetting--importing}

Nieuwe versies van Ultimate Multisite, evenals add-ons, kunnen en zullen van tijd tot tijd nieuwe e-mails registreren.

Om conflicten en andere problemen te voorkomen, **voegen we de nieuwe e-mailsjablonen niet automatisch toe als systeeme-mails aan je installatie** , tenzij ze cruciaal zijn voor de juiste werking van een bepaalde functie.

Super admins en agents kunnen deze nieuw geregistreerde e-mails echter importeren via de importtool. Dat proces maakt een nieuwe systeeme-mail aan met de inhoud en configuratie van de nieuwe e-mailsjabloon, zodat de super admin alle gewenste wijzigingen kan aanbrengen of ze kan behouden zoals ze zijn.

#### Systeeme-mails importeren {#how-to-import-system-emails}

Ga naar je instellingenpagina van Ultimate Multisite en ga naar het tabblad **E-mails**.

![Tabblad E-mails in Ultimate Multisite-instellingen met de sectie Systeeme-mails](/img/config/settings-emails-tab.png)

Klik vervolgens in de zijbalk op de knop **Systeeme-mails aanpassen**.

<!-- Screenshot niet beschikbaar: Knop Systeeme-mails aanpassen in het zijbalkpaneel Systeeme-mails -->

Op de pagina Systeeme-mails zie je bovenaan de actieknop **Resetten & importeren**. Als je op die knop klikt, wordt het modale venster voor importeren en resetten geopend.

![Actieknop Resetten of importeren op de admin-pagina Systeeme-mails](/img/admin/system-emails-reset-import.png)

Vervolgens kun je de opties E-mails importeren in- of uitschakelen om te zien welke systeeme-mails beschikbaar zijn om te worden geïmporteerd.

<!-- Screenshot niet beschikbaar: modal Resetten en importeren met de opties voor E-mails importeren uitgeklapt -->

#### Systeem-e-mails resetten {#reseting-system-emails}

Op andere momenten merk je dat de wijzigingen die je in een bepaalde e-mailtemplate hebt aangebracht niet meer voor je werken en dat je deze wilt terugzetten naar de **standaardstatus**.

In zulke gevallen heb je twee opties: je kunt de systeem-e-mail eenvoudig verwijderen en opnieuw importeren (met de bovenstaande instructies) - dit wist verzendstatistieken en andere zaken, waardoor deze methode het minst de voorkeur heeft.

Of je kunt de **Resetten & importeren-tool** gebruiken om die e-mailtemplate te resetten.

Om een e-mailtemplate te resetten, kun je de bovenstaande stappen volgen totdat je bij de Resetten & importeren-tool komt, en vervolgens de optie **Resetten** inschakelen en de e-mails selecteren die je wilt terugzetten naar hun standaardinhoud.

<!-- Screenshot niet beschikbaar: modal Resetten en importeren met de opties voor E-mails resetten uitgeklapt -->
