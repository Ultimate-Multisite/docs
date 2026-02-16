---
title: Closte-integration
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte-integration

## Översikt
Closte är en hanterad WordPress-värdplattform byggd på Google Cloud-infrastruktur. Denna integration möjliggör automatisk domänsynkronisering och SSL-certifikathantering mellan Ultimate Multisite och Closte.

## Funktioner
- Automatisk domänsynkronisering
- SSL-certifikathantering
- Stöd för wildcard-domäner
- Ingen konfiguration krävs om du kör på Closte

## Krav
Följande konstant måste definieras i din `wp-config.php`-fil om du använder Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Denna konstant är vanligtvis redan definierad om du har ditt webbhotell på Closte.

## Installationsanvisningar

### 1. Verifiera din Closte API-nyckel

Om du har ditt webbhotell på Closte bör konstanten `CLOSTE_CLIENT_API_KEY` redan vara definierad i din `wp-config.php`-fil. Du kan verifiera detta genom att kontrollera din `wp-config.php`-fil.

### 2. Aktivera integrationen

1. I din WordPress-admin, gå till Ultimate Multisite > Settings
2. Navigera till fliken "Domain Mapping"
3. Scrolla ner till "Host Integrations"
4. Aktivera Closte-integrationen
5. Klicka på "Save Changes"

## Hur det fungerar

När en domän mappas i Ultimate Multisite:

1. Integrationen skickar en begäran till Clostes API för att lägga till domänen i din applikation
2. Closte hanterar automatiskt SSL-certifikatutfärdande
3. När en domänmappning tas bort kommer integrationen att ta bort domänen från Closte

Integrationen fungerar också med inställningen för DNS-kontrollintervall i Ultimate Multisite, vilket låter dig konfigurera hur ofta systemet kontrollerar DNS-propagering och SSL-certifikatutfärdande.

## Skapande av domänpost

Denna integration säkerställer att när en webbplats skapas eller dupliceras, skapas en domänpost automatiskt. Detta är särskilt viktigt för Closte-integrationen, eftersom skapandet av domänposten triggar Closte API att skapa domänen och SSL-certifikatet.

## Felsökning

### Problem med API-anslutning
- Verifiera att din Closte API-nyckel är korrekt
- Säkerställ att ditt Closte-konto har nödvändiga behörigheter

### Problem med SSL-certifikat
- Closte kan behöva lite tid för att utfärda SSL-certifikat (vanligtvis 5-10 minuter)
- Verifiera att dina domäner pekar korrekt mot din Closte-servers IP-adress
- Kontrollera DNS-posterna för din domän för att säkerställa att de är korrekt konfigurerade

### Domän läggs inte till
- Kontrollera Ultimate Multisite-loggarna för eventuella felmeddelanden
- Verifiera att domänen inte redan är tillagd i Closte
- Säkerställ att din domäns DNS-poster är korrekt konfigurerade

### DNS-kontrollintervall
- Om SSL-certifikat tar för lång tid att utfärda kan du justera DNS-kontrollintervallet i Domain Mapping-inställningarna
- Standardintervallet är 300 sekunder (5 minuter), men du kan ställa in det så lågt som 10 sekunder för snabbare kontroll under testning
