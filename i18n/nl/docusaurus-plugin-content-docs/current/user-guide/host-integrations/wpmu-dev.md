---
title: WPMU DEV Integratie
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# WPMU DEV Integratie {#wpmu-dev-integration}

## Overzicht {#overview}
WPMU DEV is een uitgebreid WordPress-platform dat hosting, plug-ins en diensten aanbiedt voor WordPress-sites. Deze integratie maakt automatische domeinsynchronisatie en SSL-certificaatbeheer mogelijk tussen Ultimate Multisite en WPMU DEV-hosting.

## Functies {#features}
- Automatische domeinsynchronisatie
- SSL-certificaatbeheer
- Uitgebreide SSL-certificaatverificatiepogingen

## Vereisten {#requirements}
De integratie detecteert automatisch of je host op WPMU DEV en gebruikt de ingebouwde API. Geen extra configuratie is vereist als je host op WPMU DEV.

De integratie controleert op de aanwezigheid van de constante `WPMUDEV_HOSTING_SITE_ID`, die automatisch wordt gedefinieerd bij hosting op WPMU DEV.

## Installatie-instructies {#setup-instructions}

### 1. Controleer WPMU DEV-hosting {#1-verify-wpmu-dev-hosting}

Als je host op WPMU DEV, zouden de noodzakelijke constanten al gedefinieerd moeten zijn. Controleer dat:

1. De constante `WPMUDEV_HOSTING_SITE_ID` is gedefinieerd in je omgeving
2. Je hebt een actief WPMU DEV-ledenmaatschap met API-toegang

### 2. Schakel de integratie in {#2-enable-the-integration}

1. In je WordPress-beheer, ga naar Ultimate Multisite > Instellingen
2. Navigeer naar het tabblad **Domain Mapping**
3. Scroll naar beneden naar **Host Integrations**
4. Schakel de WPMU DEV-integratie in
5. Klik op **Save Changes**

## Hoe het werkt {#how-it-works}

### Domeinsynchronisatie {#domain-syncing}

Wanneer een domein wordt gemapt in Ultimate Multisite:

1. De integratie gebruikt de WPMU DEV API om het domein toe te voegen aan je hostingaccount
2. Het voegt ook automatisch de www-versie van het domein toe
3. WPMU DEV beheert de domeinconfiguratie en het SSL-certificaatverlenen

### SSL-certificaatbeheer {#ssl-certificate-management}

De integratie is geconfigureerd om het aantal SSL-certificaatverificatiepogingen voor WPMU DEV-hosting te verhogen, omdat het enige tijd kan duren voordat SSL-certificaten worden uitgegeven en geïnstalleerd. Standaard probeert het tot 10 keer voor SSL-certificaatverificatie, vergeleken met de standaard 5 pogingen.

## Belangrijke opmerkingen {#important-notes}

### Domeinverwijdering {#domain-removal}

Momenteel biedt de WPMU DEV API geen manier om domeinen te verwijderen. Wanneer een domeinmapping wordt verwijderd in Ultimate Multisite, blijft het domein in je WPMU DEV-hostingaccount. Je moet het handmatig verwijderen via het WPMU DEV-hostingdashboard als dat nodig is.

### API-authenticatie {#api-authentication}

De integratie gebruikt de WPMU DEV API-sleutel die in je WordPress-database is opgeslagen als de optie `wpmudev_apikey`. Deze wordt automatisch ingesteld wanneer je je site verbindt met WPMU DEV.

## Probleemoplossing {#troubleshooting}

### API-verbindingproblemen {#api-connection-issues}
- Controleer of je site correct is verbonden met WPMU DEV
- Controleer of de optie `wpmudev_apikey` is ingesteld in je WordPress-database
- Zorg ervoor dat je WPMU DEV-ledenmaatschap actief is

### SSL-certificaatproblemen {#ssl-certificate-issues}
- WPMU DEV kan enige tijd nodig hebben om SSL-certificaten uit te geven (meestal 5-15 minuten)
- De integratie is geconfigureerd om tot 10 keer te controleren op SSL-certificaten
- Als SSL-certificaten nog steeds niet worden uitgegeven na meerdere pogingen, neem contact op met WPMU DEV-support

### Domein niet toegevoegd {#domain-not-added}
- Controleer de logs van Ultimate Multisite op eventuele foutmeldingen
- Controleer of het domein nog niet is toegevoegd aan WPMU DEV
- Zorg ervoor dat je WPMU DEV-hostingplan het aantal domeinen ondersteunt dat je toevoegt
