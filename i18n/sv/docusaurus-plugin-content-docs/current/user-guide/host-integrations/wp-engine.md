---
title: WP Engine-integration
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine-integrering

## Översikt
WP Engine är en premiumplattform för hanterad WordPress-hosting som erbjuder optimerad prestanda, säkerhet och skalbarhet för WordPress-sajter. Den här integreringen möjliggör automatisk domänsynkronisering mellan Ultimate Multisite och WP Engine.

## Funktioner
- Automatisk domänsynkronisering
- Stöd för subdomäner i multisite-installationer
- Sömlös integrering med WP Engines befintliga system

## Krav
Integreringen upptäcker automatiskt om du hostar på WP Engine och använder det inbyggda WP Engine API:et. Ingen ytterligare konfiguration krävs om WP Engine-pluginet är aktivt och korrekt konfigurerat.

Om du behöver konfigurera integreringen manuellt kan du dock definiera en av dessa konstanter i din `wp-config.php`-fil:

```php
define('WPE_APIKEY', 'your_api_key'); // Rekommenderad metod
// ELLER
define('WPE_API', 'your_api_key'); // Alternativ metod
```

## Installationsanvisningar

### 1. Verifiera WP Engine-pluginet

Om du hostar på WP Engine bör WP Engine-pluginet redan vara installerat och aktiverat. Kontrollera att:

1. WP Engine-pluginet är aktivt
2. Filen `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` finns

### 2. Aktivera integreringen

1. I din WordPress-admin, gå till Ultimate Multisite > Settings
2. Navigera till fliken "Domain Mapping"
3. Scrolla ner till "Host Integrations"
4. Aktivera WP Engine-integreringen
5. Klicka på "Save Changes"

## Så fungerar det

### Domänsynkronisering

När en domän mappas i Ultimate Multisite:

1. Integreringen använder WP Engine API:et för att lägga till domänen i din WP Engine-installation
2. WP Engine hanterar domänkonfigurationen och utfärdandet av SSL-certifikat
3. När en domänmappning tas bort kommer integreringen att ta bort domänen från WP Engine

### Stöd för subdomäner

För multisite-installationer med subdomäner:

1. Integreringen lägger till varje subdomän i WP Engine när en ny sajt skapas
2. WP Engine hanterar subdomänkonfigurationen
3. När en sajt tas bort kommer integreringen att ta bort subdomänen från WP Engine

## Viktigt att veta

### Wildcard-domäner

För multisite-installationer med subdomäner rekommenderas att du kontaktar WP Engines support för att begära en wildcard-domänkonfiguration. Detta gör att alla subdomäner fungerar automatiskt utan att du behöver lägga till var och en manuellt.

### SSL-certifikat

WP Engine hanterar automatiskt utfärdande och förnyelse av SSL-certifikat för alla domäner som läggs till via den här integreringen. Ingen ytterligare konfiguration krävs.

## Felsökning

### Problem med API-anslutning
- Kontrollera att WP Engine-pluginet är aktivt och korrekt konfigurerat
- Om du har definierat API-nyckeln manuellt, kontrollera att den är korrekt
- Kontakta WP Engines support om du har problem med API:et

### Domän läggs inte till
- Kontrollera Ultimate Multisite-loggarna för eventuella felmeddelanden
- Verifiera att domänen inte redan är tillagd i WP Engine
- Säkerställ att ditt WP Engine-abonnemang stöder antalet domäner du vill lägga till

### Problem med subdomäner
- Om subdomäner inte fungerar, kontakta WP Engines support för att begära en wildcard-domänkonfiguration
- Kontrollera att dina DNS-inställningar är korrekt konfigurerade för huvuddomänen och subdomänerna
