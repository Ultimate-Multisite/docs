---
title: Migreren van V1
sidebar_position: 17
_i18n_hash: ab3379eeae93ce385ad01c599fc181cb
---
# Migreren van V1

## Ultimate Multisite is overgestapt van de oorspronkelijke 1.x-releases naar de 2.x-releases.

Ultimate Multisite versie 2.0 en hoger is een volledige herschrijving van de codebase, wat betekent dat er weinig gedeeld is tussen de oude versie en de nieuwe. Om die reden moet bij het upgraden van 1.x naar 2.x je gegevens worden gemigreerd naar een formaat dat de nieuwe versies kunnen begrijpen.

Gelukkig heeft Ultimate Multisite 2.0+ **een migrator** ingebouwd in de core die in staat is om gegevens van de oude versie te detecteren en te converteren naar het nieuwe formaat. Deze migratie gebeurt tijdens de **Setup Wizard** van versie 2.0+.

Deze les behandelt hoe de migrator werkt, wat te doen bij fouten, en hoe je problemen die zich tijdens dit proces kunnen voordoen kunt oplossen.

_**BELANGRIJK: Voordat je begint met upgraden van versie 1.x naar versie 2.0, zorg er alstublieft voor dat je een back-up maakt van je site-database**_

## Eerste stappen

De eerste stap is om het plugin .zip-bestand te downloaden en versie 2.0 te installeren op je netwerkbeheer-dashboard.

Na het [installeren en activeren van versie 2.0](../getting-started/installing-ultimate-multisite.md), zal het systeem automatisch detecteren dat je Multisite draait op de legacy-versie en zie je dit bericht bovenaan de pluginpagina.

_**OPMERKING:** Als je Ultimate Multisite 1.x geïnstalleerd hebt op je Multisite, heb je de optie om de plugin te vervangen door de versie die je zojuist hebt gedownload. Klik gerust op **Replace current with uploaded**._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

Zodra je klaar bent om door te gaan, kun je op de knop klikken die **Visit the Installer to finish the upgrade** zegt.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Het brengt je dan naar de installatie-wizardpagina met enkele welkomstberichten. Je hoeft alleen **Get Started** te klikken om naar de volgende pagina te gaan.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Na het klikken op **Get Started** wordt je doorgestuurd naar de Pre-install Checks_. Dit toont je Systeeminformatie en WordPress-installatie en geeft aan of het voldoet aan de vereisten van Ultimate Multisite.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

De volgende stap is om je Ultimate Multisite licentiesleutel in te voeren en de plugin te activeren. Dit zorgt ervoor dat alle functies, inclusief add-ons, beschikbaar zijn op je site.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Na het invoeren van je sleutel, klik op **Agree & Activate**.

Na licentieactivering kun je de daadwerkelijke installatie starten door op **Install** te klikken op de volgende pagina. Dit maakt automatisch de benodigde bestanden en database aan die nodig zijn voor versie 2.0 om te functioneren.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

## Nu, de migratie

De migrator heeft een ingebouwde veiligheidsfunctie waarbij het je hele multisite controleert om er zeker van te zijn dat al je Ultimate Multisite-gegevens zonder problemen kunnen worden gemigreerd. Klik op de **Run Check** knop om het proces te starten.

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

Na het uitvoeren van de controle heb je twee mogelijkheden: het resultaat kan zijn **met** een fout of **zonder** een fout.

### Met fout

Als je een foutmelding krijgt, moet je contact opnemen met ons supportteam zodat zij je kunnen helpen de fout op te lossen. Zorg ervoor dat je **de foutlog** verstrekt wanneer je een ticket aanmaakt. Je kunt de log downloaden of op de link klikken die zegt contact our support team. Het opent de help-widget aan de rechterkant van je pagina met de velden vooraf ingevuld, inclusief de foutlogs onder de beschrijving.

_**Aangezien het systeem een fout heeft gevonden, kun je niet doorgaan met migreren naar versie 2.0. Je kunt dan terugkeren naar versie 1.x om je netwerk weer te laten draaien totdat de fout is opgelost.**_

### Zonder fout

Als het systeem geen fout vindt, zie je een succesbericht en een **Migrate** knop onderaan die je toestaat om door te gaan met de migratie. Op deze pagina word je eraan herinnerd een back-up van je database te maken voordat je verdergaat, wat we sterk aanbevelen. Klik op **Migrate** als je al een back-up hebt.

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

En dat is alles wat nodig is!

Je kunt het Wizard-setupproces voortzetten om je logo en andere zaken op je netwerk bij te werken, of je kunt beginnen met navigeren door het Ultimate Multisite versie 2.0-menu en de nieuwe interface. Ga ervoor en maak plezier.
