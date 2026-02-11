---
title: Closte Integratie
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte Integratie

## Overzicht
Closte is een beheerde WordPress-hostingplatform gebouwd op Google Cloud-infrastructuur. Deze integratie maakt automatische domeinsynchronisatie en SSL-certificaatbeheer mogelijk tussen Ultimate Multisite en Closte.

## Functies
- Automatische domeinsynchronisatie
- SSL-certificaatbeheer
- Ondersteuning voor wildcard-domeinen
- Geen configuratie vereist als het op Closte draait

## Vereisten
De volgende constante moet gedefinieerd zijn in uw `wp-config.php`-bestand als u Closte gebruikt:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Deze constante is meestal al gedefinieerd als u op Closte host.

## Installatie-instructies

### 1. Verifieer uw Closte API-sleutel
Als u op Closte host, moet de constante `CLOSTE_CLIENT_API_KEY` al gedefinieerd zijn in uw `wp-config.php`-bestand. U kunt dit verifiëren door uw `wp-config.php`-bestand te controleren.

### 2. Schakel de integratie in
1. In uw WordPress-beheer, ga naar Ultimate Multisite > Instellingen
2. Navigeer naar het tabblad "Domain Mapping"
3. Scroll naar beneden naar "Host Integrations"
4. Schakel de Closte-integratie in
5. Klik op "Save Changes"

## Hoe het werkt
Wanneer een domein wordt toegewezen in Ultimate Multisite:

1. De integratie stuurt een verzoek naar de API van Closte om het domein aan uw applicatie toe te voegen
2. Closte verzorgt automatisch de provisioning van SSL-certificaten
3. Wanneer een domeinmapping wordt verwijderd, verwijdert de integratie het domein van Closte

De integratie werkt ook met de DNS-checkintervalinstelling in Ultimate Multisite, waardoor u kunt configureren hoe vaak het systeem controleert op DNS-propagatie en SSL-certificaatuitgifte.

## Domeinrecordcreatie
Deze integratie zorgt ervoor dat wanneer een site wordt aangemaakt of gedupliceerd, een domeinrecord automatisch wordt aangemaakt. Dit is vooral belangrijk voor de Closte-integratie, omdat de creatie van het domeinrecord de Closte-API triggert om het domein en het SSL-certificaat aan te maken.

## Probleemoplossing

### API-verbindingproblemen
- Verifieer dat uw Closte API-sleutel correct is
- Zorg ervoor dat uw Closte-account de noodzakelijke permissies heeft

### SSL-certificaatproblemen
- Closte kan enige tijd nodig hebben om SSL-certificaten uit te geven (meestal 5-10 minuten)
- Verifieer dat uw domeinen correct verwijzen naar het IP-adres van uw Closte-server
- Controleer de DNS-records voor uw domein om te zorgen dat ze correct zijn geconfigureerd

### Domein niet toegevoegd
- Controleer de logs van Ultimate Multisite op foutmeldingen
- Verifieer dat het domein nog niet aan Closte is toegevoegd
- Zorg ervoor dat de DNS-records van uw domein correct zijn geconfigureerd

### DNS-checkinterval
- Als SSL-certificaten te lang duren om uit te geven, kunt u het DNS-checkinterval aanpassen in de instellingen voor Domeinmapping
- De standaardinterval is 300 seconden (5 minuten), maar u kunt het zo laag als 10 seconden instellen voor snellere controles tijdens testen
