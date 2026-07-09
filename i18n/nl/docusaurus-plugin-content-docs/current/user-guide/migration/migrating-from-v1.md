---
title: Migreren vanaf V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migreren vanaf V1

## Ultimate Multisite is overgestapt van de oorspronkelijke 1.x-reeks releases naar de 2.x-reeks releases.

Ultimate Multisite versie 2.0 en hoger is een volledige herschrijving van de codebase, wat betekent dat er heel weinig wordt gedeeld tussen de oude versie en de nieuwe. Daarom moeten je gegevens bij het upgraden van 1.x naar 2.x worden gemigreerd naar een indeling die de nieuwe versies kunnen begrijpen.

Gelukkig **wordt Ultimate Multisite 2.0+ geleverd met een migrator** die in de kern is ingebouwd en die gegevens uit de oude versie kan detecteren en naar de nieuwe indeling kan converteren. Deze migratie vindt plaats tijdens de **installatiewizard** van versie 2.0+.

Deze les behandelt hoe de migrator werkt, wat je moet doen bij fouten en hoe je problemen kunt oplossen die tijdens dit proces kunnen optreden.

_**BELANGRIJK: Voordat je begint met upgraden van versie 1.x naar versie 2.0, zorg ervoor dat je een back-up maakt van de database van je site**_

## Eerste stappen

De eerste stap is om het .zip-bestand van de plug-in te downloaden en versie 2.0 te installeren op je netwerkbeheerdersdashboard.

Nadat je [versie 2.0 hebt geïnstalleerd en geactiveerd](../getting-started/installing-ultimate-multisite.md), detecteert het systeem automatisch dat je multisite op de legacy-versie draait en zie je dit bericht bovenaan de plug-inpagina.

_**OPMERKING:** Als je Ultimate Multisite 1.x op je multisite hebt geïnstalleerd, krijg je de optie om de plug-in te vervangen door de versie die je zojuist hebt gedownload. Ga je gang en klik op **Huidige vervangen door geüploade**._

<!-- Screenshot niet beschikbaar: Plug-inpagina met optie om v1 te vervangen door geüploade v2-versie -->

De volgende pagina laat je weten welke legacy-uitbreidingen je samen met versie 1.x hebt geïnstalleerd. Er staan instructies over of de versie die je gebruikt compatibel is met versie 2.0 of dat je na de migratie een geüpgradede versie van de uitbreiding moet installeren.

<!-- Screenshot niet beschikbaar: Bericht bovenaan de plug-inspagina over updaten naar v2.0, met lijst van uitbreidingen die moeten worden bijgewerkt -->

Zodra je klaar bent om door te gaan, kun je klikken op de knop met **Bezoek het installatieprogramma om de upgrade te voltooien**.

<!-- Screenshot niet beschikbaar: Knop met Bezoek het installatieprogramma om de upgrade te voltooien -->

Daarna kom je op de pagina van de installatiewizard met enkele welkomstberichten. Je hoeft alleen op **Aan de slag** te klikken om naar de volgende pagina te gaan.

<!-- Screenshot niet beschikbaar: Welkomstpagina van de installatiewizard met knop Aan de slag -->

Nadat je op **Aan de slag** hebt geklikt, word je doorgestuurd naar de controles vóór installatie_._ Dit toont je systeeminformatie en WordPress-installatie en vertelt je of deze voldoet aan de **vereisten van Ultimate Multisite**.

<!-- Screenshot niet beschikbaar: Pagina Controles vóór installatie met bevestiging van systeemvereisten -->

De volgende stap is om je Ultimate Multisite licentiesleutel in te voeren en de plug-in te activeren. Dit zorgt ervoor dat alle functies, inclusief uitbreidingen, beschikbaar zijn op je site.

<!-- Screenshot niet beschikbaar: Licentie-activeringspagina met invoer voor licentiesleutel en knop Akkoord en activeren -->

Klik na het invoeren van je sleutel op **Akkoord & activeren**.

Na de licentieactivering kun je de daadwerkelijke installatie starten door op de volgende pagina op **Installeren** te klikken. Dit maakt automatisch de benodigde bestanden en database aan die nodig zijn om versie 2.0 te laten functioneren.

<!-- Screenshot niet beschikbaar: Installatiepagina die toont wat wordt bijgewerkt met knop Installeren -->

## Nu de migratie

De migrator heeft een ingebouwde veiligheidsfunctie waarbij je hele multisite wordt gecontroleerd om ervoor te zorgen dat al je Ultimate Multisite-gegevens zonder problemen kunnen worden gemigreerd. Klik op de knop **Controle uitvoeren** om het proces te starten.

<!-- Screenshot niet beschikbaar: Migratiepagina met knop Controle uitvoeren om te verifiëren dat gegevens kunnen worden geconverteerd -->

Na het uitvoeren van de controle zijn er twee mogelijkheden: het resultaat kan **met** een fout of **zonder fout** zijn.

### Met fout

Als je een foutmelding krijgt, moet je contact opnemen met ons ondersteuningsteam zodat zij je kunnen helpen de fout te herstellen. Zorg ervoor dat je **het foutenlogboek meestuurt** wanneer je een ticket aanmaakt. Je kunt het logboek downloaden of op de link klikken met de tekst contact opnemen met ons ondersteuningsteam. Dit opent de helpwidget aan de rechterkant van je pagina met de velden vooraf voor je ingevuld, inclusief de foutenlogboeken onder de beschrijving.

_**Omdat het systeem een fout heeft gevonden, kun je niet doorgaan met migreren naar versie 2.0. Je kunt dan teruggaan naar versie 1.x om je netwerk te blijven draaien totdat de fout is opgelost.**_

### Zonder fout

Als het systeem geen fout vindt, zie je een succesbericht en onderaan een knop **Migreren** waarmee je kunt doorgaan met de migratie. Op deze pagina word je eraan herinnerd een back-up van je database te maken voordat je verdergaat, wat we sterk aanbevelen. Klik op **Migreren** als je al een back-up hebt.

<!-- Screenshot niet beschikbaar: Migratiepagina met succesbericht en aanbeveling voor back-up -->

<!-- Screenshot niet beschikbaar: Knop Migreren in de rechterbenedenhoek -->

En dat is alles wat nodig is!

Je kunt doorgaan met het uitvoeren van de wizardinstellingen om je logo en andere zaken op je netwerk bij te werken, of beginnen met navigeren door het menu van je Ultimate Multisite versie 2.0 en de nieuwe interface. Ga je gang en maak er iets leuks van.
